import Link from "next/link";

const content = [
"Hero section",
"Use this glossary as a practical reference when planning campaigns, evaluating creators, or working with marketing teams.",
"Search",
"Placeholder: Search a creator marketing term...",
"Supporting text: Find definitions, related concepts, and practical explanations.",
"Glossary categories",
"Influencer Marketing.",
"Creator Discovery.",
"Campaign Management.",
"UGC & Content Rights.",
"Affiliate Marketing.",
"Analytics & Measurement.",
"Creator Commerce.",
"Suggested glossary entries",
"Creator",
"An individual who produces content for an audience through platforms such as social media, video channels, blogs, or other digital formats.",
"Influencer Marketing",
"A marketing approach that involves collaborating with individuals who can communicate with and influence a relevant audience.",
"User-Generated Content (UGC)",
"Content created by users or creators for a brand, product, service, or community. The exact meaning depends on the context and agreement.",
"Engagement Rate",
"A metric that relates engagement activity to a defined base, such as reach, impressions, followers, or views. The calculation should always specify the denominator.",
"Creator-Audience Fit",
"The degree to which a creator's audience, content, and communication style align with a campaign's target audience and objectives.",
"Campaign Brief",
"A document that communicates campaign objectives, audience, deliverables, content requirements, deadlines, and other expectations to participating creators.",
"Content Usage Rights",
"Permissions governing how, where, and for how long content may be used. The applicable rights depend on the contract or agreement."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Understand the language of creator marketing.</h1><p>From influencer engagement and audience fit to UGC usage rights and affiliate attribution, learn the terminology behind modern creator marketing.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
