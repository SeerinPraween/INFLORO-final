import Link from "next/link";

const content = [
"Discover UGC opportunities, coordinate creator participation, collect content, manage revisions, and organize usage rights through a structured workflow.",
"Infloro helps brands and agencies manage the operational side of user-generated content without losing track of assets, feedback, deadlines, or approvals.",
"Great Content Needs a Better Workflow",
"UGC projects often involve multiple creators, different content formats, sample shipments, revision cycles, approval requirements, and usage permissions.",
"When these activities are scattered across messages and file-sharing tools, it becomes difficult to know which version is approved, what changes are pending, and whether content is authorized for its intended use.",
"Infloro organizes the process from the original brief to the final deliverable.",
"Everything Your UGC Workflow Needs",
"UGC project briefs",
"Define the product, creative direction, content format, number of deliverables, deadlines, disclosures, and compensation terms.",
"Creator opportunities",
"Present eligible projects with clear requirements so creators can review the terms and apply or accept invitations where supported.",
"Product sampling",
"Record sample requests, approvals, shipment references, delivery status, and fulfillment notes.",
"Content submissions",
"Collect content files or supported content URLs, captions, creative angles, disclosures, and submission notes.",
"Review and revision management",
"Provide feedback on specific versions, request changes, approve content, and retain the revision history.",
"Rights and permissions",
"Record permitted platforms, territories, usage periods, paid advertising permissions, and required creator authorizations.",
"Final deliverable tracking",
"Maintain approved assets, publishing proof, live-post URLs, and completion status.",
"How It Works",
"01 — Create the UGC Project",
"Define the product, creator requirements, content formats, deadlines, budget, and usage terms.",
"02 — Recruit Creators",
"Invite creators or review applications from eligible participants.",
"03 — Coordinate Products",
"Approve and track samples when the project requires them."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>UGC Content & Marketplace</h1><p>From Creative Brief to Approved Content.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
