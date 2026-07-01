export type PromptFamily =
  | "goal_to_prompt"
  | "job_posting_to_proposal_package"
  | "product_idea_to_mvp_spec"
  | "spec_to_build_plan"
  | "portfolio_idea_to_demo_plan"
  | "analysis"
  | "product_spec"
  | "research_brief"
  | "execution_plan"
  | "writing_content"
  | "outreach_persuasion"
  | "debugging_troubleshooting"
  | "critique_loop"
  | "circumstantial";

export type OutputKind = "prompt" | "package";
export type RefineryModeKind = "prompt_output" | "response_refinement" | "custom";

export interface RefineryModeConfig {
  kind: RefineryModeKind;
  label: string;
  description: string;
  rawPrompt?: string;
  fixedContext?: string;
  desiredOutcome?: string;
  tone?: string;
  length?: string;
  audience?: string;
  channel?: string;
  role?: string;
}

export type OutputBlockType =
  | "summary"
  | "requirements"
  | "proposal"
  | "prototype"
  | "product_spec"
  | "skills_map"
  | "qualification_map"
  | "step_plan"
  | "deep_dive"
  | "deliverable"
  | "next_action";

export interface OutputBlock {
  id: string;
  type: OutputBlockType;
  title: string;
  summary?: string;
  content: string;
  expanded: boolean;
  removable: boolean;
  regeneratable: boolean;
  askMoreEnabled: boolean;
  pinned: boolean;
  children?: OutputBlock[];
}

export type FewShotExampleSource = "generated" | "saved_profile" | "user_added" | "imported";

export interface FewShotExample {
  id: string;
  title: string;
  purpose: string;
  requestFamily: PromptFamily;
  inputExample: string;
  outputExample: string;
  whyItMatters: string;
  tags: string[];
  source: FewShotExampleSource;
  enabled: boolean;
  pinned: boolean;
  expanded: boolean;
}

export interface WorkflowProfile {
  id: string;
  name: string;
  requestFamily?: PromptFamily;
  autoGenerateExamples: boolean;
  defaultExampleCount: number;
  exampleStrictness: "strict" | "balanced" | "diverse";
  useSavedExampleSetByDefault: boolean;
  collapseExamplesByDefault: boolean;
  allowUserEditedExamplesOverride: boolean;
  savedExamples: FewShotExample[];
}

export type PromptState =
  | "intake_received"
  | "classified"
  | "clarification_needed"
  | "prompt_draft_returned"
  | "critique_received"
  | "prompt_revised"
  | "ready_for_acceptance"
  | "accepted_verbatim"
  | "execution_pipeline_started";

export interface ClarificationQuestion {
  id: string;
  prompt: string;
  options: string[];
  reason: string;
}

export interface RefineryOutput {
  family: PromptFamily;
  requestFamily: PromptFamily;
  modeKind: RefineryModeKind;
  modeLabel: string;
  modeDescription: string;
  outputKind: OutputKind;
  familyLabel: string;
  familyDescription: string;
  state: PromptState;
  advisorRole: string;
  refinedUnderstanding: string;
  canonicalPrompt: string;
  canonicalPackage?: OutputBlock[];
  responseBlueprint: string;
  actionSteps: string[];
  scenarioPrompts: string[];
  expansionPrompts: string[];
  specificationChecklist: string[];
  chatbotMetadata: string[];
  nextAction: string;
  nextActionReason: string;
  actionAfterNext: string;
  nextActionOptions: string[];
  nextCanonicalPrompt: string;
  nextPackagePatch?: OutputBlock[];
  fewShotExamples: FewShotExample[];
  critiqueTemplate: string;
  suggestedNextPrompt: string;
  questions: ClarificationQuestion[];
  principles: string[];
  bestPracticeChecks: string[];
  costNotes: string[];
}

export interface TurnPayload {
  id: string;
  role: "user" | "system";
  timestamp: string;
  state: PromptState;
  promptFamily?: PromptFamily;
  pass?: number;
  content: string;
}
