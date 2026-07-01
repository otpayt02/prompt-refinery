# prompt_library deferred_not_deleted

This folder preserves useful prompt-library material that should not be lost, but should not be treated as the current canonical template location.

## Canonical rule

Use `prompt_library/` with the underscore as the canonical prompt asset home.

A hyphenated `prompt-library/` folder is only an import/staging source. When useful files are found there, move them into `prompt_library/` and keep any legacy/original versions here until they are reviewed.

## What belongs here

- Legacy flat prompt files that were moved into categorized template folders.
- Unique prompt files recovered from a staging/import folder.
- Recovery notes for files that were intentionally not kept as active templates.

## What does not belong here

- `.venv/`
- `node_modules/`
- build outputs
- generated dependency folders
- cache files

## Current preserved legacy prompt files

- `legacy_flat_prompts/codex-activation-prompt.md`
- `legacy_flat_prompts/perplexity-refinery-wrapper.md`

## Current canonical replacements

- `prompt_library/modes/minimal_token_efficiency/codex_activation_prompt_v1.md`
- `prompt_library/execution_plan/perplexity_refinery_wrapper_v1.md`

## Product direction

This folder is a safety net. The MVP work should continue from the canonical `prompt_library/` structure and the local-first manual broker roadmap.
