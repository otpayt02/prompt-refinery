---
mode_id: minimal_token_efficiency
display_name: Minimal Token Efficiency
version: 1
status: built_in
mutable: false
copyable: true
default_prompt_family: circumstantial
token_policy: minimal
scope_policy: smallest_next_action
---

# Minimal Token Efficiency Mode

## Purpose

Reduce token usage and rate-limit pressure while still producing useful, actionable output.

## Rules

1. Give the smallest complete answer that solves the next step.
2. Do not restate all context unless necessary.
3. Ask only one blocking question at a time.
4. Prefer checklists, diffs, and direct commands over essays.
5. Do not generate extra examples unless requested.
6. Use high-effort reasoning only for architecture, hard debugging, or final review.
7. Stop once the next action is clear.

## Copy behavior

This mode is built-in and should not be edited directly. The UI should allow `Duplicate to Custom Mode`.
