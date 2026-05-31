# Critique Loop Prompt Template — v1

## Purpose
Evaluate existing work, identify weaknesses, and generate a structured revision brief.

## Required context fields
- `work_to_critique`: The output, prompt, plan, or artifact being evaluated.
- `critique_goal`: What dimension to focus on.
- `revision_depth`: light / moderate / full rewrite

## Preferred output structure
1. What is working well.
2. What is not working.
3. What is missing entirely.
4. What should be changed and how.
5. Revised version or revision brief.

## Default clarification questions
1. What is the primary critique dimension?
   - [ ] Clarity
   - [ ] Completeness
   - [ ] Structure
   - [ ] Tone
   - [ ] Technical accuracy
   - [ ] Other
2. Should the critique result in a full rewrite?
   - [ ] Yes — rewrite fully
   - [ ] No — revise only weak areas
   - [ ] No — just identify problems, do not rewrite
   - [ ] Other

## Critique dimensions
- Is the critique goal specific?
- Is the revision depth appropriate?
- Are all weakness types covered?

## Strong example
> Critique this prompt for clarity and structure. Identify any ambiguous instructions. Return: what works, what does not, and a revised version.

## Weak example
> Is this good?

## Edge-case example
> Critique a prompt where the original intent is unclear. Surface your interpretation before critiquing, and ask for confirmation if the interpretation changes the critique significantly.
