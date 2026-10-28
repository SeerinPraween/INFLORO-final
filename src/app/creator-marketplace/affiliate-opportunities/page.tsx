import Link from "next/link";

const content = [
"Page objective: Attract creators interested in affiliate marketing and explain program terms, commissions, tracking, attribution, and payment expectations transparently.",
"4.1 Hero section",
"Supporting text: Relevant recommendations. Transparent terms. Measurable referrals.",
"4.2 Introduction",
"Heading: Bring relevant products closer to your audience.",
"Affiliate partnerships allow creators to recommend products or services using approved referral links, codes, or other tracking methods.",
"When an eligible action meets the program's terms, the creator may earn a commission. Rates, qualifying actions, attribution windows, and payout requirements vary by program.",
"Infloro helps creators discover opportunities and review the terms before deciding whether to participate.",
"4.3 Types of affiliate programs",
"Heading: Explore partnerships across categories.",
"Product Recommendations",
"Discover programs for products relevant to your niche and audience.",
"Lifestyle & Fashion",
"Explore programs connected to fashion, accessories, beauty, and lifestyle products where available.",
"Technology & Digital Services",
"Discover relevant software, technology products, or digital services with published affiliate terms.",
"Education & Learning",
"Explore eligible educational products and learning services.",
"Recurring Commission Programs",
"Where offered, review programs that pay commissions on eligible recurring transactions.",
"Supporting note: These are examples of possible program categories, not a claim that every category or commission model is currently available.",
"4.4 Understand each affiliate opportunity",
"Heading: Know the terms before you share.",
"Commission structure",
"Review the stated rate, fixed commission, or other eligible compensation model.",
"Qualifying actions",
"Understand whether commissions are based on purchases, leads, subscriptions, or other defined events.",
"Attribution rules"
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Share what you believe in. Explore affiliate partnerships.</h1><p>Discover affiliate programs that connect your content with relevant products and services. Review commission structures, understand program rules, and learn how qualifying referrals may translate into earnings.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
