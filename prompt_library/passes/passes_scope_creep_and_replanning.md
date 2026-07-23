# Scope Creep and Replanning Pass

## Trigger

Run when a pass, feature, phase, or content workflow is drifting beyond its approved objective.

## Inputs

- original spec;
- MVP and non-scope definition;
- current work state;
- new ideas or requirements;
- change log and observable project state.

## Instructions

Produce:

1. `drift_analysis`
   - what changed;
   - why it appeared;
   - whether it is required for correctness or only useful.
2. `scope_creep_flags`
   - items outside the original MVP or current pass.
3. `replan_proposal`
   - keep the current pass narrow;
   - move new items into named phases or issues;
   - define dependencies and review points.
4. `guardrail_update`
   - add or refine rules preventing the same drift.
5. `dashboard_update`
   - show moved items, changed status, owner, and next action in the observable surface.

## Output

```json
{
  "drift_analysis": ["..."],
  "scope_creep_flags": ["..."],
  "replan_proposal": {
    "keep_in_current_pass": ["..."],
    "new_phase_name": "...",
    "moved_items": ["..."],
    "dependencies": ["..."]
  },
  "guardrail_update": ["Rule 6: ..."],
  "dashboard_update": ["..."],
  "next_action": "..."
}
```
