import Link from "next/link";

const content = [
"Infloro is designed to help organizations coordinate creator marketing across teams, brands, campaigns, and stakeholders through structured workflows and centralized records.",
"From campaign operations to content approvals and reporting, build a more consistent process that reflects your organization's requirements.",
"Creator Marketing at Scale Requires More Than More Tools",
"Larger organizations may coordinate multiple brands, internal teams, external agencies, creator programs, content approvals, and reporting requirements.",
"Without a consistent operating model, processes can vary between teams, records become fragmented, and visibility into campaign progress becomes difficult.",
"Infloro's enterprise-oriented approach focuses on organizing creator marketing workflows, clarifying responsibilities, and connecting relevant operational data.",
"A More Structured Operating Model",
"Organize Multiple Brands and Teams",
"Structure campaign records and workflows around the relevant business unit, brand, or team.",
"Brand and client organization.",
"Campaign and creator records.",
"Team assignments and ownership.",
"Role-appropriate workspace access.",
"Standardize Campaign Operations",
"Create a repeatable approach to campaign planning and execution.",
"Structured campaign briefs.",
"Configurable workflow stages where supported.",
"Deliverable and deadline tracking.",
"Approval responsibilities.",
"Campaign activity records.",
"Manage Access and Accountability",
"Help ensure users can access the information and actions appropriate to their responsibilities.",
"Role-based access controls.",
"Team and workspace permissions.",
"Activity and audit records where implemented.",
"Controlled access to sensitive information.",
"Connect Existing Systems",
"Discuss how supported integrations can fit into your existing data and operational environment."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Enterprise Creator Marketing</h1><p>Bring Structure, Visibility, and Consistency to Creator Marketing at Scale.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
