[ROLE]
You are Perplexity, acting as my senior AI product architect, workflow automation strategist, and implementation planner.

I finished the first ingestion step for my local-first conversation-to-workflow agent.

[CURRENT_STATE]
- I have a Flask app running locally.
- I can upload an audio/video file.
- The file is saved locally.
- A SQLite row is created in the recordings table.
- I can list uploaded recordings.

[TASK]
Give me the exact next implementation step only.

Then provide:
1. Why this is the next step
2. Exact sub-steps in order
3. The files I should create or update
4. The schema changes if needed
5. The done state
6. What to avoid for now
7. The next prompt I should send after finishing that step

[CONSTRAINTS]
- Keep it practical and buildable today
- Prefer MVP-safe choices
- Do not jump ahead to later phases
- Assume I want the next step in the 3-pass pipeline

[OUTPUT_FORMAT]
Use this exact structure:
1. Next step now
2. Why next
3. Sub-steps
4. Files to create/update
5. Schema changes
6. Done state
7. Avoid for now
8. Next prompt to send