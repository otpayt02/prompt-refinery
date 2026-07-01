import { setup } from "xstate";

export const refineryMachine = setup({
  types: {
    events: {} as
      | { type: "INTAKE" }
      | { type: "CLASSIFY" }
      | { type: "QUESTIONS_READY" }
      | { type: "DRAFT_READY" }
      | { type: "CRITIQUE" }
      | { type: "ACCEPT" }
      | { type: "EXECUTE" }
  }
}).createMachine({
  id: "promptRefinery",
  initial: "intake_received",
  states: {
    intake_received: { on: { CLASSIFY: "classified" } },
    classified: { on: { QUESTIONS_READY: "clarification_needed", DRAFT_READY: "prompt_draft_returned" } },
    clarification_needed: { on: { DRAFT_READY: "prompt_draft_returned" } },
    prompt_draft_returned: { on: { CRITIQUE: "critique_received", ACCEPT: "accepted_verbatim" } },
    critique_received: { on: { DRAFT_READY: "prompt_revised" } },
    prompt_revised: { on: { ACCEPT: "accepted_verbatim", CRITIQUE: "critique_received" } },
    accepted_verbatim: { on: { EXECUTE: "execution_pipeline_started" } },
    execution_pipeline_started: {}
  }
});
