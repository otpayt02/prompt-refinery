---
skill_id: reviewer_packet_building_v1
family: skill_spec
display_name: Reviewer Packet Building
version: 1
status: active
recommended_agent: product_development_agent
---

# Reviewer Packet Building Skill

## Purpose

Package Codex output and Codex's suggested next prompt for reviewer/admin evaluation.

## Required sections

1. Product/spec/phase/thread/pass position.
2. Prompt previously sent to Codex.
3. Codex output summary.
4. Codex raw output reference.
5. Codex suggested next prompt.
6. Prompt Refinery initial understanding.
7. Scope drift check.
8. Reviewer task.
9. Required reviewer response contract.

## Reviewer response contract

Reviewer/admin must return:

- Whether Codex completed the task.
- Whether Codex's suggested next prompt is useful.
- The prompt that should actually go back to Codex.
- Fix-now items.
- Deferred items.
- Thread decision.
- Whether human admin approval is required.
