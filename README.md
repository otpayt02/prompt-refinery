# Prompt Refinery

> A self-referential prompt-engineering workspace — built using the same interaction pattern it teaches.

---

## What it is

Prompt Refinery converts rough user intent, messy notes, draft prompts, and optional attachments into a structured, staged prompt pipeline — through input classification, targeted clarification questions, critique loops, and a formal acceptance handshake.

The mind map is a secondary visualization of refinement state, question trees, and prompt lineage.

---

## How to start building with Codex

1. Open `CODEX_PROMPT.md`.
2. Copy the entire contents.
3. Paste into Codex as your first message.
4. Codex will return:
   - A Refined Understanding of the product.
   - Any open questions (fade-in questionnaire format).
   - A Canonical Execution Prompt to paste back.
   - A Critique Template.
   - A Suggested Next Prompt.
5. Answer questions, give critiques, or paste the Canonical Execution Prompt back verbatim.
6. When all conditions are met (no questions, no critiques, verbatim paste), Codex begins building.

---

## Core interaction loop

```
User pastes rough input
  → System classifies prompt family
  → System asks clarification questions (fade-in questionnaire)
  → System returns Canonical Execution Prompt + Critique Template
  → User answers, critiques, or pastes prompt back verbatim
  → Loop repeats until Acceptance Handshake
  → Execution Pipeline begins
```

---

## File structure

See `SPEC.md` for full file organization rules and conversation numbering.

---

## Prompt families

`analysis` · `product_spec` · `research_brief` · `execution_plan` · `writing_content` · `outreach_persuasion` · `debugging_troubleshooting` · `critique_loop` · `circumstantial`

---

## Stack

React · TypeScript · Tailwind CSS v4 · Framer Motion · React Flow · XState · OpenAI API · Vercel

---

## Status

🟡 Spec locked. Awaiting Codex Acceptance Handshake to begin build.
