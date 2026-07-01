export type SpecStatus = "planned" | "active" | "complete" | "deferred";
export type PhaseStatus = "planned" | "active" | "complete" | "deferred";
export type FeatureStatus = "planned" | "active" | "complete" | "deferred";
export type ThreadStatus = "active" | "compressed" | "closed";
export type PassStatus = "planned" | "awaiting_codex" | "awaiting_review" | "awaiting_acceptance" | "accepted" | "deferred";
export type HandoffActor = "human_admin" | "reviewer_ai" | "prompt_refinery" | "codex";
export type ThreadPolicy = "lazy" | "reasonable" | "frequent" | "aggressive";
export type AdminAuthority = "human" | "reviewer_ai" | "dual";
export type HandoffDirection = "codex_to_reviewer" | "reviewer_to_codex" | "human_to_codex";

export interface AdminPolicy {
  authority: AdminAuthority;
  reviewerCanApproveLowRisk: boolean;
  humanApprovalRequiredFor: string[];
  dualApprovalRequiredFor: string[];
}

export interface AcceptanceHandshakeState {
  scopeChecked: boolean;
  tokenBudgetChecked: boolean;
  contextChecked: boolean;
  reviewerAligned: boolean;
  adminApproved: boolean;
  readyForCodex: boolean;
  blockers: string[];
}

export interface HandoffState {
  id: string;
  direction: HandoffDirection;
  fromActor: HandoffActor;
  toActor: HandoffActor;
  promptSummary: string;
  acceptedPrompt: string;
  reviewerNotes: string[];
  createdAt: string;
  handshake: AcceptanceHandshakeState;
}

export interface PassState {
  id: string;
  label: string;
  status: PassStatus;
  acceptedPromptToCodex: string;
  codexOutputSummary: string;
  codexSuggestedNextPrompt: string;
  reviewerSuggestedNextPrompt: string;
  finalAcceptedNextPrompt: string;
  handoffs: HandoffState[];
  createdAt: string;
  updatedAt: string;
}

export interface ThreadState {
  id: string;
  label: string;
  status: ThreadStatus;
  policy: ThreadPolicy;
  scope: string;
  passIds: string[];
  currentPassId: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
}

export interface FeatureState {
  id: string;
  label: string;
  status: FeatureStatus;
  scope: string;
  threadIds: string[];
  currentThreadId: string;
}

export interface PhaseState {
  id: string;
  label: string;
  status: PhaseStatus;
  goal: string;
  featureIds: string[];
  currentFeatureId: string;
}

export interface SpecState {
  id: string;
  versionLabel: string;
  label: string;
  status: SpecStatus;
  phaseIds: string[];
  currentPhaseId: string;
}

export interface ProductState {
  id: string;
  label: string;
  currentSpecId: string;
  currentPhaseId: string;
  currentFeatureId: string;
  currentThreadId: string;
  currentPassId: string;
  specIds: string[];
  specsById: Record<string, SpecState>;
  phasesById: Record<string, PhaseState>;
  featuresById: Record<string, FeatureState>;
  threadsById: Record<string, ThreadState>;
  passesById: Record<string, PassState>;
  adminPolicy: AdminPolicy;
  threadPolicy: ThreadPolicy;
}

export interface ProductPositionSummary {
  product: string;
  spec: string;
  version: string;
  phase: string;
  feature: string;
  thread: string;
  pass: string;
  threadPolicy: ThreadPolicy;
  adminAuthority: AdminAuthority;
}

const defaultTimestamp = "2026-07-01T00:00:00.000Z";

export function createDefaultAcceptanceHandshakeState(): AcceptanceHandshakeState {
  return {
    scopeChecked: false,
    tokenBudgetChecked: false,
    contextChecked: false,
    reviewerAligned: false,
    adminApproved: false,
    readyForCodex: false,
    blockers: ["No accepted Codex handoff has been reviewed yet."]
  };
}

export function createDefaultProductState(): ProductState {
  const specId = "spec_0_mvp";
  const phaseId = "phase_0_product_state_foundation";
  const featureId = "feature_product_state_model";
  const threadId = "thread_0_product_state_foundation";
  const passId = "pass_0_1_product_state_model";

  return {
    id: "prompt_refinery",
    label: "Prompt Refinery",
    currentSpecId: specId,
    currentPhaseId: phaseId,
    currentFeatureId: featureId,
    currentThreadId: threadId,
    currentPassId: passId,
    specIds: [specId],
    specsById: {
      [specId]: {
        id: specId,
        versionLabel: "v0",
        label: "Spec 0 / MVP",
        status: "active",
        phaseIds: [phaseId],
        currentPhaseId: phaseId
      }
    },
    phasesById: {
      [phaseId]: {
        id: phaseId,
        label: "Phase 0 — Product state foundation",
        status: "active",
        goal: "Create the product/spec/phase/feature/thread/pass backbone for the local manual broker MVP.",
        featureIds: [featureId],
        currentFeatureId: featureId
      }
    },
    featuresById: {
      [featureId]: {
        id: featureId,
        label: "Product state model",
        status: "active",
        scope: "Add pure TypeScript state types and helpers only. No UI, persistence, providers, or loop runner.",
        threadIds: [threadId],
        currentThreadId: threadId
      }
    },
    threadsById: {
      [threadId]: {
        id: threadId,
        label: "Product state foundation thread",
        status: "active",
        policy: "reasonable",
        scope: "Define the smallest complete state model needed before broker-loop persistence and UI work.",
        passIds: [passId],
        currentPassId: passId,
        summary: "Phase 0.1 adds the local product hierarchy model for Prompt Refinery's manual Codex and reviewer/admin broker loop.",
        createdAt: defaultTimestamp,
        updatedAt: defaultTimestamp
      }
    },
    passesById: {
      [passId]: {
        id: passId,
        label: "Pass 0.1 — Product state model",
        status: "planned",
        acceptedPromptToCodex: "",
        codexOutputSummary: "",
        codexSuggestedNextPrompt: "",
        reviewerSuggestedNextPrompt: "",
        finalAcceptedNextPrompt: "",
        handoffs: [],
        createdAt: defaultTimestamp,
        updatedAt: defaultTimestamp
      }
    },
    adminPolicy: {
      authority: "human",
      reviewerCanApproveLowRisk: true,
      humanApprovalRequiredFor: [
        "phase_change",
        "spec_change",
        "destructive_action",
        "large_token_spend",
        "external_connector_call",
        "permanent_template_update"
      ],
      dualApprovalRequiredFor: ["mvp_scope_change", "automatic_loop_execution"]
    },
    threadPolicy: "reasonable"
  };
}

export function getCurrentSpec(productState: ProductState): SpecState {
  return productState.specsById[productState.currentSpecId];
}

export function getCurrentPhase(productState: ProductState): PhaseState {
  return productState.phasesById[productState.currentPhaseId];
}

export function getCurrentFeature(productState: ProductState): FeatureState {
  return productState.featuresById[productState.currentFeatureId];
}

export function getCurrentThread(productState: ProductState): ThreadState {
  return productState.threadsById[productState.currentThreadId];
}

export function getCurrentPass(productState: ProductState): PassState {
  return productState.passesById[productState.currentPassId];
}

export function summarizeProductPosition(productState: ProductState): ProductPositionSummary {
  const spec = getCurrentSpec(productState);
  const phase = getCurrentPhase(productState);
  const feature = getCurrentFeature(productState);
  const thread = getCurrentThread(productState);
  const pass = getCurrentPass(productState);

  return {
    product: productState.label,
    spec: spec.label,
    version: spec.versionLabel,
    phase: phase.label,
    feature: feature.label,
    thread: thread.label,
    pass: pass.label,
    threadPolicy: productState.threadPolicy,
    adminAuthority: productState.adminPolicy.authority
  };
}
