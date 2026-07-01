# Prompt Refinery Step 1 Redesign

## 1. Visual direction summary

Step 1 is treated as a premium workflow workbench, not a form page. The screen keeps the existing 5-step shell, but makes the active Goal step the clear center of gravity. The design uses neutral layered surfaces, one restrained teal accent, compact app typography, subtle borders, and calm status language.

The top chrome is thin and informational. The stepper keeps users oriented. The Goal workbench is the primary task area. Questions and Canonical Output remain visible as intentional future states. Critique, details, history, and advanced tools are grouped as secondary utilities.

## 2. Design tokens

- Type: one modern sans stack, compact UI scale, no theatrical display treatment.
- Background: dark `#171614`, light `#f6f4ef`.
- Surface: dark `#1d1c1a`, light `#fbfaf7`.
- Surface 2: dark `#23211f`, light `#f1eee8`.
- Text: dark `#d8d3cc`, light `#211e19`.
- Muted text: dark `#969089`, light `#6f6a63`.
- Border: dark `rgba(255,255,255,.10)`, light `rgba(33,30,25,.10)`.
- Accent: dark `#58a0a8`, light `#0d6b6f`.
- Radius: 8px controls, 12px inputs and small utility surfaces, 16px primary panels.
- Shadow: subtle panel depth only on the active workbench and canonical output.
- Motion: low-amplitude hover/focus transitions, disabled by reduced-motion preferences.

## 3. Page layout architecture

- Header chrome: product title, concise subtitle, metadata pills, theme toggle.
- Current step band: the exact active step and the next action in one horizontal read.
- Workflow rail: 5-step navigation with active, pending, and future states.
- Main workflow column: Goal workbench, Questions placeholder, Canonical Output placeholder.
- Secondary drawer: critique, details, history, and advanced tools grouped below a utility label.
- Sticky action bar: repeats the next action without competing with the main workbench.

## 4. Component tree

```text
AppShell
  Topbar
    BrandLockup
    MetadataPills
    ThemeToggle
  WorkflowStatus
  WorkflowLayout
    WorkflowRail
      RailStep[5]
    PrimaryFlow
      GoalWorkbench
        WorkbenchHeader
        GoalField
        RoleRow
        WorkbenchActions
        MicroStatus
      QuestionsState
      CanonicalOutputState
    SupportDrawer
      UtilityGroupLabel
      CritiqueDetails
      OutputDetails
      HistoryDetails
      AdvancedToolsDetails
  BottomActionBar
```

## 5. Responsive rules

- Desktop uses a three-column layout: rail, dominant work column, secondary drawer.
- Medium screens keep the rail and main work column, then move secondary tools below.
- Mobile collapses to one column: header, current step, stepper, workbench, placeholders, utilities.
- Mobile actions become full-width stacked controls.
- Inputs keep real minimum height instead of shrinking with the viewport.

## 6. Interaction rules

- Generate Prompt is the only primary Step 1 action.
- Continue Without Questions remains available but visually secondary.
- Focus states use the single accent color and high-contrast outlines.
- Empty states explain why they are empty and what will happen next.
- Secondary tools are accessible through disclosure, but do not compete with the Goal workbench.
- The canonical output is visible at Step 1, but presented as a waiting source of truth.

## 7. JSX and CSS structure

Main JSX hooks added in `src/ui/App.tsx`:

- `workbench-header`
- `goal-field`
- `role-row`
- `workbench-actions`
- `empty-row`
- `empty-meta`
- `utility-group-label`

Main CSS token and component layer lives in `src/styles.css`:

- Theme tokens on `.app-shell`
- Light theme overrides on `.app-shell[data-theme="light"]`
- Active workbench styling on `.hero-panel`
- Canonical source-of-truth styling on `.canonical-panel`
- Mobile-first repair rules at the end of the stylesheet

## 8. Why these decisions improve clarity and trust

- Metadata pills turn loose labels into reliable app chrome.
- The current-step band tells the user where they are and what to do next.
- The Step 1 workbench uses stronger containment, better helper text, and better spacing so the goal input feels like the main task.
- Questions and Canonical Output use intentional empty states, which prevents the screen from feeling broken before generation.
- Secondary tools are grouped and visually quieter, so advanced capabilities stay available without distracting from the active step.
- The one-accent palette avoids generic AI decoration and gives selected, focus, and primary-action states a consistent meaning.
