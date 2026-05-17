# xemX Agent Guidance

## Codex Operating Spine

- Codex is the primary agent for this repo. Use `AGENTS.md` as the durable instruction source.
- Claude Code is secondary future compatibility. If `CLAUDE.md` exists, it should import this file instead of carrying a separate rule set.
- Start substantive work by checking `git status --short`, reading the relevant page/component/doc, and identifying the exact buyer, material question, claim boundary, or layout issue before editing.
- Make the smallest coherent patch. Do not rewrite unrelated files, change public routes, or add dependencies without explicit approval.
- Preserve public behavior and review URLs unless the user explicitly asks for a behavior change.
- Do not change lockfiles, package managers, auth, deployment, domain, analytics, or GitHub Pages settings without calling it out before the edit.
- For risky or broad changes, write a short plan before implementation. For narrow defect fixes, inspect first and patch directly.
- After edits, report changed files, commands run, verification result, commit hash, push target, and any remaining risk.
- If a check fails, report the exact command and failure. Fix only failures related to the current task unless the user expands scope.
- For UI/layout changes, verify desktop and mobile behavior with rendered checks or screenshots when possible, and check long material names, method lists, source titles, and metric rows for overflow.
- Before committing, run `npm run lint:copy` for prose changes and `npm run build` for app changes.

## Writing Rules

These rules apply to prose generated or edited in this repo: Markdown, HTML copy, docs, UI copy, comments, PR text, and commit messages.

Do not use these rhetorical contrast patterns unless quoting source text:

- `not X but Y`
- `not just X but Y`
- `not only X but also Y`
- `more than X`
- `isn't merely X`
- `goes beyond X`
- `rather than X, Y`

Rewrite matches as direct positive sentences.

Preferred style:

- Say the concrete thing first.
- Name the actor, action, evidence, status, missing piece, and consequence.
- Avoid motivational, manifesto, brochure, or thought-leadership phrasing.
- Keep product claims tied to a real user, workflow, proof point, or operational requirement.
- For xemX public copy, avoid generic SaaS headings and claims such as `platform capabilities`, `technology overview`, `where the platform applies`, `complete picture`, `any problem`, and `start a conversation`. Use the buyer's words instead: material system, target property, current test bottleneck, measured output, wafer position, composition range, and next validation step.
- Avoid repeated framework nouns when a concrete object is available. Prefer wafer, composition range, XRD map, resistivity data, accepted txid, wallet prompt, receipt, local reject, or validation sample over vague route/lane/path/story language.
- Follow `COPY_STYLE.md` for brand casing, sentence standards, and claim boundaries.

## Required Check

Before finalizing prose changes, run:

```sh
npm run lint:copy
```

If the command fails, rewrite the flagged copy and run it again. Do not leave flagged copy in changed files.
