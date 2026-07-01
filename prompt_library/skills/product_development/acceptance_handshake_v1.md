---
skill_id: acceptance_handshake_v1
family: skill_spec
display_name: Acceptance Handshake
version: 1
status: active
recommended_agent: product_development_agent
---

# Acceptance Handshake Skill

## Purpose

Verify that a prompt is safe, scoped, token-aware, and approved before it is given to Codex.

## Checklist

- Codex output was understood.
- Codex suggested next prompt was extracted.
- Reviewer/admin recommendation was understood.
- Reviewer/admin recommendation was audited.
- Scope was checked against current spec, phase, feature, and thread.
- Token estimate was considered.
- Required decisions were resolved.
- Human admin approval was requested where required.
- Prompt was compressed.
- Wrappers were applied.
- Stop condition was included.

## Output

- `ready_for_codex: true | false`
- Blockers.
- Required admin decisions.
- Final accepted prompt.
