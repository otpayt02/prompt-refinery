# karen-dict-scrape Prompt Loop Profile

This profile is adapted to the current project folder at `C:\Users\olive\Projects\karen-dict-scrape`.

## Project

- Name: karen-dict-scrape
- Path: C:\Users\olive\Projects\karen-dict-scrape
- Current repo state: Git repo with `.venv` and `.prompt-loop`; no source files, README, tests, scraper, data samples, or package metadata detected yet.
- Current stack evidence: Python virtual environment exists at `.venv` using Python 3.12.10.
- Primary reviewer: human non-developer review first, then Codex verification.

## Goal

Create a human-reviewable MVP for scraping, structuring, validating, and exporting Karen dictionary data without overbuilding the system.

## MVP Boundary

The first version should bootstrap a small, inspectable Python pipeline:

1. Add the minimum project files needed to run a sample pipeline.
2. Use a small controlled sample input if the real dictionary source URL/file is not known yet.
3. Normalize entries into a clear structured format.
4. Export results to a human-reviewable file such as CSV, JSON, or Markdown.
5. Include practical validation checks for missing fields, duplicate entries, malformed rows, or source errors.
6. Document how to run the pipeline and how to inspect output.

Do not build a full production crawler, UI, database, scheduler, or publishing system until the sample pipeline works and can be reviewed.

## Success State

The loop can stop when:

- A sample dictionary scrape or ingest pipeline runs locally from the repo.
- The output is saved in a human-reviewable format with enough fields to judge correctness.
- Validation reports obvious data quality issues instead of silently accepting bad rows.
- The repo has clear run instructions.
- Codex reports the exact commands it ran and the files/artifacts to inspect.

## Recommended First Files

Codex should inspect first, then create only what is needed. Likely first-pass files:

- `README.md` with setup, run, and review instructions.
- `src/` or a small Python module for ingest/normalize/export logic.
- `data/sample/` for controlled sample input.
- `output/` or `data/processed/` for generated reviewable output.
- `tests/` only if the first implementation has testable parsing/validation logic.
- `.gitignore` to exclude `.venv`, caches, and generated throwaway files while preserving useful sample/output artifacts as appropriate.

## Verification Commands

Current known command:

```powershell
.\.venv\Scripts\python.exe --version
```

Candidate commands after Codex creates the MVP files:

```powershell
.\.venv\Scripts\python.exe -m pytest
.\.venv\Scripts\python.exe -m src.main --help
.\.venv\Scripts\python.exe -m src.main --sample
```

Codex must adapt these to the actual files it creates. It should not report pytest as required until tests or pytest configuration exist.

## Human Review Checks

- Open the exported sample output and inspect 10 entries manually, or all entries if the sample has fewer than 10.
- Confirm each entry has source text, normalized fields, and any translation/definition fields expected by the project.
- Confirm validation output flags ambiguous or incomplete rows instead of silently accepting them.
- Confirm the README explains how to reproduce the sample output from a clean terminal.
- Confirm the MVP avoids claiming dictionary accuracy without source inspection or human validation.

## First Codex Pass

Use the Codex State wrapper with this task:

```text
Inspect this empty Python-oriented repository and bootstrap the smallest human-reviewable Karen dictionary scraping MVP. First verify the current repo state, Python version, and lack of source files. Then create the minimum files needed for a reproducible sample ingest/normalize/export pipeline using controlled sample data if no real source is provided. Include clear README instructions, practical validation, and a human-reviewable output artifact. Do not build a full crawler, UI, database, scheduler, or production system. Return the required Codex State wrapper with changed files, verification, human review steps, and a suggested next Codex prompt.
```

## Notes

- Keep all claims evidence-based. Do not infer dictionary accuracy without source inspection or human review.
- Prefer free, local, and open-source tooling.
- Keep the first pass focused on a working sample pipeline and reviewable output.