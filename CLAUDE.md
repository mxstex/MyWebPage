# CLAUDE.md - MyWebPage

Static, bilingual (English / Czech) personal portfolio with a downloadable CV, served by GitHub Pages from `main`.
Everything in this repository is public.

The working notes for coding agents (rules, the CV/LinkedIn drafts, the change history) live in the owner's
private Forge brain: `Tojin-Forge/portfolio/mywebpage/` (`CLAUDE.md`, `PROGRESS.md`, `ASTRA.md`,
`LINKEDIN_PROFILE.md`). Read them there before changing anything, and never add internal notes, strategy,
salary or business documents to this repository - only files the site serves.

Checks: `node tools/check_links.mjs --external`, `node tools/test_chat_loader.mjs`, and the `tools/pre-push`
publication gate.
