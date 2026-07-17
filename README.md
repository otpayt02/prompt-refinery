# 🧪 Prompt Refinery

> An AI prompt-engineering workspace that converts rough intent into structured, staged prompt pipelines with clarification loops, critique templates, and visual flow mapping.

**GitHub:** https://github.com/otpayt02/prompt-refinery  
**Live UI (local):** [http://127.0.0.1:5173/](http://127.0.0.1:5173/) ← open after running `npm run dev`

---

## 🚀 Quick Start (PowerShell)

```powershell
cd C:\Projects\prompt-refinery   # or wherever you cloned it
npm install                       # first time only
$env:GEMINI_API_KEY = "your-key" # optional — free local engine works without it
npm run dev
```

| Service | URL | Purpose |
|---------|-----|---------|
| **Web UI** | http://127.0.0.1:5173/ | Main prompt-engineering workspace |
| **File Writer API** | http://127.0.0.1:8787/ | Writes artifacts to disk |

---

## 🖥️ What the UI Does

Prompt Refinery is a self-referential prompt-engineering workspace. You give it rough input, and it refines it through structured clarification and critique loops until you have a production-ready prompt pipeline.

### Stages
1. **Intake** — paste raw notes, rough prompts, or MCP context
2. **Classification** — auto-classifies input into a Prompt Family
3. **Clarification Loop** — fade-in questionnaire (one question at a time, multi-select chips)
4. **Critique Loop** — returns Canonical Execution Prompt + Critique Template each pass
5. **Acceptance Handshake** — paste the Canonical Prompt back verbatim → pipeline unlocks
6. **Execution Pipeline** — full staged prompt sequence generated for your goal

### UI Layout
- **Left** — input area + conversation history
- **Center** — current refined prompt output
- **Right** — live file explorer showing saved artifacts
- **Bottom** — critique template (visible until handshake)
- **Top-right chip** — suggested next prompt

---

## 📁 File System Architecture

All artifacts are written by `server/fileWriter.cjs` running at port 8787:

```
prompt-refinery/
├── conversations/          ← running logs (auto-append every 20s)
│   └── 0000/
│       ├── 0000_conversation.md
│       ├── turns/
│       ├── clarifications/
│       ├── critiques/
│       ├── next_step_prompts/
│       └── canonical_prompts/
├── prompt_library/         ← shared global templates by family
├── critique_templates/
├── clarification_templates/
├── session_log/
├── saved_roles/
└── artifacts/
```

Conversation logs force-flush on browser close and auto-append every **20 seconds**.

---

## 🔑 Environment Setup

```powershell
# Copy example and fill in your key
Copy-Item .env.example .env
# Then edit .env and add:
# GEMINI_API_KEY=AIza...
```

The app works fully **free/offline** using the local deterministic engine. The Gemini key unlocks AI-powered classification and response generation.

---

## 🧩 Prompt Family Types

| Family | Purpose |
|--------|---------|
| `analysis` | Break down existing material |
| `product_spec` | Define product, MVP, architecture |
| `research_brief` | Structured research questions |
| `execution_plan` | Step-by-step build/action sequence |
| `writing_content` | Drafting, editing, tone |
| `outreach_persuasion` | Pitch, message, proposal |
| `debugging_troubleshooting` | Isolate and resolve failures |
| `critique_loop` | Evaluate and improve existing work |
| `circumstantial` | Situation-specific prompts |

---

## 🛠️ Scripts Reference

```powershell
npm run dev          # Start web UI + file writer API (recommended)
npm run dev:web      # Vite UI only (port 5173)
npm run dev:api      # File writer API only (port 8787)
npm run build        # Production build
npm run preview      # Preview production build
npm run typecheck    # TypeScript check only
```

---

## 📖 Other Docs

- [`CODEX_PROMPT.md`](./CODEX_PROMPT.md) — Bootstrap prompt for Codex to build this project
- [`SPEC.md`](./SPEC.md) — Full product spec
- [`RUNNING.md`](./RUNNING.md) — Minimal quick-run reference
- [`AGENTS.md`](./AGENTS.md) — Agent behavior rules

---

👉 **[Open UI: http://127.0.0.1:5173/](http://127.0.0.1:5173/)** *(run `npm run dev` first)*
