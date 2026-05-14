# XemX Agent Guidance

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
- For XemX public copy, avoid generic SaaS headings and claims such as `platform capabilities`, `technology overview`, `where the platform applies`, `complete picture`, `any problem`, and `start a conversation`. Use the buyer's words instead: material system, target property, current test bottleneck, measured output, wafer position, composition range, and next validation step.
- Avoid repeated framework nouns when a concrete object is available. Prefer wafer, composition range, XRD map, resistivity data, accepted txid, wallet prompt, receipt, local reject, or validation sample over vague route/lane/path/story language.

## Required Check

Before finalizing prose changes, run:

```sh
npm run lint:copy
```

If the command fails, rewrite the flagged copy and run it again. Do not leave flagged copy in changed files.
