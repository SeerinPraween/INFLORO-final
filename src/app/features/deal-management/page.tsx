import Link from "next/link";

const content = [
"Manage creator responses, evaluate collaboration fit, organize commercial discussions, and track deals through a structured pipeline.",
"Infloro helps your team keep qualification details, proposed rates, negotiation history, offers, and partnership status connected to creator records and campaigns.",
"Give Every Creator Deal a Clear Next Step",
"A creator expressing interest is only the beginning. Your team may still need to confirm audience fit, check availability, agree on deliverables, negotiate compensation, and finalize the collaboration.",
"Without a structured process, these details can get lost between team members and conversations.",
"Infloro helps organize the deal journey so your team can see which partnerships are progressing, which need attention, and which are ready for campaign execution.",
"Qualify Creators With Relevant Information",
"Campaign fit",
"Evaluate the creator against campaign requirements, content niche, platform, audience, and other available profile information.",
"Availability and interest",
"Record creator interest, availability, application responses, and proposed participation.",
"Commercial terms",
"Maintain proposed rates, agreed compensation, deliverable quantities, deadlines, and other relevant deal details.",
"Negotiation history",
"Record offers, counteroffers, discussion notes, and the current status of commercial negotiations.",
"Deal ownership",
"Assign responsibility for next steps and keep internal teams aligned.",
"How It Works",
"01 — Review the Response",
"Open the creator's profile and review the response, campaign context, and available qualification information.",
"02 — Evaluate the Fit",
"Record relevant criteria, questions, availability, and any missing information.",
"03 — Discuss the Collaboration",
"Track proposed deliverables, rates, terms, and negotiation notes.",
"04 — Send or Record an Offer",
"Maintain the offer details and record the creator's response.",
"05 — Confirm the Partnership",
"Record the accepted terms and move the creator into the campaign execution workflow."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Creator Qualification & Deal Management</h1><p>From Interested Creator to Confirmed Partnership.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
