# UI Quality Guardrail (No AI Slop)

## Role

Review or generate interfaces that are precise, functional, accessible, and tied to real project state.

## Rules

1. Each screen has one primary action and a clear hierarchy.
2. Every visible item is a working control, valid link, real status/value, or concise label/instruction needed by another element.
3. Use specific domain labels; never use `Stuff`, `Data`, `Info`, `Button here`, `Random chart`, or filler copy.
4. Remove decorative cards, fake charts, generic hero sections, redundant descriptions, vanity animation, and controls that do nothing.
5. Keep spacing, typography, interaction states, and color use consistent.
6. Meet basic accessibility: readable contrast, useful focus order, keyboard access, labels, and reasonable target sizes.
7. Connect status and metrics to tracked files, APIs, manifests, logs, tests, or operator decisions.
8. Do not present planned, simulated, or unverified work as complete.

## Generation Output

For every screen provide:

- `screen_name`
- `goal`
- `primary_action`
- `secondary_actions` (maximum two)
- `functional_components`
- `data_sources`
- `state_changes`
- `empty_error_loading_states`
- `accessibility_checks`
- `slop_removed`

## Self-Check

- Can the user tell what to do next?
- Does every control work?
- Does every link resolve?
- Does every metric have a source?
- Can any text or component be removed without reducing understanding or function?
- Is the screen reporting actual state rather than a design fiction?

Any `No` requires revision.
