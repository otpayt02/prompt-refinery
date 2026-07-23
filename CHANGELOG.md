# Change Log

## CHG-20260723-002 — Observable project skills and prompt library expansion

- Status: `review_ready`
- Requested: install reusable planning, scope, architecture, budget, replanning, observable UI, change tracking, manual Shorts production, and self-review prompts; make Codex apply them across substantial threads and projects.
- Files created:
  - `CODEX_OBSERVABILITY_INSTRUCTIONS.md`
  - `prompt_library/skills/observable_project_ui.md`
  - `prompt_library/system/project_self_questions.md`
  - `prompt_library/system/cheapest_stack_researcher.md`
  - `prompt_library/system/mvp_scope_and_not_scope.md`
  - `prompt_library/system/change_tracking_contract.md`
  - `prompt_library/guardrails/ui_quality_no_slop.md`
  - `prompt_library/guardrails/token_budget_guardrail.md`
  - `prompt_library/roles/app_architect.md`
  - `prompt_library/roles/manual_shorts_producer.md`
  - `prompt_library/passes/passes_scope_creep_and_replanning.md`
  - `prompt_library/passes/passes_context_split_suggester.md`
  - `prompt_library/reviews/shorts_self_reviewer.md`
  - `CHANGELOG.md`
- Files modified:
  - `AGENTS.md`
  - `README.md`
- Verification:
  - GitHub file writes: pass;
  - prompt path cross-references: reviewed;
  - TypeScript typecheck/build: not run because this pass changes Markdown prompt and instruction files only;
  - runtime Prompt Refinery loading of the new files: not verified in the browser in this GitHub-only pass.
- Human review: `pending`
- Risks:
  - application code may need a later template-discovery update if it does not automatically enumerate nested prompt-library paths;
  - the observable UI skill specifies a cross-project contract but does not itself generate a dashboard until a target-project pass applies it.
- Next action: merge this PR, then run one target-project pass that reads `CODEX_OBSERVABILITY_INSTRUCTIONS.md` and confirm the new nested templates appear or are selectable in the Prompt Refinery UI.
