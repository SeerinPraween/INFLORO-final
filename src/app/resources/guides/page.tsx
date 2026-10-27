
"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bookmark,
  BookOpen,
  Check,
  Clock3,
  Search,
  Sparkles,
  X,
} from "lucide-react";

type Guide = {
  id: number;
  title: string;
  description: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  minutes: number;
  tag: string;
  color: string;
  introduction: string;
  sections: { heading: string; body: string }[];
};

const guides: Guide[] = [
  {
    id: 1,
    title: "The Complete Guide to Creator Discovery",
    description:
      "Learn how to find creators who align with your brand, audience, campaign goals, and budget.",
    category: "Creator Marketing",
    level: "Beginner",
    minutes: 9,
    tag: "START HERE",
    color: "lavender",
    introduction:
      "Successful creator partnerships start with fit, not follower count. Build a repeatable discovery process that balances relevance, credibility, audience quality, and commercial goals.",
    sections: [
      {
        heading: "Define your ideal creator",
        body: "Document your target audience, relevant niches, preferred content formats, geographic requirements, brand values, and budget before searching.",
      },
      {
        heading: "Evaluate audience fit",
        body: "Look beyond headline follower numbers. Review audience relevance, location, language, content themes, and the quality of audience interactions.",
      },
      {
        heading: "Review content and performance",
        body: "Assess recent posts, storytelling quality, consistency, engagement patterns, and previous sponsored content. Compare creators using the same criteria.",
      },
      {
        heading: "Build a shortlist",
        body: "Use a scorecard to rank candidates against campaign requirements. Record the reason for each selection and the next outreach step.",
      },
    ],
  },
  {
    id: 2,
    title: "Build a High-Converting Creator Campaign",
    description:
      "Turn campaign objectives into a clear brief, compelling creator content, and measurable outcomes.",
    category: "Campaigns",
    level: "Intermediate",
    minutes: 12,
    tag: "POPULAR",
    color: "peach",
    introduction:
      "A well-structured campaign connects a business objective to creator deliverables, audience messaging, timelines, and measurable outcomes.",
    sections: [
      {
        heading: "Choose one primary objective",
        body: "Decide whether your priority is awareness, traffic, leads, sales, or user-generated content. Supporting objectives should not obscure the main goal.",
      },
      {
        heading: "Write a useful campaign brief",
        body: "Include the audience, key message, deliverables, required disclosures, deadlines, approval process, usage rights, and tracking instructions.",
      },
      {
        heading: "Give creators room to create",
        body: "Explain the outcome and non-negotiable requirements while allowing creators to communicate in their authentic voice.",
      },
      {
        heading: "Measure and learn",
        body: "Review results against the original objective. Record what worked, where the audience dropped off, and what should change in the next campaign.",
      },
    ],
  },
  {
    id: 3,
    title: "Understanding Creator Marketing Metrics",
    description:
      "Understand reach, impressions, engagement, conversions, and the metrics that matter for your goals.",
    category: "Analytics",
    level: "Beginner",
    minutes: 8,
    tag: "FOUNDATIONS",
    color: "mint",
    introduction:
      "Metrics become useful when they answer a business question. Select measurements based on your objective rather than reporting every available number.",
    sections: [
      {
        heading: "Awareness metrics",
        body: "Reach estimates unique accounts exposed to content, while impressions count displays. Video views have platform-specific definitions, so check the relevant reporting methodology.",
      },
      {
        heading: "Engagement metrics",
        body: "Likes, comments, saves, and shares reveal different kinds of interaction. Always state the engagement-rate formula and its denominator.",
      },
      {
        heading: "Conversion metrics",
        body: "Use tracked links, campaign codes, and appropriate attribution methods to estimate purchases, leads, or other valuable actions.",
      },
      {
        heading: "Connect metrics to costs",
        body: "Depending on your objective, compare results with campaign spend using measures such as cost per click, cost per acquisition, or return on ad spend.",
      },
    ],
  },
  {
    id: 4,
    title: "How to Build Long-Term Creator Relationships",
    description:
      "Create a relationship workflow that supports reliable communication and repeat collaborations.",
    category: "Relationships",
    level: "Intermediate",
    minutes: 7,
    tag: "RELATIONSHIPS",
    color: "blue",
    introduction:
      "Long-term creator partnerships work best when expectations are clear, communication is respectful, and both parties understand the value of the relationship.",
    sections: [
      {
        heading: "Make outreach personal",
        body: "Show that you understand the creator's content and audience. Explain why the partnership is relevant instead of sending a generic pitch.",
      },
      {
        heading: "Set clear expectations",
        body: "Agree on compensation, deliverables, timing, approvals, content usage, exclusivity if applicable, and communication channels.",
      },
      {
        heading: "Keep communication organized",
        body: "Record important decisions, follow-up dates, feedback, and collaboration history in a shared workflow.",
      },
      {
        heading: "Close the loop",
        body: "Share appropriate campaign results, thank the creator, settle agreed payments promptly, and discuss potential next steps.",
      },
    ],
  },
  {
    id: 5,
    title: "UGC Strategy for Modern Brands",
    description:
      "Plan a user-generated content workflow from creative direction through review and content reuse.",
    category: "UGC",
    level: "Intermediate",
    minutes: 10,
    tag: "CONTENT",
    color: "pink",
    introduction:
      "User-generated content can help brands show products in relatable contexts. A dependable UGC process needs clear creative direction, review criteria, and documented usage permissions.",
    sections: [
      {
        heading: "Identify content needs",
        body: "Choose the product, audience concern, content format, distribution channel, and intended purpose for each asset.",
      },
      {
        heading: "Create a flexible brief",
        body: "Include product facts, key talking points, prohibited claims, format specifications, deadlines, and examples without scripting every moment.",
      },
      {
        heading: "Review content consistently",
        body: "Check factual accuracy, brand suitability, technical quality, required disclosures, and compliance with the agreed brief.",
      },
      {
        heading: "Manage usage rights",
        body: "Confirm where, how, and for how long the brand may use each asset. Get the appropriate permissions before paid promotion or redistribution.",
      },
    ],
  },
  {
    id: 6,
    title: "Creator Outreach That Gets Responses",
    description:
      "Write relevant pitches, build a follow-up cadence, and make it easier for creators to respond.",
    category: "Outreach",
    level: "Beginner",
    minutes: 6,
    tag: "QUICK READ",
    color: "lavender",
    introduction:
      "Good outreach makes the relevance of a partnership clear quickly. A concise, personalized message is usually more useful than a long generic pitch.",
    sections: [
      {
        heading: "Open with relevance",
        body: "Mention a specific piece of content or a clear reason the creator fits the audience or product.",
      },
      {
        heading: "Explain the opportunity",
        body: "State the campaign objective, broad deliverables, compensation approach where possible, and expected timing.",
      },
      {
        heading: "Make replying easy",
        body: "Ask one clear question and provide a simple next step, such as requesting a media kit or confirming interest.",
      },
      {
        heading: "Follow up thoughtfully",
        body: "Use a reasonable, limited follow-up cadence. Respect a creator's decision not to respond or participate.",
      },
    ],
  },
  {
    id: 7,
    title: "Affiliate Marketing for Creator Partnerships",
    description:
      "Structure creator affiliate offers, tracking, commissions, and performance reviews.",
    category: "Commerce",
    level: "Advanced",
    minutes: 11,
    tag: "GROWTH",
    color: "mint",
    introduction:
      "Affiliate programs connect creator activity to trackable actions such as purchases or qualified leads. A transparent program needs clear economics and reliable attribution.",
    sections: [
      {
        heading: "Design the offer",
        body: "Set commission rules, eligible products, discount terms, payment timing, return handling, and program duration.",
      },
      {
        heading: "Set up tracking",
        body: "Use unique links or codes and document attribution windows, exclusions, and how overlapping attribution is handled.",
      },
      {
        heading: "Support participating creators",
        body: "Provide accurate product information, approved creative resources, offer updates, and a clear contact for questions.",
      },
      {
        heading: "Evaluate profitability",
        body: "Compare attributed sales and commissions with margins, refunds, discounts, and other program costs before scaling.",
      },
    ],
  },
  {
    id: 8,
    title: "Creator Contracts and Content Rights",
    description:
      "Understand the key commercial terms to discuss before launching a creator collaboration.",
    category: "Compliance",
    level: "Advanced",
    minutes: 13,
    tag: "ESSENTIAL",
    color: "blue",
    introduction:
      "Written agreements reduce uncertainty by recording what each party has agreed to. Requirements vary by jurisdiction, so use qualified legal advice for specific situations.",
    sections: [
      {
        heading: "Define deliverables and payment",
        body: "Document the scope, due dates, revision limits, payment amount, payment schedule, and conditions for changes or cancellation.",
      },
      {
        heading: "Specify content permissions",
        body: "State the permitted channels, duration, territory, editing rights, paid-media use, and whether rights are exclusive.",
      },
      {
        heading: "Address disclosures",
        body: "Clarify each party's responsibilities for required advertising disclosures and compliance with applicable platform policies and laws.",
      },
      {
        heading: "Plan for changes",
        body: "Include a process for late delivery, cancellation, rejected work, disputes, and other material changes to the agreement.",
      },
    ],
  },
];

const categories = [
  "All guides",
  "Creator Marketing",
  "Campaigns",
  "Analytics",
  "Relationships",
  "UGC",
  "Outreach",
  "Commerce",
  "Compliance",
];

const levels = ["All levels", "Beginner", "Intermediate", "Advanced"];

export default function GuidesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All guides");
  const [level, setLevel] = useState("All levels");
  const [saved, setSaved] = useState<number[]>([]);
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  const filteredGuides = useMemo(() => {
    const search = query.trim().toLowerCase();

    return guides.filter((guide) => {
      const matchesQuery =
        !search ||
        guide.title.toLowerCase().includes(search) ||
        guide.description.toLowerCase().includes(search) ||
        guide.category.toLowerCase().includes(search);

      return (
        matchesQuery &&
        (category === "All guides" || guide.category === category) &&
        (level === "All levels" || guide.level === level)
      );
    });
  }, [query, category, level]);

  function toggleSaved(id: number) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((savedId) => savedId !== id)
        : [...current, id]
    );
  }

  function openGuide(guide: Guide) {
    setSelectedGuide(guide);
    setCompletedSections([]);
  }

  function toggleSection(heading: string) {
    setCompletedSections((current) =>
      current.includes(heading)
        ? current.filter((item) => item !== heading)
        : [...current, heading]
    );
  }

  return (
    <main className="guides-page">
      <section className="guides-hero">
        <div className="guides-hero-decoration guides-decoration-a" />
        <div className="guides-hero-decoration guides-decoration-b" />

        <div className="guides-hero-inner">
          <span className="eyebrow">
            <Sparkles size={15} /> THE INFLORO LEARNING HUB
          </span>
          <h1>
            Better partnerships
            <br />
            start with <span className="gradient-text">better knowledge.</span>
          </h1>
          <p>
            Practical, actionable guides to help you discover creators, run
            smarter campaigns, and grow meaningful partnerships.
          </p>

          <div className="guides-search">
            <Search size={19} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="What would you like to learn?"
              aria-label="Search guides"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")}>
                Clear
              </button>
            )}
          </div>

          <div className="guides-hero-stats">
            <span><BookOpen size={15} /> {guides.length} practical guides</span>
            <span><Clock3 size={15} /> 6–13 minute reads</span>
            <span><Sparkles size={15} /> Actionable insights</span>
          </div>
        </div>
      </section>

      <section className="section guides-library">
        <div className="guides-library-heading">
          <div>
            <span className="eyebrow">EXPLORE AND LEARN</span>
            <h2>Your next great idea starts here.</h2>
            <p>Choose a topic, find your level, and start learning.</p>
          </div>
          <div className="guides-library-count">
            <strong>{filteredGuides.length}</strong>
            <span>guides available</span>
          </div>
        </div>

        <div className="guides-filter-panel">
          <div className="guides-category-filters">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <label className="guides-level-select">
            <span>Difficulty</span>
            <select
              value={level}
              onChange={(event) => setLevel(event.target.value)}
            >
              {levels.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>

        {filteredGuides.length ? (
          <div className="guides-grid">
            {filteredGuides.map((guide, index) => (
              <article
                className={`guide-card guide-art-${guide.color}`}
                key={guide.id}
                style={{ animationDelay: `${index * 45}ms` }}
              >
                <div className="guide-card-art">
                  <div className="guide-art-orbit guide-art-orbit-one" />
                  <div className="guide-art-orbit guide-art-orbit-two" />
                  <div className="guide-art-symbol">
                    <BookOpen size={32} strokeWidth={1.5} />
                  </div>
                  <span className="guide-card-tag">{guide.tag}</span>
                  <button
                    type="button"
                    className={`guide-save-button ${
                      saved.includes(guide.id) ? "is-saved" : ""
                    }`}
                    onClick={() => toggleSaved(guide.id)}
                    aria-label={
                      saved.includes(guide.id)
                        ? "Remove saved guide"
                        : "Save guide"
                    }
                    title={
                      saved.includes(guide.id) ? "Saved" : "Save guide"
                    }
                  >
                    {saved.includes(guide.id) ? (
                      <Check size={17} />
                    ) : (
                      <Bookmark size={17} />
                    )}
                  </button>
                  <span className="guide-card-number">
                    {String(guide.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="guide-card-body">
                  <div className="guide-card-meta">
                    <span>{guide.category}</span>
                    <span className="guide-meta-dot" />
                    <span><Clock3 size={12} /> {guide.minutes} min read</span>
                  </div>

                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>

                  <div className="guide-card-bottom">
                    <span className={`guide-level level-${guide.level.toLowerCase()}`}>
                      {guide.level}
                    </span>
                    <button
                      type="button"
                      className="guide-read-link"
                      onClick={() => openGuide(guide)}
                    >
                      Read guide <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="guides-empty">
            <Search size={28} />
            <h3>No guides match your filters</h3>
            <p>Try another keyword or reset the selected filters.</p>
            <button
              type="button"
              className="button button-primary"
              onClick={() => {
                setQuery("");
                setCategory("All guides");
                setLevel("All levels");
              }}
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      <section className="section guides-bottom-section">
        <div className="guides-bottom-card">
          <div className="guides-bottom-icon"><Sparkles size={24} /></div>
          <div>
            <span className="eyebrow">PUT YOUR KNOWLEDGE TO WORK</span>
            <h2>From learning to launching.</h2>
            <p>
              Explore the tools that bring your creator marketing workflow
              together, from discovery to campaign reporting.
            </p>
          </div>
          <a href="/get-started" className="button button-primary">
            Get started <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {selectedGuide && (
        <div
          className="guide-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedGuide(null);
            }
          }}
        >
          <section
            className="guide-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="guide-modal-title"
          >
            <div className={`guide-modal-banner guide-art-${selectedGuide.color}`}>
              <span className="eyebrow">{selectedGuide.category.toUpperCase()}</span>
              <button
                type="button"
                className="guide-modal-close"
                onClick={() => setSelectedGuide(null)}
                aria-label="Close guide"
              >
                <X size={19} />
              </button>
              <BookOpen size={39} strokeWidth={1.4} />
              <div className="guide-modal-banner-meta">
                <span><Clock3 size={14} /> {selectedGuide.minutes} min read</span>
                <span>{selectedGuide.level}</span>
              </div>
            </div>

            <div className="guide-modal-content">
              <h2 id="guide-modal-title">{selectedGuide.title}</h2>
              <p className="guide-modal-intro">{selectedGuide.introduction}</p>

              <div className="guide-reading-progress">
                <div>
                  <span>YOUR READING CHECKLIST</span>
                  <strong>
                    {completedSections.length} of {selectedGuide.sections.length}
                  </strong>
                </div>
                <div className="guide-progress-track">
                  <div
                    style={{
                      width: `${
                        (completedSections.length /
                          selectedGuide.sections.length) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div className="guide-modal-sections">
                {selectedGuide.sections.map((section, index) => {
                  const complete = completedSections.includes(section.heading);

                  return (
                    <article
                      className={`guide-content-section ${
                        complete ? "section-complete" : ""
                      }`}
                      key={section.heading}
                    >
                      <div className="guide-section-index">
                        {complete ? <Check size={16} /> : `0${index + 1}`}
                      </div>
                      <div>
                        <h3>{section.heading}</h3>
                        <p>{section.body}</p>
                        <button
                          type="button"
                          onClick={() => toggleSection(section.heading)}
                        >
                          {complete ? "Mark as unread" : "Mark as read"}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="guide-modal-footer">
                <button
                  type="button"
                  className="button button-quiet"
                  onClick={() => toggleSaved(selectedGuide.id)}
                >
                  <Bookmark size={16} />
                  {saved.includes(selectedGuide.id) ? "Saved guide" : "Save guide"}
                </button>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => setSelectedGuide(null)}
                >
                  Finish reading <Check size={16} />
                </button>
              </div>
              <p className="guide-demo-note">
                Reading progress and saved guides are held in this page's
                temporary state and are not synced to an account.
              </p>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
