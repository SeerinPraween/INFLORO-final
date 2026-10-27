
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bookmark,
  Check,
  ChevronRight,
  Download,
  FileText,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

type Report = {
  id: number;
  title: string;
  description: string;
  category: string;
  year: string;
  readTime: string;
  label: string;
  tone: string;
  icon: typeof BarChart3;
  summary: string[];
  takeaways: string[];
};

const reports: Report[] = [
  {
    id: 1,
    title: "The State of Creator Marketing",
    description:
      "A strategic overview of creator partnerships, campaign operations, measurement, and emerging opportunities.",
    category: "Industry Insights",
    year: "2027",
    readTime: "12 min read",
    label: "FEATURED REPORT",
    tone: "purple",
    icon: TrendingUp,
    summary:
      [
        "Creator marketing programs involve multiple connected activities: discovery, relationship management, campaign delivery, and measurement.",
        "This report framework helps teams assess their current operating model and identify opportunities to improve consistency.",
      ],
    takeaways: [
      "Define campaign goals before selecting creators.",
      "Build repeatable workflows for outreach and approvals.",
      "Use consistent reporting criteria across campaigns.",
    ],
  },
  {
    id: 2,
    title: "The Creator Discovery Playbook",
    description:
      "A practical framework for evaluating creator fit beyond follower counts and surface-level metrics.",
    category: "Creator Discovery",
    year: "2026",
    readTime: "9 min read",
    label: "PRACTICAL GUIDE",
    tone: "blue",
    icon: Users,
    summary: [
      "Effective discovery starts with the campaign objective and target audience.",
      "A structured evaluation process can make creator selection easier to explain, compare, and repeat.",
    ],
    takeaways: [
      "Prioritize audience and brand relevance.",
      "Review content quality and engagement context.",
      "Document selection criteria and open questions.",
    ],
  },
  {
    id: 3,
    title: "Campaign Measurement That Matters",
    description:
      "Learn how to connect campaign objectives with meaningful indicators and useful reporting.",
    category: "Analytics",
    year: "2026",
    readTime: "10 min read",
    label: "DATA & INSIGHTS",
    tone: "mint",
    icon: BarChart3,
    summary: [
      "Campaign measurement should reflect what the program is intended to achieve.",
      "Consistent definitions and transparent data sources make comparisons more useful.",
    ],
    takeaways: [
      "Separate awareness, engagement, traffic, and conversion goals.",
      "Record metric definitions and reporting periods.",
      "Turn results into specific follow-up actions.",
    ],
  },
  {
    id: 4,
    title: "The Future of AI in Creator Marketing",
    description:
      "Explore responsible applications of AI in research, workflow automation, and campaign planning.",
    category: "AI & Technology",
    year: "2026",
    readTime: "8 min read",
    label: "EMERGING TRENDS",
    tone: "peach",
    icon: Sparkles,
    summary: [
      "AI can help teams organize information and support repetitive research and operational tasks.",
      "Human review remains important for context, brand fit, transparency, and final decisions.",
    ],
    takeaways: [
      "Use AI to support research rather than replace judgment.",
      "Review generated information before acting on it.",
      "Keep human ownership of sensitive campaign decisions.",
    ],
  },
  {
    id: 5,
    title: "Building Strong Creator Relationships",
    description:
      "An operational framework for consistent communication, follow-ups, and long-term partnerships.",
    category: "Creator Relationships",
    year: "2026",
    readTime: "7 min read",
    label: "RELATIONSHIP STRATEGY",
    tone: "blue",
    icon: Users,
    summary: [
      "Reliable communication and clear expectations help teams manage collaborations more consistently.",
      "A shared record of agreements, deliverables, and follow-ups can reduce coordination gaps.",
    ],
    takeaways: [
      "Assign a clear relationship owner.",
      "Document agreements and communication history.",
      "Use respectful, timely follow-ups.",
    ],
  },
  {
    id: 6,
    title: "UGC Operations: From Brief to Asset Library",
    description:
      "Organize content requirements, review cycles, approvals, and usage records with a repeatable process.",
    category: "Campaign Operations",
    year: "2026",
    readTime: "11 min read",
    label: "OPERATIONS",
    tone: "purple",
    icon: FileText,
    summary: [
      "UGC workflows work best when creators know the requirements and teams know the review process.",
      "A consistent asset library can make approved content easier to locate and manage.",
    ],
    takeaways: [
      "Specify deliverables and usage requirements in advance.",
      "Keep approval status and feedback visible.",
      "Record permissions and usage restrictions.",
    ],
  },
];

const categories = [
  "All reports",
  "Industry Insights",
  "Creator Discovery",
  "Analytics",
  "AI & Technology",
  "Creator Relationships",
  "Campaign Operations",
];

export default function ReportsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All reports");
  const [saved, setSaved] = useState<number[]>([]);
  const [selected, setSelected] = useState<Report | null>(null);

  const filteredReports = useMemo(
    () =>
      reports.filter((report) => {
        const matchesCategory =
          category === "All reports" || report.category === category;
        const matchesQuery =
          `${report.title} ${report.description} ${report.category}`
            .toLowerCase()
            .includes(query.toLowerCase());

        return matchesCategory && matchesQuery;
      }),
    [query, category],
  );

  function toggleSaved(id: number) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function downloadSummary(report: Report) {
    const content = [
      report.title,
      `Category: ${report.category}`,
      `Edition: ${report.year}`,
      "",
      "EXECUTIVE SUMMARY",
      ...report.summary,
      "",
      "KEY TAKEAWAYS",
      ...report.takeaways.map((item, index) => `${index + 1}. ${item}`),
      "",
      "Note: This is an original educational summary, not a published industry research dataset.",
    ].join("\n\n");

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${report.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-summary.txt`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="reports-page">
      <section className="reports-hero">
        <div className="reports-container reports-hero-inner">
          <div className="reports-hero-copy">
            <div className="eyebrow">
              <BarChart3 size={15} /> THE INFLORO INSIGHTS DESK
            </div>
            <h1>
              See the bigger
              <br />
              <span className="gradient-text">picture.</span>
            </h1>
            <p>
              Explore frameworks, research-inspired perspectives, and
              practical reports for making more thoughtful creator marketing
              decisions.
            </p>
            <a href="#report-library" className="button button-primary">
              Explore reports <ArrowRight size={16} />
            </a>
            <div className="reports-hero-proof">
              <span><Check size={14} /> Practical frameworks</span>
              <span><Check size={14} /> Clear takeaways</span>
              <span><Check size={14} /> Built for action</span>
            </div>
          </div>

          <div className="reports-hero-visual">
            <div className="reports-visual-top">
              <span>THE INSIGHT BRIEF</span>
              <Sparkles size={17} />
            </div>
            <div className="reports-visual-title">
              <span>Make sense of</span>
              <strong>what comes next.</strong>
            </div>
            <div className="reports-visual-dashboard">
              <div className="reports-visual-metric">
                <span>STRATEGY</span>
                <strong><TrendingUp size={17} /> Direction</strong>
                <div className="reports-mini-bars"><i /><i /><i /><i /><i /><i /><i /></div>
              </div>
              <div className="reports-visual-metric">
                <span>OPERATIONS</span>
                <strong><Users size={17} /> Alignment</strong>
                <div className="reports-mini-dots"><i /><i /><i /><i /><i /><i /></div>
              </div>
              <div className="reports-visual-metric reports-visual-wide">
                <span>THE BIG PICTURE</span>
                <div className="reports-visual-flow">
                  <span>Discover</span><ArrowRight size={14} /><span>Activate</span><ArrowRight size={14} /><span>Measure</span>
                </div>
              </div>
            </div>
            <div className="reports-visual-footer">
              <span>INSIGHT</span><span>CLARITY</span><span>PROGRESS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="reports-container reports-disclaimer">
        <span><Sparkles size={18} /></span>
        <div>
          <strong>Built to inform your next decision</strong>
          <p>
            These are educational reports and original frameworks. They do not
            claim to represent verified market statistics or commissioned
            industry research.
          </p>
        </div>
      </section>

      <section className="reports-container reports-library" id="report-library">
        <div className="reports-section-heading">
          <div>
            <span className="eyebrow">THE REPORT LIBRARY</span>
            <h2>Find your next <span className="gradient-text">insight.</span></h2>
            <p>Search by topic or explore a specific area of creator marketing.</p>
          </div>
          <span className="reports-count">{filteredReports.length.toString().padStart(2, "0")} REPORTS</span>
        </div>

        <label className="reports-search">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search reports, topics, and frameworks..."
            aria-label="Search reports"
          />
        </label>

        <div className="reports-filter-row">
          <div className="reports-categories">
            {categories.map((item) => (
              <button
                key={item}
                className={`reports-category ${category === item ? "active" : ""}`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <span className="reports-saved-count">
            <Bookmark size={14} /> {saved.length} saved
          </span>
        </div>

        {filteredReports.length > 0 ? (
          <div className="reports-grid">
            {filteredReports.map((report, index) => {
              const Icon = report.icon;
              const isSaved = saved.includes(report.id);

              return (
                <article className="reports-card" key={report.id}>
                  <div className={`reports-card-art reports-tone-${report.tone}`}>
                    <span className="reports-card-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="reports-card-label">{report.label}</span>
                    <div className="reports-card-symbol"><Icon size={27} /></div>
                    <div className="reports-card-art-footer">
                      <span>INFLORO INSIGHTS</span><span>{report.year}</span>
                    </div>
                    <button
                      className={`reports-save ${isSaved ? "saved" : ""}`}
                      onClick={() => toggleSaved(report.id)}
                      aria-label={isSaved ? "Unsave report" : "Save report"}
                      title={isSaved ? "Unsave report" : "Save report"}
                    >
                      <Bookmark size={16} fill={isSaved ? "currentColor" : "none"} />
                    </button>
                  </div>

                  <div className="reports-card-body">
                    <div className="reports-card-meta">
                      <span>{report.category}</span>
                      <span>{report.readTime}</span>
                    </div>
                    <h3>{report.title}</h3>
                    <p>{report.description}</p>
                    <div className="reports-card-actions">
                      <button className="reports-preview-button" onClick={() => setSelected(report)}>
                        Read executive summary <ChevronRight size={15} />
                      </button>
                      <button
                        className="reports-download-button"
                        onClick={() => downloadSummary(report)}
                        aria-label={`Download ${report.title} summary`}
                        title="Download summary"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="reports-empty">
            <Search size={26} />
            <h3>No reports found</h3>
            <p>Try another search or choose a different topic.</p>
            <button className="button button-quiet" onClick={() => { setQuery(""); setCategory("All reports"); }}>
              Reset filters
            </button>
          </div>
        )}
      </section>

      <section className="reports-container reports-cta">
        <div className="reports-cta-icon"><Sparkles size={23} /></div>
        <div className="reports-cta-copy">
          <span className="eyebrow">FROM INSIGHT TO EXECUTION</span>
          <h2>Make your next move with clarity.</h2>
          <p>Bring discovery, creator relationships, and campaign operations into one workspace.</p>
        </div>
        <div className="reports-cta-actions">
          <Link href="/get-started" className="button button-primary">
            Get started <ArrowRight size={16} />
          </Link>
          <Link href="/resources" className="button button-quiet">All resources</Link>
        </div>
      </section>

      {selected && (
        <div
          className="reports-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <section className="reports-modal" role="dialog" aria-modal="true" aria-labelledby="reports-modal-title">
            <div className="reports-modal-header">
              <div>
                <span className="eyebrow">EXECUTIVE SUMMARY · {selected.year}</span>
                <h2 id="reports-modal-title">{selected.title}</h2>
                <p>{selected.description}</p>
              </div>
              <button className="reports-modal-close" onClick={() => setSelected(null)} aria-label="Close report">
                <X size={20} />
              </button>
            </div>

            <div className="reports-modal-note">
              <Sparkles size={16} />
              This is an educational framework, not a verified market research report.
            </div>

            <div className="reports-modal-section">
              <h3>Executive summary</h3>
              {selected.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <div className="reports-modal-section">
              <h3>Key takeaways</h3>
              <ul>
                {selected.takeaways.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="reports-modal-actions">
              <button className="button button-quiet" onClick={() => toggleSaved(selected.id)}>
                <Bookmark size={15} fill={saved.includes(selected.id) ? "currentColor" : "none"} />
                {saved.includes(selected.id) ? "Saved" : "Save report"}
              </button>
              <button className="button button-primary" onClick={() => downloadSummary(selected)}>
                <Download size={16} /> Download summary
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
