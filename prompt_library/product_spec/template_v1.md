# Product Spec Prompt Template — v1

## Purpose
Define a product, its MVP boundary, user workflow, screen map, technical architecture, and build sequence.

## Required context fields
- `product_idea`: What the product does.
- `primary_user`: Who it is for.
- `mvp_boundary`: What is in and out of scope for v1.
- `stack_preference`: Any known constraints.

## Preferred output structure
1. Product definition (one paragraph).
2. MVP boundary (in / out / later).
3. Core workflow (numbered steps).
4. Screen map.
5. Technical architecture.
6. Build sequence.
7. Acceptance criteria.

## Default clarification questions
1. Is there an existing codebase to build on?
   - [ ] No — greenfield
   - [ ] Yes — extend existing project
   - [ ] Yes — refactor existing project
   - [ ] Other
2. What is the primary output format?
   - [ ] Web app
   - [ ] CLI tool
   - [ ] API service
   - [ ] Browser extension
   - [ ] Other

## Critique dimensions
- Is MVP boundary realistic?
- Are user goals explicitly stated?
- Is the build sequence logically ordered?
- Are acceptance criteria measurable?

## Strong example
> Define the MVP for a prompt-engineering workspace. Include: what it does, who it is for, what is in scope for v1, the core 5-step user workflow, a 4-screen map, and a 10-step build sequence. Be specific enough that a developer could begin immediately.

## Weak example
> Make me a spec for a prompt tool.

## Edge-case example
> Define the MVP when the user's stated scope is too broad for a single release cycle. Explicitly identify what must be cut and why.
