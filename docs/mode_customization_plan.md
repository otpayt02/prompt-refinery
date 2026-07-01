# Mode Customization Plan

## Goal

Make modes easy to create, copy, edit, save, and apply from the UI.

## Separation of concepts

| Concept | Purpose |
|---|---|
| Prompt family | Defines the artifact type |
| Mode | Defines the operating behavior |
| Workflow wrapper | Defines a reusable multi-step tool workflow |

## Required UI

1. Built-in modes tab.
2. Custom modes tab.
3. Active mode selector.
4. Duplicate to Custom button.
5. Custom mode editor.
6. Save as new version.
7. Import/export Markdown.

## Built-in mode rules

Built-in modes should be locked but copyable.

```yaml
status: built_in
mutable: false
copyable: true
```

## Custom mode rules

Copied modes become custom and editable.

```yaml
status: custom
mutable: true
copyable: true
parent_mode_id: original_mode_id
```

## First implementation slice

1. Load templates from `prompt_library/modes/`.
2. Parse frontmatter.
3. Render built-in modes in the UI.
4. Add active mode selection.
5. Add duplicate-to-custom behavior.
6. Save copied custom modes.
7. Apply active mode instructions during prompt generation.

## Minimal Token Efficiency requirement

`minimal_token_efficiency` must be built-in, non-editable, and copyable. The user should be able to duplicate it to a custom editable mode without altering the original template.
