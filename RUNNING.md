# Running Prompt Refinery

```powershell
npm install
npm run dev
```

The app runs at `http://127.0.0.1:5173/`.

The local file writer API runs at `http://127.0.0.1:8787/` and writes prompt artifacts into:

- `conversations/`
- `clarification_templates/`
- `critique_templates/`
- `prompt_library/`
- `session_log/`

The MVP works for free with the local deterministic prompt engine. To enable the first real provider path, set `GEMINI_API_KEY` in your shell or `.env` before starting the API.
