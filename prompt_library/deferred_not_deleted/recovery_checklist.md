# Prompt Recovery Checklist

Use this checklist before cleaning up any staging prompt folder.

- [ ] Is the file a prompt/template/mode/wrapper/skill/agent asset?
- [ ] Does it already exist in a canonical `prompt_library/` location?
- [ ] If it is unique, has it been moved into the correct canonical folder?
- [ ] If uncertain, has it been preserved under `prompt_library/deferred_not_deleted/`?
- [ ] Has the manifest been updated?
- [ ] Is the cleaned-up item only a generated dependency/build/cache artifact?

If the answer is uncertain, defer instead of cleaning it up.
