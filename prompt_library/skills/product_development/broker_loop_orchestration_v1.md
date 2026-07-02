---
skill_id: broker_loop_orchestration_v1
family: skill_spec
display_name: Broker Loop Orchestration
version: 1
status: active
recommended_agent: product_development_agent
---

# Broker Loop Orchestration Skill

## Purpose

Coordinate the manual Codex → Reviewer/Admin → Prompt Refinery → Codex loop.

## Inputs

- Product/spec/phase/thread/pass state.
- Accepted prompt previously sent to Codex.
- Codex output.
- Codex suggested next prompt.
- Reviewer/admin response.
- Active mode, family, wrappers, and context pack.

## Process

1. Identify current product position.
2. Summarize the last Codex pass.
3. Extract Codex's suggested next prompt.
4. Build or ingest reviewer packet.
5. Extract reviewer/admin recommended next prompt.
6. Audit reviewer recommendation.
7. Apply token, scope, thread, and wrapper policy.
8. Run acceptance handshake.
9. Produce final accepted Codex prompt.
10. Save pass and handoff records.

## Output

- Pass summary.
- Accepted next prompt.
- Decision log.
- Thread recommendation.
- Token estimate.
