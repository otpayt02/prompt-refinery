---
skill_id: context_pack_management_v1
family: skill_spec
display_name: Context Pack Management
version: 1
status: active
recommended_agent: product_development_agent
---

# Context Pack Management Skill

## Purpose

Control which context is included in Codex prompts and reviewer packets.

## MVP context types

- Manual notes.
- Text files.
- Manual image descriptions.
- Thread summaries.
- Previous accepted prompts.
- Previous Codex outputs.

## Process

1. List available context.
2. Mark included context.
3. Mark excluded context.
4. Summarize large context.
5. Estimate token load.
6. Attach context to the handoff or reviewer packet.
7. Save the context pack through file-writer API.

## Output

- Included context.
- Excluded context.
- Context summary.
- Token estimate.
- Context risks.
