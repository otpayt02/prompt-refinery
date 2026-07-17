# 📦 Oliver's Projects — Master Run Guide

> **Auto-maintained by Codex.**
> Update this file whenever: a new project is created, a UI/dashboard is added or changed,
> a GitHub Pages URL goes live, or PowerShell startup commands change.
> One entry per project. Keep it current.
>
> Last updated: 2026-07-17

---

## 🧪 prompt-refinery

- **Folder:** `C:\Projects\prompt-refinery\`
- **GitHub:** [https://github.com/otpayt02/prompt-refinery](https://github.com/otpayt02/prompt-refinery)
- **Web UI:** [http://127.0.0.1:5173/](http://127.0.0.1:5173/)
- **File Writer API:** [http://127.0.0.1:8787/](http://127.0.0.1:8787/)
- **Stack:** React + TypeScript + Vite + XState + Node.js
- **Status:** ✅ Active

### Run (PowerShell)

```powershell
cd C:\Projects\prompt-refinery
npm install                       # first time only
$env:GEMINI_API_KEY = "AIza..."  # optional
npm run dev
```

### Notes
- `npm run dev` starts BOTH Vite UI (5173) AND file writer API (8787) via `concurrently`
- Free/offline mode works without the Gemini key
- All artifacts auto-save to `conversations/`, `prompt_library/`, `session_log/`
- See [`OPEN_UI.md`](https://github.com/otpayt02/prompt-refinery/blob/main/OPEN_UI.md) for full launch reference

---

## 🤖 ai-free-update-scrape

- **Folder:** `C:\Projects\ai-free-update-scrape\`
- **GitHub:** [https://github.com/otpayt02/ai-free-update-scrape](https://github.com/otpayt02/ai-free-update-scrape)
- **Web UI:** None (CLI/script tool)
- **Stack:** Python
- **Status:** ✅ Active

### Run (PowerShell)

```powershell
cd C:\Projects\ai-free-update-scrape
pip install -r requirements.txt   # first time
python main.py
```

### Notes
- AI news scraper + free tool ranker + open-source radar
- Powered by Prompt Refinery methodology

---

## 🎵 [Music App / chord-transcription project]

- **Folder:** `C:\Projects\[TODO: confirm folder name]\`
- **GitHub:** [TODO: add repo link]
- **Web UI:** [TODO: confirm if UI exists]
- **Stack:** [TODO: Python / JS]
- **Status:** ⚠️ WIP

### Run (PowerShell)

```powershell
# TODO: Codex — fill in when project structure is confirmed
```

---

## 📤 yt_auto

- **Folder:** `C:\Projects\yt_auto\`
- **GitHub:** [TODO: add repo link if public]
- **Web UI:** None (automation script)
- **Stack:** Python
- **Status:** ⚠️ WIP

### Run (PowerShell)

```powershell
# TODO: Codex — fill in entry point and dependencies
```

---

## 🕸️ karen-scraper-web

- **Folder:** `C:\Projects\karen-scraper-web\`
- **GitHub:** [TODO: add repo link if public]
- **Web UI:** [TODO: confirm]
- **Stack:** Python / JS
- **Status:** ⚠️ WIP

### Run (PowerShell)

```powershell
# TODO: Codex — fill in when confirmed
```

---

## 🤖 CODEX SKILL — Auto-Update Rules

```
CODEX INSTRUCTION — PROJECTS_MASTER_README.md maintenance:

1. Whenever you create a new project directory or repo, append a new entry block
   to PROJECTS_MASTER_README.md using the standard template above.

2. Whenever a UI is added, changed, or a new port is assigned, update the
   relevant entry's URL and Run section.

3. Whenever a GitHub Pages / Sites URL goes live for any project, add it to
   the entry as: Live Site: [URL](URL)

4. Whenever PowerShell startup commands change (new scripts, new entry points,
   new env vars), update the Run block for that project.

5. At the bottom of every response in ANY project thread, if that project has
   a UI or live site URL, append:
      👉 **[Open UI: http://127.0.0.1:PORT/](http://127.0.0.1:PORT/)** *(run `npm run dev` first)*
   OR:
      🌐 **[Live Site: https://...](https://...)** 

6. If a new project exists under C:\Projects\ with no entry here, add a
   [TODO] placeholder entry immediately.
```

---

## Standard Entry Template (copy for new projects)

```markdown
## 📦 [Project Name]

- **Folder:** `C:\Projects\folder-name\`
- **GitHub:** [https://github.com/otpayt02/repo-name](https://github.com/otpayt02/repo-name)
- **Live Site:** [URL if GitHub Pages / Vercel](URL)
- **Web UI:** [http://127.0.0.1:PORT/](http://127.0.0.1:PORT/) ← if local UI exists
- **Stack:** [TypeScript/React/Python/etc.]
- **Status:** ✅ Active / ⚠️ WIP / 📦 Archived

### Run (PowerShell)

```powershell
cd C:\Projects\folder-name
npm install       # or: pip install -r requirements.txt
npm run dev       # or: python main.py
```

### Notes
- Env vars, API keys, config notes
```
