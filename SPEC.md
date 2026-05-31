# Prompt Refinery — Product Spec

## One-line definition
A prompt-engineering workspace that converts rough intent into a classified, clarified, critique-ready, reusable prompt pipeline — with mind mapping as a secondary visualization of refinement state and prompt flow.

---

## Product states

```
intake_received
  → classified
  → clarification_needed
  → prompt_draft_returned
  → critique_received
  → prompt_revised
  → ready_for_acceptance
  → accepted_verbatim
  → execution_pipeline_started
```

---

## Conversation numbering

- Conversations: `0000`, `0001`, `0002` ...
- Within conversation:
  - Inputs:    `XXXX.N.0`
  - Responses: `XXXX.N.5`
  - Pairs are: `[XXXX.0.0, XXXX.0.5]`, `[XXXX.1.0, XXXX.1.5]`, etc.

---

## File organization rules

| Artifact | Location |
|---|---|
| **Live conversation log** | `conversations/XXXX/XXXX_conversation.md` |
| Individual input turns | `conversations/XXXX/turns/XXXX.N.0_input.md` |
| Individual response turns | `conversations/XXXX/turns/XXXX.N.5_response.md` |
| Clarification Q&A | `conversations/XXXX/clarifications/` AND `clarification_templates/XXXX/` |
| Critique templates | `conversations/XXXX/critiques/` AND `critique_templates/XXXX/` |
| Next step prompts | `conversations/XXXX/next_step_prompts/chosen/` or `ignored/` |
| Canonical prompt attempts | `conversations/XXXX/canonical_prompts/` |
| AI-generated templates | `prompt_library/{family}/` (global) |
| Circumstantial prompts | `conversations/XXXX/` AND `prompt_library/circumstantial/` |
| Session log | `session_log/XXXX_session.md` |

---

## Live Conversation Log — `XXXX_conversation.md`

Every conversation folder contains one primary running file:

```
conversations/
└── 0000/
    ├── 0000_conversation.md   ← LIVE FILE — appended every 20 seconds
    ├── turns/
    │   ├── 0000.0.0_input.md
    │   ├── 0000.0.5_response.md
    │   ├── 0000.1.0_input.md
    │   └── 0000.1.5_response.md
    ├── clarifications/
    ├── critiques/
    ├── next_step_prompts/
    │   ├── chosen/
    │   └── ignored/
    └── canonical_prompts/
```

### Live log format — `0000_conversation.md`

Each entry in the live file is appended in this structure:

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

### Live log behavior rules

1. **Auto-append every 20 seconds** — the client polls pending in-memory turn data and appends any new content to `XXXX_conversation.md` on a 20-second interval.
2. **Append only, never overwrite** — the file is strictly additive. No turn is ever deleted or replaced.
3. **Each turn is stamped** with:
   - Turn ID (`XXXX.N.0` or `XXXX.N.5`)
   - Role (`USER` or `SYSTEM`)
   - ISO 8601 UTC timestamp
   - Current state machine state
   - Prompt family (system turns only)
   - Pass number (system turns only)
4. **In-progress turns are buffered in memory** and only written once the full turn content is available. Partial writes are not permitted.
5. **Individual turn files** in `turns/` are still written as separate `.md` files for granular access. The live log is a convenience aggregate, not a replacement.
6. **If the 20-second flush finds no new content**, it skips silently — no empty appends.
7. **On conversation close or page unload**, a final forced flush is triggered immediately regardless of the 20-second timer.
8. **File is human-readable at any point** — the live log can be opened mid-conversation and show the full history up to the last flush.

### Auto-update implementation

```ts
// Pseudocode — lives in the file-writer service

const FLUSH_INTERVAL_MS = 20_000;
const pendingTurns: Turn[] = [];

// Called whenever a new turn is finalized in state machine
function enqueueTurn(turn: Turn) {
  pendingTurns.push(turn);
}

// Flush loop
setInterval(async () => {
  if (pendingTurns.length === 0) return;
  const batch = pendingTurns.splice(0, pendingTurns.length);
  const appendBlock = batch.map(formatTurnBlock).join('\n');
  await appendToFile(`conversations/${convId}/${convId}_conversation.md`, appendBlock);
}, FLUSH_INTERVAL_MS);

// Force flush on close
window.addEventListener('beforeunload', () => flushNow());
```

---

## Full folder structure

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
├── CODEX_PROMPT.md
├── SPEC.md
└── README.md
```

---

## Acceptance handshake — all three required simultaneously

1. System has no unresolved questions.
2. User provides no critique input.
3. User pastes the Canonical Execution Prompt back verbatim.

---

## Prompt family taxonomy

| Family | Use |
|---|---|
| `analysis` | Break down existing material |
| `product_spec` | Define product, MVP, architecture |
| `research_brief` | Structured research question |
| `execution_plan` | Step-by-step build sequence |
| `writing_content` | Draft, edit, tone |
| `outreach_persuasion` | Pitch, message, proposal |
| `debugging_troubleshooting` | Isolate and resolve failure |
| `critique_loop` | Evaluate and improve existing work |
| `circumstantial` | Situation-specific, non-standard |

---

## Advanced prompt engineering constraints

1. Schema-first outputs — typed objects, not free-form.
2. Router-first classification — classify before generating.
3. Clarification minimization — ask only high-value questions.
4. Critique as first-class workflow — always custom, never generic.
5. Explicit halt conditions — state machine enforced.
6. Versioned templates — `template_v1.md` → `template_v2.md`.
7. No agent loops without stop conditions.
8. Few-shot examples in every template (strong, weak, edge-case).

---

## Stack

- React + TypeScript
- Tailwind CSS v4
- Framer Motion
- React Flow (visual canvas)
- XState (state machine)
- OpenAI API
- Node.js file writer service or IndexedDB
- Vercel hosting

---

## MVP build order

1. File system scaffold.
2. Intake form UI.
3. Classification engine.
4. Fade-in questionnaire component.
5. Canonical prompt output panel.
6. Critique template generation and append logic.
7. Acceptance handshake state machine.
8. File save + 20-second auto-append logic (`XXXX_conversation.md` + individual turns).
9. Next-step prompt display.
10. Session log writer.
11. Prompt library registry.
12. Visual canvas (secondary).
