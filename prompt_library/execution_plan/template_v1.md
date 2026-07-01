---
template_id: execution_plan_v1
family: execution_plan
display_name: Execution Plan Prompt Template
version: 1
status: active
recommended_mode: one_night_ai_stack_builder
---

# Execution Plan Prompt Template — v1

## Purpose

Turn a goal into a practical sequence of ordered actions with scope, dependencies, risks, and verification steps.

## Required context fields

- `goal`: What needs to be completed.
- `constraints`: Time, tools, budget, skill, or platform limits.
- `current_state`: What already exists.
- `definition_of_done`: How completion will be judged.

## Preferred output structure

1. Goal restatement.
2. Assumptions.
3. Critical path.
4. Step-by-step plan.
5. Time estimate.
6. Risk list.
7. Cut list.
8. Verification checklist.
9. Next action.

## Critique dimensions

- Is the plan executable?
- Are dependencies in the right order?
- Are risks and cuts explicit?
- Is the next action obvious?
