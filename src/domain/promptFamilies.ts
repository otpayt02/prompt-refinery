import type { PromptFamily } from "./types";

export const promptFamilies: Record<PromptFamily, { label: string; use: string; keywords: string[] }> = {
  goal_to_prompt: {
    label: "Prompt mode",
    use: "Turn a rough goal into one paste-ready AI prompt",
    keywords: ["prompt", "give me a prompt", "canonical prompt", "ai prompt"]
  },
  job_posting_to_proposal_package: {
    label: "Proposal package",
    use: "Turn a job posting into a proposal, prototype concept, MVP spec, and skills map",
    keywords: ["job posting", "job post", "freelance posting", "client posting", "proposal", "upwork", "contract"]
  },
  product_idea_to_mvp_spec: {
    label: "MVP package",
    use: "Turn a product idea into an MVP spec and buildable plan",
    keywords: ["product idea", "mvp spec", "startup idea", "app idea", "saas idea"]
  },
  spec_to_build_plan: {
    label: "Build workflow",
    use: "Turn a spec into an implementation workflow",
    keywords: ["spec", "requirements doc", "build workflow", "implementation workflow"]
  },
  portfolio_idea_to_demo_plan: {
    label: "Portfolio demo package",
    use: "Turn a portfolio idea into a demo story and implementation plan",
    keywords: ["portfolio idea", "demo story", "portfolio project", "project demo"]
  },
  analysis: {
    label: "Analysis",
    use: "Break down existing material",
    keywords: ["analyze", "break down", "summarize", "compare", "explain", "evaluate this"]
  },
  product_spec: {
    label: "Product spec",
    use: "Define product, MVP, architecture",
    keywords: ["app", "product", "mvp", "feature", "portfolio", "build", "architecture", "automation"]
  },
  research_brief: {
    label: "Research brief",
    use: "Structure a research question",
    keywords: ["research", "market", "find out", "sources", "study", "evidence"]
  },
  execution_plan: {
    label: "Execution plan",
    use: "Create a step-by-step build sequence",
    keywords: ["plan", "steps", "roadmap", "sequence", "next", "implement"]
  },
  writing_content: {
    label: "Writing content",
    use: "Draft, edit, and tune tone",
    keywords: ["write", "rewrite", "blog", "copy", "essay", "tone", "script"]
  },
  outreach_persuasion: {
    label: "Outreach persuasion",
    use: "Pitch, message, proposal",
    keywords: ["pitch", "email", "proposal", "sell", "client", "persuade", "outreach"]
  },
  debugging_troubleshooting: {
    label: "Debugging troubleshooting",
    use: "Isolate and resolve failure",
    keywords: ["bug", "error", "failing", "debug", "fix", "broken", "trace"]
  },
  critique_loop: {
    label: "Critique loop",
    use: "Evaluate and improve existing work",
    keywords: ["critique", "review", "improve", "feedback", "score", "weakness"]
  },
  circumstantial: {
    label: "Circumstantial",
    use: "Situation-specific prompt that does not fit a standard family",
    keywords: ["situation", "context", "case", "specific"]
  }
};

export const familyOrder: PromptFamily[] = [
  "goal_to_prompt",
  "job_posting_to_proposal_package",
  "product_idea_to_mvp_spec",
  "spec_to_build_plan",
  "portfolio_idea_to_demo_plan",
  "analysis",
  "product_spec",
  "research_brief",
  "execution_plan",
  "writing_content",
  "outreach_persuasion",
  "debugging_troubleshooting",
  "critique_loop",
  "circumstantial"
];

export function classifyPrompt(input: string): PromptFamily {
  const normalized = input.toLowerCase();
  if (/\b(job posting|job post|freelance posting|client posting|upwork|proposal package)\b/.test(normalized)) {
    return "job_posting_to_proposal_package";
  }
  if (/\b(portfolio idea|demo story|portfolio project|project demo)\b/.test(normalized)) return "portfolio_idea_to_demo_plan";
  if (/\b(product idea|mvp spec|startup idea|saas idea)\b/.test(normalized)) return "product_idea_to_mvp_spec";
  if (/\b(spec|requirements doc|build workflow|implementation workflow)\b/.test(normalized)) return "spec_to_build_plan";
  if (/\b(give me a prompt|canonical prompt|prompt to give|ai prompt)\b/.test(normalized)) return "goal_to_prompt";
  if (/\b(debug|fix|error|broken|failing|troubleshoot)\b/.test(normalized)) return "debugging_troubleshooting";
  if (/\b(research|find sources|investigate|market scan|study)\b/.test(normalized)) return "research_brief";
  if (/\b(write|rewrite|draft|edit|copy|script)\b/.test(normalized)) return "writing_content";
  if (/\b(critique|review|feedback|evaluate|score)\b/.test(normalized)) return "critique_loop";
  if (/\b(pitch|proposal|outreach|email|persuade|sell)\b/.test(normalized)) return "outreach_persuasion";
  if (/\b(plan|roadmap|steps|sequence)\b/.test(normalized)) return "execution_plan";
  const scored = Object.entries(promptFamilies).map(([family, meta]) => ({
    family: family as PromptFamily,
    score: meta.keywords.reduce((total, keyword) => total + (normalized.includes(keyword) ? 1 : 0), 0)
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.score ? scored[0].family : "circumstantial";
}
