# Product State Model — Phase 0.1

## Purpose

Prompt Refinery needs a durable product state model before the manual broker loop can be built. The app is not only generating prompts. It is tracking a product moving through specs, phases, features, threads, passes, handoffs, reviews, and accepted next prompts.

This model gives the MVP a shared structure for understanding where a run belongs:

```text
Product
  Spec / Version
    Phase
      Feature
        Thread
          Pass
            Handoff
            Accepted next prompt
```

## How this supports the broker loop

Prompt Refinery is a local-first manual broker between Codex/coding AI and a reviewer/admin layer.

Codex is the executor. Reviewer AI and/or the human admin handles critique, clarification, scope decisions, and recommended next prompts. Prompt Refinery sits between them and performs the acceptance handshake before anything goes back to Codex.

The state model supports that by tracking:

- The current MVP spec/version.
- The current phase and feature.
- The current thread and pass.
- Thread policy: lazy, reasonable, frequent, or aggressive.
- Admin policy: human, reviewer AI, or dual authority.
- Handoff state between Codex, reviewer/admin, and Prompt Refinery.
- Acceptance-handshake readiness before a final prompt is copied back to Codex.

## What Phase 0.1 adds

Phase 0.1 adds only pure TypeScript domain state in `src/domain/productState.ts`.

It includes:

- `ProductState`
- `SpecState`
- `PhaseState`
- `FeatureState`
- `ThreadState`
- `PassState`
- `HandoffState`
- `AdminPolicy`
- `ThreadPolicy`
- `AcceptanceHandshakeState`
- `createDefaultProductState()`
- Current-position helper functions

## What is intentionally not included

This pass does not include:

- UI changes.
- File-writer persistence.
- Loop runner screens.
- OpenRouter, n8n, Make, Zapier, webhooks, or other external connectors.
- Automatic Codex/API execution.
- Raw video context.
- Template registry wiring.

Those are later MVP phases or post-MVP features.

## Default MVP state

The default product state starts at:

- Product: Prompt Refinery
- Spec: `spec_0_mvp`
- Version: `v0`
- Phase: `phase_0_product_state_foundation`
- Feature: product state model
- Thread policy: `reasonable`
- Admin authority: `human`

The default admin policy requires human approval for risky decisions such as spec changes, phase changes, destructive actions, large token spend, external connector calls, and permanent template updates.

## Next recommended pass

The next smallest pass is:

```text
Phase 0.2 — Product state persistence contract
```

Recommended scope:

- Add save/load function shapes for `ProductState` through the local file-writer API.
- Keep UI untouched.
- Keep provider/webhook execution out of scope.
- Add documentation for where product state should be stored locally.

Do not build the full broker loop runner yet.
