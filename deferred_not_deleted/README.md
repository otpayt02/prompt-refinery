# deferred_not_deleted

This folder is the quarantine/deferred home for repository material that should not be active source code but should remain documented for recovery, audit, or future migration.

## Why this exists

Prompt Refinery previously had a committed Python virtual environment (`.venv/`) in the repository. That directory was removed from active source control because generated dependency folders are not maintainable project source.

The removal is not treated as lost project intent. It is preserved here as a deferred cleanup record.

## Policy

- Do not restore generated dependency folders directly into active source paths.
- If a deferred item contains useful human-authored source, move that source into the correct canonical folder.
- If a deferred item is generated dependency state, preserve recovery instructions instead of recommitting the dependency dump.
- Keep this folder small, human-readable, and intentional.

## Current deferred items

- `.venv/` — removed from active Git history during repository cleanup. Recovery notes are in `removed_virtualenv_manifest.md`.
