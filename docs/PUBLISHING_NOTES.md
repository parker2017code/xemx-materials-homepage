# xemX Preview Publishing Notes

This mockup is suitable for private review, not final public launch.

Before publishing it as the main public site, run a separate launch pass for:

- Branding: confirm the final CD Manual values. This preview now uses the available xemX SVG mark, Gantari, dark navy `#000030`, violet `#5f37f0`, sky `#9dc3fa`, and sharp UI geometry from the brand material available locally.
- Contact route: replace the `mailto:` form with the real destination or form provider.
- Claims: confirm public wording for numbers, facility access, partner support, and follow-up samples.
- Context authority: for this preview, use the supplied positioning and literature context as the source of truth. Do not treat current-site wording or third-party summaries as canonical copy.
- Navigation: decide whether the hash-routed preview becomes real paths such as `/capabilities`, `/methods`, `/applications`, and `/contact`.
- SEO: write final titles, descriptions, canonical URLs, sitemap, and index rules.
- Privacy: remove preview-only privacy settings if this becomes the public homepage; keep private previews on a host with real access control.
- Analytics: decide whether to add analytics, and keep third-party scripts minimal.
- Accessibility: run keyboard, focus, screen-reader label, contrast, and reduced-motion checks.
- Responsive QA: test mobile, tablet, laptop, and wide desktop layouts with screenshots.
- Performance: check bundle size, font loading, SVG cost, and unused animation code.
- Legal and compliance: add final imprint, privacy policy, terms, and contact/legal details required for a GmbH site.
- Content approval: confirm application wording, validation boundaries, ecosystem support wording, and all technical method names.
- Literature positioning: keep the public hierarchy centered on combinatorial thin-film material libraries, high-throughput characterization, measured composition-property maps, localized electrochemical screening, and data-guided iteration.
- Numeric proof points, such as wafer format, measured compositions, and co-sputtered element counts, should stay only where they are already part of the supplied review context or have been explicitly approved for public use.
- Production deployment: decide between GitHub Pages, Netlify, Vercel, or another host with real access control for private staging.

Current private-preview posture:

- The source repo can stay private.
- The GitHub Pages serving repo must be public on the current setup.
- The deployed preview is a plain static build with noindex robots meta, and `/private-review/` is blocked in `robots.txt`.
- This is not a guarantee against all discovery; real private staging should use host-level authentication such as Cloudflare Access, Netlify password protection, Vercel protection, or server-side basic auth.

Public launch switch:

When Parker says to make the site public and discoverable:

1. Move the build from the private preview path to the real site root or final production path.
2. Remove preview-only `noindex,nofollow` meta tags.
3. Remove `/private-review/` disallow rules if the public page no longer lives there.
4. Add final canonical URL, title, description, Open Graph, and Twitter card metadata.
5. Add `sitemap.xml` and make sure `robots.txt` allows the public URLs.
6. Add an `llms.txt` or equivalent plain summary file with the approved positioning, page map, and contact route.
7. Keep the supplied xemX context as the copy authority unless Parker or xemX leadership provides newer approved wording.
8. Check all links, hash routes, form behavior, favicon, logo rendering, keyboard navigation, mobile layout, and performance.
9. Submit or refresh indexing through Google Search Console and Bing Webmaster Tools if accounts are available.
10. Verify the live page with `curl`, a browser render check, and source sweeps for preview-only language.
