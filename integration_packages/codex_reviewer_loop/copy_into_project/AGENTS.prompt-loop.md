# Project Prompt Loop Instructions

Use these instructions only for this project. Do not redirect work toward improving Prompt Refinery unless this project is Prompt Refinery.

## Loop States

### Codex State

When working in Codex State:

1. Work only on the target project's stated goal.
2. Preserve existing project instructions, files, and user edits.
3. Make scoped changes that move the project toward the defined success state.
4. Run practical verification commands when available.
5. Return a wrapped response using the Codex State response contract below.
6. Always include a suggested next prompt for the reviewer to refine.

### Review State

Prompt Refinery or the reviewer chat reviews the latest Codex response. The reviewer should:

1. Check whether Codex stayed in scope.
2. Check whether the MVP is moving forward without unnecessary delay.
3. Ask for clarification only if a missing fact materially changes the project outcome.
4. Produce a refined next Codex prompt.
5. Avoid more than one refinement pass unless there is a real blocker.

## Codex State Response Contract

Every Codex response should include:

- `STATE: CODEX`
- `PROJECT:` project name/path
- `GOAL:` current project goal
- `SUCCESS STATE:` what done means for this pass
- `CHANGES:` files or artifacts changed
- `VERIFICATION:` commands run and results, or why not run
- `HUMAN REVIEW:` what a non-developer should inspect
- `SCOPE CHECK:` whether the work stayed inside the target goal
- `BLOCKERS:` only real blockers
- `SUGGESTED NEXT ACTION:` one concrete next action
- `SUGGESTED NEXT CODEX PROMPT:` copy-ready next prompt for the reviewer to refine

## Done Rules

The loop can stop when:

- The pass success state is met.
- Required checks pass or failures are documented with evidence.
- The output is human-reviewable.
- The next action is either optional polish, deployment, or a clearly separate feature.

Do not stop just because the response is long. Stop because the defined project result is achieved.
