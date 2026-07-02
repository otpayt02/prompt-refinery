import type { PromptFamily, RefineryModeConfig } from "./types";

export type ModeTemplateStatus = "built_in" | "custom";
export type TokenPolicy = "minimal" | "focused" | "normal";
export type ScopePolicy = "exact_task_only" | "smallest_next_action" | "strict_mvp" | "normal";

export interface ModeTemplateRecord {
  id: string;
  displayName: string;
  status: ModeTemplateStatus;
  mutable: boolean;
  copyable: boolean;
  defaultPromptFamily: PromptFamily;
  tokenPolicy: TokenPolicy;
  scopePolicy: ScopePolicy;
  description: string;
  instructions: string[];
  sourcePath: string;
  parentModeId?: string;
}

export const builtInModeTemplates: ModeTemplateRecord[] = [
  {
    id: "minimal_token_efficiency",
    displayName: "Minimal Token Efficiency",
    status: "built_in",
    mutable: false,
    copyable: true,
    defaultPromptFamily: "circumstantial",
    tokenPolicy: "minimal",
    scopePolicy: "smallest_next_action",
    description: "Compact, exact-task operation for reducing token usage and rate-limit pressure.",
    instructions: [
      "Give the smallest complete answer that solves the next step.",
      "Do not restate all context unless necessary.",
      "Ask only one blocking question at a time.",
      "Prefer checklists, diffs, and direct commands over essays."
    ],
    sourcePath: "prompt_library/modes/minimal_token_efficiency/template_v1.md"
  },
  {
    id: "one_night_ai_stack_builder",
    displayName: "One-Night AI Stack Builder",
    status: "built_in",
    mutable: false,
    copyable: true,
    defaultPromptFamily: "execution_plan",
    tokenPolicy: "focused",
    scopePolicy: "strict_mvp",
    description: "Strict MVP mode for turning a rough app idea into a one-night build plan.",
    instructions: [
      "Start with the user, painful problem, and one core workflow.",
      "Keep the MVP to one user, one input, one transformation, and one saved output.",
      "Force a must-ship list and cut list.",
      "End with a stop-building line."
    ],
    sourcePath: "prompt_library/modes/one_night_ai_stack_builder/template_v1.md"
  }
];

export function duplicateBuiltInMode(mode: ModeTemplateRecord): ModeTemplateRecord {
  return {
    ...mode,
    id: `${mode.id}_custom_${Date.now()}`,
    displayName: `${mode.displayName} Copy`,
    status: "custom",
    mutable: true,
    copyable: true,
    parentModeId: mode.id,
    sourcePath: `prompt_library/modes/custom/${mode.id}_custom/template_v1.md`
  };
}

export function modeRecordToRefineryMode(mode: ModeTemplateRecord): RefineryModeConfig {
  return {
    kind: "custom",
    label: mode.displayName,
    description: mode.description,
    fixedContext: mode.instructions.join("\n"),
    desiredOutcome: `Use ${mode.defaultPromptFamily} as the default prompt family with ${mode.tokenPolicy} token policy and ${mode.scopePolicy} scope policy.`,
    role: `${mode.displayName} advisor`,
    rawPrompt: [
      `Mode: ${mode.displayName}`,
      `Token policy: ${mode.tokenPolicy}`,
      `Scope policy: ${mode.scopePolicy}`,
      "Instructions:",
      ...mode.instructions.map((instruction) => `- ${instruction}`)
    ].join("\n")
  };
}
