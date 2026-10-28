import Link from "next/link";

const content = [
"Hero section",
"Turn creator marketing goals into structured workflows with playbooks covering discovery, outreach, campaign execution, content operations, affiliate programs, and reporting.",
"Use them to align your team, clarify responsibilities, and build repeatable processes.",
"Playbook categories",
"Creator Discovery Playbook",
"A structured approach to defining creator criteria, identifying candidates, reviewing audience fit, and building a shortlist.",
"Creator Outreach Playbook",
"A workflow for personalizing outreach, tracking responses, managing follow-ups, and documenting collaboration status.",
"Campaign Execution Playbook",
"A framework for briefing creators, coordinating deliverables, managing deadlines, reviewing content, and closing campaigns.",
"UGC Operations Playbook",
"A workflow for planning content requirements, coordinating production, managing approvals, and clarifying usage permissions.",
"Affiliate Program Playbook",
"A framework for documenting program terms, commissions, tracking, attribution, and performance review.",
"Campaign Reporting Playbook",
"A repeatable approach to collecting metrics, evaluating results, documenting insights, and deciding on next steps.",
"Individual playbook page template"
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Practical frameworks for getting the work done.</h1><p>Eyebrow: CREATOR MARKETING PLAYBOOKS</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
