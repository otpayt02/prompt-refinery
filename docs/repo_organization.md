# Repo Organization Guide

## Canonical rule

Use `prompt_library/`, not `prompt-library/`.

A hyphenated `prompt-library/` folder is allowed only as a temporary import staging folder. After import, move useful files into `prompt_library/` and remove the staging folder.

## Root folders

| Folder | Purpose |
|---|---|
| `src/` | React/Vite app source |
| `server/` | Local file-writer/API service |
| `prompt_library/` | Reusable prompt templates, modes, and workflow wrappers |
| `integration_packages/` | Project integration kits |
| `conversations/` | Generated conversation artifacts |
| `accepted_prompts/` | Accepted prompt artifacts |
| `saved_roles/` | Saved role profiles |
| `session_log/` | Session logs |
| `docs/` | Organization, architecture, and implementation notes |

## File placement decision tree

1. Is it app source code?
   - Put it under `src/` or `server/`.
2. Is it a reusable prompt template?
   - Put it in the closest `prompt_library/{family}/` folder.
3. Is it an operating mode?
   - Put it under `prompt_library/modes/{mode_id}/template_v1.md`.
4. Is it a custom mode?
   - Put it under `prompt_library/modes/custom/{custom_mode_id}/template_v1.md`.
5. Is it a reusable workflow wrapper?
   - Put it under the closest prompt family, usually `execution_plan/`.
6. Is it documentation about the repo or app?
   - Put it under `docs/`.
7. Is it a generated artifact?
   - Keep it under the existing artifact folders.
8. Is it a local environment, dependency, cache, or build output?
   - Do not commit it.

## Never commit

- `.venv/`
- `venv/`
- `node_modules/`
- `dist/`
- `.env`
- `.env.local`
- `__pycache__/`
- compiled `.pyc` files

## Large cleanup process

For large imports:

1. Inventory files by top-level folder and extension.
2. Move prompt files in batches by family.
3. Move modes separately.
4. Delete dependency/build/cache folders.
5. Update `prompt_library/registry.md`.
6. Run `npm run typecheck` and `npm run build` locally.
