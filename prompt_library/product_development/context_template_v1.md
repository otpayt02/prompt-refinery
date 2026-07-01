---
template_id: product_development_context_v1
family: product_development
display_name: Product Development Context Template
version: 1
status: active
recommended_mode: codex_reviewer_broker
---

# Product Development Context Template

Use this template as project context for any agent, reviewer, or future Prompt Refinery thread.

## Product

Prompt Refinery

## Product definition

Prompt Refinery is a local-first manual AI broker between a coding agent and a reviewer/admin layer. It minimizes Codex token usage by ensuring Codex receives only accepted, compressed, scope-checked prompts.

## Current version

Spec 0 / v0 / MVP

## Core actors

- Codex or coding AI: executor.
- Reviewer AI: reviewer and recommendation generator.
- Human admin: final authority where required.
- Prompt Refinery: broker, validator, compressor, and acceptance-handshake layer.
- File-writer API: local persistence layer.

## Core loop

Codex output and its suggested next prompt go to Prompt Refinery. Prompt Refinery builds a reviewer packet. Reviewer/admin returns a recommended next prompt. Prompt Refinery audits it, resolves decisions, applies wrappers, checks token/scope/thread state, and produces the accepted next prompt for Codex.

## MVP constraints

- Local-only first.
- Manual copy/paste loop.
- No OpenRouter/n8n/webhook execution in MVP.
- No raw video in MVP.
- Text files and manual image descriptions are MVP context.
- Human admin remains final authority for risky decisions.

## Current build priority

1. Product state foundation.
2. Mode Manager integration.
3. Broker template registry.
4. Context Pack MVP.
5. Manual broker loop runner.
6. Decision popups.
7. Thread management and token saver.
8. MVP hardening.

## Non-negotiable design rule

Do not use Codex for unnecessary clarification loops. Clarifications happen between Prompt Refinery, reviewer AI, and/or human admin.
