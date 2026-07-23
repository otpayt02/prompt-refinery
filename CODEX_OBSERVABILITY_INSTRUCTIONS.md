# Codex Observability and Tracking Instructions

Use this file with `AGENTS.md` for every Codex thread and every substantial prompt in this repository or in a target project using Prompt Refinery.

## Mandatory Operating Loop

1. Read the target repository's agent instructions, current-state document, locked decisions, and relevant prompt templates.
2. Assign a stable change ID: `CHG-YYYYMMDD-NNN`.
3. State the current objective, success condition, scope, non-scope, assumptions, and verification plan.
4. Execute the smallest correct pass.
5. Maintain an observable visualization, dashboard, review UI, or generated status page for the project.
6. Update change records, decision records, current state, and dashboard state in the same pass.
7. Verify the implementation and the UI controls.
8. Run the relevant self-review prompt before presenting work as review-ready.
9. Return exact evidence, unresolved risks, and one paste-ready next Codex prompt.

## Observable UI Requirement

Apply `prompt_library/skills/observable_project_ui.md` to every substantial project even when the operator does not separately ask for a UI.

- Reuse an existing UI when possible.
- Every visible item must be a working control, valid link, real status/value, or concise label/instruction required by another element.
- Remove filler text, decorative cards, fake charts, generic descriptions, and nonfunctional controls.
- Connect the UI to real tracked files, APIs, manifests, logs, tests, or operator decisions.
- Do not claim completion until the visible state matches the implementation and verification evidence.

## Change Tracking Requirement

For each substantial pass, record:

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
  "verification": [{"check": "...", "result": "pass|fail|not_run", "evidence": "..."}],
  "decisions": ["..."],
  "assumptions": ["..."],
  "risks": ["..."],
  "deferred": ["..."],
  "human_review": {"required": true, "status": "pending|approved|rejected"},
  "updated_at": "ISO-8601",
  "next_action": "..."
}
```

Never describe an unrun check as passed. Separate implemented, verified, approved, and published states.

## Required Response Sections

- `COMPLETED_THIS_TURN`
- `DECISIONS_LOCKED`
- `ASSUMPTIONS_MADE`
- `RISKS`
- `DEFERRED_ITEMS`
- `VERIFICATION_EVIDENCE`
- `DASHBOARD_AND_TRACKING_STATE`
- `SELF_EVALUATION`
- `RECOMMENDED_NEXT_PROMPT_FOR_CODEX`

## Manual Shorts Mode

When the project is producing a YouTube Short:

- produce one complete manual Short before automating the whole workflow;
- prefer free or free-tier browser tools and avoid large local installations;
- include a verified topic, final spoken script, timestamped shot list, exact screen captures, animation plan, asset list, edit settings, export settings, and operator action;
- run the strict Short self-review prompt and revise failures before delivery;
- never automate publishing without explicit approval.
