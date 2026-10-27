
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  Mail,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
  SlidersHorizontal,
  Users,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type CreatorStatus =
  | "New"
  | "Contacted"
  | "Interested"
  | "Negotiating"
  | "Partnered"
  | "Ghosted";

type Creator = {
  id: number;
  name: string;
  handle: string;
  niche: string;
  email: string;
  status: CreatorStatus;
  lastContact: string;
  followUp: string;
  initials: string;
  avatar: string;
  channel: string;
};

const initialCreators: Creator[] = [
  {
    id: 1,
    name: "Ava Mitchell",
    handle: "@avamitchell",
    niche: "Lifestyle",
    email: "ava@example.com",
    status: "Interested",
    lastContact: "Today",
    followUp: "Tomorrow",
    initials: "AM",
    avatar: "avatar-lilac",
    channel: "Instagram",
  },
  {
    id: 2,
    name: "Sophia James",
    handle: "@sophiajames",
    niche: "Beauty",
    email: "sophia@example.com",
    status: "Contacted",
    lastContact: "Yesterday",
    followUp: "Oct 30",
    initials: "SJ",
    avatar: "avatar-peach",
    channel: "Email",
  },
  {
    id: 3,
    name: "Riley Kim",
    handle: "@rileykim",
    niche: "Wellness",
    email: "riley@example.com",
    status: "Negotiating",
    lastContact: "Oct 25",
    followUp: "Today",
    initials: "RK",
    avatar: "avatar-mint",
    channel: "Instagram",
  },
  {
    id: 4,
    name: "Noah Williams",
    handle: "@noahcreates",
    niche: "Technology",
    email: "noah@example.com",
    status: "New",
    lastContact: "Oct 24",
    followUp: "Not scheduled",
    initials: "NW",
    avatar: "avatar-blue",
    channel: "Email",
  },
  {
    id: 5,
    name: "Mia Laurent",
    handle: "@mialaurent",
    niche: "Fashion",
    email: "mia@example.com",
    status: "Partnered",
    lastContact: "Oct 23",
    followUp: "Nov 02",
    initials: "ML",
    avatar: "avatar-rose",
    channel: "Instagram",
  },
  {
    id: 6,
    name: "Ethan Brooks",
    handle: "@ethanbrooks",
    niche: "Travel",
    email: "ethan@example.com",
    status: "Ghosted",
    lastContact: "Oct 18",
    followUp: "Not scheduled",
    initials: "EB",
    avatar: "avatar-sand",
    channel: "Email",
  },
];

const statuses: Array<"All" | CreatorStatus> = [
  "All",
  "New",
  "Contacted",
  "Interested",
  "Negotiating",
  "Partnered",
  "Ghosted",
];

function StatusBadge({ status }: { status: CreatorStatus }) {
  return (
    <span className={`crm-status status-${status.toLowerCase()}`}>
      <span />
      {status}
    </span>
  );
}

export default function CreatorCRMPage() {
  const [creators, setCreators] = useState(initialCreators);
  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState<"All" | CreatorStatus>(
    "All"
  );
  const [channelFilter, setChannelFilter] = useState("All channels");
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newHandle, setNewHandle] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newNiche, setNewNiche] = useState("Lifestyle");
  const [notice, setNotice] = useState("");

  const filteredCreators = useMemo(() => {
    const query = search.trim().toLowerCase();

    return creators.filter((creator) => {
      const matchesSearch = [
        creator.name,
        creator.handle,
        creator.email,
        creator.niche,
      ].some((value) => value.toLowerCase().includes(query));

      const matchesStatus =
        activeStatus === "All" || creator.status === activeStatus;

      const matchesChannel =
        channelFilter === "All channels" ||
        creator.channel === channelFilter;

      return matchesSearch && matchesStatus && matchesChannel;
    });
  }, [creators, search, activeStatus, channelFilter]);

  const interestedCount = creators.filter(
    (creator) => creator.status === "Interested"
  ).length;

  const activeDeals = creators.filter((creator) =>
    ["Negotiating", "Partnered"].includes(creator.status)
  ).length;

  const followUps = creators.filter(
    (creator) =>
      creator.followUp === "Today" || creator.followUp === "Tomorrow"
  ).length;

  function updateStatus(id: number, status: CreatorStatus) {
    setCreators((current) =>
      current.map((creator) =>
        creator.id === id ? { ...creator, status } : creator
      )
    );

    setSelectedCreator((current) =>
      current?.id === id ? { ...current, status } : current
    );

    setNotice("Creator status updated.");
  }

  function scheduleFollowUp(id: number, date: string) {
    setCreators((current) =>
      current.map((creator) =>
        creator.id === id ? { ...creator, followUp: date } : creator
      )
    );

    setSelectedCreator((current) =>
      current?.id === id ? { ...current, followUp: date } : current
    );

    setNotice("Follow-up updated.");
  }

  function addCreator(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const creator: Creator = {
      id: Date.now(),
      name: newName.trim(),
      handle: newHandle.trim() || "@creator",
      niche: newNiche,
      email: newEmail.trim(),
      status: "New",
      lastContact: "Not contacted",
      followUp: "Not scheduled",
      initials: newName
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? "")
        .join(""),
      avatar: "avatar-lilac",
      channel: "Email",
    };

    setCreators((current) => [creator, ...current]);
    setSearch("");
    setActiveStatus("All");
    setChannelFilter("All channels");
    setNewName("");
    setNewHandle("");
    setNewEmail("");
    setNewNiche("Lifestyle");
    setShowAddForm(false);
    setNotice("Creator added to your workspace.");
  }

  return (
    <>
      <Navbar />

      <main className="crm-page">
        <section className="crm-hero">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              OUTREACH & CREATOR CRM
            </div>

            <h1>
              Every relationship.
              <br />
              <span className="gradient-text">Right on track.</span>
            </h1>

            <p>
              Keep creator conversations organized, follow up at the right
              moment, and turn promising connections into lasting partnerships.
            </p>
          </div>

          <div className="crm-hero-art" aria-hidden="true">
            <div className="crm-art-orbit" />
            <div className="crm-art-center">
              <Users size={36} />
            </div>
            <div className="crm-art-bubble crm-bubble-one">
              <MessageCircle size={16} />
            </div>
            <div className="crm-art-bubble crm-bubble-two">
              <CalendarDays size={16} />
            </div>
            <div className="crm-art-bubble crm-bubble-three">
              <Mail size={16} />
            </div>
          </div>
        </section>

        <section className="crm-workspace">
          <div className="crm-workspace-header">
            <div>
              <span className="crm-workspace-kicker">YOUR WORKSPACE</span>
              <h2>Creator relationships</h2>
              <p>Manage your creator pipeline from first contact to partnership.</p>
            </div>

            <button
              className="button button-primary"
              type="button"
              onClick={() => {
                setNotice("");
                setShowAddForm(true);
              }}
            >
              <Plus size={16} /> Add creator
            </button>
          </div>

          <div className="crm-stats">
            <article className="crm-stat-card">
              <span className="crm-stat-icon"><Users size={18} /></span>
              <span className="crm-stat-label">Total creators</span>
              <strong>{creators.length}</strong>
              <small>In your workspace</small>
            </article>

            <article className="crm-stat-card">
              <span className="crm-stat-icon"><MessageCircle size={18} /></span>
              <span className="crm-stat-label">Interested</span>
              <strong>{interestedCount}</strong>
              <small>Potential opportunities</small>
            </article>

            <article className="crm-stat-card">
              <span className="crm-stat-icon"><ArrowUpRight size={18} /></span>
              <span className="crm-stat-label">Active partnerships</span>
              <strong>{activeDeals}</strong>
              <small>Negotiating or partnered</small>
            </article>

            <article className="crm-stat-card">
              <span className="crm-stat-icon"><CalendarDays size={18} /></span>
              <span className="crm-stat-label">Upcoming follow-ups</span>
              <strong>{followUps}</strong>
              <small>Today or tomorrow</small>
            </article>
          </div>

          <div className="crm-table-card">
            <div className="crm-table-heading">
              <div>
                <h3>Creator pipeline</h3>
                <p>Review relationships and keep conversations moving.</p>
              </div>
              <span className="crm-record-count">
                {filteredCreators.length} records
              </span>
            </div>

            <div className="crm-toolbar">
              <label className="crm-search">
                <Search size={16} />
                <input
                  type="search"
                  placeholder="Search creators..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </label>

              <label className="crm-channel-filter">
                <SlidersHorizontal size={14} />
                <select
                  value={channelFilter}
                  onChange={(event) => setChannelFilter(event.target.value)}
                  aria-label="Filter by contact channel"
                >
                  <option>All channels</option>
                  <option>Instagram</option>
                  <option>Email</option>
                </select>
                <ChevronDown size={13} />
              </label>
            </div>

            <div className="crm-status-tabs">
              {statuses.map((status) => (
                <button
                  type="button"
                  key={status}
                  className={activeStatus === status ? "active" : ""}
                  onClick={() => setActiveStatus(status)}
                >
                  {status}
                  {status === "All" && (
                    <span>{creators.length}</span>
                  )}
                </button>
              ))}
            </div>

            {notice && (
              <div className="crm-notice" role="status">
                <Check size={15} />
                {notice}
                <button
                  type="button"
                  aria-label="Dismiss notification"
                  onClick={() => setNotice("")}
                >
                  <X size={14} />
                </button>
              </div>
            )}

            <div className="crm-table-scroll">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Creator</th>
                    <th>Contact channel</th>
                    <th>Relationship status</th>
                    <th>Last contact</th>
                    <th>Next follow-up</th>
                    <th>Details</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredCreators.map((creator) => (
                    <tr key={creator.id}>
                      <td>
                        <div className="crm-creator-cell">
                          <span className={`crm-avatar ${creator.avatar}`}>
                            {creator.initials}
                          </span>
                          <div>
                            <strong>{creator.name}</strong>
                            <span>{creator.handle}</span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span className="crm-channel">
                          {creator.channel === "Instagram" ? (
                            <Instagram size={14} />
                          ) : (
                            <Mail size={14} />
                          )}
                          {creator.channel}
                        </span>
                      </td>

                      <td><StatusBadge status={creator.status} /></td>
                      <td className="crm-muted-cell">{creator.lastContact}</td>

                      <td>
                        <span className="crm-followup">
                          <Clock3 size={13} />
                          {creator.followUp}
                        </span>
                      </td>

                      <td>
                        <button
                          className="crm-details-button"
                          type="button"
                          onClick={() => {
                            setNotice("");
                            setSelectedCreator(creator);
                          }}
                        >
                          <MoreHorizontal size={19} />
                          <span className="sr-only">Open {creator.name}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredCreators.length === 0 && (
              <div className="crm-empty">
                <Search size={25} />
                <h3>No matching creators</h3>
                <p>Try changing your search or relationship status.</p>
                <button
                  type="button"
                  className="button button-quiet"
                  onClick={() => {
                    setSearch("");
                    setActiveStatus("All");
                    setChannelFilter("All channels");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          <p className="crm-demo-note">
            Sample creator records for demonstration. Changes remain in this
            browser session and are not saved to a backend.
          </p>
        </section>

        <section className="section">
          <div className="section-inner bottom-cta">
            <div>
              <div className="eyebrow">
                <MessageCircle size={13} /> RELATIONSHIPS THAT MOVE FORWARD
              </div>
              <h2>Make every follow-up count.</h2>
              <p>See how Infloro can help your team manage creator relationships.</p>
            </div>
            <Link href="/book-a-demo" className="button button-primary">
              Book a demo <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>

      {showAddForm && (
        <div
          className="crm-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setShowAddForm(false);
          }}
        >
          <section className="crm-modal" role="dialog" aria-modal="true" aria-labelledby="add-creator-title">
            <div className="crm-modal-heading">
              <div>
                <span className="crm-workspace-kicker">NEW RELATIONSHIP</span>
                <h2 id="add-creator-title">Add a creator</h2>
              </div>
              <button type="button" className="crm-modal-close" onClick={() => setShowAddForm(false)} aria-label="Close">
                <X size={18} />
              </button>
            </div>

            <form className="crm-modal-form" onSubmit={addCreator}>
              <label>
                Full name *
                <input value={newName} onChange={(event) => setNewName(event.target.value)} required minLength={2} placeholder="Creator name" />
              </label>
              <label>
                Creator handle
                <input value={newHandle} onChange={(event) => setNewHandle(event.target.value)} placeholder="@username" />
              </label>
              <label>
                Email address *
                <input type="email" value={newEmail} onChange={(event) => setNewEmail(event.target.value)} required placeholder="creator@example.com" />
              </label>
              <label>
                Creator niche
                <select value={newNiche} onChange={(event) => setNewNiche(event.target.value)}>
                  {["Lifestyle", "Beauty", "Wellness", "Technology", "Fashion", "Travel", "Other"].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <div className="crm-modal-actions">
                <button type="button" className="button button-quiet" onClick={() => setShowAddForm(false)}>Cancel</button>
                <button type="submit" className="button button-primary">Add creator <Plus size={15} /></button>
              </div>
            </form>
          </section>
        </div>
      )}

      {selectedCreator && (
        <div
          className="crm-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedCreator(null);
          }}
        >
          <section className="crm-modal" role="dialog" aria-modal="true" aria-labelledby="creator-detail-title">
            <div className="crm-modal-heading">
              <div>
                <span className="crm-workspace-kicker">CREATOR PROFILE</span>
                <h2 id="creator-detail-title">{selectedCreator.name}</h2>
              </div>
              <button type="button" className="crm-modal-close" onClick={() => setSelectedCreator(null)} aria-label="Close">
                <X size={18} />
              </button>
            </div>

            <div className="crm-detail-identity">
              <span className={`crm-avatar crm-detail-avatar ${selectedCreator.avatar}`}>
                {selectedCreator.initials}
              </span>
              <div>
                <strong>{selectedCreator.handle}</strong>
                <span>{selectedCreator.niche} · {selectedCreator.channel}</span>
                <span>{selectedCreator.email}</span>
              </div>
            </div>

            <label className="crm-modal-field">
              Relationship status
              <select
                value={selectedCreator.status}
                onChange={(event) => updateStatus(selectedCreator.id, event.target.value as CreatorStatus)}
              >
                {statuses.filter((status) => status !== "All").map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </select>
            </label>

            <label className="crm-modal-field">
              Next follow-up
              <select
                value={selectedCreator.followUp}
                onChange={(event) => scheduleFollowUp(selectedCreator.id, event.target.value)}
              >
                {["Not scheduled", "Today", "Tomorrow", "Oct 30", "Nov 02", "Next week"].map((date) => (
                  <option key={date}>{date}</option>
                ))}
              </select>
            </label>

            <a className="crm-email-link" href={`mailto:${selectedCreator.email}`}>
              <Mail size={15} /> Contact creator by email
            </a>
          </section>
        </div>
      )}

      <Footer />
    </>
  );
}
