# Circumstantial Prompt Template — v1

## Purpose
Handle situation-specific prompts that do not fit a standard prompt family.
These are generated per context and appended here as reusable reference cases.

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
2. Why a standard template does not apply.
3. Custom prompt approach.
4. Suggested template for future similar cases.

## Critique dimensions
- Is the circumstance clearly named?
- Could this be handled by an existing family?
- Is the custom approach reusable?

## Strong example
> This task requires both a product spec and an outreach pitch written simultaneously — the spec defines what to build, and the pitch must reflect the same scope constraints. Handle these as linked outputs, not separate tasks.

## Weak example
> I have a weird request.

## Edge-case example
> A circumstantial prompt where the user's goal changes mid-session. Surface the change, confirm new intent, then continue.
