
"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Play,
  Search,
  Sparkles,
  Users,
  Video,
  X,
} from "lucide-react";

type Webinar = {
  id: number;
  title: string;
  description: string;
  category: string;
  format: "Live session" | "On-demand";
  date?: string;
  time?: string;
  duration: string;
  speaker: string;
  role: string;
  tag: string;
  color: string;
  agenda: string[];
};

const webinars: Webinar[] = [
  {
    id: 1,
    title: "Creator Marketing: From Strategy to Scale",
    description:
      "Build a repeatable creator marketing strategy that connects business goals with measurable partnerships.",
    category: "Strategy",
    format: "Live session",
    date: "Nov 12, 2026",
    time: "11:00 AM IST",
    duration: "45 min",
    speaker: "Infloro Learning Team",
    role: "Creator Marketing",
    tag: "FEATURED EVENT",
    color: "purple",
    agenda: [
      "Define campaign objectives and success metrics.",
      "Find creators who match your audience and brand.",
      "Build a repeatable workflow from outreach to reporting.",
      "Questions and answers.",
    ],
  },
  {
    id: 2,
    title: "Creator Discovery That Goes Beyond Follower Count",
    description:
      "Learn how to assess audience fit, content quality, engagement, and partnership potential.",
    category: "Discovery",
    format: "On-demand",
    duration: "32 min",
    speaker: "Infloro Learning Team",
    role: "Creator Research",
    tag: "POPULAR",
    color: "peach",
    agenda: [
      "Create a creator evaluation scorecard.",
      "Assess audience relevance and content quality.",
      "Compare creators using consistent criteria.",
      "Organize a practical creator shortlist.",
    ],
  },
  {
    id: 3,
    title: "Making Sense of Creator Campaign Analytics",
    description:
      "Understand reach, engagement, attribution, conversions, and how to report campaign outcomes.",
    category: "Analytics",
    format: "Live session",
    date: "Nov 19, 2026",
    time: "4:00 PM IST",
    duration: "50 min",
    speaker: "Infloro Learning Team",
    role: "Campaign Analytics",
    tag: "NEW SESSION",
    color: "mint",
    agenda: [
      "Select KPIs based on campaign objectives.",
      "Understand reach, impressions, and engagement.",
      "Set up tracking links and attribution conventions.",
      "Build a useful campaign performance report.",
    ],
  },
  {
    id: 4,
    title: "A Practical Guide to UGC Campaigns",
    description:
      "Plan content briefs, creator deliverables, approval workflows, and usage rights.",
    category: "Content",
    format: "On-demand",
    duration: "28 min",
    speaker: "Infloro Learning Team",
    role: "UGC Strategy",
    tag: "PRACTICAL WORKSHOP",
    color: "pink",
    agenda: [
      "Identify your content requirements.",
      "Write a clear and flexible creative brief.",
      "Set up review and approval checkpoints.",
      "Manage content permissions and reuse.",
    ],
  },
  {
    id: 5,
    title: "Building Long-Term Creator Partnerships",
    description:
      "Develop thoughtful outreach, reliable communication, and stronger creator relationships.",
    category: "Relationships",
    format: "On-demand",
    duration: "35 min",
    speaker: "Infloro Learning Team",
    role: "Partnership Management",
    tag: "ESSENTIAL SKILLS",
    color: "blue",
    agenda: [
      "Personalize outreach messages.",
      "Agree on deliverables and expectations.",
      "Organize communication and follow-ups.",
      "Use campaign insights to plan repeat collaborations.",
    ],
  },
  {
    id: 6,
    title: "Affiliate Programs for Creator-Led Growth",
    description:
      "Explore commission structures, tracking methods, and practical affiliate program measurement.",
    category: "Commerce",
    format: "Live session",
    date: "Dec 03, 2026",
    time: "12:00 PM IST",
    duration: "40 min",
    speaker: "Infloro Learning Team",
    role: "Affiliate Partnerships",
    tag: "UPCOMING",
    color: "gold",
    agenda: [
      "Design a transparent affiliate offer.",
      "Choose tracking links and discount codes.",
      "Understand commissions, returns, and attribution.",
      "Evaluate results before scaling.",
    ],
  },
];

const topics = [
  "All topics",
  "Strategy",
  "Discovery",
  "Analytics",
  "Content",
  "Relationships",
  "Commerce",
];

export default function WebinarsPage() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All topics");
  const [format, setFormat] = useState("All formats");
  const [selected, setSelected] = useState<Webinar | null>(null);
  const [registering, setRegistering] = useState<Webinar | null>(null);
  const [registered, setRegistered] = useState<number[]>([]);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");

  const filteredWebinars = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return webinars.filter((webinar) => {
      const matchesSearch =
        !normalized ||
        webinar.title.toLowerCase().includes(normalized) ||
        webinar.description.toLowerCase().includes(normalized) ||
        webinar.category.toLowerCase().includes(normalized);

      return (
        matchesSearch &&
        (topic === "All topics" || webinar.category === topic) &&
        (format === "All formats" || webinar.format === format)
      );
    });
  }, [query, topic, format]);

  const upcoming = filteredWebinars.filter(
    (webinar) => webinar.format === "Live session"
  );
  const onDemand = filteredWebinars.filter(
    (webinar) => webinar.format === "On-demand"
  );

  function openRegistration(webinar: Webinar) {
    setSelected(null);
    setRegistering(webinar);
    setFullName("");
    setEmail("");
    setRegistrationMessage("");
  }

  function handleRegistration(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!registering) return;

    setRegistered((current) =>
      current.includes(registering.id)
        ? current
        : [...current, registering.id]
    );

    setRegistrationMessage(
      `Demo registration completed for "${registering.title}". This is a frontend demonstration; no email has been sent and no booking has been saved to a server.`
    );
  }

  return (
    <main className="webinars-page">
      <section className="webinars-hero">
        <div className="webinar-orbit webinar-orbit-one" />
        <div className="webinar-orbit webinar-orbit-two" />

        <div className="webinars-hero-inner">
          <span className="eyebrow">
            <Sparkles size={15} /> THE INFLORO EVENTS STUDIO
          </span>

          <h1>
            Learn from ideas.
            <br />
            <span className="gradient-text">Grow through action.</span>
          </h1>

          <p>
            Join practical sessions and explore on-demand learning designed
            for better creator partnerships and smarter campaigns.
          </p>

          <div className="webinars-hero-actions">
            <a href="#upcoming-webinars" className="button button-primary">
              Explore upcoming events <ArrowRight size={16} />
            </a>
            <a href="#on-demand-webinars" className="button button-quiet">
              <Play size={15} /> Watch on demand
            </a>
          </div>

          <div className="webinars-hero-metrics">
            <div>
              <strong>Practical</strong>
              <span>Real-world workflows</span>
            </div>
            <div>
              <strong>Focused</strong>
              <span>Topic-led sessions</span>
            </div>
            <div>
              <strong>Flexible</strong>
              <span>Live and on demand</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section webinars-library">
        <div className="webinars-heading">
          <div>
            <span className="eyebrow">FIND YOUR NEXT SESSION</span>
            <h2>Ideas worth your time.</h2>
            <p>Explore events and learning sessions by topic or format.</p>
          </div>
          <div className="webinars-total">
            <strong>{filteredWebinars.length}</strong>
            <span>sessions</span>
          </div>
        </div>

        <div className="webinars-filter-panel">
          <div className="webinars-search">
            <Search size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search webinars and topics..."
              aria-label="Search webinars"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")}>
                Clear
              </button>
            )}
          </div>

          <div className="webinars-filters">
            <div className="webinars-topic-filters">
              {topics.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={topic === item ? "active" : ""}
                  onClick={() => setTopic(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <select
              value={format}
              onChange={(event) => setFormat(event.target.value)}
              aria-label="Filter by webinar format"
            >
              <option>All formats</option>
              <option>Live session</option>
              <option>On-demand</option>
            </select>
          </div>
        </div>

        <section className="webinar-list-section" id="upcoming-webinars">
          <div className="webinar-subheading">
            <div className="webinar-subheading-icon">
              <CalendarDays size={19} />
            </div>
            <div>
              <h3>Upcoming live sessions</h3>
              <p>Reserve a place for an upcoming learning session.</p>
            </div>
            <span className="webinar-section-count">
              {upcoming.length} events
            </span>
          </div>

          {upcoming.length ? (
            <div className="webinar-event-list">
              {upcoming.map((webinar) => (
                <article className="webinar-event-card" key={webinar.id}>
                  <div
                    className={`webinar-event-art webinar-color-${webinar.color}`}
                  >
                    <div className="webinar-event-art-ring" />
                    <div className="webinar-event-art-icon">
                      <Video size={29} strokeWidth={1.5} />
                    </div>
                    <span>{webinar.tag}</span>
                  </div>

                  <div className="webinar-event-info">
                    <div className="webinar-event-meta">
                      <span>{webinar.category}</span>
                      <span className="webinar-meta-dot" />
                      <span><Clock3 size={12} /> {webinar.duration}</span>
                    </div>
                    <h3>{webinar.title}</h3>
                    <p>{webinar.description}</p>
                    <div className="webinar-speaker">
                      <span className="webinar-speaker-avatar">
                        <Sparkles size={15} />
                      </span>
                      <span>
                        <strong>{webinar.speaker}</strong>
                        <small>{webinar.role}</small>
                      </span>
                    </div>
                  </div>

                  <div className="webinar-event-booking">
                    <div className="webinar-date">
                      <CalendarDays size={15} />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="webinar-time">{webinar.time}</div>
                    <button
                      type="button"
                      className="button button-primary"
                      onClick={() => openRegistration(webinar)}
                    >
                      {registered.includes(webinar.id)
                        ? "Registered"
                        : "Register now"}
                      <ArrowRight size={15} />
                    </button>
                    <button
                      type="button"
                      className="webinar-details-link"
                      onClick={() => setSelected(webinar)}
                    >
                      View session details
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="webinars-empty">
              No upcoming sessions match your filters. Try another topic or format.
            </div>
          )}
        </section>

        <section className="webinar-list-section" id="on-demand-webinars">
          <div className="webinar-subheading">
            <div className="webinar-subheading-icon webinar-demand-icon">
              <Play size={18} />
            </div>
            <div>
              <h3>Learn on your schedule</h3>
              <p>Explore recorded sessions and revisit key ideas.</p>
            </div>
            <span className="webinar-section-count">
              {onDemand.length} recordings
            </span>
          </div>

          {onDemand.length ? (
            <div className="webinars-recording-grid">
              {onDemand.map((webinar) => (
                <article className="webinar-recording-card" key={webinar.id}>
                  <div
                    className={`webinar-recording-art webinar-color-${webinar.color}`}
                  >
                    <div className="webinar-recording-orbit" />
                    <div className="webinar-recording-play">
                      <Play size={21} fill="currentColor" />
                    </div>
                    <span className="webinar-recording-duration">
                      {webinar.duration}
                    </span>
                  </div>

                  <div className="webinar-recording-body">
                    <div className="webinar-event-meta">
                      <span>{webinar.category}</span>
                      <span className="webinar-meta-dot" />
                      <span>On-demand</span>
                    </div>
                    <h3>{webinar.title}</h3>
                    <p>{webinar.description}</p>
                    <button
                      type="button"
                      className="webinar-watch-link"
                      onClick={() => setSelected(webinar)}
                    >
                      Explore session <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="webinars-empty">
              No on-demand sessions match your filters.
            </div>
          )}
        </section>
      </section>

      <section className="section webinars-bottom-section">
        <div className="webinars-bottom-card">
          <div className="webinars-bottom-icon"><Users size={24} /></div>
          <div>
            <span className="eyebrow">LEARN WITH INFLORO</span>
            <h2>Turn your next idea into a better workflow.</h2>
            <p>
              Explore the resources and tools designed to help your team
              discover creators and manage partnerships.
            </p>
          </div>
          <a href="/get-started" className="button button-primary">
            Get started <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {selected && (
        <div
          className="webinar-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <section
            className="webinar-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="webinar-detail-title"
          >
            <div
              className={`webinar-modal-banner webinar-color-${selected.color}`}
            >
              <button
                type="button"
                className="webinar-modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close details"
              >
                <X size={19} />
              </button>
              <div className="webinar-modal-play">
                {selected.format === "On-demand" ? (
                  <Play size={25} fill="currentColor" />
                ) : (
                  <Video size={27} />
                )}
              </div>
              <span>{selected.format.toUpperCase()}</span>
            </div>

            <div className="webinar-modal-content">
              <div className="webinar-event-meta">
                <span>{selected.category}</span>
                <span className="webinar-meta-dot" />
                <span><Clock3 size={12} /> {selected.duration}</span>
              </div>
              <h2 id="webinar-detail-title">{selected.title}</h2>
              <p className="webinar-modal-description">{selected.description}</p>

              {selected.date && (
                <div className="webinar-modal-date">
                  <CalendarDays size={17} />
                  <div>
                    <strong>{selected.date}</strong>
                    <span>{selected.time}</span>
                  </div>
                </div>
              )}

              <div className="webinar-agenda">
                <h3>What you’ll learn</h3>
                {selected.agenda.map((item, index) => (
                  <div className="webinar-agenda-item" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="webinar-modal-footer">
                <div className="webinar-speaker">
                  <span className="webinar-speaker-avatar">
                    <Sparkles size={15} />
                  </span>
                  <span>
                    <strong>{selected.speaker}</strong>
                    <small>{selected.role}</small>
                  </span>
                </div>
                {selected.format === "Live session" ? (
                  <button
                    type="button"
                    className="button button-primary"
                    onClick={() => openRegistration(selected)}
                  >
                    {registered.includes(selected.id)
                      ? "Registered"
                      : "Register for session"}
                    <ArrowRight size={15} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button button-primary"
                    onClick={() =>
                      setRegistrationMessage(
                        "This sample recording does not have a video URL connected yet."
                      )
                    }
                  >
                    <Play size={15} /> View recording
                  </button>
                )}
              </div>

              {registrationMessage && selected.format === "On-demand" && (
                <p className="webinar-inline-note">{registrationMessage}</p>
              )}
              <p className="webinar-demo-note">
                Event details are sample content. Live dates and registrations
                have not been connected to a scheduling service.
              </p>
            </div>
          </section>
        </div>
      )}

      {registering && (
        <div
          className="webinar-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setRegistering(null);
          }}
        >
          <section
            className="webinar-registration-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="webinar-register-title"
          >
            <div className="webinar-registration-header">
              <div className="webinar-registration-icon">
                <CalendarDays size={23} />
              </div>
              <button
                type="button"
                className="webinar-modal-close"
                onClick={() => setRegistering(null)}
                aria-label="Close registration"
              >
                <X size={19} />
              </button>
              <span className="eyebrow">SAVE YOUR PLACE</span>
              <h2 id="webinar-register-title">Join the session.</h2>
              <p>{registering.title}</p>
              <div className="webinar-registration-date">
                <CalendarDays size={15} />
                {registering.date} · {registering.time}
              </div>
            </div>

            {registrationMessage ? (
              <div className="webinar-registration-success">
                <CheckCircle2 size={35} />
                <h3>Demo registration complete</h3>
                <p>{registrationMessage}</p>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => setRegistering(null)}
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                className="webinar-registration-form"
                onSubmit={handleRegistration}
              >
                <label>
                  Full name
                  <input
                    required
                    autoComplete="name"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Work email
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@company.com"
                  />
                </label>
                <button
                  type="submit"
                  className="button button-primary webinar-register-submit"
                >
                  Complete demo registration <ArrowRight size={16} />
                </button>
                <p>
                  This is a frontend demo. Your details are not sent to a
                  server or used to send an email.
                </p>
              </form>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
