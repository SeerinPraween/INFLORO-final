import Link from "next/link";

const content = [
"Bring supported business tools and platforms into your creator marketing operations. Organize data exchange, notifications, and repeatable processes so your team spends less time moving information between systems.",
"Infloro is designed to connect the activities that happen across creator discovery, communication, campaign execution, content operations, and reporting.",
"Your Creator Marketing Tools Should Work Together",
"Creator information may live in spreadsheets. Conversations may happen through messaging tools. Performance data may sit in advertising dashboards, while orders and product details live in commerce systems.",
"Disconnected tools can create duplicate records, missing updates, and unnecessary manual work.",
"Infloro aims to connect supported tools through defined integrations and workflow automation.",
"Build a More Connected Workflow",
"Social platform integrations",
"Use supported platform APIs and authorized data sources to access the information and actions permitted by the relevant integration.",
"Messaging and email workflows",
"Organize supported communication, notifications, outreach records, and follow-up activity.",
"Spreadsheet import and export",
"Bring creator or campaign records into structured workflows and export supported information for reporting.",
"Commerce integrations",
"Where supported, synchronize product, order, or transaction information from authorized commerce sources.",
"Analytics data exchange",
"Associate available campaign, content, advertising, and conversion metrics with relevant records.",
"Workflow automation",
"Reduce repetitive steps through configured events, status changes, notifications, and background processing.",
"Integration monitoring",
"Make connection status, synchronization activity, errors, and required permissions visible to authorized administrators.",
"How It Works",
"01 — Choose an Integration",
"Review the integrations available for your account and the capabilities each one supports.",
"02 — Configure Access",
"Complete the required account connection, credentials, consent, and permissions through the supported setup process.",
"03 — Define the Data Flow",
"Specify which records or events should be synchronized and how they map to Infloro's data model."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Integrations & Automation</h1><p>Connect Your Workflow. Reduce Repetitive Work.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
