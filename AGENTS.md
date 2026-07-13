<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Website Template Agent Rules

Use `website-builder-pro` for website creation, redesign, audit, SEO, accessibility, legal/RGPD, responsive, performance, security, publication, and maintenance work.

## Template Neutrality

- Keep this repository reusable and neutral.
- Do not add fictional businesses, testimonials, metrics, addresses, prices, legal identities, clients, awards, certifications, or brand-specific visual systems.
- Put project-specific data in `src/config` and `src/content`.
- Keep public copy generic until real project information is supplied.
- Do not add API keys, secrets, `.env` files, analytics IDs, CRM IDs, payment keys, or deployment credentials.
- Do not use decorative 21st.dev components in the base template.

## Architecture

- Use the Next.js App Router in `src/app`.
- Use server components by default.
- Put shared layout components in `src/components/layout`.
- Put reusable UI primitives in `src/components/ui`.
- Put section-level components in `src/components/sections`.
- Put structured content in `src/content`.
- Put project settings in `src/config`.
- Keep durable methodology and handoff notes in `docs`.
- Keep design-system artifacts in `design-system`.

## Quality Gates

Before handoff, run `npm run lint` and `npm run build`.

Check that:

- metadata, robots, sitemap, language, and 404 basics are present;
- pages remain responsive without horizontal overflow;
- focus states are visible and keyboard navigation is coherent;
- motion respects `prefers-reduced-motion`;
- legal and RGPD pages are prepared without invented legal facts;
- `.gitignore` excludes secrets, build output, dependencies, caches, logs, and deployment folders.
