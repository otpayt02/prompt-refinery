# Prompt Refinery — Codex Bootstrap Prompt

> Paste this entire file as your first message to Codex.
> Codex will return the exact next prompt to give it to begin building.
> That returned prompt is your Acceptance Handshake — paste it back verbatim to start.

---

## ROLE

You are a senior full-stack product engineer and prompt-systems architect.
Your job is to build **Prompt Refinery** — a self-referential prompt-engineering workspace.
The product is built using the same interaction pattern it is designed to teach:
- the user gives rough input,
- the system refines it through structured clarification and critique loops,
- the system returns the best next prompt to give it,
- until the prompt is accepted verbatim and execution begins.

This first message is the raw project spec.
Your response to this message must follow the Prompt Refinery interaction model exactly:
1. Return a **Refined Understanding** of what you are being asked to build.
2. Return a **Canonical Execution Prompt** — the official first prompt the developer should paste back to you verbatim to begin.
3. Return a **Clarification Response Template** if you have any open questions (structured, fade-in questionnaire format).
4. Return a **Critique Template** at the end of every response until the Canonical Execution Prompt is accepted.
5. Return a **Suggested Next Prompt** after the critique template.

Once the developer pastes the Canonical Execution Prompt back to you verbatim with no critiques and no unanswered questions, begin building.

---

## PRODUCT DEFINITION

**Name**: Prompt Refinery
**Type**: Browser-based prompt-engineering workspace
**Primary purpose**: Convert rough user intent, messy notes, draft prompts, and optional MCP attachments into a structured, staged prompt pipeline — through classification, clarification, critique loops, and acceptance handshaking.
**Secondary feature**: Visual mind map / flow map of the refinement path, question trees, and prompt lineage.

---

## CORE INTERACTION MODEL

### Stage 0 — Intake
- User pastes rough input into a standard intake form.
- Optional: attach MCP context files, notes, or previous conversation exports.

### Stage 1 — Classification
- System classifies the input into one of the defined **Prompt Family** types.
- System selects the matching prompt template blueprint.
- System generates a **Refined Understanding** of what the user is trying to produce.

### Stage 2 — Clarification Loop
- System asks the minimum number of targeted questions needed to improve the prompt.
- Questions are presented in a **fade-in questionnaire UI**:
  - Each question fades in one at a time.
  - Multiple-choice answers are shown.
  - An "Other (type your own)" input is always available.
  - Multiple answers may be selected simultaneously.
  - All checked selections are accepted.
  - When the user submits, the question fades out and the next fades in.
  - When all questions are answered, the questionnaire ends and the draft prompt updates.
- System generates a structured **Clarification Response Template** for each question set.
- Clarification Response Template is not shown when there are no remaining questions.

### Stage 3 — Critique Loop
- After every clarification or revision pass, the system returns:
  - A **Canonical Execution Prompt** — the current best official prompt to give back.
  - A **Critique Template** — always appended, custom-generated for the current pass context.
  - A **Suggested Next Prompt** — optional directional guidance.
- If the user has critiques, they fill in the Critique Template and return it.
- If the user has no critiques and the system has no open questions, the user pastes the Canonical Execution Prompt back verbatim.

### Stage 4 — Acceptance Handshake
- All three conditions must be true simultaneously:
  1. The system has no remaining questions.
  2. The user provides no critique input.
  3. The user pastes the Canonical Execution Prompt back verbatim without modification.
- When these conditions are met, the system transitions to **Execution Pipeline** mode.

### Stage 5 — Execution Pipeline
- System generates the full prompt pipeline for the accepted goal:
  - All stage prompts in chronological order.
  - All circumstantial prompts labeled by situation.
  - All special-case templates.
  - All transition prompts for moving between stages.
  - Completion criteria for each stage.
- Every subsequent response includes:
  - Current stage context.
  - Suggested next prompt.
  - Critique Template.

---

## FILE SYSTEM ARCHITECTURE

All generated artifacts are saved and organized as follows.

### Conversation Numbering
- Conversations are four-digit zero-padded integers starting at `0000`.
- Within each conversation:
  - User inputs: `0000.0.0`, `0000.1.0`, `0000.2.0` ...
  - System responses: `0000.0.5`, `0000.1.5`, `0000.2.5` ...
  - Pairs are: `[0000.0.0, 0000.0.5]`, `[0000.1.0, 0000.1.5]`, etc.

### Folder Structure

```
prompt-refinery/
├── conversations/
│   └── 0000/
│       ├── 0000.0.0_input.md
│       ├── 0000.0.5_response.md
│       ├── 0000.1.0_input.md
│       ├── 0000.1.5_response.md
│       ├── clarifications/
│       │   ├── 0000.0.5_questions.md
│       │   └── 0000.1.0_answers.md
│       ├── critiques/
│       │   ├── 0000.1.5_critique_template.md
│       │   └── 0000.2.0_critique_filled.md
│       ├── next_step_prompts/
│       │   ├── chosen/
│       │   │   └── 0000.1.5_next_prompt_used.md
│       │   └── ignored/
│       │       └── 0000.0.5_next_prompt_skipped.md
│       └── canonical_prompts/
│           └── 0000.2.5_canonical_attempt.md
│
├── prompt_library/
│   ├── analysis/
│   │   └── template_v1.md
│   ├── product_spec/
│   │   └── template_v1.md
│   ├── research_brief/
│   │   └── template_v1.md
│   ├── execution_plan/
│   │   └── template_v1.md
│   ├── writing_content/
│   │   └── template_v1.md
│   ├── outreach_persuasion/
│   │   └── template_v1.md
│   ├── debugging_troubleshooting/
│   │   └── template_v1.md
│   ├── critique_loop/
│   │   └── template_v1.md
│   └── circumstantial/
│       └── template_v1.md
│
├── critique_templates/
│   └── 0000/
│       ├── 0000.0.5_critique.md
│       └── 0000.1.5_critique.md
│
├── clarification_templates/
│   └── 0000/
│       ├── 0000.0.5_questions.md
│       └── 0000.1.0_answers.md
│
├── session_log/
│   └── 0000_session.md
│
├── CODEX_PROMPT.md      ← this file
├── SPEC.md
└── README.md
```

### File behavior rules
- Critique templates are **appended** per conversation pass, not overwritten.
- Clarification Q&A pairs are **grouped by conversation** inside `clarification_templates/{conv_number}/`.
- Prompt library templates are **outside all conversation folders** — shared global assets.
- Templates AI generates are **copied to prompt_library** by family, AND stored in the conversation folder.
- Next-step prompts are filed under `chosen/` or `ignored/` based on whether the user followed them.
- Circumstantial prompts are filed in conversation AND sent as a copy to `prompt_library/circumstantial/`.

---

## UI BEHAVIOR SPEC

### Fade-in Questionnaire
- Each clarification question fades in individually, centered on screen.
- Options are shown as selectable chips (multiple selection allowed).
- An `Other (describe)` free-text input is always present.
- All checked answers are accepted when the user submits.
- Question fades out on submit.
- Next question fades in.
- When all questions answered, questionnaire disappears and prompt workspace updates.

### Visual Workspace (secondary feature)
- An interactive flow canvas shows:
  - Refinement pass history.
  - Question branches (what was asked, what was answered).
  - Prompt version lineage.
  - Stage transitions.
  - Unresolved question nodes.
- Optional: drag-and-drop grouping of ideas into clusters, Venn-style overlap zones.
- AI can surface visual prompts like "these two areas seem related — drag them closer to confirm."
- Optional: an AI-assisted 'help me understand' workspace where unresolved ambiguities appear as floating nodes that the user resolves by spatial arrangement.
- Mind map view is a secondary screen — the main UI is the prompt pipeline workspace.

### Main Workspace Panels
- Left: Input panel + conversation history.
- Center: Current prompt output (refined understanding + canonical prompt).
- Right: File explorer showing live folder structure.
- Bottom: Critique template (always visible until acceptance handshake).
- Floating: Suggested next prompt chip at top right.

### Stage Status Display
- A persistent stage indicator shows which state the session is in:
  `intake_received → classified → clarification_needed → prompt_draft_returned → critique_received → prompt_revised → ready_for_acceptance → accepted_verbatim → execution_pipeline_started`

---

## PROMPT FAMILY TAXONOMY

Each family has:
- Purpose
- Required context fields
- Preferred output structure
- Default clarification questions
- Critique dimensions
- Canonical template v1

Families:
1. `analysis` — break down existing material
2. `product_spec` — define product, MVP, architecture
3. `research_brief` — structured research question
4. `execution_plan` — step-by-step build or action sequence
5. `writing_content` — drafting, editing, tone
6. `outreach_persuasion` — pitch, message, proposal
7. `debugging_troubleshooting` — isolate and resolve failure
8. `critique_loop` — evaluate and improve existing work
9. `circumstantial` — situation-specific prompts that do not fit a standard family

---

## ACCEPTANCE HANDSHAKE RULES

The system must enforce all three conditions simultaneously:
1. No unresolved questions from the system.
2. No critique input from the user.
3. User input is an exact verbatim match of the last Canonical Execution Prompt.

If all three are met → transition to `accepted_verbatim` state.
If any are not met → remain in current loop stage.

The system must never self-advance the stage. The user's verbatim paste is the only valid trigger.

---

## STACK DECISIONS

- Frontend: React + TypeScript
- Styling: Tailwind CSS v4
- Animation: Framer Motion (fade-in questionnaire, stage transitions)
- Visual canvas: React Flow or custom canvas layer
- File system: Node.js file writer service or local IndexedDB for browser-native storage
- AI layer: OpenAI API (primary), with model routing planned for later
- State machine: XState or custom explicit state enum
- Storage: Local file export + optional cloud sync in later version
- Hosting: Vercel (frontend), Node backend for file writes if needed

---

## ADVANCED PROMPT ENGINEERING CONSTRAINTS

The following must be applied throughout the build:

1. **Schema-first outputs**: Every AI response must produce a typed structured object, not free-form text. Field names and field descriptions drive model adherence.
2. **Router-first classification**: Classify before generating. Route to the correct prompt family before any elaboration.
3. **Dynamic clarification minimization**: Ask only the highest-information-gap questions. Stop early when confidence is high.
4. **Critique as first-class workflow**: Critique templates are custom-generated for every pass context. They are never generic.
5. **Explicit halt conditions**: The system must always know which state it is in. It must never silently transition.
6. **Versioned templates**: All prompt family templates are versioned as `template_v1.md`, `template_v2.md`, etc.
7. **No agent loops without stop conditions**: Any future multi-agent feature must have explicit termination criteria before launch.
8. **Few-shot examples in every template**: Each prompt family template includes one strong example, one weak/incorrect example, one edge-case example.

---

## WHAT TO BUILD FIRST

MVP in this order:
1. File system architecture + folder naming conventions (scaffold only, no content yet).
2. Intake form UI (raw input + optional attachment area).
3. Classification engine (route input to prompt family).
4. Fade-in questionnaire component (multi-select, other input, fade logic).
5. Canonical prompt output panel.
6. Critique template generation and append logic.
7. Acceptance handshake state machine.
8. File save and append logic (conversations, critiques, clarifications, templates).
9. Next-step prompt display.
10. Session log writer.
11. Prompt library folder and template registry.
12. Visual canvas (secondary — after core workflow is solid).

---

## YOUR FIRST RESPONSE

Respond to this spec using the Prompt Refinery interaction model:

**Section 1: Refined Understanding**
Tell me what you understand this product to be. Be precise. Include: what it does, why it is different, and any tensions or ambiguities you see.

**Section 2: Open Questions**
List any questions you need answered before you can produce the Canonical Execution Prompt. Present them in the fade-in questionnaire format (numbered, with multiple-choice options and an Other field).

**Section 3: Canonical Execution Prompt (current best attempt)**
Write the best current official execution prompt I should paste back to you to begin. Update this each pass based on answers and critiques.

**Section 4: Critique Template (custom for this pass)**
Generate a structured critique template specific to this response. Append it at the bottom.

**Section 5: Suggested Next Prompt**
Give the optional directional next prompt if I want to go deeper before accepting.

---

> When I paste Section 3 back to you verbatim, and you have no open questions, and I provide no critiques,
> that is the signal that we have completed the preliminary refinement stage.
> Do not start building until that handshake is complete.
