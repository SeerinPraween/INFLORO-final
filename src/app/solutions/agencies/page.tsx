import Link from "next/link";

const content = [
"Infloro helps creator marketing agencies organize client workspaces, creator relationships, campaign execution, content approvals, team responsibilities, and client reporting.",
"Build repeatable workflows for your agency without losing visibility into the individual details that make every client campaign different.",
"Your Agency Needs More Than a Creator Database",
"Agency work involves managing multiple clients, briefs, budgets, creator shortlists, negotiations, approvals, and reporting deadlines at the same time.",
"Spreadsheets may track the information, but they rarely provide a complete view of what each client needs, which creator is waiting for a response, or which deliverable is holding up a campaign.",
"Infloro is designed to connect client management with creator marketing execution.",
"Everything Your Agency Needs to Coordinate Client Work",
"Organize Every Client Workspace",
"Keep client information, campaigns, creator selections, briefs, budgets, and reporting organized by account.",
"Maintain separate client workspaces.",
"Organize campaigns by client.",
"Store client-specific requirements and references.",
"Review client campaign history and activity.",
"Build and Manage Creator Relationships",
"Maintain a reusable creator database while keeping each client's campaign requirements separate.",
"Search and shortlist relevant creators.",
"Organize creator profiles, notes, and tags.",
"Track outreach and negotiation status.",
"Review previous collaborations where records exist.",
"Assign creator relationships to team members.",
"Run Campaigns Through a Repeatable Process",
"Standardize campaign operations while allowing each client to have its own requirements.",
"Create structured campaign briefs.",
"Assign creators and deliverables.",
"Track budgets, deadlines, and completion status.",
"Manage product sampling and content submissions.",
"Identify overdue tasks and approval bottlenecks.",
"Coordinate Your Team"
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Creator Marketing Operations Built for Agencies</h1><p>Manage Multiple Clients. Coordinate More Creators. Keep Every Campaign Moving.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
