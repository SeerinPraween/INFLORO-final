
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
  Users,
} from "lucide-react";

const topics = [
  "General inquiry",
  "Brand partnerships",
  "Agency solutions",
  "Creator opportunities",
  "Enterprise solutions",
  "Product support",
];

const faqs = [
  {
    question: "How can I request a product demo?",
    answer:
      "Visit our Book a Demo page and share your work email, organization, and requirements. The form is a frontend demonstration until it is connected to a real submission service.",
  },
  {
    question: "I'm a creator. Where should I start?",
    answer:
      "Explore the creator marketplace to browse brand campaigns, UGC projects, and affiliate opportunities, or visit the creator solutions page to learn about the experience.",
  },
  {
    question: "Can an agency contact INFLORO about multiple clients?",
    answer:
      "Yes. Select Agency solutions in the inquiry form and describe your client portfolio, team workflow, and campaign management needs.",
  },
  {
    question: "How do I get technical support?",
    answer:
      "Select Product support in the form and provide a description of the issue. A real support request will require the form to be connected to a backend or ticketing service.",
  },
];

export default function ContactPage() {
  const [topic, setTopic] = useState("General inquiry");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false,
  });

  function updateField(
    field: keyof typeof form,
    value: string | boolean,
  ) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.consent) return;

    // Frontend demonstration only. Connect a backend/API before production.
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-orb contact-orb-one" />
        <div className="contact-hero-orb contact-orb-two" />

        <div className="section contact-hero-inner">
          <div className="contact-hero-copy">
            <div className="eyebrow">
              <Sparkles size={15} />
              LET'S START A CONVERSATION
            </div>

            <h1>
              Let's make
              <br />
              <span className="gradient-text">something happen.</span>
            </h1>

            <p>
              Have a question, exploring a partnership, or looking for a better
              way to manage creator marketing? Tell us what you're working on.
            </p>

            <div className="contact-hero-points">
              <div>
                <span><MessageCircle size={18} /></span>
                <div>
                  <strong>Tell us what you need</strong>
                  <small>Share your goals and questions.</small>
                </div>
              </div>
              <div>
                <span><Users size={18} /></span>
                <div>
                  <strong>Find the right direction</strong>
                  <small>Choose the inquiry type that fits.</small>
                </div>
              </div>
              <div>
                <span><Building2 size={18} /></span>
                <div>
                  <strong>Explore INFLORO</strong>
                  <small>Discover the right solution for you.</small>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <div>
                <span className="contact-form-kicker">CONTACT INFLORO</span>
                <h2>How can we help?</h2>
                <p>Fill in the details below to prepare your inquiry.</p>
              </div>
              <span className="contact-form-icon">
                <Send size={21} />
              </span>
            </div>

            {submitted ? (
              <div className="contact-success" role="status">
                <span className="contact-success-icon">
                  <CheckCircle2 size={30} />
                </span>
                <h3>Your inquiry is ready!</h3>
                <p>
                  The form interaction worked, but your message has not been
                  sent to a server. Connect an API or email service to enable
                  real submissions.
                </p>
                <div className="contact-success-summary">
                  <span>Topic</span>
                  <strong>{topic}</strong>
                  <span>Contact email</span>
                  <strong>{form.email}</strong>
                </div>
                <button
                  type="button"
                  className="button button-primary contact-submit-button"
                  onClick={() => setSubmitted(false)}
                >
                  Edit inquiry <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <label>
                    Full name <span>*</span>
                    <input
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(event) =>
                        updateField("name", event.target.value)
                      }
                    />
                  </label>
                  <label>
                    Work email <span>*</span>
                    <input
                      required
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                    />
                  </label>
                </div>

                <label>
                  Company or organization
                  <input
                    autoComplete="organization"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={(event) =>
                      updateField("company", event.target.value)
                    }
                  />
                </label>

                <label>
                  What can we help with? <span>*</span>
                  <span className="contact-select-wrap">
                    <select
                      required
                      value={topic}
                      onChange={(event) => {
                        setTopic(event.target.value);
                        setSubmitted(false);
                      }}
                    >
                      {topics.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={17} />
                  </span>
                </label>

                <label>
                  Tell us a little more <span>*</span>
                  <textarea
                    required
                    rows={4}
                    maxLength={2000}
                    placeholder="Share your goals, questions, or what you're hoping to build..."
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                  />
                  <span className="contact-character-count">
                    {form.message.length}/2000 characters
                  </span>
                </label>

                <label className="contact-consent">
                  <input
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={(event) =>
                      updateField("consent", event.target.checked)
                    }
                  />
                  <span>
                    I agree to the{" "}
                    <Link href="/privacy-policy">Privacy Policy</Link> and
                    consent to the handling of my information for this inquiry.
                  </span>
                </label>

                <button
                  type="submit"
                  className="button button-primary contact-submit-button"
                >
                  Prepare inquiry <ArrowRight size={17} />
                </button>

                <p className="contact-form-disclaimer">
                  Demo form only. No information is transmitted or stored by
                  this page.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section contact-options-section">
        <div className="contact-section-heading">
          <div className="eyebrow">FIND YOUR WAY</div>
          <h2>
            The right place
            <br />
            <span className="gradient-text">to get started.</span>
          </h2>
        </div>

        <div className="contact-options-grid">
          <Link href="/book-a-demo" className="contact-option-card">
            <span className="contact-option-icon">
              <Building2 size={22} />
            </span>
            <span className="contact-option-label">FOR TEAMS</span>
            <h3>Book a product demo</h3>
            <p>
              Explore creator marketing workflows for your brand, agency, or
              enterprise team.
            </p>
            <span className="contact-option-link">
              Book a demo <ArrowRight size={16} />
            </span>
          </Link>

          <Link href="/creator-marketplace" className="contact-option-card">
            <span className="contact-option-icon">
              <Users size={22} />
            </span>
            <span className="contact-option-label">FOR CREATORS</span>
            <h3>Explore opportunities</h3>
            <p>
              Discover brand campaigns, UGC projects, and affiliate
              opportunities in the marketplace.
            </p>
            <span className="contact-option-link">
              Visit marketplace <ArrowRight size={16} />
            </span>
          </Link>

          <Link href="/resources/help-center" className="contact-option-card">
            <span className="contact-option-icon">
              <MessageCircle size={22} />
            </span>
            <span className="contact-option-label">NEED AN ANSWER?</span>
            <h3>Visit the help center</h3>
            <p>
              Browse common questions and learn more about INFLORO's intended
              workflows.
            </p>
            <span className="contact-option-link">
              Explore help center <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>

      <section className="contact-details-section">
        <div className="section contact-details-inner">
          <div className="contact-details-copy">
            <div className="eyebrow">A CLEAR PLACE TO BEGIN</div>
            <h2>
              Every good partnership
              <br />
              starts with a <span className="gradient-text">conversation.</span>
            </h2>
            <p>
              Share your requirements, and use the right channel to explore
              what comes next.
            </p>
          </div>

          <div className="contact-detail-cards">
            <div className="contact-detail-card">
              <span><Mail size={19} /></span>
              <div>
                <strong>Email inquiries</strong>
                <p>
                  Use the contact form to prepare your inquiry for the INFLORO
                  team.
                </p>
              </div>
            </div>
            <div className="contact-detail-card">
              <span><Clock3 size={19} /></span>
              <div>
                <strong>Response expectations</strong>
                <p>
                  A response time can be published here once the team establishes
                  an official support process.
                </p>
              </div>
            </div>
            <div className="contact-detail-card">
              <span><MapPin size={19} /></span>
              <div>
                <strong>Company information</strong>
                <p>
                  Official business address and contact details can be added
                  when confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-faq-section">
        <div className="contact-faq-intro">
          <div className="eyebrow">QUICK ANSWERS</div>
          <h2>
            Before you
            <br />
            <span className="gradient-text">reach out.</span>
          </h2>
          <p>Here are a few helpful starting points.</p>
        </div>

        <div className="contact-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                className={`contact-faq-item ${isOpen ? "open" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={18} />
                </button>
                {isOpen && <p>{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="bottom-cta contact-final-cta">
          <div className="eyebrow">
            <Sparkles size={14} /> YOUR NEXT STEP STARTS HERE
          </div>
          <h2>
            Have an idea?
            <br />
            <span className="gradient-text">Let's talk about it.</span>
          </h2>
          <p>
            Explore the platform or book a demo to discuss your creator
            marketing workflow.
          </p>
          <div className="contact-final-actions">
            <Link href="/book-a-demo" className="button button-primary">
              Book a demo <ArrowRight size={17} />
            </Link>
            <Link href="/about" className="button button-quiet">
              About INFLORO <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
