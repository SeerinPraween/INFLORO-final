import Link from "next/link";

const content = [
"Creator marketing doesn't stop at finding the right profile. Your team needs to contact creators, follow up, record responses, coordinate discussions, and know exactly what should happen next.",
"Infloro brings creator records, outreach activity, conversation history, follow-ups, and relationship management into one connected workflow.",
"Stop Losing Track of Creator Conversations",
"When creator outreach happens across spreadsheets, inboxes, and messaging apps, important details become difficult to track.",
"Who has been contacted? Who replied? Who needs a follow-up? Which creator discussed pricing? Which conversations have already moved into negotiations?",
"Infloro helps your team organize these interactions around creator profiles and campaign workflows.",
"Everything You Need to Manage Creator Relationships",
"A centralized creator CRM",
"Keep creator contact details, social profiles, niches, notes, campaign history, and relationship information together.",
"Structured outreach tracking",
"Record outreach attempts, message status, response history, and the next follow-up action.",
"Follow-up management",
"Organize reminders and pending actions so promising conversations do not disappear in a crowded inbox.",
"Conversation context",
"Keep relevant interaction records, negotiation notes, and campaign references accessible to authorized team members.",
"Team ownership",
"Assign creators or conversations to team members and make responsibilities visible.",
"Reusable outreach templates",
"Maintain approved message templates for introductions, campaign invitations, follow-ups, and collaboration discussions.",
"How It Works",
"01 — Select Your Creators",
"Import or select creators from your database and discovery shortlists.",
"02 — Prepare Your Outreach",
"Choose an appropriate message template and personalize the communication for the creator and campaign.",
"03 — Send Through a Supported Channel",
"Use the messaging or email workflow available to your account. Record manual outreach where automated sending is not supported.",
"04 — Track Responses",
"Update the creator's communication status and maintain relevant interaction history."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Outreach & Creator CRM</h1><p>Every Creator Relationship. One Organized Workspace.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
