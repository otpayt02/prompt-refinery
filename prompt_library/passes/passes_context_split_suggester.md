# Context Split Suggester Pass

## Trigger

Run when the current phase has grown large, context is heavy, state is becoming ambiguous, or the work is dragging across too many concerns.

## Inputs

- current phase name;
- completed work;
- remaining tasks;
- context or token pressure;
- confusion or repeated-work signs;
- current change log and dashboard state.

## Instructions

Produce:

1. `overload_signs`
   - why the pass is too large;
   - what evidence is getting hard to maintain.
2. `split_plan`
   - create 1–3 new passes or issues;
   - give each a clear goal, inputs, exclusions, and completion evidence;
   - preserve dependencies and sequence.
3. `transition_plan`
   - close the current pass cleanly;
   - summarize decisions, files, evidence, blockers, and next state;
   - update the observable UI so the operator can navigate the split.

## Output

```json
{
  "overload_signs": ["..."],
  "split_plan": [
    {
      "new_pass": "...",
      "goal": "...",
      "tasks": ["..."],
      "out_of_scope": ["..."],
      "completion_evidence": ["..."]
    }
  ],
  "transition_plan": "...",
  "dashboard_update": ["..."],
  "next_action": "..."
}
```
