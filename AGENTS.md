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
- After frontend changes, verify the active workflow in a browser as well as running the compiler/build checks.

## Existing Workflow Contract

1. Classify the request before generating output.
2. Ask only clarification questions that materially change scope or success.
3. Keep the canonical output visible and editable.
4. Treat critique as structured input that revises the canonical output.
5. Accept only when open questions are resolved, critique is cleared, and the canonical output matches the acceptance input.
6. Persist accepted prompts and generated responses through the existing file-writer API.
7. Return the next action, its reason, the action after it, and a copy-ready next prompt.

## Codex-Only Reviewer Loop Package

The reusable project-integration kit lives in `integration_packages/codex_reviewer_loop/`.

Use this package when a target project should run a manual-copy Codex loop with Prompt Refinery as the reviewer/refiner. Do not describe this as a separate local-model reviewer loop. Do not claim browser control, repo installation, or project execution unless those adapters are later implemented and tested.

### Loop States

1. `CODEX` state: Codex works inside the target project and returns a wrapped response with changed files, verification, human-review notes, and a suggested next Codex prompt.
2. `REVIEW` state: Prompt Refinery reviews the wrapped Codex response, checks scope and MVP fit, then returns a refined next Codex prompt.
3. `FINAL_PROMPT` state: the refined next prompt is pasted back into Codex for the next project pass.

### Limits

- Planning pass: at most three prompt-response-review cycles.
- Implementation passes: normally zero or one reviewer-requested refinement per Codex response.
- Prefer free, local, or open-source components.
- Do not stall on nonessential polish. Prioritize a working, human-reviewable prototype with practical checks.
- Every loop must have explicit iteration limits, stop conditions, and a recoverable progress record.

### Target-Project Rules

- Keep the target project as the subject. Do not make the target project about improving Prompt Refinery or the loop itself.
- Wrappers should envelope the actual project response, not replace it.
- Templates must use placeholders for project-specific path, stack, goal, success state, constraints, verification commands, and human-review proof.
- If a target project does not exist at the expected path, create only a profile/template and note that the path must be confirmed before copying files.

## Planned First Scenario

`karen-dict-scrape` is the first prepared profile in `integration_packages/codex_reviewer_loop/project_profiles/karen-dict-scrape.project_profile.md`. The exact repo path was not found when the profile was created, so confirm the project location before installing the package.