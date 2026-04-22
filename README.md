# GhostClip

Social content agent for Ghost Layer, operated via Claude Code. Posts to TikTok, Instagram, X, LinkedIn, and YouTube 3x/day with founder approval before every post.

**Status:** v0.1 scaffold. Dashboard shell only. No agent logic yet.

This is internal tooling, not a product. The repo is public as a marketing receipt — real code, real stack, real work — not because it's intended for external use.

## What it does

- **Xpoz** pulls trending topics in AI security and adjacent spaces
- **GEMINI-SASS / GEMINI-TEA** (NULL agents) draft scripts against Ghost Layer content templates
- **Pixa** turns dashboard screenshots and stills into short-form video (Kling / Luma / Hailuo models)
- **ElevenLabs** adds voiceover
- Founder approves in the Studio page
- **Publora** publishes across all platforms

NULL agents authenticate via Ghost Gate on exit/re-entry when doing CLIP work. That auth flow is a Ghost Layer / NULL concern — GhostClip consumes the content those agents produce.

## Repo layout

```
ghostclip/
├── agent/        # CLIP agent loop (not built yet)
├── dashboard/    # Next.js UI — Studio, Queue, Analytics, CLIP Log
├── lib/          # Pixa, ElevenLabs, Publora, Xpoz integrations (not built yet)
├── templates/    # Content template implementations (not built yet)
├── scripts/      # Setup, auth, seed (not built yet)
├── README.md
└── .env.example
```

Only `dashboard/` has code. Everything else is a staked directory for Phase 2.

## Local development

```bash
cd dashboard
npm install
npm run dev
```

Then open http://localhost:3000.

## Running the agent

CLIP runs inside Claude Code. Not designed for other runners. Code is public for transparency — the agent loop is built around one specific operational context and won't drop cleanly into yours.

## License

MIT.

---

Built by DrCookies84 under JEFCA LLC.
