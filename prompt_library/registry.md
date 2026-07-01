# Prompt Library Registry

This registry defines the canonical prompt families, operating modes, and imported workflow wrappers.

## Prompt families

| Family | Folder | Purpose | Default template |
|---|---|---|---|
| analysis | `prompt_library/analysis/` | Break down existing material | `template_v1.md` |
| product_spec | `prompt_library/product_spec/` | Define products, MVPs, architecture | `template_v1.md` |
| research_brief | `prompt_library/research_brief/` | Create research briefs | `template_v1.md` |
| execution_plan | `prompt_library/execution_plan/` | Create step-by-step plans | `template_v1.md` |
| writing_content | `prompt_library/writing_content/` | Draft, rewrite, edit, tone-shift | `template_v1.md` |
| outreach_persuasion | `prompt_library/outreach_persuasion/` | Messages, pitches, proposals | `template_v1.md` |
| debugging_troubleshooting | `prompt_library/debugging_troubleshooting/` | Diagnose and fix issues | `template_v1.md` |
| critique_loop | `prompt_library/critique_loop/` | Review and improve work | `template_v1.md` |
| circumstantial | `prompt_library/circumstantial/` | Situation-specific prompts | `template_v1.md` |

## Imported reusable wrappers

| Template | Location | Purpose |
|---|---|---|
| Perplexity Pro Prompt Refinery Wrapper | `prompt_library/execution_plan/perplexity_refinery_wrapper_v1.md` | Externalize verbose planning before Codex execution |
| Codex Activation Prompt | `prompt_library/modes/minimal_token_efficiency/codex_activation_prompt_v1.md` | Force Codex into exact-task, low-token execution mode |

## Built-in modes

| Mode | Location | Mutable | Copyable | Purpose |
|---|---|---:|---:|---|
| minimal_token_efficiency | `prompt_library/modes/minimal_token_efficiency/template_v1.md` | no | yes | Compact, exact-task, rate-limit-conscious operation |
| one_night_ai_stack_builder | `prompt_library/modes/one_night_ai_stack_builder/template_v1.md` | no | yes | Strict one-night MVP/project build guidance |

## Import policy

1. Prompt templates go into the closest prompt-family folder.
2. Operating behavior goes into `prompt_library/modes/`.
3. Custom user modes go into `prompt_library/modes/custom/`.
4. Workflow wrappers that produce build steps go into `execution_plan/`.
5. Do not keep duplicate flat prompt files at the root of `prompt_library/` unless they are indexes.
