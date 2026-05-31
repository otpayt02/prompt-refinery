# Analysis Prompt Template — v1

## Purpose
Break down existing material into its component parts, evaluate each, and return a structured interpretation.

## Required context fields
- `input_text`: The material to analyze.
- `analysis_goal`: What the analysis should reveal.
- `output_format`: How the result should be structured.
- `depth`: surface / moderate / deep

## Preferred output structure
1. Summary of material.
2. Key components identified.
3. Patterns or tensions.
4. Evaluation of each component.
5. Synthesis and recommendations.

## Default clarification questions
1. What is the primary goal of this analysis?
   - [ ] Understand the material
   - [ ] Identify problems
   - [ ] Evaluate quality
   - [ ] Extract key insights
   - [ ] Other
2. Who is the audience for the output?
   - [ ] Myself only
   - [ ] Technical collaborator
   - [ ] Non-technical stakeholder
   - [ ] Public-facing
   - [ ] Other

## Critique dimensions
- Is the analysis goal clear?
- Does the output structure match the goal?
- Is depth appropriate?
- Are all key components covered?

## Strong example
> Analyze this product spec and identify the top 3 tensions between MVP scope and stated user goals. Return as a numbered list with a one-sentence resolution suggestion for each.

## Weak example
> Tell me what you think about this.

## Edge-case example
> Analyze this spec where the user's stated goal contradicts the technical constraints. Surface the contradiction explicitly before attempting resolution.
