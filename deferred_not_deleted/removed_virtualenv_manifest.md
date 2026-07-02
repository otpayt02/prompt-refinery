# Removed virtualenv manifest

## Deferred item

`.venv/`

## Status

Deferred, not active source.

## Why it was removed from active source

The `.venv/` directory is a generated Python virtual environment. It can contain thousands of dependency files, local machine paths, generated caches, and package internals that should not be reviewed or maintained as project source.

## What to preserve instead

Use dependency manifests and setup commands, not the generated environment folder.

## Recovery approach

If a Python helper environment is needed later, recreate it locally:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
```

Then install only the dependencies required by the specific helper feature.

## Future migration rule

If any human-authored script was accidentally placed inside `.venv/`, recover that script from Git history and move it into a canonical source folder such as:

- `scripts/`
- `server/`
- `tools/`
- `prompt_library/skills/`

Do not restore the full virtual environment into active source control.

## Decision

The item is preserved as a deferred/audited cleanup record rather than reintroduced as active code.
