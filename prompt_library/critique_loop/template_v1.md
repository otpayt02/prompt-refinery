---
template_id: critique_loop_v1
family: critique_loop
display_name: Critique Loop Prompt Template
version: 1
status: active
recommended_mode: default
---

# Critique Loop Prompt Template — v1

## Purpose

Evaluate existing work, identify weaknesses, and generate a structured revision brief.

## Required context fields

- `work_to_critique`: The output, prompt, plan, or artifact being evaluated.
- `critique_goal`: What dimension to focus on.
- `revision_depth`: light, moderate, or full rewrite.

## Preferred output structure

1. What is working well.
2. What is not working.
3. What is missing entirely.
4. What should be changed and how.
5. Revised version or revision brief.

## Critique dimensions

- Is the critique goal specific?
- Is the revision depth appropriate?
- Are all weakness types covered?
- Is the revision actionable?
