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

## Required Check

Before finalizing prose changes, run:

```sh
npm run lint:copy
```

If the command fails, rewrite the flagged copy and run it again. Do not leave flagged copy in changed files.
