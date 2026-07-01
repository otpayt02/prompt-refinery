# Prompt Loop Project Profile

Use this file to adapt the Codex Reviewer Loop to a specific project.

## Project

- Name: {{PROJECT_NAME}}
- Path: {{PROJECT_PATH}}
- Repo status: {{GIT_STATUS_OR_UNKNOWN}}
- Stack: {{STACK_OR_UNKNOWN}}
- Primary user/reviewer: {{REVIEWER}}

## Goal

{{PROJECT_GOAL}}

## MVP Boundary

{{MVP_BOUNDARY}}

## Success State

The loop can stop when:

- {{SUCCESS_CONDITION_1}}
- {{SUCCESS_CONDITION_2}}
- {{SUCCESS_CONDITION_3}}

## Verification Commands

```powershell
{{COMMAND_1}}
{{COMMAND_2}}
{{COMMAND_3}}
```

## Human Review Checks

- {{HUMAN_REVIEW_CHECK_1}}
- {{HUMAN_REVIEW_CHECK_2}}
- {{HUMAN_REVIEW_CHECK_3}}

## Constraints

- Prefer free, local, or open-source tools.
- Keep the first version human-reviewable.
- Do not expand beyond the MVP without explicit approval.
- Preserve project-specific instructions and existing user edits.

## First Codex Pass

Use `templates/codex_state_wrapper.md` and fill `{{TASK_FOR_CODEX}}` with the smallest useful first step for this project.
