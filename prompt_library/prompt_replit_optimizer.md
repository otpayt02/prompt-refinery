# Prompt: Replit Project Optimizer



I'm connecting my GitHub repository to this project. Please pull the full codebase and perform a comprehensive UI/UX redesign and code cleanup. Here are your instructions:



\---



🎯 GOAL: Redesign the app to be beautiful, consistent, mobile-first, and production-ready. Do NOT rewrite the core business logic — only improve the design, layout, theme consistency, responsiveness, and remove redundant code.



\---



🎨 UI/UX REDESIGN REQUIREMENTS:



1\. THEME \& COLORS

&#x20;  - Audit ALL colors currently used across the entire app — consolidate them into a single, cohesive design system (CSS variables or a Tailwind config theme)

&#x20;  - Choose one clean, modern color palette (dark mode preferred, or a polished light theme — your call, but be consistent)

&#x20;  - No more mixed themes, random hex values inline, or conflicting color schemes across pages/components



2\. TYPOGRAPHY

&#x20;  - Pick one primary font and one accent/heading font (Google Fonts is fine)

&#x20;  - Apply consistent font sizes, weights, and line heights using a clear type scale

&#x20;  - Remove any inconsistent font overrides scattered throughout the code



3\. COMPONENT CONSISTENCY

&#x20;  - All buttons should look and behave the same — standardize padding, border-radius, hover/active states

&#x20;  - Cards, modals, inputs, and panels should follow one unified style

&#x20;  - Remove any duplicated component definitions that do the same thing differently



4\. LAYOUT \& RESPONSIVENESS

&#x20;  - Make the entire app fully responsive and mobile-friendly (375px and up)

&#x20;  - Use flexbox/grid properly — no fixed pixel widths that break on small screens

&#x20;  - Navigation should collapse into a hamburger menu or bottom nav on mobile

&#x20;  - Generous padding and touch-friendly tap targets on mobile (minimum 44px)



5\. SPACING \& VISUAL HIERARCHY

&#x20;  - Apply consistent spacing using a spacing scale (8px base unit recommended)

&#x20;  - Use clear visual hierarchy so users know what to look at first

&#x20;  - Remove clutter — if something doesn't need to be visible all the time, hide it or collapse it



\---



🐛 DEBUGGING \& CODE QUALITY:



6\. Fix any visible UI bugs (broken layouts, overflow issues, misaligned elements, z-index conflicts)

7\. Remove redundant or duplicate CSS/styles (consolidate into shared classes)

8\. Remove dead code — unused components, imports, or variables

9\. Ensure all interactive elements (buttons, links, forms) have proper hover, focus, and disabled states

10\. Make sure images and icons scale correctly and don't break layout



\---



📱 MOBILE-FIRST PRIORITIES:

\- The app must look great and be fully usable on a phone

\- Touch targets must be large enough

\- No horizontal scrolling on mobile

\- Forms and inputs should be easy to use on a touchscreen keyboard



\---



⚠️ CONSTRAINTS:

\- Do NOT change the core logic, data flow, API calls, or business rules

\- Do NOT rename or restructure files unless absolutely necessary for the redesign

\- Keep all existing functionality working exactly as it does now

\- If you're unsure about a logic change, leave it alone and flag it in a comment



\---



Once complete, give me a summary of:

\- What design system/tokens you created

\- Which components were consolidated

\- What bugs were fixed

\- Any logic areas you flagged but did not touch



\---



📋 APP CONTEXT \& FULL FEATURE SPEC:

This is a Karen Music Director Web App — a chord chart editor and song management tool built for a church youth and kids music ministry. The users are S'gaw Karen speakers and English speakers. Here is the complete feature spec the app must support:



\---



🎵 CORE FEATURE 1 — CHORD CHART EDITOR (Primary Screen)

\- A paper-style chart editor that renders a song as a printable page (816px wide, 1056px min-height, like an 8.5x11 sheet)

\- Songs are organized into SECTIONS (Intro, Verse, Chorus, Bridge, Solo, Ending)

\- Each section contains MEASURES and each measure contains BEATS

\- Each beat can hold: a chord root, chord type, bass note modifier, lead melody note(s)

\- Chord display must use monospace font, black text, properly visible at all times

\- Section headers styled as dashed monospace headers

\- Thin invisible insert lines with a centered + appear between sections on hover — clicking them opens the Add Section modal at that insert position

\- The modal must open reliably both via Enter key and clicking the + section lines

\- A #focus-trap input keeps keyboard focus in the editor so all keyboard shortcuts work



🎹 CORE FEATURE 2 — KAREN KEYBOARD FLAP

\- A slide-up S'gaw Karen Unicode keyboard panel anchored to the bottom of the screen

\- Keys are grouped into: Consonants / Vowels / Medials / Tones \& Marks / Numbers

\- Uses flex-wrap layout, compact key sizing (font-size \~0.82em, padding 4px 7px)

\- Max-height 50vh, scrollable vertically

\- X close button uses stopPropagation so it closes instead of reopens

\- The flap should remain accessible even when the sidebar is collapsed



🌐 CORE FEATURE 3 — BILINGUAL UI (S'gaw Karen + English)

\- A language picker modal appears on first load — user picks English or S'gaw Karen

\- All visible UI strings (sidebar labels, button text, shortcuts list, wizard steps) must come from a single TRANSLATIONS object keyed by language

\- Post-picker, a small minimal toggle lets users switch between Karen and English at any time

\- Karen Unicode range: U+1000–U+109F — use this to detect Karen vs English text



🧙 CORE FEATURE 4 — NEW SONG WIZARD (Guided + Quick modes)

\- A wizard modal overlay for creating a new song with fields: Song Title, Category, Style, Tempo, Time Signature, Key, Instruments

\- Quick mode: fast single-screen entry

\- Guided mode: step-by-step (4 steps total, WIZARD\_TOTAL\_STEPS = 4)

\- After wizard completes or is skipped, focus MUST return to #focus-trap

\- Instruments should use a SHARED checklist component (not separate select/input per wizard mode) that produces abbreviations like "AGT \& EGT Only" for the span labels



📋 CORE FEATURE 5 — SIDEBAR SONG METADATA

\- Collapsible sidebar with fields: Song Title, Category, Style, Tempo, Time Signature, Key, Instruments

\- Instruments field must be a unified multi-select checklist component consistent across sidebar and both wizard modes

\- Sidebar can be toggled open/closed; a sidebar-closed state hides the Karen flap unless decoupled



🎼 CORE FEATURE 6 — LEAD MELODY MODAL (Tab System)

\- A lead melody editor modal with tabs 1–3 for entering lead notes per beat

\- Keyboard navigation between tabs must work: Tab key switches tabs, arrow keys navigate within

\- Lead note slots are configurable (default: 4 slots per beat)



🖨️ CORE FEATURE 7 — PRINT / PAPER LAYOUT

\- Paper header: shows Song Title, Tempo, Key, Time Signature metadata

\- Paper footer: left side = song info, right side = page info

\- Chart must be printable and look like a real printed sheet music chart

\- Font for chords: 'Courier New', Courier, monospace — color always #000000



🔁 CORE FEATURE 8 — UNDO / REDO

\- Full undo/redo history using state snapshots stored in state.history\[]

\- Keyboard shortcuts: Ctrl+Z (undo), Ctrl+Y or Ctrl+Shift+Z (redo)



🌐 CORE FEATURE 9 — TRANSLATION TOOLS (Separate Page/Tab)

\- A batch translation tool: upload translations\_website.txt, auto-translate blank entries

\- Scrapes Glosbe (English→S'gaw Karen) with Drum Publications as fallback

\- Smart language detection: checks for Karen Unicode before deciding search direction

\- For untranslatable UI terms, generates compound Karen definitions using grammar connectors:

&#x20; - "its" = အ, "of/for/to" = လၢ, "and/with" = ဒီ, "a/the" = တၢ်, "that/which" = လၢအ

\- All translation attempts logged to a JSON metadata file (attempts, sources tried, result)

\- Translation cache to avoid duplicate web lookups

\- UI: clean upload dropzone + download button for the updated file



\---



🎨 DESIGN SYSTEM REQUIREMENTS (specific to this app):



COLOR PALETTE — Choose one of:

&#x20; Option A (Recommended): Dark theme — deep navy/charcoal background (#1a1a2e or similar), purple accent (#bb86fc), white text, black paper chart area

&#x20; Option B: Clean light theme — white background, deep navy text, coral or teal accent



TYPOGRAPHY:

&#x20; - UI labels + controls: a clean sans-serif (Inter, Nunito, or similar)

&#x20; - Chord chart paper area: 'Courier New', Courier, monospace (non-negotiable — this is sheet music)

&#x20; - Karen Unicode text must render properly — use a system font stack that includes Myanmar/Karen script support



COMPONENT STANDARDS:

&#x20; - All modals use classList.add("open") / classList.remove("open") + style.display to open/close (NEVER style.display alone — both must be set)

&#x20; - All buttons: consistent padding, border-radius 6px, hover/active/disabled states

&#x20; - Focus states must be visible (outline) for accessibility

&#x20; - Mobile: bottom nav or hamburger for sidebar, touch-friendly buttons (min 44px tap targets)



\---



⚠️ DO NOT CHANGE:

\- The state object structure (sections, measures, beats, history, currentSectionIdx, etc.)

\- The TRANSLATIONS object format

\- The Karen Unicode keyboard character arrays (KAREN\_LAYOUT, ALT\_MAP)

\- Any API routes in app.py

\- The core chord/beat/section data model

