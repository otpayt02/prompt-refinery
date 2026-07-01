---
skill_id: thread_policy_decision_v1
family: skill_spec
display_name: Thread Policy Decision
version: 1
status: active
recommended_agent: product_development_agent
---

# Thread Policy Decision Skill

## Purpose

Decide whether to continue the current thread, compress it, close it, or start a new thread.

## Policy levels

- Lazy: close only when necessary.
- Reasonable: close when scope shifts or token load grows.
- Frequent: close after major subtasks or a small number of passes.
- Aggressive: close often and continue from summaries.

## Inputs

- Thread policy.
- Pass count.
- Token estimate.
- Scope drift signal.
- Phase/feature change signal.
- Whether the next prompt depends on full prior context.

## Output

Return one decision:

- continue_thread
- compress_context
- close_thread
- start_new_thread

Also return the reason and continuation summary if needed.
