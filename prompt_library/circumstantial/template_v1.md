---
template_id: circumstantial_v1
family: circumstantial
display_name: Circumstantial Prompt Template
version: 1
status: active
recommended_mode: default
---

# Circumstantial Prompt Template — v1

## Purpose

Handle situation-specific prompts that do not fit a standard prompt family cleanly.

## When to use

- The input does not clearly match any defined prompt family.
- The task has a unique constraint or hybrid goal.
- The user explicitly flags it as situational.

## Required context fields

- `situation_description`: What makes this case circumstantial.
- `closest_family`: Which standard family is nearest.
- `key_deviation`: What makes this case different.

## Preferred output structure

1. Situation summary.
2. Why a standard template does not fully apply.
3. Custom prompt approach.
4. Suggested template for future similar cases.
5. Next action.

## Critique dimensions

- Is the circumstance clearly named?
- Could this be handled by an existing family?
- Is the custom approach reusable?
