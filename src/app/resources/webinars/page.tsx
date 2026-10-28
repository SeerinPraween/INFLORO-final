import Link from "next/link";

const content = [
"Hero section",
"Discover practical ideas you can take back to your team.",
"Webinar categories",
"Creator Marketing Strategy.",
"Influencer Discovery.",
"Campaign Management.",
"UGC & Content Operations.",
"Affiliate Marketing.",
"Analytics & Reporting.",
"Upcoming sessions",
"Section heading: Upcoming Webinars",
"Display upcoming sessions only when the event is confirmed.",
"Each card should include:",
"Session title.",
"Speaker name and approved role.",
"Date and time, including timezone.",
"Session description.",
"Intended audience.",
"Registration requirements.",
"Empty state: No upcoming sessions are scheduled right now. Explore our guides, articles, and other resources while you wait.",
"On-demand sessions",
"Section heading: Watch On Demand",
"Show recordings that are actually available.",
"Speaker.",
"Duration.",
"Summary.",
"Original event date, where relevant.",
"Individual webinar page template"
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Learn new approaches to creator marketing.</h1><p>Explore educational sessions, expert discussions, and recorded presentations covering creator partnerships, campaign planning, UGC, affiliate marketing, and measurement.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
