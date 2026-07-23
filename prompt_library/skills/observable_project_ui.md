# Observable Project UI Skill

## Trigger

Apply to every substantial project, phase, feature, refactor, or production workflow, even when the user does not separately request a dashboard.

## Goal

Give the operator a visual, inspectable view of what is changing, why it changed, what passed, what failed, and what action comes next.

## Rules

1. Reuse an existing project UI before creating another one.
2. When no UI exists, create the smallest maintainable surface: an app route, static HTML page, generated review page, or terminal UI only when browser output is impractical.
3. Bind the surface to real tracked state from files, APIs, manifests, logs, tests, artifacts, or explicit operator decisions.
4. Never fabricate progress, metrics, evidence, approvals, or test results.
5. Update the surface during the same pass as the work it represents.

## Functional UI Only

Every visible item must be:

- a working control that performs or records an action;
- a valid link;
- a real status, metric, value, identifier, or label;
- concise instructional text required to understand or safely operate another element.

Remove decorative cards, fake charts, generic hero copy, filler descriptions, redundant summaries, vanity animation, placeholder controls, and buttons that do nothing.

## Required Views

- Current objective, phase, success state, and owner.
- Change map with stable change IDs, files, reasons, and evidence links.
- Execution state: planned, active, blocked, review-ready, approved, completed.
- Verification evidence: commands, checks, results, artifacts, and failures.
- Decisions, assumptions, risks, and deferred items.
- One primary next action and no more than two secondary actions.

## Interaction Checks

- Buttons work.
- Filters change visible results.
- Links resolve.
- Expanders reveal evidence.
- Copy and download controls return the intended content.
- Approval and rejection controls persist a decision or clearly state that they are preview-only.
- External, destructive, paid, or publishing actions remain human-confirmed.
- Keyboard focus and readable contrast are present.

## Tracking Schema

```json
{
  "change_id": "CHG-YYYYMMDD-001",
  "project": "...",
  "phase": "...",
  "objective": "...",
  "status": "planned|active|blocked|review_ready|approved|completed",
  "files": ["..."],
  "verification": [{"check": "...", "result": "pass|fail|not_run", "evidence": "..."}],
  "decisions": ["..."],
  "risks": ["..."],
  "updated_at": "ISO-8601",
  "next_action": "..."
}
```

## Completion Gate

Do not report substantial work complete until the observable surface, logs, evidence, changed files, decisions, risks, and next action agree.
