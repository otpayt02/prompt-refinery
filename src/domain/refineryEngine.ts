import type { ClarificationQuestion, FewShotExample, OutputBlock, OutputKind, PromptFamily, RefineryModeConfig, RefineryOutput } from "./types";
import { classifyPrompt, promptFamilies } from "./promptFamilies";

const concise = (value: string) => value.trim().replace(/\s+/g, " ");
export type ClarificationAnswers = Record<string, string[]>;

const defaultRefineryMode: RefineryModeConfig = {
  kind: "prompt_output",
  label: "Prompt Output",
  description: "Turn rough intent into a canonical prompt or package."
};

function getOutputKind(family: PromptFamily): OutputKind {
  return [
    "job_posting_to_proposal_package",
    "product_idea_to_mvp_spec",
    "spec_to_build_plan",
    "portfolio_idea_to_demo_plan"
  ].includes(family)
    ? "package"
    : "prompt";
}

function block(
  id: string,
  type: OutputBlock["type"],
  title: string,
  summary: string,
  content: string,
  pinned = true
): OutputBlock {
  return {
    id,
    type,
    title,
    summary,
    content,
    expanded: id === "proposal" || id === "final_package",
    removable: id !== "final_package",
    regeneratable: true,
    askMoreEnabled: true,
    pinned,
    children: []
  };
}

function example(
  id: string,
  family: PromptFamily,
  title: string,
  purpose: string,
  inputExample: string,
  outputExample: string,
  whyItMatters: string,
  tags: string[]
): FewShotExample {
  return {
    id,
    title,
    purpose,
    requestFamily: family,
    inputExample,
    outputExample,
    whyItMatters,
    tags,
    source: "generated",
    enabled: true,
    pinned: id.includes("structure") || id.includes("proposal"),
    expanded: false
  };
}

function buildFewShotExamples(family: PromptFamily, input: string, outputKind: OutputKind): FewShotExample[] {
  if (family === "job_posting_to_proposal_package") {
    return [
      example(
        "proposal_outcome",
        family,
        "Outcome-First Proposal",
        "Shapes the proposal around the client's result instead of generic qualifications.",
        "Client needs an automation dashboard for recurring reporting.",
        "Open with the reporting bottleneck, propose a small dashboard prototype, map experience to requirements, then ask for one scope-confirming call.",
        "Proposal mode needs persuasion examples so the output sounds useful and specific, not like a cover letter.",
        ["proposal", "client", "outcome"]
      ),
      example(
        "prototype_bridge",
        family,
        "Prototype Bridge",
        "Shows how to convert a job post into a credibility-building prototype idea.",
        "Posting asks for an AI workflow tool but does not define the UI.",
        "Prototype a one-screen workflow inbox with intake, classification, status, and export so the client can see the proposed solution quickly.",
        "A prototype example helps the package produce something concrete the user can reference in the proposal.",
        ["prototype", "portfolio", "proof"]
      ),
      example(
        "skills_map",
        family,
        "Qualifications Map",
        "Keeps the skills section honest and mapped to the posting.",
        "Requirement: API integrations, automation, and clean dashboard UI.",
        "Map each requirement to proof, confidence, missing context, and how to address gaps without overstating experience.",
        "This prevents the generated package from making unsupported claims.",
        ["skills", "trust", "requirements"]
      )
    ];
  }

  if (outputKind === "package") {
    return [
      example(
        "package_structure",
        family,
        "Package Structure",
        "Demonstrates how a package should separate summary, plan, spec, and next action.",
        "I want to turn this idea into something buildable.",
        "Return blocks for summary, MVP/spec, prototype, build steps, risks, and final package.",
        "Package modes need examples that preserve block boundaries and avoid one long answer.",
        ["blocks", "structure", "mvp"]
      ),
      example(
        "verification_path",
        family,
        "Verification Path",
        "Forces every package to include proof that the output worked.",
        "Build a small app workflow.",
        "Each build step ends with a browser check, command, artifact, or acceptance condition.",
        "Verification examples reduce vague plans and make the output executable.",
        ["verification", "execution", "quality"]
      )
    ];
  }

  return [
    example(
      "prompt_structure",
      family,
      "Complete Prompt Structure",
      "Shapes a paste-ready prompt with role, goal, constraints, output contract, and next action.",
      "I want an AI to help me build a portfolio automation project.",
      "You are a senior product engineer. Clarify the goal, define the MVP, return a step-by-step plan, include acceptance criteria, and give the next prompt.",
      "Prompt mode needs a structural example so the generated prompt reduces back-and-forth.",
      ["prompt", "structure", "execution"]
    ),
    example(
      "cost_control",
      family,
      "Cost-Aware Prompting",
      "Shows how to include token, quota, and free-first constraints without overcomplicating the prompt.",
      "I need the best answer but want to avoid wasting API quota.",
      "Use concise reasoning first, ask only blocking questions, prefer local/free options when possible, and separate optional expansions.",
      "This matches the product's goal of better AI results with fewer tokens.",
      ["cost", "quota", "efficiency"]
    ),
    example(
      "next_pass",
      family,
      "Next-Pass Loop",
      "Demonstrates how the AI should return the next action and a prompt for the next pass.",
      "After I finish the next action, I need to continue the workflow.",
      "Return the next action, why it is next, the action after that, and the exact next prompt to give back.",
      "This keeps the workflow continuous without forcing the user to invent follow-up prompts.",
      ["next-pass", "workflow", "continuity"]
    )
  ];
}

function buildCanonicalPackage(family: PromptFamily, input: string, role: string, answerLines: string[]): OutputBlock[] {
  const known = answerLines.length ? `\n\nKnown clarification answers:\n${answerLines.join("\n")}` : "";
  if (family === "job_posting_to_proposal_package") {
    return [
      block("posting_summary", "summary", "Posting Summary", "Condenses the job post into the buyer problem and success target.", `Summarize the posting as a client problem, not just a list of tasks.\n\nSource intake:\n${input}${known}`),
      block("requirements", "requirements", "Requirements", "Separates explicit requirements from implied expectations.", "Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly."),
      block("proposal", "proposal", "Proposal Draft", "A persuasive response that connects your capability to the client outcome.", `Draft a concise proposal from the perspective of ${role}. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.`),
      block("prototype", "prototype", "Prototype Idea", "A small demo concept to reference in the proposal.", "Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see."),
      block("mvp_spec", "product_spec", "MVP Spec", "The smallest buildable version of the proposed solution.", "Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path."),
      block("skills_map", "skills_map", "Skills / Qualifications Map", "Maps posting requirements to proof and gaps.", "Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly."),
      block("step_plan", "step_plan", "Step-by-Step Plan", "A fast execution path after the client responds.", "List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points."),
      block("follow_up", "next_action", "Follow-up Questions", "Questions that reduce proposal risk without creating friction.", "Ask only questions that materially change scope, timeline, budget, access, or success criteria."),
      block("final_package", "deliverable", "Final Proposal Package", "Pinned source-of-truth package assembled from the best blocks.", "Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.")
    ];
  }

  if (family === "product_idea_to_mvp_spec") {
    return [
      block("idea_summary", "summary", "Product Idea Summary", "Clarifies the user, pain, and outcome.", `Turn this product idea into a concrete user problem and success condition:\n${input}${known}`),
      block("mvp_spec", "product_spec", "MVP Spec", "Defines the smallest useful version.", "Define first user, primary workflow, key screens, data model, non-goals, and acceptance criteria."),
      block("prototype", "prototype", "Prototype Plan", "Shows what to build first for proof.", "Describe the quickest prototype that proves the core workflow and can be shown in a portfolio."),
      block("step_plan", "step_plan", "Build Workflow", "Orders the implementation steps.", "Break the MVP into dependency-ordered steps with verification after each milestone."),
      block("final_package", "deliverable", "Final MVP Package", "Pinned package for execution.", "Assemble the product summary, MVP spec, prototype plan, and build workflow into one action-ready package.")
    ];
  }

  if (family === "spec_to_build_plan") {
    return [
      block("spec_summary", "summary", "Spec Summary", "Restates the target build.", `Summarize this spec into buildable requirements:\n${input}${known}`),
      block("requirements", "requirements", "Requirements Map", "Separates must-have, should-have, and unknowns.", "Map requirements by priority, dependency, risk, and verification method."),
      block("step_plan", "step_plan", "Build Workflow", "Turns the spec into implementation order.", "Create a staged implementation plan with files/modules, tests, and acceptance checks."),
      block("final_package", "deliverable", "Final Build Package", "Pinned source-of-truth build plan.", "Assemble the requirements map, build workflow, risks, and verification plan.")
    ];
  }

  return [
    block("demo_story", "summary", "Demo Story", "Explains what the portfolio project proves.", `Turn this portfolio idea into a reviewer-visible story:\n${input}${known}`),
    block("prototype", "prototype", "Prototype Plan", "Defines the smallest impressive demo.", "Identify the first screen, interaction, data, and result a reviewer should see."),
    block("mvp_spec", "product_spec", "Implementation Spec", "Makes the demo buildable.", "Define screens, components, state, data model, and acceptance criteria."),
    block("step_plan", "step_plan", "Build Plan", "Orders the work.", "Break the demo into build phases with verification and polish passes."),
    block("final_package", "deliverable", "Final Portfolio Package", "Pinned source of truth for the project.", "Assemble demo story, prototype plan, implementation spec, and build plan.")
  ];
}

export function inferAdvisorRole(input: string, override: string): string {
  if (override.trim()) return override.trim();
  const text = input.toLowerCase();
  if (text.includes("portfolio")) return "Portfolio project strategist and senior full-stack engineer";
  if (text.includes("automation")) return "Automation architect and cost-aware AI workflow advisor";
  if (text.includes("business") || text.includes("sell")) return "Practical product strategist and conversion copy advisor";
  if (text.includes("debug") || text.includes("error")) return "Debugging lead focused on reproduction, evidence, and minimal fixes";
  return "Matter-of-fact prompt systems advisor";
}

function hasAny(text: string, words: string[]) {
  return words.some((word) => text.includes(word));
}

function addIfMissing(
  questions: ClarificationQuestion[],
  text: string,
  id: string,
  missingSignals: string[],
  question: Omit<ClarificationQuestion, "id">
) {
  if (!hasAny(text, missingSignals)) {
    questions.push({ id, ...question });
  }
}

export function buildQuestions(input: string, family = classifyPrompt(input)): ClarificationQuestion[] {
  const text = input.toLowerCase();
  const questions: ClarificationQuestion[] = [];

  if (family === "analysis") {
    addIfMissing(questions, text, "analysis_material", ["source", "file", "text", "material", "data"], {
      prompt: "What material should the AI analyze?",
      options: ["A pasted text", "A file or repo", "A conversation", "A comparison set"],
      reason: "Analysis prompts need a clear object of analysis or the model will invent its own target."
    });
    addIfMissing(questions, text, "analysis_lens", ["risk", "quality", "summary", "compare", "argument", "decision"], {
      prompt: "What lens should the analysis use?",
      options: ["Find risks", "Summarize clearly", "Compare options", "Extract decisions"],
      reason: "The lens controls whether the answer is a summary, audit, critique, or decision aid."
    });
  }

  if (family === "product_spec") {
    addIfMissing(questions, text, "product_user", ["user", "customer", "audience", "portfolio", "reviewer"], {
      prompt: "Who must find this product useful first?",
      options: ["Me in daily use", "Portfolio reviewers", "A paying customer", "A specific internal workflow"],
      reason: "Product prompts improve when the first real user is explicit."
    });
    addIfMissing(questions, text, "mvp_boundary", ["mvp", "first version", "minimum", "scope", "prototype"], {
      prompt: "What should the first version prove?",
      options: ["The core workflow works", "It looks portfolio-ready", "It saves time immediately", "It can become a business"],
      reason: "This prevents the prompt from designing a bloated app instead of a useful first build."
    });
  }

  if (family === "research_brief") {
    addIfMissing(questions, text, "research_decision", ["decide", "choose", "prove", "validate", "answer"], {
      prompt: "What decision should the research support?",
      options: ["Whether to build", "Which tool to use", "Market/customer demand", "Technical feasibility"],
      reason: "Research without a decision target turns into generic information gathering."
    });
    addIfMissing(questions, text, "source_standard", ["source", "citation", "evidence", "official", "paper"], {
      prompt: "How strict should the evidence standard be?",
      options: ["Official docs only", "Primary sources preferred", "Recent web sources", "Broad scan is okay"],
      reason: "The prompt should tell the model what counts as acceptable evidence."
    });
  }

  if (family === "execution_plan") {
    addIfMissing(questions, text, "timebox", ["today", "week", "deadline", "time", "hour"], {
      prompt: "What timebox should the plan fit?",
      options: ["One focused session", "Today", "This week", "No timebox yet"],
      reason: "Execution plans need a realistic work container."
    });
    addIfMissing(questions, text, "deliverable", ["deliverable", "ship", "artifact", "done", "finish"], {
      prompt: "What should exist at the end of the plan?",
      options: ["Running app", "Saved document", "GitHub PR", "Decision and next steps"],
      reason: "A concrete deliverable makes the plan actionable instead of inspirational."
    });
  }

  if (family === "writing_content") {
    addIfMissing(questions, text, "writing_audience", ["audience", "reader", "customer", "viewer"], {
      prompt: "Who is reading this?",
      options: ["General audience", "Portfolio reviewer", "Potential customer", "Technical reader"],
      reason: "Audience changes vocabulary, structure, and how much explanation the prompt should request."
    });
    addIfMissing(questions, text, "writing_tone", ["tone", "voice", "style", "formal", "casual"], {
      prompt: "What tone should the writing have?",
      options: ["Clear and direct", "Persuasive", "Technical but readable", "Warm and conversational"],
      reason: "Tone should be specified before drafting, not patched after."
    });
  }

  if (family === "outreach_persuasion") {
    addIfMissing(questions, text, "recipient", ["recipient", "client", "lead", "customer", "hiring", "investor"], {
      prompt: "Who is being persuaded?",
      options: ["Potential client", "Hiring manager", "Existing user", "Cold prospect"],
      reason: "Persuasion depends on the recipient's incentives and objections."
    });
    addIfMissing(questions, text, "desired_action", ["call", "reply", "buy", "book", "signup", "action"], {
      prompt: "What concrete response or commitment do you want from them?",
      options: ["Reply", "Book a call", "Try the product", "Approve the idea"],
      reason: "A prompt with a clear next action produces sharper copy."
    });
  }

  if (family === "debugging_troubleshooting") {
    addIfMissing(questions, text, "failure_signal", ["error", "stack", "console", "log", "screenshot", "fails"], {
      prompt: "What evidence shows the failure?",
      options: ["Console error", "Broken UI behavior", "Test failure", "Server/API failure"],
      reason: "Debug prompts need evidence so the model can isolate causes instead of guessing."
    });
    addIfMissing(questions, text, "repro", ["repro", "steps", "when i", "click", "after"], {
      prompt: "How can the failure be reproduced?",
      options: ["Specific click path", "Command to run", "Input that breaks it", "Intermittent/unknown"],
      reason: "Reproduction steps turn debugging from speculation into inspection."
    });
  }

  if (family === "critique_loop") {
    addIfMissing(questions, text, "critique_standard", ["criteria", "rubric", "standard", "score", "review"], {
      prompt: "What standard should the critique use?",
      options: ["Usefulness", "Technical correctness", "Portfolio quality", "Business potential"],
      reason: "Critique needs a standard or it becomes generic preference."
    });
    addIfMissing(questions, text, "critique_action", ["fix", "revise", "rank", "prioritize", "next"], {
      prompt: "What should happen after the critique?",
      options: ["Rewrite it", "List fixes", "Prioritize issues", "Decide whether to continue"],
      reason: "The critique should lead directly to a usable next action."
    });
  }

  if (family === "circumstantial") {
    addIfMissing(questions, text, "situation_context", ["because", "context", "situation", "currently", "trying"], {
      prompt: "What situation is creating this need?",
      options: ["Starting something new", "Choosing between options", "Fixing a confusing process", "Preparing to ask another AI"],
      reason: "Circumstantial prompts need situational context more than a template category."
    });
    addIfMissing(questions, text, "output_shape", ["format", "list", "prompt", "plan", "table"], {
      prompt: "What shape should the answer take?",
      options: ["Prompt to paste", "Step-by-step plan", "Comparison table", "Short recommendation"],
      reason: "Output shape prevents the model from choosing an inconvenient format."
    });
  }

  if (!hasAny(text, ["cost", "token", "quota", "free", "budget"])) {
    questions.push({
      id: "cost_control",
      prompt: "How much should this optimize for cost, tokens, and quota?",
      options: ["Free/local first", "Balanced", "Quality first", "Ask before expensive steps"],
      reason: "Your app is meant to help get better AI results without wasting quota."
    });
  }
  return questions.slice(0, 3);
}

function formatAnswers(answers: ClarificationAnswers) {
  const labels: Record<string, string> = {
    success_metric: "Success condition",
    audience: "Audience",
    cost_control: "Cost and quota posture",
    analysis_material: "Analysis material",
    analysis_lens: "Analysis lens",
    product_user: "First useful audience",
    mvp_boundary: "MVP proof",
    research_decision: "Research decision",
    source_standard: "Evidence standard",
    timebox: "Plan timebox",
    deliverable: "Plan deliverable",
    writing_audience: "Writing audience",
    writing_tone: "Writing tone",
    recipient: "Recipient",
    desired_action: "Desired action",
    failure_signal: "Failure evidence",
    repro: "Reproduction path",
    critique_standard: "Critique standard",
    critique_action: "Critique action",
    situation_context: "Situation context",
    output_shape: "Output shape",
    response_goal: "Response goal",
    response_tone: "Response tone",
    response_length: "Response length",
    custom_mode_fit: "Custom mode fit"
  };
  return Object.entries(answers)
    .filter(([, values]) => values.length > 0)
    .map(([id, values]) => `- ${labels[id] || id}: ${values.join(", ")}`);
}

function buildModeQuestions(mode: RefineryModeConfig, text: string): ClarificationQuestion[] {
  if (mode.kind === "response_refinement") {
    const questions: ClarificationQuestion[] = [];
    addIfMissing(questions, text, "response_goal", ["persuade", "explain", "apologize", "decline", "negotiate", "summarize", "reply"], {
      prompt: "What should the improved response accomplish?",
      options: ["Be clearer", "Sound more professional", "Persuade without pressure", "Answer with fewer words"],
      reason: "Response refinement works best when the success target is explicit."
    });
    addIfMissing(questions, text, "response_tone", ["tone", "friendly", "direct", "warm", "formal", "casual"], {
      prompt: "What tone should the refined response use?",
      options: ["Direct and calm", "Warm and helpful", "Confident and concise", "Formal and polished"],
      reason: "Tone is response metadata. It changes the wording without changing the user's intent."
    });
    addIfMissing(questions, text, "response_length", ["short", "concise", "detailed", "long", "brief"], {
      prompt: "How long should the improved response be?",
      options: ["Very short", "Medium", "Detailed", "Skimmable with bullets"],
      reason: "Length controls whether the output should be a quick reply or a complete response package."
    });
    return questions;
  }

  if (mode.kind === "custom") {
    return [
      {
        id: "custom_mode_fit",
        prompt: `Should this run follow the saved "${mode.label}" mode exactly, or adapt it to the current input?`,
        options: ["Adapt to this input", "Follow the mode strictly", "Prioritize the fixed context", "Prioritize the desired outcome"],
        reason: "Custom modes can carry fixed context, so the app needs to know whether the current input can override it."
      }
    ];
  }

  return [];
}

function buildRefinedResponse(cleaned: string, role: string, mode: RefineryModeConfig, answerLines: string[]) {
  const tone = mode.tone || "matter-of-fact, helpful, and direct";
  const length = mode.length || "complete but not padded";
  const audience = mode.audience || "the intended reader";
  const channel = mode.channel || "chat or message";
  return [
    "Refined Response:",
    "",
    `Audience: ${audience}`,
    `Channel: ${channel}`,
    `Tone: ${tone}`,
    `Length: ${length}`,
    `Advisor role used: ${role}`,
    ...(answerLines.length ? ["", "Applied response criteria:", ...answerLines] : []),
    "",
    "Response:",
    cleaned,
    "",
    "Improved version:",
    `Here is a clearer ${length} version for ${audience}:`,
    "",
    cleaned
      .replace(/\bi want\b/gi, "I want")
      .replace(/\bi'm\b/gi, "I'm")
      .replace(/\bi\b/g, "I")
      .trim(),
    "",
    "Response metadata used:",
    `- Purpose: ${mode.desiredOutcome || "make the response easier to understand and act on"}`,
    `- Tone: ${tone}`,
    `- Role: ${mode.role || role}`,
    `- Length: ${length}`,
    `- Audience: ${audience}`,
    `- Channel: ${channel}`,
    "- Criteria: clarity, intent preservation, reader fit, actionability, and reduced back-and-forth",
    "",
    "Optional variants to request next:",
    "1. Make it shorter without losing meaning.",
    "2. Make it warmer while staying direct.",
    "3. Make it more persuasive without sounding pushy.",
    "4. Turn it into a structured email, text, comment, or project update."
  ].join("\n");
}

function buildCustomModePrompt(cleaned: string, role: string, mode: RefineryModeConfig, answerLines: string[]) {
  return [
    `You are a ${mode.role || role}.`,
    `Mode: ${mode.label}`,
    mode.description,
    "",
    "Fixed context:",
    mode.fixedContext || "No fixed context supplied.",
    "",
    "Desired outcome:",
    mode.desiredOutcome || "Return the most useful artifact for the current input.",
    "",
    "Current input:",
    cleaned,
    ...(answerLines.length ? ["", "Known clarification answers:", ...answerLines] : []),
    "",
    "Mode instructions:",
    mode.rawPrompt || "Infer the best output shape from the current input and return a practical, complete result.",
    "",
    "Return:",
    "1. Refined understanding.",
    "2. The main artifact this custom mode is meant to produce.",
    "3. Constraints, assumptions, and missing information.",
    "4. The next action and next prompt to continue the workflow."
  ].join("\n");
}

export function refinePrompt(
  input: string,
  roleOverride: string,
  showExplanations: boolean,
  answers: ClarificationAnswers = {},
  modeConfig: RefineryModeConfig = defaultRefineryMode
): RefineryOutput {
  const cleaned = concise(input || "Start a new project.");
  const mode = { ...defaultRefineryMode, ...modeConfig };
  const family = classifyPrompt(cleaned);
  const role = mode.role || inferAdvisorRole(cleaned, roleOverride);
  const outputKind = mode.kind === "prompt_output" ? getOutputKind(family) : "prompt";
  const answeredIds = new Set(Object.keys(answers));
  const questions = [...buildModeQuestions(mode, cleaned), ...buildQuestions(cleaned, family)].filter((question) => !answeredIds.has(question.id));
  const familyMeta = promptFamilies[family];
  const state = questions.length ? "clarification_needed" : "ready_for_acceptance";
  const answerLines = formatAnswers(answers);
  const fewShotExamples = buildFewShotExamples(family, cleaned, outputKind);
  const actionSteps = getActionSteps(family);
  const scenarioPrompts = getScenarioPrompts(family);
  const expansionPrompts = getExpansionPrompts(family);
  const specificationChecklist = getSpecificationChecklist(family);
  const chatbotMetadata = getChatbotMetadata(family);
  const nextActionPlan = getNextActionPlan(family, cleaned, questions.length, answerLines.length);
  const bestPracticeChecks = getBestPracticeChecks(family);
  const costNotes = [
    "Prefer local deterministic refinement for early drafting.",
    "Ask the model to be concise before asking it to be exhaustive.",
    "Batch related questions so quota is spent on decisions, not chatter.",
    "Use Gemini via GEMINI_API_KEY only when local refinement is not enough."
  ];
  const principleText = [
    "Router-first classification: identify the prompt family before generating the final prompt.",
    "Clarification minimization: ask only the questions that remove the largest uncertainty.",
    "Acceptance handshake: make the final prompt paste-ready and require exact acceptance before execution.",
    "Role binding: assign the most useful expert role so the model uses the right standards.",
    "Cost-aware prompting: include token, quota, and free-first constraints early."
  ];

  const promptModeCanonicalPrompt = [
    `You are a ${role}.`,
    `The prompt family is ${family} (${familyMeta.use}).`,
    "",
    "Goal:",
    cleaned,
    ...(answerLines.length ? ["", "Known clarification answers:", ...answerLines] : []),
    "",
    "Mission:",
    "Finish this goal in the shortest practical time without skipping the decisions or verification needed for a useful result. Be thorough enough that the next AI or agent can execute without needing the user to restate the goal.",
    "",
    "Operating mode:",
    "- Automatically handle the meta-prompting pattern: I want a prompt that I can paste into an AI assistant to get the intended result.",
    "- Prefer a longer, complete prompt over a short generic prompt.",
    "- Convert vague intent into a concrete execution path.",
    "- Keep the user focused on the end goal, not prompt mechanics.",
    "- Include cost, token, and quota controls when relevant.",
    "",
    "Defined steps to complete the goal:",
    ...actionSteps.map((step, index) => `${index + 1}. ${step}`),
    "",
    "Few-shot examples shaping this output:",
    ...fewShotExamples
      .filter((item) => item.enabled)
      .map((item, index) => [
        `${index + 1}. ${item.title}`,
        `   Input example: ${item.inputExample}`,
        `   Output example: ${item.outputExample}`,
        `   Why it matters: ${item.whyItMatters}`
      ].join("\n")),
    "",
    "Return:",
    "1. Refined understanding of the goal and success criteria.",
    "2. Fastest practical execution plan with numbered steps.",
    "3. Any blocking clarification questions, only if they would materially change the result.",
    "4. The first concrete artifact, answer, plan, fix, draft, or spec needed to move the project forward.",
    "5. Verification steps or acceptance criteria.",
    "6. Scenario follow-up prompts for different situations.",
    "7. Expansion prompts for sections that may need deeper explanation.",
    "",
    "Scenario follow-up prompts to include:",
    ...scenarioPrompts.map((prompt, index) => `${index + 1}. ${prompt}`),
    "",
    "Expansion prompts to include in a separate section:",
    ...expansionPrompts.map((prompt, index) => `${index + 1}. ${prompt}`),
    "",
    "Next action protocol:",
    "1. Return 3 to 5 context-specific next-action options that could reasonably come next.",
    `2. Recommended next action: ${nextActionPlan.nextAction}`,
    `3. Why this action is next: ${nextActionPlan.reason}`,
    `4. Action after that: ${nextActionPlan.actionAfterNext}`,
    "5. Return a next-pass canonical prompt the user can give back after finishing the recommended action.",
    "",
    "Next-action options to consider:",
    ...nextActionPlan.options.map((option, index) => `${index + 1}. ${option}`),
    "",
    "Constraints:",
    "- Stay practical, direct, and focused on the end goal.",
    "- Surface overlooked decisions that could change the outcome.",
    "- Include cost, token, and quota considerations when relevant.",
    "- If agents, skills, repo instructions, or setup should change, say so explicitly.",
    "- If the user needs more explanation, do not bury it in the main answer. Put expandable explanations in a separate section.",
    "- Provide copy-ready prompts for follow-up scenarios.",
    "- Do not execute until the canonical prompt is accepted."
  ].join("\n");

  const canonicalPrompt =
    mode.kind === "response_refinement"
      ? buildRefinedResponse(cleaned, role, mode, answerLines)
      : mode.kind === "custom"
        ? buildCustomModePrompt(cleaned, role, mode, answerLines)
        : promptModeCanonicalPrompt;

  const critiqueTemplate = buildCritiqueTemplate(family, cleaned, answerLines);
  const responseBlueprint = buildResponseBlueprint(family, cleaned, actionSteps, scenarioPrompts, expansionPrompts);
  const canonicalPackage = outputKind === "package" ? buildCanonicalPackage(family, cleaned, role, answerLines) : undefined;
  const nextPackagePatch =
    outputKind === "package"
      ? [
          block(
            "next_patch",
            "next_action",
            "Next Package Patch",
            "Updates the package after the next action is completed.",
            nextActionPlan.nextCanonicalPrompt,
            false
          )
        ]
      : undefined;

  return {
    family,
    requestFamily: family,
    modeKind: mode.kind,
    modeLabel: mode.label,
    modeDescription: mode.description,
    outputKind,
    familyLabel: familyMeta.label,
    familyDescription: familyMeta.use,
    state,
    advisorRole: role,
    refinedUnderstanding:
      mode.kind === "response_refinement"
        ? `This request should be handled as response refinement: reverse-engineer the user's draft into a clearer response while preserving intent, tone, audience fit, length, and actionability.${answerLines.length ? ` The current draft now includes ${answerLines.length} response criteria answer${answerLines.length === 1 ? "" : "s"}.` : ""}`
        : mode.kind === "custom"
          ? `This request should use the custom "${mode.label}" mode: ${mode.description}. The output should respect the mode's fixed context and desired outcome before applying the normal prompt family classification.${answerLines.length ? ` The current draft now includes ${answerLines.length} clarification answer${answerLines.length === 1 ? "" : "s"}.` : ""}`
          : `This request should be handled as ${familyMeta.label.toLowerCase()}: ${familyMeta.use}. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition.${answerLines.length ? ` The current draft now includes ${answerLines.length} clarification answer${answerLines.length === 1 ? "" : "s"}.` : ""}`,
    canonicalPrompt,
    canonicalPackage,
    responseBlueprint,
    actionSteps,
    scenarioPrompts,
    expansionPrompts,
    specificationChecklist,
    chatbotMetadata,
    nextAction: nextActionPlan.nextAction,
    nextActionReason: nextActionPlan.reason,
    actionAfterNext: nextActionPlan.actionAfterNext,
    nextActionOptions: nextActionPlan.options,
    nextCanonicalPrompt: nextActionPlan.nextCanonicalPrompt,
    nextPackagePatch,
    fewShotExamples,
    critiqueTemplate,
    suggestedNextPrompt: questions.length
      ? `Answer the ${mode.kind === "response_refinement" ? "response refinement" : familyMeta.label.toLowerCase()} clarification card, then regenerate the final output.`
      : mode.kind === "response_refinement"
        ? "Copy the refined response, or use critique mode to make it sharper for the recipient."
        : "Copy the final prompt into your AI chat, or use the critique template to revise it first.",
    questions,
    principles: showExplanations ? principleText : [],
    bestPracticeChecks,
    costNotes
  };
}

function getSpecificationChecklist(family: ReturnType<typeof classifyPrompt>) {
  const shared = [
    "End goal and definition of finished",
    "Audience or user of the output",
    "Output format and level of detail",
    "Constraints: time, cost, tools, repo, platform, style, policy, or data limits",
    "Available context: files, links, screenshots, errors, examples, prior decisions",
    "Success criteria and verification method",
    "What to do if information is missing",
    "What not to do or what to avoid"
  ];
  const byFamily: Record<string, string[]> = {
    product_spec: ["Target user", "MVP boundary", "Core user flow", "Data model", "Tech stack", "Demo path", "Portfolio story"],
    debugging_troubleshooting: ["Repro steps", "Expected vs observed behavior", "Error logs", "Recent changes", "Environment", "Verification command"],
    research_brief: ["Decision to support", "Source standard", "Recency requirement", "Citation format", "Confidence level"],
    writing_content: ["Reader", "Tone", "Length", "Voice", "Examples to imitate or avoid", "Call to action"],
    outreach_persuasion: ["Recipient", "Desired action", "Credibility proof", "Objections", "Length and channel"],
    execution_plan: ["Deadline", "Milestones", "Dependencies", "Owner", "Deliverables", "Risk checkpoints"],
    analysis: ["Source material", "Analysis lens", "Comparison criteria", "Depth", "Decision output"],
    critique_loop: ["Rubric", "Severity scale", "What can be changed", "Priority order", "Expected revision format"],
    circumstantial: ["Situation", "Decision pressure", "Output shape", "Known constraints", "Preferred next step"]
  };
  return [...shared, ...(byFamily[family] || [])];
}

function getChatbotMetadata(family: ReturnType<typeof classifyPrompt>) {
  return [
    "Role/persona: the expert stance the assistant should use",
    "Task family: the category that routes the prompt behavior",
    "User goal: the real-world outcome, not just the message text",
    "User profile: skill level, preferences, constraints, and tolerance for detail",
    "Context window inputs: files, screenshots, logs, links, previous turns, and memory",
    "Tool permissions: whether browsing, shell, code edits, image generation, or external APIs are allowed",
    "Output contract: sections, format, length, schema, examples, and final artifact",
    "Interaction policy: ask questions first, proceed with assumptions, or produce options",
    "Cost policy: model/provider preference, token budget, quota limits, free-first behavior",
    "Quality bar: correctness standard, evidence standard, testing, citations, or review criteria",
    "Stop conditions: when the assistant should halt, ask, verify, or mark complete",
    "Fallback behavior: what to do when context is missing, tools fail, or ambiguity remains",
    `Category-specific emphasis: ${promptFamilies[family].use}`
  ];
}

function buildResponseBlueprint(
  family: ReturnType<typeof classifyPrompt>,
  input: string,
  actionSteps: string[],
  scenarioPrompts: string[],
  expansionPrompts: string[]
) {
  return [
    "## Expected AI Response Blueprint",
    "",
    "### 1. Direct Goal Summary",
    `Restate the goal in one or two sentences: ${input}`,
    "",
    "### 2. Fastest Path",
    ...actionSteps.map((step, index) => `${index + 1}. ${step}`),
    "",
    "### 3. Main Output",
    `Produce the ${promptFamilies[family].label.toLowerCase()} artifact, answer, plan, fix, draft, or spec that moves the work forward immediately.`,
    "",
    "### 4. Verification",
    "List exactly how the user or agent can tell whether the answer worked.",
    "",
    "### 5. Follow-up Prompt Menu",
    ...scenarioPrompts.map((prompt, index) => `${index + 1}. ${prompt}`),
    "",
    "### 6. Expand If Needed",
    ...expansionPrompts.map((prompt, index) => `${index + 1}. ${prompt}`)
  ].join("\n");
}

function getBestPracticeChecks(family: ReturnType<typeof classifyPrompt>) {
  const shared = [
    "Define the end goal before asking for implementation.",
    "Ask for assumptions, constraints, and stop conditions.",
    "Request evidence when the answer affects cost, schedule, or architecture."
  ];
  const byFamily: Record<string, string[]> = {
    analysis: ["Name the source material and the analysis lens.", "Ask for findings, evidence, and uncertainty separately."],
    product_spec: ["Identify the first real user and MVP proof.", "Ask for demo path, data model, edge cases, and portfolio story."],
    research_brief: ["Tie research to a decision.", "Specify evidence standard, recency, and source type."],
    execution_plan: ["Force a realistic timebox.", "Make every step produce an observable artifact."],
    writing_content: ["Specify audience, tone, and conversion goal.", "Ask for revision notes, not just final prose."],
    outreach_persuasion: ["Name the recipient and desired next action.", "Ask for objections and credibility proof."],
    debugging_troubleshooting: ["Start with reproduction and evidence.", "Ask for the smallest safe fix and verification command."],
    critique_loop: ["Define the rubric before critiquing.", "Force the critique to produce prioritized edits."],
    circumstantial: ["State the situation and output shape.", "Ask the model to surface hidden assumptions."]
  };
  return [...shared, ...(byFamily[family] || [])];
}

function buildCritiqueTemplate(family: ReturnType<typeof classifyPrompt>, input: string, answerLines: string[]) {
  const specific: Record<string, string[]> = {
    analysis: [
      "### Analysis Target",
      "- Is the source material clearly named?",
      "- Does the prompt ask for evidence-backed findings instead of vague impressions?",
      "",
      "### Lens",
      "- Is the analysis lens correct for this goal?",
      "- Should it prioritize risks, summary, comparison, or decisions?"
    ],
    product_spec: [
      "### Product Usefulness",
      "- Does the prompt define who this is useful for first?",
      "- Does the MVP prove a real behavior, not just a nice interface?",
      "",
      "### Portfolio Value",
      "- Would the resulting build show skill clearly to a reviewer?",
      "- Is there a demo path and a short project story?"
    ],
    research_brief: [
      "### Decision Fit",
      "- Does the research answer a decision, or just collect information?",
      "- Are source standards and recency clear?",
      "",
      "### Evidence Quality",
      "- Should the prompt require primary or official sources?",
      "- What claims need citations?"
    ],
    execution_plan: [
      "### Plan Shape",
      "- Are the steps ordered by dependency?",
      "- Does each step produce something observable?",
      "",
      "### Time and Risk",
      "- Is the timebox realistic?",
      "- What could block the plan?"
    ],
    writing_content: [
      "### Reader Fit",
      "- Is the audience specific enough?",
      "- Does the tone match the reader and purpose?",
      "",
      "### Draft Quality",
      "- Should the prompt ask for multiple versions?",
      "- Should it explain why the wording works?"
    ],
    outreach_persuasion: [
      "### Persuasion Target",
      "- Is the recipient's incentive clear?",
      "- Is the desired next action explicit?",
      "",
      "### Credibility",
      "- Does the prompt ask for proof, objection handling, and concise wording?",
      "- What would make the message feel more trustworthy?"
    ],
    debugging_troubleshooting: [
      "### Reproduction",
      "- Does the prompt include exact steps, observed behavior, and expected behavior?",
      "- Is the failure evidence concrete enough?",
      "",
      "### Fix Safety",
      "- Does the prompt ask for a minimal fix?",
      "- Does it include verification commands or checks?"
    ],
    critique_loop: [
      "### Rubric",
      "- Is the critique standard explicit?",
      "- Does the prompt distinguish severity from preference?",
      "",
      "### Actionability",
      "- Will the critique produce prioritized fixes?",
      "- Should it rewrite, rank, or decide next steps?"
    ],
    circumstantial: [
      "### Situation",
      "- Is the real situation clear enough?",
      "- What hidden constraint might change the answer?",
      "",
      "### Output",
      "- Is the requested output format practical?",
      "- Should the AI produce a prompt, plan, table, or recommendation?"
    ]
  };
  return [
    "## Critique Template",
    "",
    `### Category Check: ${promptFamilies[family].label}`,
    `- Is ${family} the right category for this request?`,
    `- If not, which category would produce a better prompt?`,
    "",
    ...(specific[family] || []),
    "",
    "### This Prompt's Context",
    `- Does the prompt preserve this goal: "${input.slice(0, 180)}${input.length > 180 ? "..." : ""}"?`,
    answerLines.length
      ? "- Are the known clarification answers represented correctly?"
      : "- What missing answer would most improve the prompt?",
    "",
    "### Cost and Usefulness",
    "- Does the prompt avoid wasting tokens on unnecessary breadth?",
    "- Does it ask for the most useful next artifact?",
    "",
    "### Acceptance",
    "- Can this prompt be accepted as the current source of truth?",
    "- If not, paste exact edits."
  ].join("\n");
}

function getActionSteps(family: ReturnType<typeof classifyPrompt>) {
  const shared = [
    "Restate the exact end goal and define what finished means.",
    "List the assumptions that could change the answer.",
    "Ask only the missing questions that would materially improve the result.",
    "Produce the fastest useful path first, then note what can be improved later.",
    "End with the next concrete action the user should take."
  ];
  const byFamily: Record<string, string[]> = {
    analysis: [
      "Identify the source material and the analysis lens.",
      "Extract key findings, supporting evidence, uncertainty, and recommended decisions."
    ],
    product_spec: [
      "Define the first useful user, MVP boundary, core screens, data model, and demo path.",
      "Break the build into implementation phases ordered by dependency."
    ],
    research_brief: [
      "Convert the research task into a decision question.",
      "Search or reason using the requested evidence standard, then separate facts from recommendations."
    ],
    execution_plan: [
      "Create a dependency-ordered task list with timeboxes.",
      "Mark which steps can be done now, which need tools, and which need user input."
    ],
    writing_content: [
      "Define reader, tone, purpose, and format.",
      "Draft the piece, then provide revision notes and alternate versions."
    ],
    outreach_persuasion: [
      "Identify recipient, desired action, credibility proof, and likely objection.",
      "Draft the message and provide shorter, warmer, and more direct variants."
    ],
    debugging_troubleshooting: [
      "Collect reproduction steps, expected behavior, observed behavior, and evidence.",
      "Find the smallest likely fix, apply it, and verify with a concrete command or browser check."
    ],
    critique_loop: [
      "Define the critique rubric before judging.",
      "Return prioritized findings, exact edits, and a revised version when possible."
    ],
    circumstantial: [
      "Clarify the situation, constraint, and desired output shape.",
      "Return the most useful answer first, then branch into scenario-specific prompts."
    ]
  };
  return [...shared, ...(byFamily[family] || [])];
}

function getScenarioPrompts(family: ReturnType<typeof classifyPrompt>) {
  const shared = [
    "If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.",
    "If I have more time, expand this into a higher-quality version with polish and verification steps.",
    "If important context is missing, ask only the few questions that would change the final answer.",
    "If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts."
  ];
  const byFamily: Record<string, string[]> = {
    product_spec: [
      "If this is for a portfolio, turn the plan into a reviewer-visible demo story.",
      "If this could become a business, identify the first customer pain and the smallest test."
    ],
    debugging_troubleshooting: [
      "If the first fix fails, generate a second-pass debugging checklist using the new evidence.",
      "If the bug is intermittent, propose logging and reproduction probes before changing code."
    ],
    research_brief: [
      "If sources disagree, compare them by authority, recency, and relevance.",
      "If the answer depends on current information, browse authoritative sources and cite them."
    ],
    writing_content: [
      "If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.",
      "If the audience changes, produce a variant for each audience."
    ],
    outreach_persuasion: [
      "If the message sounds too salesy, make it shorter and more useful.",
      "If the recipient is skeptical, add proof and reduce claims."
    ],
    execution_plan: [
      "If I get stuck, diagnose the blocker and give the next smallest step.",
      "If the plan is too broad, split it into today, this week, and later."
    ],
    analysis: [
      "If the material is too long, summarize the structure first and ask what section to inspect deeply.",
      "If the analysis needs a decision, convert findings into a recommendation table."
    ],
    critique_loop: [
      "If the critique finds many issues, rank them by severity and fix only the top risks first.",
      "If no serious issues are found, identify remaining test gaps and polish opportunities."
    ],
    circumstantial: [
      "If the situation changes, reclassify the prompt and regenerate the steps.",
      "If the output is not useful, ask what decision the user is trying to make."
    ]
  };
  return [...(byFamily[family] || []), ...shared].slice(0, 6);
}

function getExpansionPrompts(family: ReturnType<typeof classifyPrompt>) {
  const label = promptFamilies[family].label;
  return [
    `Expand the ${label} reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.`,
    "Expand the risk section: list what could go wrong, how to notice it, and what to do next.",
    "Expand the implementation details: turn each major step into smaller commands, files, or decisions.",
    "Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.",
    "Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option."
  ];
}

function getNextActionPlan(
  family: ReturnType<typeof classifyPrompt>,
  input: string,
  openQuestionCount: number,
  answerCount: number
) {
  const familyLabel = promptFamilies[family].label;
  const text = input.toLowerCase();
  const contextOptions: string[] = [];
  if (text.includes("portfolio")) {
    contextOptions.push("Choose the portfolio story this project should prove to a reviewer.");
    contextOptions.push("Define the demo moment that will make the project feel complete.");
  }
  if (text.includes("automation") || text.includes("automate")) {
    contextOptions.push("Name the repeated manual task, trigger, input, output, and failure case.");
    contextOptions.push("Map the automation as one before/after workflow with a measurable time saved.");
  }
  if (text.includes("cost") || text.includes("token") || text.includes("quota") || text.includes("free")) {
    contextOptions.push("Set the model, token, quota, and free-first constraints before generating the final answer.");
  }
  if (text.includes("ui") || text.includes("app") || text.includes("interface")) {
    contextOptions.push("Identify the first screen, primary action, and what must be visible without explanation.");
  }
  if (text.includes("error") || text.includes("bug") || text.includes("debug") || text.includes("broken")) {
    contextOptions.push("Capture the exact reproduction path and strongest error signal.");
  }

  const actionByFamily: Record<string, { next: string; after: string }> = {
    analysis: {
      next: "Provide or select the exact material to analyze and choose the analysis lens.",
      after: "Run the analysis pass and convert findings into decisions or edits."
    },
    product_spec: {
      next: "Lock the first useful user and what the MVP must prove.",
      after: "Turn the MVP into screens, data model, build phases, and demo criteria."
    },
    research_brief: {
      next: "Define the decision the research must support and the evidence standard.",
      after: "Collect sources and convert findings into a recommendation."
    },
    execution_plan: {
      next: "Choose the timebox and final deliverable for the plan.",
      after: "Execute the first dependency-free task and verify the result."
    },
    writing_content: {
      next: "Define the reader, tone, length, and purpose of the writing.",
      after: "Draft the first version and produce targeted revisions."
    },
    outreach_persuasion: {
      next: "Identify the recipient, the concrete reply or commitment you want, proof, and likely objection.",
      after: "Draft the message and generate shorter or warmer variants."
    },
    debugging_troubleshooting: {
      next: "Capture reproduction steps, observed behavior, expected behavior, and the strongest error signal.",
      after: "Apply the smallest likely fix and verify it with a command or browser check."
    },
    critique_loop: {
      next: "Choose the critique rubric and what kind of revision should come after the critique.",
      after: "Apply the highest-priority critique and compare before/after."
    },
    circumstantial: {
      next: "Clarify the situation, output shape, and the decision this answer should support.",
      after: "Reclassify the prompt and generate the next concrete artifact."
    }
  };
  const plan = actionByFamily[family] || actionByFamily.circumstantial;
  const familyOptions: Record<string, string[]> = {
    analysis: [
      "Choose the source material and the analysis lens.",
      "Decide whether the output should be findings, risks, summary, comparison, or recommendation.",
      "Specify what evidence should be quoted or referenced."
    ],
    product_spec: [
      "Lock the first useful user and MVP proof.",
      "Choose the smallest version that can be built and demonstrated.",
      "Define the screen flow, data model, and acceptance criteria."
    ],
    research_brief: [
      "Define the decision the research must support.",
      "Choose the evidence standard and source types.",
      "Set the recency requirement and citation expectations."
    ],
    execution_plan: [
      "Choose the timebox and final deliverable.",
      "Identify the first dependency-free task.",
      "Split the plan into now, next, and later."
    ],
    writing_content: [
      "Choose the reader and tone.",
      "Pick the format, length, and call to action.",
      "Provide one example to imitate or avoid."
    ],
    outreach_persuasion: [
      "Define the recipient and the exact response you want from them.",
      "Choose the proof point that makes the message credible.",
      "Name the likely objection the message should handle."
    ],
    debugging_troubleshooting: [
      "Capture reproduction steps, expected behavior, observed behavior, and error evidence.",
      "Identify the smallest file or component likely involved.",
      "Choose the verification command or browser check."
    ],
    critique_loop: [
      "Choose the rubric that should judge the work.",
      "Decide whether the critique should rewrite, rank, or prioritize.",
      "Set a severity scale so preferences do not look like bugs."
    ],
    circumstantial: [
      "Clarify what decision the answer should support.",
      "Choose the output shape: prompt, plan, table, recommendation, or checklist.",
      "Name the constraint that makes this situation unusual."
    ]
  };
  const options = Array.from(new Set([...contextOptions, ...(familyOptions[family] || familyOptions.circumstantial)])).slice(0, 5);
  const nextAction =
    openQuestionCount > 0 ? options[0] || "Answer or skip the visible clarification questions, then regenerate the final prompt." : options[0] || plan.next;
  const reason =
    openQuestionCount > 0
      ? "This option removes the highest-impact ambiguity currently visible in the prompt, which reduces back-and-forth before execution."
      : `This is the highest-leverage next move for a ${familyLabel.toLowerCase()} request because it narrows the output contract before execution.`;
  const nextCanonicalPrompt = [
    `I finished the next action for this ${familyLabel.toLowerCase()} prompt refinement pass.`,
    "",
    "Original goal:",
    input,
    "",
    `Completed next action: ${nextAction}`,
    `Why it mattered: ${reason}`,
    `Action after this: ${plan.after}`,
    "",
    "Other viable next-action options:",
    ...options.map((option, index) => `${index + 1}. ${option}`),
    "",
    `Known completed clarification count: ${answerCount}`,
    "",
    "Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:",
    "1. The revised final prompt.",
    "2. The next action I should take.",
    "3. Why that action is next.",
    "4. The action after that.",
    "5. The next prompt I should give back after I finish that action."
  ].join("\n");
  return {
    nextAction,
    reason,
    actionAfterNext: plan.after,
    options,
    nextCanonicalPrompt
  };
}

export function isAcceptedVerbatim(userInput: string, canonicalPrompt: string, openQuestions: number, critique: string): boolean {
  return openQuestions === 0 && critique.trim().length === 0 && userInput.trim() === canonicalPrompt.trim();
}
