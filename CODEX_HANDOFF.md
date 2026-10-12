# Codex handoff — Keiko Creator Office

This is the existing application, not an empty scaffold. Preserve design and working features.
Source copied from the existing application on 2026-10-12.

## Live site and data
The existing website is privately hosted in Sites; obtain its identity through authorized Sites access.
Production records are in that Site's Cloudflare D1 binding DB. They are NOT in this repository.
No customer records, payments, chat history, keys, runtime state or deployment archives were exported.
Do not assume an empty local database means production data was lost.
Do not seed, overwrite, replace or delete production data. A host migration needs a separate private, complete data export/import and identity mapping.
GitHub updates do not automatically deploy the existing Site. Use its authorized Sites workflow, preserving owner-private access and project identity.
A deployment on another host also needs real authentication and D1 configuration; never trust browser-supplied identity headers. Local mock auth is development-only.

## Existing features
Animated Luna mint bear personal assistant, Mochi rabbit project manager, Kiki cat scriptwriter, Sunny chick strategist. Bright pink pastel office; play/pause motion and reduced-motion handling.
Brand is project name. Separate deal records. Stages: Dealing, Production, Review Brand, Posted.
Each platform delivery is a separate SOW with deadline/status/post URL. TikTok mirrored to Reels means two obligations.
Brand CRUD, board/list, CSV, filters by stage/payment/month and month basis.
Three financial totals; no negotiation pipeline. Confirmed fee, cumulative paid, remaining; separate cash received in selected months.
Immutable input date, editable deal date, timestamped stage history; partial payments by receipt date. Unknown legacy dates not invented.

## AI state
No API key was created or configured. User approved creation, but required secure helper was unavailable in prior session.
Luna/Mochi currently use a deterministic Indonesian command parser. Do not claim free-form model reasoning.
Kiki/Sunny have server-only Responses API code; Sunny uses web search and citation handling. Runtime AI is unverified.
Google Sheets/Drive are not connected.
Continue AI work only with secure credential setup. Never request a key in chat or expose it to frontend.
Finish free-form Luna delegation with validated tools, owner scoping and idempotent writes. Test end-to-end with real AI before declaring success.

## Code map
app/office.tsx, app/globals.css: office and Mochi UI.
app/assistant.tsx, app/api/assistant/route.ts: assistant UI and backend.
lib/assistant-command.ts: existing deterministic commands.
lib/assistant-ai.ts: optional model integration.
lib/model.ts, lib/finance.ts: validation, financial/date rules.
app/api/records/route.ts: scoped CRUD, revisions and server timestamps.
db/schema.ts, drizzle/: D1 schema and existing migrations (preserve).
app/chatgpt-auth.ts: Sites identity integration.

## Development
Vinext/React/TypeScript, Cloudflare Workers/D1; not a plain static site.
See package.json and scripts for pinned package manager and Node requirements. Node 24 used for native TypeScript tests.
Install dependencies using repository scripts or available Sites helpers. Keep pnpm-lock.yaml.
Existing checks:
- node tests/model.test.mjs
- node tests/assistant.test.mjs
- node tests/finance.test.mjs
- node node_modules/typescript/bin/tsc --noEmit
Build: npm run build (environment-specific Sites helper when available).
Prior typecheck/build passed; Safari visual QA and real AI have not been verified.
Do not substitute a static mockup, delete tests, remove auth, or reinitialize the app to bypass setup errors.
