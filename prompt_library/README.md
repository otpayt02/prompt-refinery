# prompts-n-templates-lib
Public library of token-optimized prompt templates and system wrappers for Codex, Copilot, and Perplexity.

## Local Path
Sync this repo to:
```
C:\Users\olive\Projects\portfolio_hub\prompt-library
```

## Structure
- `prompt-library/` — Ready-to-paste system prompts and wrappers
- `skills/` — Agent skill definitions and custom instruction sets
- `projects/` — Project-specific AGENTS.md and token configs

## Quick Start
1. **Perplexity** → Paste `prompt-library/perplexity-refinery-wrapper.md` into a new chat.
2. **Codex** → Paste `prompt-library/codex-activation-prompt.md` as the first message.
3. **Execute** → Paste the refined prompt from Perplexity into Codex.
4. **Repeat** → New Codex session per atomic task.

## Methodology: Minimum Viable Tokens (MVT)
Perplexity thinks. Codex builds. Never run a prompt loop inside Codex.
