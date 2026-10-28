import Link from "next/link";

const content = [
"Hero section",
"Whether you're learning about the platform or looking for guidance on a specific task, start here.",
"Important: Product-specific answers must be verified against the current Infloro product and documentation before publication.",
"Help center search",
"Placeholder: What can we help you find?",
"Button: Search Help Articles",
"Help categories",
"Getting Started",
"Find introductory information about account setup, workspace configuration, and the initial steps supported by Infloro.",
"Creator Discovery",
"Learn about the creator discovery capabilities available in your plan and how to use the supported search or evaluation workflows.",
"Campaign Management",
"Explore documentation for campaign organization, briefs, deliverables, and workflow management, where available.",
"UGC & Content",
"Find information about content workflows, review processes, and permissions relevant to your setup.",
"Affiliate Marketing",
"Explore supported affiliate workflows, program configuration, and reporting concepts where applicable.",
"Analytics & Reporting",
"Learn how to interpret the metrics and reports provided by the product.",
"Account & Billing",
"Find information about plan access, billing cycles, account settings, and subscription terms.",
"Integrations",
"Review setup instructions and limitations for integrations that are officially supported.",
"Common questions",
"What is Infloro?",
"Infloro is a creator marketing platform intended to help businesses organize and manage creator marketing activities. Describe its exact capabilities according to the currently available product.",
"Who is Infloro designed for?",
"Infloro is intended for teams involved in creator marketing, including brands, agencies, and businesses that work with creators. Confirm the supported customer workflows against the actual product."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Find answers. Keep your work moving.</h1><p>Explore answers to common questions about Infloro, its available capabilities, and the workflows it supports.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
