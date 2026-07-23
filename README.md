# 🧪 Prompt Refinery

> An AI prompt-engineering workspace that converts rough intent into structured, staged prompt pipelines with clarification loops, critique templates, visual flow mapping, observable project state, and traceable changes.

**GitHub:** https://github.com/otpayt02/prompt-refinery  
**Live UI (local):** [http://127.0.0.1:5173/](http://127.0.0.1:5173/) ← open after running `npm run dev`

---

## 🚀 Quick Start (PowerShell)

```powershell
cd C:\Projects\prompt-refinery
npm install
$env:GEMINI_API_KEY = "your-key"
npm run dev
```

The Gemini key is optional; the local deterministic engine works without it.

| Service | URL | Purpose |
|---|---|---|
| **Web UI** | http://127.0.0.1:5173/ | Main prompt-engineering workspace |
| **File Writer API** | http://127.0.0.1:8787/ | Writes artifacts to disk |

---

## 🖥️ What the UI Does

Prompt Refinery is a self-referential prompt-engineering workspace. You give it rough input, and it refines it through structured clarification and critique loops until you have a production-ready prompt pipeline.

### Stages

1. **Intake** — paste raw notes, rough prompts, or MCP context.
2. **Classification** — auto-classify the input into a Prompt Family.
3. **Clarification Loop** — ask one material question at a time.
4. **Critique Loop** — return a Canonical Execution Prompt and Critique Template.
5. **Acceptance Handshake** — paste the Canonical Prompt back verbatim to unlock execution.
6. **Execution Pipeline** — generate the staged prompt sequence.

### UI Layout

- **Left** — input area and conversation history.
- **Center** — current refined prompt output.
- **Right** — live file explorer showing saved artifacts.
- **Bottom** — critique template until acceptance.
- **Top-right chip** — suggested next prompt.

---

## Mandatory Project Observability

For every substantial target-project pass, Codex must read `CODEX_OBSERVABILITY_INSTRUCTIONS.md` and apply `prompt_library/skills/observable_project_ui.md`.

The required observable surface must:

- reuse an existing project UI when possible;
- show real objective, change, execution, verification, decision, risk, and next-action state;
- use working controls, valid links, real values, or necessary labels only;
- remove decorative cards, fake charts, filler descriptions, generic hero copy, and nonfunctional controls;
- stay synchronized with the change log and verification evidence.

Every meaningful pass receives a stable `CHG-YYYYMMDD-NNN` identifier and uses `prompt_library/system/change_tracking_contract.md`.

---

## Prompt Library Additions

### System

- `prompt_library/system/project_self_questions.md`
- `prompt_library/system/mvp_scope_and_not_scope.md`
- `prompt_library/system/cheapest_stack_researcher.md`
- `prompt_library/system/change_tracking_contract.md`

### Guardrails

- `prompt_library/guardrails/ui_quality_no_slop.md`
- `prompt_library/guardrails/token_budget_guardrail.md`

### Roles and Skills

- `prompt_library/roles/app_architect.md`
- `prompt_library/roles/manual_shorts_producer.md`
- `prompt_library/skills/observable_project_ui.md`

### Passes and Reviews

- `prompt_library/passes/passes_scope_creep_and_replanning.md`
- `prompt_library/passes/passes_context_split_suggester.md`
- `prompt_library/reviews/shorts_self_reviewer.md`

---

## 📁 File System Architecture

All artifacts are written by `server/fileWriter.cjs` running at port 8787:

```text
prompt-refinery/
├── conversations/
│   └── 0000/
│       ├── 0000_conversation.md
│       ├── turns/
│       ├── clarifications/
│       ├── critiques/
│       ├── next_step_prompts/
│       └── canonical_prompts/
├── prompt_library/
│   ├── system/
│   ├── guardrails/
│   ├── roles/
│   ├── skills/
│   ├── passes/
│   └── reviews/
├── critique_templates/
├── clarification_templates/
├── session_log/
├── saved_roles/
├── artifacts/
├── CODEX_OBSERVABILITY_INSTRUCTIONS.md
└── CHANGELOG.md
```

Conversation logs force-flush on browser close and auto-append every 20 seconds.

---

## 🔑 Environment Setup

```powershell
Copy-Item .env.example .env
# Edit .env and add GEMINI_API_KEY only when desired.
```

The app works free/offline using the local deterministic engine. A configured Gemini key unlocks AI-powered classification and response generation.

---

## 🧩 Prompt Family Types

| Family | Purpose |
|---|---|
| `analysis` | Break down existing material |
| `product_spec` | Define product, MVP, and architecture |
| `research_brief` | Structure research questions |
| `execution_plan` | Create a step-by-step build or action sequence |
| `writing_content` | Draft and edit content |
| `outreach_persuasion` | Create pitches, messages, and proposals |
| `debugging_troubleshooting` | Isolate and resolve failures |
| `critique_loop` | Evaluate and improve existing work |
| `circumstantial` | Handle situation-specific prompts |

---

## 🛠️ Scripts Reference

```powershell
npm run dev
npm run dev:web
npm run dev:api
npm run build
npm run preview
npm run typecheck
```

---

## 📖 Other Docs

- [`CODEX_PROMPT.md`](./CODEX_PROMPT.md) — original bootstrap prompt.
- [`CODEX_OBSERVABILITY_INSTRUCTIONS.md`](./CODEX_OBSERVABILITY_INSTRUCTIONS.md) — mandatory cross-project Codex operating loop.
- [`SPEC.md`](./SPEC.md) — full product spec.
- [`RUNNING.md`](./RUNNING.md) — minimal quick-run reference.
- [`AGENTS.md`](./AGENTS.md) — agent behavior rules.
- [`CHANGELOG.md`](./CHANGELOG.md) — traceable prompt-library changes.
