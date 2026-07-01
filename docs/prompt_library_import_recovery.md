# Prompt Library Import Recovery

## Decision

`prompt_library/` with the underscore is the canonical prompt asset folder.

`prompt-library/` with the hyphen is treated only as a temporary staging/import source. Useful prompt files from staging should be moved into `prompt_library/` before the staging folder is removed.

## Recovery added

This branch adds a canonical deferred area inside `prompt_library/`:

```text
prompt_library/deferred_not_deleted/
```

It preserves legacy flat prompt files that had been moved into categorized folders so they are not lost while the app continues using the organized canonical structure.

## Preserved files

```text
prompt_library/deferred_not_deleted/legacy_flat_prompts/codex-activation-prompt.md
prompt_library/deferred_not_deleted/legacy_flat_prompts/perplexity-refinery-wrapper.md
```

## Canonical active replacements

```text
prompt_library/modes/minimal_token_efficiency/codex_activation_prompt_v1.md
prompt_library/execution_plan/perplexity_refinery_wrapper_v1.md
```

## Rule going forward

Do not remove potentially useful prompt assets without either:

1. Moving them into the correct canonical `prompt_library/` family folder, or
2. Preserving them under `prompt_library/deferred_not_deleted/` with a recovery note.

Generated dependency folders such as `.venv/` are not prompt assets and should stay out of active source control.
