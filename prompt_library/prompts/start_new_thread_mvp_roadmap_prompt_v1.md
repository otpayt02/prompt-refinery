---
prompt_id: start_new_thread_mvp_roadmap_prompt_v1
family: product_development
display_name: Start New Thread MVP Roadmap Prompt
version: 1
status: active
recommended_agent: product_development_agent
---

# Start New Thread Prompt

Paste this into a new Prompt Refinery thread when continuing product development.

```text
You are helping me build Prompt Refinery.

Treat this as the source of truth:

Prompt Refinery is a local-first manual AI broker between Codex/coding AI and a reviewer/admin layer. Codex is the executor. Reviewer AI and/or human admin is the clarification and critique partner. Prompt Refinery is the middleman that understands Codex output, extracts Codex's suggested next prompt, builds a reviewer packet, audits the reviewer/admin recommendation, resolves questions with reviewer/admin, applies mode/family/wrappers/token/scope policy, and produces the final accepted next prompt to give Codex.

MVP = Spec 0 = v0.

MVP constraints:
- Local-only first.
- Manual copy/paste loop.
- Save custom modes and project artifacts through the local file-writer API.
- Text files and manual image descriptions are MVP context.
- Raw video later.
- No automatic Codex/API execution in MVP.
- No OpenRouter/n8n/Make/Zapier/webhooks in MVP.
- No unnecessary clarification back-and-forth with Codex.
- Questions and critiques go to reviewer AI and/or human admin.

Product hierarchy:
Product → Spec/version → Phase → Feature → Thread → Pass → Prompt → Codex output → Reviewer packet → Reviewer response → Acceptance handshake → Accepted next prompt.

Build roadmap:
0. Product state foundation.
1. Mode Manager integration.
2. Broker template registry.
3. Context Pack MVP.
4. Manual broker loop runner.
5. Decision popups.
6. Thread management and token saver.
7. MVP hardening.

Your task:
1. Identify the current phase and next smallest implementation pass.
2. Keep scope tight for MVP.
3. Produce the exact prompt I should give Codex next.
4. Include the acceptance criteria for Codex's output.
5. Include what Codex should return as its suggested next prompt.
6. Include what I should paste back into Prompt Refinery after Codex responds.
7. Recommend whether to continue this thread or start a new one.

Do not expand into post-MVP provider/webhook/research features unless they are needed to avoid blocking the local manual broker MVP.
```
