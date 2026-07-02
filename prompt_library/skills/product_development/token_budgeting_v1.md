---
skill_id: token_budgeting_v1
family: skill_spec
display_name: Token Budgeting
version: 1
status: active
recommended_agent: product_development_agent
---

# Token Budgeting Skill

## Purpose

Estimate and reduce token load before a handoff reaches Codex.

## Inputs

- Prompt text.
- Context pack.
- Previous thread summary.
- Codex output length.
- Reviewer packet length.
- Active token policy.

## Process

1. Estimate input size.
2. Estimate context size.
3. Estimate reviewer packet size.
4. Estimate accepted prompt size.
5. Detect avoidable duplication.
6. Recommend continue, compress, or close thread.
7. Rewrite prompt in a smaller safe form when needed.

## Output

- Estimated token load.
- Largest token drivers.
- Compression recommendation.
- Minimal safe prompt rewrite.
