
"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Search, Sparkles } from "lucide-react";

type GlossaryTerm = {
  term: string;
  letter: string;
  category: string;
  definition: string;
  example: string;
};

const terms: GlossaryTerm[] = [
  {
    term: "Affiliate Marketing",
    letter: "A",
    category: "Commerce",
    definition:
      "A performance-based partnership where creators earn a commission for sales generated through their unique links or codes.",
    example:
      "A creator earns 10% commission whenever a customer purchases through their tracking link.",
  },
  {
    term: "Affiliate Link",
    letter: "A",
    category: "Commerce",
    definition:
      "A unique URL that attributes a click or purchase to a particular creator or partner.",
    example:
      "A beauty creator shares a tracked product link in their video description.",
  },
  {
    term: "Audience Demographics",
    letter: "A",
    category: "Analytics",
    definition:
      "Information describing an audience, such as age ranges, geographic location, language, and other audience characteristics.",
    example:
      "A brand checks whether a creator's audience matches its target customer profile.",
  },
  {
    term: "Brand Awareness",
    letter: "B",
    category: "Strategy",
    definition:
      "The extent to which people recognize or remember a brand.",
    example:
      "A campaign introduces a new skincare line to relevant audiences.",
  },
  {
    term: "Brief",
    letter: "B",
    category: "Campaigns",
    definition:
      "A document outlining campaign goals, deliverables, messaging, deadlines, requirements, and expectations for creators.",
    example:
      "A campaign brief specifies two short-form videos and three story frames.",
  },
  {
    term: "Call to Action (CTA)",
    letter: "C",
    category: "Content",
    definition:
      "A prompt that encourages an audience to take a specific action, such as visiting a website or making a purchase.",
    example:
      "Use the code in my bio to explore the collection.",
  },
  {
    term: "Campaign",
    letter: "C",
    category: "Campaigns",
    definition:
      "A coordinated set of marketing activities designed to achieve a defined objective within a specific period.",
    example:
      "A brand partners with ten creators to launch a seasonal collection.",
  },
  {
    term: "Click-Through Rate (CTR)",
    letter: "C",
    category: "Analytics",
    definition:
      "The percentage of impressions that result in clicks.",
    example:
      "A link receives 200 clicks from 10,000 impressions, giving a CTR of 2%.",
  },
  {
    term: "Conversion Rate",
    letter: "C",
    category: "Analytics",
    definition:
      "The percentage of people who complete a desired action after interacting with a campaign.",
    example:
      "If 50 of 1,000 visitors purchase, the conversion rate is 5%.",
  },
  {
    term: "Creator Discovery",
    letter: "C",
    category: "Strategy",
    definition:
      "The process of finding creators whose audience, content, values, and performance align with a brand's objectives.",
    example:
      "A team filters creators by niche, location, engagement, and audience fit.",
  },
  {
    term: "Deliverables",
    letter: "D",
    category: "Campaigns",
    definition:
      "The agreed content or services a creator must provide as part of a collaboration.",
    example:
      "One Reel, two stories, and a set of product photographs.",
  },
  {
    term: "Engagement Rate",
    letter: "E",
    category: "Analytics",
    definition:
      "A metric measuring interactions with content relative to a chosen baseline, such as reach or followers. The calculation varies by platform and tool.",
    example:
      "A team compares likes, comments, saves, and shares against reach.",
  },
  {
    term: "Exclusivity",
    letter: "E",
    category: "Contracts",
    definition:
      "A contractual restriction that limits a creator from promoting specified competing brands for an agreed period or within a defined category.",
    example:
      "A creator agrees not to promote competing skincare brands for 30 days.",
  },
  {
    term: "FTC Disclosure",
    letter: "F",
    category: "Compliance",
    definition:
      "A disclosure intended to make a material relationship between a creator and a brand clear to the audience. Applicable requirements depend on jurisdiction.",
    example:
      "A creator clearly labels a sponsored post as an advertisement.",
  },
  {
    term: "Ghosting",
    letter: "G",
    category: "Relationships",
    definition:
      "When a party unexpectedly stops responding during a business conversation or collaboration.",
    example:
      "A creator stops replying after agreeing to discuss campaign terms.",
  },
  {
    term: "Hashtag",
    letter: "H",
    category: "Content",
    definition:
      "A word or phrase preceded by the # symbol that helps label or categorize social content.",
    example:
      "A campaign uses a consistent branded hashtag across creator posts.",
  },
  {
    term: "Impressions",
    letter: "I",
    category: "Analytics",
    definition:
      "The number of times content is displayed. Impressions are not necessarily unique people.",
    example:
      "A post generates 20,000 impressions, including repeat views.",
  },
  {
    term: "Influencer Marketing",
    letter: "I",
    category: "Strategy",
    definition:
      "A marketing approach that works with influential content creators to communicate with relevant audiences.",
    example:
      "A fitness brand partners with trainers to demonstrate a new product.",
  },
  {
    term: "Key Performance Indicator (KPI)",
    letter: "K",
    category: "Analytics",
    definition:
      "A measurable value used to evaluate progress toward a business or campaign objective.",
    example:
      "A campaign tracks qualified clicks, sales, and cost per acquisition.",
  },
  {
    term: "Micro-Influencer",
    letter: "M",
    category: "Creators",
    definition:
      "A creator commonly described as having a relatively small audience compared with larger influencers. Follower thresholds vary by industry.",
    example:
      "A niche food creator has a highly relevant local audience.",
  },
  {
    term: "Organic Reach",
    letter: "O",
    category: "Analytics",
    definition:
      "The number of people who see content without paid distribution.",
    example:
      "A creator's post reaches followers without being boosted by advertising.",
  },
  {
    term: "Reach",
    letter: "R",
    category: "Analytics",
    definition:
      "The number of unique people who see a piece of content during a given period.",
    example:
      "A post reaches 8,000 unique accounts.",
  },
  {
    term: "Return on Investment (ROI)",
    letter: "R",
    category: "Analytics",
    definition:
      "A measure comparing the return generated by an investment with its cost. Results depend on how return and cost are defined.",
    example:
      "A team compares campaign-attributed revenue with total campaign spend.",
  },
  {
    term: "Usage Rights",
    letter: "U",
    category: "Contracts",
    definition:
      "The permissions granted to a brand to use creator-produced content in specified ways, channels, territories, and time periods.",
    example:
      "A contract allows a brand to repost a video on its website for six months.",
  },
  {
    term: "User-Generated Content (UGC)",
    letter: "U",
    category: "Content",
    definition:
      "Content created by customers, users, or independent creators about a brand or product. It may be commissioned or organic.",
    example:
      "A creator films a product demonstration for a brand's social channels.",
  },
  {
    term: "Whitelisting",
    letter: "W",
    category: "Advertising",
    definition:
      "A commonly used industry term for running paid advertising through or using a creator's social account or identity, with appropriate authorization.",
    example:
      "A brand receives permission to promote a creator's post as an ad.",
  },
];

const categories = [
  "All",
  "Analytics",
  "Campaigns",
  "Commerce",
  "Content",
  "Creators",
  "Strategy",
  "Contracts",
  "Compliance",
  "Advertising",
  "Relationships",
];

export default function GlossaryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [activeLetter, setActiveLetter] = useState("All");
  const [copied, setCopied] = useState("");
  const [expandedTerm, setExpandedTerm] = useState("");

  const letters = useMemo(
    () => ["All", ...Array.from(new Set(terms.map((item) => item.letter))).sort()],
    []
  );

  const filteredTerms = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return terms
      .filter((item) => category === "All" || item.category === category)
      .filter(
        (item) => activeLetter === "All" || item.letter === activeLetter
      )
      .filter(
        (item) =>
          !normalized ||
          item.term.toLowerCase().includes(normalized) ||
          item.definition.toLowerCase().includes(normalized) ||
          item.category.toLowerCase().includes(normalized)
      )
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [query, category, activeLetter]);

  async function copyTerm(item: GlossaryTerm) {
    const text = `${item.term}\n${item.definition}\nExample: ${item.example}`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(item.term);
      window.setTimeout(() => setCopied(""), 1800);
    } catch {
      setCopied("");
    }
  }

  return (
    <main className="glossary-page">
      <section className="glossary-hero">
        <div className="glossary-hero-orb glossary-orb-one" />
        <div className="glossary-hero-orb glossary-orb-two" />

        <div className="glossary-hero-content">
          <div className="eyebrow">
            <Sparkles size={15} />
            THE CREATOR MARKETING KNOWLEDGE HUB
          </div>

          <h1>
            Speak the language of
            <br />
            <span className="gradient-text">creator marketing.</span>
          </h1>

          <p>
            Your practical A–Z guide to the terms, metrics, and concepts
            shaping modern creator partnerships.
          </p>

          <div className="glossary-search">
            <Search size={20} />
            <input
              aria-label="Search glossary"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveLetter("All");
              }}
              placeholder="Search a term, metric, or concept..."
            />
            {query && (
              <button
                type="button"
                className="glossary-clear"
                onClick={() => setQuery("")}
              >
                Clear
              </button>
            )}
          </div>

          <div className="glossary-hero-meta">
            <span>
              <strong>{terms.length}</strong> essential terms
            </span>
            <span className="glossary-meta-dot" />
            <span>Clear definitions</span>
            <span className="glossary-meta-dot" />
            <span>Practical examples</span>
          </div>
        </div>
      </section>

      <section className="section glossary-main">
        <div className="glossary-section-heading">
          <div>
            <span className="eyebrow">THE DICTIONARY</span>
            <h2>Explore the terminology.</h2>
            <p>Find a definition, understand the context, and put it to use.</p>
          </div>
          <div className="glossary-result-count">
            <strong>{filteredTerms.length}</strong>
            <span>terms found</span>
          </div>
        </div>

        <div className="glossary-letter-nav" aria-label="Filter by first letter">
          {letters.map((letter) => (
            <button
              type="button"
              key={letter}
              className={activeLetter === letter ? "active" : ""}
              onClick={() => setActiveLetter(letter)}
            >
              {letter === "All" ? "All" : letter}
            </button>
          ))}
        </div>

        <div className="glossary-category-row">
          <span className="glossary-filter-label">CATEGORY</span>
          <div className="glossary-category-scroll">
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
        </div>

        {filteredTerms.length > 0 ? (
          <div className="glossary-list">
            {filteredTerms.map((item) => {
              const expanded = expandedTerm === item.term;

              return (
                <article className="glossary-term-card" key={item.term}>
                  <div className="glossary-letter-badge">{item.letter}</div>

                  <div className="glossary-term-content">
                    <div className="glossary-term-topline">
                      <h3>{item.term}</h3>
                      <span className="glossary-category-tag">
                        {item.category}
                      </span>
                    </div>

                    <p>{item.definition}</p>

                    {expanded && (
                      <div className="glossary-example">
                        <span>IN PRACTICE</span>
                        <p>{item.example}</p>
                      </div>
                    )}

                    <div className="glossary-term-actions">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedTerm(expanded ? "" : item.term)
                        }
                      >
                        {expanded ? "Hide example" : "See an example"}
                      </button>
                      <button
                        type="button"
                        onClick={() => void copyTerm(item)}
                        className="glossary-copy-button"
                      >
                        {copied === item.term ? (
                          <Check size={15} />
                        ) : (
                          <Copy size={15} />
                        )}
                        {copied === item.term ? "Copied" : "Copy definition"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="glossary-empty">
            <Search size={28} />
            <h3>No matching terms found</h3>
            <p>Try another search or reset your filters to explore the glossary.</p>
            <button
              type="button"
              className="button button-primary"
              onClick={() => {
                setQuery("");
                setCategory("All");
                setActiveLetter("All");
              }}
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      <section className="section glossary-bottom-section">
        <div className="glossary-bottom-card">
          <div className="glossary-bottom-icon">
            <Sparkles size={23} />
          </div>
          <div>
            <span className="eyebrow">PUT KNOWLEDGE INTO ACTION</span>
            <h2>Ready to build better creator partnerships?</h2>
            <p>
              Bring discovery, campaign management, and creator relationships
              together in one workspace.
            </p>
          </div>
          <a href="/get-started" className="button button-primary">
            Explore Infloro <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
