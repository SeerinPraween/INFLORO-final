
"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  CalendarDays,
  Check,
  Clock3,
  FileText,
  Search,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";

type Article = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  accent: string;
  featured?: boolean;
  content: string[];
};

const articles: Article[] = [
  {
    id: 1,
    title: "The Future of Creator Marketing Is Built on Relationships",
    excerpt:
      "Why the strongest creator programs are moving beyond one-off collaborations toward long-term, measurable partnerships.",
    category: "Strategy",
    date: "Oct 22, 2026",
    readTime: "8 min read",
    author: "Infloro Editorial",
    accent: "blog-purple",
    featured: true,
    content: [
      "Creator marketing works best when it is treated as a relationship channel, not simply a distribution tactic. A thoughtful partnership can bring a brand relevant storytelling, community trust, and a more consistent creative process.",
      "Start by defining what a successful partnership should accomplish. Reach, awareness, engagement, traffic, and sales are different objectives, so the creators you choose and the way you measure their work should reflect the outcome you want.",
      "Next, invest in the creator experience. Share clear briefs, agree on timelines and usage rights, give constructive feedback, and make payment expectations transparent. Creators are more likely to do their best work when the collaboration is organized and respectful.",
      "Finally, review results together. Document what resonated with the audience, which formats performed well, and what you would change. Over time, these learnings help teams build stronger creator relationships and more repeatable campaigns.",
    ],
  },
  {
    id: 2,
    title: "Engagement Rate Isn't the Whole Story",
    excerpt:
      "A practical way to evaluate creator performance without relying on one number or a follower-count shortcut.",
    category: "Analytics",
    date: "Oct 18, 2026",
    readTime: "6 min read",
    author: "Infloro Editorial",
    accent: "blog-blue",
    content: [
      "Engagement rate can help you understand how an audience responds to content, but it does not explain everything about a creator's value to a campaign.",
      "Look at the context around each metric. Audience relevance, content quality, comment quality, reach, consistency, and the campaign objective all influence how useful a creator may be for your brand.",
      "For a conversion-focused campaign, use suitable tracking links, landing pages, or creator codes where possible. For awareness, reach and audience fit may be more useful. Compare like with like and document your measurement assumptions.",
    ],
  },
  {
    id: 3,
    title: "Seven Elements of a Better Creator Brief",
    excerpt:
      "Give creators the clarity they need while leaving room for the original ideas their audiences value.",
    category: "Campaigns",
    date: "Oct 14, 2026",
    readTime: "5 min read",
    author: "Infloro Editorial",
    accent: "blog-peach",
    content: [
      "A strong creator brief explains the campaign objective, intended audience, key message, deliverables, deadlines, required disclosures, and approval process.",
      "Keep the language specific and useful. Explain what must be included, what should be avoided, and which elements are open to creative interpretation.",
      "Before production begins, confirm deliverables, payment terms, usage rights, revision expectations, and the people responsible for approvals. Written alignment prevents many avoidable delays.",
    ],
  },
  {
    id: 4,
    title: "How to Build a Creator Shortlist With Confidence",
    excerpt:
      "A repeatable evaluation framework for matching creators with a brand, audience, and campaign goal.",
    category: "Discovery",
    date: "Oct 10, 2026",
    readTime: "7 min read",
    author: "Infloro Editorial",
    accent: "blog-mint",
    content: [
      "Begin with the campaign objective and the audience you need to reach. Define relevant topics, platforms, location requirements, content formats, and budget before searching.",
      "Review creators for content quality, audience alignment, brand suitability, and consistency. Use engagement and performance data as context rather than treating any single metric as a guarantee.",
      "A shared scorecard helps teams explain their choices and compare candidates more consistently. Record the reason each creator made the shortlist so future campaigns can build on the same learning.",
    ],
  },
  {
    id: 5,
    title: "UGC: From Content Request to Repeatable Workflow",
    excerpt:
      "Organize creator briefs, asset delivery, feedback, approvals, and content usage in a smoother process.",
    category: "UGC & Content",
    date: "Oct 06, 2026",
    readTime: "6 min read",
    author: "Infloro Editorial",
    accent: "blog-rose",
    content: [
      "UGC projects become easier to manage when every participant knows what is expected and where the latest information lives.",
      "Use a consistent brief, specify formats and delivery dates, agree on usage rights, and establish a clear feedback process. Keep asset versions organized and make approval status visible to the team.",
      "After publication or delivery, record what worked and identify assets that may be useful in future campaigns, subject to the agreed permissions.",
    ],
  },
  {
    id: 6,
    title: "A Smarter Way to Manage Creator Follow-ups",
    excerpt:
      "Reduce missed conversations with clear pipeline stages, ownership, and timely next steps.",
    category: "Operations",
    date: "Sep 29, 2026",
    readTime: "4 min read",
    author: "Infloro Editorial",
    accent: "blog-gold",
    content: [
      "Creator relationships can become difficult to manage when conversations are spread across email, social messages, spreadsheets, and individual notes.",
      "A shared pipeline makes it easier to understand the current stage of each relationship, who owns the next action, and when a follow-up is due.",
      "Keep outreach personal, respect creators' preferences, and avoid sending repetitive messages. A good process supports better communication rather than replacing it.",
    ],
  },
  {
    id: 7,
    title: "Making Affiliate Partnerships Easier to Measure",
    excerpt:
      "Connect creator codes, attribution rules, commissions, and reporting to a clearer affiliate workflow.",
    category: "Affiliate Marketing",
    date: "Sep 23, 2026",
    readTime: "7 min read",
    author: "Infloro Editorial",
    accent: "blog-blue",
    content: [
      "Affiliate programs need clear terms and reliable tracking. Before launching, decide how commissions are calculated, how returns are handled, and which attribution rules apply.",
      "Give creators clear information about codes, links, commission terms, payment timing, and any promotional restrictions. Keep the rules accessible and consistent.",
      "When reviewing performance, consider conversion quality, order value, returns, and overall program economics. Report the assumptions behind your calculations.",
    ],
  },
  {
    id: 8,
    title: "What to Review After Every Creator Campaign",
    excerpt:
      "Turn campaign reporting into useful decisions for your next brief, creator mix, and budget.",
    category: "Analytics",
    date: "Sep 16, 2026",
    readTime: "5 min read",
    author: "Infloro Editorial",
    accent: "blog-purple",
    content: [
      "A campaign review should begin with the objective and the KPIs agreed before launch. Compare actual results with those expectations and note important context.",
      "Look for patterns across creators, content formats, audience responses, and distribution channels. Avoid assuming that a single successful post guarantees the same result in every campaign.",
      "Finish with a small set of actions: what to repeat, what to test, what to stop, and which questions require more data. Share the findings with everyone involved in the next campaign.",
    ],
  },
];

const categories = [
  "All articles",
  "Strategy",
  "Analytics",
  "Campaigns",
  "Discovery",
  "UGC & Content",
  "Operations",
  "Affiliate Marketing",
];

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All articles");
  const [saved, setSaved] = useState<number[]>([]);
  const [selected, setSelected] = useState<Article | null>(null);
  const [copied, setCopied] = useState(false);

  const featured = articles.find((article) => article.featured)!;

  const filteredArticles = useMemo(
    () =>
      articles.filter((article) => {
        const matchesQuery =
          `${article.title} ${article.excerpt} ${article.category}`
            .toLowerCase()
            .includes(query.toLowerCase());

        const matchesCategory =
          category === "All articles" || article.category === category;

        return matchesQuery && matchesCategory;
      }),
    [query, category]
  );

  const regularArticles = filteredArticles.filter(
    (article) => article.id !== featured.id
  );

  function toggleSaved(id: number) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  async function copyArticle(article: Article) {
    const text = `${article.title}\n\n${article.excerpt}\n\n${article.content.join("\n\n")}`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  function downloadArticle(article: Article) {
    const text = [
      article.title,
      "=".repeat(article.title.length),
      `${article.category} · ${article.date} · ${article.readTime}`,
      "",
      article.excerpt,
      "",
      ...article.content.flatMap((paragraph) => [paragraph, ""]),
      "Published by the INFLORO Editorial team.",
      "Educational content; adapt recommendations to your campaign context.",
    ].join("\n");

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${article.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.txt`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-grid" />
        <div className="blog-hero-inner">
          <div className="blog-hero-copy">
            <span className="eyebrow"><Sparkles size={15} /> THE INFLORO JOURNAL</span>
            <h1>
              Ideas worth
              <br />
              <span className="gradient-text">putting to work.</span>
            </h1>
            <p>
              Fresh perspectives and practical ideas for teams building
              meaningful creator relationships and better marketing campaigns.
            </p>
            <a href="#latest-articles" className="button button-primary">
              Read the latest <ArrowRight size={17} />
            </a>
            <div className="blog-hero-note"><TrendingUp size={16} /> Strategy, creativity, and measurable growth</div>
          </div>

          <div className="blog-hero-visual" aria-hidden="true">
            <div className="blog-visual-circle blog-circle-one" />
            <div className="blog-visual-circle blog-circle-two" />
            <div className="blog-visual-paper">
              <div className="blog-paper-top"><span>INFLORO / JOURNAL</span><ArrowUpRight size={18} /></div>
              <div className="blog-paper-symbol"><Sparkles size={39} /></div>
              <span className="blog-paper-kicker">THOUGHTS ON</span>
              <h3>Creators.<br />Culture.<br /><span>Connection.</span></h3>
              <div className="blog-paper-lines"><i /><i /><i /></div>
              <span className="blog-paper-footer">ISSUE 01 — 2026</span>
            </div>
            <div className="blog-visual-chip"><FileText size={16} /><span>Ideas into action</span></div>
            <div className="blog-visual-sticker">READ<br />THINK<br />GROW</div>
          </div>
        </div>
      </section>

      <section className="blog-featured-section">
        <div className="blog-featured-inner">
          <div className="blog-featured-heading">
            <span className="eyebrow">EDITOR'S PICK</span>
            <span className="blog-featured-label"><Sparkles size={14} /> Featured article</span>
          </div>
          <article className="blog-featured-card">
            <div className={`blog-featured-art ${featured.accent}`}>
              <span className="blog-featured-art-label">THE CREATOR<br />RELATIONSHIP EDITION</span>
              <div className="blog-featured-art-shape"><span /><span /><span /></div>
              <div className="blog-featured-art-bottom"><span>INFLORO INSIGHTS</span><ArrowUpRight size={24} /></div>
            </div>
            <div className="blog-featured-content">
              <div className="blog-card-meta"><span>{featured.category}</span><span>{featured.date}</span></div>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <div className="blog-featured-details"><span><Clock3 size={15} /> {featured.readTime}</span><span>By {featured.author}</span></div>
              <div className="blog-featured-actions">
                <button className="button button-primary" onClick={() => { setSelected(featured); setCopied(false); }}>
                  Read article <ArrowRight size={17} />
                </button>
                <button className={`blog-save-featured ${saved.includes(featured.id) ? "is-saved" : ""}`} onClick={() => toggleSaved(featured.id)}>
                  <Bookmark size={16} fill={saved.includes(featured.id) ? "currentColor" : "none"} />
                  {saved.includes(featured.id) ? "Saved" : "Save for later"}
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section blog-library" id="latest-articles">
        <div className="blog-library-heading">
          <div><span className="eyebrow">THE LATEST THINKING</span><h2>Explore the <span className="gradient-text">journal.</span></h2><p>Useful ideas for the work you do every day.</p></div>
          <span className="blog-result-count">{filteredArticles.length} articles</span>
        </div>

        <div className="blog-toolbar">
          <label className="blog-search">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles..." aria-label="Search blog articles" />
            {query && <button onClick={() => setQuery("")} type="button" aria-label="Clear search"><X size={16} /></button>}
          </label>
          <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter articles by topic">
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>

        {filteredArticles.length > 0 && (
          <div className="blog-articles-grid">
            {regularArticles.map((article) => (
              <article className="blog-article-card" key={article.id}>
                <div className={`blog-article-art ${article.accent}`}>
                  <span className="blog-article-category">{article.category}</span>
                  <button className={`blog-article-bookmark ${saved.includes(article.id) ? "is-saved" : ""}`} onClick={() => toggleSaved(article.id)} aria-label={saved.includes(article.id) ? "Remove saved article" : "Save article"} aria-pressed={saved.includes(article.id)}>
                    <Bookmark size={17} fill={saved.includes(article.id) ? "currentColor" : "none"} />
                  </button>
                  <div className="blog-article-art-symbol">
                    {article.id % 4 === 0 ? <TrendingUp size={39} /> : article.id % 4 === 1 ? <Sparkles size={39} /> : article.id % 4 === 2 ? <FileText size={39} /> : <ArrowUpRight size={39} />}
                  </div>
                  <div className="blog-article-art-footer"><span>INFLORO / INSIGHTS</span><span>0{article.id}</span></div>
                </div>
                <div className="blog-article-content">
                  <div className="blog-article-meta"><span><CalendarDays size={14} /> {article.date}</span><span><Clock3 size={14} /> {article.readTime}</span></div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="blog-article-footer">
                    <span className="blog-author-avatar">I</span>
                    <span className="blog-author-name">{article.author}</span>
                    <button onClick={() => { setSelected(article); setCopied(false); }} aria-label={`Read ${article.title}`}><ArrowRight size={18} /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {filteredArticles.length === 1 && filteredArticles[0].id === featured.id && (
          <div className="blog-empty"><Search size={25} /><h3>Only the featured article matches</h3><p>It's highlighted above. Try another topic to discover more articles.</p></div>
        )}

        {filteredArticles.length === 0 && (
          <div className="blog-empty"><Search size={25} /><h3>No articles found</h3><p>Try a different search or reset your filters.</p><button className="button button-primary" onClick={() => { setQuery(""); setCategory("All articles"); }}>Reset filters</button></div>
        )}
      </section>

      <section className="blog-newsletter">
        <div className="blog-newsletter-mark"><Sparkles size={22} /></div>
        <span className="eyebrow">GOOD IDEAS, OCCASIONALLY</span>
        <h2>Make room for <span>new perspectives.</span></h2>
        <p>Explore more practical resources to help your creator marketing work smarter.</p>
        <a href="/resources" className="button button-primary">Explore all resources <ArrowRight size={17} /></a>
      </section>

      {selected && (
        <div className="blog-modal-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}>
          <article className="blog-article-modal" role="dialog" aria-modal="true" aria-labelledby="blog-modal-title">
            <button className="blog-modal-close" onClick={() => setSelected(null)} aria-label="Close article"><X size={19} /></button>
            <span className="eyebrow">INFLORO JOURNAL / {selected.category.toUpperCase()}</span>
            <div className={`blog-modal-art ${selected.accent}`}><Sparkles size={35} /><span>{selected.category} · {selected.readTime}</span></div>
            <div className="blog-modal-meta"><span><CalendarDays size={14} /> {selected.date}</span><span>By {selected.author}</span></div>
            <h2 id="blog-modal-title">{selected.title}</h2>
            <p className="blog-modal-excerpt">{selected.excerpt}</p>
            <div className="blog-modal-body">
              {selected.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
            <div className="blog-modal-actions">
              <button className="button button-primary" onClick={() => downloadArticle(selected)}><FileText size={16} /> Download article</button>
              <button className="button button-quiet" onClick={() => copyArticle(selected)}>{copied ? <Check size={16} /> : <FileText size={16} />}{copied ? "Copied!" : "Copy article"}</button>
              <button className={`blog-modal-save ${saved.includes(selected.id) ? "is-saved" : ""}`} onClick={() => toggleSaved(selected.id)}><Bookmark size={16} fill={saved.includes(selected.id) ? "currentColor" : "none"} />{saved.includes(selected.id) ? "Saved" : "Save"}</button>
            </div>
            <p className="blog-editorial-note">This is original educational content for the INFLORO demo website. Examples and recommendations are illustrative and should be adapted to your context.</p>
          </article>
        </div>
      )}
    </main>
  );
}
