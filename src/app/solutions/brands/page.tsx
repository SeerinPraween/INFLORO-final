import Link from "next/link";

const content = [
"Infloro helps brands organize creator discovery, outreach, campaign execution, UGC production, and performance reporting in one connected workspace.",
"From your first creator shortlist to your final campaign report, bring the people, content, and processes behind your creator marketing together.",
"Creator Marketing Shouldn't Feel Like Managing Hundreds of Spreadsheets",
"Finding creators is only the beginning. Your team still needs to evaluate profiles, coordinate negotiations, agree on deliverables, manage product samples, review content, track deadlines, and understand campaign performance.",
"When these activities are spread across different tools, important information gets lost and execution becomes harder to manage.",
"Infloro gives your team a structured workflow for managing creator marketing from discovery through delivery and reporting.",
"Everything Your Brand Needs to Manage Creator Campaigns",
"Discover Creators Who Fit Your Brand",
"Find and organize potential creators based on your campaign requirements, relevant niches, platforms, audience characteristics, and available profile data.",
"Search and filter creator profiles.",
"Review available audience and engagement information.",
"Build campaign-specific shortlists.",
"Maintain creator notes and collaboration history.",
"Manage Creator Relationships",
"Keep outreach activity, responses, follow-ups, qualification details, and commercial discussions organized around creator records.",
"Track outreach and responses.",
"Organize follow-up reminders.",
"Record proposed rates and collaboration terms.",
"Move interested creators into your campaign pipeline.",
"Plan and Execute Campaigns",
"Turn your campaign objectives into clear briefs, creator assignments, deadlines, and deliverables.",
"Define objectives, audiences, and platforms.",
"Assign creators and establish agreed terms.",
"Share creative briefs and reference materials.",
"Track budgets, deadlines, and campaign progress.",
"Produce and Approve UGC",
"Coordinate content projects from creator participation to final approval.",
"Manage product sampling where required."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Creator Marketing Built Around Your Brand Goals</h1><p>Find the Right Creators. Run Better Campaigns. Understand Your Results.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
