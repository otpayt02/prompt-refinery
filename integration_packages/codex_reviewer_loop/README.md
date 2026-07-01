# Codex Reviewer Loop Integration Package

This package lets a project use Prompt Refinery as a reviewer and prompt-wrapper station for a Codex-only workflow. It does not migrate Prompt Refinery into the target project. The target project stays focused on its own work; Prompt Refinery provides the reusable wrappers, loop rules, and project-profile templates.

## What This Is

A copyable prompt-loop kit for any project repo. The loop alternates between two states:

1. Codex State: Codex works on the target project and returns a wrapped response with evidence, changed files, verification, and a suggested next prompt.
2. Review State: Prompt Refinery reviews that Codex response, checks scope and MVP fit, and returns a refined next Codex prompt.

The actual project work stays inside the target repository. The loop templates should not ask Codex to improve the loop itself unless the target project is explicitly Prompt Refinery.

## No Migration Required

You do not need to migrate Prompt Refinery into every project. Use this package in one of two ways:

- Copy mode: copy `copy_into_project/AGENTS.prompt-loop.md` and the relevant project profile into the target repo.
- Reference mode: keep this package in Prompt Refinery and ask Codex to read the templates from this folder before working in the target repo.

For a first prototype, copy mode is simpler and more reliable.

## Suggested Target Layout

Inside the target project, add:

```text
.prompt-loop/
  AGENTS.prompt-loop.md
  project_profile.md
  templates/
    codex_state_wrapper.md
    review_state_wrapper.md
    refined_next_prompt_wrapper.md
```

If the project already has `AGENTS.md`, merge the short instructions from `AGENTS.prompt-loop.md` into it instead of replacing existing project rules.

## Operating Rules

- The project goal controls the loop, not the loop implementation.
- Each Codex response must include a suggested next prompt.
- Each Review State pass must refine that suggested next prompt before it goes back to Codex.
- Use zero or one review-requested refinement pass for normal implementation turns.
- Use at most three prompt-response-review cycles for an initial planning pass.
- Stop when the project-defined success state is met and practical checks pass.
- Prefer free, local, or open-source tools where possible.
- Keep all outputs human-reviewable.

## How To Use With karen-dict-scrape

1. Create or open `C:\Users\olive\Projects\karen-dict-scrape`.
2. Copy this package's `copy_into_project/AGENTS.prompt-loop.md` into the project as `.prompt-loop/AGENTS.prompt-loop.md`.
3. Copy `project_profiles/karen-dict-scrape.project_profile.md` into the project as `.prompt-loop/project_profile.md`.
4. Copy the three wrapper templates from `templates/` into `.prompt-loop/templates/`.
5. Open Prompt Refinery at `http://127.0.0.1:5173/`.
6. Use Custom Mode or Refined Response mode to review Codex output using `templates/review_state_wrapper.md`.
7. Paste the refined next prompt back into Codex while Codex is opened in the target project.

## First Prompt To Codex In A Target Repo

Use `templates/codex_state_wrapper.md`, fill the placeholders, and paste it into Codex while the target repo is open.
