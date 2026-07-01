# REFINED NEXT PROMPT WRAPPER

Use this wrapper when the reviewer has already produced a next Codex prompt, but it needs one final self-refinement before pasting into Codex.

## Input Prompt

```text
{{REVIEWER_NEXT_PROMPT}}
```

## Target Project

- Project name: {{PROJECT_NAME}}
- Project path: {{PROJECT_PATH}}
- Current goal: {{CURRENT_GOAL}}
- Success state: {{SUCCESS_STATE}}

## Refinement Rules

1. Keep the prompt focused on the target project.
2. Remove wording about improving Prompt Refinery or the loop.
3. Add missing project context only if it matters for execution.
4. Make verification and human review explicit.
5. Keep the prompt paste-ready for Codex.
6. Do not add new features unless they are necessary for the success state.

## Return Only

```text
{{FINAL_CODEX_PROMPT}}
```
