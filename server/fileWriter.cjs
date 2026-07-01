const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const port = 8787;

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function json(res, status, body) {
  res.writeHead(status, {
    "content-type": "application/json",
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "content-type"
  });
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      if (data.length > 1_000_000) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(data ? JSON.parse(data) : {}));
    req.on("error", reject);
  });
}

function turnBlock(turn) {
  const role = turn.role === "user" ? "USER" : "SYSTEM";
  const meta =
    turn.role === "system"
      ? `<!-- prompt_family: ${turn.promptFamily || "circumstantial"} -->\n<!-- pass: ${turn.pass || 0} -->`
      : "";
  return ["---", `## [${turn.id}] ${role} - ${turn.timestamp}`, `<!-- state: ${turn.state} -->`, meta, "", turn.content, ""]
    .filter(Boolean)
    .join("\n");
}

function writeTurn(conversationId, turn) {
  const convDir = path.join(root, "conversations", conversationId);
  const turnsDir = path.join(convDir, "turns");
  const clarificationsDir = path.join(convDir, "clarifications");
  const critiquesDir = path.join(convDir, "critiques");
  const nextChosenDir = path.join(convDir, "next_step_prompts", "chosen");
  const nextIgnoredDir = path.join(convDir, "next_step_prompts", "ignored");
  const canonicalDir = path.join(convDir, "canonical_prompts");
  [convDir, turnsDir, clarificationsDir, critiquesDir, nextChosenDir, nextIgnoredDir, canonicalDir].forEach(ensureDir);

  const suffix = turn.role === "user" ? "input" : "response";
  fs.writeFileSync(path.join(turnsDir, `${turn.id}_${suffix}.md`), turn.content, "utf8");
  fs.appendFileSync(path.join(convDir, `${conversationId}_conversation.md`), `${turnBlock(turn)}\n`, "utf8");

  if (turn.role === "system") {
    const critiquePath = path.join(critiquesDir, `${turn.id}_critique_template.md`);
    const canonicalPath = path.join(canonicalDir, `${turn.id}_canonical_attempt.md`);
    const nextPromptPath = path.join(nextIgnoredDir, `${turn.id}_next_prompt_skipped.md`);
    fs.writeFileSync(critiquePath, turn.critiqueTemplate || "", "utf8");
    fs.writeFileSync(canonicalPath, turn.canonicalPrompt || "", "utf8");
    fs.writeFileSync(nextPromptPath, turn.suggestedNextPrompt || "", "utf8");
    ensureDir(path.join(root, "critique_templates", conversationId));
    fs.writeFileSync(path.join(root, "critique_templates", conversationId, `${turn.id}_critique.md`), turn.critiqueTemplate || "", "utf8");
    if (Array.isArray(turn.questions) && turn.questions.length) {
      const questionText = turn.questions
        .map((question, index) => {
          return [
            `## ${index + 1}. ${question.prompt}`,
            "",
            ...question.options.map((option) => `- [ ] ${option}`),
            "- [ ] Other: ",
            "",
            `Reason: ${question.reason}`
          ].join("\n");
        })
        .join("\n\n");
      fs.writeFileSync(path.join(clarificationsDir, `${turn.id}_questions.md`), questionText, "utf8");
      ensureDir(path.join(root, "clarification_templates", conversationId));
      fs.writeFileSync(path.join(root, "clarification_templates", conversationId, `${turn.id}_questions.md`), questionText, "utf8");
    }
  }
}

function writeClarificationAnswer(conversationId, questionId, answers) {
  const convDir = path.join(root, "conversations", conversationId);
  const clarificationsDir = path.join(convDir, "clarifications");
  ensureDir(clarificationsDir);
  ensureDir(path.join(root, "clarification_templates", conversationId));
  const content = [`# Clarification Answer`, "", `Question: ${questionId}`, "", ...answers.map((answer) => `- ${answer}`), ""].join("\n");
  const filename = `${conversationId}_${questionId}_answers.md`;
  fs.writeFileSync(path.join(clarificationsDir, filename), content, "utf8");
  fs.writeFileSync(path.join(root, "clarification_templates", conversationId, filename), content, "utf8");
}

function slug(value) {
  return String(value || "untitled")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64) || "untitled";
}

function readSavedRoles() {
  const dir = path.join(root, "saved_roles");
  ensureDir(dir);
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      try {
        return JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
      } catch {
        return null;
      }
    })
    .filter(Boolean)
    .sort((a, b) => String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")));
}

function writeSavedRole(role) {
  const dir = path.join(root, "saved_roles");
  ensureDir(dir);
  const now = new Date().toISOString();
  const id = role.id || `${slug(role.name || role.role)}-${Date.now()}`;
  const record = {
    id,
    name: role.name || role.role || "Saved role",
    role: role.role || role.name || "",
    family: role.family || "circumstantial",
    source: role.source || "manual",
    createdAt: role.createdAt || now,
    updatedAt: now
  };
  fs.writeFileSync(path.join(dir, `${id}.json`), JSON.stringify(record, null, 2), "utf8");
  fs.writeFileSync(
    path.join(dir, `${id}.md`),
    [`# ${record.name}`, "", `Role: ${record.role}`, `Family: ${record.family}`, `Source: ${record.source}`, `Updated: ${record.updatedAt}`, ""].join("\n"),
    "utf8"
  );
  return record;
}

function writeAcceptedPrompt(conversationId, payload) {
  const convDir = path.join(root, "conversations", conversationId);
  const acceptedDir = path.join(convDir, "accepted_prompts");
  const globalDir = path.join(root, "accepted_prompts");
  ensureDir(acceptedDir);
  ensureDir(globalDir);
  const now = new Date().toISOString();
  const id = payload.id || `${conversationId}.${Date.now()}`;
  const family = payload.family || "circumstantial";
  const content = [
    `# Accepted Prompt ${id}`,
    "",
    `Accepted: ${now}`,
    `Conversation: ${conversationId}`,
    `Family: ${family}`,
    `Role: ${payload.role || ""}`,
    "",
    "## Prompt",
    "",
    payload.prompt || "",
    "",
    "## Generated Response",
    "",
    payload.response || "",
    "",
    "## Next Action",
    "",
    payload.nextAction || "",
    "",
    "## Next Prompt",
    "",
    payload.nextPrompt || "",
    ""
  ].join("\n");
  const filename = `${id}_accepted_prompt.md`;
  fs.writeFileSync(path.join(acceptedDir, filename), content, "utf8");
  fs.writeFileSync(path.join(globalDir, filename), content, "utf8");
  fs.appendFileSync(path.join(convDir, `${conversationId}_accepted_conversation.md`), `${content}\n---\n`, "utf8");
  return { id, path: `conversations/${conversationId}/accepted_prompts/${filename}` };
}

async function generateWithGemini(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      provider: "local_deterministic",
      text: "",
      note: "GEMINI_API_KEY is not set; local deterministic refinement remains active."
    };
  }
  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-goog-api-key": apiKey
    },
    body: JSON.stringify({
      system_instruction: {
        parts: [
          {
            text:
              "You are Prompt Refinery's matter-of-fact advisor. Return concise prompt refinement guidance. Preserve free-first, token-efficient behavior."
          }
        ]
      },
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        temperature: 0.35,
        maxOutputTokens: 4096
      }
    })
  });
  if (!response.ok) {
    const errorText = await response.text();
    return { provider: "gemini", text: "", note: `Gemini request failed: ${response.status} ${errorText.slice(0, 240)}` };
  }
  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("\n").trim() || "";
  return { provider: "gemini", text, note: "Generated with Gemini 2.5 Flash via GEMINI_API_KEY." };
}

function scaffoldTemplates() {
  const families = [
    "research_brief",
    "execution_plan",
    "writing_content",
    "outreach_persuasion",
    "debugging_troubleshooting"
  ];
  for (const family of families) {
    const dir = path.join(root, "prompt_library", family);
    ensureDir(dir);
    const file = path.join(dir, "template_v1.md");
    if (!fs.existsSync(file)) {
      fs.writeFileSync(
        file,
        `# ${family} template v1\n\n## Purpose\nRefine rough intent into a paste-ready ${family} prompt.\n\n## Required sections\n- Refined understanding\n- Clarification questions\n- Canonical execution prompt\n- Critique template\n- Suggested next prompt\n\n## Examples\n- Strong: specific goal, constraints, success criteria.\n- Weak: vague request with no audience or finish line.\n- Edge-case: conflicting constraints or missing source material.\n`,
        "utf8"
      );
    }
  }
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") return json(res, 200, {});
  if (req.url === "/api/provider" && req.method === "GET") {
    return json(res, 200, {
      defaultProvider: "local_deterministic",
      geminiAvailable: Boolean(process.env.GEMINI_API_KEY),
      paidOpenAiRequired: false
    });
  }
  if (req.url === "/api/roles" && req.method === "GET") {
    return json(res, 200, { roles: readSavedRoles() });
  }
  if (req.url === "/api/roles" && req.method === "POST") {
    const body = await readBody(req);
    return json(res, 200, { ok: true, role: writeSavedRole(body.role || {}) });
  }
  if (req.url === "/api/accepted-prompts" && req.method === "POST") {
    const body = await readBody(req);
    const result = writeAcceptedPrompt(body.conversationId || "0000", body);
    return json(res, 200, { ok: true, ...result });
  }
  if (req.url === "/api/scaffold" && req.method === "POST") {
    scaffoldTemplates();
    ensureDir(path.join(root, "session_log"));
    ensureDir(path.join(root, "saved_roles"));
    ensureDir(path.join(root, "accepted_prompts"));
    fs.writeFileSync(
      path.join(root, "session_log", "0000_session.md"),
      `# Session 0000\n\nStarted: ${new Date().toISOString()}\nProvider: local deterministic, Gemini optional via GEMINI_API_KEY.\n`,
      "utf8"
    );
    return json(res, 200, { ok: true });
  }
  if (req.url === "/api/ai/generate" && req.method === "POST") {
    const body = await readBody(req);
    const result = await generateWithGemini(body.prompt || "");
    return json(res, 200, result);
  }
  if (req.url === "/api/turns" && req.method === "POST") {
    const body = await readBody(req);
    writeTurn(body.conversationId || "0000", body.turn);
    return json(res, 200, { ok: true });
  }
  if (req.url === "/api/clarifications/answer" && req.method === "POST") {
    const body = await readBody(req);
    writeClarificationAnswer(body.conversationId || "0000", body.questionId || "unknown", body.answers || []);
    return json(res, 200, { ok: true });
  }
  json(res, 404, { error: "Not found" });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Prompt Refinery file writer API listening at http://127.0.0.1:${port}`);
});
