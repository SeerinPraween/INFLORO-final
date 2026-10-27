
"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Plus,
  Search,
  Target,
  Users,
  X,
} from "lucide-react";

type CampaignStatus = "Planning" | "In Progress" | "Completed" | "Paused";

type Campaign = {
  id: number;
  name: string;
  brand: string;
  category: string;
  status: CampaignStatus;
  budget: number;
  spent: number;
  creators: number;
  deliverables: number;
  completed: number;
  startDate: string;
  endDate: string;
};

const initialCampaigns: Campaign[] = [
  { id: 1, name: "Summer Essentials", brand: "Solara Studio", category: "Fashion", status: "In Progress", budget: 12000, spent: 7600, creators: 8, deliverables: 24, completed: 16, startDate: "2026-10-01", endDate: "2026-11-15" },
  { id: 2, name: "Glow Naturally", brand: "Bloom Beauty", category: "Beauty", status: "In Progress", budget: 18000, spent: 9800, creators: 12, deliverables: 36, completed: 21, startDate: "2026-10-05", endDate: "2026-11-25" },
  { id: 3, name: "Tech That Fits", brand: "Nexa Labs", category: "Technology", status: "Planning", budget: 25000, spent: 2500, creators: 10, deliverables: 30, completed: 3, startDate: "2026-11-01", endDate: "2026-12-10" },
  { id: 4, name: "Explore More", brand: "Wanderly", category: "Travel", status: "In Progress", budget: 15000, spent: 11200, creators: 6, deliverables: 18, completed: 14, startDate: "2026-09-15", endDate: "2026-11-05" },
  { id: 5, name: "Everyday Rituals", brand: "Kindred Living", category: "Lifestyle", status: "Completed", budget: 9000, spent: 8700, creators: 5, deliverables: 15, completed: 15, startDate: "2026-08-01", endDate: "2026-09-20" },
  { id: 6, name: "Move Freely", brand: "Motion Athletics", category: "Fitness", status: "Paused", budget: 14000, spent: 4200, creators: 7, deliverables: 21, completed: 7, startDate: "2026-10-10", endDate: "2026-12-01" },
];

const statusClasses: Record<CampaignStatus, string> = {
  Planning: "cm-status-planning",
  "In Progress": "cm-status-progress",
  Completed: "cm-status-completed",
  Paused: "cm-status-paused",
};

const formatMoney = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function CampaignManagementPage() {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All campaigns");
  const [categoryFilter, setCategoryFilter] = useState("All categories");
  const [selected, setSelected] = useState<Campaign | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [notice, setNotice] = useState("");

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("Fashion");
  const [budget, setBudget] = useState("10000");
  const [startDate, setStartDate] = useState("2026-11-01");
  const [endDate, setEndDate] = useState("2026-12-01");
  const [creators, setCreators] = useState("5");

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();

    return campaigns.filter((campaign) => {
      const matchesSearch =
        !query ||
        campaign.name.toLowerCase().includes(query) ||
        campaign.brand.toLowerCase().includes(query) ||
        campaign.category.toLowerCase().includes(query);

      return (
        matchesSearch &&
        (statusFilter === "All campaigns" ||
          campaign.status === statusFilter) &&
        (categoryFilter === "All categories" ||
          campaign.category === categoryFilter)
      );
    });
  }, [campaigns, search, statusFilter, categoryFilter]);

  const totalBudget = campaigns.reduce((sum, c) => sum + c.budget, 0);
  const totalSpent = campaigns.reduce((sum, c) => sum + c.spent, 0);
  const activeCount = campaigns.filter(
    (c) => c.status === "In Progress",
  ).length;
  const totalDeliverables = campaigns.reduce(
    (sum, c) => sum + c.deliverables,
    0,
  );
  const completedDeliverables = campaigns.reduce(
    (sum, c) => sum + c.completed,
    0,
  );

  function showNotice(message: string) {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2500);
  }

  function createCampaign(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (endDate < startDate) {
      showNotice("End date must be after the start date.");
      return;
    }

    const campaign: Campaign = {
      id: Math.max(0, ...campaigns.map((c) => c.id)) + 1,
      name: name.trim(),
      brand: brand.trim(),
      category,
      status: "Planning",
      budget: Number(budget),
      spent: 0,
      creators: Number(creators),
      deliverables: Number(creators) * 3,
      completed: 0,
      startDate,
      endDate,
    };

    setCampaigns((current) => [campaign, ...current]);
    setShowForm(false);
    setName("");
    setBrand("");
    setBudget("10000");
    setCreators("5");
    showNotice("Campaign created successfully.");
  }

  function updateStatus(id: number, status: CampaignStatus) {
    setCampaigns((current) =>
      current.map((campaign) =>
        campaign.id === id ? { ...campaign, status } : campaign,
      ),
    );
    setSelected((current) =>
      current && current.id === id ? { ...current, status } : current,
    );
    showNotice("Campaign status updated.");
  }

  return (
    <>
      <Navbar />

      <main className="cm-page">
        <section className="cm-hero">
          <div className="cm-hero-inner">
            <div className="cm-hero-copy">
              <span className="eyebrow">
                <span className="cm-live-dot" />
                CAMPAIGN MANAGEMENT
              </span>
              <h1>
                From campaign brief
                <br />
                to <span className="gradient-text">real impact.</span>
              </h1>
              <p>
                Plan campaigns, coordinate creators, monitor deliverables,
                and keep every collaboration moving in the right direction.
              </p>
              <div className="cm-hero-actions">
                <button
                  className="button button-primary"
                  onClick={() => setShowForm(true)}
                >
                  <Plus size={17} /> Create campaign
                </button>
                <a href="#campaign-workspace" className="button button-quiet">
                  Explore campaigns <ChevronRight size={16} />
                </a>
              </div>
              <div className="cm-hero-proof">
                <span><Check size={15} /> Clear ownership</span>
                <span><Check size={15} /> Live progress</span>
                <span><Check size={15} /> One workspace</span>
              </div>
            </div>

            <div className="cm-preview">
              <div className="cm-preview-header">
                <div>
                  <span className="cm-preview-kicker">CAMPAIGN SNAPSHOT</span>
                  <h3>Summer Essentials</h3>
                  <span className="cm-preview-brand">Solara Studio · Fashion</span>
                </div>
                <span className={`cm-status ${statusClasses["In Progress"]}`}>
                  <span /> In Progress
                </span>
              </div>

              <div className="cm-preview-budget">
                <div>
                  <span>Budget used</span>
                  <strong>{formatMoney(7600)}</strong>
                  <small>of {formatMoney(12000)}</small>
                </div>
                <div className="cm-preview-percent">63%</div>
              </div>
              <div className="cm-progress-track">
                <div style={{ width: "63%" }} />
              </div>

              <div className="cm-preview-metrics">
                <div><Users size={17} /><span>Creators</span><strong>08</strong></div>
                <div><Target size={17} /><span>Deliverables</span><strong>16/24</strong></div>
                <div><CalendarDays size={17} /><span>Deadline</span><strong>Nov 15</strong></div>
              </div>

              <div className="cm-preview-footer">
                <div className="cm-avatar-stack">
                  {["AM", "MK", "RS", "KS"].map((initials) => (
                    <span key={initials}>{initials}</span>
                  ))}
                </div>
                <span>Creator team is on track</span>
                <ArrowUpRight size={17} />
              </div>
            </div>
          </div>
          <div className="cm-hero-glow" />
        </section>

        <section className="section cm-workspace" id="campaign-workspace">
          <div className="cm-section-heading">
            <div>
              <span className="eyebrow">YOUR CAMPAIGN HUB</span>
              <h2>Everything, in sync.</h2>
              <p>A live overview of your campaign portfolio.</p>
            </div>
            <button
              className="button button-primary"
              onClick={() => setShowForm(true)}
            >
              <Plus size={17} /> New campaign
            </button>
          </div>

          <div className="cm-stats">
            <div className="cm-stat">
              <div className="cm-stat-top"><span>Total budget</span><CircleDollarSign size={18} /></div>
              <strong>{formatMoney(totalBudget)}</strong>
              <small>Across all campaigns</small>
            </div>
            <div className="cm-stat">
              <div className="cm-stat-top"><span>Budget spent</span><ArrowDownRight size={18} /></div>
              <strong>{formatMoney(totalSpent)}</strong>
              <small>{totalBudget ? Math.round((totalSpent / totalBudget) * 100) : 0}% of total budget</small>
            </div>
            <div className="cm-stat">
              <div className="cm-stat-top"><span>Active campaigns</span><Target size={18} /></div>
              <strong>{activeCount}</strong>
              <small><span className="cm-green-dot" /> Currently in progress</small>
            </div>
            <div className="cm-stat">
              <div className="cm-stat-top"><span>Deliverables</span><Check size={18} /></div>
              <strong>{completedDeliverables}/{totalDeliverables}</strong>
              <small>{totalDeliverables ? Math.round((completedDeliverables / totalDeliverables) * 100) : 0}% completed</small>
            </div>
          </div>

          <div className="cm-campaign-panel">
            <div className="cm-toolbar">
              <div>
                <h3>All campaigns</h3>
                <span>{filtered.length} campaigns found</span>
              </div>
              <div className="cm-filters">
                <label className="cm-search">
                  <Search size={16} />
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search campaigns..."
                    aria-label="Search campaigns"
                  />
                </label>
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  aria-label="Filter by campaign status"
                >
                  <option>All campaigns</option>
                  <option>Planning</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                  <option>Paused</option>
                </select>
                <select
                  value={categoryFilter}
                  onChange={(event) => setCategoryFilter(event.target.value)}
                  aria-label="Filter by category"
                >
                  <option>All categories</option>
                  <option>Fashion</option>
                  <option>Beauty</option>
                  <option>Technology</option>
                  <option>Travel</option>
                  <option>Lifestyle</option>
                  <option>Fitness</option>
                </select>
              </div>
            </div>

            <div className="cm-campaign-list">
              {filtered.map((campaign) => {
                const progress = campaign.deliverables
                  ? Math.round(
                      (campaign.completed / campaign.deliverables) * 100,
                    )
                  : 0;
                const budgetProgress = campaign.budget
                  ? Math.min(100, (campaign.spent / campaign.budget) * 100)
                  : 0;

                return (
                  <button
                    key={campaign.id}
                    className="cm-campaign-row"
                    onClick={() => setSelected(campaign)}
                  >
                    <div className="cm-campaign-identity">
                      <div className={`cm-campaign-icon cm-icon-${campaign.category.toLowerCase()}`}>
                        {campaign.category.slice(0, 1)}
                      </div>
                      <div>
                        <strong>{campaign.name}</strong>
                        <span>{campaign.brand} · {campaign.category}</span>
                      </div>
                    </div>

                    <div className="cm-row-budget">
                      <span>Budget</span>
                      <strong>{formatMoney(campaign.budget)}</strong>
                      <div className="cm-small-track">
                        <div style={{ width: `${budgetProgress}%` }} />
                      </div>
                    </div>

                    <div className="cm-row-progress">
                      <div><span>Deliverables</span><strong>{campaign.completed}/{campaign.deliverables}</strong></div>
                      <div className="cm-small-track">
                        <div style={{ width: `${progress}%` }} />
                      </div>
                      <small>{progress}% complete</small>
                    </div>

                    <div className="cm-row-creators">
                      <Users size={15} />
                      <strong>{campaign.creators}</strong>
                      <span>creators</span>
                    </div>

                    <div className="cm-row-date">
                      <CalendarDays size={14} />
                      <span>{formatDate(campaign.endDate)}</span>
                    </div>

                    <div className={`cm-status ${statusClasses[campaign.status]}`}>
                      <span /> {campaign.status}
                    </div>
                    <ChevronRight size={17} className="cm-row-chevron" />
                  </button>
                );
              })}

              {filtered.length === 0 && (
                <div className="cm-empty">
                  <Search size={25} />
                  <strong>No campaigns found</strong>
                  <p>Try changing your search or filters.</p>
                  <button
                    className="button button-quiet"
                    onClick={() => {
                      setSearch("");
                      setStatusFilter("All campaigns");
                      setCategoryFilter("All categories");
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            <div className="cm-panel-footer">
              <span>Showing {filtered.length} of {campaigns.length} campaigns</span>
              <span><span className="cm-green-dot" /> Demo data · Updates instantly</span>
            </div>
          </div>
        </section>

        <section className="section cm-process-section">
          <div className="cm-process-intro">
            <span className="eyebrow">BUILT FOR BETTER CAMPAIGNS</span>
            <h2>One plan.<br /><span className="gradient-text">Every moving part.</span></h2>
            <p>
              Give your team and creators the context they need, from the
              campaign brief through final content delivery.
            </p>
          </div>
          <div className="cm-process-cards">
            <article className="cm-process-card">
              <span>01</span><Target size={21} />
              <h3>Plan with purpose</h3>
              <p>Set campaign goals, budgets, timelines, and creator targets.</p>
            </article>
            <article className="cm-process-card">
              <span>02</span><Users size={21} />
              <h3>Coordinate creators</h3>
              <p>Keep assignments, deliverables, and responsibilities visible.</p>
            </article>
            <article className="cm-process-card">
              <span>03</span><Check size={21} />
              <h3>Track every milestone</h3>
              <p>Understand what is complete and what needs attention.</p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="bottom-cta">
            <span className="eyebrow">MAKE EVERY COLLABORATION COUNT</span>
            <h2>Your next campaign starts here.</h2>
            <p>Discover creators, manage partnerships, and coordinate campaigns in one place.</p>
            <Link href="/features/creator-discovery" className="button button-primary">
              Discover creators <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      {notice && (
        <div className="cm-toast"><Check size={16} /> {notice}</div>
      )}

      {showForm && (
        <div className="cm-modal-backdrop" onClick={() => setShowForm(false)}>
          <div
            className="cm-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cm-create-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="cm-modal-heading">
              <div>
                <span className="eyebrow">CAMPAIGN WORKSPACE</span>
                <h2 id="cm-create-title">Create a campaign</h2>
                <p>Set up the essentials. You can refine them later.</p>
              </div>
              <button className="cm-close" onClick={() => setShowForm(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <form className="cm-form" onSubmit={createCampaign}>
              <label>Campaign name
                <input required value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Holiday collection" />
              </label>
              <label>Brand or client
                <input required value={brand} onChange={(event) => setBrand(event.target.value)} placeholder="e.g. Your brand" />
              </label>
              <div className="cm-form-row">
                <label>Category
                  <select value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option>Fashion</option><option>Beauty</option><option>Technology</option><option>Travel</option><option>Lifestyle</option><option>Fitness</option>
                  </select>
                </label>
                <label>Budget (USD)
                  <input required type="number" min="1" value={budget} onChange={(event) => setBudget(event.target.value)} />
                </label>
              </div>
              <div className="cm-form-row">
                <label>Start date
                  <input required type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
                </label>
                <label>End date
                  <input required type="date" min={startDate} value={endDate} onChange={(event) => setEndDate(event.target.value)} />
                </label>
              </div>
              <label>Target number of creators
                <input required type="number" min="1" max="1000" value={creators} onChange={(event) => setCreators(event.target.value)} />
              </label>
              <div className="cm-form-note">New campaigns begin in the Planning stage. Three deliverables per creator are included as a starting estimate.</div>
              <button className="button button-primary cm-submit" type="submit">
                Create campaign <Plus size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {selected && (
        <div className="cm-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="cm-modal" role="dialog" aria-modal="true" aria-labelledby="cm-detail-title" onClick={(event) => event.stopPropagation()}>
            <div className="cm-modal-heading">
              <div>
                <span className="eyebrow">CAMPAIGN DETAILS</span>
                <h2 id="cm-detail-title">{selected.name}</h2>
                <p>{selected.brand} · {selected.category}</p>
              </div>
              <button className="cm-close" onClick={() => setSelected(null)} aria-label="Close"><X size={20} /></button>
            </div>

            <div className="cm-detail-grid">
              <div><span>Total budget</span><strong>{formatMoney(selected.budget)}</strong></div>
              <div><span>Spent so far</span><strong>{formatMoney(selected.spent)}</strong></div>
              <div><span>Creator assignments</span><strong>{selected.creators}</strong></div>
              <div><span>Deliverables completed</span><strong>{selected.completed}/{selected.deliverables}</strong></div>
              <div><span>Start date</span><strong>{formatDate(selected.startDate)}</strong></div>
              <div><span>End date</span><strong>{formatDate(selected.endDate)}</strong></div>
            </div>

            <label className="cm-status-field">Campaign status
              <select
                value={selected.status}
                onChange={(event) => updateStatus(selected.id, event.target.value as CampaignStatus)}
              >
                <option>Planning</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Paused</option>
              </select>
            </label>

            <div className="cm-detail-note">
              <Clock3 size={17} />
              This prototype tracks campaign status locally. Creator assignments, deliverable updates, and budget changes require backend integration.
            </div>
            <button className="button button-primary cm-submit" onClick={() => setSelected(null)}>Done <Check size={16} /></button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
