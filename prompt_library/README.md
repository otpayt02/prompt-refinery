# Prompt Library

Reusable prompt templates, mode templates, and workflow blueprints for Prompt Refinery.

Imported intent from `otpayt02/prompt-library`:

> All prompts that are interesting to the everyday coding workflows that otpayt02 is using and has created for himself, so perhaps other people might want to take a look at them and see how inclusive and considerate of a lot of potential associated factors that affect the output of the AI's response.

## Folder model

```txt
prompt_library/
├── analysis/
├── product_spec/
├── research_brief/
├── execution_plan/
├── writing_content/
├── outreach_persuasion/
├── debugging_troubleshooting/
├── critique_loop/
├── circumstantial/
└── modes/
```

## Template rules

- Prompt family templates live under their prompt family folder.
- Operating modes live under `prompt_library/modes/`.
- System modes may be immutable, but should be copyable into a user-owned custom mode.
- Custom user modes should be saved under `prompt_library/modes/custom/` or the future app database equivalent.
- Use frontmatter metadata so the UI can parse, display, duplicate, and version templates.

## Current imported files

The source `otpayt02/prompt-library` repository currently contains only:

- `.gitattributes`
- `README.md`

No prompt templates existed there yet, so this folder now becomes the active home for prompt templates inside Prompt Refinery.
