# Next MVP Step

After this prompt-library recovery PR, return to MVP implementation.

## Current MVP phase

Phase 0 — Product state foundation.

## Next implementation pass

Pass 0.1 — Add the core product/spec/phase/feature/thread/pass state model.

## Codex target

Create:

```text
src/domain/productState.ts
docs/product_state_model.md
```

Do not build UI yet. Do not add providers, webhooks, or research mode. Do not modify the broker loop UI yet.

## Reason

The local-first manual broker loop needs product/spec/phase/thread/pass state before Mode Manager, Context Pack, Reviewer Packet, Acceptance Handshake, and Thread Saver can be wired together cleanly.
