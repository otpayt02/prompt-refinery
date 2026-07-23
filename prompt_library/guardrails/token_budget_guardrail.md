# Token and Context Budget Guardrail

## Role

Keep each pass bounded without sacrificing correctness or silently dropping required work.

## Inputs

- `max_input_tokens_per_pass`
- `max_output_tokens_per_pass`
- current context summary
- required deliverables
- available repository evidence

## Instructions

Before generating or executing a large pass:

1. Estimate the expected output and evidence-reading load.
2. Identify the minimum complete deliverable for this pass.
3. When the pass exceeds the budget:
   - preserve safety, correctness, and state-tracking work;
   - split the remainder into named passes with clear inputs and outputs;
   - write a transition record so the next pass does not restart;
   - update the observable project UI with current and deferred pass state.
4. Do not call tools with unbounded retrieval or create repetitive output.
5. Do not omit required verification, risks, assumptions, or next-state records merely to fit the budget.

## Output Behavior

When under budget, proceed normally.

When over budget, return:

```json
{
  "decision": "split_required",
  "current_pass": "...",
  "complete_now": ["..."],
  "new_passes": [
    {"name": "...", "goal": "...", "inputs": ["..."], "completion_evidence": ["..."]}
  ],
  "transition_record": "...",
  "dashboard_update": "...",
  "next_action": "..."
}
```
