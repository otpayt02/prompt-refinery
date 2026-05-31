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

### Conversation Numbering
- Conversations are four-digit zero-padded integers starting at `0000`.
- Within each conversation:
  - User inputs: `XXXX.N.0`
  - System responses: `XXXX.N.5`
  - Pairs are: `[XXXX.0.0, XXXX.0.5]`, `[XXXX.1.0, XXXX.1.5]`, etc.

### Live Conversation Log
Every conversation folder contains one primary **running log file**:
```
conversations/XXXX/XXXX_conversation.md
```
- This file is **append-only**. It is never overwritten.
- It **auto-appends every 20 seconds** via a client-side flush interval.
- Each turn is stamped with: turn ID, role (USER / SYSTEM), ISO 8601 UTC timestamp, current state, prompt family (system only), pass number (system only).
- In-progress turns are buffered in memory; only finalized turns are written.
- On page unload, a **force flush** triggers immediately.
- Individual turn files are still saved separately in `turns/` for granular access.

### Turn entry format inside `XXXX_conversation.md`
```md
---
## [XXXX.N.0] USER — 2026-05-31T02:03:00Z
<!-- state: prompt_draft_returned -->

{full input text}

---
## [XXXX.N.5] SYSTEM — 2026-05-31T02:03:14Z
<!-- state: critique_received -->
<!-- prompt_family: product_spec -->
<!-- pass: 2 -->

{full response text}
```

### Folder structure

```
prompt-refinery/
├── conversations/
│   └── 0000/
│       ├── 0000_conversation.md        ← live running log, appended every 20s
│       ├── turns/
│       │   ├── 0000.0.0_input.md
│       │   ├── 0000.0.5_response.md
│       │   ├── 0000.1.0_input.md
│       │   └── 0000.1.5_response.md
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
│   ├── analysis/template_v1.md
│   ├── product_spec/template_v1.md
│   ├── research_brief/template_v1.md
│   ├── execution_plan/template_v1.md
│   ├── writing_content/template_v1.md
│   ├── outreach_persuasion/template_v1.md
│   ├── debugging_troubleshooting/template_v1.md
│   ├── critique_loop/template_v1.md
│   └── circumstantial/template_v1.md
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
├── CODEX_PROMPT.md
├── SPEC.md
└── README.md
```

### File behavior rules
- `XXXX_conversation.md` is the **source of truth for the full conversation** — append only, auto-flushed every 20s.
- Individual `turns/` files are granular snapshots — still written per turn.
- Critique templates are **appended** per pass, not overwritten.
- Clarification Q&A pairs are grouped by conversation.
- Prompt library templates are **outside all conversation folders** — shared global assets.
- Templates AI generates are **copied to prompt_library** by family AND stored in conversation folder.
- Next-step prompts are filed under `chosen/` or `ignored/`.
- Circumstantial prompts live in conversation AND `prompt_library/circumstantial/`.

### Auto-update implementation spec

```ts
// File writer service — pseudocode

const FLUSH_INTERVAL_MS = 20_000;
const pendingTurns: Turn[] = [];

function enqueueTurn(turn: Turn) {
  // Called when a turn is finalized in the state machine
  pendingTurns.push(turn);
}

setInterval(async () => {
  if (pendingTurns.length === 0) return;
  const batch = pendingTurns.splice(0, pendingTurns.length);
  const appendBlock = batch.map(formatTurnBlock).join('\n');
  await appendToFile(
    `conversations/${convId}/${convId}_conversation.md`,
    appendBlock
  );
}, FLUSH_INTERVAL_MS);

// Force flush on tab close / page unload
window.addEventListener('beforeunload', () => flushNow());

function formatTurnBlock(turn: Turn): string {
  const role = turn.role === 'user' ? 'USER' : 'SYSTEM';
  const meta = turn.role === 'system'
    ? `<!-- prompt_family: ${turn.promptFamily} -->\n<!-- pass: ${turn.pass} -->`
    : '';
  return [
    '---',
    `## [${turn.id}] ${role} — ${turn.timestamp}`,
    `<!-- state: ${turn.state} -->`,
    meta,
    '',
    turn.content,
    ''
  ].filter(Boolean).join('\n');
}
```

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
- An interactive flow canvas shows refinement pass history, question branches, prompt version lineage, stage transitions, and unresolved question nodes.
- Optional drag-and-drop grouping, Venn-style overlap zones.
- AI-assisted 'help me understand' nodes for unresolved ambiguities.
- Mind map view is secondary — main UI is the prompt pipeline workspace.

### Main Workspace Panels
- Left: Input panel + conversation history.
- Center: Current prompt output (refined understanding + canonical prompt).
- Right: File explorer showing live folder structure.
- Bottom: Critique template (always visible until acceptance handshake).
- Floating: Suggested next prompt chip at top right.

### Stage Status Display
```
intake_received → classified → clarification_needed → prompt_draft_returned
→ critique_received → prompt_revised → ready_for_acceptance
→ accepted_verbatim → execution_pipeline_started
```

---

## PROMPT FAMILY TAXONOMY

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

1. No unresolved questions from the system.
2. No critique input from the user.
3. User input is an exact verbatim match of the last Canonical Execution Prompt.

If all three are met → `accepted_verbatim`.
System must never self-advance the stage.

---

## STACK DECISIONS

- Frontend: React + TypeScript
- Styling: Tailwind CSS v4
- Animation: Framer Motion
- Visual canvas: React Flow
- File writer: Node.js service (or IndexedDB for browser-native)
- AI layer: OpenAI API (primary)
- State machine: XState
- Storage: Local file export + optional cloud sync (later)
- Hosting: Vercel

---

## ADVANCED PROMPT ENGINEERING CONSTRAINTS

1. **Schema-first outputs** — every AI response produces a typed structured object.
2. **Router-first classification** — classify before generating.
3. **Dynamic clarification minimization** — ask only highest-information-gap questions.
4. **Critique as first-class workflow** — custom-generated per pass, never generic.
5. **Explicit halt conditions** — state machine enforced, no silent transitions.
6. **Versioned templates** — `template_v1.md` → `template_v2.md`.
7. **No agent loops without stop conditions**.
8. **Few-shot examples in every template** — strong, weak, edge-case.

---

## WHAT TO BUILD FIRST

1. File system scaffold.
2. Intake form UI.
3. Classification engine.
4. Fade-in questionnaire component.
5. Canonical prompt output panel.
6. Critique template generation and append logic.
7. Acceptance handshake state machine.
8. File save + 20-second auto-append logic (`XXXX_conversation.md` + individual `turns/`).
9. Next-step prompt display.
10. Session log writer.
11. Prompt library registry.
12. Visual canvas (secondary).

---

## YOUR FIRST RESPONSE

Respond to this spec using the Prompt Refinery interaction model:

**Section 1: Refined Understanding**
Tell me what you understand this product to be. Be precise. Include what it does, why it is different, and any tensions or ambiguities you see.

**Section 2: Open Questions**
List any questions you need answered. Present them in fade-in questionnaire format: numbered, with multiple-choice options and an Other field.

**Section 3: Canonical Execution Prompt (current best attempt)**
Write the best current official execution prompt I should paste back to you to begin.

**Section 4: Critique Template (custom for this pass)**
Generate a structured critique template specific to this response context.

**Section 5: Suggested Next Prompt**
Optional directional next prompt to go deeper before accepting.

---

> When I paste Section 3 back to you verbatim, you have no open questions, and I provide no critiques —
> that is the Acceptance Handshake. Do not start building until it is complete.
