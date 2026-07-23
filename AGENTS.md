# Prompt Refinery Agent Guide

## Repository Scope

- This repository is the standalone Prompt Refinery product home.
- Keep generated prompt artifacts in this repository's existing `conversations/`, `accepted_prompts/`, `prompt_library/`, `saved_roles/`, and `session_log/` folders.
- Preserve the staged workflow and make additions mode-aware. Do not replace working prompt, response-refinement, custom-mode, critique, acceptance, or few-shot-example behavior unless the task explicitly requires it.

## Commands

Run from `C:\Users\olive\Projects\portfolio_hub\prompt-refinery`:

```powershell
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

- `npm run dev` starts the Vite app at `http://127.0.0.1:5173/` and the local file-writer API at `http://127.0.0.1:8787/`.
- Use `npm run typecheck` for fast TypeScript validation and `npm run build` before reporting a UI or engine change complete.
- After frontend changes, verify the active workflow in a browser as well as running compiler and build checks.

## Existing Workflow Contract

1. Classify the request before generating output.
2. Ask only clarification questions that materially change scope or success.
3. Keep the canonical output visible and editable.
4. Treat critique as structured input that revises the canonical output.
5. Accept only when open questions are resolved, critique is cleared, and the canonical output matches the acceptance input.
6. Persist accepted prompts and generated responses through the existing file-writer API.
7. Return the next action, its reason, the action after it, and a copy-ready next prompt.

## Mandatory Observability Contract

- Read `CODEX_OBSERVABILITY_INSTRUCTIONS.md` for every substantial Codex thread or project pass.
- Apply `prompt_library/skills/observable_project_ui.md` to every substantial project, phase, feature, refactor, or production workflow even when the user does not separately request a dashboard.
- Reuse an existing UI before creating another one.
- Bind the observable surface to real tracked state from files, APIs, manifests, logs, tests, artifacts, or operator decisions.
- Every visible element must be a working control, valid link, real status/value, or concise label/instruction needed to operate another element.
- Remove decorative cards, fake charts, generic hero copy, filler descriptions, redundant summaries, vanity animation, placeholder controls, and buttons that do nothing.
- Verify buttons, filters, links, expanders, downloads, copy actions, approvals, rejections, navigation, loading states, and error states before reporting UI work complete.

## Change Tracking Contract

- Assign every meaningful pass a stable `CHG-YYYYMMDD-NNN` identifier.
- Apply `prompt_library/system/change_tracking_contract.md`.
- Separate planned, implemented, verified, approved, and published states.
- Update current state, change log, decision log when applicable, verification evidence, and dashboard state in the same pass.
- Never claim a check passed when it was not run.

## Prompt Library Read Set

Before a substantial target-project pass, select the relevant files from:

- `prompt_library/system/project_self_questions.md`
- `prompt_library/system/mvp_scope_and_not_scope.md`
- `prompt_library/system/cheapest_stack_researcher.md`
- `prompt_library/system/change_tracking_contract.md`
- `prompt_library/guardrails/ui_quality_no_slop.md`
- `prompt_library/guardrails/token_budget_guardrail.md`
- `prompt_library/skills/observable_project_ui.md`
- `prompt_library/roles/app_architect.md`
- `prompt_library/passes/passes_scope_creep_and_replanning.md`
- `prompt_library/passes/passes_context_split_suggester.md`

For manual YouTube Shorts production, also use:

- `prompt_library/roles/manual_shorts_producer.md`
- `prompt_library/reviews/shorts_self_reviewer.md`

## Codex-Only Reviewer Loop Package

The reusable project-integration kit lives in `integration_packages/codex_reviewer_loop/`.

Use this package when a target project should run a manual-copy Codex loop with Prompt Refinery as the reviewer/refiner. Do not describe this as a separate local-model reviewer loop. Do not claim browser control, repo installation, or project execution unless those adapters are implemented and tested.

### Loop States

1. `CODEX`: Codex works inside the target project and returns changed files, verification, human-review notes, dashboard state, and a suggested next Codex prompt.
2. `REVIEW`: Prompt Refinery reviews scope, MVP fit, evidence, UI function, and tracking completeness, then returns a refined next Codex prompt.
3. `FINAL_PROMPT`: the refined next prompt is pasted back into Codex for the next project pass.

### Limits

- Planning pass: at most three prompt-response-review cycles.
- Implementation passes: normally zero or one reviewer-requested refinement per Codex response.
- Prefer free, local, browser-based, or open-source components.
- Do not stall on nonessential polish. Prioritize a working, human-reviewable prototype with practical checks.
- Every loop must have explicit iteration limits, stop conditions, and a recoverable progress record.

### Target-Project Rules

- Keep the target project as the subject. Do not make the target project about improving Prompt Refinery or the loop itself.
- Wrappers should envelope the actual project response, not replace it.
- Templates must use placeholders for project-specific path, stack, goal, success state, constraints, verification commands, human-review proof, and observable surface.
- If a target project does not exist at the expected path, create only a profile/template and note that the path must be confirmed before copying files.

## Planned First Scenario

`karen-dict-scrape` is the first prepared profile in `integration_packages/codex_reviewer_loop/project_profiles/karen-dict-scrape.project_profile.md`. Confirm the exact project path before installing the package.
