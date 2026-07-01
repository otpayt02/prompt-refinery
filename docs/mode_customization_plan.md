# Mode Customization Plan

## Current state

Prompt Refinery currently defines prompt families and project stages, but it does not yet define a separate mode system.

Current families:

- `analysis`
- `product_spec`
- `research_brief`
- `execution_plan`
- `writing_content`
- `outreach_persuasion`
- `debugging_troubleshooting`
- `critique_loop`
- `circumstantial`

The app idea has modes like `create portfolio` and `do a project`, but those should become first-class mode records instead of hard-coded UI choices.

## What needs to change

### 1. Add a mode registry

Create a registry that loads built-in mode templates from:

```txt
prompt_library/modes/{mode_id}/template_v1.md
```

Each mode should parse frontmatter metadata and markdown instructions.

### 2. Separate mode from prompt family

A prompt family controls the artifact type.

A mode controls behavior.

Example:

- Family: `execution_plan`
- Mode: `one_night_ai_stack_builder`

### 3. Add Mode Manager UI

The UI should have:

- Built-in Modes tab
- Custom Modes tab
- Active Mode selector
- Duplicate to Custom button
- Edit Custom Mode form
- Save New Version button
- Import/Export Markdown button

### 4. Built-in mode locking

Built-in modes should support:

```yaml
mutable: false
copyable: true
```

The UI should hide direct editing for locked modes but allow copying.

### 5. Custom mode saving

Copied modes should be saved with:

```yaml
status: custom
mutable: true
parent_mode_id: original_mode_id
```

Local-file version:

```txt
prompt_library/modes/custom/{custom_mode_id}/template_v1.md
```

Future database version:

```ts
ModeTemplate {
  id: string
  displayName: string
  status: 'built_in' | 'custom'
  parentModeId?: string
  mutable: boolean
  copyable: boolean
  version: number
  frontmatter: Record<string, unknown>
  body: string
  createdAt: string
  updatedAt: string
}
```

## How modes change right now

Right now there is no implemented mode switcher in the repo docs. The closest thing is selecting a prompt family during classification. To change modes properly, the app needs the mode registry and Mode Manager UI described here.

## Recommended first implementation slice

1. Add mode template files.
2. Add a mode registry parser.
3. Render active mode in the session header.
4. Let user select active built-in mode.
5. Add Duplicate to Custom.
6. Add custom mode editor.
7. Save custom mode to file or app storage.
8. Apply active mode instructions when generating prompts.

## Minimal Token Efficiency mode requirement

`minimal_token_efficiency` must be built-in, non-editable, and copyable.

The copied custom mode should be editable from the UI and saved under custom modes.
