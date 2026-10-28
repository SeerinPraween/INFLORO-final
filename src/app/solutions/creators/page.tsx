import Link from "next/link";

const content = [
"Infloro helps creators organize their participation in brand campaigns, UGC projects, and eligible creator commerce programs.",
"Review project requirements, keep deliverables on track, manage content submissions, and view recorded collaboration and earnings status through one workspace.",
"Your Creative Work Deserves a Clearer Workflow",
"Creator collaborations involve more than producing content. You may need to review campaign briefs, understand commercial terms, coordinate product samples, meet deadlines, submit deliverables, respond to feedback, and track payment status.",
"Infloro is designed to help organize these details so you can understand what is required at every stage of a collaboration.",
"Everything You Need to Manage Your Collaborations",
"Discover Relevant Opportunities",
"Explore available campaigns and projects that match your interests, creative skills, platforms, and eligibility.",
"Review campaign and UGC project briefs.",
"Understand deliverable requirements.",
"Check deadlines and participation criteria.",
"Review compensation and usage terms before applying.",
"Manage Applications and Invitations",
"Keep track of your participation in available programs.",
"Apply to eligible campaigns.",
"Review application status.",
"Respond to invitations where supported.",
"Track confirmed collaborations and accepted terms.",
"Create and Submit Content",
"Understand what needs to be delivered and submit the required assets through the configured workflow.",
"Access campaign briefs and reference materials.",
"Review required content formats.",
"Submit files or supported content links.",
"Track submission status and revision requests.",
"Manage Feedback and Deadlines",
"Keep collaboration requirements and review activity visible.",
"Review brand feedback.",
"Address requested revisions."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Infloro for Creators</h1><p>Discover Opportunities. Create Content. Manage Your Collaborations.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
