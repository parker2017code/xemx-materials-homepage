# XemX Engineering Checklist

This site should be built as a durable static product surface, not a screenshot.

## Current User Intent

- Primary user: R&D, materials, semiconductor, electrochemistry, coating, or interface teams with too many material variants to test one by one.
- Primary task: explain the material question and ask whether a screening campaign is useful.
- Primary conversion: submit or send a material-question brief.
- Secondary tasks: understand campaign logic, capabilities, methods, applications, example campaign shapes, and validation boundaries.
- De-emphasize: pricing, generic AI/software positioning, generic coating-vendor catalog language, broad claims without a clear measured output.
- Source of truth: the supplied review context and approved internal positioning outrank current-site wording and third-party summaries. Do not import outside wording into this preview.
- Literature-derived hierarchy: core library creation, high-throughput characterization, measured maps, localized electrochemical screening, and data-guided iteration. Application examples can be broad, but production scale-up, CO2 electroreduction, battery SEI or battery-interface claims, and final device/cell/fab validation stay out of the core promise unless confirmed for public use.

## Implementation Standard

- Start with the problem, user intent, constraints, risks, and success criteria before changing UI or code.
- Build components as reusable systems, not one-off page art.
- Use tokens for color, spacing, radius, shadow, and focus behavior where practical.
- Follow the available XemX brand rules: stylized `xemX`, descriptor `materials space exploration`, Gantari, dark technical palette, and sharp UI geometry. The wafer itself can remain circular because it represents the physical sample.
- Every interactive component needs visible focus and predictable keyboard behavior.
- Forms need labels, required states, autocomplete, validation behavior, and a success/fallback path.
- Mobile is not just a shrunken desktop layout. Dense sections must stack, wrap, and avoid horizontal overflow.
- Content must survive long words, long labels, missing optional values, and translated text.
- Motion must clarify and respect reduced-motion settings.
- Public preview performance should stay simple: static HTML/CSS/SVG, limited JavaScript, no stock media, no heavy tracking scripts.
- Privacy posture must be explicit: encrypted preview is acceptable for review, but real private staging needs host-level access control.
- Prefer correctness, clarity, accessibility, security/privacy, performance, and maintainability over clever visual or code tricks.
- Keep the system auditable: document tradeoffs, run checks, verify pushed commits, and verify live URLs when deploying.

## Before Public Launch

- Replace preview `mailto:` behavior with the chosen production contact flow.
- Confirm all claims, method names, ecosystem support wording, and numeric proof points.
- Decide final routing: hash routes for preview or real static paths for public launch.
- Add final legal pages and GmbH-required contact/imprint/privacy details.
- Run keyboard, screen reader label, contrast, reduced-motion, mobile, tablet, desktop, and wide-screen checks.
- Run content stress tests with long company names, long material systems, long target properties, and long method labels.
- Run a performance pass for bundle size, layout shift, font loading, animation cost, and third-party scripts.
- Decide analytics only after defining useful events: campaign CTA clicks, form starts, form completions, page navigation, and method/application interest.

## Current Known Tradeoffs

- The preview uses client-side hash routing for easy static deployment.
- The contact form is static and opens email; production needs a real submission path.
- The encrypted preview hides app content from ordinary crawlers, but the current GitHub Pages serving repo must remain public unless staging moves to a host with real access control.
- The source app repo is private; the deployed encrypted preview file is public because GitHub Pages requires it in this setup.
