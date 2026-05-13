# XemX Preview Publishing Notes

This mockup is suitable for private review, not final public launch.

Before publishing it as the main public site, run a separate launch pass for:

- Contact route: replace the `mailto:` form with the real destination or form provider.
- Claims: confirm public wording for numbers, facility access, partner support, and follow-up samples.
- Navigation: decide whether the hash-routed preview becomes real paths such as `/capabilities`, `/methods`, `/applications`, and `/contact`.
- SEO: write final titles, descriptions, canonical URLs, sitemap, and index rules.
- Privacy: remove preview-only password gate decisions if this becomes the public homepage; keep private previews gated.
- Analytics: decide whether to add analytics, and keep third-party scripts minimal.
- Accessibility: run keyboard, focus, screen-reader label, contrast, and reduced-motion checks.
- Responsive QA: test mobile, tablet, laptop, and wide desktop layouts with screenshots.
- Performance: check bundle size, font loading, SVG cost, and unused animation code.
- Legal and compliance: add final imprint, privacy policy, terms, and contact/legal details required for a GmbH site.
- Content approval: confirm application wording, validation boundaries, ecosystem support wording, and all technical method names.
- Production deployment: decide between GitHub Pages, Netlify, Vercel, or another host with real access control for private staging.

Current private-preview posture:

- The source repo can stay private.
- The GitHub Pages serving repo must be public on the current setup.
- The deployed preview HTML contains an encrypted app payload, noindex robots meta, and `/private-review/` is blocked in `robots.txt`.
- This is not a guarantee against all discovery; real private staging should use host-level authentication such as Cloudflare Access, Netlify password protection, Vercel protection, or server-side basic auth.
