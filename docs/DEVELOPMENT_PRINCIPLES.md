# Development Principles

This project should be developed like a durable system, not a static picture.

## Operating Standard

- Understand the problem before changing the solution.
- Optimize for correctness, readability, and maintainability before cleverness.
- Treat security and privacy as default operating modes.
- Use fundamentals and simple technology before adding abstractions or dependencies.
- Prove behavior with checks that protect user-facing flows, not implementation trivia.
- Design for failure: broken form destinations, missing content, long content, slow networks, and deployment mistakes.
- Keep the system observable enough to debug: build output, deploy commits, live URL checks, robots/noindex checks, and preview-state notes.
- Prefer boring, static, auditable implementation unless complexity has a clear payoff.
- Review changes seriously: scope, copy accuracy, accessibility, responsive behavior, performance, privacy, and launch risk.
- Communicate decisions plainly: facts, tradeoffs, assumptions, and what remains unproven.
- Treat performance as part of design: bundle size, layout shift, animation cost, and third-party scripts matter.
- Protect data integrity: contact submissions, analytics events, and future backend routes need explicit ownership and validation.
- Keep the business context visible: the site exists to help R&D teams decide whether a screening campaign can answer a material question.
- Use AI or automation only as an accelerator; generated output still needs review, tests, and evidence.

## xemX-Specific Application

- The main user action is sending a material question, not signing up for software.
- The main proof is measured physical work: libraries, composition-property maps, and candidate regions.
- The site should explain decisions, not decorate claims.
- Every application section should say what gets tested, measured, narrowed, or validated.
- Public claims need approval before launch when they involve numbers, facility access, partner routes, or standard deliverables.
- Preview privacy must be described honestly. Client-side encryption plus noindex is useful for review, but not equivalent to host-level authentication.

## Change Review Checklist

Before committing or deploying meaningful changes:

- Does the change serve the primary user intent?
- Does it make the material question, campaign, measurement, or output clearer?
- Does it avoid abstract corporate language?
- Does it preserve accessible navigation, labels, focus behavior, and reduced-motion support?
- Does it work on mobile, tablet, desktop, and wide layouts?
- Does it tolerate long text and non-perfect content?
- Does it keep static-site performance simple?
- Does it avoid adding dependencies without a durable reason?
- Does it preserve privacy/noindex behavior for private previews?
- Did build, lint, browser smoke checks, and live verification run where relevant?
