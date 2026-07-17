# 🚀 Open UI — Prompt Refinery

> Quick-launch reference for the Prompt Refinery web interface.
> Codex: always show the link at the bottom of every response in this project thread.

---

## Start (PowerShell)

```powershell
cd C:\Projects\prompt-refinery
npm install          # first time only
npm run dev
```

## URL

👉 **[http://127.0.0.1:5173/](http://127.0.0.1:5173/)** ← Web UI  
🛠️ **[http://127.0.0.1:8787/](http://127.0.0.1:8787/)** ← File Writer API

## Env Vars

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Optional | Unlocks AI classification; app works free without it |

```powershell
# Set before running if using Gemini:
$env:GEMINI_API_KEY = "AIza..."
npm run dev
```

## All Scripts

```powershell
npm run dev          # ⭐ recommended — starts BOTH UI and file writer
npm run dev:web      # Vite UI only (5173)
npm run dev:api      # File writer API only (8787)
npm run build        # Production build
npm run preview      # Preview production build at 127.0.0.1:4173
npm run typecheck    # TypeScript check only
```

---

> **Codex skill rule:** Every response in this thread must end with:
> `👉 **[Open UI: http://127.0.0.1:5173/](http://127.0.0.1:5173/)** *(run \`npm run dev\` first)*`
