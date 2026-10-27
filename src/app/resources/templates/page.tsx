
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowRight,
  Bookmark,
  Check,
  Clipboard,
  Copy,
  FileText,
  LayoutTemplate,
  Mail,
  Megaphone,
  MessageSquare,
  Search,
  Sparkles,
  Target,
  X,
} from "lucide-react";

type Template = {
  id: number;
  title: string;
  description: string;
  category: string;
  format: string;
  tag: string;
  tone: string;
  content: string[];
};

const templates: Template[] = [
  {
    id: 1,
    title: "Creator Campaign Brief",
    description:
      "Align your team and creators around objectives, deliverables, audience, messaging, and deadlines.",
    category: "Campaigns",
    format: "Brief",
    tag: "MOST POPULAR",
    tone: "purple",
    content: [
      "CAMPAIGN OVERVIEW",
      "Campaign name: [Enter campaign name]",
      "Brand and product: [Describe your brand or product]",
      "Campaign objective: [Awareness, engagement, traffic, or conversions]",
      "",
      "TARGET AUDIENCE",
      "Audience profile: [Age range, interests, location, and needs]",
      "Key message: [What should the audience remember?]",
      "",
      "CREATOR DELIVERABLES",
      "Platforms and content formats: [Specify channels and formats]",
      "Number of deliverables: [Enter quantity]",
      "Key dates: [Brief, draft, approval, and publication]",
      "",
      "MEASUREMENT",
      "Success metrics: [Reach, engagement, clicks, or conversions]",
      "Tracking method: [Links, codes, or campaign reporting]",
    ],
  },
  {
    id: 2,
    title: "Creator Outreach Email",
    description:
      "Start meaningful conversations with creators using a clear, personal, and professional first message.",
    category: "Outreach",
    format: "Email",
    tag: "QUICK START",
    tone: "blue",
    content: [
      "Subject: Collaboration idea with [Brand]",
      "",
      "Hi [Creator name],",
      "",
      "I've been following your content about [specific topic] and particularly enjoyed [specific post or detail].",
      "",
      "I'm reaching out from [Brand]. We're exploring a collaboration focused on [campaign objective], and I think your content and audience could be a great fit.",
      "",
      "Would you be open to discussing the idea? I can share the campaign brief, deliverables, timeline, and proposed compensation.",
      "",
      "Thanks,",
      "[Your name]",
      "[Role and brand]",
    ],
  },
  {
    id: 3,
    title: "Influencer Campaign Checklist",
    description:
      "Keep research, outreach, agreements, content approvals, launch, and reporting organized.",
    category: "Campaigns",
    format: "Checklist",
    tag: "TEAM FAVORITE",
    tone: "mint",
    content: [
      "BEFORE LAUNCH",
      "[ ] Define objectives and KPIs",
      "[ ] Confirm target audience and budget",
      "[ ] Research and shortlist creators",
      "[ ] Check audience fit and content quality",
      "[ ] Send outreach and confirm availability",
      "[ ] Agree on scope, compensation, and usage rights",
      "",
      "CONTENT AND APPROVALS",
      "[ ] Share the campaign brief",
      "[ ] Confirm deliverables and deadlines",
      "[ ] Review content and provide feedback",
      "[ ] Confirm required disclosures",
      "",
      "AFTER LAUNCH",
      "[ ] Check publication and links",
      "[ ] Capture campaign performance",
      "[ ] Collect creator feedback",
      "[ ] Prepare the final report",
    ],
  },
  {
    id: 4,
    title: "Creator Evaluation Scorecard",
    description:
      "Compare potential partners using consistent criteria instead of follower count alone.",
    category: "Discovery",
    format: "Scorecard",
    tag: "STRATEGY",
    tone: "peach",
    content: [
      "CREATOR: [Name / handle]",
      "PLATFORM: [Channel]",
      "",
      "Rate each criterion from 1 to 5.",
      "Audience relevance: [1–5]",
      "Content quality: [1–5]",
      "Engagement quality: [1–5]",
      "Brand alignment: [1–5]",
      "Professional reliability: [1–5]",
      "Budget fit: [1–5]",
      "",
      "TOTAL SCORE: [Add scores]",
      "Strengths: [What makes this creator a fit?]",
      "Risks or questions: [What needs verification?]",
      "Recommendation: [Shortlist / Review / Decline]",
      "",
      "Note: Validate audience and performance data before making a decision.",
    ],
  },
  {
    id: 5,
    title: "Campaign Performance Report",
    description:
      "Summarize campaign results, compare outcomes with goals, and identify next steps.",
    category: "Analytics",
    format: "Report",
    tag: "REPORTING",
    tone: "blue",
    content: [
      "CAMPAIGN SUMMARY",
      "Campaign: [Name]",
      "Reporting period: [Start and end date]",
      "Objective: [Primary goal]",
      "",
      "PERFORMANCE",
      "Creators activated: [Number]",
      "Content published: [Number]",
      "Reach and impressions: [Verified values]",
      "Engagement rate: [Value and calculation method]",
      "Clicks and conversions: [Verified values]",
      "Spend: [Amount and currency]",
      "",
      "RESULTS AGAINST GOALS",
      "Target: [Goal]",
      "Actual: [Result]",
      "Variance: [Difference]",
      "",
      "KEY LEARNINGS",
      "What worked: [Evidence-based observations]",
      "What to improve: [Specific opportunities]",
      "Recommended next steps: [Actions, owners, and dates]",
    ],
  },
  {
    id: 6,
    title: "Creator Follow-Up Message",
    description:
      "Follow up respectfully with creators while making the next step easy to understand.",
    category: "Outreach",
    format: "Message",
    tag: "QUICK START",
    tone: "purple",
    content: [
      "Hi [Creator name],",
      "",
      "I wanted to follow up on my note about a potential collaboration with [Brand].",
      "",
      "We think there may be a good fit around [campaign theme], and I'd be happy to share more details if you're interested.",
      "",
      "No pressure if the timing isn't right. If you'd like to explore it, just let me know and we can discuss the brief, timeline, and compensation.",
      "",
      "Thanks,",
      "[Your name]",
    ],
  },
];

const categories = [
  "All templates",
  "Campaigns",
  "Outreach",
  "Discovery",
  "Analytics",
];

export default function TemplatesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All templates");
  const [saved, setSaved] = useState<number[]>([]);
  const [selected, setSelected] = useState<Template | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredTemplates = useMemo(
    () =>
      templates.filter((template) => {
        const matchesCategory =
          category === "All templates" || template.category === category;
        const matchesQuery =
          `${template.title} ${template.description} ${template.category} ${template.format}`
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

  async function copyTemplate(template: Template) {
    const text = template.content.join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
      setSelected(template);
    }
  }

  function downloadTemplate(template: Template) {
    const blob = new Blob([template.content.join("\n")], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${template.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.txt`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="templates-page">
      <section className="templates-hero">
        <div className="templates-container templates-hero-inner">
          <div className="templates-hero-copy">
            <div className="eyebrow">
              <LayoutTemplate size={15} /> THE INFLORO TOOLKIT
            </div>
            <h1>
              Less starting
              <br />
              from scratch.
              <br />
              <span className="gradient-text">More getting done.</span>
            </h1>
            <p>
              Practical templates for planning campaigns, reaching creators,
              evaluating partners, and reporting what works.
            </p>
            <a href="#template-library" className="button button-primary">
              Explore templates <ArrowRight size={16} />
            </a>
            <div className="templates-hero-note">
              <Check size={15} /> Ready-to-customize resources for your team
            </div>
          </div>

          <div className="templates-hero-art">
            <div className="templates-art-top">
              <span>YOUR CREATOR TOOLKIT</span>
              <Sparkles size={17} />
            </div>
            <div className="templates-paper templates-paper-back">
              <div className="templates-paper-line short" />
              <div className="templates-paper-line" />
              <div className="templates-paper-line medium" />
            </div>
            <div className="templates-paper templates-paper-front">
              <div className="templates-paper-heading">
                <span className="templates-paper-icon"><FileText size={19} /></span>
                <span>CAMPAIGN BRIEF <small>INFLORO TEMPLATE</small></span>
              </div>
              <div className="templates-paper-title">A plan for better partnerships.</div>
              <div className="templates-paper-line" />
              <div className="templates-paper-line medium" />
              <div className="templates-paper-subheading">CAMPAIGN OBJECTIVES</div>
              <div className="templates-paper-line" />
              <div className="templates-paper-line short" />
              <div className="templates-paper-checks">
                <span><Check size={11} /> Goals</span>
                <span><Check size={11} /> Creators</span>
                <span><Check size={11} /> Deliverables</span>
              </div>
            </div>
            <div className="templates-floating-chip templates-chip-one">
              <Target size={15} /> Clear goals
            </div>
            <div className="templates-floating-chip templates-chip-two">
              <Clipboard size={15} /> Ready to use
            </div>
            <div className="templates-art-footer">
              <span>PLAN BETTER</span><span>WORK SMARTER</span><span>GROW TOGETHER</span>
            </div>
          </div>
        </div>
      </section>

      <section className="templates-container templates-benefits">
        <div><span><Copy size={18} /></span><strong>Easy to customize</strong><p>Adapt each resource to your workflow.</p></div>
        <div><span><Target size={18} /></span><strong>Built for real work</strong><p>Structure tasks and align your team.</p></div>
        <div><span><ArrowDownToLine size={18} /></span><strong>Keep a copy</strong><p>Copy or download templates as text files.</p></div>
      </section>

      <section className="templates-container templates-library" id="template-library">
        <div className="templates-section-heading">
          <div>
            <span className="eyebrow">THE RESOURCE LIBRARY</span>
            <h2>Find your next <span className="gradient-text">shortcut.</span></h2>
            <p>Pick a template, preview it, and make it yours.</p>
          </div>
          <span className="templates-count">{filteredTemplates.length.toString().padStart(2, "0")} TEMPLATES</span>
        </div>

        <label className="templates-search">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search templates, tasks, and formats..."
            aria-label="Search templates"
          />
        </label>

        <div className="templates-filter-row">
          <div className="templates-categories">
            {categories.map((item) => (
              <button
                key={item}
                className={`templates-category ${category === item ? "active" : ""}`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <span className="templates-saved-count">
            <Bookmark size={14} /> {saved.length} saved
          </span>
        </div>

        <div className="templates-grid">
          {filteredTemplates.map((template, index) => (
            <article className="templates-card" key={template.id}>
              <div className={`templates-card-art templates-tone-${template.tone}`}>
                <span className="templates-card-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="templates-card-format">{template.format}</span>
                <div className="templates-card-symbol">
                  {template.category === "Outreach" ? <Mail size={26} /> :
                   template.category === "Discovery" ? <Target size={26} /> :
                   template.category === "Analytics" ? <Megaphone size={26} /> :
                   template.format === "Message" ? <MessageSquare size={26} /> :
                   <FileText size={26} />}
                </div>
                <div className="templates-card-art-footer">
                  <span>INFLORO TOOLKIT</span><span>{template.tag}</span>
                </div>
                <button
                  className={`templates-save ${saved.includes(template.id) ? "saved" : ""}`}
                  onClick={() => toggleSaved(template.id)}
                  aria-label={saved.includes(template.id) ? "Unsave template" : "Save template"}
                  title={saved.includes(template.id) ? "Unsave template" : "Save template"}
                >
                  <Bookmark size={16} fill={saved.includes(template.id) ? "currentColor" : "none"} />
                </button>
              </div>

              <div className="templates-card-body">
                <div className="templates-card-category">{template.category}</div>
                <h3>{template.title}</h3>
                <p>{template.description}</p>
                <div className="templates-card-actions">
                  <button className="templates-preview-button" onClick={() => { setSelected(template); setCopied(false); }}>
                    Preview template
                  </button>
                  <button
                    className="templates-download-button"
                    onClick={() => downloadTemplate(template)}
                    aria-label={`Download ${template.title}`}
                    title="Download as text file"
                  >
                    <ArrowDownToLine size={17} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="templates-empty">
            <Search size={26} />
            <h3>No templates found</h3>
            <p>Try a different search term or category.</p>
            <button className="button button-quiet" onClick={() => { setQuery(""); setCategory("All templates"); }}>
              Clear filters
            </button>
          </div>
        )}
      </section>

      <section className="templates-container templates-cta">
        <div className="templates-cta-icon"><Sparkles size={24} /></div>
        <div>
          <span className="eyebrow">A BETTER WAY TO WORK</span>
          <h2>Ready to connect the dots?</h2>
          <p>Manage creators, campaigns, and collaboration workflows in one place.</p>
        </div>
        <div className="templates-cta-actions">
          <Link href="/get-started" className="button button-primary">Get started <ArrowRight size={16} /></Link>
          <Link href="/resources" className="button button-quiet">All resources</Link>
        </div>
      </section>

      {selected && (
        <div
          className="templates-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <section
            className="templates-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="template-modal-title"
          >
            <div className="templates-modal-header">
              <div>
                <span className="eyebrow">TEMPLATE PREVIEW</span>
                <h2 id="template-modal-title">{selected.title}</h2>
                <p>{selected.description}</p>
              </div>
              <button className="templates-modal-close" onClick={() => setSelected(null)} aria-label="Close preview">
                <X size={20} />
              </button>
            </div>
            <pre className="templates-modal-content">{selected.content.join("\n")}</pre>
            <div className="templates-modal-actions">
              <button className="button button-primary" onClick={() => copyTemplate(selected)}>
                {copied ? <Check size={16} /> : <Clipboard size={16} />}
                {copied ? "Copied!" : "Copy template"}
              </button>
              <button className="button button-quiet" onClick={() => downloadTemplate(selected)}>
                <ArrowDownToLine size={16} /> Download .txt
              </button>
            </div>
            <p className="templates-modal-note">
              Customize the placeholders to fit your brand, campaign, and workflow.
            </p>
          </section>
        </div>
      )}
    </main>
  );
}
