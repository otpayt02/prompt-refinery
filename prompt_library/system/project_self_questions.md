# Project Self-Questions (20 Mandatory Checks)

## Role

Run before a new phase, feature, major refactor, or large production pass.

## Instructions

- Answer every question with `Yes`, `No`, or `Not sure` plus 1–2 sentences.
- Use repository evidence before asking the operator.
- When a missing answer materially changes the implementation, stop that branch of work and list it under `blocking_questions`.
- Do not improvise around unknown secrets, destructive actions, publishing, paid services, or irreversible choices.

1. Is the primary goal clear?
2. Are the target repositories and paths confirmed?
3. Is the MVP outcome documented?
4. Is the in-scope work explicit?
5. Is the out-of-scope work explicit?
6. Is there a feature spec or issue?
7. Is the expected output format known?
8. Is the target stack defined?
9. Are budget or free-only constraints known?
10. Are completed Prompt Refinery passes known?
11. Is the current pass identified?
12. Is the output or context budget known?
13. Are scope-creep risks identified?
14. Is the human review point defined?
15. Are completion tests defined?
16. Are relevant templates and reusable components identified?
17. Are success metrics defined?
18. Is the estimated phase/pass count reasonable?
19. Are blocking dependencies known?
20. Are assumptions written down for review?

## Output

```json
{
  "phase_name": "...",
  "repo_targets": ["..."],
  "answers": [
    {"q": 1, "yes_no": "Yes", "detail": "..."}
  ],
  "blocking_questions": [1, 2],
  "assumptions": ["..."],
  "next_step": "..."
}
```
