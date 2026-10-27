
"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Headphones,
  LifeBuoy,
  MessageCircle,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  X,
  ArrowUpRight
} from "lucide-react";

type FAQ = {
  id: number;
  question: string;
  answer: string;
  category: string;
};

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is Infloro?",
    answer:
      "Infloro is a creator marketing platform concept designed to help brands and agencies organize creator discovery, relationships, campaigns, content workflows, and performance reporting in one place. The available functionality depends on the features implemented in your deployment.",
    category: "Getting started",
  },
  {
    id: 2,
    question: "Who can use Infloro?",
    answer:
      "Brands, agencies, independent marketing teams, and creators can use different parts of the platform. Available features and permissions should be configured for each account type.",
    category: "Getting started",
  },
  {
    id: 3,
    question: "How do I create an account?",
    answer:
      "Use the Get Started page to enter your account details. In this demo, registration is frontend-only. A production deployment needs a backend, secure password handling, validation, and an account verification workflow.",
    category: "Account & access",
  },
  {
    id: 4,
    question: "I forgot my password. What should I do?",
    answer:
      "Use the Forgot Password option on the login page. A production implementation should send a time-limited reset link to the registered email address. Never share your password or reset token with anyone.",
    category: "Account & access",
  },
  {
    id: 5,
    question: "How can I find relevant creators?",
    answer:
      "Start with your campaign objective, audience, niche, platform, location, and budget. Then compare creator content, audience relevance, engagement context, and brand fit. Avoid selecting creators based only on follower count.",
    category: "Creator discovery",
  },
  {
    id: 6,
    question: "Can I save creators for later?",
    answer:
      "The discovery demo supports saving creators locally in its interface. Persistent lists shared across devices require a backend and storage associated with your account.",
    category: "Creator discovery",
  },
  {
    id: 7,
    question: "How do I manage a campaign?",
    answer:
      "A useful workflow includes defining objectives, selecting creators, preparing a brief, agreeing on deliverables and timelines, tracking content approvals, and reviewing performance. Keep responsibilities and important decisions documented.",
    category: "Campaigns & workflow",
  },
  {
    id: 8,
    question: "Can I track creator payments and deals?",
    answer:
      "The demo includes deal and campaign workflow examples. A production payment workflow should use verified records, explicit permissions, agreed payment terms, and appropriate accounting or payment integrations.",
    category: "Campaigns & workflow",
  },
  {
    id: 9,
    question: "How does campaign analytics work?",
    answer:
      "Campaign reporting should use metrics that match the objective, such as reach for awareness or tracked conversions for performance campaigns. Demo charts may use sample data; connect real data sources before relying on them for decisions.",
    category: "Analytics & reporting",
  },
  {
    id: 10,
    question: "Can I export reports?",
    answer:
      "Some demo pages provide browser-based exports. A production reporting feature should define which fields can be exported, apply access controls, and clearly label estimated or incomplete data.",
    category: "Analytics & reporting",
  },
  {
    id: 11,
    question: "Is my account information secure?",
    answer:
      "Security depends on the deployed implementation. Production accounts should use secure authentication, server-side authorization, encrypted transport, appropriate secret management, and a clear data retention policy. Do not enter real sensitive information into a demo form.",
    category: "Privacy & security",
  },
  {
    id: 12,
    question: "Can I delete my account?",
    answer:
      "Account deletion should be handled through an authenticated workflow that explains what will be deleted, what must be retained for legal reasons, and when the deletion takes effect. Contact your platform administrator if this feature is not available.",
    category: "Privacy & security",
  },
];

const categories = [
  "All questions",
  "Getting started",
  "Account & access",
  "Creator discovery",
  "Campaigns & workflow",
  "Analytics & reporting",
  "Privacy & security",
];

const popularIds = [1, 3, 5, 7, 9, 11];

export default function HelpCenterPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All questions");
  const [openItems, setOpenItems] = useState<number[]>([1]);
  const [supportOpen, setSupportOpen] = useState(false);
  const [supportName, setSupportName] = useState("");
  const [supportEmail, setSupportEmail] = useState("");
  const [supportTopic, setSupportTopic] = useState("General question");
  const [supportMessage, setSupportMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filteredFAQs = useMemo(
    () =>
      faqs.filter((faq) => {
        const searchable = `${faq.question} ${faq.answer} ${faq.category}`.toLowerCase();
        return (
          searchable.includes(query.toLowerCase()) &&
          (category === "All questions" || faq.category === category)
        );
      }),
    [query, category]
  );

  const popularFAQs = faqs.filter((faq) => popularIds.includes(faq.id));

  function toggleFAQ(id: number) {
    setOpenItems((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function selectFAQ(faq: FAQ) {
    setCategory("All questions");
    setQuery("");
    setOpenItems((current) =>
      current.includes(faq.id)
        ? current
        : [...current, faq.id]
    );
    document.getElementById(`help-faq-${faq.id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  function submitSupport(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function resetSupport() {
    setSupportOpen(false);
    setSubmitted(false);
    setSupportName("");
    setSupportEmail("");
    setSupportTopic("General question");
    setSupportMessage("");
  }

  return (
    <main className="help-center-page">
      <section className="help-hero">
        <div className="help-hero-glow" />
        <div className="help-hero-inner">
          <span className="eyebrow"><LifeBuoy size={15} /> INFLORO SUPPORT</span>
          <h1>
            How can we
            <br />
            <span className="gradient-text">help you today?</span>
          </h1>
          <p>
            Find answers, learn how things work, and get guidance for your
            creator marketing workflow.
          </p>

          <label className="help-hero-search">
            <Search size={21} />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                document.getElementById("help-faq-library")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              placeholder="Search for answers..."
              aria-label="Search help center"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
                <X size={17} />
              </button>
            )}
            <span>Search</span>
          </label>

          <div className="help-hero-hints">
            <span>Popular:</span>
            {["Account setup", "Creator discovery", "Analytics"].map((hint) => (
              <button
                key={hint}
                onClick={() => {
                  setQuery(hint === "Account setup" ? "account" : hint);
                  document.getElementById("help-faq-library")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {hint}
              </button>
            ))}
          </div>
        </div>
        <div className="help-hero-decoration" aria-hidden="true">
          <div className="help-decoration-ring help-ring-one" />
          <div className="help-decoration-ring help-ring-two" />
          <div className="help-decoration-center"><CircleHelp size={49} strokeWidth={1.2} /></div>
          <div className="help-decoration-chip"><CheckCircle2 size={16} /> Answers made simple</div>
        </div>
      </section>

      <section className="help-quick-links">
        <button onClick={() => { setCategory("Getting started"); setQuery(""); document.getElementById("help-faq-library")?.scrollIntoView({ behavior: "smooth" }); }}>
          <span className="help-quick-icon"><BookOpen size={21} /></span>
          <span><strong>Getting started</strong><small>Learn the basics</small></span>
          <ArrowRight size={17} />
        </button>
        <button onClick={() => { setCategory("Campaigns & workflow"); setQuery(""); document.getElementById("help-faq-library")?.scrollIntoView({ behavior: "smooth" }); }}>
          <span className="help-quick-icon"><Sparkles size={21} /></span>
          <span><strong>Campaign workflows</strong><small>Manage your work</small></span>
          <ArrowRight size={17} />
        </button>
        <button onClick={() => { setCategory("Privacy & security"); setQuery(""); document.getElementById("help-faq-library")?.scrollIntoView({ behavior: "smooth" }); }}>
          <span className="help-quick-icon"><ShieldCheck size={21} /></span>
          <span><strong>Privacy & security</strong><small>Understand your data</small></span>
          <ArrowRight size={17} />
        </button>
      </section>

      <section className="section help-popular-section">
        <div className="help-section-heading">
          <div><span className="eyebrow">QUICK ANSWERS</span><h2>Popular <span className="gradient-text">questions.</span></h2><p>Start with the topics people often need help with.</p></div>
          <span className="help-heading-badge"><Sparkles size={14} /> Helpful starting points</span>
        </div>

        <div className="help-popular-grid">
          {popularFAQs.map((faq, index) => (
            <button className="help-popular-card" key={faq.id} onClick={() => selectFAQ(faq)}>
              <span className="help-popular-number">0{index + 1}</span>
              <span className="help-popular-question">{faq.question}</span>
              <span className="help-popular-category">{faq.category}</span>
              <span className="help-popular-arrow"><ArrowUpRight size={17} /></span>
            </button>
          ))}
        </div>
      </section>

      <section className="section help-faq-section" id="help-faq-library">
        <div className="help-section-heading">
          <div><span className="eyebrow">HELP DOCUMENTATION</span><h2>Browse the <span className="gradient-text">help center.</span></h2><p>Search answers or choose a category to narrow things down.</p></div>
          <span className="help-result-count">{filteredFAQs.length} answers</span>
        </div>

        <div className="help-faq-layout">
          <aside className="help-category-sidebar">
            <h3>Categories</h3>
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "is-active" : ""}
                onClick={() => setCategory(item)}
              >
                <span>{item}</span>
                <span>{item === "All questions" ? faqs.length : faqs.filter((faq) => faq.category === item).length}</span>
              </button>
            ))}
            <div className="help-sidebar-note">
              <MessageCircle size={18} />
              <strong>Still need help?</strong>
              <p>Send a support request and describe what you need.</p>
              <button onClick={() => setSupportOpen(true)}>Contact support <ArrowRight size={14} /></button>
            </div>
          </aside>

          <div className="help-faq-list">
            {filteredFAQs.map((faq) => {
              const isOpen = openItems.includes(faq.id);
              return (
                <article className={`help-faq-item ${isOpen ? "is-open" : ""}`} id={`help-faq-${faq.id}`} key={faq.id}>
                  <button className="help-faq-question" onClick={() => toggleFAQ(faq.id)} aria-expanded={isOpen}>
                    <span className="help-faq-question-mark"><CircleHelp size={17} /></span>
                    <span>{faq.question}</span>
                    <ChevronDown size={19} className="help-faq-chevron" />
                  </button>
                  {isOpen && (
                    <div className="help-faq-answer">
                      <p>{faq.answer}</p>
                      <span className="help-faq-category-tag">{faq.category}</span>
                    </div>
                  )}
                </article>
              );
            })}

            {filteredFAQs.length === 0 && (
              <div className="help-no-results">
                <Search size={26} />
                <h3>No answers found</h3>
                <p>Try another keyword or browse all questions.</p>
                <button className="button button-primary" onClick={() => { setQuery(""); setCategory("All questions"); }}>Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="help-contact-cta">
        <div className="help-contact-orb" />
        <div className="help-contact-icon"><Headphones size={25} /></div>
        <span className="eyebrow">HERE WHEN YOU NEED US</span>
        <h2>Couldn't find <span>your answer?</span></h2>
        <p>Tell us what you are trying to do and what got in your way.</p>
        <button className="button button-primary" onClick={() => setSupportOpen(true)}>
          Contact support <ArrowRight size={17} />
        </button>
        <span className="help-contact-footnote">Support form demo · No message is sent to a server</span>
      </section>

      {supportOpen && (
        <div className="help-modal-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) resetSupport();
        }}>
          <section className="help-support-modal" role="dialog" aria-modal="true" aria-labelledby="help-support-title">
            <button className="help-modal-close" onClick={resetSupport} aria-label="Close support form"><X size={19} /></button>
            {!submitted ? (
              <>
                <span className="eyebrow"><Headphones size={14} /> INFLORO SUPPORT</span>
                <h2 id="help-support-title">Let's work through it.</h2>
                <p className="help-support-intro">Share a few details so your request is clear.</p>
                <form onSubmit={submitSupport} className="help-support-form">
                  <label>Full name<input value={supportName} onChange={(event) => setSupportName(event.target.value)} required placeholder="Your name" /></label>
                  <label>Email address<input type="email" value={supportEmail} onChange={(event) => setSupportEmail(event.target.value)} required placeholder="you@company.com" /></label>
                  <label>What do you need help with?
                    <select value={supportTopic} onChange={(event) => setSupportTopic(event.target.value)}>
                      <option>General question</option>
                      <option>Account & access</option>
                      <option>Creator discovery</option>
                      <option>Campaign workflow</option>
                      <option>Analytics & reporting</option>
                      <option>Privacy & security</option>
                      <option>Report a bug</option>
                    </select>
                  </label>
                  <label>How can we help?<textarea value={supportMessage} onChange={(event) => setSupportMessage(event.target.value)} required minLength={10} rows={4} placeholder="Describe the question or issue..." /></label>
                  <button className="button button-primary help-submit-button" type="submit">Submit request <Send size={16} /></button>
                  <small className="help-form-note">Demo only: this form displays a confirmation but does not send or store your information.</small>
                </form>
              </>
            ) : (
              <div className="help-support-success">
                <div><CheckCircle2 size={30} /></div>
                <span className="eyebrow">REQUEST PREPARED</span>
                <h2 id="help-support-title">Thanks for reaching out.</h2>
                <p>Your support request has been prepared in this demo. No ticket was created and no email was sent.</p>
                <div className="help-support-summary"><strong>{supportTopic}</strong><span>From {supportName}</span><p>{supportMessage}</p></div>
                <button className="button button-primary" onClick={resetSupport}>Back to help center <ArrowRight size={16} /></button>
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
