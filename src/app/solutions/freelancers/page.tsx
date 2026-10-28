import Link from "next/link";

const content = [
"Infloro helps freelancers organize assignments, access briefs, track deadlines, submit work, manage revisions, and review payment status through a structured project workflow.",
"Whether you create videos, edit content, design graphics, or support campaign execution, keep your work organized from assignment to completion.",
"Spend Less Time Chasing Project Details",
"Freelancers often work with multiple clients, deadlines, reference files, feedback cycles, and payment milestones.",
"When project requirements are spread across emails and chat conversations, it becomes difficult to know which version needs revision, when a deliverable is due, or whether the client has approved the work.",
"Infloro is designed to bring these details into one workspace.",
"Everything You Need to Manage Your Work",
"Keep Your Projects Organized",
"View assigned projects, client information, campaign details, and current work status.",
"Project and campaign overview.",
"Assigned tasks and responsibilities.",
"Client briefs and reference materials.",
"Deadlines and progress indicators.",
"Understand Every Deliverable",
"Know exactly what needs to be created and how it will be reviewed.",
"Content format and specifications.",
"Required assets and reference links.",
"Submission instructions.",
"Delivery dates and completion status.",
"Submit Work and Manage Revisions",
"Keep submissions and feedback connected to the relevant assignment.",
"Upload files or submit supported content links.",
"Record submission notes.",
"Review client feedback.",
"Track requested changes.",
"Maintain revision and approval history where supported.",
"Coordinate With Clients and Teams",
"Keep project communication and task ownership clear."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>A Better Workspace for Creator Marketing Freelancers</h1><p>Manage Your Projects, Deliverables, and Client Feedback in One Place.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
