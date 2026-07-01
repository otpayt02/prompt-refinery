# AGENTS.md
## Token-Optimized Agent Context

### Project Identity
A-Loud-Reader is a minimal text-to-speech accessibility tool. It reads content aloud. Nothing more unless explicitly scoped.

### Interaction Rules (MVT)
- **NO REFINERY**: Do not rewrite, expand, or improve my prompts.
- **NO EXPLANATIONS**: Do not generate comments, docstrings, or reasoning unless asked.
- **NO STYLING**: Do not add CSS, animations, or UI polish unless explicitly requested.
- **NO TESTS**: Do not write tests unless the word "test" is in the prompt.
- **NO DOCS**: Do not write README or documentation unless asked.
- **MINIMAL ERROR HANDLING**: Only add try/catch if the prompt says "handle errors".
- **EXECUTE ONLY**: Build exactly what is described, nothing adjacent.

### Technical Stack
- Backend: Python, Flask, SQLite
- Frontend: Vanilla HTML/JS, Browser SpeechSynthesis API
- Infrastructure: Vercel (frontend), local/Flask (backend)

### Session Protocol
- **One task per session**: Start new chat for each atomic task.
- **Handoff format**: `HANDOFF: {file} | {status} | {blocker if any}`
- **State file**: If continuity is needed, write to `session_state.md` (one line only).

### Context Exclusions
Exclude from all agent context:
- `/tests/**`, `/docs/**`, `/assets/audio/**`, `/logs/**`
- `*.md` (except this file)
- `*.mp3`, `*.wav`
- `node_modules/`, `__pycache__/`, `.venv/`

### Custom Instruction Prefix
Paste this at the start of every A-Loud-Reader Codex session:
```
MVT ACTIVE. A-Loud-Reader project. Execute only. No comments. No styling. No tests.
```
