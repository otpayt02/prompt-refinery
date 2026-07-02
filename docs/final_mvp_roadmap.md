# Prompt Refinery Final MVP Roadmap

## Product definition

Prompt Refinery is a local-first manual AI broker that sits between a coding agent and a reviewer/admin layer.

The product does not send raw reviewer suggestions directly to the coding agent. It understands, critiques, compresses, scopes, and formats every handoff before the next accepted prompt is given back to Codex or another coding AI.

## MVP identity

- Spec 0 = v0 = MVP.
- MVP is local-only.
- MVP uses manual copy/paste handoff.
- MVP saves project artifacts through the local file-writer API.
- MVP avoids unnecessary back-and-forth with Codex.
- Reviewer/admin is the clarification partner.
- Codex is the executor.
- Prompt Refinery is the broker and acceptance-handshake layer.

## Core loop

1. Human writes intent.
2. Prompt Refinery creates a minimal accepted prompt for Codex.
3. Human gives accepted prompt to Codex.
4. Codex returns output and a suggested next prompt.
5. Prompt Refinery receives Codex output.
6. Prompt Refinery extracts Codex's suggested next prompt.
7. Prompt Refinery builds a reviewer packet.
8. Reviewer AI and/or human admin reviews the packet.
9. Reviewer suggests the next prompt that should actually go to Codex.
10. Prompt Refinery audits the reviewer suggestion.
11. Prompt Refinery asks reviewer/admin questions if needed.
12. Prompt Refinery resolves decisions.
13. Prompt Refinery applies mode, family, wrapper, token, and scope policy.
14. Prompt Refinery creates the final accepted next prompt.
15. Human gives accepted next prompt to Codex.
16. Pass is saved.
17. Thread policy recommends continue, compress, close, or start new thread.

## Hierarchy

```text
Product
  Spec / Version
    Phase
      Feature
        Thread
          Pass
            Prompt
            Codex output
            Reviewer packet
            Reviewer response
            Acceptance handshake
            Accepted next prompt
```

## MVP phases

### Phase 0 — Product state foundation

Goal: the app understands product/spec/phase/thread/pass state.

Passes:

- Add product state type.
- Add spec/version state type.
- Add phase state type.
- Add feature state type.
- Add thread state type.
- Add pass state type.
- Save/load state through file-writer API.

Done when the app knows the current spec, phase, feature, thread, and pass.

### Phase 1 — Mode Manager integration

Goal: broker mode becomes selectable and real.

Passes:

- Mount Mode Manager in Step 0.
- Add `codex_reviewer_broker` built-in mode.
- Add thread policy controls: lazy, reasonable, frequent, aggressive.
- Add admin policy controls: reviewer, human, both.
- Save custom modes through file-writer API.
- Load custom modes on app start.

Done when the user can select Codex Reviewer Broker Mode and choose admin/thread policy.

### Phase 2 — Broker template registry

Goal: every broker loop step is backed by a prompt template.

Passes:

- Add `codex_broker/` templates.
- Add `reviewer_packet/` templates.
- Add `acceptance_handshake/` templates.
- Add `prompt_handoff/` templates.
- Add `thread_summary/` templates.
- Add `token_budget/` templates.
- Add `scope_control/` templates.
- Register templates in app metadata.

Done when the app can show which template controls each broker-loop step.

### Phase 3 — Context Pack MVP

Goal: control what context gets included in reviewer packets and Codex prompts.

MVP context types:

- Manual notes.
- Text files.
- Manual image descriptions.
- Thread summaries.
- Previous Codex output.
- Previous accepted prompts.

Passes:

- Add Context Pack panel.
- Add manual notes.
- Add text-file context.
- Add manual image-description context.
- Add thread summary context.
- Add included/excluded context preview.
- Save context packs through file-writer API.

Done when every Codex prompt and reviewer packet can show exactly what context was included and excluded.

### Phase 4 — Manual broker loop runner

Goal: build the core Codex → Reviewer/Admin → Prompt Refinery → Codex workflow.

Passes:

- Create loop session UI.
- Create pass history UI.
- Generate accepted prompt to Codex.
- Add paste area for Codex output.
- Extract Codex suggested next prompt.
- Build reviewer packet.
- Add paste area for reviewer output.
- Extract reviewer suggested next prompt.
- Audit reviewer suggestion.
- Generate final accepted prompt for Codex.
- Require acceptance handshake before copy.
- Save pass and handoff objects.

Done when a full manual broker cycle can run and be saved.

### Phase 5 — Decision popups

Goal: resolve questions and critiques with reviewer/admin instead of Codex.

Passes:

- Add question popup.
- Add target: reviewer, human admin, or both.
- Add answer, skip, assume, defer.
- Add critique popup.
- Add fix now, defer, ignore, convert to next prompt.
- Add unresolved decision tracker.
- Block handoff if required decisions are unresolved.

Done when Prompt Refinery can hold a small decision dialogue with reviewer/admin before Codex receives anything.

### Phase 6 — Thread management and token saver

Goal: prevent token bloat and scope drift.

Passes:

- Add token estimate panel.
- Add pass-count tracking.
- Add thread policy selector.
- Add scope drift detector.
- Add close-thread summary.
- Add continuation prompt.
- Add start-new-thread recommendation.
- Save summaries through file-writer API.

Done when the app can recommend continue, compress, close, or start a new thread after each pass.

### Phase 7 — MVP hardening

Goal: make Spec 0 usable as a real local product.

Passes:

- Add copy buttons for every handoff.
- Improve local save/load reliability.
- Add export loop report.
- Add template preview.
- Add error states.
- Add README workflow.
- Add QA checklist.

Done when Prompt Refinery can run a real multi-pass Codex project locally.

## MVP acceptance test

MVP is complete when this works:

1. User opens Prompt Refinery.
2. User selects Codex Reviewer Broker Mode.
3. User selects thread policy: reasonable.
4. User writes human intent.
5. Prompt Refinery creates accepted prompt to Codex.
6. User copies prompt to Codex.
7. User pastes Codex output into Prompt Refinery.
8. Prompt Refinery extracts Codex's suggested next prompt.
9. Prompt Refinery builds reviewer packet.
10. User gives reviewer packet to reviewer AI or human admin.
11. User pastes reviewer response into Prompt Refinery.
12. Prompt Refinery audits reviewer response.
13. Prompt Refinery asks reviewer/admin questions if needed.
14. Prompt Refinery resolves decisions.
15. Prompt Refinery applies wrappers and token policy.
16. Prompt Refinery creates accepted next prompt.
17. User copies accepted next prompt to Codex.
18. Pass is saved.
19. Thread policy recommends continue or close.
20. User can close thread and continue from summary.

## Post-MVP roadmap

- Spec 1 / v1: Local reviewer support through Ollama or another local model.
- Spec 2 / v2: Hosted provider connectors such as OpenRouter and OpenAI-compatible APIs.
- Spec 3 / v3: Webhook automation through generic webhook, n8n, Make, and Zapier presets.
- Spec 4 / v4: Research-augmented prompt validation and source-backed template gap analysis.
- Spec 5 / v5: Semi-auto broker loop.
- Spec 6 / v6: MCP-style resources, prompts, tools, roots, elicitation, permission gates, and connector registry.
