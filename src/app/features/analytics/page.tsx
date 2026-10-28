import Link from "next/link";

const content = [
"Understand campaign progress, review available performance metrics, compare creator and content results, and organize reporting in one workspace.",
"Infloro brings relevant campaign data together to help your team evaluate performance, identify questions worth investigating, and make more informed decisions about future collaborations.",
"Move Beyond Scattered Campaign Reports",
"Creator performance information can be spread across social platforms, advertising accounts, commerce systems, spreadsheets, and campaign reports.",
"Without a consistent view, it can be difficult to compare results, understand spending, or identify which deliverables require attention.",
"Infloro is designed to organize available performance information around the creators, campaigns, and content that produced it.",
"See the Performance That Matters",
"Campaign performance",
"Review campaign status, deliverable completion, available reach, impressions, clicks, conversions, spend, and revenue.",
"Creator performance",
"Compare creators using available metrics and relevant campaign context.",
"Content performance",
"Associate available performance data with individual creative assets to understand which content is attracting attention or generating results.",
"Budget visibility",
"Review recorded campaign budgets, expenses, creator compensation, and available return data.",
"Custom reporting",
"Organize campaign summaries for internal teams, clients, or other authorized stakeholders.",
"AI-assisted insights",
"Where implemented and supported by sufficient data, AI can summarize trends, highlight unusual changes, and suggest questions for further investigation.",
"How It Works",
"01 — Bring Data Together",
"Use configured integrations, imports, or supported manual entry to collect relevant campaign information.",
"02 — Connect Metrics to Records",
"Associate data with the appropriate creator, campaign, content asset, or commerce activity.",
"03 — Review Performance",
"Explore dashboard metrics, comparisons, charts, and campaign summaries.",
"04 — Identify Patterns",
"Use available comparisons and supported AI assistance to investigate promising content approaches and potential bottlenecks."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>AI-Powered Analytics & Reports</h1><p>Turn Creator Marketing Data Into Better Decisions.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
