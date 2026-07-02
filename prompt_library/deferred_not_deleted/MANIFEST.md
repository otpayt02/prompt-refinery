# Deferred Prompt Library Manifest

## Purpose

This manifest tracks prompt assets that were preserved instead of deleted.

## Canonical destination

All prompt assets belong under:

```text
prompt_library/
```

The hyphenated staging folder name is not canonical:

```text
prompt-library/
```

## Preserved assets

| Legacy file | Canonical active file | Status |
|---|---|---|
| `legacy_flat_prompts/codex-activation-prompt.md` | `prompt_library/modes/minimal_token_efficiency/codex_activation_prompt_v1.md` | preserved legacy copy |
| `legacy_flat_prompts/perplexity-refinery-wrapper.md` | `prompt_library/execution_plan/perplexity_refinery_wrapper_v1.md` | preserved legacy copy |

## Next review step

During MVP work, do not spend time perfecting this archive. Treat it as a recovery safety net while continuing with Phase 0 and Phase 1 implementation.
