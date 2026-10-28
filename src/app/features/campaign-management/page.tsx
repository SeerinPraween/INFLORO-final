import Link from "next/link";

const content = [
"Plan campaigns, assign creators, share briefs, coordinate teams, manage budgets, and track deliverables through one connected workspace.",
"Infloro helps brands and agencies move from campaign planning to execution with a clearer view of responsibilities, deadlines, and progress.",
"Campaign Management Without the Operational Chaos",
"A creator campaign involves more than a brief and a list of influencers. It requires creator selection, commercial agreements, product coordination, content deadlines, reviews, publishing, and reporting.",
"When every activity is managed separately, teams struggle to understand campaign progress and identify bottlenecks.",
"Infloro brings these activities into a structured campaign workflow.",
"Plan Every Campaign in One Place",
"Campaign planning",
"Define the campaign name, objective, target audience, platforms, dates, budget, and success criteria.",
"Creator assignment",
"Add selected creators, manage applications, record confirmed partnerships, and track participation.",
"Structured campaign briefs",
"Document campaign messaging, creative direction, required formats, product information, and content guidelines.",
"Budget visibility",
"Record planned budgets, creator fees, sampling costs, and other campaign expenses where supported.",
"Deliverable tracking",
"Assign content types, quantities, due dates, owners, and completion status.",
"Campaign pipeline",
"View campaign progress across planning, creator outreach, negotiation, production, review, and completion.",
"Team coordination",
"Assign tasks, track overdue work, and keep responsibilities visible.",
"How It Works",
"01 — Create a Campaign",
"Enter the campaign objective, dates, budget, target audience, and requirements.",
"02 — Define the Brief",
"Add deliverables, creative guidelines, reference materials, disclosure requirements, and usage terms.",
"03 — Select Creators",
"Add shortlisted creators, invite eligible participants, or review applications."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Creator Campaign Management</h1><p>Every Campaign. Every Creator. Every Deliverable. Under Control.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
