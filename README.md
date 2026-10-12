# Keiko's Creator Office
Private Sites app. D1 records and assistant conversation/task history are scoped to authenticated ChatGPT identity.

## Assistant
Luna routes deal creation, SOW status edits, and summaries through a deterministic Indonesian command parser. Posted changes require a valid per-platform evidence URL. Per-request claims prevent replayed chat writes. Ambiguous commands ask for details. Command mode is explicitly labeled and does not claim to be model reasoning.

Kiki/Sunny have server-only OpenAI Responses integration. Configure OPENAI_API_KEY securely via the OpenAI Developers skill and Sites runtime secrets; OPENAI_MODEL defaults to gpt-5.5. No key => blocked task persisted, no fabricated AI response. Sunny forces web search and exposes provider citation annotations; a second bounded model request creates validated work output. Script/idea results are saved in user-scoped records. Previous eight completed chat turns provide contextual followups. API calls are capped at 40 chat messages/hour/user, with up to two AI calls per delegated task. Runtime inference and live research have not been verified without a configured API key.

Google apps remain unconnected. No secrets in frontend. Browser QA unavailable in current managed environment.

## Checks
`node tests/model.test.mjs`
`node tests/assistant.test.mjs`
`node node_modules/typescript/bin/tsc --noEmit`
Build/publish using Sites workflow helpers.
