# Change Tracking Contract

## Purpose

Track every meaningful pass from request through implementation, verification, operator review, and completion.

## Required Fields

```json
{
  "change_id": "CHG-YYYYMMDD-001",
  "request_summary": "...",
  "scope": ["..."],
  "out_of_scope": ["..."],
  "status": "planned|active|blocked|review_ready|approved|completed",
  "files_created": ["..."],
  "files_modified": ["..."],
  "commands_run": ["..."],
  "verification": [
    {"check": "...", "result": "pass|fail|not_run", "evidence": "..."}
  ],
  "decisions": ["..."],
  "assumptions": ["..."],
  "risks": ["..."],
  "deferred": ["..."],
  "human_review": {"required": true, "status": "pending|approved|rejected"},
  "updated_at": "ISO-8601",
  "next_action": "..."
}
```

## Rules

- Never claim an unrun check passed.
- Separate planned, implemented, verified, approved, and published states.
- Link dashboard state to real evidence.
- Record failures that affect future decisions.
- Update current state, change log, decision log when applicable, and observable UI in the same pass.
- Keep records concise; link to specs rather than duplicating them.

## Completion Gate

A change is complete only when implementation, evidence, dashboard state, logs, decisions, and next action agree.
