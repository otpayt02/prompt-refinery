# Prompt Library Migration Note

Source repo: `otpayt02/prompt-library`

Target folder: `otpayt02/prompt-refinery/prompt_library/`

The source repository currently contains only two starter files: a Git attributes file and `README.md`.

The README intent was copied into `prompt_library/README.md`.

The Git attributes file was not copied into `prompt_library/` because it is repository configuration, not a reusable prompt template.

New prompt-library additions:

- `prompt_library/execution_plan/one_night_ai_stack_builder_v1.md`
- `prompt_library/modes/README.md`
- `prompt_library/modes/one_night_ai_stack_builder/template_v1.md`
- `prompt_library/modes/minimal_token_efficiency/template_v1.md`

Future rule: prompt-like files from `prompt-library` should be copied into the matching family folder inside `prompt-refinery/prompt_library/`.
