
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Layers3,
  MessageSquare,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

const initialClients = [
  { id: 1, name: "Luma Beauty", category: "Beauty & skincare", campaigns: 4, creators: 18, status: "Active", initials: "LB", tone: "lilac" },
  { id: 2, name: "Northstar Active", category: "Fitness & lifestyle", campaigns: 3, creators: 12, status: "Active", initials: "NA", tone: "mint" },
  { id: 3, name: "Sunday Studio", category: "Fashion & lifestyle", campaigns: 2, creators: 9, status: "Planning", initials: "SS", tone: "peach" },
  { id: 4, name: "Daily Ritual", category: "Food & wellness", campaigns: 1, creators: 6, status: "Review", initials: "DR", tone: "blue" },
];

const agencyFeatures = [
  {
    icon: Layers3,
    title: "Manage every client in one workspace",
    description:
      "Keep campaign plans, creator relationships, deliverables, and updates organized by client instead of scattered across tools.",
  },
  {
    icon: Users,
    title: "Keep your team aligned",
    description:
      "Create a shared view of campaign ownership, follow-ups, approvals, and upcoming work so handoffs are easier.",
  },
  {
    icon: ClipboardCheck,
    title: "Standardize campaign delivery",
    description:
      "Use a consistent process for discovery, outreach, negotiation, creator onboarding, and final reporting.",
  },
  {
    icon: CircleDollarSign,
    title: "Show clients what matters",
    description:
      "Bring campaign reach, engagement, conversions, and creator activity into reporting conversations.",
  },
];

const agencySteps = [
  { number: "01", title: "Onboard clients", description: "Set up client workspaces, campaign goals, and team ownership." },
  { number: "02", title: "Build campaigns", description: "Shortlist creators and organize offers, deliverables, and deadlines." },
  { number: "03", title: "Run operations", description: "Track conversations, approvals, and campaign progress together." },
  { number: "04", title: "Report results", description: "Share performance insights and identify the next opportunity." },
];

export default function AgenciesSolutionPage() {
  const [clients, setClients] = useState(initialClients);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All clients");
  const [showAddClient, setShowAddClient] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientCategory, setClientCategory] = useState("Beauty & skincare");
  const [notice, setNotice] = useState("");

  const filteredClients = clients.filter((client) => {
    const matchesSearch = `${client.name} ${client.category}`
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All clients" || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  function addClient(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = clientName.trim();
    if (!trimmedName) return;

    setClients((current) => [
      ...current,
      {
        id: Date.now(),
        name: trimmedName,
        category: clientCategory,
        campaigns: 0,
        creators: 0,
        status: "Planning",
        initials: trimmedName.split(/\s+/).slice(0, 2).map((word) => word[0]).join("").toUpperCase(),
        tone: "lilac",
      },
    ]);

    setClientName("");
    setClientCategory("Beauty & skincare");
    setShowAddClient(false);
    setNotice(`${trimmedName} added to this demo workspace.`);
  }

  return (
    <>
      <Navbar />

      <main className="agency-solution-page">
        <section className="agency-hero">
          <div className="agency-hero-inner">
            <div className="agency-hero-copy">
              <div className="eyebrow"><BriefcaseBusiness size={15} /> BUILT FOR CREATOR AGENCIES</div>
              <h1>
                More clients.
                <br />
                Less <span className="gradient-text">operational chaos.</span>
              </h1>
              <p>
                Run creator campaigns across multiple brands with a connected
                workspace for clients, teams, creator relationships, and reporting.
              </p>

              <div className="agency-hero-actions">
                <a className="button button-primary" href="/book-a-demo">
                  Book an agency demo <ArrowRight size={16} />
                </a>
                <a className="button button-quiet" href="/pricing">
                  Compare plans
                </a>
              </div>

              <div className="agency-proof-list">
                <span><Check size={14} /> Multi-client visibility</span>
                <span><Check size={14} /> Repeatable workflows</span>
                <span><Check size={14} /> Clearer reporting</span>
              </div>
            </div>

            <div className="agency-dashboard">
              <div className="agency-dashboard-top">
                <div>
                  <span className="agency-overline">AGENCY WORKSPACE</span>
                  <h3>Client portfolio</h3>
                </div>
                <span className="agency-workspace-pill"><i /> Workspace active</span>
              </div>

              <div className="agency-dashboard-stats">
                <div><span>Clients</span><strong>{clients.length.toString().padStart(2, "0")}</strong><small>Across your portfolio</small></div>
                <div><span>Campaigns</span><strong>{clients.reduce((sum, client) => sum + client.campaigns, 0)}</strong><small>In all client accounts</small></div>
                <div><span>Creators</span><strong>{clients.reduce((sum, client) => sum + client.creators, 0)}</strong><small>Across active work</small></div>
              </div>

              <div className="agency-dashboard-table-head">
                <strong>Client overview</strong>
                <span>Sample workspace</span>
              </div>

              <div className="agency-dashboard-client-list">
                {clients.slice(0, 3).map((client) => (
                  <div className="agency-dashboard-client" key={client.id}>
                    <span className={`agency-client-avatar agency-tone-${client.tone}`}>{client.initials}</span>
                    <div className="agency-client-name">
                      <strong>{client.name}</strong>
                      <small>{client.category}</small>
                    </div>
                    <span className={`agency-client-status agency-status-${client.status.toLowerCase()}`}>
                      {client.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="agency-dashboard-foot">
                <span><ShieldCheck size={14} /> One organized workspace</span>
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        </section>

        <section className="agency-client-workspace section">
          <div className="agency-section-title">
            <div>
              <div className="eyebrow">YOUR CLIENT PORTFOLIO</div>
              <h2>Every client. <span className="gradient-text">One clear view.</span></h2>
              <p>Explore an interactive sample of how a multi-client workspace could be organized.</p>
            </div>
            <button className="button button-primary" onClick={() => setShowAddClient((open) => !open)}>
              <Plus size={16} /> Add client
            </button>
          </div>

          {notice && (
            <div className="agency-notice" role="status">
              <Check size={15} /> {notice}
              <button onClick={() => setNotice("")} aria-label="Dismiss notification">×</button>
            </div>
          )}

          {showAddClient && (
            <form className="agency-add-client-form" onSubmit={addClient}>
              <h3>Add a client workspace</h3>
              <label>
                Client or brand name
                <input value={clientName} onChange={(event) => setClientName(event.target.value)} placeholder="e.g. Bloom & Co." required />
              </label>
              <label>
                Industry
                <select value={clientCategory} onChange={(event) => setClientCategory(event.target.value)}>
                  <option>Beauty & skincare</option>
                  <option>Fashion & lifestyle</option>
                  <option>Fitness & lifestyle</option>
                  <option>Food & wellness</option>
                  <option>Technology</option>
                  <option>Other</option>
                </select>
              </label>
              <div className="agency-form-actions">
                <button type="button" className="button button-quiet" onClick={() => setShowAddClient(false)}>Cancel</button>
                <button type="submit" className="button button-primary">Add client</button>
              </div>
            </form>
          )}

          <div className="agency-client-toolbar">
            <div className="agency-search">
              <Search size={16} />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search clients..." aria-label="Search clients" />
            </div>
            <label className="agency-filter">
              <span>Status</span>
              <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                <option>All clients</option>
                <option>Active</option>
                <option>Planning</option>
                <option>Review</option>
              </select>
              <ChevronDown size={14} />
            </label>
          </div>

          <div className="agency-client-grid">
            {filteredClients.map((client) => (
              <article className="agency-client-card" key={client.id}>
                <div className="agency-client-card-top">
                  <span className={`agency-client-avatar agency-client-avatar-large agency-tone-${client.tone}`}>{client.initials}</span>
                  <span className={`agency-client-status agency-status-${client.status.toLowerCase()}`}>{client.status}</span>
                </div>
                <h3>{client.name}</h3>
                <p>{client.category}</p>
                <div className="agency-client-card-metrics">
                  <div><strong>{client.campaigns}</strong><span>Campaigns</span></div>
                  <div><strong>{client.creators}</strong><span>Creators</span></div>
                </div>
                <a href="/book-a-demo" className="agency-client-open">Discuss client workflows <ArrowRight size={14} /></a>
              </article>
            ))}
            {filteredClients.length === 0 && (
              <div className="agency-empty">No clients match your search.</div>
            )}
          </div>
          <p className="agency-demo-caption">Sample data for demonstration. Client records are held in local page state only.</p>
        </section>

        <section className="agency-features-section">
          <div className="agency-section-inner">
            <div className="agency-section-title agency-section-title-centered">
              <div>
                <div className="eyebrow">MADE FOR AGENCY OPERATIONS</div>
                <h2>Build a smoother <span className="gradient-text">delivery engine.</span></h2>
                <p>Give account managers, campaign teams, and leadership a more connected way to work.</p>
              </div>
            </div>

            <div className="agency-features-grid">
              {agencyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <article className="agency-feature-card" key={feature.title}>
                    <span className="agency-feature-icon"><Icon size={22} /></span>
                    <span className="agency-feature-index">0{index + 1}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="agency-process section">
          <div className="agency-section-title">
            <div>
              <div className="eyebrow">A REPEATABLE PROCESS</div>
              <h2>From client brief <span className="gradient-text">to campaign recap.</span></h2>
              <p>Structure the work without making collaboration feel complicated.</p>
            </div>
          </div>
          <div className="agency-process-grid">
            {agencySteps.map((step, index) => (
              <article className="agency-process-step" key={step.number}>
                <div className="agency-process-step-top">
                  <span>{step.number}</span>
                  {index < agencySteps.length - 1 && <ArrowRight size={17} />}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="agency-final-cta">
          <div className="agency-final-glow" />
          <div className="eyebrow"><Sparkles size={14} /> READY TO SCALE YOUR AGENCY?</div>
          <h2>
            Give great work
            <br />
            <span className="gradient-text">a better operating system.</span>
          </h2>
          <p>Explore how INFLORO could support your agency's client and creator workflows.</p>
          <div className="agency-hero-actions">
            <a className="button button-primary" href="/book-a-demo">Book an agency demo <ArrowRight size={16} /></a>
            <a className="button button-quiet" href="/get-started">Get started</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
