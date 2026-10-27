
"use client";

import { useMemo, useState, type FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Mail,
  MessageSquare,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Unplug,
  Workflow,
  Zap,
} from "lucide-react";

type Integration = {
  id: string;
  name: string;
  category: "Communication" | "Analytics" | "Commerce" | "Productivity";
  description: string;
  initials: string;
  color: string;
  connected: boolean;
  popular?: boolean;
};

type Automation = {
  id: number;
  name: string;
  trigger: string;
  action: string;
  enabled: boolean;
  runs: number;
};

const initialIntegrations: Integration[] = [
  {
    id: "gmail",
    name: "Gmail",
    category: "Communication",
    description: "Manage creator outreach and email follow-ups.",
    initials: "G",
    color: "#e76a5b",
    connected: true,
    popular: true,
  },
  {
    id: "slack",
    name: "Slack",
    category: "Communication",
    description: "Send campaign updates to your team channels.",
    initials: "S",
    color: "#9b6bd3",
    connected: true,
    popular: true,
  },
  {
    id: "sheets",
    name: "Google Sheets",
    category: "Analytics",
    description: "Export campaign and creator performance data.",
    initials: "S",
    color: "#39a875",
    connected: false,
    popular: true,
  },
  {
    id: "shopify",
    name: "Shopify",
    category: "Commerce",
    description: "Connect creator promotions to store performance.",
    initials: "S",
    color: "#88a94c",
    connected: false,
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "Productivity",
    description: "Keep brand and partner records in sync.",
    initials: "H",
    color: "#ed8d50",
    connected: false,
  },
  {
    id: "discord",
    name: "Discord",
    category: "Communication",
    description: "Share campaign notifications with communities.",
    initials: "D",
    color: "#667eea",
    connected: false,
  },
  {
    id: "analytics",
    name: "Google Analytics",
    category: "Analytics",
    description: "Review website activity from creator campaigns.",
    initials: "A",
    color: "#e5a440",
    connected: false,
  },
  {
    id: "notion",
    name: "Notion",
    category: "Productivity",
    description: "Organize briefs, campaign notes, and deliverables.",
    initials: "N",
    color: "#505050",
    connected: false,
  },
];

const initialAutomations: Automation[] = [
  {
    id: 1,
    name: "New creator notification",
    trigger: "A creator is added",
    action: "Notify the campaign team",
    enabled: true,
    runs: 42,
  },
  {
    id: 2,
    name: "Follow-up reminder",
    trigger: "A deal needs a follow-up",
    action: "Send an email reminder",
    enabled: true,
    runs: 28,
  },
  {
    id: 3,
    name: "Campaign completion",
    trigger: "A campaign is completed",
    action: "Prepare a performance report",
    enabled: false,
    runs: 12,
  },
];

const categories = [
  "All integrations",
  "Communication",
  "Analytics",
  "Commerce",
  "Productivity",
] as const;

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState(initialIntegrations);
  const [automations, setAutomations] = useState(initialAutomations);
  const [category, setCategory] =
    useState<(typeof categories)[number]>("All integrations");
  const [search, setSearch] = useState("");
  const [showAutomationForm, setShowAutomationForm] = useState(false);
  const [automationName, setAutomationName] = useState("");
  const [trigger, setTrigger] = useState("A creator is added");
  const [action, setAction] = useState("Notify the campaign team");
  const [notice, setNotice] = useState("");

  const filteredIntegrations = useMemo(
    () =>
      integrations.filter((integration) => {
        const matchesCategory =
          category === "All integrations" ||
          integration.category === category;
        const matchesSearch =
          `${integration.name} ${integration.description}`
            .toLowerCase()
            .includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [integrations, category, search]
  );

  const connectedCount = integrations.filter((item) => item.connected).length;
  const activeCount = automations.filter((item) => item.enabled).length;

  function toggleIntegration(id: string) {
    const item = integrations.find((integration) => integration.id === id);
    if (!item) return;

    setIntegrations((current) =>
      current.map((integration) =>
        integration.id === id
          ? { ...integration, connected: !integration.connected }
          : integration
      )
    );

    setNotice(
      item.connected
        ? `${item.name} marked as disconnected in this demo.`
        : `${item.name} marked as connected in this demo.`
    );
  }

  function toggleAutomation(id: number) {
    setAutomations((current) =>
      current.map((automation) =>
        automation.id === id
          ? { ...automation, enabled: !automation.enabled }
          : automation
      )
    );
  }

  function createAutomation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!automationName.trim()) return;

    setAutomations((current) => [
      ...current,
      {
        id: Date.now(),
        name: automationName.trim(),
        trigger,
        action,
        enabled: true,
        runs: 0,
      },
    ]);

    setAutomationName("");
    setTrigger("A creator is added");
    setAction("Notify the campaign team");
    setShowAutomationForm(false);
    setNotice("Automation rule added to this demo.");
  }

  return (
    <>
      <Navbar />

      <main className="integrations-page">
        <div className="integrations-shell">
          <section className="integrations-hero">
            <div className="integrations-hero-copy">
              <div className="eyebrow">
                <Zap size={15} /> CONNECT YOUR WORKFLOW
              </div>
              <h1>
                Everything connected.
                <br />
                <span className="gradient-text">Nothing falling through.</span>
              </h1>
              <p>
                Bring your creator marketing tools together and automate
                repetitive work, so your team can focus on better partnerships.
              </p>
              <a className="button button-primary" href="#integrations-list">
                Explore integrations <ArrowRight size={16} />
              </a>
            </div>

            <div className="integration-orbit" aria-label="Connected workflow illustration">
              <div className="integration-orbit-ring integration-ring-one" />
              <div className="integration-orbit-ring integration-ring-two" />
              <div className="integration-orbit-center">
                <Workflow size={37} />
                <strong>INFLORO</strong>
                <span>Connected workspace</span>
              </div>
              <div className="integration-orbit-node node-gmail">G</div>
              <div className="integration-orbit-node node-slack">S</div>
              <div className="integration-orbit-node node-sheets">▦</div>
              <div className="integration-orbit-node node-shopify">S</div>
              <span className="integration-orbit-spark spark-one">✦</span>
              <span className="integration-orbit-spark spark-two">✧</span>
            </div>
          </section>

          <section className="integration-summary">
            <div className="integration-summary-item">
              <span className="integration-summary-icon"><Activity size={18} /></span>
              <div><strong>{connectedCount}</strong><span>Connected tools</span></div>
            </div>
            <div className="integration-summary-item">
              <span className="integration-summary-icon"><Zap size={18} /></span>
              <div><strong>{activeCount}</strong><span>Active automations</span></div>
            </div>
            <div className="integration-summary-item">
              <span className="integration-summary-icon"><Clock3 size={18} /></span>
              <div><strong>82</strong><span>Sample workflow runs</span></div>
            </div>
            <div className="integration-summary-item">
              <span className="integration-summary-icon"><ShieldCheck size={18} /></span>
              <div><strong>One place</strong><span>To manage your stack</span></div>
            </div>
          </section>

          {notice && (
            <div className="integration-notice" role="status">
              <Check size={16} /> {notice}
              <button onClick={() => setNotice("")} aria-label="Dismiss notice">×</button>
            </div>
          )}

          <section className="integration-section" id="integrations-list">
            <div className="integration-section-heading">
              <div>
                <div className="eyebrow">YOUR TOOLKIT</div>
                <h2>Integrations that work together.</h2>
                <p>Choose the tools you want in your creator marketing workflow.</p>
              </div>
              <span className="integration-count">
                {connectedCount} of {integrations.length} connected
              </span>
            </div>

            <div className="integration-toolbar">
              <div className="integration-search">
                <Search size={17} />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search integrations..."
                  aria-label="Search integrations"
                />
              </div>

              <div className="integration-categories">
                {categories.map((item) => (
                  <button
                    key={item}
                    className={category === item ? "active" : ""}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="integration-card-grid">
              {filteredIntegrations.map((integration) => (
                <article className="integration-card" key={integration.id}>
                  <div className="integration-card-top">
                    <div
                      className="integration-app-icon"
                      style={{ "--app-color": integration.color } as React.CSSProperties}
                    >
                      {integration.initials}
                    </div>
                    <div className="integration-card-badges">
                      {integration.popular && <span>Popular</span>}
                      {integration.connected && (
                        <span className="integration-connected-badge">
                          <Check size={11} /> Connected
                        </span>
                      )}
                    </div>
                  </div>

                  <h3>{integration.name}</h3>
                  <p>{integration.description}</p>
                  <div className="integration-card-footer">
                    <span>{integration.category}</span>
                    <button
                      className={integration.connected ? "integration-disconnect" : "integration-connect"}
                      onClick={() => toggleIntegration(integration.id)}
                    >
                      {integration.connected ? (
                        <><Unplug size={14} /> Disconnect</>
                      ) : (
                        <>Connect <ChevronRight size={14} /></>
                      )}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filteredIntegrations.length === 0 && (
              <div className="integration-empty">
                No integrations found. Try another search or category.
              </div>
            )}
          </section>

          <section className="integration-automation-section">
            <div className="integration-section-heading">
              <div>
                <div className="eyebrow"><Sparkles size={14} /> SMART WORKFLOWS</div>
                <h2>Let the busywork run itself.</h2>
                <p>Build simple rules to keep creator campaigns moving.</p>
              </div>
              <button
                className="button button-primary"
                onClick={() => setShowAutomationForm((open) => !open)}
              >
                <Plus size={16} />
                {showAutomationForm ? "Close builder" : "Create automation"}
              </button>
            </div>

            {showAutomationForm && (
              <form className="integration-automation-form" onSubmit={createAutomation}>
                <div className="integration-form-heading">
                  <Settings2 size={20} />
                  <div>
                    <h3>New automation rule</h3>
                    <p>Choose a trigger and the action it should start.</p>
                  </div>
                </div>

                <label>
                  Automation name
                  <input
                    required
                    value={automationName}
                    onChange={(event) => setAutomationName(event.target.value)}
                    placeholder="e.g. Creator onboarding"
                  />
                </label>

                <div className="integration-rule-fields">
                  <label>
                    When this happens
                    <select value={trigger} onChange={(event) => setTrigger(event.target.value)}>
                      <option>A creator is added</option>
                      <option>A deal needs a follow-up</option>
                      <option>A campaign is completed</option>
                      <option>A deliverable is submitted</option>
                    </select>
                  </label>
                  <ArrowRight className="integration-rule-arrow" size={20} />
                  <label>
                    Do this
                    <select value={action} onChange={(event) => setAction(event.target.value)}>
                      <option>Notify the campaign team</option>
                      <option>Send an email reminder</option>
                      <option>Prepare a performance report</option>
                      <option>Update the creator status</option>
                    </select>
                  </label>
                </div>

                <button className="button button-primary" type="submit">
                  <Zap size={15} /> Save automation
                </button>
              </form>
            )}

            <div className="integration-automation-list">
              {automations.map((automation) => (
                <article className="integration-automation-card" key={automation.id}>
                  <div className="integration-automation-symbol"><Workflow size={19} /></div>
                  <div className="integration-automation-info">
                    <h3>{automation.name}</h3>
                    <div className="integration-rule-flow">
                      <span><Activity size={13} /> {automation.trigger}</span>
                      <ArrowDown size={13} />
                      <span><Mail size={13} /> {automation.action}</span>
                    </div>
                    <small>{automation.runs} sample runs</small>
                  </div>
                  <label className="integration-switch">
                    <input
                      type="checkbox"
                      checked={automation.enabled}
                      onChange={() => toggleAutomation(automation.id)}
                      aria-label={`Toggle ${automation.name}`}
                    />
                    <span />
                  </label>
                </article>
              ))}
            </div>
          </section>

          <section className="integration-bottom-cta">
            <div className="integration-bottom-icon"><MessageSquare size={23} /></div>
            <div>
              <h2>Need a custom workflow?</h2>
              <p>Talk with our team about connecting the tools your business already uses.</p>
            </div>
            <a className="button button-primary" href="/book-a-demo">
              Book a demo <ArrowRight size={16} />
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
