# Mode Templates

Modes define how Prompt Refinery behaves while working inside a session.

A mode is different from a prompt family:

- **Prompt family** answers: what kind of artifact is being created?
- **Mode** answers: how should the app behave while creating it?

Examples:

- `one_night_ai_stack_builder` — aggressive MVP scoping and one-night build guidance.
- `minimal_token_efficiency` — compact, rate-limit-aware, low-token operation.
- `create_portfolio` — portfolio-focused project generation.
- `do_project` — guided project execution.

## Recommended mode schema

Each mode should use frontmatter metadata so the UI can render, copy, lock, and edit it.

Required fields:

- `mode_id`
- `display_name`
- `version`
- `status`
- `mutable`
- `copyable`
- `save_target`
- `default_prompt_family`
- `token_policy`
- `scope_policy`

## UI behavior

The app should expose a **Mode Manager** screen with:

1. Built-in modes tab.
2. Custom modes tab.
3. Duplicate button for copyable built-in modes.
4. Edit button for mutable custom modes only.
5. Version history for saved custom modes.
6. Import/export as Markdown with frontmatter.
7. Active mode selector in the session header.

## Locking rule

A built-in mode may be non-editable but copyable. The user should never directly modify locked system modes. Instead, the UI should offer:

> Duplicate to Custom Mode

The copied custom mode becomes editable and should be saved under:

```txt
prompt_library/modes/custom/{mode_id}/template_v1.md
```

or in the future app database equivalent.
