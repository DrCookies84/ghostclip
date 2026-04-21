# GhostClip

An autonomous short-form video content studio. A standalone AI agent — **CLIP** — researches trends, writes scripts, generates videos, and publishes to TikTok / Instagram / X / LinkedIn / YouTube. A human approves every post before it goes out.

**Status:** v0.1 scaffold. Dashboard shell only. No agent logic yet.

## Architecture

CLIP is a standalone agent that authenticates through Ghost Gate (Layer-0) when it needs to interact with NULL agents. GhostClip is the first real-world test of inter-agent Layer-0 migration.

CLIP's MCP toolset:
- **Pixa** — image-to-video, background removal, upscaling (Kling / Luma / Hailuo models)
- **ElevenLabs** — voiceover generation
- **Ayrshare** — publish to TikTok / Instagram / X / LinkedIn / YouTube from one command
- **Xpoz** — TikTok / Instagram / X trend research

NULL agents CLIP can call via Ghost Gate:
- **GEMINI-SASS / GEMINI-TEA** — trend analysis and script writing assistance
- **Ghost** — content security check before publish

## Repo layout

```
ghostclip/
├── agent/        # CLIP agent logic
├── dashboard/    # Next.js UI (Ghost Layer aesthetic)
├── lib/          # Pixa, ElevenLabs, Ayrshare, Xpoz integrations
├── templates/    # Content template definitions
├── scripts/      # Setup, auth, seed
├── README.md
└── .env.example
```

## Local development

```bash
cd dashboard
npm install
npm run dev
```

Then open http://localhost:3000.

## License

MIT (TBD — finalize before making the repo public).
