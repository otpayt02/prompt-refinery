# Prompt Library

`prompt_library/` is the canonical home for reusable Prompt Refinery prompt assets: prompt family templates, operating modes, workflow wrappers, and external-tool prompts.

Do **not** use a duplicate `prompt-library/` folder inside this repo. If files arrive from a separate `prompt-library` repository, move useful prompt files into this underscore folder and categorize them here.

## Current structure

```txt
prompt_library/
├── README.md
├── registry.md
├── analysis/
│   └── template_v1.md
├── product_spec/
│   └── template_v1.md
├── research_brief/
│   └── template_v1.md
├── execution_plan/
│   ├── template_v1.md
│   └── perplexity_refinery_wrapper_v1.md
├── writing_content/
│   └── template_v1.md
├── outreach_persuasion/
│   └── template_v1.md
├── debugging_troubleshooting/
│   └── template_v1.md
├── critique_loop/
│   └── template_v1.md
├── circumstantial/
│   └── template_v1.md
└── modes/
    ├── README.md
    ├── minimal_token_efficiency/
    │   ├── template_v1.md
    │   └── codex_activation_prompt_v1.md
    ├── one_night_ai_stack_builder/
    │   └── template_v1.md
    └── custom/
```

## Placement rules

| Asset type | Canonical location |
|---|---|
| Analysis / breakdown prompts | `prompt_library/analysis/` |
| Product spec / MVP planning prompts | `prompt_library/product_spec/` |
| Research prompts | `prompt_library/research_brief/` |
| Step-by-step build plans | `prompt_library/execution_plan/` |
| Writing and rewrite prompts | `prompt_library/writing_content/` |
| Outreach, proposal, persuasion prompts | `prompt_library/outreach_persuasion/` |
| Debugging and troubleshooting prompts | `prompt_library/debugging_troubleshooting/` |
| Critique and review prompts | `prompt_library/critique_loop/` |
| One-off or hard-to-classify prompts | `prompt_library/circumstantial/` |
| App operating modes | `prompt_library/modes/` |
| User-created/custom modes | `prompt_library/modes/custom/` |

## Methodology

**Minimum Viable Tokens (MVT):** Perplexity thinks. Codex builds. Prompt Refinery organizes, critiques, and preserves reusable prompt systems.

## Naming rules

- Family defaults: `template_v1.md`, `template_v2.md`.
- Special reusable templates: `{clear_slug}_v1.md`.
- Mode templates: `prompt_library/modes/{mode_id}/template_v1.md`.
- Custom modes: `prompt_library/modes/custom/{custom_mode_id}/template_v1.md`.

## Migration rule

If a `prompt-library/` folder appears in this repo, treat it as a temporary import staging folder. Move files into `prompt_library/` using the placement table above, then remove the duplicate folder once useful content is migrated.
