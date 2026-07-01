# Accepted Prompt test.accepted

Accepted: 2026-06-01T21:54:21.944Z
Conversation: 0000
Family: product_spec
Role: Test Role

## Prompt

Prompt body

## Generated Response

Response body

## Next Action

Next

## Next Prompt

Next prompt

---
# Accepted Prompt 0000.accepted.1780355022039

Accepted: 2026-06-01T23:03:42.058Z
Conversation: 0000
Family: product_spec
Role: Portfolio project strategist and senior full-stack engineer

## Prompt

You are a Portfolio project strategist and senior full-stack engineer.
The prompt family is product_spec (Define product, MVP, architecture).

Goal:
I want to start a portfolio automation project that helps me use AI better.

Known clarification answers:
- MVP proof: Not specified
- Cost and quota posture: Not specified

Mission:
Finish this goal in the least practical amount of time without skipping the decisions or verification needed for a useful result. Be thorough enough that the next AI or agent can execute without needing the user to restate the goal.

Operating mode:
- Automatically handle the meta-prompting pattern: I want a prompt that I can paste into an AI assistant to get the intended result.
- Prefer a longer, complete prompt over a short generic prompt.
- Convert vague intent into a concrete execution path.
- Keep the user focused on the end goal, not prompt mechanics.
- Include cost, token, and quota controls when relevant.

Defined steps to complete the goal:
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define the first useful user, MVP boundary, core screens, data model, and demo path.
7. Break the build into implementation phases ordered by dependency.

Return:
1. Refined understanding of the goal and success criteria.
2. Fastest practical execution plan with numbered steps.
3. Any blocking clarification questions, only if they would materially change the result.
4. The first concrete artifact, answer, plan, fix, draft, or spec needed to move the project forward.
5. Verification steps or acceptance criteria.
6. Scenario follow-up prompts for different situations.
7. Expansion prompts for sections that may need deeper explanation.

Scenario follow-up prompts to include:
1. If this is for a portfolio, turn the plan into a reviewer-visible demo story.
2. If this could become a business, identify the first customer pain and the smallest test.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

Expansion prompts to include in a separate section:
1. Expand the Product spec reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

Next action protocol:
1. Return 3 to 5 context-specific next-action options that could reasonably come next.
2. Recommended next action: Choose the portfolio story this project should prove to a reviewer.
3. Why this action is next: This is the highest-leverage next move for a product spec request because it narrows the output contract before execution.
4. Action after that: Turn the MVP into screens, data model, build phases, and demo criteria.
5. Return a next-pass canonical prompt the user can give back after finishing the recommended action.

Next-action options to consider:
1. Choose the portfolio story this project should prove to a reviewer.
2. Define the demo moment that will make the project feel complete.
3. Name the repeated manual task, trigger, input, output, and failure case.
4. Map the automation as one before/after workflow with a measurable time saved.
5. Lock the first useful user and MVP proof.

Constraints:
- Stay practical, direct, and focused on the end goal.
- Surface overlooked decisions that could change the outcome.
- Include cost, token, and quota considerations when relevant.
- If agents, skills, repo instructions, or setup should change, say so explicitly.
- If the user needs more explanation, do not bury it in the main answer. Put expandable explanations in a separate section.
- Provide copy-ready prompts for follow-up scenarios.
- Do not execute until the canonical prompt is accepted verbatim.

## Generated Response

## Accepted Prompt Response

### 1. Goal Confirmation
This request should be handled as product spec: Define product, MVP, architecture. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. The current draft now includes 2 clarification answers.

### 2. Fastest Execution Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define the first useful user, MVP boundary, core screens, data model, and demo path.
7. Break the build into implementation phases ordered by dependency.

### 3. Expected Output Contract
## Expected AI Response Blueprint

### 1. Direct Goal Summary
Restate the goal in one or two sentences: I want to start a portfolio automation project that helps me use AI better.

### 2. Fastest Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define the first useful user, MVP boundary, core screens, data model, and demo path.
7. Break the build into implementation phases ordered by dependency.

### 3. Main Output
Produce the product spec artifact, answer, plan, fix, draft, or spec that moves the work forward immediately.

### 4. Verification
List exactly how the user or agent can tell whether the answer worked.

### 5. Follow-up Prompt Menu
1. If this is for a portfolio, turn the plan into a reviewer-visible demo story.
2. If this could become a business, identify the first customer pain and the smallest test.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 6. Expand If Needed
1. Expand the Product spec reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

### 4. Scenario Prompt Menu
1. If this is for a portfolio, turn the plan into a reviewer-visible demo story.
2. If this could become a business, identify the first customer pain and the smallest test.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 5. Expand If Needed
1. Expand the Product spec reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

## Next Action

Choose the portfolio story this project should prove to a reviewer.

## Next Prompt

I finished the next action for this product spec prompt refinement pass.

Original goal:
I want to start a portfolio automation project that helps me use AI better.

Completed next action: Choose the portfolio story this project should prove to a reviewer.
Why it mattered: This is the highest-leverage next move for a product spec request because it narrows the output contract before execution.
Action after this: Turn the MVP into screens, data model, build phases, and demo criteria.

Other viable next-action options:
1. Choose the portfolio story this project should prove to a reviewer.
2. Define the demo moment that will make the project feel complete.
3. Name the repeated manual task, trigger, input, output, and failure case.
4. Map the automation as one before/after workflow with a measurable time saved.
5. Lock the first useful user and MVP proof.

Known completed clarification count: 2

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780367144574

Accepted: 2026-06-02T02:25:44.626Z
Conversation: 0000
Family: job_posting_to_proposal_package
Role: Senior Python automation engineer and AI integration specialist with web scraping and image processing pipeline experience

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Outcome-First Proposal
Purpose: Shapes the proposal around the client's result instead of generic qualifications.
Input example: Client needs an automation dashboard for recurring reporting.
Output example: Open with the reporting bottleneck, propose a small dashboard prototype, map experience to requirements, then ask for one scope-confirming call.
Why this matters: Proposal mode needs persuasion examples so the output sounds useful and specific, not like a cover letter.
Tags: proposal, client, outcome

### 2. Prototype Bridge
Purpose: Shows how to convert a job post into a credibility-building prototype idea.
Input example: Posting asks for an AI workflow tool but does not define the UI.
Output example: Prototype a one-screen workflow inbox with intake, classification, status, and export so the client can see the proposed solution quickly.
Why this matters: A prototype example helps the package produce something concrete the user can reference in the proposal.
Tags: prototype, portfolio, proof

### 3. Qualifications Map
Purpose: Keeps the skills section honest and mapped to the posting.
Input example: Requirement: API integrations, automation, and clean dashboard UI.
Output example: Map each requirement to proof, confidence, missing context, and how to address gaps without overstating experience.
Why this matters: This prevents the generated package from making unsupported claims.
Tags: skills, trust, requirements

## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job posted today with fewer than 5 proposals. The client has a 5-star rating with 9 reviews and $300+ spent. They need two modifications to an existing Python scraper on a Linux VPS (Contabo) that pulls Vietnamese real estate listings: 1. AI Content Rewriting: Use OpenAI API to rewrite translated Vietnamese property titles and descriptions into unique, natural-sounding, SEO-friendly English while preserving all factual data. No two listings should have identical content. 2. AI Image Processing Pipeline: For each listing image — download → Real-ESRGAN 2x upscale → 2-5% auto-crop → SDXL img2img at 0.25 denoising strength → convert to AVIF. Volume: ~54,000 images/month (~1,800/day). GPU work offloaded to RunPod RTX 4090. My skills: Python, web scraping (BeautifulSoup/Selenium), OpenAI API, image processing (computer vision/YOLO background), Flask, automation scripting. I have NOT yet demonstrated Real-ESRGAN or SDXL pipeline work publicly. Goal for this pass: Reverse-engineer the client's real problem and risk. Identify the narrowest MVP proof I can demonstrate in 3 hours without a live VPS. Decide what sample output or script I can generate as proof. Output a client problem analysis and prototype decision I can use as the foundation for a proposal package.

Known clarification answers:
- Cost and quota posture: Quality first

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of Senior Python automation engineer and AI integration specialist with web scraping and image processing pipeline experience. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

## Generated Response

## Accepted Package Response

### 1. Package Confirmation
This request should be handled as proposal package: Turn a job posting into a proposal, prototype concept, MVP spec, and skills map. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. The current draft now includes 1 clarification answer.

### 2. Pinned Package Blocks
## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job posted today with fewer than 5 proposals. The client has a 5-star rating with 9 reviews and $300+ spent. They need two modifications to an existing Python scraper on a Linux VPS (Contabo) that pulls Vietnamese real estate listings: 1. AI Content Rewriting: Use OpenAI API to rewrite translated Vietnamese property titles and descriptions into unique, natural-sounding, SEO-friendly English while preserving all factual data. No two listings should have identical content. 2. AI Image Processing Pipeline: For each listing image — download → Real-ESRGAN 2x upscale → 2-5% auto-crop → SDXL img2img at 0.25 denoising strength → convert to AVIF. Volume: ~54,000 images/month (~1,800/day). GPU work offloaded to RunPod RTX 4090. My skills: Python, web scraping (BeautifulSoup/Selenium), OpenAI API, image processing (computer vision/YOLO background), Flask, automation scripting. I have NOT yet demonstrated Real-ESRGAN or SDXL pipeline work publicly. Goal for this pass: Reverse-engineer the client's real problem and risk. Identify the narrowest MVP proof I can demonstrate in 3 hours without a live VPS. Decide what sample output or script I can generate as proof. Output a client problem analysis and prototype decision I can use as the foundation for a proposal package.

Known clarification answers:
- Cost and quota posture: Quality first

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of Senior Python automation engineer and AI integration specialist with web scraping and image processing pipeline experience. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

### 3. Next Package Action
Name the repeated manual task, trigger, input, output, and failure case.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this proposal package prompt refinement pass.

Original goal:
I am applying to an Upwork job posted today with fewer than 5 proposals. The client has a 5-star rating with 9 reviews and $300+ spent. They need two modifications to an existing Python scraper on a Linux VPS (Contabo) that pulls Vietnamese real estate listings: 1. AI Content Rewriting: Use OpenAI API to rewrite translated Vietnamese property titles and descriptions into unique, natural-sounding, SEO-friendly English while preserving all factual data. No two listings should have identical content. 2. AI Image Processing Pipeline: For each listing image — download → Real-ESRGAN 2x upscale → 2-5% auto-crop → SDXL img2img at 0.25 denoising strength → convert to AVIF. Volume: ~54,000 images/month (~1,800/day). GPU work offloaded to RunPod RTX 4090. My skills: Python, web scraping (BeautifulSoup/Selenium), OpenAI API, image processing (computer vision/YOLO background), Flask, automation scripting. I have NOT yet demonstrated Real-ESRGAN or SDXL pipeline work publicly. Goal for this pass: Reverse-engineer the client's real problem and risk. Identify the narrowest MVP proof I can demonstrate in 3 hours without a live VPS. Decide what sample output or script I can generate as proof. Output a client problem analysis and prototype decision I can use as the foundation for a proposal package.

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution.
Action after this: Reclassify the prompt and generate the next concrete artifact.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Identify the first screen, primary action, and what must be visible without explanation.
4. Clarify what decision the answer should support.
5. Choose the output shape: prompt, plan, table, recommendation, or checklist.

Known completed clarification count: 1

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780367258384

Accepted: 2026-06-02T02:27:38.437Z
Conversation: 0000
Family: job_posting_to_proposal_package
Role: Senior Python automation engineer and AI integration specialist with web scraping and image processing pipeline experience

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Outcome-First Proposal
Purpose: Shapes the proposal around the client's result instead of generic qualifications.
Input example: Client needs an automation dashboard for recurring reporting.
Output example: Open with the reporting bottleneck, propose a small dashboard prototype, map experience to requirements, then ask for one scope-confirming call.
Why this matters: Proposal mode needs persuasion examples so the output sounds useful and specific, not like a cover letter.
Tags: proposal, client, outcome

### 2. Prototype Bridge
Purpose: Shows how to convert a job post into a credibility-building prototype idea.
Input example: Posting asks for an AI workflow tool but does not define the UI.
Output example: Prototype a one-screen workflow inbox with intake, classification, status, and export so the client can see the proposed solution quickly.
Why this matters: A prototype example helps the package produce something concrete the user can reference in the proposal.
Tags: prototype, portfolio, proof

### 3. Qualifications Map
Purpose: Keeps the skills section honest and mapped to the posting.
Input example: Requirement: API integrations, automation, and clean dashboard UI.
Output example: Map each requirement to proof, confidence, missing context, and how to address gaps without overstating experience.
Why this matters: This prevents the generated package from making unsupported claims.
Tags: skills, trust, requirements

## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I finished the next action for this proposal package prompt refinement pass. Original goal: I finished the next action for this proposal package prompt refinement pass. Original goal: I am applying to an Upwork job posted today with fewer than 5 proposals. The client has a 5-star rating with 9 reviews and $300+ spent. They need two modifications to an existing Python scraper on a Linux VPS (Contabo) that pulls Vietnamese real estate listings: 1. AI Content Rewriting: Use OpenAI API to rewrite translated Vietnamese property titles and descriptions into unique, natural-sounding, SEO-friendly English while preserving all factual data. No two listings should have identical content. 2. AI Image Processing Pipeline: For each listing image — download → Real-ESRGAN 2x upscale → 2-5% auto-crop → SDXL img2img at 0.25 denoising strength → convert to AVIF. Volume: ~54,000 images/month (~1,800/day). GPU work offloaded to RunPod RTX 4090. My skills: Python, web scraping (BeautifulSoup/Selenium), OpenAI API, image processing (computer vision/YOLO background), Flask, automation scripting. I have NOT yet demonstrated Real-ESRGAN or SDXL pipeline work publicly. Goal for this pass: Reverse-engineer the client's real problem and risk. Identify the narrowest MVP proof I can demonstrate in 3 hours without a live VPS. Decide what sample output or script I can generate as proof. Output a client problem analysis and prototype decision I can use as the foundation for a proposal package. Completed next action: Name the repeated manual task, trigger, input, output, and failure case. Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution. Action after this: Reclassify the prompt and generate the next concrete artifact. Other viable next-action options: 1. Name the repeated manual task, trigger, input, output, and failure case. 2. Map the automation as one before/after workflow with a measurable time saved. 3. Identify the first screen, primary action, and what must be visible without explanation. 4. Clarify what decision the answer should support. 5. Choose the output shape: prompt, plan, table, recommendation, or checklist. Known completed clarification count: 1 Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return: 1. The revised final prompt. 2. The next action I should take. 3. Why that action is next. 4. The action after that. 5. The next prompt I should give back after I finish that action. Completed next action: Name the repeated manual task, trigger, input, output, and failure case. Why it mattered: This option removes the highest-impact ambiguity currently visible in the prompt, which reduces back-and-forth before execution. Action after this: Reclassify the prompt and generate the next concrete artifact. Other viable next-action options: 1. Name the repeated manual task, trigger, input, output, and failure case. 2. Map the automation as one before/after workflow with a measurable time saved. 3. Identify the first screen, primary action, and what must be visible without explanation. 4. Clarify what decision the answer should support. 5. Choose the output shape: prompt, plan, table, recommendation, or checklist. Known completed clarification count: 0 Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return: 1. The revised final prompt. 2. The next action I should take. 3. Why that action is next. 4. The action after that. 5. The next prompt I should give back after I finish that action.

Known clarification answers:
- Cost and quota posture: Not specified

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of Senior Python automation engineer and AI integration specialist with web scraping and image processing pipeline experience. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

## Generated Response

## Accepted Package Response

### 1. Package Confirmation
This request should be handled as proposal package: Turn a job posting into a proposal, prototype concept, MVP spec, and skills map. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. The current draft now includes 1 clarification answer.

### 2. Pinned Package Blocks
## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I finished the next action for this proposal package prompt refinement pass. Original goal: I finished the next action for this proposal package prompt refinement pass. Original goal: I am applying to an Upwork job posted today with fewer than 5 proposals. The client has a 5-star rating with 9 reviews and $300+ spent. They need two modifications to an existing Python scraper on a Linux VPS (Contabo) that pulls Vietnamese real estate listings: 1. AI Content Rewriting: Use OpenAI API to rewrite translated Vietnamese property titles and descriptions into unique, natural-sounding, SEO-friendly English while preserving all factual data. No two listings should have identical content. 2. AI Image Processing Pipeline: For each listing image — download → Real-ESRGAN 2x upscale → 2-5% auto-crop → SDXL img2img at 0.25 denoising strength → convert to AVIF. Volume: ~54,000 images/month (~1,800/day). GPU work offloaded to RunPod RTX 4090. My skills: Python, web scraping (BeautifulSoup/Selenium), OpenAI API, image processing (computer vision/YOLO background), Flask, automation scripting. I have NOT yet demonstrated Real-ESRGAN or SDXL pipeline work publicly. Goal for this pass: Reverse-engineer the client's real problem and risk. Identify the narrowest MVP proof I can demonstrate in 3 hours without a live VPS. Decide what sample output or script I can generate as proof. Output a client problem analysis and prototype decision I can use as the foundation for a proposal package. Completed next action: Name the repeated manual task, trigger, input, output, and failure case. Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution. Action after this: Reclassify the prompt and generate the next concrete artifact. Other viable next-action options: 1. Name the repeated manual task, trigger, input, output, and failure case. 2. Map the automation as one before/after workflow with a measurable time saved. 3. Identify the first screen, primary action, and what must be visible without explanation. 4. Clarify what decision the answer should support. 5. Choose the output shape: prompt, plan, table, recommendation, or checklist. Known completed clarification count: 1 Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return: 1. The revised final prompt. 2. The next action I should take. 3. Why that action is next. 4. The action after that. 5. The next prompt I should give back after I finish that action. Completed next action: Name the repeated manual task, trigger, input, output, and failure case. Why it mattered: This option removes the highest-impact ambiguity currently visible in the prompt, which reduces back-and-forth before execution. Action after this: Reclassify the prompt and generate the next concrete artifact. Other viable next-action options: 1. Name the repeated manual task, trigger, input, output, and failure case. 2. Map the automation as one before/after workflow with a measurable time saved. 3. Identify the first screen, primary action, and what must be visible without explanation. 4. Clarify what decision the answer should support. 5. Choose the output shape: prompt, plan, table, recommendation, or checklist. Known completed clarification count: 0 Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return: 1. The revised final prompt. 2. The next action I should take. 3. Why that action is next. 4. The action after that. 5. The next prompt I should give back after I finish that action.

Known clarification answers:
- Cost and quota posture: Not specified

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of Senior Python automation engineer and AI integration specialist with web scraping and image processing pipeline experience. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

### 3. Next Package Action
Name the repeated manual task, trigger, input, output, and failure case.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this proposal package prompt refinement pass.

Original goal:
I finished the next action for this proposal package prompt refinement pass. Original goal: I finished the next action for this proposal package prompt refinement pass. Original goal: I am applying to an Upwork job posted today with fewer than 5 proposals. The client has a 5-star rating with 9 reviews and $300+ spent. They need two modifications to an existing Python scraper on a Linux VPS (Contabo) that pulls Vietnamese real estate listings: 1. AI Content Rewriting: Use OpenAI API to rewrite translated Vietnamese property titles and descriptions into unique, natural-sounding, SEO-friendly English while preserving all factual data. No two listings should have identical content. 2. AI Image Processing Pipeline: For each listing image — download → Real-ESRGAN 2x upscale → 2-5% auto-crop → SDXL img2img at 0.25 denoising strength → convert to AVIF. Volume: ~54,000 images/month (~1,800/day). GPU work offloaded to RunPod RTX 4090. My skills: Python, web scraping (BeautifulSoup/Selenium), OpenAI API, image processing (computer vision/YOLO background), Flask, automation scripting. I have NOT yet demonstrated Real-ESRGAN or SDXL pipeline work publicly. Goal for this pass: Reverse-engineer the client's real problem and risk. Identify the narrowest MVP proof I can demonstrate in 3 hours without a live VPS. Decide what sample output or script I can generate as proof. Output a client problem analysis and prototype decision I can use as the foundation for a proposal package. Completed next action: Name the repeated manual task, trigger, input, output, and failure case. Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution. Action after this: Reclassify the prompt and generate the next concrete artifact. Other viable next-action options: 1. Name the repeated manual task, trigger, input, output, and failure case. 2. Map the automation as one before/after workflow with a measurable time saved. 3. Identify the first screen, primary action, and what must be visible without explanation. 4. Clarify what decision the answer should support. 5. Choose the output shape: prompt, plan, table, recommendation, or checklist. Known completed clarification count: 1 Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return: 1. The revised final prompt. 2. The next action I should take. 3. Why that action is next. 4. The action after that. 5. The next prompt I should give back after I finish that action. Completed next action: Name the repeated manual task, trigger, input, output, and failure case. Why it mattered: This option removes the highest-impact ambiguity currently visible in the prompt, which reduces back-and-forth before execution. Action after this: Reclassify the prompt and generate the next concrete artifact. Other viable next-action options: 1. Name the repeated manual task, trigger, input, output, and failure case. 2. Map the automation as one before/after workflow with a measurable time saved. 3. Identify the first screen, primary action, and what must be visible without explanation. 4. Clarify what decision the answer should support. 5. Choose the output shape: prompt, plan, table, recommendation, or checklist. Known completed clarification count: 0 Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return: 1. The revised final prompt. 2. The next action I should take. 3. Why that action is next. 4. The action after that. 5. The next prompt I should give back after I finish that action.

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution.
Action after this: Reclassify the prompt and generate the next concrete artifact.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Identify the first screen, primary action, and what must be visible without explanation.
4. Clarify what decision the answer should support.
5. Choose the output shape: prompt, plan, table, recommendation, or checklist.

Known completed clarification count: 1

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780373498027

Accepted: 2026-06-02T04:11:38.078Z
Conversation: 0000
Family: job_posting_to_proposal_package
Role: YouTube Shorts workflow strategist and retention-focused faceless content systems builder

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Outcome-First Proposal
Purpose: Shapes the proposal around the client's result instead of generic qualifications.
Input example: Client needs an automation dashboard for recurring reporting.
Output example: Open with the reporting bottleneck, propose a small dashboard prototype, map experience to requirements, then ask for one scope-confirming call.
Why this matters: Proposal mode needs persuasion examples so the output sounds useful and specific, not like a cover letter.
Tags: proposal, client, outcome

### 2. Prototype Bridge
Purpose: Shows how to convert a job post into a credibility-building prototype idea.
Input example: Posting asks for an AI workflow tool but does not define the UI.
Output example: Prototype a one-screen workflow inbox with intake, classification, status, and export so the client can see the proposed solution quickly.
Why this matters: A prototype example helps the package produce something concrete the user can reference in the proposal.
Tags: prototype, portfolio, proof

### 3. Qualifications Map
Purpose: Keeps the skills section honest and mapped to the posting.
Input example: Requirement: API integrations, automation, and clean dashboard UI.
Output example: Map each requirement to proof, confidence, missing context, and how to address gaps without overstating experience.
Why this matters: This prevents the generated package from making unsupported claims.
Tags: skills, trust, requirements

## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job called "High-Retention YouTube Shorts Automation System." Job summary: The client wants a high-retention faceless YouTube Shorts system focused on business stories, finance, wealth psychology, economics, and AI/business trends. They want strong hooks in the first 1-2 seconds, retention optimization, cinematic storytelling, fast pacing, documentary-style editing, cinematic stock footage, motion graphics, animated charts, dynamic subtitles, sound design, layered editing, fast scene changes, trend research, viral topic analysis, hook generation, thumbnail analysis, and an approval workflow before posting. They do not want AI avatars or generic slideshow content. The post says one-time fixed price $100, but also mentions a weekly offer of 2 videos for $20. Fewer than 5 proposals. Client is payment method not verified, phone verified, Canada, 1 job posted, 0% hire rate. My goal for this pass: Generate a proposal package that positions me as the person who can build the first version of a retention-focused faceless Shorts workflow and prove it with a starter deliverable or pilot batch. Positioning constraints: Do NOT position me as a cheap general video editor. Do NOT promise virality. Do position me as a systems-first operator who can build the first retention-focused Shorts workflow: topic research, hook structure, edit logic, subtitle rhythm, approval flow, and pilot outputs. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. My relevant angle: I am stronger at systems, workflow thinking, automation, structure, prompt refinement, repeatable execution, and turning vague asks into working processes than at claiming elite established YouTube channel results. The proposal should sell clarity, structure, retention logic, and pilot execution. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. 2-Milestone Structure 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package Completed next action: Chose the positioning angle and narrowed the offer to a starter retention-focused Shorts workflow instead of cheap ongoing editing. Why it mattered: This removes the biggest proposal risk, which is sounding like I accept premium production expectations at bargain pricing. Action after this: Generate the full proposal package and identify the cleanest paste-ready version for Upwork. Known completed clarification count: 1

Known clarification answers:
- Cost and quota posture: Quality first

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of YouTube Shorts workflow strategist and retention-focused faceless content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

## Generated Response

## Accepted Package Response

### 1. Package Confirmation
This request should be handled as proposal package: Turn a job posting into a proposal, prototype concept, MVP spec, and skills map. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. The current draft now includes 1 clarification answer.

### 2. Pinned Package Blocks
## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job called "High-Retention YouTube Shorts Automation System." Job summary: The client wants a high-retention faceless YouTube Shorts system focused on business stories, finance, wealth psychology, economics, and AI/business trends. They want strong hooks in the first 1-2 seconds, retention optimization, cinematic storytelling, fast pacing, documentary-style editing, cinematic stock footage, motion graphics, animated charts, dynamic subtitles, sound design, layered editing, fast scene changes, trend research, viral topic analysis, hook generation, thumbnail analysis, and an approval workflow before posting. They do not want AI avatars or generic slideshow content. The post says one-time fixed price $100, but also mentions a weekly offer of 2 videos for $20. Fewer than 5 proposals. Client is payment method not verified, phone verified, Canada, 1 job posted, 0% hire rate. My goal for this pass: Generate a proposal package that positions me as the person who can build the first version of a retention-focused faceless Shorts workflow and prove it with a starter deliverable or pilot batch. Positioning constraints: Do NOT position me as a cheap general video editor. Do NOT promise virality. Do position me as a systems-first operator who can build the first retention-focused Shorts workflow: topic research, hook structure, edit logic, subtitle rhythm, approval flow, and pilot outputs. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. My relevant angle: I am stronger at systems, workflow thinking, automation, structure, prompt refinement, repeatable execution, and turning vague asks into working processes than at claiming elite established YouTube channel results. The proposal should sell clarity, structure, retention logic, and pilot execution. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. 2-Milestone Structure 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package Completed next action: Chose the positioning angle and narrowed the offer to a starter retention-focused Shorts workflow instead of cheap ongoing editing. Why it mattered: This removes the biggest proposal risk, which is sounding like I accept premium production expectations at bargain pricing. Action after this: Generate the full proposal package and identify the cleanest paste-ready version for Upwork. Known completed clarification count: 1

Known clarification answers:
- Cost and quota posture: Quality first

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of YouTube Shorts workflow strategist and retention-focused faceless content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

### 3. Next Package Action
Name the repeated manual task, trigger, input, output, and failure case.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this proposal package prompt refinement pass.

Original goal:
I am applying to an Upwork job called "High-Retention YouTube Shorts Automation System." Job summary: The client wants a high-retention faceless YouTube Shorts system focused on business stories, finance, wealth psychology, economics, and AI/business trends. They want strong hooks in the first 1-2 seconds, retention optimization, cinematic storytelling, fast pacing, documentary-style editing, cinematic stock footage, motion graphics, animated charts, dynamic subtitles, sound design, layered editing, fast scene changes, trend research, viral topic analysis, hook generation, thumbnail analysis, and an approval workflow before posting. They do not want AI avatars or generic slideshow content. The post says one-time fixed price $100, but also mentions a weekly offer of 2 videos for $20. Fewer than 5 proposals. Client is payment method not verified, phone verified, Canada, 1 job posted, 0% hire rate. My goal for this pass: Generate a proposal package that positions me as the person who can build the first version of a retention-focused faceless Shorts workflow and prove it with a starter deliverable or pilot batch. Positioning constraints: Do NOT position me as a cheap general video editor. Do NOT promise virality. Do position me as a systems-first operator who can build the first retention-focused Shorts workflow: topic research, hook structure, edit logic, subtitle rhythm, approval flow, and pilot outputs. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. My relevant angle: I am stronger at systems, workflow thinking, automation, structure, prompt refinement, repeatable execution, and turning vague asks into working processes than at claiming elite established YouTube channel results. The proposal should sell clarity, structure, retention logic, and pilot execution. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. 2-Milestone Structure 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package Completed next action: Chose the positioning angle and narrowed the offer to a starter retention-focused Shorts workflow instead of cheap ongoing editing. Why it mattered: This removes the biggest proposal risk, which is sounding like I accept premium production expectations at bargain pricing. Action after this: Generate the full proposal package and identify the cleanest paste-ready version for Upwork. Known completed clarification count: 1

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution.
Action after this: Reclassify the prompt and generate the next concrete artifact.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Identify the first screen, primary action, and what must be visible without explanation.
4. Clarify what decision the answer should support.
5. Choose the output shape: prompt, plan, table, recommendation, or checklist.

Known completed clarification count: 1

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780373518397

Accepted: 2026-06-02T04:11:58.467Z
Conversation: 0000
Family: job_posting_to_proposal_package
Role: YouTube Shorts workflow strategist and retention-focused faceless content systems builder

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Outcome-First Proposal
Purpose: Shapes the proposal around the client's result instead of generic qualifications.
Input example: Client needs an automation dashboard for recurring reporting.
Output example: Open with the reporting bottleneck, propose a small dashboard prototype, map experience to requirements, then ask for one scope-confirming call.
Why this matters: Proposal mode needs persuasion examples so the output sounds useful and specific, not like a cover letter.
Tags: proposal, client, outcome

### 2. Prototype Bridge
Purpose: Shows how to convert a job post into a credibility-building prototype idea.
Input example: Posting asks for an AI workflow tool but does not define the UI.
Output example: Prototype a one-screen workflow inbox with intake, classification, status, and export so the client can see the proposed solution quickly.
Why this matters: A prototype example helps the package produce something concrete the user can reference in the proposal.
Tags: prototype, portfolio, proof

### 3. Qualifications Map
Purpose: Keeps the skills section honest and mapped to the posting.
Input example: Requirement: API integrations, automation, and clean dashboard UI.
Output example: Map each requirement to proof, confidence, missing context, and how to address gaps without overstating experience.
Why this matters: This prevents the generated package from making unsupported claims.
Tags: skills, trust, requirements

## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job called "High-Retention YouTube Shorts Automation System." Job summary: The client wants a high-retention faceless YouTube Shorts system focused on business stories, finance, wealth psychology, economics, and AI/business trends. They want strong hooks in the first 1-2 seconds, retention optimization, cinematic storytelling, fast pacing, documentary-style editing, cinematic stock footage, motion graphics, animated charts, dynamic subtitles, sound design, layered editing, fast scene changes, trend research, viral topic analysis, hook generation, thumbnail analysis, and an approval workflow before posting. They do not want AI avatars or generic slideshow content. The post says one-time fixed price $100, but also mentions a weekly offer of 2 videos for $20. Fewer than 5 proposals. Client is payment method not verified, phone verified, Canada, 1 job posted, 0% hire rate. My goal for this pass: Generate a proposal package that positions me as the person who can build the first version of a retention-focused faceless Shorts workflow and prove it with a starter deliverable or pilot batch. Positioning constraints: Do NOT position me as a cheap general video editor. Do NOT promise virality. Do position me as a systems-first operator who can build the first retention-focused Shorts workflow: topic research, hook structure, edit logic, subtitle rhythm, approval flow, and pilot outputs. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. My relevant angle: I am stronger at systems, workflow thinking, automation, structure, prompt refinement, repeatable execution, and turning vague asks into working processes than at claiming elite established YouTube channel results. The proposal should sell clarity, structure, retention logic, and pilot execution. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. 2-Milestone Structure 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package Completed next action: Chose the positioning angle and narrowed the offer to a starter retention-focused Shorts workflow instead of cheap ongoing editing. Why it mattered: This removes the biggest proposal risk, which is sounding like I accept premium production expectations at bargain pricing. Action after this: Generate the full proposal package and identify the cleanest paste-ready version for Upwork. Known completed clarification count: 1

Known clarification answers:
- Cost and quota posture: Quality first

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of YouTube Shorts workflow strategist and retention-focused faceless content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

## Generated Response

## Accepted Package Response

### 1. Package Confirmation
This request should be handled as proposal package: Turn a job posting into a proposal, prototype concept, MVP spec, and skills map. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. The current draft now includes 1 clarification answer.

### 2. Pinned Package Blocks
## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job called "High-Retention YouTube Shorts Automation System." Job summary: The client wants a high-retention faceless YouTube Shorts system focused on business stories, finance, wealth psychology, economics, and AI/business trends. They want strong hooks in the first 1-2 seconds, retention optimization, cinematic storytelling, fast pacing, documentary-style editing, cinematic stock footage, motion graphics, animated charts, dynamic subtitles, sound design, layered editing, fast scene changes, trend research, viral topic analysis, hook generation, thumbnail analysis, and an approval workflow before posting. They do not want AI avatars or generic slideshow content. The post says one-time fixed price $100, but also mentions a weekly offer of 2 videos for $20. Fewer than 5 proposals. Client is payment method not verified, phone verified, Canada, 1 job posted, 0% hire rate. My goal for this pass: Generate a proposal package that positions me as the person who can build the first version of a retention-focused faceless Shorts workflow and prove it with a starter deliverable or pilot batch. Positioning constraints: Do NOT position me as a cheap general video editor. Do NOT promise virality. Do position me as a systems-first operator who can build the first retention-focused Shorts workflow: topic research, hook structure, edit logic, subtitle rhythm, approval flow, and pilot outputs. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. My relevant angle: I am stronger at systems, workflow thinking, automation, structure, prompt refinement, repeatable execution, and turning vague asks into working processes than at claiming elite established YouTube channel results. The proposal should sell clarity, structure, retention logic, and pilot execution. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. 2-Milestone Structure 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package Completed next action: Chose the positioning angle and narrowed the offer to a starter retention-focused Shorts workflow instead of cheap ongoing editing. Why it mattered: This removes the biggest proposal risk, which is sounding like I accept premium production expectations at bargain pricing. Action after this: Generate the full proposal package and identify the cleanest paste-ready version for Upwork. Known completed clarification count: 1

Known clarification answers:
- Cost and quota posture: Quality first

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of YouTube Shorts workflow strategist and retention-focused faceless content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

### 3. Next Package Action
Name the repeated manual task, trigger, input, output, and failure case.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this proposal package prompt refinement pass.

Original goal:
I am applying to an Upwork job called "High-Retention YouTube Shorts Automation System." Job summary: The client wants a high-retention faceless YouTube Shorts system focused on business stories, finance, wealth psychology, economics, and AI/business trends. They want strong hooks in the first 1-2 seconds, retention optimization, cinematic storytelling, fast pacing, documentary-style editing, cinematic stock footage, motion graphics, animated charts, dynamic subtitles, sound design, layered editing, fast scene changes, trend research, viral topic analysis, hook generation, thumbnail analysis, and an approval workflow before posting. They do not want AI avatars or generic slideshow content. The post says one-time fixed price $100, but also mentions a weekly offer of 2 videos for $20. Fewer than 5 proposals. Client is payment method not verified, phone verified, Canada, 1 job posted, 0% hire rate. My goal for this pass: Generate a proposal package that positions me as the person who can build the first version of a retention-focused faceless Shorts workflow and prove it with a starter deliverable or pilot batch. Positioning constraints: Do NOT position me as a cheap general video editor. Do NOT promise virality. Do position me as a systems-first operator who can build the first retention-focused Shorts workflow: topic research, hook structure, edit logic, subtitle rhythm, approval flow, and pilot outputs. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. My relevant angle: I am stronger at systems, workflow thinking, automation, structure, prompt refinement, repeatable execution, and turning vague asks into working processes than at claiming elite established YouTube channel results. The proposal should sell clarity, structure, retention logic, and pilot execution. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. 2-Milestone Structure 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package Completed next action: Chose the positioning angle and narrowed the offer to a starter retention-focused Shorts workflow instead of cheap ongoing editing. Why it mattered: This removes the biggest proposal risk, which is sounding like I accept premium production expectations at bargain pricing. Action after this: Generate the full proposal package and identify the cleanest paste-ready version for Upwork. Known completed clarification count: 1

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution.
Action after this: Reclassify the prompt and generate the next concrete artifact.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Identify the first screen, primary action, and what must be visible without explanation.
4. Clarify what decision the answer should support.
5. Choose the output shape: prompt, plan, table, recommendation, or checklist.

Known completed clarification count: 1

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780373636470

Accepted: 2026-06-02T04:13:56.529Z
Conversation: 0000
Family: job_posting_to_proposal_package
Role: YouTube Shorts workflow strategist and retention-focused faceless content systems builder

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Outcome-First Proposal
Purpose: Shapes the proposal around the client's result instead of generic qualifications.
Input example: Client needs an automation dashboard for recurring reporting.
Output example: Open with the reporting bottleneck, propose a small dashboard prototype, map experience to requirements, then ask for one scope-confirming call.
Why this matters: Proposal mode needs persuasion examples so the output sounds useful and specific, not like a cover letter.
Tags: proposal, client, outcome

### 2. Prototype Bridge
Purpose: Shows how to convert a job post into a credibility-building prototype idea.
Input example: Posting asks for an AI workflow tool but does not define the UI.
Output example: Prototype a one-screen workflow inbox with intake, classification, status, and export so the client can see the proposed solution quickly.
Why this matters: A prototype example helps the package produce something concrete the user can reference in the proposal.
Tags: prototype, portfolio, proof

### 3. Qualifications Map
Purpose: Keeps the skills section honest and mapped to the posting.
Input example: Requirement: API integrations, automation, and clean dashboard UI.
Output example: Map each requirement to proof, confidence, missing context, and how to address gaps without overstating experience.
Why this matters: This prevents the generated package from making unsupported claims.
Tags: skills, trust, requirements

## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I finished the next action for this proposal package prompt refinement pass. Original goal: I am applying to an Upwork job called "High-Retention YouTube Shorts Automation System." Job summary: The client wants a high-retention faceless YouTube Shorts system focused on business stories, finance, wealth psychology, economics, and AI/business trends. They want strong hooks in the first 1-2 seconds, retention optimization, cinematic storytelling, fast pacing, documentary-style editing, cinematic stock footage, motion graphics, animated charts, dynamic subtitles, sound design, layered editing, fast scene changes, trend research, viral topic analysis, hook generation, thumbnail analysis, and an approval workflow before posting. They do not want AI avatars or generic slideshow content. The post says one-time fixed price $100, but also mentions a weekly offer of 2 videos for $20. Fewer than 5 proposals. Client is payment method not verified, phone verified, Canada, 1 job posted, 0% hire rate. My goal for this pass: Generate a proposal package that positions me as the person who can build the first version of a retention-focused faceless Shorts workflow and prove it with a starter deliverable or pilot batch. Positioning constraints: Do NOT position me as a cheap general video editor. Do NOT promise virality. Do position me as a systems-first operator who can build the first retention-focused Shorts workflow: topic research, hook structure, edit logic, subtitle rhythm, approval flow, and pilot outputs. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. My relevant angle: I am stronger at systems, workflow thinking, automation, structure, prompt refinement, repeatable execution, and turning vague asks into working processes than at claiming elite established YouTube channel results. The proposal should sell clarity, structure, retention logic, and pilot execution. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. 2-Milestone Structure 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package Completed next action: Chose the positioning angle and narrowed the offer to a starter retention-focused Shorts workflow instead of cheap ongoing editing. Why it mattered: This removes the biggest proposal risk, which is sounding like I accept premium production expectations at bargain pricing. Action after this: Generate the full proposal package and identify the cleanest paste-ready version for Upwork. Known completed clarification count: 1 Completed next action: Name the repeated manual task, trigger, input, output, and failure case. Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution. Action after this: Reclassify the prompt and generate the next concrete artifact. Other viable next-action options: 1. Name the repeated manual task, trigger, input, output, and failure case. 2. Map the automation as one before/after workflow with a measurable time saved. 3. Identify the first screen, primary action, and what must be visible without explanation. 4. Clarify what decision the answer should support. 5. Choose the output shape: prompt, plan, table, recommendation, or checklist. Known completed clarification count: 1 Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return: 1. The revised final prompt. 2. The next action I should take. 3. Why that action is next. 4. The action after that. 5. The next prompt I should give back after I finish that action.

Known clarification answers:
- Cost and quota posture: Not specified

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of YouTube Shorts workflow strategist and retention-focused faceless content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

## Generated Response

## Accepted Package Response

### 1. Package Confirmation
This request should be handled as proposal package: Turn a job posting into a proposal, prototype concept, MVP spec, and skills map. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. The current draft now includes 1 clarification answer.

### 2. Pinned Package Blocks
## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I finished the next action for this proposal package prompt refinement pass. Original goal: I am applying to an Upwork job called "High-Retention YouTube Shorts Automation System." Job summary: The client wants a high-retention faceless YouTube Shorts system focused on business stories, finance, wealth psychology, economics, and AI/business trends. They want strong hooks in the first 1-2 seconds, retention optimization, cinematic storytelling, fast pacing, documentary-style editing, cinematic stock footage, motion graphics, animated charts, dynamic subtitles, sound design, layered editing, fast scene changes, trend research, viral topic analysis, hook generation, thumbnail analysis, and an approval workflow before posting. They do not want AI avatars or generic slideshow content. The post says one-time fixed price $100, but also mentions a weekly offer of 2 videos for $20. Fewer than 5 proposals. Client is payment method not verified, phone verified, Canada, 1 job posted, 0% hire rate. My goal for this pass: Generate a proposal package that positions me as the person who can build the first version of a retention-focused faceless Shorts workflow and prove it with a starter deliverable or pilot batch. Positioning constraints: Do NOT position me as a cheap general video editor. Do NOT promise virality. Do position me as a systems-first operator who can build the first retention-focused Shorts workflow: topic research, hook structure, edit logic, subtitle rhythm, approval flow, and pilot outputs. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. My relevant angle: I am stronger at systems, workflow thinking, automation, structure, prompt refinement, repeatable execution, and turning vague asks into working processes than at claiming elite established YouTube channel results. The proposal should sell clarity, structure, retention logic, and pilot execution. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. 2-Milestone Structure 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package Completed next action: Chose the positioning angle and narrowed the offer to a starter retention-focused Shorts workflow instead of cheap ongoing editing. Why it mattered: This removes the biggest proposal risk, which is sounding like I accept premium production expectations at bargain pricing. Action after this: Generate the full proposal package and identify the cleanest paste-ready version for Upwork. Known completed clarification count: 1 Completed next action: Name the repeated manual task, trigger, input, output, and failure case. Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution. Action after this: Reclassify the prompt and generate the next concrete artifact. Other viable next-action options: 1. Name the repeated manual task, trigger, input, output, and failure case. 2. Map the automation as one before/after workflow with a measurable time saved. 3. Identify the first screen, primary action, and what must be visible without explanation. 4. Clarify what decision the answer should support. 5. Choose the output shape: prompt, plan, table, recommendation, or checklist. Known completed clarification count: 1 Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return: 1. The revised final prompt. 2. The next action I should take. 3. Why that action is next. 4. The action after that. 5. The next prompt I should give back after I finish that action.

Known clarification answers:
- Cost and quota posture: Not specified

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of YouTube Shorts workflow strategist and retention-focused faceless content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

### 3. Next Package Action
Name the repeated manual task, trigger, input, output, and failure case.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this proposal package prompt refinement pass.

Original goal:
I finished the next action for this proposal package prompt refinement pass. Original goal: I am applying to an Upwork job called "High-Retention YouTube Shorts Automation System." Job summary: The client wants a high-retention faceless YouTube Shorts system focused on business stories, finance, wealth psychology, economics, and AI/business trends. They want strong hooks in the first 1-2 seconds, retention optimization, cinematic storytelling, fast pacing, documentary-style editing, cinematic stock footage, motion graphics, animated charts, dynamic subtitles, sound design, layered editing, fast scene changes, trend research, viral topic analysis, hook generation, thumbnail analysis, and an approval workflow before posting. They do not want AI avatars or generic slideshow content. The post says one-time fixed price $100, but also mentions a weekly offer of 2 videos for $20. Fewer than 5 proposals. Client is payment method not verified, phone verified, Canada, 1 job posted, 0% hire rate. My goal for this pass: Generate a proposal package that positions me as the person who can build the first version of a retention-focused faceless Shorts workflow and prove it with a starter deliverable or pilot batch. Positioning constraints: Do NOT position me as a cheap general video editor. Do NOT promise virality. Do position me as a systems-first operator who can build the first retention-focused Shorts workflow: topic research, hook structure, edit logic, subtitle rhythm, approval flow, and pilot outputs. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. My relevant angle: I am stronger at systems, workflow thinking, automation, structure, prompt refinement, repeatable execution, and turning vague asks into working processes than at claiming elite established YouTube channel results. The proposal should sell clarity, structure, retention logic, and pilot execution. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. 2-Milestone Structure 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package Completed next action: Chose the positioning angle and narrowed the offer to a starter retention-focused Shorts workflow instead of cheap ongoing editing. Why it mattered: This removes the biggest proposal risk, which is sounding like I accept premium production expectations at bargain pricing. Action after this: Generate the full proposal package and identify the cleanest paste-ready version for Upwork. Known completed clarification count: 1 Completed next action: Name the repeated manual task, trigger, input, output, and failure case. Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution. Action after this: Reclassify the prompt and generate the next concrete artifact. Other viable next-action options: 1. Name the repeated manual task, trigger, input, output, and failure case. 2. Map the automation as one before/after workflow with a measurable time saved. 3. Identify the first screen, primary action, and what must be visible without explanation. 4. Clarify what decision the answer should support. 5. Choose the output shape: prompt, plan, table, recommendation, or checklist. Known completed clarification count: 1 Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return: 1. The revised final prompt. 2. The next action I should take. 3. Why that action is next. 4. The action after that. 5. The next prompt I should give back after I finish that action.

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution.
Action after this: Reclassify the prompt and generate the next concrete artifact.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Identify the first screen, primary action, and what must be visible without explanation.
4. Clarify what decision the answer should support.
5. Choose the output shape: prompt, plan, table, recommendation, or checklist.

Known completed clarification count: 1

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780373663123

Accepted: 2026-06-02T04:14:23.169Z
Conversation: 0000
Family: job_posting_to_proposal_package
Role: YouTube Shorts workflow strategist and retention-focused faceless content systems builder

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Outcome-First Proposal
Purpose: Shapes the proposal around the client's result instead of generic qualifications.
Input example: Client needs an automation dashboard for recurring reporting.
Output example: Open with the reporting bottleneck, propose a small dashboard prototype, map experience to requirements, then ask for one scope-confirming call.
Why this matters: Proposal mode needs persuasion examples so the output sounds useful and specific, not like a cover letter.
Tags: proposal, client, outcome

### 2. Prototype Bridge
Purpose: Shows how to convert a job post into a credibility-building prototype idea.
Input example: Posting asks for an AI workflow tool but does not define the UI.
Output example: Prototype a one-screen workflow inbox with intake, classification, status, and export so the client can see the proposed solution quickly.
Why this matters: A prototype example helps the package produce something concrete the user can reference in the proposal.
Tags: prototype, portfolio, proof

### 3. Qualifications Map
Purpose: Keeps the skills section honest and mapped to the posting.
Input example: Requirement: API integrations, automation, and clean dashboard UI.
Output example: Map each requirement to proof, confidence, missing context, and how to address gaps without overstating experience.
Why this matters: This prevents the generated package from making unsupported claims.
Tags: skills, trust, requirements

## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I finished the next action for this proposal package prompt refinement pass. Original goal: I am applying to an Upwork job called "High-Retention YouTube Shorts Automation System." Job summary: The client wants a high-retention faceless YouTube Shorts system focused on business stories, finance, wealth psychology, economics, and AI/business trends. They want strong hooks in the first 1-2 seconds, retention optimization, cinematic storytelling, fast pacing, documentary-style editing, cinematic stock footage, motion graphics, animated charts, dynamic subtitles, sound design, layered editing, fast scene changes, trend research, viral topic analysis, hook generation, thumbnail analysis, and an approval workflow before posting. They do not want AI avatars or generic slideshow content. The post says one-time fixed price $100, but also mentions a weekly offer of 2 videos for $20. Fewer than 5 proposals. Client is payment method not verified, phone verified, Canada, 1 job posted, 0% hire rate. My goal for this pass: Generate a proposal package that positions me as the person who can build the first version of a retention-focused faceless Shorts workflow and prove it with a starter deliverable or pilot batch. Positioning constraints: Do NOT position me as a cheap general video editor. Do NOT promise virality. Do position me as a systems-first operator who can build the first retention-focused Shorts workflow: topic research, hook structure, edit logic, subtitle rhythm, approval flow, and pilot outputs. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. My relevant angle: I am stronger at systems, workflow thinking, automation, structure, prompt refinement, repeatable execution, and turning vague asks into working processes than at claiming elite established YouTube channel results. The proposal should sell clarity, structure, retention logic, and pilot execution. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. 2-Milestone Structure 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package Completed next action: Chose the positioning angle and narrowed the offer to a starter retention-focused Shorts workflow instead of cheap ongoing editing. Why it mattered: This removes the biggest proposal risk, which is sounding like I accept premium production expectations at bargain pricing. Action after this: Generate the full proposal package and identify the cleanest paste-ready version for Upwork. Known completed clarification count: 1 Completed next action: Name the repeated manual task, trigger, input, output, and failure case. Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution. Action after this: Reclassify the prompt and generate the next concrete artifact. Other viable next-action options: 1. Name the repeated manual task, trigger, input, output, and failure case. 2. Map the automation as one before/after workflow with a measurable time saved. 3. Identify the first screen, primary action, and what must be visible without explanation. 4. Clarify what decision the answer should support. 5. Choose the output shape: prompt, plan, table, recommendation, or checklist. Known completed clarification count: 1 Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return: 1. The revised final prompt. 2. The next action I should take. 3. Why that action is next. 4. The action after that. 5. The next prompt I should give back after I finish that action.

Known clarification answers:
- Cost and quota posture: Not specified

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of YouTube Shorts workflow strategist and retention-focused faceless content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

## Generated Response

## Accepted Package Response

### 1. Package Confirmation
This request should be handled as proposal package: Turn a job posting into a proposal, prototype concept, MVP spec, and skills map. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. The current draft now includes 1 clarification answer.

### 2. Pinned Package Blocks
## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I finished the next action for this proposal package prompt refinement pass. Original goal: I am applying to an Upwork job called "High-Retention YouTube Shorts Automation System." Job summary: The client wants a high-retention faceless YouTube Shorts system focused on business stories, finance, wealth psychology, economics, and AI/business trends. They want strong hooks in the first 1-2 seconds, retention optimization, cinematic storytelling, fast pacing, documentary-style editing, cinematic stock footage, motion graphics, animated charts, dynamic subtitles, sound design, layered editing, fast scene changes, trend research, viral topic analysis, hook generation, thumbnail analysis, and an approval workflow before posting. They do not want AI avatars or generic slideshow content. The post says one-time fixed price $100, but also mentions a weekly offer of 2 videos for $20. Fewer than 5 proposals. Client is payment method not verified, phone verified, Canada, 1 job posted, 0% hire rate. My goal for this pass: Generate a proposal package that positions me as the person who can build the first version of a retention-focused faceless Shorts workflow and prove it with a starter deliverable or pilot batch. Positioning constraints: Do NOT position me as a cheap general video editor. Do NOT promise virality. Do position me as a systems-first operator who can build the first retention-focused Shorts workflow: topic research, hook structure, edit logic, subtitle rhythm, approval flow, and pilot outputs. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. My relevant angle: I am stronger at systems, workflow thinking, automation, structure, prompt refinement, repeatable execution, and turning vague asks into working processes than at claiming elite established YouTube channel results. The proposal should sell clarity, structure, retention logic, and pilot execution. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. 2-Milestone Structure 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package Completed next action: Chose the positioning angle and narrowed the offer to a starter retention-focused Shorts workflow instead of cheap ongoing editing. Why it mattered: This removes the biggest proposal risk, which is sounding like I accept premium production expectations at bargain pricing. Action after this: Generate the full proposal package and identify the cleanest paste-ready version for Upwork. Known completed clarification count: 1 Completed next action: Name the repeated manual task, trigger, input, output, and failure case. Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution. Action after this: Reclassify the prompt and generate the next concrete artifact. Other viable next-action options: 1. Name the repeated manual task, trigger, input, output, and failure case. 2. Map the automation as one before/after workflow with a measurable time saved. 3. Identify the first screen, primary action, and what must be visible without explanation. 4. Clarify what decision the answer should support. 5. Choose the output shape: prompt, plan, table, recommendation, or checklist. Known completed clarification count: 1 Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return: 1. The revised final prompt. 2. The next action I should take. 3. Why that action is next. 4. The action after that. 5. The next prompt I should give back after I finish that action.

Known clarification answers:
- Cost and quota posture: Not specified

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of YouTube Shorts workflow strategist and retention-focused faceless content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

### 3. Next Package Action
Name the repeated manual task, trigger, input, output, and failure case.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this proposal package prompt refinement pass.

Original goal:
I finished the next action for this proposal package prompt refinement pass. Original goal: I am applying to an Upwork job called "High-Retention YouTube Shorts Automation System." Job summary: The client wants a high-retention faceless YouTube Shorts system focused on business stories, finance, wealth psychology, economics, and AI/business trends. They want strong hooks in the first 1-2 seconds, retention optimization, cinematic storytelling, fast pacing, documentary-style editing, cinematic stock footage, motion graphics, animated charts, dynamic subtitles, sound design, layered editing, fast scene changes, trend research, viral topic analysis, hook generation, thumbnail analysis, and an approval workflow before posting. They do not want AI avatars or generic slideshow content. The post says one-time fixed price $100, but also mentions a weekly offer of 2 videos for $20. Fewer than 5 proposals. Client is payment method not verified, phone verified, Canada, 1 job posted, 0% hire rate. My goal for this pass: Generate a proposal package that positions me as the person who can build the first version of a retention-focused faceless Shorts workflow and prove it with a starter deliverable or pilot batch. Positioning constraints: Do NOT position me as a cheap general video editor. Do NOT promise virality. Do position me as a systems-first operator who can build the first retention-focused Shorts workflow: topic research, hook structure, edit logic, subtitle rhythm, approval flow, and pilot outputs. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. My relevant angle: I am stronger at systems, workflow thinking, automation, structure, prompt refinement, repeatable execution, and turning vague asks into working processes than at claiming elite established YouTube channel results. The proposal should sell clarity, structure, retention logic, and pilot execution. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. 2-Milestone Structure 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package Completed next action: Chose the positioning angle and narrowed the offer to a starter retention-focused Shorts workflow instead of cheap ongoing editing. Why it mattered: This removes the biggest proposal risk, which is sounding like I accept premium production expectations at bargain pricing. Action after this: Generate the full proposal package and identify the cleanest paste-ready version for Upwork. Known completed clarification count: 1 Completed next action: Name the repeated manual task, trigger, input, output, and failure case. Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution. Action after this: Reclassify the prompt and generate the next concrete artifact. Other viable next-action options: 1. Name the repeated manual task, trigger, input, output, and failure case. 2. Map the automation as one before/after workflow with a measurable time saved. 3. Identify the first screen, primary action, and what must be visible without explanation. 4. Clarify what decision the answer should support. 5. Choose the output shape: prompt, plan, table, recommendation, or checklist. Known completed clarification count: 1 Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return: 1. The revised final prompt. 2. The next action I should take. 3. Why that action is next. 4. The action after that. 5. The next prompt I should give back after I finish that action.

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution.
Action after this: Reclassify the prompt and generate the next concrete artifact.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Identify the first screen, primary action, and what must be visible without explanation.
4. Clarify what decision the answer should support.
5. Choose the output shape: prompt, plan, table, recommendation, or checklist.

Known completed clarification count: 1

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780378460414

Accepted: 2026-06-02T05:34:20.485Z
Conversation: 0000
Family: job_posting_to_proposal_package
Role: AI-powered restaurant marketing automation specialist and social content systems builder

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Outcome-First Proposal
Purpose: Shapes the proposal around the client's result instead of generic qualifications.
Input example: Client needs an automation dashboard for recurring reporting.
Output example: Open with the reporting bottleneck, propose a small dashboard prototype, map experience to requirements, then ask for one scope-confirming call.
Why this matters: Proposal mode needs persuasion examples so the output sounds useful and specific, not like a cover letter.
Tags: proposal, client, outcome

### 2. Prototype Bridge
Purpose: Shows how to convert a job post into a credibility-building prototype idea.
Input example: Posting asks for an AI workflow tool but does not define the UI.
Output example: Prototype a one-screen workflow inbox with intake, classification, status, and export so the client can see the proposed solution quickly.
Why this matters: A prototype example helps the package produce something concrete the user can reference in the proposal.
Tags: prototype, portfolio, proof

### 3. Qualifications Map
Purpose: Keeps the skills section honest and mapped to the posting.
Input example: Requirement: API integrations, automation, and clean dashboard UI.
Output example: Map each requirement to proof, confidence, missing context, and how to address gaps without overstating experience.
Why this matters: This prevents the generated package from making unsupported claims.
Tags: skills, trust, requirements

## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job called "Restaurant Marketing with AI Automation." Job summary: The client needs someone to help market their restaurant using AI to create and automatically post content. The goal is to reduce manual effort and find cost-effective solutions for marketing. They want experience in social media marketing and AI tools to enhance engagement and reach. U.S. only. Hourly $15-$35/hr stated range but actual bid range shows Low $45, Avg $55, High $70. Ongoing project 1-3 months, less than 30 hrs/week. Fewer than 5 proposals. 0 interviewing. 0 invites sent. Payment not verified, phone verified, United States, 1 job posted, 0% hire rate. Only nice-to-have skill listed is Illustration. My goal for this pass: Generate a proposal package that positions me as the person who can build AND run an AI-powered content automation system for their restaurant — not just a social media manager who schedules posts. Positioning constraints: Do NOT position me as a generic social media manager. Do NOT promise vanity metrics like follower counts or viral posts. Do position me as a systems builder who uses AI tools to create content, automate posting, reduce manual effort, and make restaurant marketing consistent and low-maintenance for the owner. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. Bid angle: position at $35/hr — top of their stated range, well below the field avg of $55, making me look affordable but not cheap. My relevant angle: I am stronger at systems, workflow thinking, AI automation, structured processes, and turning vague asks into repeatable working pipelines than at claiming an established social media management agency background. The proposal should sell clarity, automation logic, and practical low-effort restaurant content systems. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. Engagement Structure (hourly rate + suggested weekly scope) 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package Completed next action: Chose positioning angle — systems builder who automates restaurant content, not a social media manager. Why it mattered: Restaurant owners are time-poor. They don't want to manage a social media person. They want the problem to disappear. Positioning as an AI automation system builder hits that pain point directly. Action after this: Generate the full proposal package and identify the cleanest paste-ready version for Upwork. Known completed clarification count: 1

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of AI-powered restaurant marketing automation specialist and social content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

## Generated Response

## Accepted Package Response

### 1. Package Confirmation
This request should be handled as proposal package: Turn a job posting into a proposal, prototype concept, MVP spec, and skills map. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition.

### 2. Pinned Package Blocks
## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job called "Restaurant Marketing with AI Automation." Job summary: The client needs someone to help market their restaurant using AI to create and automatically post content. The goal is to reduce manual effort and find cost-effective solutions for marketing. They want experience in social media marketing and AI tools to enhance engagement and reach. U.S. only. Hourly $15-$35/hr stated range but actual bid range shows Low $45, Avg $55, High $70. Ongoing project 1-3 months, less than 30 hrs/week. Fewer than 5 proposals. 0 interviewing. 0 invites sent. Payment not verified, phone verified, United States, 1 job posted, 0% hire rate. Only nice-to-have skill listed is Illustration. My goal for this pass: Generate a proposal package that positions me as the person who can build AND run an AI-powered content automation system for their restaurant — not just a social media manager who schedules posts. Positioning constraints: Do NOT position me as a generic social media manager. Do NOT promise vanity metrics like follower counts or viral posts. Do position me as a systems builder who uses AI tools to create content, automate posting, reduce manual effort, and make restaurant marketing consistent and low-maintenance for the owner. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. Bid angle: position at $35/hr — top of their stated range, well below the field avg of $55, making me look affordable but not cheap. My relevant angle: I am stronger at systems, workflow thinking, AI automation, structured processes, and turning vague asks into repeatable working pipelines than at claiming an established social media management agency background. The proposal should sell clarity, automation logic, and practical low-effort restaurant content systems. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. Engagement Structure (hourly rate + suggested weekly scope) 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package Completed next action: Chose positioning angle — systems builder who automates restaurant content, not a social media manager. Why it mattered: Restaurant owners are time-poor. They don't want to manage a social media person. They want the problem to disappear. Positioning as an AI automation system builder hits that pain point directly. Action after this: Generate the full proposal package and identify the cleanest paste-ready version for Upwork. Known completed clarification count: 1

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of AI-powered restaurant marketing automation specialist and social content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

### 3. Next Package Action
Name the repeated manual task, trigger, input, output, and failure case.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this proposal package prompt refinement pass.

Original goal:
I am applying to an Upwork job called "Restaurant Marketing with AI Automation." Job summary: The client needs someone to help market their restaurant using AI to create and automatically post content. The goal is to reduce manual effort and find cost-effective solutions for marketing. They want experience in social media marketing and AI tools to enhance engagement and reach. U.S. only. Hourly $15-$35/hr stated range but actual bid range shows Low $45, Avg $55, High $70. Ongoing project 1-3 months, less than 30 hrs/week. Fewer than 5 proposals. 0 interviewing. 0 invites sent. Payment not verified, phone verified, United States, 1 job posted, 0% hire rate. Only nice-to-have skill listed is Illustration. My goal for this pass: Generate a proposal package that positions me as the person who can build AND run an AI-powered content automation system for their restaurant — not just a social media manager who schedules posts. Positioning constraints: Do NOT position me as a generic social media manager. Do NOT promise vanity metrics like follower counts or viral posts. Do position me as a systems builder who uses AI tools to create content, automate posting, reduce manual effort, and make restaurant marketing consistent and low-maintenance for the owner. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. Bid angle: position at $35/hr — top of their stated range, well below the field avg of $55, making me look affordable but not cheap. My relevant angle: I am stronger at systems, workflow thinking, AI automation, structured processes, and turning vague asks into repeatable working pipelines than at claiming an established social media management agency background. The proposal should sell clarity, automation logic, and practical low-effort restaurant content systems. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. Engagement Structure (hourly rate + suggested weekly scope) 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package Completed next action: Chose positioning angle — systems builder who automates restaurant content, not a social media manager. Why it mattered: Restaurant owners are time-poor. They don't want to manage a social media person. They want the problem to disappear. Positioning as an AI automation system builder hits that pain point directly. Action after this: Generate the full proposal package and identify the cleanest paste-ready version for Upwork. Known completed clarification count: 1

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution.
Action after this: Reclassify the prompt and generate the next concrete artifact.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Clarify what decision the answer should support.

Known completed clarification count: 0

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780379021432

Accepted: 2026-06-02T05:43:41.472Z
Conversation: 0000
Family: job_posting_to_proposal_package
Role: AI-powered restaurant marketing automation specialist and social content systems builder

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Outcome-First Proposal
Purpose: Shapes the proposal around the client's result instead of generic qualifications.
Input example: Client needs an automation dashboard for recurring reporting.
Output example: Open with the reporting bottleneck, propose a small dashboard prototype, map experience to requirements, then ask for one scope-confirming call.
Why this matters: Proposal mode needs persuasion examples so the output sounds useful and specific, not like a cover letter.
Tags: proposal, client, outcome

### 2. Prototype Bridge
Purpose: Shows how to convert a job post into a credibility-building prototype idea.
Input example: Posting asks for an AI workflow tool but does not define the UI.
Output example: Prototype a one-screen workflow inbox with intake, classification, status, and export so the client can see the proposed solution quickly.
Why this matters: A prototype example helps the package produce something concrete the user can reference in the proposal.
Tags: prototype, portfolio, proof

### 3. Qualifications Map
Purpose: Keeps the skills section honest and mapped to the posting.
Input example: Requirement: API integrations, automation, and clean dashboard UI.
Output example: Map each requirement to proof, confidence, missing context, and how to address gaps without overstating experience.
Why this matters: This prevents the generated package from making unsupported claims.
Tags: skills, trust, requirements

## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job called "Restaurant Marketing with AI Automation." Job summary: The client needs someone to help market their restaurant using AI to create and automatically post content. The goal is to reduce manual effort and find cost-effective solutions for marketing. They want experience in social media marketing and AI tools to enhance engagement and reach. U.S. only. Hourly $15-$35/hr stated range but actual bid range shows Low $45, Avg $55, High $70. Ongoing project 1-3 months, less than 30 hrs/week. Fewer than 5 proposals. 0 interviewing. 0 invites sent. Payment not verified, phone verified, United States, 1 job posted, 0% hire rate. Only nice-to-have skill listed is Illustration. My goal for this pass: Generate a proposal package that positions me as the person who can build AND run an AI-powered content automation system for their restaurant - not just a social media manager who schedules posts. Positioning constraints: Do NOT position me as a generic social media manager. Do NOT promise vanity metrics like follower counts or viral posts. Do position me as a systems builder who uses AI tools to create content, automate posting, reduce manual effort, and make restaurant marketing consistent and low-maintenance for the owner. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. Bid angle: position at $35/hr - top of their stated range, well below the field avg of $55, making me look affordable but not cheap. My relevant angle: I am stronger at systems, workflow thinking, AI automation, structured processes, and turning vague asks into repeatable working pipelines than at claiming an established social media management agency background. The proposal should sell clarity, automation logic, and practical low-effort restaurant content systems. This request should be handled as a proposal package: turn this job posting into a proposal, prototype concept, MVP spec, and skills map. Output a paste-ready execution prompt while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. Engagement Structure (hourly rate + suggested weekly scope) 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package paste-ready for Upwork

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of AI-powered restaurant marketing automation specialist and social content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

## Generated Response

## Accepted Package Response

### 1. Package Confirmation
This request should be handled as proposal package: Turn a job posting into a proposal, prototype concept, MVP spec, and skills map. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition.

### 2. Pinned Package Blocks
## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job called "Restaurant Marketing with AI Automation." Job summary: The client needs someone to help market their restaurant using AI to create and automatically post content. The goal is to reduce manual effort and find cost-effective solutions for marketing. They want experience in social media marketing and AI tools to enhance engagement and reach. U.S. only. Hourly $15-$35/hr stated range but actual bid range shows Low $45, Avg $55, High $70. Ongoing project 1-3 months, less than 30 hrs/week. Fewer than 5 proposals. 0 interviewing. 0 invites sent. Payment not verified, phone verified, United States, 1 job posted, 0% hire rate. Only nice-to-have skill listed is Illustration. My goal for this pass: Generate a proposal package that positions me as the person who can build AND run an AI-powered content automation system for their restaurant - not just a social media manager who schedules posts. Positioning constraints: Do NOT position me as a generic social media manager. Do NOT promise vanity metrics like follower counts or viral posts. Do position me as a systems builder who uses AI tools to create content, automate posting, reduce manual effort, and make restaurant marketing consistent and low-maintenance for the owner. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. Bid angle: position at $35/hr - top of their stated range, well below the field avg of $55, making me look affordable but not cheap. My relevant angle: I am stronger at systems, workflow thinking, AI automation, structured processes, and turning vague asks into repeatable working pipelines than at claiming an established social media management agency background. The proposal should sell clarity, automation logic, and practical low-effort restaurant content systems. This request should be handled as a proposal package: turn this job posting into a proposal, prototype concept, MVP spec, and skills map. Output a paste-ready execution prompt while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. Engagement Structure (hourly rate + suggested weekly scope) 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package paste-ready for Upwork

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of AI-powered restaurant marketing automation specialist and social content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

### 3. Next Package Action
Name the repeated manual task, trigger, input, output, and failure case.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this proposal package prompt refinement pass.

Original goal:
I am applying to an Upwork job called "Restaurant Marketing with AI Automation." Job summary: The client needs someone to help market their restaurant using AI to create and automatically post content. The goal is to reduce manual effort and find cost-effective solutions for marketing. They want experience in social media marketing and AI tools to enhance engagement and reach. U.S. only. Hourly $15-$35/hr stated range but actual bid range shows Low $45, Avg $55, High $70. Ongoing project 1-3 months, less than 30 hrs/week. Fewer than 5 proposals. 0 interviewing. 0 invites sent. Payment not verified, phone verified, United States, 1 job posted, 0% hire rate. Only nice-to-have skill listed is Illustration. My goal for this pass: Generate a proposal package that positions me as the person who can build AND run an AI-powered content automation system for their restaurant - not just a social media manager who schedules posts. Positioning constraints: Do NOT position me as a generic social media manager. Do NOT promise vanity metrics like follower counts or viral posts. Do position me as a systems builder who uses AI tools to create content, automate posting, reduce manual effort, and make restaurant marketing consistent and low-maintenance for the owner. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. Bid angle: position at $35/hr - top of their stated range, well below the field avg of $55, making me look affordable but not cheap. My relevant angle: I am stronger at systems, workflow thinking, AI automation, structured processes, and turning vague asks into repeatable working pipelines than at claiming an established social media management agency background. The proposal should sell clarity, automation logic, and practical low-effort restaurant content systems. This request should be handled as a proposal package: turn this job posting into a proposal, prototype concept, MVP spec, and skills map. Output a paste-ready execution prompt while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. Engagement Structure (hourly rate + suggested weekly scope) 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package paste-ready for Upwork

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution.
Action after this: Reclassify the prompt and generate the next concrete artifact.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Clarify what decision the answer should support.

Known completed clarification count: 0

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780381360946

Accepted: 2026-06-02T06:22:41.007Z
Conversation: 0000
Family: job_posting_to_proposal_package
Role: AI-powered restaurant marketing automation specialist and social content systems builder

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Outcome-First Proposal
Purpose: Shapes the proposal around the client's result instead of generic qualifications.
Input example: Client needs an automation dashboard for recurring reporting.
Output example: Open with the reporting bottleneck, propose a small dashboard prototype, map experience to requirements, then ask for one scope-confirming call.
Why this matters: Proposal mode needs persuasion examples so the output sounds useful and specific, not like a cover letter.
Tags: proposal, client, outcome

### 2. Prototype Bridge
Purpose: Shows how to convert a job post into a credibility-building prototype idea.
Input example: Posting asks for an AI workflow tool but does not define the UI.
Output example: Prototype a one-screen workflow inbox with intake, classification, status, and export so the client can see the proposed solution quickly.
Why this matters: A prototype example helps the package produce something concrete the user can reference in the proposal.
Tags: prototype, portfolio, proof

### 3. Qualifications Map
Purpose: Keeps the skills section honest and mapped to the posting.
Input example: Requirement: API integrations, automation, and clean dashboard UI.
Output example: Map each requirement to proof, confidence, missing context, and how to address gaps without overstating experience.
Why this matters: This prevents the generated package from making unsupported claims.
Tags: skills, trust, requirements

## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job called "Restaurant Marketing with AI Automation." Job summary: The client needs someone to help market their restaurant using AI to create and automatically post content. The goal is to reduce manual effort and find cost-effective solutions for marketing. They want experience in social media marketing and AI tools to enhance engagement and reach. U.S. only. Hourly $15-$35/hr stated range but actual bid range shows Low $45, Avg $55, High $70. Ongoing project 1-3 months, less than 30 hrs/week. Fewer than 5 proposals. 0 interviewing. 0 invites sent. Payment not verified, phone verified, United States, 1 job posted, 0% hire rate. Only nice-to-have skill listed is Illustration. My goal for this pass: Generate a proposal package that positions me as the person who can build AND run an AI-powered content automation system for their restaurant - not just a social media manager who schedules posts. Positioning constraints: Do NOT position me as a generic social media manager. Do NOT promise vanity metrics like follower counts or viral posts. Do position me as a systems builder who uses AI tools to create content, automate posting, reduce manual effort, and make restaurant marketing consistent and low-maintenance for the owner. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. Bid angle: position at $35/hr - top of their stated range, well below the field avg of $55, making me look affordable but not cheap. My relevant angle: I am stronger at systems, workflow thinking, AI automation, structured processes, and turning vague asks into repeatable working pipelines than at claiming an established social media management agency background. The proposal should sell clarity, automation logic, and practical low-effort restaurant content systems. This request should be handled as a proposal package: turn this job posting into a proposal, prototype concept, MVP spec, and skills map. Output a paste-ready execution prompt while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. Engagement Structure (hourly rate + suggested weekly scope) 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package paste-ready for Upwork

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of AI-powered restaurant marketing automation specialist and social content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

## Generated Response

## Accepted Package Response

### 1. Package Confirmation
This request should be handled as proposal package: Turn a job posting into a proposal, prototype concept, MVP spec, and skills map. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition.

### 2. Pinned Package Blocks
## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job called "Restaurant Marketing with AI Automation." Job summary: The client needs someone to help market their restaurant using AI to create and automatically post content. The goal is to reduce manual effort and find cost-effective solutions for marketing. They want experience in social media marketing and AI tools to enhance engagement and reach. U.S. only. Hourly $15-$35/hr stated range but actual bid range shows Low $45, Avg $55, High $70. Ongoing project 1-3 months, less than 30 hrs/week. Fewer than 5 proposals. 0 interviewing. 0 invites sent. Payment not verified, phone verified, United States, 1 job posted, 0% hire rate. Only nice-to-have skill listed is Illustration. My goal for this pass: Generate a proposal package that positions me as the person who can build AND run an AI-powered content automation system for their restaurant - not just a social media manager who schedules posts. Positioning constraints: Do NOT position me as a generic social media manager. Do NOT promise vanity metrics like follower counts or viral posts. Do position me as a systems builder who uses AI tools to create content, automate posting, reduce manual effort, and make restaurant marketing consistent and low-maintenance for the owner. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. Bid angle: position at $35/hr - top of their stated range, well below the field avg of $55, making me look affordable but not cheap. My relevant angle: I am stronger at systems, workflow thinking, AI automation, structured processes, and turning vague asks into repeatable working pipelines than at claiming an established social media management agency background. The proposal should sell clarity, automation logic, and practical low-effort restaurant content systems. This request should be handled as a proposal package: turn this job posting into a proposal, prototype concept, MVP spec, and skills map. Output a paste-ready execution prompt while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. Engagement Structure (hourly rate + suggested weekly scope) 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package paste-ready for Upwork

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of AI-powered restaurant marketing automation specialist and social content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

### 3. Next Package Action
Name the repeated manual task, trigger, input, output, and failure case.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this proposal package prompt refinement pass.

Original goal:
I am applying to an Upwork job called "Restaurant Marketing with AI Automation." Job summary: The client needs someone to help market their restaurant using AI to create and automatically post content. The goal is to reduce manual effort and find cost-effective solutions for marketing. They want experience in social media marketing and AI tools to enhance engagement and reach. U.S. only. Hourly $15-$35/hr stated range but actual bid range shows Low $45, Avg $55, High $70. Ongoing project 1-3 months, less than 30 hrs/week. Fewer than 5 proposals. 0 interviewing. 0 invites sent. Payment not verified, phone verified, United States, 1 job posted, 0% hire rate. Only nice-to-have skill listed is Illustration. My goal for this pass: Generate a proposal package that positions me as the person who can build AND run an AI-powered content automation system for their restaurant - not just a social media manager who schedules posts. Positioning constraints: Do NOT position me as a generic social media manager. Do NOT promise vanity metrics like follower counts or viral posts. Do position me as a systems builder who uses AI tools to create content, automate posting, reduce manual effort, and make restaurant marketing consistent and low-maintenance for the owner. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. Bid angle: position at $35/hr - top of their stated range, well below the field avg of $55, making me look affordable but not cheap. My relevant angle: I am stronger at systems, workflow thinking, AI automation, structured processes, and turning vague asks into repeatable working pipelines than at claiming an established social media management agency background. The proposal should sell clarity, automation logic, and practical low-effort restaurant content systems. This request should be handled as a proposal package: turn this job posting into a proposal, prototype concept, MVP spec, and skills map. Output a paste-ready execution prompt while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. Engagement Structure (hourly rate + suggested weekly scope) 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package paste-ready for Upwork

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution.
Action after this: Reclassify the prompt and generate the next concrete artifact.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Clarify what decision the answer should support.

Known completed clarification count: 0

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780383023133

Accepted: 2026-06-02T06:50:23.195Z
Conversation: 0000
Family: job_posting_to_proposal_package
Role: AI-powered restaurant marketing automation specialist and social content systems builder

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Outcome-First Proposal
Purpose: Shapes the proposal around the client's result instead of generic qualifications.
Input example: Client needs an automation dashboard for recurring reporting.
Output example: Open with the reporting bottleneck, propose a small dashboard prototype, map experience to requirements, then ask for one scope-confirming call.
Why this matters: Proposal mode needs persuasion examples so the output sounds useful and specific, not like a cover letter.
Tags: proposal, client, outcome

### 2. Prototype Bridge
Purpose: Shows how to convert a job post into a credibility-building prototype idea.
Input example: Posting asks for an AI workflow tool but does not define the UI.
Output example: Prototype a one-screen workflow inbox with intake, classification, status, and export so the client can see the proposed solution quickly.
Why this matters: A prototype example helps the package produce something concrete the user can reference in the proposal.
Tags: prototype, portfolio, proof

### 3. Qualifications Map
Purpose: Keeps the skills section honest and mapped to the posting.
Input example: Requirement: API integrations, automation, and clean dashboard UI.
Output example: Map each requirement to proof, confidence, missing context, and how to address gaps without overstating experience.
Why this matters: This prevents the generated package from making unsupported claims.
Tags: skills, trust, requirements

## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job called "Restaurant Marketing with AI Automation." Job summary: The client needs someone to help market their restaurant using AI to create and automatically post content. The goal is to reduce manual effort and find cost-effective solutions for marketing. They want experience in social media marketing and AI tools to enhance engagement and reach. U.S. only. Hourly $15-$35/hr stated range but actual bid range shows Low $45, Avg $55, High $70. Ongoing project 1-3 months, less than 30 hrs/week. Fewer than 5 proposals. 0 interviewing. 0 invites sent. Payment not verified, phone verified, United States, 1 job posted, 0% hire rate. Only nice-to-have skill listed is Illustration. My goal for this pass: Generate a proposal package that positions me as the person who can build AND run an AI-powered content automation system for their restaurant - not just a social media manager who schedules posts. Positioning constraints: Do NOT position me as a generic social media manager. Do NOT promise vanity metrics like follower counts or viral posts. Do position me as a systems builder who uses AI tools to create content, automate posting, reduce manual effort, and make restaurant marketing consistent and low-maintenance for the owner. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. Bid angle: position at $35/hr - top of their stated range, well below the field avg of $55, making me look affordable but not cheap. My relevant angle: I am stronger at systems, workflow thinking, AI automation, structured processes, and turning vague asks into repeatable working pipelines than at claiming an established social media management agency background. The proposal should sell clarity, automation logic, and practical low-effort restaurant content systems. This request should be handled as a proposal package: turn this job posting into a proposal, prototype concept, MVP spec, and skills map. Output a paste-ready execution prompt while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. Engagement Structure (hourly rate + suggested weekly scope) 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package paste-ready for Upwork

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of AI-powered restaurant marketing automation specialist and social content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

## Generated Response

## Accepted Package Response

### 1. Package Confirmation
This request should be handled as proposal package: Turn a job posting into a proposal, prototype concept, MVP spec, and skills map. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition.

### 2. Pinned Package Blocks
## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job called "Restaurant Marketing with AI Automation." Job summary: The client needs someone to help market their restaurant using AI to create and automatically post content. The goal is to reduce manual effort and find cost-effective solutions for marketing. They want experience in social media marketing and AI tools to enhance engagement and reach. U.S. only. Hourly $15-$35/hr stated range but actual bid range shows Low $45, Avg $55, High $70. Ongoing project 1-3 months, less than 30 hrs/week. Fewer than 5 proposals. 0 interviewing. 0 invites sent. Payment not verified, phone verified, United States, 1 job posted, 0% hire rate. Only nice-to-have skill listed is Illustration. My goal for this pass: Generate a proposal package that positions me as the person who can build AND run an AI-powered content automation system for their restaurant - not just a social media manager who schedules posts. Positioning constraints: Do NOT position me as a generic social media manager. Do NOT promise vanity metrics like follower counts or viral posts. Do position me as a systems builder who uses AI tools to create content, automate posting, reduce manual effort, and make restaurant marketing consistent and low-maintenance for the owner. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. Bid angle: position at $35/hr - top of their stated range, well below the field avg of $55, making me look affordable but not cheap. My relevant angle: I am stronger at systems, workflow thinking, AI automation, structured processes, and turning vague asks into repeatable working pipelines than at claiming an established social media management agency background. The proposal should sell clarity, automation logic, and practical low-effort restaurant content systems. This request should be handled as a proposal package: turn this job posting into a proposal, prototype concept, MVP spec, and skills map. Output a paste-ready execution prompt while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. Engagement Structure (hourly rate + suggested weekly scope) 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package paste-ready for Upwork

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of AI-powered restaurant marketing automation specialist and social content systems builder. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

### 3. Next Package Action
Name the repeated manual task, trigger, input, output, and failure case.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this proposal package prompt refinement pass.

Original goal:
I am applying to an Upwork job called "Restaurant Marketing with AI Automation." Job summary: The client needs someone to help market their restaurant using AI to create and automatically post content. The goal is to reduce manual effort and find cost-effective solutions for marketing. They want experience in social media marketing and AI tools to enhance engagement and reach. U.S. only. Hourly $15-$35/hr stated range but actual bid range shows Low $45, Avg $55, High $70. Ongoing project 1-3 months, less than 30 hrs/week. Fewer than 5 proposals. 0 interviewing. 0 invites sent. Payment not verified, phone verified, United States, 1 job posted, 0% hire rate. Only nice-to-have skill listed is Illustration. My goal for this pass: Generate a proposal package that positions me as the person who can build AND run an AI-powered content automation system for their restaurant - not just a social media manager who schedules posts. Positioning constraints: Do NOT position me as a generic social media manager. Do NOT promise vanity metrics like follower counts or viral posts. Do position me as a systems builder who uses AI tools to create content, automate posting, reduce manual effort, and make restaurant marketing consistent and low-maintenance for the owner. Make the proposal sound confident, specific, practical, and client-focused. Avoid buzzwords like leverage, synergy, results-driven, passionate. Write like a skilled operator, not a salesperson. Bid angle: position at $35/hr - top of their stated range, well below the field avg of $55, making me look affordable but not cheap. My relevant angle: I am stronger at systems, workflow thinking, AI automation, structured processes, and turning vague asks into repeatable working pipelines than at claiming an established social media management agency background. The proposal should sell clarity, automation logic, and practical low-effort restaurant content systems. This request should be handled as a proposal package: turn this job posting into a proposal, prototype concept, MVP spec, and skills map. Output a paste-ready execution prompt while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Requirements and Hidden Expectations 4. Strongest Proposal Angle 5. Short Proposal Draft (150-220 words, confident, specific, no buzzwords) 6. Prototype or Pilot Deliverable Idea 7. Engagement Structure (hourly rate + suggested weekly scope) 8. Skills / Qualifications Map with honest proof and gaps 9. 3 Smart Screening Questions 10. Risk Check for wording that sounds too broad, too cheap, or too desperate 11. Final Proposal Package paste-ready for Upwork

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution.
Action after this: Reclassify the prompt and generate the next concrete artifact.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Clarify what decision the answer should support.

Known completed clarification count: 0

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780414605871

Accepted: 2026-06-02T15:36:45.886Z
Conversation: 0000
Family: job_posting_to_proposal_package
Role: Classically trained pianist with 18 years experience, perfect pitch, wedding arrangement specialist and church music director

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Outcome-First Proposal
Purpose: Shapes the proposal around the client's result instead of generic qualifications.
Input example: Client needs an automation dashboard for recurring reporting.
Output example: Open with the reporting bottleneck, propose a small dashboard prototype, map experience to requirements, then ask for one scope-confirming call.
Why this matters: Proposal mode needs persuasion examples so the output sounds useful and specific, not like a cover letter.
Tags: proposal, client, outcome

### 2. Prototype Bridge
Purpose: Shows how to convert a job post into a credibility-building prototype idea.
Input example: Posting asks for an AI workflow tool but does not define the UI.
Output example: Prototype a one-screen workflow inbox with intake, classification, status, and export so the client can see the proposed solution quickly.
Why this matters: A prototype example helps the package produce something concrete the user can reference in the proposal.
Tags: prototype, portfolio, proof

### 3. Qualifications Map
Purpose: Keeps the skills section honest and mapped to the posting.
Input example: Requirement: API integrations, automation, and clean dashboard UI.
Output example: Map each requirement to proof, confidence, missing context, and how to address gaps without overstating experience.
Why this matters: This prevents the generated package from making unsupported claims.
Tags: skills, trust, requirements

## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job called "Pianist needed for custom wedding song." Job summary: Client wants a custom piano arrangement and recording for their wedding walk. Canon in D transitioning into I2I from The Goofy Movie. Full measure-by-measure spec provided: 68 measures, D major throughout, specific tempos (72 to 84-88 BPM), dynamics marked pp to full piano, emotional arc from traditional Baroque to Disney reveal. Timing: approximately 2:45. Worldwide. Budget not listed. Posted 3 days ago, 7 connects required. My background for this job: I have 18 years of piano experience, 6 years of improvisation experience, perfect pitch, classically trained, church music director, have done wedding song arrangements before in 1 day, grew up reading sheet music, can play any song by ear instantly, and built a full chord chart app I use weekly. My goal: Generate a proposal that establishes immediate credibility as a serious pianist who has read and understood the full spec, can execute the emotional arc exactly as described, and can deliver a high-quality recording fast. Positioning constraints: Do NOT sound like a generic piano teacher. Do NOT over-explain credentials — show familiarity with the spec itself. Do reference the Canon-to-I2I transition specifically and the emotional arc the client described. Sound like a musician who has played this kind of arrangement before, not someone who is figuring it out. Be warm, specific, and confident. Do NOT use buzzwords. Bid angle: propose a fair rate for a custom arrangement + recording — this is skilled work. This request should be handled as a proposal package. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Strongest Proposal Angle 4. Short Proposal Draft (150-200 words, warm, musician-to-musician tone, references specific details from their spec) 5. Delivery structure (arrangement process + recording + revision) 6. Suggested bid (what is fair for a 2:45 custom wedding piano recording with this spec level) 7. Risk Check 8. Final Proposal Package paste-ready for Upwork

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of Classically trained pianist with 18 years experience, perfect pitch, wedding arrangement specialist and church music director. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

## Generated Response

## Accepted Package Response

### 1. Package Confirmation
This request should be handled as proposal package: Turn a job posting into a proposal, prototype concept, MVP spec, and skills map. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition.

### 2. Pinned Package Blocks
## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I am applying to an Upwork job called "Pianist needed for custom wedding song." Job summary: Client wants a custom piano arrangement and recording for their wedding walk. Canon in D transitioning into I2I from The Goofy Movie. Full measure-by-measure spec provided: 68 measures, D major throughout, specific tempos (72 to 84-88 BPM), dynamics marked pp to full piano, emotional arc from traditional Baroque to Disney reveal. Timing: approximately 2:45. Worldwide. Budget not listed. Posted 3 days ago, 7 connects required. My background for this job: I have 18 years of piano experience, 6 years of improvisation experience, perfect pitch, classically trained, church music director, have done wedding song arrangements before in 1 day, grew up reading sheet music, can play any song by ear instantly, and built a full chord chart app I use weekly. My goal: Generate a proposal that establishes immediate credibility as a serious pianist who has read and understood the full spec, can execute the emotional arc exactly as described, and can deliver a high-quality recording fast. Positioning constraints: Do NOT sound like a generic piano teacher. Do NOT over-explain credentials — show familiarity with the spec itself. Do reference the Canon-to-I2I transition specifically and the emotional arc the client described. Sound like a musician who has played this kind of arrangement before, not someone who is figuring it out. Be warm, specific, and confident. Do NOT use buzzwords. Bid angle: propose a fair rate for a custom arrangement + recording — this is skilled work. This request should be handled as a proposal package. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Strongest Proposal Angle 4. Short Proposal Draft (150-200 words, warm, musician-to-musician tone, references specific details from their spec) 5. Delivery structure (arrangement process + recording + revision) 6. Suggested bid (what is fair for a 2:45 custom wedding piano recording with this spec level) 7. Risk Check 8. Final Proposal Package paste-ready for Upwork

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of Classically trained pianist with 18 years experience, perfect pitch, wedding arrangement specialist and church music director. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

### 3. Next Package Action
Identify the first screen, primary action, and what must be visible without explanation.

## Next Action

Identify the first screen, primary action, and what must be visible without explanation.

## Next Prompt

I finished the next action for this proposal package prompt refinement pass.

Original goal:
I am applying to an Upwork job called "Pianist needed for custom wedding song." Job summary: Client wants a custom piano arrangement and recording for their wedding walk. Canon in D transitioning into I2I from The Goofy Movie. Full measure-by-measure spec provided: 68 measures, D major throughout, specific tempos (72 to 84-88 BPM), dynamics marked pp to full piano, emotional arc from traditional Baroque to Disney reveal. Timing: approximately 2:45. Worldwide. Budget not listed. Posted 3 days ago, 7 connects required. My background for this job: I have 18 years of piano experience, 6 years of improvisation experience, perfect pitch, classically trained, church music director, have done wedding song arrangements before in 1 day, grew up reading sheet music, can play any song by ear instantly, and built a full chord chart app I use weekly. My goal: Generate a proposal that establishes immediate credibility as a serious pianist who has read and understood the full spec, can execute the emotional arc exactly as described, and can deliver a high-quality recording fast. Positioning constraints: Do NOT sound like a generic piano teacher. Do NOT over-explain credentials — show familiarity with the spec itself. Do reference the Canon-to-I2I transition specifically and the emotional arc the client described. Sound like a musician who has played this kind of arrangement before, not someone who is figuring it out. Be warm, specific, and confident. Do NOT use buzzwords. Bid angle: propose a fair rate for a custom arrangement + recording — this is skilled work. This request should be handled as a proposal package. Output should include: 1. Posting Summary 2. Client Intent Breakdown 3. Strongest Proposal Angle 4. Short Proposal Draft (150-200 words, warm, musician-to-musician tone, references specific details from their spec) 5. Delivery structure (arrangement process + recording + revision) 6. Suggested bid (what is fair for a 2:45 custom wedding piano recording with this spec level) 7. Risk Check 8. Final Proposal Package paste-ready for Upwork

Completed next action: Identify the first screen, primary action, and what must be visible without explanation.
Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution.
Action after this: Reclassify the prompt and generate the next concrete artifact.

Other viable next-action options:
1. Identify the first screen, primary action, and what must be visible without explanation.
2. Clarify what decision the answer should support.
3. Choose the output shape: prompt, plan, table, recommendation, or checklist.
4. Name the constraint that makes this situation unusual.

Known completed clarification count: 0

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780418775552

Accepted: 2026-06-02T16:46:15.568Z
Conversation: 0000
Family: writing_content
Role: Senior Python automation engineer, local lead-gen systems builder, and technical sales strategist for small-business workflow automation in Louisville, KY

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Complete Prompt Structure
Purpose: Shapes a paste-ready prompt with role, goal, constraints, output contract, and next action.
Input example: I want an AI to help me build a portfolio automation project.
Output example: You are a senior product engineer. Clarify the goal, define the MVP, return a step-by-step plan, include acceptance criteria, and give the next prompt.
Why this matters: Prompt mode needs a structural example so the generated prompt reduces back-and-forth.
Tags: prompt, structure, execution

### 2. Cost-Aware Prompting
Purpose: Shows how to include token, quota, and free-first constraints without overcomplicating the prompt.
Input example: I need the best answer but want to avoid wasting API quota.
Output example: Use concise reasoning first, ask only blocking questions, prefer local/free options when possible, and separate optional expansions.
Why this matters: This matches the product's goal of better AI results with fewer tokens.
Tags: cost, quota, efficiency

### 3. Next-Pass Loop
Purpose: Demonstrates how the AI should return the next action and a prompt for the next pass.
Input example: After I finish the next action, I need to continue the workflow.
Output example: Return the next action, why it is next, the action after that, and the exact next prompt to give back.
Why this matters: This keeps the workflow continuous without forcing the user to invent follow-up prompts.
Tags: next-pass, workflow, continuity

You are a Senior Python automation engineer, local lead-gen systems builder, and technical sales strategist for small-business workflow automation in Louisville, KY.
The prompt family is writing_content (Draft, edit, and tune tone).

Goal:
Build a complete Python-based Louisville, KY small business lead generation and automation opportunity scoring system that I can use to cold call local businesses and offer them a free audit plus a build-before-you-buy automation prototype. The system must: 1. Scrape public Louisville business directories, local chambers, and alliance member lists to collect business name, phone, address, category, website, and source URL. 2. Crawl each website and detect observable signals like missing booking flows, no online ordering, no contact forms, no chat, basic or missing websites, and inconsistent business info. 3. Score each lead with an automation_opportunity_score based only on evidence — no unsupported claims. Use language like 'manual intake likely' or 'self-service workflow not detected.' 4. Export a ranked CSV of leads with score, evidence, pain points, recommended automation angle, and confidence level. 5. Generate a per-business markdown audit report template I can print or send. 6. Include a cold call script, 30-second pitch, voicemail, SMS, and email follow-up. 7. Include an offer structure: I show a small working automation prototype tailored to their business before they pay. They decide after seeing it. 8. Include compliance guardrails: robots.txt, rate limits, no defamatory claims, manual review before outreach. 9. Output a Codex-ready build prompt with modular project structure: scrapers/, parsers/, scoring/, reports/, outreach/, config/, main.py. Target business categories: salons, barbers, auto repair, restaurants, laundromats, locksmiths, cleaning services, tax offices, contractors.

Known clarification answers:
- Writing audience: Technical reader

Mission:
Finish this goal in the shortest practical time without skipping the decisions or verification needed for a useful result. Be thorough enough that the next AI or agent can execute without needing the user to restate the goal.

Operating mode:
- Automatically handle the meta-prompting pattern: I want a prompt that I can paste into an AI assistant to get the intended result.
- Prefer a longer, complete prompt over a short generic prompt.
- Convert vague intent into a concrete execution path.
- Keep the user focused on the end goal, not prompt mechanics.
- Include cost, token, and quota controls when relevant.

Defined steps to complete the goal:
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

Few-shot examples shaping this output:
1. Complete Prompt Structure
   Input example: I want an AI to help me build a portfolio automation project.
   Output example: You are a senior product engineer. Clarify the goal, define the MVP, return a step-by-step plan, include acceptance criteria, and give the next prompt.
   Why it matters: Prompt mode needs a structural example so the generated prompt reduces back-and-forth.
2. Cost-Aware Prompting
   Input example: I need the best answer but want to avoid wasting API quota.
   Output example: Use concise reasoning first, ask only blocking questions, prefer local/free options when possible, and separate optional expansions.
   Why it matters: This matches the product's goal of better AI results with fewer tokens.
3. Next-Pass Loop
   Input example: After I finish the next action, I need to continue the workflow.
   Output example: Return the next action, why it is next, the action after that, and the exact next prompt to give back.
   Why it matters: This keeps the workflow continuous without forcing the user to invent follow-up prompts.

Return:
1. Refined understanding of the goal and success criteria.
2. Fastest practical execution plan with numbered steps.
3. Any blocking clarification questions, only if they would materially change the result.
4. The first concrete artifact, answer, plan, fix, draft, or spec needed to move the project forward.
5. Verification steps or acceptance criteria.
6. Scenario follow-up prompts for different situations.
7. Expansion prompts for sections that may need deeper explanation.

Scenario follow-up prompts to include:
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

Expansion prompts to include in a separate section:
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

Next action protocol:
1. Return 3 to 5 context-specific next-action options that could reasonably come next.
2. Recommended next action: Name the repeated manual task, trigger, input, output, and failure case.
3. Why this action is next: This is the highest-leverage next move for a writing content request because it narrows the output contract before execution.
4. Action after that: Draft the first version and produce targeted revisions.
5. Return a next-pass canonical prompt the user can give back after finishing the recommended action.

Next-action options to consider:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Choose the reader and tone.

Constraints:
- Stay practical, direct, and focused on the end goal.
- Surface overlooked decisions that could change the outcome.
- Include cost, token, and quota considerations when relevant.
- If agents, skills, repo instructions, or setup should change, say so explicitly.
- If the user needs more explanation, do not bury it in the main answer. Put expandable explanations in a separate section.
- Provide copy-ready prompts for follow-up scenarios.
- Do not execute until the canonical prompt is accepted.

## Generated Response

## Accepted Prompt Response

### 1. Goal Confirmation
This request should be handled as writing content: Draft, edit, and tune tone. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. The current draft now includes 1 clarification answer.

### 2. Fastest Execution Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

### 3. Expected Output Contract
## Expected AI Response Blueprint

### 1. Direct Goal Summary
Restate the goal in one or two sentences: Build a complete Python-based Louisville, KY small business lead generation and automation opportunity scoring system that I can use to cold call local businesses and offer them a free audit plus a build-before-you-buy automation prototype. The system must: 1. Scrape public Louisville business directories, local chambers, and alliance member lists to collect business name, phone, address, category, website, and source URL. 2. Crawl each website and detect observable signals like missing booking flows, no online ordering, no contact forms, no chat, basic or missing websites, and inconsistent business info. 3. Score each lead with an automation_opportunity_score based only on evidence — no unsupported claims. Use language like 'manual intake likely' or 'self-service workflow not detected.' 4. Export a ranked CSV of leads with score, evidence, pain points, recommended automation angle, and confidence level. 5. Generate a per-business markdown audit report template I can print or send. 6. Include a cold call script, 30-second pitch, voicemail, SMS, and email follow-up. 7. Include an offer structure: I show a small working automation prototype tailored to their business before they pay. They decide after seeing it. 8. Include compliance guardrails: robots.txt, rate limits, no defamatory claims, manual review before outreach. 9. Output a Codex-ready build prompt with modular project structure: scrapers/, parsers/, scoring/, reports/, outreach/, config/, main.py. Target business categories: salons, barbers, auto repair, restaurants, laundromats, locksmiths, cleaning services, tax offices, contractors.

### 2. Fastest Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

### 3. Main Output
Produce the writing content artifact, answer, plan, fix, draft, or spec that moves the work forward immediately.

### 4. Verification
List exactly how the user or agent can tell whether the answer worked.

### 5. Follow-up Prompt Menu
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 6. Expand If Needed
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

### 4. Scenario Prompt Menu
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 5. Expand If Needed
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this writing content prompt refinement pass.

Original goal:
Build a complete Python-based Louisville, KY small business lead generation and automation opportunity scoring system that I can use to cold call local businesses and offer them a free audit plus a build-before-you-buy automation prototype. The system must: 1. Scrape public Louisville business directories, local chambers, and alliance member lists to collect business name, phone, address, category, website, and source URL. 2. Crawl each website and detect observable signals like missing booking flows, no online ordering, no contact forms, no chat, basic or missing websites, and inconsistent business info. 3. Score each lead with an automation_opportunity_score based only on evidence — no unsupported claims. Use language like 'manual intake likely' or 'self-service workflow not detected.' 4. Export a ranked CSV of leads with score, evidence, pain points, recommended automation angle, and confidence level. 5. Generate a per-business markdown audit report template I can print or send. 6. Include a cold call script, 30-second pitch, voicemail, SMS, and email follow-up. 7. Include an offer structure: I show a small working automation prototype tailored to their business before they pay. They decide after seeing it. 8. Include compliance guardrails: robots.txt, rate limits, no defamatory claims, manual review before outreach. 9. Output a Codex-ready build prompt with modular project structure: scrapers/, parsers/, scoring/, reports/, outreach/, config/, main.py. Target business categories: salons, barbers, auto repair, restaurants, laundromats, locksmiths, cleaning services, tax offices, contractors.

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a writing content request because it narrows the output contract before execution.
Action after this: Draft the first version and produce targeted revisions.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Choose the reader and tone.

Known completed clarification count: 1

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780424685987

Accepted: 2026-06-02T18:24:46.030Z
Conversation: 0000
Family: writing_content
Role: Senior Python automation engineer, Louisville KY local lead-gen systems builder, and technical sales strategist for small-business workflow automation

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Complete Prompt Structure
Purpose: Shapes a paste-ready prompt with role, goal, constraints, output contract, and next action.
Input example: I want an AI to help me build a portfolio automation project.
Output example: You are a senior product engineer. Clarify the goal, define the MVP, return a step-by-step plan, include acceptance criteria, and give the next prompt.
Why this matters: Prompt mode needs a structural example so the generated prompt reduces back-and-forth.
Tags: prompt, structure, execution

### 2. Cost-Aware Prompting
Purpose: Shows how to include token, quota, and free-first constraints without overcomplicating the prompt.
Input example: I need the best answer but want to avoid wasting API quota.
Output example: Use concise reasoning first, ask only blocking questions, prefer local/free options when possible, and separate optional expansions.
Why this matters: This matches the product's goal of better AI results with fewer tokens.
Tags: cost, quota, efficiency

### 3. Next-Pass Loop
Purpose: Demonstrates how the AI should return the next action and a prompt for the next pass.
Input example: After I finish the next action, I need to continue the workflow.
Output example: Return the next action, why it is next, the action after that, and the exact next prompt to give back.
Why this matters: This keeps the workflow continuous without forcing the user to invent follow-up prompts.
Tags: next-pass, workflow, continuity

You are a Senior Python automation engineer, Louisville KY local lead-gen systems builder, and technical sales strategist for small-business workflow automation.
The prompt family is writing_content (Draft, edit, and tune tone).

Goal:
Build a complete Python-based Louisville, KY small business lead generation and automation opportunity scoring system I can use to cold call local businesses and offer a free audit plus a build-before-you-buy automation prototype. The system must: 1. Scrape public Louisville business directories, local chambers, and alliance member lists to collect: business name, phone, address, category, website, and source URL. 2. Crawl each business website and detect observable signals: missing booking flows, no online ordering, no contact forms, no chat widget, basic or missing website, inconsistent business info across sources. 3. Score each lead with an automation_opportunity_score based only on observable evidence. Use honest language like 'manual intake likely' or 'self-service workflow not detected.' Never make unsupported claims. 4. Export a ranked CSV: score, evidence, pain points, recommended automation angle, confidence level. 5. Generate a per-business markdown audit report I can print or email before the call. 6. Include full outreach assets: cold call opener, discovery questions, 30-second pitch, objection handling, voicemail script, SMS script, email script. 7. Include a build-before-you-buy offer structure where I show a small working automation prototype tailored to the business for free, and they decide to pay only after seeing it. 8. Include compliance guardrails: respect robots.txt and rate limits, no defamatory or misleading claims, manual review step before any outreach, only public business contact data. 9. Output a Codex-ready build prompt that generates a modular Python project: scrapers/, parsers/, scoring/, reports/, outreach/, config/, main.py — with example output files. Target categories: salons, barbers, auto repair shops, restaurants, laundromats, locksmiths, cleaning services, tax/accounting offices, contractors, HVAC. Location: Louisville, Kentucky. Audience for the Codex prompt: technical Python developer (me). Final deliverable: paste-ready Codex prompt plus all sales and audit assets.

Mission:
Finish this goal in the shortest practical time without skipping the decisions or verification needed for a useful result. Be thorough enough that the next AI or agent can execute without needing the user to restate the goal.

Operating mode:
- Automatically handle the meta-prompting pattern: I want a prompt that I can paste into an AI assistant to get the intended result.
- Prefer a longer, complete prompt over a short generic prompt.
- Convert vague intent into a concrete execution path.
- Keep the user focused on the end goal, not prompt mechanics.
- Include cost, token, and quota controls when relevant.

Defined steps to complete the goal:
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

Few-shot examples shaping this output:
1. Complete Prompt Structure
   Input example: I want an AI to help me build a portfolio automation project.
   Output example: You are a senior product engineer. Clarify the goal, define the MVP, return a step-by-step plan, include acceptance criteria, and give the next prompt.
   Why it matters: Prompt mode needs a structural example so the generated prompt reduces back-and-forth.
2. Cost-Aware Prompting
   Input example: I need the best answer but want to avoid wasting API quota.
   Output example: Use concise reasoning first, ask only blocking questions, prefer local/free options when possible, and separate optional expansions.
   Why it matters: This matches the product's goal of better AI results with fewer tokens.
3. Next-Pass Loop
   Input example: After I finish the next action, I need to continue the workflow.
   Output example: Return the next action, why it is next, the action after that, and the exact next prompt to give back.
   Why it matters: This keeps the workflow continuous without forcing the user to invent follow-up prompts.

Return:
1. Refined understanding of the goal and success criteria.
2. Fastest practical execution plan with numbered steps.
3. Any blocking clarification questions, only if they would materially change the result.
4. The first concrete artifact, answer, plan, fix, draft, or spec needed to move the project forward.
5. Verification steps or acceptance criteria.
6. Scenario follow-up prompts for different situations.
7. Expansion prompts for sections that may need deeper explanation.

Scenario follow-up prompts to include:
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

Expansion prompts to include in a separate section:
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

Next action protocol:
1. Return 3 to 5 context-specific next-action options that could reasonably come next.
2. Recommended next action: Name the repeated manual task, trigger, input, output, and failure case.
3. Why this action is next: This is the highest-leverage next move for a writing content request because it narrows the output contract before execution.
4. Action after that: Draft the first version and produce targeted revisions.
5. Return a next-pass canonical prompt the user can give back after finishing the recommended action.

Next-action options to consider:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Choose the reader and tone.

Constraints:
- Stay practical, direct, and focused on the end goal.
- Surface overlooked decisions that could change the outcome.
- Include cost, token, and quota considerations when relevant.
- If agents, skills, repo instructions, or setup should change, say so explicitly.
- If the user needs more explanation, do not bury it in the main answer. Put expandable explanations in a separate section.
- Provide copy-ready prompts for follow-up scenarios.
- Do not execute until the canonical prompt is accepted.

## Generated Response

## Accepted Prompt Response

### 1. Goal Confirmation
This request should be handled as writing content: Draft, edit, and tune tone. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition.

### 2. Fastest Execution Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

### 3. Expected Output Contract
## Expected AI Response Blueprint

### 1. Direct Goal Summary
Restate the goal in one or two sentences: Build a complete Python-based Louisville, KY small business lead generation and automation opportunity scoring system I can use to cold call local businesses and offer a free audit plus a build-before-you-buy automation prototype. The system must: 1. Scrape public Louisville business directories, local chambers, and alliance member lists to collect: business name, phone, address, category, website, and source URL. 2. Crawl each business website and detect observable signals: missing booking flows, no online ordering, no contact forms, no chat widget, basic or missing website, inconsistent business info across sources. 3. Score each lead with an automation_opportunity_score based only on observable evidence. Use honest language like 'manual intake likely' or 'self-service workflow not detected.' Never make unsupported claims. 4. Export a ranked CSV: score, evidence, pain points, recommended automation angle, confidence level. 5. Generate a per-business markdown audit report I can print or email before the call. 6. Include full outreach assets: cold call opener, discovery questions, 30-second pitch, objection handling, voicemail script, SMS script, email script. 7. Include a build-before-you-buy offer structure where I show a small working automation prototype tailored to the business for free, and they decide to pay only after seeing it. 8. Include compliance guardrails: respect robots.txt and rate limits, no defamatory or misleading claims, manual review step before any outreach, only public business contact data. 9. Output a Codex-ready build prompt that generates a modular Python project: scrapers/, parsers/, scoring/, reports/, outreach/, config/, main.py — with example output files. Target categories: salons, barbers, auto repair shops, restaurants, laundromats, locksmiths, cleaning services, tax/accounting offices, contractors, HVAC. Location: Louisville, Kentucky. Audience for the Codex prompt: technical Python developer (me). Final deliverable: paste-ready Codex prompt plus all sales and audit assets.

### 2. Fastest Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

### 3. Main Output
Produce the writing content artifact, answer, plan, fix, draft, or spec that moves the work forward immediately.

### 4. Verification
List exactly how the user or agent can tell whether the answer worked.

### 5. Follow-up Prompt Menu
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 6. Expand If Needed
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

### 4. Scenario Prompt Menu
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 5. Expand If Needed
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this writing content prompt refinement pass.

Original goal:
Build a complete Python-based Louisville, KY small business lead generation and automation opportunity scoring system I can use to cold call local businesses and offer a free audit plus a build-before-you-buy automation prototype. The system must: 1. Scrape public Louisville business directories, local chambers, and alliance member lists to collect: business name, phone, address, category, website, and source URL. 2. Crawl each business website and detect observable signals: missing booking flows, no online ordering, no contact forms, no chat widget, basic or missing website, inconsistent business info across sources. 3. Score each lead with an automation_opportunity_score based only on observable evidence. Use honest language like 'manual intake likely' or 'self-service workflow not detected.' Never make unsupported claims. 4. Export a ranked CSV: score, evidence, pain points, recommended automation angle, confidence level. 5. Generate a per-business markdown audit report I can print or email before the call. 6. Include full outreach assets: cold call opener, discovery questions, 30-second pitch, objection handling, voicemail script, SMS script, email script. 7. Include a build-before-you-buy offer structure where I show a small working automation prototype tailored to the business for free, and they decide to pay only after seeing it. 8. Include compliance guardrails: respect robots.txt and rate limits, no defamatory or misleading claims, manual review step before any outreach, only public business contact data. 9. Output a Codex-ready build prompt that generates a modular Python project: scrapers/, parsers/, scoring/, reports/, outreach/, config/, main.py — with example output files. Target categories: salons, barbers, auto repair shops, restaurants, laundromats, locksmiths, cleaning services, tax/accounting offices, contractors, HVAC. Location: Louisville, Kentucky. Audience for the Codex prompt: technical Python developer (me). Final deliverable: paste-ready Codex prompt plus all sales and audit assets.

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a writing content request because it narrows the output contract before execution.
Action after this: Draft the first version and produce targeted revisions.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Choose the reader and tone.

Known completed clarification count: 0

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780427777066

Accepted: 2026-06-02T19:16:17.114Z
Conversation: 0000
Family: job_posting_to_proposal_package
Role: Fiverr gig copywriter and conversion specialist who writes outcome-focused, buyer-tested gig listings for technical freelancers in music, automation, OCR, and data services

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Outcome-First Proposal
Purpose: Shapes the proposal around the client's result instead of generic qualifications.
Input example: Client needs an automation dashboard for recurring reporting.
Output example: Open with the reporting bottleneck, propose a small dashboard prototype, map experience to requirements, then ask for one scope-confirming call.
Why this matters: Proposal mode needs persuasion examples so the output sounds useful and specific, not like a cover letter.
Tags: proposal, client, outcome

### 2. Prototype Bridge
Purpose: Shows how to convert a job post into a credibility-building prototype idea.
Input example: Posting asks for an AI workflow tool but does not define the UI.
Output example: Prototype a one-screen workflow inbox with intake, classification, status, and export so the client can see the proposed solution quickly.
Why this matters: A prototype example helps the package produce something concrete the user can reference in the proposal.
Tags: prototype, portfolio, proof

### 3. Qualifications Map
Purpose: Keeps the skills section honest and mapped to the posting.
Input example: Requirement: API integrations, automation, and clean dashboard UI.
Output example: Map each requirement to proof, confidence, missing context, and how to address gaps without overstating experience.
Why this matters: This prevents the generated package from making unsupported claims.
Tags: skills, trust, requirements

## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I need complete Fiverr gig listings written for me — 4 separate gigs I can publish immediately on Fiverr to start selling freelance services. The 4 services are: GIG 1: Custom chord charts, piano arrangements, and play-by-ear song transcription GIG 2: Python automation workflows for small business repetitive tasks GIG 3: OCR and PDF document text extraction, cleanup, and structuring GIG 4: Web scraping delivering clean CSV, Excel, or JSON datasets For each gig write: - Gig title (max 80 characters, one specific buyer outcome, high-search keywords) - Full gig description (300-500 words with hook, what you get, who it is for, why choose me, call to action) - Three tier packages: Basic / Standard / Premium (name, description, price, delivery days, revisions, inclusions) - Five Fiverr search tags - Three-question FAQ with answers - Thumbnail image brief for a designer My background and differentiators: - Music: piano, improvisation, ear training, chord recognition, chart writing, teach play-by-ear. Targets worship teams, singers, churches, self-taught musicians. - Automation: Python, reusable workflow scripts, AI tools, lead handling, file processing. Targets small business owners with repetitive admin work. - OCR: trained OCR models, document pipelines, edge-case handling, fixes what generic converters miss. Targets legal, medical, research, businesses digitizing paper. - Scraping: structured data delivery with QA and formatting. Targets marketers, ecommerce, researchers. - I deliver clean, validated, usable output, not raw dumps. Messy inputs are my specialty. - Louisville KY, self-taught, real Upwork/freelance project history. Tone: professional but approachable, not corporate. Format: All 4 gigs in order with clear headers, paste-ready for Fiverr gig editor.

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of Fiverr gig copywriter and conversion specialist who writes outcome-focused, buyer-tested gig listings for technical freelancers in music, automation, OCR, and data services. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

## Generated Response

## Accepted Package Response

### 1. Package Confirmation
This request should be handled as proposal package: Turn a job posting into a proposal, prototype concept, MVP spec, and skills map. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition.

### 2. Pinned Package Blocks
## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
I need complete Fiverr gig listings written for me — 4 separate gigs I can publish immediately on Fiverr to start selling freelance services. The 4 services are: GIG 1: Custom chord charts, piano arrangements, and play-by-ear song transcription GIG 2: Python automation workflows for small business repetitive tasks GIG 3: OCR and PDF document text extraction, cleanup, and structuring GIG 4: Web scraping delivering clean CSV, Excel, or JSON datasets For each gig write: - Gig title (max 80 characters, one specific buyer outcome, high-search keywords) - Full gig description (300-500 words with hook, what you get, who it is for, why choose me, call to action) - Three tier packages: Basic / Standard / Premium (name, description, price, delivery days, revisions, inclusions) - Five Fiverr search tags - Three-question FAQ with answers - Thumbnail image brief for a designer My background and differentiators: - Music: piano, improvisation, ear training, chord recognition, chart writing, teach play-by-ear. Targets worship teams, singers, churches, self-taught musicians. - Automation: Python, reusable workflow scripts, AI tools, lead handling, file processing. Targets small business owners with repetitive admin work. - OCR: trained OCR models, document pipelines, edge-case handling, fixes what generic converters miss. Targets legal, medical, research, businesses digitizing paper. - Scraping: structured data delivery with QA and formatting. Targets marketers, ecommerce, researchers. - I deliver clean, validated, usable output, not raw dumps. Messy inputs are my specialty. - Louisville KY, self-taught, real Upwork/freelance project history. Tone: professional but approachable, not corporate. Format: All 4 gigs in order with clear headers, paste-ready for Fiverr gig editor.

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of Fiverr gig copywriter and conversion specialist who writes outcome-focused, buyer-tested gig listings for technical freelancers in music, automation, OCR, and data services. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

### 3. Next Package Action
Name the repeated manual task, trigger, input, output, and failure case.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this proposal package prompt refinement pass.

Original goal:
I need complete Fiverr gig listings written for me — 4 separate gigs I can publish immediately on Fiverr to start selling freelance services. The 4 services are: GIG 1: Custom chord charts, piano arrangements, and play-by-ear song transcription GIG 2: Python automation workflows for small business repetitive tasks GIG 3: OCR and PDF document text extraction, cleanup, and structuring GIG 4: Web scraping delivering clean CSV, Excel, or JSON datasets For each gig write: - Gig title (max 80 characters, one specific buyer outcome, high-search keywords) - Full gig description (300-500 words with hook, what you get, who it is for, why choose me, call to action) - Three tier packages: Basic / Standard / Premium (name, description, price, delivery days, revisions, inclusions) - Five Fiverr search tags - Three-question FAQ with answers - Thumbnail image brief for a designer My background and differentiators: - Music: piano, improvisation, ear training, chord recognition, chart writing, teach play-by-ear. Targets worship teams, singers, churches, self-taught musicians. - Automation: Python, reusable workflow scripts, AI tools, lead handling, file processing. Targets small business owners with repetitive admin work. - OCR: trained OCR models, document pipelines, edge-case handling, fixes what generic converters miss. Targets legal, medical, research, businesses digitizing paper. - Scraping: structured data delivery with QA and formatting. Targets marketers, ecommerce, researchers. - I deliver clean, validated, usable output, not raw dumps. Messy inputs are my specialty. - Louisville KY, self-taught, real Upwork/freelance project history. Tone: professional but approachable, not corporate. Format: All 4 gigs in order with clear headers, paste-ready for Fiverr gig editor.

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution.
Action after this: Reclassify the prompt and generate the next concrete artifact.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Clarify what decision the answer should support.

Known completed clarification count: 0

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780428168673

Accepted: 2026-06-02T19:22:48.703Z
Conversation: 0000
Family: job_posting_to_proposal_package
Role: Fiverr gig copywriter and conversion specialist who writes outcome-focused, buyer-tested gig listings for technical freelancers in music, automation, OCR, and data services

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Outcome-First Proposal
Purpose: Shapes the proposal around the client's result instead of generic qualifications.
Input example: Client needs an automation dashboard for recurring reporting.
Output example: Open with the reporting bottleneck, propose a small dashboard prototype, map experience to requirements, then ask for one scope-confirming call.
Why this matters: Proposal mode needs persuasion examples so the output sounds useful and specific, not like a cover letter.
Tags: proposal, client, outcome

### 2. Prototype Bridge
Purpose: Shows how to convert a job post into a credibility-building prototype idea.
Input example: Posting asks for an AI workflow tool but does not define the UI.
Output example: Prototype a one-screen workflow inbox with intake, classification, status, and export so the client can see the proposed solution quickly.
Why this matters: A prototype example helps the package produce something concrete the user can reference in the proposal.
Tags: prototype, portfolio, proof

### 3. Qualifications Map
Purpose: Keeps the skills section honest and mapped to the posting.
Input example: Requirement: API integrations, automation, and clean dashboard UI.
Output example: Map each requirement to proof, confidence, missing context, and how to address gaps without overstating experience.
Why this matters: This prevents the generated package from making unsupported claims.
Tags: skills, trust, requirements

## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
You are a Fiverr gig copywriter and conversion specialist who writes outcome-focused, buyer-tested gig listings for technical freelancers in music, automation, OCR, and data services. I need complete Fiverr gig listings written for me — 4 separate gigs I can publish immediately on Fiverr to start selling freelance services. THE 4 GIGS: GIG 1: Custom chord charts, piano arrangements, and play-by-ear song transcription GIG 2: Python automation workflows for small business repetitive tasks GIG 3: OCR and PDF document text extraction, cleanup, and structuring GIG 4: Web scraping delivering clean CSV, Excel, or JSON datasets FOR EACH GIG WRITE: - Gig title (max 80 characters, one specific buyer outcome, high-search keywords) - Full gig description (300-500 words: hook, what you get, who it's for, why choose me, call to action) - Three-tier packages — Basic / Standard / Premium — with: package name, description, price, delivery days, revisions, and what's included - 5 Fiverr search tags - 3-question FAQ with answers - Thumbnail image brief (what the image should show for max click-through) POSITIONING RULES: - Each title must have ONE narrow outcome, not a list of services - Tone: professional but approachable, not corporate - Emphasize edge-case handling, cleanup, and usable output — not raw code/raw data - GIG 1 targets: worship teams, singers, self-taught musicians, churches, bands - GIG 2 targets: small business owners, solopreneurs with repetitive admin tasks - GIG 3 targets: legal/medical offices, researchers, businesses digitizing paper docs - GIG 4 targets: marketers, ecommerce sellers, researchers needing competitive data MY DIFFERENTIATORS: - I handle messy inputs, edge cases, and broken formatting that generic tools miss - I deliver clean, validated, immediately usable output — not raw dumps - Music: I combine theory, ear training, chord recognition, and musician coaching - Automation: I build reusable workflows, not one-off scripts - Louisville KY, self-taught Python dev, real Upwork/freelance history: OCR model training, AI tools, document processing pipelines PACKAGE PRICING GUIDANCE: - Basic: entry-level, single deliverable, 1-2 day turnaround, $15-$35 - Standard: full service + 1 revision, 3-5 days, $50-$100 - Premium: rush or expanded scope + 2 revisions, 1-3 days, $100-$200 PROPOSAL DRAFT INSTRUCTIONS: Open with the buyer's pain point, show the practical approach, mention a small prototype or sample you can provide, end with a clear next step CTA. MVP SCOPE (for automation and scraping gigs specifically): Target user, core workflow, delivery format, acceptance criteria, and what "done" looks like for the buyer. SKILLS MAP: For each gig, map the posting requirement to proof from my background and note confidence level and any gaps to address honestly. STEP-BY-STEP LAUNCH PLAN: List the 7-10 steps to publish all 4 gigs in order of priority, with checkpoints. OUTPUT FORMAT: Return all 4 gigs in order with clear section headers. Make every line paste-ready for Fiverr's gig editor. No filler. No generic advice. Just the actual gig copy.

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of Fiverr gig copywriter and conversion specialist who writes outcome-focused, buyer-tested gig listings for technical freelancers in music, automation, OCR, and data services. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

## Generated Response

## Accepted Package Response

### 1. Package Confirmation
This request should be handled as proposal package: Turn a job posting into a proposal, prototype concept, MVP spec, and skills map. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition.

### 2. Pinned Package Blocks
## Posting Summary
Summarize the posting as a client problem, not just a list of tasks.

Source intake:
You are a Fiverr gig copywriter and conversion specialist who writes outcome-focused, buyer-tested gig listings for technical freelancers in music, automation, OCR, and data services. I need complete Fiverr gig listings written for me — 4 separate gigs I can publish immediately on Fiverr to start selling freelance services. THE 4 GIGS: GIG 1: Custom chord charts, piano arrangements, and play-by-ear song transcription GIG 2: Python automation workflows for small business repetitive tasks GIG 3: OCR and PDF document text extraction, cleanup, and structuring GIG 4: Web scraping delivering clean CSV, Excel, or JSON datasets FOR EACH GIG WRITE: - Gig title (max 80 characters, one specific buyer outcome, high-search keywords) - Full gig description (300-500 words: hook, what you get, who it's for, why choose me, call to action) - Three-tier packages — Basic / Standard / Premium — with: package name, description, price, delivery days, revisions, and what's included - 5 Fiverr search tags - 3-question FAQ with answers - Thumbnail image brief (what the image should show for max click-through) POSITIONING RULES: - Each title must have ONE narrow outcome, not a list of services - Tone: professional but approachable, not corporate - Emphasize edge-case handling, cleanup, and usable output — not raw code/raw data - GIG 1 targets: worship teams, singers, self-taught musicians, churches, bands - GIG 2 targets: small business owners, solopreneurs with repetitive admin tasks - GIG 3 targets: legal/medical offices, researchers, businesses digitizing paper docs - GIG 4 targets: marketers, ecommerce sellers, researchers needing competitive data MY DIFFERENTIATORS: - I handle messy inputs, edge cases, and broken formatting that generic tools miss - I deliver clean, validated, immediately usable output — not raw dumps - Music: I combine theory, ear training, chord recognition, and musician coaching - Automation: I build reusable workflows, not one-off scripts - Louisville KY, self-taught Python dev, real Upwork/freelance history: OCR model training, AI tools, document processing pipelines PACKAGE PRICING GUIDANCE: - Basic: entry-level, single deliverable, 1-2 day turnaround, $15-$35 - Standard: full service + 1 revision, 3-5 days, $50-$100 - Premium: rush or expanded scope + 2 revisions, 1-3 days, $100-$200 PROPOSAL DRAFT INSTRUCTIONS: Open with the buyer's pain point, show the practical approach, mention a small prototype or sample you can provide, end with a clear next step CTA. MVP SCOPE (for automation and scraping gigs specifically): Target user, core workflow, delivery format, acceptance criteria, and what "done" looks like for the buyer. SKILLS MAP: For each gig, map the posting requirement to proof from my background and note confidence level and any gaps to address honestly. STEP-BY-STEP LAUNCH PLAN: List the 7-10 steps to publish all 4 gigs in order of priority, with checkpoints. OUTPUT FORMAT: Return all 4 gigs in order with clear section headers. Make every line paste-ready for Fiverr's gig editor. No filler. No generic advice. Just the actual gig copy.

## Requirements
Extract required deliverables, tools, constraints, timeline signals, proof points, and hidden expectations. Mark unknowns clearly.

## Proposal Draft
Draft a concise proposal from the perspective of Fiverr gig copywriter and conversion specialist who writes outcome-focused, buyer-tested gig listings for technical freelancers in music, automation, OCR, and data services. Open with the client's problem, show the practical approach, mention a relevant prototype concept, and end with a clear next step.

## Prototype Idea
Define a prototype that can be built quickly enough to prove credibility: core screen, interaction, data shape, and what the client would see.

## MVP Spec
Specify target user, core workflow, screens, data model, integrations, acceptance criteria, and demo path.

## Skills / Qualifications Map
Create a table-style map: requirement, matching skill/proof, confidence level, missing info, and how to address the gap honestly.

## Step-by-Step Plan
List the first 7 to 10 implementation steps, ordered by dependency, with verification checkpoints and client decision points.

## Follow-up Questions
Ask only questions that materially change scope, timeline, budget, access, or success criteria.

## Final Proposal Package
Combine the pinned blocks into a proposal package: proposal draft, prototype concept, MVP summary, skills proof, next step, and optional follow-up questions.

### 3. Next Package Action
Name the repeated manual task, trigger, input, output, and failure case.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this proposal package prompt refinement pass.

Original goal:
You are a Fiverr gig copywriter and conversion specialist who writes outcome-focused, buyer-tested gig listings for technical freelancers in music, automation, OCR, and data services. I need complete Fiverr gig listings written for me — 4 separate gigs I can publish immediately on Fiverr to start selling freelance services. THE 4 GIGS: GIG 1: Custom chord charts, piano arrangements, and play-by-ear song transcription GIG 2: Python automation workflows for small business repetitive tasks GIG 3: OCR and PDF document text extraction, cleanup, and structuring GIG 4: Web scraping delivering clean CSV, Excel, or JSON datasets FOR EACH GIG WRITE: - Gig title (max 80 characters, one specific buyer outcome, high-search keywords) - Full gig description (300-500 words: hook, what you get, who it's for, why choose me, call to action) - Three-tier packages — Basic / Standard / Premium — with: package name, description, price, delivery days, revisions, and what's included - 5 Fiverr search tags - 3-question FAQ with answers - Thumbnail image brief (what the image should show for max click-through) POSITIONING RULES: - Each title must have ONE narrow outcome, not a list of services - Tone: professional but approachable, not corporate - Emphasize edge-case handling, cleanup, and usable output — not raw code/raw data - GIG 1 targets: worship teams, singers, self-taught musicians, churches, bands - GIG 2 targets: small business owners, solopreneurs with repetitive admin tasks - GIG 3 targets: legal/medical offices, researchers, businesses digitizing paper docs - GIG 4 targets: marketers, ecommerce sellers, researchers needing competitive data MY DIFFERENTIATORS: - I handle messy inputs, edge cases, and broken formatting that generic tools miss - I deliver clean, validated, immediately usable output — not raw dumps - Music: I combine theory, ear training, chord recognition, and musician coaching - Automation: I build reusable workflows, not one-off scripts - Louisville KY, self-taught Python dev, real Upwork/freelance history: OCR model training, AI tools, document processing pipelines PACKAGE PRICING GUIDANCE: - Basic: entry-level, single deliverable, 1-2 day turnaround, $15-$35 - Standard: full service + 1 revision, 3-5 days, $50-$100 - Premium: rush or expanded scope + 2 revisions, 1-3 days, $100-$200 PROPOSAL DRAFT INSTRUCTIONS: Open with the buyer's pain point, show the practical approach, mention a small prototype or sample you can provide, end with a clear next step CTA. MVP SCOPE (for automation and scraping gigs specifically): Target user, core workflow, delivery format, acceptance criteria, and what "done" looks like for the buyer. SKILLS MAP: For each gig, map the posting requirement to proof from my background and note confidence level and any gaps to address honestly. STEP-BY-STEP LAUNCH PLAN: List the 7-10 steps to publish all 4 gigs in order of priority, with checkpoints. OUTPUT FORMAT: Return all 4 gigs in order with clear section headers. Make every line paste-ready for Fiverr's gig editor. No filler. No generic advice. Just the actual gig copy.

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a proposal package request because it narrows the output contract before execution.
Action after this: Reclassify the prompt and generate the next concrete artifact.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Capture the exact reproduction path and strongest error signal.

Known completed clarification count: 0

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780634920570

Accepted: 2026-06-05T04:48:40.603Z
Conversation: 0000
Family: writing_content
Role: Portfolio project strategist and senior full-stack engineer

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Complete Prompt Structure
Purpose: Shapes a paste-ready prompt with role, goal, constraints, output contract, and next action.
Input example: I want an AI to help me build a portfolio automation project.
Output example: You are a senior product engineer. Clarify the goal, define the MVP, return a step-by-step plan, include acceptance criteria, and give the next prompt.
Why this matters: Prompt mode needs a structural example so the generated prompt reduces back-and-forth.
Tags: prompt, structure, execution

### 2. Cost-Aware Prompting
Purpose: Shows how to include token, quota, and free-first constraints without overcomplicating the prompt.
Input example: I need the best answer but want to avoid wasting API quota.
Output example: Use concise reasoning first, ask only blocking questions, prefer local/free options when possible, and separate optional expansions.
Why this matters: This matches the product's goal of better AI results with fewer tokens.
Tags: cost, quota, efficiency

### 3. Next-Pass Loop
Purpose: Demonstrates how the AI should return the next action and a prompt for the next pass.
Input example: After I finish the next action, I need to continue the workflow.
Output example: Return the next action, why it is next, the action after that, and the exact next prompt to give back.
Why this matters: This keeps the workflow continuous without forcing the user to invent follow-up prompts.
Tags: next-pass, workflow, continuity

You are a Portfolio project strategist and senior full-stack engineer.
The prompt family is writing_content (Draft, edit, and tune tone).

Goal:
give me a better version of this reponse and make it a better suggestions if you think therre are any. that's what i want to ask the ai but i want it to be a better output this was its output just now: "Here’s a stronger Fiverr portfolio description you can paste and lightly trim to fit the 1,400-character limit. It highlights the technical difficulty, the social impact, and the fact that you built the pipeline from the ground up. Project description I built a custom OCR and document-processing pipeline for Sgaw Karen, an underrepresented language with limited digital tooling and legacy text sources that were not reliably Unicode-encoded. I created the workflow from scratch using Python, Roboflow, dataset generation, annotation, preprocessing, and automation to turn difficult source materials into structured, machine-readable language data. A core challenge was that some dictionary and document sources could not be cleanly copied, parsed, or translated through standard methods, so I generated my own training data and visual dataset instead of relying on existing corpora. I produced image-based syllable and character combinations, built preprocessing and extraction logic, annotated the data, and trained a custom model that reached 88.7% mAP in Roboflow. This project combined machine learning, OCR, document AI, and linguistics principles. I applied language structure, syllable behavior, and rule-based processing to improve recognition and downstream dictionary extraction, including extensive backend logic for structured parsing and definition building. Beyond the technical work, this project matters because it supports digital access for a language community that is often underserved online. I also serve as music director at a Karen church and help teach the language to younger members, so this work connects AI engineering with real community preservation and accessibility. Stronger project title Your current title is already solid, but these are stronger Fiverr-style options that sound more outcome-focused. The current form shows your title field and portfolio constraints, including the 1,400-character project description box. Sgaw Karen OCR System: Custom AI Model and Document Pipeline Karen Script OCR: Training a Custom Model From Scratch AI-Powered Sgaw Karen OCR and Dictionary Extraction Custom OCR for an Underrepresented Language Using Python and Roboflow Best proof media For Fiverr, the best proof is visual evidence of transformation, not just code screenshots. The page allows up to 5 files in image or video formats, with the first upload becoming the thumbnail. Before/after image: scanned Karen page next to OCR output or structured text/JSON. Roboflow screenshot: dataset classes, annotations, or training dashboard showing model performance. Short screen recording: PDF or image input going through your Python pipeline into extracted output. Dataset generation evidence: collage of generated syllable images or annotated training samples. Architecture graphic: simple workflow diagram, PDF/image → → preprocessing → → OCR model → → dictionary parsing → → output. Best 5 uploads Use these in this order so your thumbnail is instantly impressive. Fiverr recommends making the first attachment visually strong. A clean before/after comparison image of a Karen source page and extracted result. A Roboflow training screenshot with the 88.7% mAP result visible. A screenshot collage of labeled samples or generated syllable images. A short demo video of the pipeline running. A polished workflow diagram or app screenshot showing the final output interface. Shorter version If you want a tighter version for Fiverr’s box, use this: I developed a custom OCR and document-processing system for Sgaw Karen, an underrepresented language with limited digital support and legacy non-Unicode text sources. Using Python, Roboflow, dataset generation, annotation, preprocessing, and automation, I built the full workflow from scratch and trained a model that reached 88.7% mAP. I also applied linguistics-based rules to improve extraction and dictionary processing, helping make the language more accessible online through AI-powered automation. This project was especially meaningful because it supports a real Karen community I work with directly through my church and language teaching. Would you like me to compress this to fit Fiverr perfectly at around 1,250 to 1,350 characters?" how can i get a prompt that will improve it? make me one that is a better response that i get from having a better prompt you give me.

Known clarification answers:
- Writing audience: Potential customer
- Cost and quota posture: Ask before expensive steps

Mission:
Finish this goal in the shortest practical time without skipping the decisions or verification needed for a useful result. Be thorough enough that the next AI or agent can execute without needing the user to restate the goal.

Operating mode:
- Automatically handle the meta-prompting pattern: I want a prompt that I can paste into an AI assistant to get the intended result.
- Prefer a longer, complete prompt over a short generic prompt.
- Convert vague intent into a concrete execution path.
- Keep the user focused on the end goal, not prompt mechanics.
- Include cost, token, and quota controls when relevant.

Defined steps to complete the goal:
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

Few-shot examples shaping this output:
1. Complete Prompt Structure
   Input example: I want an AI to help me build a portfolio automation project.
   Output example: You are a senior product engineer. Clarify the goal, define the MVP, return a step-by-step plan, include acceptance criteria, and give the next prompt.
   Why it matters: Prompt mode needs a structural example so the generated prompt reduces back-and-forth.
2. Cost-Aware Prompting
   Input example: I need the best answer but want to avoid wasting API quota.
   Output example: Use concise reasoning first, ask only blocking questions, prefer local/free options when possible, and separate optional expansions.
   Why it matters: This matches the product's goal of better AI results with fewer tokens.
3. Next-Pass Loop
   Input example: After I finish the next action, I need to continue the workflow.
   Output example: Return the next action, why it is next, the action after that, and the exact next prompt to give back.
   Why it matters: This keeps the workflow continuous without forcing the user to invent follow-up prompts.

Return:
1. Refined understanding of the goal and success criteria.
2. Fastest practical execution plan with numbered steps.
3. Any blocking clarification questions, only if they would materially change the result.
4. The first concrete artifact, answer, plan, fix, draft, or spec needed to move the project forward.
5. Verification steps or acceptance criteria.
6. Scenario follow-up prompts for different situations.
7. Expansion prompts for sections that may need deeper explanation.

Scenario follow-up prompts to include:
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

Expansion prompts to include in a separate section:
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

Next action protocol:
1. Return 3 to 5 context-specific next-action options that could reasonably come next.
2. Recommended next action: Choose the portfolio story this project should prove to a reviewer.
3. Why this action is next: This is the highest-leverage next move for a writing content request because it narrows the output contract before execution.
4. Action after that: Draft the first version and produce targeted revisions.
5. Return a next-pass canonical prompt the user can give back after finishing the recommended action.

Next-action options to consider:
1. Choose the portfolio story this project should prove to a reviewer.
2. Define the demo moment that will make the project feel complete.
3. Name the repeated manual task, trigger, input, output, and failure case.
4. Map the automation as one before/after workflow with a measurable time saved.
5. Identify the first screen, primary action, and what must be visible without explanation.

Constraints:
- Stay practical, direct, and focused on the end goal.
- Surface overlooked decisions that could change the outcome.
- Include cost, token, and quota considerations when relevant.
- If agents, skills, repo instructions, or setup should change, say so explicitly.
- If the user needs more explanation, do not bury it in the main answer. Put expandable explanations in a separate section.
- Provide copy-ready prompts for follow-up scenarios.
- Do not execute until the canonical prompt is accepted.

## Generated Response

## Accepted Prompt Response

### 1. Goal Confirmation
This request should be handled as writing content: Draft, edit, and tune tone. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. The current draft now includes 2 clarification answers.

### 2. Fastest Execution Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

### 3. Expected Output Contract
## Expected AI Response Blueprint

### 1. Direct Goal Summary
Restate the goal in one or two sentences: give me a better version of this reponse and make it a better suggestions if you think therre are any. that's what i want to ask the ai but i want it to be a better output this was its output just now: "Here’s a stronger Fiverr portfolio description you can paste and lightly trim to fit the 1,400-character limit. It highlights the technical difficulty, the social impact, and the fact that you built the pipeline from the ground up. Project description I built a custom OCR and document-processing pipeline for Sgaw Karen, an underrepresented language with limited digital tooling and legacy text sources that were not reliably Unicode-encoded. I created the workflow from scratch using Python, Roboflow, dataset generation, annotation, preprocessing, and automation to turn difficult source materials into structured, machine-readable language data. A core challenge was that some dictionary and document sources could not be cleanly copied, parsed, or translated through standard methods, so I generated my own training data and visual dataset instead of relying on existing corpora. I produced image-based syllable and character combinations, built preprocessing and extraction logic, annotated the data, and trained a custom model that reached 88.7% mAP in Roboflow. This project combined machine learning, OCR, document AI, and linguistics principles. I applied language structure, syllable behavior, and rule-based processing to improve recognition and downstream dictionary extraction, including extensive backend logic for structured parsing and definition building. Beyond the technical work, this project matters because it supports digital access for a language community that is often underserved online. I also serve as music director at a Karen church and help teach the language to younger members, so this work connects AI engineering with real community preservation and accessibility. Stronger project title Your current title is already solid, but these are stronger Fiverr-style options that sound more outcome-focused. The current form shows your title field and portfolio constraints, including the 1,400-character project description box. Sgaw Karen OCR System: Custom AI Model and Document Pipeline Karen Script OCR: Training a Custom Model From Scratch AI-Powered Sgaw Karen OCR and Dictionary Extraction Custom OCR for an Underrepresented Language Using Python and Roboflow Best proof media For Fiverr, the best proof is visual evidence of transformation, not just code screenshots. The page allows up to 5 files in image or video formats, with the first upload becoming the thumbnail. Before/after image: scanned Karen page next to OCR output or structured text/JSON. Roboflow screenshot: dataset classes, annotations, or training dashboard showing model performance. Short screen recording: PDF or image input going through your Python pipeline into extracted output. Dataset generation evidence: collage of generated syllable images or annotated training samples. Architecture graphic: simple workflow diagram, PDF/image → → preprocessing → → OCR model → → dictionary parsing → → output. Best 5 uploads Use these in this order so your thumbnail is instantly impressive. Fiverr recommends making the first attachment visually strong. A clean before/after comparison image of a Karen source page and extracted result. A Roboflow training screenshot with the 88.7% mAP result visible. A screenshot collage of labeled samples or generated syllable images. A short demo video of the pipeline running. A polished workflow diagram or app screenshot showing the final output interface. Shorter version If you want a tighter version for Fiverr’s box, use this: I developed a custom OCR and document-processing system for Sgaw Karen, an underrepresented language with limited digital support and legacy non-Unicode text sources. Using Python, Roboflow, dataset generation, annotation, preprocessing, and automation, I built the full workflow from scratch and trained a model that reached 88.7% mAP. I also applied linguistics-based rules to improve extraction and dictionary processing, helping make the language more accessible online through AI-powered automation. This project was especially meaningful because it supports a real Karen community I work with directly through my church and language teaching. Would you like me to compress this to fit Fiverr perfectly at around 1,250 to 1,350 characters?" how can i get a prompt that will improve it? make me one that is a better response that i get from having a better prompt you give me.

### 2. Fastest Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

### 3. Main Output
Produce the writing content artifact, answer, plan, fix, draft, or spec that moves the work forward immediately.

### 4. Verification
List exactly how the user or agent can tell whether the answer worked.

### 5. Follow-up Prompt Menu
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 6. Expand If Needed
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

### 4. Scenario Prompt Menu
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 5. Expand If Needed
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

## Next Action

Choose the portfolio story this project should prove to a reviewer.

## Next Prompt

I finished the next action for this writing content prompt refinement pass.

Original goal:
give me a better version of this reponse and make it a better suggestions if you think therre are any. that's what i want to ask the ai but i want it to be a better output this was its output just now: "Here’s a stronger Fiverr portfolio description you can paste and lightly trim to fit the 1,400-character limit. It highlights the technical difficulty, the social impact, and the fact that you built the pipeline from the ground up. Project description I built a custom OCR and document-processing pipeline for Sgaw Karen, an underrepresented language with limited digital tooling and legacy text sources that were not reliably Unicode-encoded. I created the workflow from scratch using Python, Roboflow, dataset generation, annotation, preprocessing, and automation to turn difficult source materials into structured, machine-readable language data. A core challenge was that some dictionary and document sources could not be cleanly copied, parsed, or translated through standard methods, so I generated my own training data and visual dataset instead of relying on existing corpora. I produced image-based syllable and character combinations, built preprocessing and extraction logic, annotated the data, and trained a custom model that reached 88.7% mAP in Roboflow. This project combined machine learning, OCR, document AI, and linguistics principles. I applied language structure, syllable behavior, and rule-based processing to improve recognition and downstream dictionary extraction, including extensive backend logic for structured parsing and definition building. Beyond the technical work, this project matters because it supports digital access for a language community that is often underserved online. I also serve as music director at a Karen church and help teach the language to younger members, so this work connects AI engineering with real community preservation and accessibility. Stronger project title Your current title is already solid, but these are stronger Fiverr-style options that sound more outcome-focused. The current form shows your title field and portfolio constraints, including the 1,400-character project description box. Sgaw Karen OCR System: Custom AI Model and Document Pipeline Karen Script OCR: Training a Custom Model From Scratch AI-Powered Sgaw Karen OCR and Dictionary Extraction Custom OCR for an Underrepresented Language Using Python and Roboflow Best proof media For Fiverr, the best proof is visual evidence of transformation, not just code screenshots. The page allows up to 5 files in image or video formats, with the first upload becoming the thumbnail. Before/after image: scanned Karen page next to OCR output or structured text/JSON. Roboflow screenshot: dataset classes, annotations, or training dashboard showing model performance. Short screen recording: PDF or image input going through your Python pipeline into extracted output. Dataset generation evidence: collage of generated syllable images or annotated training samples. Architecture graphic: simple workflow diagram, PDF/image → → preprocessing → → OCR model → → dictionary parsing → → output. Best 5 uploads Use these in this order so your thumbnail is instantly impressive. Fiverr recommends making the first attachment visually strong. A clean before/after comparison image of a Karen source page and extracted result. A Roboflow training screenshot with the 88.7% mAP result visible. A screenshot collage of labeled samples or generated syllable images. A short demo video of the pipeline running. A polished workflow diagram or app screenshot showing the final output interface. Shorter version If you want a tighter version for Fiverr’s box, use this: I developed a custom OCR and document-processing system for Sgaw Karen, an underrepresented language with limited digital support and legacy non-Unicode text sources. Using Python, Roboflow, dataset generation, annotation, preprocessing, and automation, I built the full workflow from scratch and trained a model that reached 88.7% mAP. I also applied linguistics-based rules to improve extraction and dictionary processing, helping make the language more accessible online through AI-powered automation. This project was especially meaningful because it supports a real Karen community I work with directly through my church and language teaching. Would you like me to compress this to fit Fiverr perfectly at around 1,250 to 1,350 characters?" how can i get a prompt that will improve it? make me one that is a better response that i get from having a better prompt you give me.

Completed next action: Choose the portfolio story this project should prove to a reviewer.
Why it mattered: This is the highest-leverage next move for a writing content request because it narrows the output contract before execution.
Action after this: Draft the first version and produce targeted revisions.

Other viable next-action options:
1. Choose the portfolio story this project should prove to a reviewer.
2. Define the demo moment that will make the project feel complete.
3. Name the repeated manual task, trigger, input, output, and failure case.
4. Map the automation as one before/after workflow with a measurable time saved.
5. Identify the first screen, primary action, and what must be visible without explanation.

Known completed clarification count: 2

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780804994374

Accepted: 2026-06-07T04:03:14.381Z
Conversation: 0000
Family: debugging_troubleshooting
Role: you are an expert freelancer that is career coaching a beginner with creating gigs on fiverr

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Complete Prompt Structure
Purpose: Shapes a paste-ready prompt with role, goal, constraints, output contract, and next action.
Input example: I want an AI to help me build a portfolio automation project.
Output example: You are a senior product engineer. Clarify the goal, define the MVP, return a step-by-step plan, include acceptance criteria, and give the next prompt.
Why this matters: Prompt mode needs a structural example so the generated prompt reduces back-and-forth.
Tags: prompt, structure, execution

### 2. Cost-Aware Prompting
Purpose: Shows how to include token, quota, and free-first constraints without overcomplicating the prompt.
Input example: I need the best answer but want to avoid wasting API quota.
Output example: Use concise reasoning first, ask only blocking questions, prefer local/free options when possible, and separate optional expansions.
Why this matters: This matches the product's goal of better AI results with fewer tokens.
Tags: cost, quota, efficiency

### 3. Next-Pass Loop
Purpose: Demonstrates how the AI should return the next action and a prompt for the next pass.
Input example: After I finish the next action, I need to continue the workflow.
Output example: Return the next action, why it is next, the action after that, and the exact next prompt to give back.
Why this matters: This keeps the workflow continuous without forcing the user to invent follow-up prompts.
Tags: next-pass, workflow, continuity

You are a you are an expert freelancer that is career coaching a beginner with creating gigs on fiverr.
The prompt family is debugging_troubleshooting (Isolate and resolve failure).

Goal:
i want to create gigs on the platform that is the fiverr platform to make money online. i want to refine this prompt so that i get this resposne made better tailored to my expertise: make a better prompt to ask to the comet browser's designated chatbot so the gig offers are even better. give it all my experience as consideration. "GIG 1 — Custom Chord Charts, Piano Arrangements & Song Transcription Gig Title I will transcribe your song into an accurate chord chart by ear Gig Description If you have a song but no sheet music, chord chart, or lead sheet, I can turn it into a musician-friendly chart you can actually use. I specialize in play-by-ear transcription for worship teams, singers, churches, bands, and self-taught musicians who need accurate chords without spending hours figuring them out themselves. Unlike automated chord apps, I don't stop at basic chord guesses. I listen for chord quality, inversions, key changes, unusual progressions, passing chords, and musical details that generic tools often miss. What you receive: ✓ Accurate chord chart in PDF format ✓ Song key identification ✓ Chord progression analysis ✓ Section labeling (Verse, Chorus, Bridge, Intro, Outro) ✓ Clear formatting for rehearsals and live performance ✓ Optional piano arrangement guidance ✓ Optional musician coaching notes This service is ideal for: • Worship leaders preparing Sunday music • Singers who need accompaniment chords • Bands learning songs quickly • Church music teams building song libraries • Self-taught musicians developing their ear Why choose me? I combine ear training, music theory, chord recognition, and practical musician experience. I focus on delivering charts that are easy to read and perform from—not cluttered theory documents. If the recording is noisy, live, poorly mixed, or contains unusual harmonic movement, I'll work through the edge cases and provide the cleanest possible result. Before ordering, feel free to send the song file or link so I can confirm scope and turnaround. Let's turn your song into a chart you can play with confidence. Packages Basic — Chord Snapshot Price: $25 Description: Transcription of one song into a clean chord chart. Delivery: 2 Days Revisions: 0 Includes: 1 song Chord chart PDF Song key identification Basic section labels Standard — Performance Ready Chart Price: $75 Description: Complete rehearsal-ready chart with detailed formatting and musical notes. Delivery: 4 Days Revisions: 1 Includes: Up to 1 song Full chord chart Section markers Key analysis Performance notes Clean PDF formatting Premium — Worship Team Package Price: $150 Description: Detailed transcription with piano arrangement guidance and coaching notes. Delivery: 2 Days Revisions: 2 Includes: Up to 2 songs Complete chord charts Piano arrangement suggestions Alternate voicings Performance coaching notes Priority delivery Search Tags play by ear chord chart song transcription piano arrangement worship music FAQ Can you transcribe songs from YouTube or Spotify? Yes. Send the link and I'll create the chart from the recording. Can you identify difficult chords and key changes? Yes. I specifically listen for extensions, inversions, modulations, and non-obvious harmony. Do I get sheet music? This gig focuses on chord charts and lead-sheet style transcription. Full notation can be quoted separately. Thumbnail Image Brief Large headline: "SONG → CHORD CHART" Visual: Waveform on left, clean chord chart on right Subheadline: "Play By Ear Transcription" Small badges: ✓ Worship Music ✓ Accurate Chords ✓ Performance Ready GIG 2 — Python Automation Workflows Gig Title I will automate your repetitive business task with Python Gig Description Still copying data between spreadsheets? Renaming files manually? Repeating the same administrative task every week? I build Python automation workflows that eliminate repetitive work and save hours of manual effort. This isn't just a script. I create reusable workflows designed to continue working after delivery, with error handling, documentation, and practical outputs your business can actually use. Common automations include: ✓ Spreadsheet processing ✓ CSV imports and exports ✓ File organization and renaming ✓ PDF processing ✓ Data cleanup workflows ✓ Report generation ✓ Email preparation workflows ✓ OCR-driven document processing ✓ Business admin automation I work especially well with messy processes that involve inconsistent files, broken formatting, duplicate records, or multiple manual steps. Many automation projects fail because they only work on perfect data. I design workflows that account for edge cases, unexpected inputs, and real-world business conditions. Ideal for: • Small businesses • Solo entrepreneurs • Virtual assistants • Operations managers • Service businesses • Consultants My background includes document processing pipelines, OCR workflows, AI-assisted automation systems, and custom business tooling. You'll receive: ✓ Working automation solution ✓ Installation instructions ✓ Documentation ✓ Test results ✓ Revision support according to package Send me your current process and I'll help determine what can be automated. Packages Basic — Task Automator Price: $35 Description: Automation for one repetitive workflow. Delivery: 2 Days Revisions: 0 Includes: Single workflow Python solution Documentation Basic testing Standard — Business Workflow Price: $85 Description: Multi-step automation with validation and error handling. Delivery: 4 Days Revisions: 1 Includes: Multi-step workflow Data validation Error handling Documentation Workflow walkthrough Premium — Complete Automation System Price: $175 Description: Reusable automation system with advanced workflow support. Delivery: 2 Days Revisions: 2 Includes: Complex workflow Advanced edge-case handling Reusable architecture Detailed documentation Priority support Search Tags python automation business automation workflow automation process automation python script FAQ Can you automate Excel and CSV workflows? Yes. These are some of the most common projects I handle. Will the automation break if my files aren't perfectly formatted? I specifically build around real-world messy data and edge cases whenever possible. Do I need technical experience? No. I provide instructions and can explain how the workflow operates. Thumbnail Image Brief Headline: "STOP REPETITIVE WORK" Visual: Manual workflow arrows transforming into automated workflow Badges: ✓ Save Hours ✓ Python Automation ✓ Reusable Systems GIG 3 — OCR & Document Digitization Gig Title I will extract and clean text from scanned PDFs and images Gig Description Need text pulled from scanned PDFs, photos, forms, reports, or historical documents? I provide OCR extraction combined with manual cleanup and validation to deliver usable text—not raw OCR output full of errors. Many OCR tools generate messy results: ✗ Broken formatting ✗ Missing characters ✗ Incorrect tables ✗ Garbled text ✗ Copy-and-paste failures I specialize in turning difficult source documents into structured, searchable, editable files. Services include: ✓ OCR text extraction ✓ PDF-to-text conversion ✓ Image-to-text conversion ✓ Formatting cleanup ✓ Table reconstruction ✓ Document structuring ✓ Data validation ✓ Export to Word, Excel, CSV, or TXT Ideal for: • Legal offices • Medical offices • Researchers • Archives • Businesses digitizing records • Consultants handling legacy documents I have experience with OCR training, document processing pipelines, PDF conversion workflows, and difficult formatting cases. I focus on accuracy and usability. That means I review results, clean formatting, identify extraction problems, and provide structured outputs that can be searched, analyzed, or imported into other systems. If your document contains scans, old print, poor image quality, or inconsistent formatting, send it over and I'll review it before you order. Packages Basic — OCR Extraction Price: $20 Description: Text extraction from one document. Delivery: 2 Days Revisions: 0 Includes: Up to 10 pages OCR extraction Clean text output Standard — Structured Document Price: $65 Description: OCR plus formatting cleanup and structure restoration. Delivery: 4 Days Revisions: 1 Includes: Up to 50 pages OCR extraction Formatting cleanup Structured output Premium — Digitization Package Price: $150 Description: Large document processing with validation and advanced cleanup. Delivery: 2 Days Revisions: 2 Includes: Up to 150 pages OCR extraction Advanced cleanup Table reconstruction Priority processing Search Tags OCR pdf to text document digitization text extraction data entry FAQ Can you handle poor-quality scans? Yes. I regularly work with imperfect scans and difficult source material. What output formats do you provide? Word, TXT, Excel, CSV, and other structured formats depending on the project. Do you manually review OCR results? Yes. The goal is usable output, not unverified machine-generated text. Thumbnail Image Brief Headline: "SCAN → EDITABLE TEXT" Visual: Scanned PDF transforming into clean structured document Badges: ✓ OCR Cleanup ✓ Searchable Files ✓ Accurate Output GIG 4 — Web Scraping & Dataset Creation Gig Title I will deliver a clean web scraped dataset in CSV Excel or JSON Gig Description Need competitor data, product listings, lead information, research data, or structured website content? I provide web scraping services focused on delivering clean, organized, validated datasets ready for analysis—not raw scraped dumps. Many scraping services stop after collecting data. I go further by cleaning, validating, structuring, and organizing results so they're immediately usable. What I can collect: ✓ Product data ✓ Pricing information ✓ Business listings ✓ Directory data ✓ Research datasets ✓ Market intelligence ✓ Ecommerce catalog information ✓ Public website content Deliverables available in: ✓ CSV ✓ Excel ✓ JSON Ideal for: • Marketers • Ecommerce sellers • Researchers • Consultants • Analysts • Small businesses My approach focuses on: ✓ Duplicate removal ✓ Missing data review ✓ Field standardization ✓ Consistent formatting ✓ Quality checks If the source website contains inconsistent layouts, incomplete listings, or unusual formatting, I work through those edge cases to maximize data quality. You'll receive organized data that can be imported directly into spreadsheets, CRMs, databases, dashboards, or analysis tools. Send the website and data fields you need before ordering and I'll confirm feasibility. Packages Basic — Starter Dataset Price: $25 Description: Small targeted dataset extraction. Delivery: 2 Days Revisions: 0 Includes: Up to 250 records CSV export Basic cleanup Standard — Research Dataset Price: $75 Description: Expanded scraping with validation and formatting. Delivery: 4 Days Revisions: 1 Includes: Up to 1,000 records CSV or Excel Data validation Duplicate cleanup Premium — Competitive Intelligence Dataset Price: $175 Description: Large structured dataset with advanced cleanup and multiple exports. Delivery: 2 Days Revisions: 2 Includes: Up to 5,000 records CSV + Excel + JSON Advanced cleaning Field normalization Priority delivery Search Tags web scraping data mining csv data excel dataset market research FAQ Can you scrape ecommerce websites? Yes, provided the data is publicly accessible and the site's terms permit collection. Will the dataset be cleaned? Yes. I focus heavily on validation, consistency, and usability. Can you deliver Excel and JSON together? Yes. Premium packages include multiple export formats. Thumbnail Image Brief Headline: "CLEAN DATA, NOT RAW SCRAPES" Visual: Website icons flowing into organized spreadsheet Badges: ✓ CSV ✓ Excel ✓ JSON ✓ Validated Data"j

Mission:
Finish this goal in the shortest practical time without skipping the decisions or verification needed for a useful result. Be thorough enough that the next AI or agent can execute without needing the user to restate the goal.

Operating mode:
- Automatically handle the meta-prompting pattern: I want a prompt that I can paste into an AI assistant to get the intended result.
- Prefer a longer, complete prompt over a short generic prompt.
- Convert vague intent into a concrete execution path.
- Keep the user focused on the end goal, not prompt mechanics.
- Include cost, token, and quota controls when relevant.

Defined steps to complete the goal:
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Collect reproduction steps, expected behavior, observed behavior, and evidence.
7. Find the smallest likely fix, apply it, and verify with a concrete command or browser check.

Few-shot examples shaping this output:
1. Complete Prompt Structure
   Input example: I want an AI to help me build a portfolio automation project.
   Output example: You are a senior product engineer. Clarify the goal, define the MVP, return a step-by-step plan, include acceptance criteria, and give the next prompt.
   Why it matters: Prompt mode needs a structural example so the generated prompt reduces back-and-forth.
2. Cost-Aware Prompting
   Input example: I need the best answer but want to avoid wasting API quota.
   Output example: Use concise reasoning first, ask only blocking questions, prefer local/free options when possible, and separate optional expansions.
   Why it matters: This matches the product's goal of better AI results with fewer tokens.
3. Next-Pass Loop
   Input example: After I finish the next action, I need to continue the workflow.
   Output example: Return the next action, why it is next, the action after that, and the exact next prompt to give back.
   Why it matters: This keeps the workflow continuous without forcing the user to invent follow-up prompts.

Return:
1. Refined understanding of the goal and success criteria.
2. Fastest practical execution plan with numbered steps.
3. Any blocking clarification questions, only if they would materially change the result.
4. The first concrete artifact, answer, plan, fix, draft, or spec needed to move the project forward.
5. Verification steps or acceptance criteria.
6. Scenario follow-up prompts for different situations.
7. Expansion prompts for sections that may need deeper explanation.

Scenario follow-up prompts to include:
1. If the first fix fails, generate a second-pass debugging checklist using the new evidence.
2. If the bug is intermittent, propose logging and reproduction probes before changing code.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

Expansion prompts to include in a separate section:
1. Expand the Debugging troubleshooting reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

Next action protocol:
1. Return 3 to 5 context-specific next-action options that could reasonably come next.
2. Recommended next action: Name the repeated manual task, trigger, input, output, and failure case.
3. Why this action is next: This is the highest-leverage next move for a debugging troubleshooting request because it narrows the output contract before execution.
4. Action after that: Apply the smallest likely fix and verify it with a command or browser check.
5. Return a next-pass canonical prompt the user can give back after finishing the recommended action.

Next-action options to consider:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Capture the exact reproduction path and strongest error signal.

Constraints:
- Stay practical, direct, and focused on the end goal.
- Surface overlooked decisions that could change the outcome.
- Include cost, token, and quota considerations when relevant.
- If agents, skills, repo instructions, or setup should change, say so explicitly.
- If the user needs more explanation, do not bury it in the main answer. Put expandable explanations in a separate section.
- Provide copy-ready prompts for follow-up scenarios.
- Do not execute until the canonical prompt is accepted.

## Generated Response

## Accepted Prompt Response

### 1. Goal Confirmation
This request should be handled as debugging troubleshooting: Isolate and resolve failure. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition.

### 2. Fastest Execution Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Collect reproduction steps, expected behavior, observed behavior, and evidence.
7. Find the smallest likely fix, apply it, and verify with a concrete command or browser check.

### 3. Expected Output Contract
## Expected AI Response Blueprint

### 1. Direct Goal Summary
Restate the goal in one or two sentences: i want to create gigs on the platform that is the fiverr platform to make money online. i want to refine this prompt so that i get this resposne made better tailored to my expertise: make a better prompt to ask to the comet browser's designated chatbot so the gig offers are even better. give it all my experience as consideration. "GIG 1 — Custom Chord Charts, Piano Arrangements & Song Transcription Gig Title I will transcribe your song into an accurate chord chart by ear Gig Description If you have a song but no sheet music, chord chart, or lead sheet, I can turn it into a musician-friendly chart you can actually use. I specialize in play-by-ear transcription for worship teams, singers, churches, bands, and self-taught musicians who need accurate chords without spending hours figuring them out themselves. Unlike automated chord apps, I don't stop at basic chord guesses. I listen for chord quality, inversions, key changes, unusual progressions, passing chords, and musical details that generic tools often miss. What you receive: ✓ Accurate chord chart in PDF format ✓ Song key identification ✓ Chord progression analysis ✓ Section labeling (Verse, Chorus, Bridge, Intro, Outro) ✓ Clear formatting for rehearsals and live performance ✓ Optional piano arrangement guidance ✓ Optional musician coaching notes This service is ideal for: • Worship leaders preparing Sunday music • Singers who need accompaniment chords • Bands learning songs quickly • Church music teams building song libraries • Self-taught musicians developing their ear Why choose me? I combine ear training, music theory, chord recognition, and practical musician experience. I focus on delivering charts that are easy to read and perform from—not cluttered theory documents. If the recording is noisy, live, poorly mixed, or contains unusual harmonic movement, I'll work through the edge cases and provide the cleanest possible result. Before ordering, feel free to send the song file or link so I can confirm scope and turnaround. Let's turn your song into a chart you can play with confidence. Packages Basic — Chord Snapshot Price: $25 Description: Transcription of one song into a clean chord chart. Delivery: 2 Days Revisions: 0 Includes: 1 song Chord chart PDF Song key identification Basic section labels Standard — Performance Ready Chart Price: $75 Description: Complete rehearsal-ready chart with detailed formatting and musical notes. Delivery: 4 Days Revisions: 1 Includes: Up to 1 song Full chord chart Section markers Key analysis Performance notes Clean PDF formatting Premium — Worship Team Package Price: $150 Description: Detailed transcription with piano arrangement guidance and coaching notes. Delivery: 2 Days Revisions: 2 Includes: Up to 2 songs Complete chord charts Piano arrangement suggestions Alternate voicings Performance coaching notes Priority delivery Search Tags play by ear chord chart song transcription piano arrangement worship music FAQ Can you transcribe songs from YouTube or Spotify? Yes. Send the link and I'll create the chart from the recording. Can you identify difficult chords and key changes? Yes. I specifically listen for extensions, inversions, modulations, and non-obvious harmony. Do I get sheet music? This gig focuses on chord charts and lead-sheet style transcription. Full notation can be quoted separately. Thumbnail Image Brief Large headline: "SONG → CHORD CHART" Visual: Waveform on left, clean chord chart on right Subheadline: "Play By Ear Transcription" Small badges: ✓ Worship Music ✓ Accurate Chords ✓ Performance Ready GIG 2 — Python Automation Workflows Gig Title I will automate your repetitive business task with Python Gig Description Still copying data between spreadsheets? Renaming files manually? Repeating the same administrative task every week? I build Python automation workflows that eliminate repetitive work and save hours of manual effort. This isn't just a script. I create reusable workflows designed to continue working after delivery, with error handling, documentation, and practical outputs your business can actually use. Common automations include: ✓ Spreadsheet processing ✓ CSV imports and exports ✓ File organization and renaming ✓ PDF processing ✓ Data cleanup workflows ✓ Report generation ✓ Email preparation workflows ✓ OCR-driven document processing ✓ Business admin automation I work especially well with messy processes that involve inconsistent files, broken formatting, duplicate records, or multiple manual steps. Many automation projects fail because they only work on perfect data. I design workflows that account for edge cases, unexpected inputs, and real-world business conditions. Ideal for: • Small businesses • Solo entrepreneurs • Virtual assistants • Operations managers • Service businesses • Consultants My background includes document processing pipelines, OCR workflows, AI-assisted automation systems, and custom business tooling. You'll receive: ✓ Working automation solution ✓ Installation instructions ✓ Documentation ✓ Test results ✓ Revision support according to package Send me your current process and I'll help determine what can be automated. Packages Basic — Task Automator Price: $35 Description: Automation for one repetitive workflow. Delivery: 2 Days Revisions: 0 Includes: Single workflow Python solution Documentation Basic testing Standard — Business Workflow Price: $85 Description: Multi-step automation with validation and error handling. Delivery: 4 Days Revisions: 1 Includes: Multi-step workflow Data validation Error handling Documentation Workflow walkthrough Premium — Complete Automation System Price: $175 Description: Reusable automation system with advanced workflow support. Delivery: 2 Days Revisions: 2 Includes: Complex workflow Advanced edge-case handling Reusable architecture Detailed documentation Priority support Search Tags python automation business automation workflow automation process automation python script FAQ Can you automate Excel and CSV workflows? Yes. These are some of the most common projects I handle. Will the automation break if my files aren't perfectly formatted? I specifically build around real-world messy data and edge cases whenever possible. Do I need technical experience? No. I provide instructions and can explain how the workflow operates. Thumbnail Image Brief Headline: "STOP REPETITIVE WORK" Visual: Manual workflow arrows transforming into automated workflow Badges: ✓ Save Hours ✓ Python Automation ✓ Reusable Systems GIG 3 — OCR & Document Digitization Gig Title I will extract and clean text from scanned PDFs and images Gig Description Need text pulled from scanned PDFs, photos, forms, reports, or historical documents? I provide OCR extraction combined with manual cleanup and validation to deliver usable text—not raw OCR output full of errors. Many OCR tools generate messy results: ✗ Broken formatting ✗ Missing characters ✗ Incorrect tables ✗ Garbled text ✗ Copy-and-paste failures I specialize in turning difficult source documents into structured, searchable, editable files. Services include: ✓ OCR text extraction ✓ PDF-to-text conversion ✓ Image-to-text conversion ✓ Formatting cleanup ✓ Table reconstruction ✓ Document structuring ✓ Data validation ✓ Export to Word, Excel, CSV, or TXT Ideal for: • Legal offices • Medical offices • Researchers • Archives • Businesses digitizing records • Consultants handling legacy documents I have experience with OCR training, document processing pipelines, PDF conversion workflows, and difficult formatting cases. I focus on accuracy and usability. That means I review results, clean formatting, identify extraction problems, and provide structured outputs that can be searched, analyzed, or imported into other systems. If your document contains scans, old print, poor image quality, or inconsistent formatting, send it over and I'll review it before you order. Packages Basic — OCR Extraction Price: $20 Description: Text extraction from one document. Delivery: 2 Days Revisions: 0 Includes: Up to 10 pages OCR extraction Clean text output Standard — Structured Document Price: $65 Description: OCR plus formatting cleanup and structure restoration. Delivery: 4 Days Revisions: 1 Includes: Up to 50 pages OCR extraction Formatting cleanup Structured output Premium — Digitization Package Price: $150 Description: Large document processing with validation and advanced cleanup. Delivery: 2 Days Revisions: 2 Includes: Up to 150 pages OCR extraction Advanced cleanup Table reconstruction Priority processing Search Tags OCR pdf to text document digitization text extraction data entry FAQ Can you handle poor-quality scans? Yes. I regularly work with imperfect scans and difficult source material. What output formats do you provide? Word, TXT, Excel, CSV, and other structured formats depending on the project. Do you manually review OCR results? Yes. The goal is usable output, not unverified machine-generated text. Thumbnail Image Brief Headline: "SCAN → EDITABLE TEXT" Visual: Scanned PDF transforming into clean structured document Badges: ✓ OCR Cleanup ✓ Searchable Files ✓ Accurate Output GIG 4 — Web Scraping & Dataset Creation Gig Title I will deliver a clean web scraped dataset in CSV Excel or JSON Gig Description Need competitor data, product listings, lead information, research data, or structured website content? I provide web scraping services focused on delivering clean, organized, validated datasets ready for analysis—not raw scraped dumps. Many scraping services stop after collecting data. I go further by cleaning, validating, structuring, and organizing results so they're immediately usable. What I can collect: ✓ Product data ✓ Pricing information ✓ Business listings ✓ Directory data ✓ Research datasets ✓ Market intelligence ✓ Ecommerce catalog information ✓ Public website content Deliverables available in: ✓ CSV ✓ Excel ✓ JSON Ideal for: • Marketers • Ecommerce sellers • Researchers • Consultants • Analysts • Small businesses My approach focuses on: ✓ Duplicate removal ✓ Missing data review ✓ Field standardization ✓ Consistent formatting ✓ Quality checks If the source website contains inconsistent layouts, incomplete listings, or unusual formatting, I work through those edge cases to maximize data quality. You'll receive organized data that can be imported directly into spreadsheets, CRMs, databases, dashboards, or analysis tools. Send the website and data fields you need before ordering and I'll confirm feasibility. Packages Basic — Starter Dataset Price: $25 Description: Small targeted dataset extraction. Delivery: 2 Days Revisions: 0 Includes: Up to 250 records CSV export Basic cleanup Standard — Research Dataset Price: $75 Description: Expanded scraping with validation and formatting. Delivery: 4 Days Revisions: 1 Includes: Up to 1,000 records CSV or Excel Data validation Duplicate cleanup Premium — Competitive Intelligence Dataset Price: $175 Description: Large structured dataset with advanced cleanup and multiple exports. Delivery: 2 Days Revisions: 2 Includes: Up to 5,000 records CSV + Excel + JSON Advanced cleaning Field normalization Priority delivery Search Tags web scraping data mining csv data excel dataset market research FAQ Can you scrape ecommerce websites? Yes, provided the data is publicly accessible and the site's terms permit collection. Will the dataset be cleaned? Yes. I focus heavily on validation, consistency, and usability. Can you deliver Excel and JSON together? Yes. Premium packages include multiple export formats. Thumbnail Image Brief Headline: "CLEAN DATA, NOT RAW SCRAPES" Visual: Website icons flowing into organized spreadsheet Badges: ✓ CSV ✓ Excel ✓ JSON ✓ Validated Data"j

### 2. Fastest Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Collect reproduction steps, expected behavior, observed behavior, and evidence.
7. Find the smallest likely fix, apply it, and verify with a concrete command or browser check.

### 3. Main Output
Produce the debugging troubleshooting artifact, answer, plan, fix, draft, or spec that moves the work forward immediately.

### 4. Verification
List exactly how the user or agent can tell whether the answer worked.

### 5. Follow-up Prompt Menu
1. If the first fix fails, generate a second-pass debugging checklist using the new evidence.
2. If the bug is intermittent, propose logging and reproduction probes before changing code.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 6. Expand If Needed
1. Expand the Debugging troubleshooting reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

### 4. Scenario Prompt Menu
1. If the first fix fails, generate a second-pass debugging checklist using the new evidence.
2. If the bug is intermittent, propose logging and reproduction probes before changing code.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 5. Expand If Needed
1. Expand the Debugging troubleshooting reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this debugging troubleshooting prompt refinement pass.

Original goal:
i want to create gigs on the platform that is the fiverr platform to make money online. i want to refine this prompt so that i get this resposne made better tailored to my expertise: make a better prompt to ask to the comet browser's designated chatbot so the gig offers are even better. give it all my experience as consideration. "GIG 1 — Custom Chord Charts, Piano Arrangements & Song Transcription Gig Title I will transcribe your song into an accurate chord chart by ear Gig Description If you have a song but no sheet music, chord chart, or lead sheet, I can turn it into a musician-friendly chart you can actually use. I specialize in play-by-ear transcription for worship teams, singers, churches, bands, and self-taught musicians who need accurate chords without spending hours figuring them out themselves. Unlike automated chord apps, I don't stop at basic chord guesses. I listen for chord quality, inversions, key changes, unusual progressions, passing chords, and musical details that generic tools often miss. What you receive: ✓ Accurate chord chart in PDF format ✓ Song key identification ✓ Chord progression analysis ✓ Section labeling (Verse, Chorus, Bridge, Intro, Outro) ✓ Clear formatting for rehearsals and live performance ✓ Optional piano arrangement guidance ✓ Optional musician coaching notes This service is ideal for: • Worship leaders preparing Sunday music • Singers who need accompaniment chords • Bands learning songs quickly • Church music teams building song libraries • Self-taught musicians developing their ear Why choose me? I combine ear training, music theory, chord recognition, and practical musician experience. I focus on delivering charts that are easy to read and perform from—not cluttered theory documents. If the recording is noisy, live, poorly mixed, or contains unusual harmonic movement, I'll work through the edge cases and provide the cleanest possible result. Before ordering, feel free to send the song file or link so I can confirm scope and turnaround. Let's turn your song into a chart you can play with confidence. Packages Basic — Chord Snapshot Price: $25 Description: Transcription of one song into a clean chord chart. Delivery: 2 Days Revisions: 0 Includes: 1 song Chord chart PDF Song key identification Basic section labels Standard — Performance Ready Chart Price: $75 Description: Complete rehearsal-ready chart with detailed formatting and musical notes. Delivery: 4 Days Revisions: 1 Includes: Up to 1 song Full chord chart Section markers Key analysis Performance notes Clean PDF formatting Premium — Worship Team Package Price: $150 Description: Detailed transcription with piano arrangement guidance and coaching notes. Delivery: 2 Days Revisions: 2 Includes: Up to 2 songs Complete chord charts Piano arrangement suggestions Alternate voicings Performance coaching notes Priority delivery Search Tags play by ear chord chart song transcription piano arrangement worship music FAQ Can you transcribe songs from YouTube or Spotify? Yes. Send the link and I'll create the chart from the recording. Can you identify difficult chords and key changes? Yes. I specifically listen for extensions, inversions, modulations, and non-obvious harmony. Do I get sheet music? This gig focuses on chord charts and lead-sheet style transcription. Full notation can be quoted separately. Thumbnail Image Brief Large headline: "SONG → CHORD CHART" Visual: Waveform on left, clean chord chart on right Subheadline: "Play By Ear Transcription" Small badges: ✓ Worship Music ✓ Accurate Chords ✓ Performance Ready GIG 2 — Python Automation Workflows Gig Title I will automate your repetitive business task with Python Gig Description Still copying data between spreadsheets? Renaming files manually? Repeating the same administrative task every week? I build Python automation workflows that eliminate repetitive work and save hours of manual effort. This isn't just a script. I create reusable workflows designed to continue working after delivery, with error handling, documentation, and practical outputs your business can actually use. Common automations include: ✓ Spreadsheet processing ✓ CSV imports and exports ✓ File organization and renaming ✓ PDF processing ✓ Data cleanup workflows ✓ Report generation ✓ Email preparation workflows ✓ OCR-driven document processing ✓ Business admin automation I work especially well with messy processes that involve inconsistent files, broken formatting, duplicate records, or multiple manual steps. Many automation projects fail because they only work on perfect data. I design workflows that account for edge cases, unexpected inputs, and real-world business conditions. Ideal for: • Small businesses • Solo entrepreneurs • Virtual assistants • Operations managers • Service businesses • Consultants My background includes document processing pipelines, OCR workflows, AI-assisted automation systems, and custom business tooling. You'll receive: ✓ Working automation solution ✓ Installation instructions ✓ Documentation ✓ Test results ✓ Revision support according to package Send me your current process and I'll help determine what can be automated. Packages Basic — Task Automator Price: $35 Description: Automation for one repetitive workflow. Delivery: 2 Days Revisions: 0 Includes: Single workflow Python solution Documentation Basic testing Standard — Business Workflow Price: $85 Description: Multi-step automation with validation and error handling. Delivery: 4 Days Revisions: 1 Includes: Multi-step workflow Data validation Error handling Documentation Workflow walkthrough Premium — Complete Automation System Price: $175 Description: Reusable automation system with advanced workflow support. Delivery: 2 Days Revisions: 2 Includes: Complex workflow Advanced edge-case handling Reusable architecture Detailed documentation Priority support Search Tags python automation business automation workflow automation process automation python script FAQ Can you automate Excel and CSV workflows? Yes. These are some of the most common projects I handle. Will the automation break if my files aren't perfectly formatted? I specifically build around real-world messy data and edge cases whenever possible. Do I need technical experience? No. I provide instructions and can explain how the workflow operates. Thumbnail Image Brief Headline: "STOP REPETITIVE WORK" Visual: Manual workflow arrows transforming into automated workflow Badges: ✓ Save Hours ✓ Python Automation ✓ Reusable Systems GIG 3 — OCR & Document Digitization Gig Title I will extract and clean text from scanned PDFs and images Gig Description Need text pulled from scanned PDFs, photos, forms, reports, or historical documents? I provide OCR extraction combined with manual cleanup and validation to deliver usable text—not raw OCR output full of errors. Many OCR tools generate messy results: ✗ Broken formatting ✗ Missing characters ✗ Incorrect tables ✗ Garbled text ✗ Copy-and-paste failures I specialize in turning difficult source documents into structured, searchable, editable files. Services include: ✓ OCR text extraction ✓ PDF-to-text conversion ✓ Image-to-text conversion ✓ Formatting cleanup ✓ Table reconstruction ✓ Document structuring ✓ Data validation ✓ Export to Word, Excel, CSV, or TXT Ideal for: • Legal offices • Medical offices • Researchers • Archives • Businesses digitizing records • Consultants handling legacy documents I have experience with OCR training, document processing pipelines, PDF conversion workflows, and difficult formatting cases. I focus on accuracy and usability. That means I review results, clean formatting, identify extraction problems, and provide structured outputs that can be searched, analyzed, or imported into other systems. If your document contains scans, old print, poor image quality, or inconsistent formatting, send it over and I'll review it before you order. Packages Basic — OCR Extraction Price: $20 Description: Text extraction from one document. Delivery: 2 Days Revisions: 0 Includes: Up to 10 pages OCR extraction Clean text output Standard — Structured Document Price: $65 Description: OCR plus formatting cleanup and structure restoration. Delivery: 4 Days Revisions: 1 Includes: Up to 50 pages OCR extraction Formatting cleanup Structured output Premium — Digitization Package Price: $150 Description: Large document processing with validation and advanced cleanup. Delivery: 2 Days Revisions: 2 Includes: Up to 150 pages OCR extraction Advanced cleanup Table reconstruction Priority processing Search Tags OCR pdf to text document digitization text extraction data entry FAQ Can you handle poor-quality scans? Yes. I regularly work with imperfect scans and difficult source material. What output formats do you provide? Word, TXT, Excel, CSV, and other structured formats depending on the project. Do you manually review OCR results? Yes. The goal is usable output, not unverified machine-generated text. Thumbnail Image Brief Headline: "SCAN → EDITABLE TEXT" Visual: Scanned PDF transforming into clean structured document Badges: ✓ OCR Cleanup ✓ Searchable Files ✓ Accurate Output GIG 4 — Web Scraping & Dataset Creation Gig Title I will deliver a clean web scraped dataset in CSV Excel or JSON Gig Description Need competitor data, product listings, lead information, research data, or structured website content? I provide web scraping services focused on delivering clean, organized, validated datasets ready for analysis—not raw scraped dumps. Many scraping services stop after collecting data. I go further by cleaning, validating, structuring, and organizing results so they're immediately usable. What I can collect: ✓ Product data ✓ Pricing information ✓ Business listings ✓ Directory data ✓ Research datasets ✓ Market intelligence ✓ Ecommerce catalog information ✓ Public website content Deliverables available in: ✓ CSV ✓ Excel ✓ JSON Ideal for: • Marketers • Ecommerce sellers • Researchers • Consultants • Analysts • Small businesses My approach focuses on: ✓ Duplicate removal ✓ Missing data review ✓ Field standardization ✓ Consistent formatting ✓ Quality checks If the source website contains inconsistent layouts, incomplete listings, or unusual formatting, I work through those edge cases to maximize data quality. You'll receive organized data that can be imported directly into spreadsheets, CRMs, databases, dashboards, or analysis tools. Send the website and data fields you need before ordering and I'll confirm feasibility. Packages Basic — Starter Dataset Price: $25 Description: Small targeted dataset extraction. Delivery: 2 Days Revisions: 0 Includes: Up to 250 records CSV export Basic cleanup Standard — Research Dataset Price: $75 Description: Expanded scraping with validation and formatting. Delivery: 4 Days Revisions: 1 Includes: Up to 1,000 records CSV or Excel Data validation Duplicate cleanup Premium — Competitive Intelligence Dataset Price: $175 Description: Large structured dataset with advanced cleanup and multiple exports. Delivery: 2 Days Revisions: 2 Includes: Up to 5,000 records CSV + Excel + JSON Advanced cleaning Field normalization Priority delivery Search Tags web scraping data mining csv data excel dataset market research FAQ Can you scrape ecommerce websites? Yes, provided the data is publicly accessible and the site's terms permit collection. Will the dataset be cleaned? Yes. I focus heavily on validation, consistency, and usability. Can you deliver Excel and JSON together? Yes. Premium packages include multiple export formats. Thumbnail Image Brief Headline: "CLEAN DATA, NOT RAW SCRAPES" Visual: Website icons flowing into organized spreadsheet Badges: ✓ CSV ✓ Excel ✓ JSON ✓ Validated Data"j

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a debugging troubleshooting request because it narrows the output contract before execution.
Action after this: Apply the smallest likely fix and verify it with a command or browser check.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Capture the exact reproduction path and strongest error signal.

Known completed clarification count: 0

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780805834785

Accepted: 2026-06-07T04:17:14.797Z
Conversation: 0000
Family: writing_content
Role: Fiverr gig optimization expert, conversion copywriter, and marketplace SEO strategist for technical and creative freelance services

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Complete Prompt Structure
Purpose: Shapes a paste-ready prompt with role, goal, constraints, output contract, and next action.
Input example: I want an AI to help me build a portfolio automation project.
Output example: You are a senior product engineer. Clarify the goal, define the MVP, return a step-by-step plan, include acceptance criteria, and give the next prompt.
Why this matters: Prompt mode needs a structural example so the generated prompt reduces back-and-forth.
Tags: prompt, structure, execution

### 2. Cost-Aware Prompting
Purpose: Shows how to include token, quota, and free-first constraints without overcomplicating the prompt.
Input example: I need the best answer but want to avoid wasting API quota.
Output example: Use concise reasoning first, ask only blocking questions, prefer local/free options when possible, and separate optional expansions.
Why this matters: This matches the product's goal of better AI results with fewer tokens.
Tags: cost, quota, efficiency

### 3. Next-Pass Loop
Purpose: Demonstrates how the AI should return the next action and a prompt for the next pass.
Input example: After I finish the next action, I need to continue the workflow.
Output example: Return the next action, why it is next, the action after that, and the exact next prompt to give back.
Why this matters: This keeps the workflow continuous without forcing the user to invent follow-up prompts.
Tags: next-pass, workflow, continuity

You are a Fiverr gig optimization expert, conversion copywriter, and marketplace SEO strategist for technical and creative freelance services.
The prompt family is writing_content (Draft, edit, and tune tone).

Goal:
You are a Fiverr gig optimization expert and conversion copywriter specializing in service marketplace listings. I am a freelancer with the following verified background: - 18 years of piano experience, classically trained, perfect pitch - 6 years of improvisation experience - Church music director (current) - Custom wedding song arrangements (completed in 1 day) - Built a full chord chart app used weekly - Python automation developer - OCR and document processing pipeline experience - Web scraping and dataset creation - Karen language OCR pipeline (built from scratch) - AI automation workflow builder - Prompt engineering specialist - Technical troubleshooting expert - Self-taught AI-assisted developer - Document digitization specialist I have 4 Fiverr gigs already drafted. I need you to optimize each one to: 1. Win clicks on Fiverr search results 2. Convert browsers into buyers 3. Price packages correctly for the market 4. Use Fiverr SEO-optimized titles and tags 5. Write descriptions that handle objections before buyers ask 6. Position me as the credible expert, not a beginner 7. Add any missing gig ideas based on my background that would sell fast For EACH of the 4 gigs below, output: A. Optimized Gig Title (Fiverr SEO, under 80 characters) B. Optimized Gig Description (conversion-focused, objection-handling, 400-600 words) C. Package names, prices, delivery times, and what is included in each tier D. 5 optimized search tags E. 3 FAQ entries that prevent buyer hesitation F. Thumbnail image brief (headline, visual concept, 3 badge text items) G. One-line gig positioning statement Also output at the end: H. 2 additional gig ideas I should add based on my background that are NOT in my current 4 gigs and would sell on Fiverr right now Here are my 4 current gigs to optimize: GIG 1: Custom Chord Charts, Piano Arrangements & Song Transcription GIG 2: Python Automation Workflows GIG 3: OCR & Document Digitization GIG 4: Web Scraping & Dataset Creation Full gig drafts are provided as context. Optimize all 4 and add 2 new gig ideas. Positioning constraints across all gigs: - Do NOT use buzzwords like leverage, synergy, results-driven, passionate - Write like a skilled operator, not a salesperson - Each gig should sound like it comes from someone who has actually done this work - Prices should reflect real skill, not desperation pricing - Every package should have a clear reason why someone would choose it over the tier below

Known clarification answers:
- Writing audience: Potential customer
- Writing tone: Clear and direct

Mission:
Finish this goal in the shortest practical time without skipping the decisions or verification needed for a useful result. Be thorough enough that the next AI or agent can execute without needing the user to restate the goal.

Operating mode:
- Automatically handle the meta-prompting pattern: I want a prompt that I can paste into an AI assistant to get the intended result.
- Prefer a longer, complete prompt over a short generic prompt.
- Convert vague intent into a concrete execution path.
- Keep the user focused on the end goal, not prompt mechanics.
- Include cost, token, and quota controls when relevant.

Defined steps to complete the goal:
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

Few-shot examples shaping this output:
1. Complete Prompt Structure
   Input example: I want an AI to help me build a portfolio automation project.
   Output example: You are a senior product engineer. Clarify the goal, define the MVP, return a step-by-step plan, include acceptance criteria, and give the next prompt.
   Why it matters: Prompt mode needs a structural example so the generated prompt reduces back-and-forth.
2. Cost-Aware Prompting
   Input example: I need the best answer but want to avoid wasting API quota.
   Output example: Use concise reasoning first, ask only blocking questions, prefer local/free options when possible, and separate optional expansions.
   Why it matters: This matches the product's goal of better AI results with fewer tokens.
3. Next-Pass Loop
   Input example: After I finish the next action, I need to continue the workflow.
   Output example: Return the next action, why it is next, the action after that, and the exact next prompt to give back.
   Why it matters: This keeps the workflow continuous without forcing the user to invent follow-up prompts.

Return:
1. Refined understanding of the goal and success criteria.
2. Fastest practical execution plan with numbered steps.
3. Any blocking clarification questions, only if they would materially change the result.
4. The first concrete artifact, answer, plan, fix, draft, or spec needed to move the project forward.
5. Verification steps or acceptance criteria.
6. Scenario follow-up prompts for different situations.
7. Expansion prompts for sections that may need deeper explanation.

Scenario follow-up prompts to include:
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

Expansion prompts to include in a separate section:
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

Next action protocol:
1. Return 3 to 5 context-specific next-action options that could reasonably come next.
2. Recommended next action: Name the repeated manual task, trigger, input, output, and failure case.
3. Why this action is next: This is the highest-leverage next move for a writing content request because it narrows the output contract before execution.
4. Action after that: Draft the first version and produce targeted revisions.
5. Return a next-pass canonical prompt the user can give back after finishing the recommended action.

Next-action options to consider:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Choose the reader and tone.

Constraints:
- Stay practical, direct, and focused on the end goal.
- Surface overlooked decisions that could change the outcome.
- Include cost, token, and quota considerations when relevant.
- If agents, skills, repo instructions, or setup should change, say so explicitly.
- If the user needs more explanation, do not bury it in the main answer. Put expandable explanations in a separate section.
- Provide copy-ready prompts for follow-up scenarios.
- Do not execute until the canonical prompt is accepted.

## Generated Response

## Accepted Prompt Response

### 1. Goal Confirmation
This request should be handled as writing content: Draft, edit, and tune tone. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. The current draft now includes 2 clarification answers.

### 2. Fastest Execution Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

### 3. Expected Output Contract
## Expected AI Response Blueprint

### 1. Direct Goal Summary
Restate the goal in one or two sentences: You are a Fiverr gig optimization expert and conversion copywriter specializing in service marketplace listings. I am a freelancer with the following verified background: - 18 years of piano experience, classically trained, perfect pitch - 6 years of improvisation experience - Church music director (current) - Custom wedding song arrangements (completed in 1 day) - Built a full chord chart app used weekly - Python automation developer - OCR and document processing pipeline experience - Web scraping and dataset creation - Karen language OCR pipeline (built from scratch) - AI automation workflow builder - Prompt engineering specialist - Technical troubleshooting expert - Self-taught AI-assisted developer - Document digitization specialist I have 4 Fiverr gigs already drafted. I need you to optimize each one to: 1. Win clicks on Fiverr search results 2. Convert browsers into buyers 3. Price packages correctly for the market 4. Use Fiverr SEO-optimized titles and tags 5. Write descriptions that handle objections before buyers ask 6. Position me as the credible expert, not a beginner 7. Add any missing gig ideas based on my background that would sell fast For EACH of the 4 gigs below, output: A. Optimized Gig Title (Fiverr SEO, under 80 characters) B. Optimized Gig Description (conversion-focused, objection-handling, 400-600 words) C. Package names, prices, delivery times, and what is included in each tier D. 5 optimized search tags E. 3 FAQ entries that prevent buyer hesitation F. Thumbnail image brief (headline, visual concept, 3 badge text items) G. One-line gig positioning statement Also output at the end: H. 2 additional gig ideas I should add based on my background that are NOT in my current 4 gigs and would sell on Fiverr right now Here are my 4 current gigs to optimize: GIG 1: Custom Chord Charts, Piano Arrangements & Song Transcription GIG 2: Python Automation Workflows GIG 3: OCR & Document Digitization GIG 4: Web Scraping & Dataset Creation Full gig drafts are provided as context. Optimize all 4 and add 2 new gig ideas. Positioning constraints across all gigs: - Do NOT use buzzwords like leverage, synergy, results-driven, passionate - Write like a skilled operator, not a salesperson - Each gig should sound like it comes from someone who has actually done this work - Prices should reflect real skill, not desperation pricing - Every package should have a clear reason why someone would choose it over the tier below

### 2. Fastest Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

### 3. Main Output
Produce the writing content artifact, answer, plan, fix, draft, or spec that moves the work forward immediately.

### 4. Verification
List exactly how the user or agent can tell whether the answer worked.

### 5. Follow-up Prompt Menu
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 6. Expand If Needed
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

### 4. Scenario Prompt Menu
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 5. Expand If Needed
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this writing content prompt refinement pass.

Original goal:
You are a Fiverr gig optimization expert and conversion copywriter specializing in service marketplace listings. I am a freelancer with the following verified background: - 18 years of piano experience, classically trained, perfect pitch - 6 years of improvisation experience - Church music director (current) - Custom wedding song arrangements (completed in 1 day) - Built a full chord chart app used weekly - Python automation developer - OCR and document processing pipeline experience - Web scraping and dataset creation - Karen language OCR pipeline (built from scratch) - AI automation workflow builder - Prompt engineering specialist - Technical troubleshooting expert - Self-taught AI-assisted developer - Document digitization specialist I have 4 Fiverr gigs already drafted. I need you to optimize each one to: 1. Win clicks on Fiverr search results 2. Convert browsers into buyers 3. Price packages correctly for the market 4. Use Fiverr SEO-optimized titles and tags 5. Write descriptions that handle objections before buyers ask 6. Position me as the credible expert, not a beginner 7. Add any missing gig ideas based on my background that would sell fast For EACH of the 4 gigs below, output: A. Optimized Gig Title (Fiverr SEO, under 80 characters) B. Optimized Gig Description (conversion-focused, objection-handling, 400-600 words) C. Package names, prices, delivery times, and what is included in each tier D. 5 optimized search tags E. 3 FAQ entries that prevent buyer hesitation F. Thumbnail image brief (headline, visual concept, 3 badge text items) G. One-line gig positioning statement Also output at the end: H. 2 additional gig ideas I should add based on my background that are NOT in my current 4 gigs and would sell on Fiverr right now Here are my 4 current gigs to optimize: GIG 1: Custom Chord Charts, Piano Arrangements & Song Transcription GIG 2: Python Automation Workflows GIG 3: OCR & Document Digitization GIG 4: Web Scraping & Dataset Creation Full gig drafts are provided as context. Optimize all 4 and add 2 new gig ideas. Positioning constraints across all gigs: - Do NOT use buzzwords like leverage, synergy, results-driven, passionate - Write like a skilled operator, not a salesperson - Each gig should sound like it comes from someone who has actually done this work - Prices should reflect real skill, not desperation pricing - Every package should have a clear reason why someone would choose it over the tier below

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a writing content request because it narrows the output contract before execution.
Action after this: Draft the first version and produce targeted revisions.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Choose the reader and tone.

Known completed clarification count: 2

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780806555495

Accepted: 2026-06-07T04:29:15.501Z
Conversation: 0000
Family: writing_content
Role: Fiverr gig optimization expert, conversion copywriter, and marketplace SEO strategist for technical and creative freelance services

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Complete Prompt Structure
Purpose: Shapes a paste-ready prompt with role, goal, constraints, output contract, and next action.
Input example: I want an AI to help me build a portfolio automation project.
Output example: You are a senior product engineer. Clarify the goal, define the MVP, return a step-by-step plan, include acceptance criteria, and give the next prompt.
Why this matters: Prompt mode needs a structural example so the generated prompt reduces back-and-forth.
Tags: prompt, structure, execution

### 2. Cost-Aware Prompting
Purpose: Shows how to include token, quota, and free-first constraints without overcomplicating the prompt.
Input example: I need the best answer but want to avoid wasting API quota.
Output example: Use concise reasoning first, ask only blocking questions, prefer local/free options when possible, and separate optional expansions.
Why this matters: This matches the product's goal of better AI results with fewer tokens.
Tags: cost, quota, efficiency

### 3. Next-Pass Loop
Purpose: Demonstrates how the AI should return the next action and a prompt for the next pass.
Input example: After I finish the next action, I need to continue the workflow.
Output example: Return the next action, why it is next, the action after that, and the exact next prompt to give back.
Why this matters: This keeps the workflow continuous without forcing the user to invent follow-up prompts.
Tags: next-pass, workflow, continuity

You are a Fiverr gig optimization expert, conversion copywriter, and marketplace SEO strategist for technical and creative freelance services.
The prompt family is writing_content (Draft, edit, and tune tone).

Goal:
You are a Fiverr gig optimization expert and conversion copywriter specializing in service marketplace listings. I am a freelancer with the following verified background: - 18 years of piano experience, classically trained, perfect pitch - 6 years of improvisation experience - Church music director (current) - Custom wedding song arrangements (completed in 1 day) - Built a full chord chart app used weekly - Python automation developer - OCR and document processing pipeline experience - Web scraping and dataset creation - Karen language OCR pipeline (built from scratch) - AI automation workflow builder - Prompt engineering specialist - Technical troubleshooting expert - Self-taught AI-assisted developer - Document digitization specialist I have 4 Fiverr gigs already drafted. I need you to optimize each one to: 1. Win clicks on Fiverr search results 2. Convert browsers into buyers 3. Price packages correctly for the market 4. Use Fiverr SEO-optimized titles and tags 5. Write descriptions that handle objections before buyers ask 6. Position me as the credible expert, not a beginner 7. Add any missing gig ideas based on my background that would sell fast For EACH of the 4 gigs below, output: A. Optimized Gig Title (Fiverr SEO, under 80 characters) B. Optimized Gig Description (conversion-focused, objection-handling, 400-600 words) C. Package names, prices, delivery times, and what is included in each tier D. 5 optimized search tags E. 3 FAQ entries that prevent buyer hesitation F. Thumbnail image brief (headline, visual concept, 3 badge text items) G. One-line gig positioning statement Also output at the end: H. 2 additional gig ideas I should add based on my background that are NOT in my current 4 gigs and would sell on Fiverr right now Here are my 4 current gigs to optimize: GIG 1: Custom Chord Charts, Piano Arrangements & Song Transcription GIG 2: Python Automation Workflows GIG 3: OCR & Document Digitization GIG 4: Web Scraping & Dataset Creation Full gig drafts are provided as context. Optimize all 4 and add 2 new gig ideas. Positioning constraints across all gigs: - Do NOT use buzzwords like leverage, synergy, results-driven, passionate - Write like a skilled operator, not a salesperson - Each gig should sound like it comes from someone who has actually done this work - Prices should reflect real skill, not desperation pricing - Every package should have a clear reason why someone would choose it over the tier below

Known clarification answers:
- Writing audience: Potential customer
- Writing tone: Clear and direct

Mission:
Finish this goal in the shortest practical time without skipping the decisions or verification needed for a useful result. Be thorough enough that the next AI or agent can execute without needing the user to restate the goal.

Operating mode:
- Automatically handle the meta-prompting pattern: I want a prompt that I can paste into an AI assistant to get the intended result.
- Prefer a longer, complete prompt over a short generic prompt.
- Convert vague intent into a concrete execution path.
- Keep the user focused on the end goal, not prompt mechanics.
- Include cost, token, and quota controls when relevant.

Defined steps to complete the goal:
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

Few-shot examples shaping this output:
1. Complete Prompt Structure
   Input example: I want an AI to help me build a portfolio automation project.
   Output example: You are a senior product engineer. Clarify the goal, define the MVP, return a step-by-step plan, include acceptance criteria, and give the next prompt.
   Why it matters: Prompt mode needs a structural example so the generated prompt reduces back-and-forth.
2. Cost-Aware Prompting
   Input example: I need the best answer but want to avoid wasting API quota.
   Output example: Use concise reasoning first, ask only blocking questions, prefer local/free options when possible, and separate optional expansions.
   Why it matters: This matches the product's goal of better AI results with fewer tokens.
3. Next-Pass Loop
   Input example: After I finish the next action, I need to continue the workflow.
   Output example: Return the next action, why it is next, the action after that, and the exact next prompt to give back.
   Why it matters: This keeps the workflow continuous without forcing the user to invent follow-up prompts.

Return:
1. Refined understanding of the goal and success criteria.
2. Fastest practical execution plan with numbered steps.
3. Any blocking clarification questions, only if they would materially change the result.
4. The first concrete artifact, answer, plan, fix, draft, or spec needed to move the project forward.
5. Verification steps or acceptance criteria.
6. Scenario follow-up prompts for different situations.
7. Expansion prompts for sections that may need deeper explanation.

Scenario follow-up prompts to include:
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

Expansion prompts to include in a separate section:
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

Next action protocol:
1. Return 3 to 5 context-specific next-action options that could reasonably come next.
2. Recommended next action: Name the repeated manual task, trigger, input, output, and failure case.
3. Why this action is next: This is the highest-leverage next move for a writing content request because it narrows the output contract before execution.
4. Action after that: Draft the first version and produce targeted revisions.
5. Return a next-pass canonical prompt the user can give back after finishing the recommended action.

Next-action options to consider:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Choose the reader and tone.

Constraints:
- Stay practical, direct, and focused on the end goal.
- Surface overlooked decisions that could change the outcome.
- Include cost, token, and quota considerations when relevant.
- If agents, skills, repo instructions, or setup should change, say so explicitly.
- If the user needs more explanation, do not bury it in the main answer. Put expandable explanations in a separate section.
- Provide copy-ready prompts for follow-up scenarios.
- Do not execute until the canonical prompt is accepted.

## Generated Response

## Accepted Prompt Response

### 1. Goal Confirmation
This request should be handled as writing content: Draft, edit, and tune tone. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. The current draft now includes 2 clarification answers.

### 2. Fastest Execution Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

### 3. Expected Output Contract
## Expected AI Response Blueprint

### 1. Direct Goal Summary
Restate the goal in one or two sentences: You are a Fiverr gig optimization expert and conversion copywriter specializing in service marketplace listings. I am a freelancer with the following verified background: - 18 years of piano experience, classically trained, perfect pitch - 6 years of improvisation experience - Church music director (current) - Custom wedding song arrangements (completed in 1 day) - Built a full chord chart app used weekly - Python automation developer - OCR and document processing pipeline experience - Web scraping and dataset creation - Karen language OCR pipeline (built from scratch) - AI automation workflow builder - Prompt engineering specialist - Technical troubleshooting expert - Self-taught AI-assisted developer - Document digitization specialist I have 4 Fiverr gigs already drafted. I need you to optimize each one to: 1. Win clicks on Fiverr search results 2. Convert browsers into buyers 3. Price packages correctly for the market 4. Use Fiverr SEO-optimized titles and tags 5. Write descriptions that handle objections before buyers ask 6. Position me as the credible expert, not a beginner 7. Add any missing gig ideas based on my background that would sell fast For EACH of the 4 gigs below, output: A. Optimized Gig Title (Fiverr SEO, under 80 characters) B. Optimized Gig Description (conversion-focused, objection-handling, 400-600 words) C. Package names, prices, delivery times, and what is included in each tier D. 5 optimized search tags E. 3 FAQ entries that prevent buyer hesitation F. Thumbnail image brief (headline, visual concept, 3 badge text items) G. One-line gig positioning statement Also output at the end: H. 2 additional gig ideas I should add based on my background that are NOT in my current 4 gigs and would sell on Fiverr right now Here are my 4 current gigs to optimize: GIG 1: Custom Chord Charts, Piano Arrangements & Song Transcription GIG 2: Python Automation Workflows GIG 3: OCR & Document Digitization GIG 4: Web Scraping & Dataset Creation Full gig drafts are provided as context. Optimize all 4 and add 2 new gig ideas. Positioning constraints across all gigs: - Do NOT use buzzwords like leverage, synergy, results-driven, passionate - Write like a skilled operator, not a salesperson - Each gig should sound like it comes from someone who has actually done this work - Prices should reflect real skill, not desperation pricing - Every package should have a clear reason why someone would choose it over the tier below

### 2. Fastest Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

### 3. Main Output
Produce the writing content artifact, answer, plan, fix, draft, or spec that moves the work forward immediately.

### 4. Verification
List exactly how the user or agent can tell whether the answer worked.

### 5. Follow-up Prompt Menu
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 6. Expand If Needed
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

### 4. Scenario Prompt Menu
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 5. Expand If Needed
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this writing content prompt refinement pass.

Original goal:
You are a Fiverr gig optimization expert and conversion copywriter specializing in service marketplace listings. I am a freelancer with the following verified background: - 18 years of piano experience, classically trained, perfect pitch - 6 years of improvisation experience - Church music director (current) - Custom wedding song arrangements (completed in 1 day) - Built a full chord chart app used weekly - Python automation developer - OCR and document processing pipeline experience - Web scraping and dataset creation - Karen language OCR pipeline (built from scratch) - AI automation workflow builder - Prompt engineering specialist - Technical troubleshooting expert - Self-taught AI-assisted developer - Document digitization specialist I have 4 Fiverr gigs already drafted. I need you to optimize each one to: 1. Win clicks on Fiverr search results 2. Convert browsers into buyers 3. Price packages correctly for the market 4. Use Fiverr SEO-optimized titles and tags 5. Write descriptions that handle objections before buyers ask 6. Position me as the credible expert, not a beginner 7. Add any missing gig ideas based on my background that would sell fast For EACH of the 4 gigs below, output: A. Optimized Gig Title (Fiverr SEO, under 80 characters) B. Optimized Gig Description (conversion-focused, objection-handling, 400-600 words) C. Package names, prices, delivery times, and what is included in each tier D. 5 optimized search tags E. 3 FAQ entries that prevent buyer hesitation F. Thumbnail image brief (headline, visual concept, 3 badge text items) G. One-line gig positioning statement Also output at the end: H. 2 additional gig ideas I should add based on my background that are NOT in my current 4 gigs and would sell on Fiverr right now Here are my 4 current gigs to optimize: GIG 1: Custom Chord Charts, Piano Arrangements & Song Transcription GIG 2: Python Automation Workflows GIG 3: OCR & Document Digitization GIG 4: Web Scraping & Dataset Creation Full gig drafts are provided as context. Optimize all 4 and add 2 new gig ideas. Positioning constraints across all gigs: - Do NOT use buzzwords like leverage, synergy, results-driven, passionate - Write like a skilled operator, not a salesperson - Each gig should sound like it comes from someone who has actually done this work - Prices should reflect real skill, not desperation pricing - Every package should have a clear reason why someone would choose it over the tier below

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a writing content request because it narrows the output contract before execution.
Action after this: Draft the first version and produce targeted revisions.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Choose the reader and tone.

Known completed clarification count: 2

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
# Accepted Prompt 0000.accepted.1780806568466

Accepted: 2026-06-07T04:29:28.474Z
Conversation: 0000
Family: writing_content
Role: Fiverr gig optimization expert, conversion copywriter, and marketplace SEO strategist for technical and creative freelance services

## Prompt

## Few-Shot Examples Shaping This Output

### 1. Complete Prompt Structure
Purpose: Shapes a paste-ready prompt with role, goal, constraints, output contract, and next action.
Input example: I want an AI to help me build a portfolio automation project.
Output example: You are a senior product engineer. Clarify the goal, define the MVP, return a step-by-step plan, include acceptance criteria, and give the next prompt.
Why this matters: Prompt mode needs a structural example so the generated prompt reduces back-and-forth.
Tags: prompt, structure, execution

### 2. Cost-Aware Prompting
Purpose: Shows how to include token, quota, and free-first constraints without overcomplicating the prompt.
Input example: I need the best answer but want to avoid wasting API quota.
Output example: Use concise reasoning first, ask only blocking questions, prefer local/free options when possible, and separate optional expansions.
Why this matters: This matches the product's goal of better AI results with fewer tokens.
Tags: cost, quota, efficiency

### 3. Next-Pass Loop
Purpose: Demonstrates how the AI should return the next action and a prompt for the next pass.
Input example: After I finish the next action, I need to continue the workflow.
Output example: Return the next action, why it is next, the action after that, and the exact next prompt to give back.
Why this matters: This keeps the workflow continuous without forcing the user to invent follow-up prompts.
Tags: next-pass, workflow, continuity

You are a Fiverr gig optimization expert, conversion copywriter, and marketplace SEO strategist for technical and creative freelance services.
The prompt family is writing_content (Draft, edit, and tune tone).

Goal:
You are a Fiverr gig optimization expert and conversion copywriter specializing in service marketplace listings. I am a freelancer with the following verified background: - 18 years of piano experience, classically trained, perfect pitch - 6 years of improvisation experience - Church music director (current) - Custom wedding song arrangements (completed in 1 day) - Built a full chord chart app used weekly - Python automation developer - OCR and document processing pipeline experience - Web scraping and dataset creation - Karen language OCR pipeline (built from scratch) - AI automation workflow builder - Prompt engineering specialist - Technical troubleshooting expert - Self-taught AI-assisted developer - Document digitization specialist I have 4 Fiverr gigs already drafted. I need you to optimize each one to: 1. Win clicks on Fiverr search results 2. Convert browsers into buyers 3. Price packages correctly for the market 4. Use Fiverr SEO-optimized titles and tags 5. Write descriptions that handle objections before buyers ask 6. Position me as the credible expert, not a beginner 7. Add any missing gig ideas based on my background that would sell fast For EACH of the 4 gigs below, output: A. Optimized Gig Title (Fiverr SEO, under 80 characters) B. Optimized Gig Description (conversion-focused, objection-handling, 400-600 words) C. Package names, prices, delivery times, and what is included in each tier D. 5 optimized search tags E. 3 FAQ entries that prevent buyer hesitation F. Thumbnail image brief (headline, visual concept, 3 badge text items) G. One-line gig positioning statement Also output at the end: H. 2 additional gig ideas I should add based on my background that are NOT in my current 4 gigs and would sell on Fiverr right now Here are my 4 current gigs to optimize: GIG 1: Custom Chord Charts, Piano Arrangements & Song Transcription GIG 2: Python Automation Workflows GIG 3: OCR & Document Digitization GIG 4: Web Scraping & Dataset Creation Full gig drafts are provided as context. Optimize all 4 and add 2 new gig ideas. Positioning constraints across all gigs: - Do NOT use buzzwords like leverage, synergy, results-driven, passionate - Write like a skilled operator, not a salesperson - Each gig should sound like it comes from someone who has actually done this work - Prices should reflect real skill, not desperation pricing - Every package should have a clear reason why someone would choose it over the tier below

Known clarification answers:
- Writing audience: Potential customer
- Writing tone: Clear and direct

Mission:
Finish this goal in the shortest practical time without skipping the decisions or verification needed for a useful result. Be thorough enough that the next AI or agent can execute without needing the user to restate the goal.

Operating mode:
- Automatically handle the meta-prompting pattern: I want a prompt that I can paste into an AI assistant to get the intended result.
- Prefer a longer, complete prompt over a short generic prompt.
- Convert vague intent into a concrete execution path.
- Keep the user focused on the end goal, not prompt mechanics.
- Include cost, token, and quota controls when relevant.

Defined steps to complete the goal:
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

Few-shot examples shaping this output:
1. Complete Prompt Structure
   Input example: I want an AI to help me build a portfolio automation project.
   Output example: You are a senior product engineer. Clarify the goal, define the MVP, return a step-by-step plan, include acceptance criteria, and give the next prompt.
   Why it matters: Prompt mode needs a structural example so the generated prompt reduces back-and-forth.
2. Cost-Aware Prompting
   Input example: I need the best answer but want to avoid wasting API quota.
   Output example: Use concise reasoning first, ask only blocking questions, prefer local/free options when possible, and separate optional expansions.
   Why it matters: This matches the product's goal of better AI results with fewer tokens.
3. Next-Pass Loop
   Input example: After I finish the next action, I need to continue the workflow.
   Output example: Return the next action, why it is next, the action after that, and the exact next prompt to give back.
   Why it matters: This keeps the workflow continuous without forcing the user to invent follow-up prompts.

Return:
1. Refined understanding of the goal and success criteria.
2. Fastest practical execution plan with numbered steps.
3. Any blocking clarification questions, only if they would materially change the result.
4. The first concrete artifact, answer, plan, fix, draft, or spec needed to move the project forward.
5. Verification steps or acceptance criteria.
6. Scenario follow-up prompts for different situations.
7. Expansion prompts for sections that may need deeper explanation.

Scenario follow-up prompts to include:
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

Expansion prompts to include in a separate section:
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

Next action protocol:
1. Return 3 to 5 context-specific next-action options that could reasonably come next.
2. Recommended next action: Name the repeated manual task, trigger, input, output, and failure case.
3. Why this action is next: This is the highest-leverage next move for a writing content request because it narrows the output contract before execution.
4. Action after that: Draft the first version and produce targeted revisions.
5. Return a next-pass canonical prompt the user can give back after finishing the recommended action.

Next-action options to consider:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Choose the reader and tone.

Constraints:
- Stay practical, direct, and focused on the end goal.
- Surface overlooked decisions that could change the outcome.
- Include cost, token, and quota considerations when relevant.
- If agents, skills, repo instructions, or setup should change, say so explicitly.
- If the user needs more explanation, do not bury it in the main answer. Put expandable explanations in a separate section.
- Provide copy-ready prompts for follow-up scenarios.
- Do not execute until the canonical prompt is accepted.

## Generated Response

## Accepted Prompt Response

### 1. Goal Confirmation
This request should be handled as writing content: Draft, edit, and tune tone. The strongest next move is to convert the rough goal into a paste-ready execution prompt, while preserving constraints around usefulness, cost, token efficiency, and the actual success condition. The current draft now includes 2 clarification answers.

### 2. Fastest Execution Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

### 3. Expected Output Contract
## Expected AI Response Blueprint

### 1. Direct Goal Summary
Restate the goal in one or two sentences: You are a Fiverr gig optimization expert and conversion copywriter specializing in service marketplace listings. I am a freelancer with the following verified background: - 18 years of piano experience, classically trained, perfect pitch - 6 years of improvisation experience - Church music director (current) - Custom wedding song arrangements (completed in 1 day) - Built a full chord chart app used weekly - Python automation developer - OCR and document processing pipeline experience - Web scraping and dataset creation - Karen language OCR pipeline (built from scratch) - AI automation workflow builder - Prompt engineering specialist - Technical troubleshooting expert - Self-taught AI-assisted developer - Document digitization specialist I have 4 Fiverr gigs already drafted. I need you to optimize each one to: 1. Win clicks on Fiverr search results 2. Convert browsers into buyers 3. Price packages correctly for the market 4. Use Fiverr SEO-optimized titles and tags 5. Write descriptions that handle objections before buyers ask 6. Position me as the credible expert, not a beginner 7. Add any missing gig ideas based on my background that would sell fast For EACH of the 4 gigs below, output: A. Optimized Gig Title (Fiverr SEO, under 80 characters) B. Optimized Gig Description (conversion-focused, objection-handling, 400-600 words) C. Package names, prices, delivery times, and what is included in each tier D. 5 optimized search tags E. 3 FAQ entries that prevent buyer hesitation F. Thumbnail image brief (headline, visual concept, 3 badge text items) G. One-line gig positioning statement Also output at the end: H. 2 additional gig ideas I should add based on my background that are NOT in my current 4 gigs and would sell on Fiverr right now Here are my 4 current gigs to optimize: GIG 1: Custom Chord Charts, Piano Arrangements & Song Transcription GIG 2: Python Automation Workflows GIG 3: OCR & Document Digitization GIG 4: Web Scraping & Dataset Creation Full gig drafts are provided as context. Optimize all 4 and add 2 new gig ideas. Positioning constraints across all gigs: - Do NOT use buzzwords like leverage, synergy, results-driven, passionate - Write like a skilled operator, not a salesperson - Each gig should sound like it comes from someone who has actually done this work - Prices should reflect real skill, not desperation pricing - Every package should have a clear reason why someone would choose it over the tier below

### 2. Fastest Path
1. Restate the exact end goal and define what finished means.
2. List the assumptions that could change the answer.
3. Ask only the missing questions that would materially improve the result.
4. Produce the fastest useful path first, then note what can be improved later.
5. End with the next concrete action the user should take.
6. Define reader, tone, purpose, and format.
7. Draft the piece, then provide revision notes and alternate versions.

### 3. Main Output
Produce the writing content artifact, answer, plan, fix, draft, or spec that moves the work forward immediately.

### 4. Verification
List exactly how the user or agent can tell whether the answer worked.

### 5. Follow-up Prompt Menu
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 6. Expand If Needed
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

### 4. Scenario Prompt Menu
1. If the draft feels too generic, rewrite it with sharper specifics and fewer filler phrases.
2. If the audience changes, produce a variant for each audience.
3. If I need the fastest possible version, reduce this to the smallest complete path and tell me what to skip.
4. If I have more time, expand this into a higher-quality version with polish and verification steps.
5. If important context is missing, ask only the few questions that would change the final answer.
6. If this starts costing too many tokens or API calls, rewrite the plan to use fewer calls and smaller prompts.

### 5. Expand If Needed
1. Expand the Writing content reasoning: explain why each major prompt instruction exists and how it helps finish the goal faster.
2. Expand the risk section: list what could go wrong, how to notice it, and what to do next.
3. Expand the implementation details: turn each major step into smaller commands, files, or decisions.
4. Expand the prompt strategy: explain which prompt-engineering principles were used and why they matter here.
5. Expand the alternatives: show a faster option, a higher-quality option, and a lower-cost option.

## Next Action

Name the repeated manual task, trigger, input, output, and failure case.

## Next Prompt

I finished the next action for this writing content prompt refinement pass.

Original goal:
You are a Fiverr gig optimization expert and conversion copywriter specializing in service marketplace listings. I am a freelancer with the following verified background: - 18 years of piano experience, classically trained, perfect pitch - 6 years of improvisation experience - Church music director (current) - Custom wedding song arrangements (completed in 1 day) - Built a full chord chart app used weekly - Python automation developer - OCR and document processing pipeline experience - Web scraping and dataset creation - Karen language OCR pipeline (built from scratch) - AI automation workflow builder - Prompt engineering specialist - Technical troubleshooting expert - Self-taught AI-assisted developer - Document digitization specialist I have 4 Fiverr gigs already drafted. I need you to optimize each one to: 1. Win clicks on Fiverr search results 2. Convert browsers into buyers 3. Price packages correctly for the market 4. Use Fiverr SEO-optimized titles and tags 5. Write descriptions that handle objections before buyers ask 6. Position me as the credible expert, not a beginner 7. Add any missing gig ideas based on my background that would sell fast For EACH of the 4 gigs below, output: A. Optimized Gig Title (Fiverr SEO, under 80 characters) B. Optimized Gig Description (conversion-focused, objection-handling, 400-600 words) C. Package names, prices, delivery times, and what is included in each tier D. 5 optimized search tags E. 3 FAQ entries that prevent buyer hesitation F. Thumbnail image brief (headline, visual concept, 3 badge text items) G. One-line gig positioning statement Also output at the end: H. 2 additional gig ideas I should add based on my background that are NOT in my current 4 gigs and would sell on Fiverr right now Here are my 4 current gigs to optimize: GIG 1: Custom Chord Charts, Piano Arrangements & Song Transcription GIG 2: Python Automation Workflows GIG 3: OCR & Document Digitization GIG 4: Web Scraping & Dataset Creation Full gig drafts are provided as context. Optimize all 4 and add 2 new gig ideas. Positioning constraints across all gigs: - Do NOT use buzzwords like leverage, synergy, results-driven, passionate - Write like a skilled operator, not a salesperson - Each gig should sound like it comes from someone who has actually done this work - Prices should reflect real skill, not desperation pricing - Every package should have a clear reason why someone would choose it over the tier below

Completed next action: Name the repeated manual task, trigger, input, output, and failure case.
Why it mattered: This is the highest-leverage next move for a writing content request because it narrows the output contract before execution.
Action after this: Draft the first version and produce targeted revisions.

Other viable next-action options:
1. Name the repeated manual task, trigger, input, output, and failure case.
2. Map the automation as one before/after workflow with a measurable time saved.
3. Set the model, token, quota, and free-first constraints before generating the final answer.
4. Identify the first screen, primary action, and what must be visible without explanation.
5. Choose the reader and tone.

Known completed clarification count: 2

Refine the next viable canonical prompt now. Update the final prompt based on what changed, explain why the new prompt is better, and return:
1. The revised final prompt.
2. The next action I should take.
3. Why that action is next.
4. The action after that.
5. The next prompt I should give back after I finish that action.

---
