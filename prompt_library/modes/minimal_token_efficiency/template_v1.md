---
mode_id: minimal_token_efficiency
display_name: Minimal Token Efficiency
version: 1
status: built_in
mutable: false
copyable: true
save_target: prompt_library/modes/custom/minimal_token_efficiency_custom/template_v1.md
default_prompt_family: circumstantial
token_policy: minimal
scope_policy: smallest_next_action
---

# Minimal Token Efficiency Mode

## Purpose

Operate Prompt Refinery with the lowest reasonable token usage and lowest rate-limit pressure while still producing useful, actionable output.

## Built-in lock behavior

This mode is built-in and non-editable. The user may copy it into a custom mode, then edit the copy.

## Core rules

1. Prefer short answers with clear next actions.
2. Do not restate the full project context unless needed.
3. Ask at most one blocking question at a time.
4. Use repo files as the source of truth instead of repeating context in chat.
5. Avoid broad rewrites; make the smallest useful change.
6. Prefer diffs, checklists, and direct commands over essays.
7. Summarize assumptions in one short section only when needed.
8. Use high-reasoning work only for architecture, hard debugging, or final review.
9. Do not generate extra examples unless requested.
10. Stop when the next action is clear.

## Response budget defaults

- Planning answer: 300 to 600 words.
- Debugging answer: diagnose, fix, verify.
- Code task: inspect, patch, test, summarize.
- Research answer: use bullets and citations, avoid long background.
- Follow-up prompt: one optional next step max.

## App UI controls

The UI should let the user configure a copied custom version with:

- Verbosity: compact, normal, detailed.
- Question policy: none unless blocking, one at a time, full questionnaire.
- Context policy: repo-first, chat-first, hybrid.
- Reasoning policy: low, medium, high for hard tasks only.
- Output policy: commands first, explanation first, checklist first.

## Copy behavior

The active built-in mode cannot be edited. The UI should provide:

> Duplicate to Custom Mode

The custom copy should preserve the original metadata plus a new `parent_mode_id` field.
