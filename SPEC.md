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
  - Inputs:    `XXXX.0.0`, `XXXX.1.0`, `XXXX.2.0` ...
  - Responses: `XXXX.0.5`, `XXXX.1.5`, `XXXX.2.5` ...

---

## File organization rules

| Artifact | Location |
|---|---|
| Conversation turns | `conversations/XXXX/` |
| Clarification Q&A | `conversations/XXXX/clarifications/` AND `clarification_templates/XXXX/` |
| Critique templates | `conversations/XXXX/critiques/` AND `critique_templates/XXXX/` |
| Next step prompts | `conversations/XXXX/next_step_prompts/chosen/` or `ignored/` |
| Canonical prompt attempts | `conversations/XXXX/canonical_prompts/` |
| AI-generated templates | `prompt_library/{family}/` (global) |
| Circumstantial prompts | `conversations/XXXX/` AND `prompt_library/circumstantial/` |
| Session log | `session_log/XXXX_session.md` |

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
- Node.js file writer or IndexedDB
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
8. File save and append logic.
9. Next-step prompt display.
10. Session log writer.
11. Prompt library registry.
12. Visual canvas (secondary).
