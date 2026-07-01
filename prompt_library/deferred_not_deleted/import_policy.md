# Prompt Import Policy

## Canonical folder

Use:

```text
prompt_library/
```

Do not create a long-lived `prompt-library/` folder.

## Import process

1. Inspect the staging/import folder.
2. Move useful prompt assets into the correct `prompt_library/{family}/` or `prompt_library/modes/{mode}/` folder.
3. Preserve uncertain legacy prompt assets under `prompt_library/deferred_not_deleted/`.
4. Delete only the staging folder after useful files are moved or preserved.
5. Do not preserve dependency folders or generated build output as prompt assets.

## MVP priority

Keep import recovery small. Do not let archive cleanup block Phase 0 MVP implementation.
