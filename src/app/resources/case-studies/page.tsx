
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bookmark,
  CheckCircle2,
  ChevronRight,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

type CaseStudy = {
  id: number;
  brand: string;
  industry: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  secondaryMetric: string;
  duration: string;
  tone: string;
  challenge: string;
  strategy: string[];
  results: string[];
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    brand: "Luma Beauty",
    industry: "Beauty",
    title: "Building authentic beauty conversations through creator partnerships",
    description:
      "How a beauty brand could structure creator discovery, content approvals, and campaign measurement in one workflow.",
    metric: "3.2×",
    metricLabel: "Illustrative engagement improvement",
    secondaryMetric: "24 creators",
    duration: "8-week campaign",
    tone: "rose",
    challenge:
      "The team needed a more consistent way to evaluate creators, coordinate content, and understand campaign performance across multiple social channels.",
    strategy: [
      "Define creator selection criteria around audience relevance and content quality.",
      "Organize outreach, briefs, deliverables, and approvals in a shared workflow.",
      "Track campaign activity against predefined engagement and conversion goals.",
    ],
    results: [
      "One centralized campaign workflow.",
      "Clearer visibility into creator deliverables.",
      "A repeatable process for evaluating campaign outcomes.",
    ],
  },
  {
    id: 2,
    brand: "Northstar Active",
    industry: "Fashion",
    title: "Turning a seasonal launch into a coordinated creator campaign",
    description:
      "A sample campaign framework for aligning product launches, creator content, and publishing schedules.",
    metric: "42",
    metricLabel: "Illustrative content deliverables",
    secondaryMetric: "16 creators",
    duration: "6-week launch",
    tone: "blue",
    challenge:
      "A distributed team needed to coordinate creators, product deliveries, publishing dates, and content reviews for a seasonal launch.",
    strategy: [
      "Group creators by audience, content style, and campaign role.",
      "Assign individual deliverables and approval deadlines.",
      "Use a shared calendar to coordinate publishing and launch communications.",
    ],
    results: [
      "A consolidated publishing schedule.",
      "More transparent ownership of deliverables.",
      "A reusable launch workflow for future campaigns.",
    ],
  },
  {
    id: 3,
    brand: "Good Earth Market",
    industry: "Food & Beverage",
    title: "Creating a repeatable local creator activation workflow",
    description:
      "An illustrative approach to organizing local partnerships and connecting creator activity with campaign objectives.",
    metric: "5",
    metricLabel: "Illustrative local markets",
    secondaryMetric: "30 creators",
    duration: "10-week activation",
    tone: "mint",
    challenge:
      "The marketing team wanted a structured approach to coordinating local creators while keeping campaign briefs and reporting consistent.",
    strategy: [
      "Create a standard campaign brief for each participating market.",
      "Match creators to local audience and content requirements.",
      "Collect deliverable status and campaign performance in one reporting process.",
    ],
    results: [
      "Consistent briefs across participating markets.",
      "Improved visibility into creator participation.",
      "A repeatable model for future local activations.",
    ],
  },
  {
    id: 4,
    brand: "Forma Living",
    industry: "Home & Lifestyle",
    title: "Making product storytelling easier to coordinate",
    description:
      "A sample UGC workflow for collecting creator submissions and organizing content review.",
    metric: "60",
    metricLabel: "Illustrative UGC submissions",
    secondaryMetric: "4 content formats",
    duration: "7-week project",
    tone: "peach",
    challenge:
      "Content submissions, revision requests, and usage details were difficult to follow across multiple conversations.",
    strategy: [
      "Set clear content formats and submission requirements.",
      "Create an approval process with visible content statuses.",
      "Organize approved assets and usage notes for campaign reporting.",
    ],
    results: [
      "A clearer content review process.",
      "Better visibility into submission status.",
      "A more organized UGC asset library.",
    ],
  },
  {
    id: 5,
    brand: "Pulse Nutrition",
    industry: "Health & Wellness",
    title: "Bringing campaign reporting closer to everyday decisions",
    description:
      "A sample analytics framework for reviewing creator performance and identifying next steps.",
    metric: "4",
    metricLabel: "Illustrative core KPI groups",
    secondaryMetric: "12 creators",
    duration: "8-week campaign",
    tone: "purple",
    challenge:
      "The team needed a consistent way to review reach, engagement, traffic, and conversion signals without relying on disconnected reports.",
    strategy: [
      "Define campaign goals and reporting metrics before launch.",
      "Collect comparable creator and content performance data.",
      "Review outcomes and use findings to inform the next campaign.",
    ],
    results: [
      "A consistent campaign scorecard.",
      "More structured performance reviews.",
      "A clearer process for documenting learnings.",
    ],
  },
  {
    id: 6,
    brand: "Studio Orbit",
    industry: "Technology",
    title: "Helping a lean team organize creator relationships at scale",
    description:
      "A sample creator relationship management workflow for outreach, follow-ups, and collaboration history.",
    metric: "1",
    metricLabel: "Illustrative shared creator workspace",
    secondaryMetric: "3 team workflows",
    duration: "5-week setup",
    tone: "blue",
    challenge:
      "Creator contacts, conversation history, and follow-up tasks were scattered across individual team members.",
    strategy: [
      "Centralize creator profiles and collaboration notes.",
      "Use consistent pipeline stages and follow-up reminders.",
      "Create shared visibility into relationship ownership and next steps.",
    ],
    results: [
      "A common view of creator relationships.",
      "More consistent follow-up ownership.",
      "A reusable process for managing creator pipelines.",
    ],
  },
];

const industries = [
  "All industries",
  "Beauty",
  "Fashion",
  "Food & Beverage",
  "Home & Lifestyle",
  "Health & Wellness",
  "Technology",
];

export default function CaseStudiesPage() {
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState("All industries");
  const [saved, setSaved] = useState<number[]>([]);
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  const filteredStudies = useMemo(
    () =>
      caseStudies.filter((study) => {
        const matchesIndustry =
          industry === "All industries" || study.industry === industry;
        const matchesQuery =
          `${study.brand} ${study.title} ${study.description} ${study.industry}`
            .toLowerCase()
            .includes(query.toLowerCase());

        return matchesIndustry && matchesQuery;
      }),
    [query, industry],
  );

  function toggleSaved(id: number) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  return (
    <main className="case-studies-page">
      <section className="case-studies-hero">
        <div className="case-studies-container case-studies-hero-inner">
          <div className="case-studies-hero-copy">
            <div className="eyebrow">
              <BarChart3 size={15} /> STRATEGY IN ACTION
            </div>
            <h1>
              Better partnerships.
              <br />
              <span className="gradient-text">Smarter outcomes.</span>
            </h1>
            <p>
              Explore practical campaign stories, workflow ideas, and
              frameworks for building stronger creator partnerships.
            </p>
            <a href="#case-library" className="button button-primary">
              Explore case studies <ArrowRight size={16} />
            </a>
            <div className="case-studies-hero-note">
              <CheckCircle2 size={15} />
              Sample scenarios for learning and inspiration
            </div>
          </div>

          <div className="case-studies-hero-art">
            <div className="case-art-top">
              <span>CAMPAIGN INTELLIGENCE</span>
              <Sparkles size={17} />
            </div>
            <div className="case-art-heading">
              <span>From insight</span>
              <strong>to impact.</strong>
            </div>
            <div className="case-art-chart">
              <div className="case-chart-y-labels">
                <span>100</span><span>75</span><span>50</span><span>25</span>
              </div>
              <div className="case-chart-main">
                <div className="case-chart-grid">
                  <span /><span /><span /><span />
                </div>
                <svg viewBox="0 0 360 140" preserveAspectRatio="none" aria-label="Illustrative upward trend">
                  <defs>
                    <linearGradient id="caseChartFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#c1a7ff" stopOpacity=".4" />
                      <stop offset="100%" stopColor="#c1a7ff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,118 C32,108 35,92 67,99 S112,80 139,86 S182,51 216,66 S263,30 292,39 S331,18 360,8 L360,140 L0,140 Z" fill="url(#caseChartFill)" />
                  <path d="M0,118 C32,108 35,92 67,99 S112,80 139,86 S182,51 216,66 S263,30 292,39 S331,18 360,8" fill="none" stroke="#c7afff" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="292" cy="39" r="5" fill="#fff" stroke="#a889ff" strokeWidth="3" />
                  <circle cx="360" cy="8" r="5" fill="#fff" stroke="#a889ff" strokeWidth="3" />
                </svg>
                <div className="case-chart-x-labels">
                  <span>DISCOVER</span><span>ACTIVATE</span><span>MEASURE</span><span>OPTIMIZE</span>
                </div>
              </div>
            </div>
            <div className="case-art-footer">
              <span>RESEARCH</span><span>EXECUTION</span><span>LEARNING</span>
            </div>
          </div>
        </div>
      </section>

      <section className="case-studies-container case-studies-intro">
        <div className="case-intro-icon"><Target size={22} /></div>
        <div>
          <h2>Every campaign has something to teach.</h2>
          <p>
            Explore example challenges and workflows to inspire your own
            strategy. All brands, metrics, and scenarios on this page are
            illustrative—not verified client results.
          </p>
        </div>
      </section>

      <section className="case-studies-container case-studies-library" id="case-library">
        <div className="case-studies-heading">
          <div>
            <span className="eyebrow">THE CASE STUDY LIBRARY</span>
            <h2>Ideas for your <span className="gradient-text">next move.</span></h2>
            <p>Filter by industry or search for a challenge you want to solve.</p>
          </div>
          <span className="case-studies-count">
            {filteredStudies.length.toString().padStart(2, "0")} STORIES
          </span>
        </div>

        <label className="case-studies-search">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search stories, industries, or strategies..."
            aria-label="Search case studies"
          />
        </label>

        <div className="case-studies-filters">
          {industries.map((item) => (
            <button
              key={item}
              className={`case-industry-chip ${industry === item ? "active" : ""}`}
              onClick={() => setIndustry(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {filteredStudies.length > 0 ? (
          <div className="case-studies-grid">
            {filteredStudies.map((study, index) => (
              <article className="case-study-card" key={study.id}>
                <div className={`case-study-art case-tone-${study.tone}`}>
                  <span className="case-study-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="case-study-industry">{study.industry}</span>
                  <div className="case-study-art-symbol">
                    {study.industry === "Beauty" ? <Sparkles size={26} /> :
                     study.industry === "Fashion" ? <Users size={26} /> :
                     study.industry === "Technology" ? <BarChart3 size={26} /> :
                     study.industry === "Food & Beverage" ? <Target size={26} /> :
                     study.industry === "Health & Wellness" ? <TrendingUp size={26} /> :
                     <CheckCircle2 size={26} />}
                  </div>
                  <div className="case-study-art-brand">{study.brand.toUpperCase()}</div>
                  <button
                    className={`case-study-save ${saved.includes(study.id) ? "saved" : ""}`}
                    onClick={() => toggleSaved(study.id)}
                    aria-label={saved.includes(study.id) ? "Unsave case study" : "Save case study"}
                    title={saved.includes(study.id) ? "Unsave case study" : "Save case study"}
                  >
                    <Bookmark size={16} fill={saved.includes(study.id) ? "currentColor" : "none"} />
                  </button>
                </div>

                <div className="case-study-body">
                  <span className="case-study-brand">{study.brand} · {study.industry}</span>
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <div className="case-study-metrics">
                    <div>
                      <strong>{study.metric}</strong>
                      <span>{study.metricLabel}</span>
                    </div>
                    <div>
                      <strong>{study.secondaryMetric}</strong>
                      <span>{study.duration}</span>
                    </div>
                  </div>
                  <button className="case-study-read" onClick={() => setSelected(study)}>
                    Explore the story <ChevronRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="case-studies-empty">
            <Search size={26} />
            <h3>No matching case studies</h3>
            <p>Try another search or select a different industry.</p>
            <button className="button button-quiet" onClick={() => { setQuery(""); setIndustry("All industries"); }}>
              Reset filters
            </button>
          </div>
        )}
      </section>

      <section className="case-studies-container case-studies-cta">
        <div className="case-cta-icon"><Sparkles size={23} /></div>
        <div className="case-cta-copy">
          <span className="eyebrow">YOUR NEXT SUCCESS STORY</span>
          <h2>Make your next campaign count.</h2>
          <p>Organize creator relationships and campaign workflows in one place.</p>
        </div>
        <div className="case-cta-actions">
          <Link href="/get-started" className="button button-primary">
            Get started <ArrowRight size={16} />
          </Link>
          <Link href="/book-a-demo" className="button button-quiet">Book a demo</Link>
        </div>
      </section>

      {selected && (
        <div
          className="case-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <section className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-modal-title">
            <div className="case-modal-header">
              <div>
                <span className="eyebrow">{selected.industry} · SAMPLE CASE STUDY</span>
                <h2 id="case-modal-title">{selected.title}</h2>
                <p>{selected.description}</p>
              </div>
              <button className="case-modal-close" onClick={() => setSelected(null)} aria-label="Close case study">
                <X size={20} />
              </button>
            </div>

            <div className="case-modal-disclaimer">
              <Sparkles size={16} />
              This is an illustrative scenario. Metrics and outcomes are examples, not verified client results.
            </div>

            <div className="case-modal-section">
              <h3>The challenge</h3>
              <p>{selected.challenge}</p>
            </div>

            <div className="case-modal-section">
              <h3>The approach</h3>
              <ul>
                {selected.strategy.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="case-modal-section">
              <h3>Example outcomes to aim for</h3>
              <ul>
                {selected.results.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="case-modal-footer">
              <button className="button button-quiet" onClick={() => toggleSaved(selected.id)}>
                <Bookmark size={15} fill={saved.includes(selected.id) ? "currentColor" : "none"} />
                {saved.includes(selected.id) ? "Saved" : "Save story"}
              </button>
              <button className="button button-primary" onClick={() => setSelected(null)}>
                Done <CheckCircle2 size={16} />
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
