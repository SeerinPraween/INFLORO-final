
"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ListChecks,
  RotateCcw,
  Search,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

type Playbook = {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: string;
  steps: string[];
  outcome: string;
  accent: string;
};

const playbooks: Playbook[] = [
  {
    id: 1,
    title: "Launch a Creator Campaign",
    description:
      "Move from campaign objective to a clear brief, creator shortlist, launch, and performance review.",
    category: "Campaigns",
    duration: "5 steps · 45 min",
    difficulty: "Beginner",
    steps: [
      "Define your campaign objective and success metrics",
      "Set audience, platform, budget, and timeline",
      "Shortlist creators against clear selection criteria",
      "Prepare the brief and confirm deliverables",
      "Launch, monitor performance, and document learnings",
    ],
    outcome:
      "A campaign launch plan with clear ownership, deliverables, timelines, and measurement criteria.",
    accent: "playbook-purple",
  },
  {
    id: 2,
    title: "Build a High-Fit Creator Shortlist",
    description:
      "Create a consistent evaluation process to find creators who match your audience and campaign goals.",
    category: "Discovery",
    duration: "5 steps · 30 min",
    difficulty: "Beginner",
    steps: [
      "Translate the campaign goal into creator criteria",
      "Identify relevant niches and platforms",
      "Review content quality and audience fit",
      "Compare candidates using a shared scorecard",
      "Prepare a prioritized shortlist for outreach",
    ],
    outcome:
      "A prioritized creator shortlist with documented reasons for selecting each candidate.",
    accent: "playbook-blue",
  },
  {
    id: 3,
    title: "Create a Creator Outreach System",
    description:
      "Make outreach personal, organized, and easy to follow up without losing track of conversations.",
    category: "Operations",
    duration: "6 steps · 35 min",
    difficulty: "Intermediate",
    steps: [
      "Segment creators by relevance and campaign fit",
      "Personalize the opening message",
      "Explain the opportunity and expected deliverables",
      "Record each contact and response",
      "Schedule appropriate follow-ups",
      "Update the pipeline and next action",
    ],
    outcome:
      "A repeatable outreach workflow with message templates and clear follow-up ownership.",
    accent: "playbook-peach",
  },
  {
    id: 4,
    title: "Run a UGC Production Workflow",
    description:
      "Coordinate briefs, creator submissions, reviews, approvals, and asset handoff in a reliable sequence.",
    category: "UGC & Content",
    duration: "6 steps · 40 min",
    difficulty: "Intermediate",
    steps: [
      "Confirm content formats and usage rights",
      "Prepare the creative brief and references",
      "Agree on deliverables and delivery dates",
      "Collect submissions and organize versions",
      "Share consolidated feedback and approve assets",
      "Archive final assets and record permissions",
    ],
    outcome:
      "An organized UGC pipeline with clear approvals, version control, and asset permissions.",
    accent: "playbook-rose",
  },
  {
    id: 5,
    title: "Review Campaign Performance",
    description:
      "Turn campaign data into meaningful insights and practical recommendations for the next launch.",
    category: "Analytics",
    duration: "5 steps · 25 min",
    difficulty: "Intermediate",
    steps: [
      "Revisit the campaign objective and agreed KPIs",
      "Collect performance data from relevant sources",
      "Compare results with targets and context",
      "Identify strong formats and areas to improve",
      "Document recommendations and next experiments",
    ],
    outcome:
      "A concise campaign review that connects results to clear next steps.",
    accent: "playbook-mint",
  },
  {
    id: 6,
    title: "Set Up an Affiliate Creator Program",
    description:
      "Organize creator offers, commission rules, tracking, reporting, and ongoing program reviews.",
    category: "Affiliate Marketing",
    duration: "6 steps · 50 min",
    difficulty: "Advanced",
    steps: [
      "Set program goals and profitability assumptions",
      "Define commission and attribution rules",
      "Select creators based on audience and product fit",
      "Document terms, codes, and tracking links",
      "Monitor conversions, returns, and commission data",
      "Review performance and optimize program terms",
    ],
    outcome:
      "An affiliate program framework with clear rules, tracking, and reporting responsibilities.",
    accent: "playbook-gold",
  },
];

const categories = [
  "All playbooks",
  "Campaigns",
  "Discovery",
  "Operations",
  "UGC & Content",
  "Analytics",
  "Affiliate Marketing",
];

export default function PlaybooksPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All playbooks");
  const [difficulty, setDifficulty] = useState("All levels");
  const [saved, setSaved] = useState<number[]>([]);
  const [selected, setSelected] = useState<Playbook | null>(null);
  const [progress, setProgress] = useState<Record<number, number[]>>({});

  const filteredPlaybooks = useMemo(
    () =>
      playbooks.filter((playbook) => {
        const text =
          `${playbook.title} ${playbook.description} ${playbook.category}`.toLowerCase();

        return (
          text.includes(query.toLowerCase()) &&
          (category === "All playbooks" || playbook.category === category) &&
          (difficulty === "All levels" || playbook.difficulty === difficulty)
        );
      }),
    [query, category, difficulty]
  );

  function toggleSaved(id: number) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function toggleStep(playbookId: number, stepIndex: number) {
    setProgress((current) => {
      const completed = current[playbookId] ?? [];
      const next = completed.includes(stepIndex)
        ? completed.filter((step) => step !== stepIndex)
        : [...completed, stepIndex];

      return { ...current, [playbookId]: next };
    });
  }

  function resetProgress(playbookId: number) {
    setProgress((current) => ({ ...current, [playbookId]: [] }));
  }

  function openPlaybook(playbook: Playbook) {
    setSelected(playbook);
  }

  const totalCompleted = playbooks.reduce(
    (total, playbook) =>
      total + (progress[playbook.id]?.length ?? 0),
    0
  );

  return (
    <main className="playbooks-page">
      <section className="playbooks-hero">
        <div className="playbooks-hero-grid" />
        <div className="playbooks-hero-inner">
          <div className="playbooks-hero-copy">
            <span className="eyebrow"><ListChecks size={15} /> THE INFLORO PLAYBOOKS</span>
            <h1>
              Good strategy.
              <br />
              <span className="gradient-text">Clear next steps.</span>
            </h1>
            <p>
              Turn ideas into repeatable workflows with practical playbooks
              designed for modern creator marketing teams.
            </p>
            <div className="playbooks-hero-actions">
              <a href="#playbook-library" className="button button-primary">
                Explore playbooks <ArrowRight size={17} />
              </a>
              <span className="playbooks-action-note"><CheckCircle2 size={16} /> Track your progress as you go</span>
            </div>
            <div className="playbooks-stats">
              <div><strong>{playbooks.length.toString().padStart(2, "0")}</strong><span>Practical workflows</span></div>
              <div><strong>{totalCompleted}</strong><span>Steps completed</span></div>
              <div><strong>{saved.length}</strong><span>Saved playbooks</span></div>
            </div>
          </div>

          <div className="playbooks-hero-visual" aria-hidden="true">
            <div className="playbook-visual-orbit playbook-orbit-one" />
            <div className="playbook-visual-orbit playbook-orbit-two" />
            <div className="playbook-visual-board">
              <div className="playbook-board-top"><span><Sparkles size={15} /> YOUR NEXT WORKFLOW</span><span>01 / 06</span></div>
              <h3>From idea<br />to <span>impact.</span></h3>
              <div className="playbook-board-progress"><span /></div>
              <div className="playbook-board-steps">
                <div><span className="playbook-board-check"><Check size={13} /></span><span><strong>Set your goal</strong><small>Define the outcome</small></span><CheckCircle2 size={17} /></div>
                <div><span className="playbook-board-check"><Check size={13} /></span><span><strong>Plan the work</strong><small>Align the team</small></span><CheckCircle2 size={17} /></div>
                <div><span className="playbook-board-empty" /><span><strong>Launch the plan</strong><small>Move into action</small></span><span className="playbook-board-pending" /></div>
              </div>
            </div>
            <div className="playbook-floating-tag"><Target size={17} /><span>Action-oriented</span></div>
          </div>
        </div>
      </section>

      <section className="playbooks-principles">
        <div><span>01</span><strong>Know what to do</strong><p>Clear steps for common workflows.</p></div>
        <div><span>02</span><strong>Make progress visible</strong><p>Check off each step as you work.</p></div>
        <div><span>03</span><strong>Build repeatable habits</strong><p>Use the same process next time.</p></div>
      </section>

      <section className="section playbooks-library" id="playbook-library">
        <div className="playbooks-library-heading">
          <div>
            <span className="eyebrow">THE WORKFLOW COLLECTION</span>
            <h2>Pick a goal. <span className="gradient-text">Make it happen.</span></h2>
            <p>Choose a workflow and work through it one step at a time.</p>
          </div>
          <div className="playbooks-progress-summary">
            <div className="playbooks-progress-icon"><CheckCircle2 size={20} /></div>
            <div><strong>{totalCompleted} steps completed</strong><span>Across all playbooks</span></div>
          </div>
        </div>

        <div className="playbooks-toolbar">
          <label className="playbooks-search">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search workflows..." aria-label="Search playbooks" />
            {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><X size={16} /></button>}
          </label>
          <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter by category">
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select value={difficulty} onChange={(event) => setDifficulty(event.target.value)} aria-label="Filter by difficulty">
            <option>All levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div className="playbooks-grid">
          {filteredPlaybooks.map((playbook, index) => {
            const completed = progress[playbook.id] ?? [];
            const percentage = Math.round((completed.length / playbook.steps.length) * 100);

            return (
              <article className="playbook-card" key={playbook.id}>
                <div className={`playbook-card-art ${playbook.accent}`}>
                  <span className="playbook-card-number">PLAYBOOK / {String(playbook.id).padStart(2, "0")}</span>
                  <button className={`playbook-bookmark ${saved.includes(playbook.id) ? "is-saved" : ""}`} onClick={() => toggleSaved(playbook.id)} aria-label={saved.includes(playbook.id) ? "Unsave playbook" : "Save playbook"} aria-pressed={saved.includes(playbook.id)}>
                    <Bookmark size={17} fill={saved.includes(playbook.id) ? "currentColor" : "none"} />
                  </button>
                  <div className="playbook-card-symbol">
                    {index % 4 === 0 ? <Target size={37} /> : index % 4 === 1 ? <Users size={37} /> : index % 4 === 2 ? <ListChecks size={37} /> : <Sparkles size={37} />}
                  </div>
                  <div className="playbook-card-art-footer"><span>INFLORO / ACTION GUIDE</span><ArrowUpRight size={20} /></div>
                </div>

                <div className="playbook-card-body">
                  <div className="playbook-card-meta"><span>{playbook.category}</span><span>{playbook.difficulty}</span></div>
                  <h3>{playbook.title}</h3>
                  <p>{playbook.description}</p>
                  <div className="playbook-card-details"><span><ListChecks size={15} /> {playbook.steps.length} steps</span><span><Clock3 size={15} /> {playbook.duration.split(" · ")[1]}</span></div>

                  <div className="playbook-progress-row">
                    <div><span>Your progress</span><strong>{percentage}%</strong></div>
                    <div className="playbook-progress-track"><span style={{ width: `${percentage}%` }} /></div>
                  </div>

                  <button className="playbook-open-button" onClick={() => openPlaybook(playbook)}>
                    {percentage === 100 ? "Review playbook" : percentage > 0 ? "Continue playbook" : "Start playbook"}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {filteredPlaybooks.length === 0 && (
          <div className="playbooks-empty">
            <Search size={25} />
            <h3>No playbooks found</h3>
            <p>Try a different search term or reset the filters.</p>
            <button className="button button-primary" onClick={() => { setQuery(""); setCategory("All playbooks"); setDifficulty("All levels"); }}>Reset filters</button>
          </div>
        )}
      </section>

      <section className="playbooks-bottom-cta">
        <div className="playbooks-cta-icon"><Sparkles size={22} /></div>
        <span className="eyebrow">TURN KNOWLEDGE INTO ACTION</span>
        <h2>Make great work<br /><span>repeatable.</span></h2>
        <p>Explore the full Infloro resource library for more guides, templates, and practical ideas.</p>
        <a href="/resources" className="button button-primary">Explore resources <ArrowRight size={17} /></a>
      </section>

      {selected && (
        <div className="playbook-modal-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}>
          <section className="playbook-modal" role="dialog" aria-modal="true" aria-labelledby="playbook-modal-title">
            <button className="playbook-modal-close" onClick={() => setSelected(null)} aria-label="Close playbook"><X size={19} /></button>
            <span className="eyebrow"><ListChecks size={14} /> YOUR ACTION PLAN</span>
            <div className={`playbook-modal-banner ${selected.accent}`}>
              <div><span>{selected.category} · {selected.difficulty}</span><h2 id="playbook-modal-title">{selected.title}</h2></div>
              <span className="playbook-modal-banner-icon"><Target size={28} /></span>
            </div>
            <p className="playbook-modal-description">{selected.description}</p>

            <div className="playbook-modal-progress">
              <div><strong>Checklist progress</strong><span>{(progress[selected.id] ?? []).length} of {selected.steps.length} complete</span></div>
              <div className="playbook-progress-track"><span style={{ width: `${Math.round(((progress[selected.id] ?? []).length / selected.steps.length) * 100)}%` }} /></div>
            </div>

            <div className="playbook-checklist">
              {selected.steps.map((step, index) => {
                const isComplete = (progress[selected.id] ?? []).includes(index);
                return (
                  <button key={step} className={`playbook-checklist-item ${isComplete ? "is-complete" : ""}`} onClick={() => toggleStep(selected.id, index)}>
                    <span className="playbook-check-box">{isComplete && <Check size={15} />}</span>
                    <span className="playbook-step-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="playbook-step-text">{step}</span>
                    <ChevronRight size={16} className="playbook-step-chevron" />
                  </button>
                );
              })}
            </div>

            <div className="playbook-outcome"><Sparkles size={18} /><div><strong>Your intended outcome</strong><p>{selected.outcome}</p></div></div>

            <div className="playbook-modal-actions">
              <button className="button button-primary" onClick={() => setSelected(null)}>
                {((progress[selected.id] ?? []).length === selected.steps.length) ? <><CheckCircle2 size={16} /> Complete</> : <>Save progress <ArrowRight size={16} /></>}
              </button>
              <button className="button button-quiet playbook-reset-button" onClick={() => resetProgress(selected.id)}><RotateCcw size={15} /> Reset checklist</button>
            </div>
            <p className="playbook-note">Progress is stored in this page's current session. Connect persistent storage to retain progress after refresh or sign-in.</p>
          </section>
        </div>
      )}
    </main>
  );
}
