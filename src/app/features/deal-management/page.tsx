
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
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Filter,
  Plus,
  Search,
  X,
} from "lucide-react";

type DealStatus =
  | "New Lead"
  | "Qualified"
  | "Negotiating"
  | "Confirmed"
  | "Ghosted"
  | "Refunded";

type Deal = {
  id: number;
  creator: string;
  handle: string;
  campaign: string;
  platform: string;
  budget: number;
  status: DealStatus;
  dueDate: string;
  agency: string;
};

const initialDeals: Deal[] = [
  { id: 1, creator: "Aarav Mehta", handle: "@aaravcreates", campaign: "Summer Essentials", platform: "Instagram", budget: 1800, status: "New Lead", dueDate: "2026-11-04", agency: "Northstar Media" },
  { id: 2, creator: "Maya Kapoor", handle: "@mayastyle", campaign: "Glow Naturally", platform: "Instagram", budget: 2400, status: "New Lead", dueDate: "2026-11-06", agency: "Studio Collective" },
  { id: 3, creator: "Riya Sharma", handle: "@riyatravels", campaign: "Explore More", platform: "YouTube", budget: 3200, status: "Qualified", dueDate: "2026-11-09", agency: "Northstar Media" },
  { id: 4, creator: "Kabir Singh", handle: "@kabir.fit", campaign: "Move Freely", platform: "Instagram", budget: 1500, status: "Qualified", dueDate: "2026-11-11", agency: "Orbit Agency" },
  { id: 5, creator: "Ananya Das", handle: "@ananyamakes", campaign: "Everyday Rituals", platform: "TikTok", budget: 2100, status: "Negotiating", dueDate: "2026-11-13", agency: "Studio Collective" },
  { id: 6, creator: "Ishaan Roy", handle: "@ishaanreviews", campaign: "Tech That Fits", platform: "YouTube", budget: 4500, status: "Negotiating", dueDate: "2026-11-15", agency: "Orbit Agency" },
  { id: 7, creator: "Meera Joshi", handle: "@meeramood", campaign: "Glow Naturally", platform: "Instagram", budget: 2800, status: "Confirmed", dueDate: "2026-11-18", agency: "Northstar Media" },
  { id: 8, creator: "Dev Malhotra", handle: "@devonfilm", campaign: "City Stories", platform: "YouTube", budget: 3600, status: "Confirmed", dueDate: "2026-11-20", agency: "Studio Collective" },
  { id: 9, creator: "Sara Khan", handle: "@saraspaces", campaign: "Home, Reimagined", platform: "Instagram", budget: 1200, status: "Ghosted", dueDate: "2026-10-29", agency: "Orbit Agency" },
  { id: 10, creator: "Neil Verma", handle: "@neilunfiltered", campaign: "Tech That Fits", platform: "TikTok", budget: 900, status: "Refunded", dueDate: "2026-10-27", agency: "Northstar Media" },
];

const stages: DealStatus[] = [
  "New Lead",
  "Qualified",
  "Negotiating",
  "Confirmed",
  "Ghosted",
  "Refunded",
];

const stageColors: Record<DealStatus, string> = {
  "New Lead": "deal-stage-purple",
  Qualified: "deal-stage-blue",
  Negotiating: "deal-stage-orange",
  Confirmed: "deal-stage-green",
  Ghosted: "deal-stage-gray",
  Refunded: "deal-stage-red",
};

const money = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

export default function DealManagementPage() {
  const [deals, setDeals] = useState<Deal[]>(initialDeals);
  const [search, setSearch] = useState("");
  const [platformFilter, setPlatformFilter] = useState("All platforms");
  const [activeStage, setActiveStage] = useState<DealStatus | "All">("All");
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [notice, setNotice] = useState("");

  const [creator, setCreator] = useState("");
  const [handle, setHandle] = useState("");
  const [campaign, setCampaign] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [budget, setBudget] = useState("1500");
  const [dueDate, setDueDate] = useState("2026-11-15");

  const filteredDeals = useMemo(() => {
    const term = search.toLowerCase().trim();
    return deals.filter((deal) => {
      const matchesSearch =
        !term ||
        deal.creator.toLowerCase().includes(term) ||
        deal.handle.toLowerCase().includes(term) ||
        deal.campaign.toLowerCase().includes(term) ||
        deal.agency.toLowerCase().includes(term);

      const matchesPlatform =
        platformFilter === "All platforms" ||
        deal.platform === platformFilter;

      const matchesStage =
        activeStage === "All" || deal.status === activeStage;

      return matchesSearch && matchesPlatform && matchesStage;
    });
  }, [deals, search, platformFilter, activeStage]);

  const activeDeals = deals.filter(
    (deal) => !["Ghosted", "Refunded"].includes(deal.status),
  );
  const pipelineValue = activeDeals.reduce((sum, deal) => sum + deal.budget, 0);
  const confirmedValue = deals
    .filter((deal) => deal.status === "Confirmed")
    .reduce((sum, deal) => sum + deal.budget, 0);
  const negotiatingCount = deals.filter(
    (deal) => deal.status === "Negotiating",
  ).length;

  function updateStatus(id: number, status: DealStatus) {
    setDeals((current) =>
      current.map((deal) => (deal.id === id ? { ...deal, status } : deal)),
    );
    setSelectedDeal((current) =>
      current && current.id === id ? { ...current, status } : current,
    );
    setNotice("Deal status updated.");
    window.setTimeout(() => setNotice(""), 2500);
  }

  function addDeal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newDeal: Deal = {
      id: Math.max(0, ...deals.map((deal) => deal.id)) + 1,
      creator: creator.trim(),
      handle: handle.trim().startsWith("@")
        ? handle.trim()
        : `@${handle.trim()}`,
      campaign: campaign.trim(),
      platform,
      budget: Number(budget),
      status: "New Lead",
      dueDate,
      agency: "My agency",
    };

    setDeals((current) => [newDeal, ...current]);
    setShowForm(false);
    setCreator("");
    setHandle("");
    setCampaign("");
    setBudget("1500");
    setNotice("New deal added to your pipeline.");
    window.setTimeout(() => setNotice(""), 2500);
  }

  return (
    <>
      <Navbar />

      <main className="deal-page">
        <section className="deal-hero">
          <div className="deal-hero-inner">
            <div>
              <div className="eyebrow">
                <span className="deal-eyebrow-dot" />
                CREATOR QUALIFICATION & DEAL MANAGEMENT
              </div>
              <h1>
                Every partnership.
                <br />
                <span className="gradient-text">Under control.</span>
              </h1>
              <p>
                Move creator partnerships from first contact to signed deal
                with one clear, collaborative pipeline.
              </p>
              <div className="deal-hero-actions">
                <button
                  className="button button-primary"
                  onClick={() => setShowForm(true)}
                >
                  <Plus size={17} /> Add a deal
                </button>
                <Link href="/book-a-demo" className="button button-quiet">
                  Explore the platform
                </Link>
              </div>
            </div>

            <div className="deal-hero-card">
              <div className="deal-mini-top">
                <span className="deal-live-dot" />
                PIPELINE OVERVIEW
                <span className="deal-mini-period">Sample data</span>
              </div>
              <div className="deal-mini-total">{money(pipelineValue)}</div>
              <div className="deal-mini-caption">Active pipeline value</div>
              <div className="deal-mini-bars">
                {stages.slice(0, 4).map((stage) => {
                  const amount = deals
                    .filter((deal) => deal.status === stage)
                    .reduce((sum, deal) => sum + deal.budget, 0);
                  const width = pipelineValue
                    ? Math.max(5, (amount / pipelineValue) * 100)
                    : 0;

                  return (
                    <div className="deal-mini-bar-row" key={stage}>
                      <span>{stage}</span>
                      <div className="deal-mini-track">
                        <div
                          className={`deal-mini-fill ${stageColors[stage]}`}
                          style={{ width: `${width}%` }}
                        />
                      </div>
                      <strong>{money(amount)}</strong>
                    </div>
                  );
                })}
              </div>
              <div className="deal-mini-bottom">
                <span><Check size={15} /> {deals.filter((d) => d.status === "Confirmed").length} confirmed deals</span>
                <span>Updated live</span>
              </div>
            </div>
          </div>
          <div className="deal-orb deal-orb-one" />
          <div className="deal-orb deal-orb-two" />
        </section>

        <section className="section deal-workspace-section">
          <div className="deal-section-heading">
            <div>
              <span className="eyebrow">YOUR WORKSPACE</span>
              <h2>Deals at a glance.</h2>
              <p>Track the conversation, budget, and next milestone.</p>
            </div>
            <button
              className="button button-primary"
              onClick={() => setShowForm(true)}
            >
              <Plus size={17} /> New deal
            </button>
          </div>

          <div className="deal-stats">
            <div className="deal-stat-card">
              <div className="deal-stat-label">Active pipeline <CircleDollarSign size={18} /></div>
              <div className="deal-stat-value">{money(pipelineValue)}</div>
              <div className="deal-stat-note"><ArrowUpRight size={15} /> Potential partnership value</div>
            </div>
            <div className="deal-stat-card">
              <div className="deal-stat-label">Confirmed value <Check size={18} /></div>
              <div className="deal-stat-value">{money(confirmedValue)}</div>
              <div className="deal-stat-note"><ArrowUpRight size={15} /> Deals marked confirmed</div>
            </div>
            <div className="deal-stat-card">
              <div className="deal-stat-label">In negotiation <Clock3 size={18} /></div>
              <div className="deal-stat-value">{negotiatingCount}</div>
              <div className="deal-stat-note"><ArrowDownRight size={15} /> Need a follow-up</div>
            </div>
            <div className="deal-stat-card">
              <div className="deal-stat-label">Total partnerships <CalendarDays size={18} /></div>
              <div className="deal-stat-value">{deals.length}</div>
              <div className="deal-stat-note">Across all pipeline stages</div>
            </div>
          </div>

          <div className="deal-board">
            <div className="deal-board-toolbar">
              <div className="deal-board-title">
                <h3>Partnership pipeline</h3>
                <span>{filteredDeals.length} deals</span>
              </div>
              <div className="deal-filters">
                <label className="deal-search">
                  <Search size={16} />
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search creators or campaigns"
                    aria-label="Search deals"
                  />
                </label>
                <label className="deal-select-wrap">
                  <Filter size={15} />
                  <select
                    value={platformFilter}
                    onChange={(event) => setPlatformFilter(event.target.value)}
                    aria-label="Filter by platform"
                  >
                    <option>All platforms</option>
                    <option>Instagram</option>
                    <option>YouTube</option>
                    <option>TikTok</option>
                  </select>
                  <ChevronDown size={14} />
                </label>
              </div>
            </div>

            <div className="deal-stage-tabs">
              <button
                className={activeStage === "All" ? "active" : ""}
                onClick={() => setActiveStage("All")}
              >
                All stages
              </button>
              {stages.map((stage) => (
                <button
                  key={stage}
                  className={activeStage === stage ? "active" : ""}
                  onClick={() => setActiveStage(stage)}
                >
                  {stage}
                  <span>{deals.filter((deal) => deal.status === stage).length}</span>
                </button>
              ))}
            </div>

            <div className="deal-columns">
              {stages.map((stage) => {
                const stageDeals = filteredDeals.filter(
                  (deal) => deal.status === stage,
                );

                if (activeStage !== "All" && activeStage !== stage) return null;

                return (
                  <div className="deal-column" key={stage}>
                    <div className="deal-column-heading">
                      <span className={`deal-stage-indicator ${stageColors[stage]}`} />
                      <strong>{stage}</strong>
                      <span className="deal-column-count">{stageDeals.length}</span>
                    </div>

                    {stageDeals.length === 0 ? (
                      <div className="deal-empty">No deals in this stage</div>
                    ) : (
                      stageDeals.map((deal) => (
                        <button
                          key={deal.id}
                          className="deal-card"
                          onClick={() => setSelectedDeal(deal)}
                        >
                          <div className="deal-card-top">
                            <span className={`deal-platform deal-platform-${deal.platform.toLowerCase()}`}>
                              {deal.platform}
                            </span>
                            <span className="deal-card-menu">•••</span>
                          </div>
                          <div className="deal-creator-avatar">
                            {deal.creator.split(" ").map((part) => part[0]).join("").slice(0, 2)}
                          </div>
                          <strong className="deal-card-creator">{deal.creator}</strong>
                          <span className="deal-card-handle">{deal.handle}</span>
                          <div className="deal-card-campaign">{deal.campaign}</div>
                          <div className="deal-card-bottom">
                            <strong>{money(deal.budget)}</strong>
                            <span><CalendarDays size={13} /> {new Date(`${deal.dueDate}T12:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                          </div>
                          <div className="deal-card-open">View deal <ArrowUpRight size={13} /></div>
                        </button>
                      ))
                    )}

                    <button
                      className="deal-add-in-column"
                      onClick={() => {
                        setShowForm(true);
                      }}
                    >
                      <Plus size={15} /> Add deal
                    </button>
                  </div>
                );
              })}
            </div>
            <p className="deal-board-hint">
              Select any deal to view its details and update its status. Sample
              records are for demonstration only.
            </p>
          </div>
        </section>

        <section className="section deal-process-section">
          <div className="deal-process-copy">
            <span className="eyebrow">FROM INTRO TO IMPACT</span>
            <h2>Less chasing.<br /><span className="gradient-text">More closing.</span></h2>
            <p>
              Keep the next step visible for every creator partnership, so
              your team can focus on building relationships instead of
              hunting through spreadsheets.
            </p>
            <Link href="/features/campaign-management" className="button button-primary">
              Explore campaign management
            </Link>
          </div>
          <div className="deal-process-list">
            {[
              ["01", "Qualify the right creators", "Keep campaign fit, audience, and deliverables together."],
              ["02", "Align on commercial terms", "Track budgets and next steps while negotiating."],
              ["03", "Confirm and collaborate", "Move signed partnerships forward with clear ownership."],
            ].map(([number, title, description]) => (
              <div className="deal-process-item" key={number}>
                <span className="deal-process-number">{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <ArrowUpRight size={19} />
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="bottom-cta">
            <span className="eyebrow">READY FOR YOUR NEXT CAMPAIGN?</span>
            <h2>Turn creator conversations into partnerships.</h2>
            <p>Bring your creator pipeline and campaign workflow together.</p>
            <Link href="/book-a-demo" className="button button-primary">
              Book a demo <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      {notice && <div className="deal-toast"><Check size={16} /> {notice}</div>}

      {showForm && (
        <div className="deal-modal-backdrop" onClick={() => setShowForm(false)}>
          <div
            className="deal-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="deal-form-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="deal-modal-header">
              <div><span className="eyebrow">NEW PARTNERSHIP</span><h2 id="deal-form-title">Add a deal</h2></div>
              <button className="deal-modal-close" onClick={() => setShowForm(false)} aria-label="Close"><X size={20} /></button>
            </div>
            <form onSubmit={addDeal} className="deal-form">
              <label>Creator name<input required value={creator} onChange={(event) => setCreator(event.target.value)} placeholder="e.g. Priya Sharma" /></label>
              <label>Creator handle<input required value={handle} onChange={(event) => setHandle(event.target.value.replace(/\s/g, ""))} placeholder="@creatorhandle" /></label>
              <label>Campaign name<input required value={campaign} onChange={(event) => setCampaign(event.target.value)} placeholder="e.g. Holiday launch" /></label>
              <div className="deal-form-row">
                <label>Platform<select value={platform} onChange={(event) => setPlatform(event.target.value)}><option>Instagram</option><option>YouTube</option><option>TikTok</option></select></label>
                <label>Budget (USD)<input required type="number" min="1" value={budget} onChange={(event) => setBudget(event.target.value)} /></label>
              </div>
              <label>Target date<input required type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} /></label>
              <div className="deal-form-note">The new deal will be added to the New Lead stage.</div>
              <button type="submit" className="button button-primary deal-submit">Create deal <Plus size={16} /></button>
            </form>
          </div>
        </div>
      )}

      {selectedDeal && (
        <div className="deal-modal-backdrop" onClick={() => setSelectedDeal(null)}>
          <div className="deal-modal" role="dialog" aria-modal="true" aria-labelledby="deal-detail-title" onClick={(event) => event.stopPropagation()}>
            <div className="deal-modal-header">
              <div><span className="eyebrow">PARTNERSHIP DETAILS</span><h2 id="deal-detail-title">{selectedDeal.creator}</h2><p className="deal-detail-handle">{selectedDeal.handle}</p></div>
              <button className="deal-modal-close" onClick={() => setSelectedDeal(null)} aria-label="Close"><X size={20} /></button>
            </div>
            <div className="deal-detail-summary">
              <div><span>Campaign</span><strong>{selectedDeal.campaign}</strong></div>
              <div><span>Deal value</span><strong>{money(selectedDeal.budget)}</strong></div>
              <div><span>Platform</span><strong>{selectedDeal.platform}</strong></div>
              <div><span>Target date</span><strong>{new Date(`${selectedDeal.dueDate}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</strong></div>
              <div><span>Agency</span><strong>{selectedDeal.agency}</strong></div>
            </div>
            <label className="deal-status-label">Update deal stage
              <select value={selectedDeal.status} onChange={(event) => updateStatus(selectedDeal.id, event.target.value as DealStatus)}>
                {stages.map((stage) => <option key={stage}>{stage}</option>)}
              </select>
            </label>
            <button className="button button-primary deal-submit" onClick={() => setSelectedDeal(null)}>Done <Check size={16} /></button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
