# Infloro — Next.js App Router

This project uses Next.js, TypeScript, and Tailwind CSS (via the configured PostCSS plugin).

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Shared site shell

`src/app/layout.tsx` is the single source of the global navigation and footer. Individual pages must not render their own `<Navbar />` or `<Footer />`; this prevents the duplicate header/footer issue.

## Routes included

- `/` — Landing page
- `/pricing`
- `/features/creator-discovery`
- `/features/creator-crm`
- `/features/deal-management`
- `/features/campaign-management`
- `/features/ugc-content`
- `/features/creator-commerce`
- `/features/analytics`
- `/features/integrations`
- `/solutions/brands`
- `/solutions/agencies`
- `/solutions/freelancers`
- `/solutions/enterprise`
- `/solutions/creators`
- `/creator-marketplace`
- `/creator-marketplace/brand-campaigns`
- `/creator-marketplace/ugc-projects`
- `/creator-marketplace/affiliate-opportunities`
- `/creator-marketplace/how-it-works`
- `/resources`
- `/resources/blog`
- `/resources/guides`
- `/resources/templates`
- `/resources/case-studies`
- `/resources/reports`
- `/resources/webinars`
- `/resources/glossary`
- `/resources/playbooks`
- `/resources/help-center`
- `/resources/case-studies/[slug]`
- `/resources/reports/[slug]`
- `/resources/webinars/[slug]`
- `/resources/glossary/[slug]`
- `/resources/playbooks/[slug]`
- `/resources/[category]/[slug]`
- `/about`, `/contact`, `/privacy-policy`, `/terms`, `/login`, `/get-started`, `/book-a-demo`

## Notes

- Content pages are scaffolded from the supplied Infloro requirements document. Dynamic resource detail pages are templates and need real approved resource content before publishing.
- Integration availability, AI capabilities, customer stories, and legal policy text should only be presented as verified when the corresponding implementation/content is confirmed.
