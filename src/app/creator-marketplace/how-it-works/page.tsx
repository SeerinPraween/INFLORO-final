"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDollarSign,
  FileText,
  Handshake,
  MessageCircle,
  Search,
  Sparkles,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

const workflows = {
  brands: {
    eyebrow: "For brands & agencies",
    title: "From creator search to campaign success.",
    description:
      "Discover the right creators, share a clear brief, manage collaborations, and measure performance in one connected workspace.",
    steps: [
      {
        number: "01",
        title: "Discover your creators",
        description:
          "Explore relevant creator profiles using niche, platform, audience, and campaign-fit signals.",
        icon: Search,
        tag: "Find the right fit",
      },
      {
        number: "02",
        title: "Launch a campaign",
        description:
          "Set your objectives, deliverables, timelines, compensation, and application requirements.",
        icon: FileText,
        tag: "Create your brief",
      },
      {
        number: "03",
        title: "Collaborate with confidence",
        description:
          "Review applications, manage conversations, track deliverables, and keep everyone aligned.",
        icon: Handshake,
        tag: "Keep work moving",
      },
      {
        number: "04",
        title: "Measure what matters",
        description:
          "Bring campaign activity and performance into one view to understand what worked and plan what comes next.",
        icon: Zap,
        tag: "Learn and optimize",
      },
    ],
  },
  creators: {
    eyebrow: "For creators",
    title: "Turn your creativity into collaboration.",
    description:
      "Find opportunities that fit your style, apply with confidence, manage your deliverables, and build lasting brand relationships.",
    steps: [
      {
        number: "01",
        title: "Build your profile",
        description:
          "Showcase your niche, social channels, creative style, portfolio, and the kind of partnerships you want.",
        icon: Users,
        tag: "Show your strengths",
      },
      {
        number: "02",
        title: "Find your opportunities",
        description:
          "Browse brand campaigns, UGC projects, and affiliate opportunities that match your interests.",
        icon: Search,
        tag: "Explore opportunities",
      },
      {
        number: "03",
        title: "Apply and collaborate",
        description:
          "Review campaign briefs, understand deliverables, and stay organized throughout your partnership.",
        icon: MessageCircle,
        tag: "Work together",
      },
      {
        number: "04",
        title: "Grow your portfolio",
        description:
          "Keep track of your collaborations, develop your experience, and discover future opportunities.",
        icon: Wallet,
        tag: "Build momentum",
      },
    ],
  },
};

const faqs = [
  {
    question: "Who can use the INFLORO marketplace?",
    answer:
      "INFLORO is designed for brands, marketing agencies, and creators who want a more organized way to discover and manage collaborations.",
  },
  {
    question: "Can creators discover different types of opportunities?",
    answer:
      "Yes. The marketplace experience includes brand campaigns, UGC projects, and affiliate opportunities. Availability and requirements can vary by opportunity.",
  },
  {
    question: "Does INFLORO guarantee campaign results?",
    answer:
      "No platform can guarantee specific campaign outcomes. INFLORO is designed to help teams organize discovery, communication, deliverables, and performance tracking.",
  },
  {
    question: "Can agencies manage multiple brands?",
    answer:
      "INFLORO's agency-oriented workflows are designed to help teams organize clients, campaigns, creator relationships, and reporting in a connected workspace.",
  },
  {
    question: "How do I get started?",
    answer:
      "Choose the path that fits you. Brands can create an account or book a demo, while creators can explore marketplace opportunities and get started with their profile.",
  },
];

export default function HowItWorksPage() {
  const [role, setRole] = useState<"brands" | "creators">("brands");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const active = workflows[role];

  return (
    <main className="how-page">
      <section className="how-hero">
        <div className="how-orb how-orb-one" />
        <div className="how-orb how-orb-two" />

        <div className="how-hero-inner">
          <div className="how-hero-copy">
            <div className="eyebrow">
              <Sparkles size={15} />
              THE COLLABORATION PLAYBOOK
            </div>

            <h1>
              Better partnerships.
              <br />
              <span className="gradient-text">Less busywork.</span>
            </h1>

            <p>
              Great creator marketing should feel connected from the first
              discovery to the final deliverable. Here&apos;s how INFLORO helps
              everyone work better together.
            </p>

            <div className="how-hero-actions">
              <Link href="/get-started" className="button button-primary">
                Get started <ArrowRight size={17} />
              </Link>
              <Link
                href="/creator-marketplace"
                className="button button-quiet"
              >
                Explore marketplace <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="how-trust-line">
              <span className="how-trust-icon">
                <Check size={15} />
              </span>
              One connected workflow for creator collaborations
            </div>
          </div>

          <div className="how-visual">
            <div className="how-visual-glow" />
            <div className="how-workspace">
              <div className="how-workspace-top">
                <div>
                  <span className="how-mini-label">WORKSPACE OVERVIEW</span>
                  <h3>Campaign journey</h3>
                </div>
                <span className="how-live-pill">
                  <span /> In progress
                </span>
              </div>

              <div className="how-progress-track">
                <span style={{ width: "68%" }} />
              </div>

              <div className="how-progress-caption">
                <span>Campaign progress</span>
                <strong>68%</strong>
              </div>

              <div className="how-journey">
                {[
                  {
                    title: "Creator discovery",
                    detail: "Audience and niche match",
                    icon: Search,
                    done: true,
                  },
                  {
                    title: "Campaign brief",
                    detail: "Deliverables confirmed",
                    icon: FileText,
                    done: true,
                  },
                  {
                    title: "Creator collaboration",
                    detail: "Content in progress",
                    icon: Handshake,
                    done: false,
                  },
                  {
                    title: "Results & reporting",
                    detail: "Ready for review",
                    icon: Zap,
                    done: false,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="how-journey-row" key={item.title}>
                      <div
                        className={`how-journey-icon ${
                          item.done ? "is-done" : ""
                        }`}
                      >
                        {item.done ? <Check size={16} /> : <Icon size={16} />}
                      </div>
                      <div className="how-journey-text">
                        <strong>{item.title}</strong>
                        <span>{item.detail}</span>
                      </div>
                      <BadgeCheck
                        size={17}
                        className={item.done ? "how-check-done" : "how-check"}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="how-workspace-bottom">
                <div className="how-workspace-bottom-icon">
                  <CircleDollarSign size={20} />
                </div>
                <div>
                  <strong>Keep the whole picture in view</strong>
                  <span>People, progress, and performance</span>
                </div>
                <ArrowUpRight size={18} />
              </div>
            </div>

            <div className="how-floating-card how-floating-top">
              <span className="how-floating-icon purple">
                <Sparkles size={17} />
              </span>
              <div>
                <strong>One connected workflow</strong>
                <span>Less switching between tools</span>
              </div>
            </div>

            <div className="how-floating-card how-floating-bottom">
              <span className="how-floating-icon green">
                <Check size={17} />
              </span>
              <div>
                <strong>Everyone stays aligned</strong>
                <span>From brief to delivery</span>
              </div>
            </div>
          </div>
        </div>

        <div className="how-hero-bottom">
          <span>DISCOVER</span>
          <span className="how-hero-line" />
          <span>COLLABORATE</span>
          <span className="how-hero-line" />
          <span>GROW</span>
        </div>
      </section>

      <section className="section how-process-section">
        <div className="how-section-heading">
          <div className="eyebrow">A WORKFLOW THAT FITS YOU</div>
          <h2>
            Two perspectives.
            <br />
            <span className="gradient-text">One better experience.</span>
          </h2>
          <p>
            Whether you&apos;re building a campaign or creating the content,
            start with the workflow made for you.
          </p>
        </div>

        <div className="how-role-switch" aria-label="Choose your workflow">
          <button
            type="button"
            className={role === "brands" ? "active" : ""}
            onClick={() => setRole("brands")}
          >
            <BriefcaseBusiness size={17} />
            I&apos;m a brand or agency
          </button>
          <button
            type="button"
            className={role === "creators" ? "active" : ""}
            onClick={() => setRole("creators")}
          >
            <Users size={17} />
            I&apos;m a creator
          </button>
        </div>

        <div className="how-workflow-heading" key={role}>
          <div>
            <span className="how-workflow-eyebrow">{active.eyebrow}</span>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
          </div>
          <span className="how-workflow-count">04 STEPS</span>
        </div>

        <div className="how-steps-grid" key={`${role}-steps`}>
          {active.steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                className="how-step-card"
                key={step.number}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="how-step-top">
                  <span className="how-step-number">{step.number}</span>
                  <span className="how-step-icon">
                    <Icon size={21} />
                  </span>
                </div>
                <div className="how-step-content">
                  <span className="how-step-tag">{step.tag}</span>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
                {index < active.steps.length - 1 && (
                  <div className="how-step-connector">
                    <ArrowRight size={16} />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="how-workflow-cta">
          <div>
            <strong>
              {role === "brands"
                ? "Ready to build your next campaign?"
                : "Ready to find your next collaboration?"}
            </strong>
            <span>
              {role === "brands"
                ? "Bring your creator workflow into one place."
                : "Explore opportunities that fit your creative style."}
            </span>
          </div>
          <Link
            href={role === "brands" ? "/get-started" : "/creator-marketplace"}
            className="button button-primary"
          >
            {role === "brands" ? "Create your workspace" : "Explore opportunities"}
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="how-benefits-section">
        <div className="section how-benefits-inner">
          <div className="how-benefits-copy">
            <div className="eyebrow">
              <Zap size={14} /> BUILT FOR BETTER COLLABORATION
            </div>
            <h2>
              Spend less time
              <br />
              <span className="gradient-text">chasing the process.</span>
            </h2>
            <p>
              Keep the important details connected so your team can focus on
              relationships, creative work, and better decisions.
            </p>

            <div className="how-benefit-list">
              {[
                "Keep campaign briefs and deliverables organized",
                "Make collaboration status easier to understand",
                "Bring creator relationships into one workspace",
                "Use reporting to inform your next campaign",
              ].map((item) => (
                <div className="how-benefit-item" key={item}>
                  <span>
                    <Check size={15} />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <Link href="/features/campaign-management" className="how-text-link">
              Explore campaign management <ArrowRight size={16} />
            </Link>
          </div>

          <div className="how-benefit-visual">
            <div className="how-benefit-card how-benefit-card-main">
              <div className="how-benefit-card-head">
                <div>
                  <span className="how-mini-label">CAMPAIGN SNAPSHOT</span>
                  <h3>Spring launch</h3>
                </div>
                <span className="how-status-pill">Active</span>
              </div>
              <div className="how-metric-row">
                <div>
                  <span>Creator partners</span>
                  <strong>12</strong>
                </div>
                <div>
                  <span>Deliverables</span>
                  <strong>28</strong>
                </div>
                <div>
                  <span>Completion</span>
                  <strong>76%</strong>
                </div>
              </div>
              <div className="how-deliverable-list">
                {[
                  ["Short-form video", "Approved"],
                  ["Product photography", "In review"],
                  ["Story sequence", "In progress"],
                ].map(([name, status], index) => (
                  <div className="how-deliverable" key={name}>
                    <span className={`how-deliverable-dot dot-${index}`} />
                    <span>{name}</span>
                    <small>{status}</small>
                  </div>
                ))}
              </div>
              <div className="how-mini-chart" aria-label="Illustrative campaign activity chart">
                {[36, 48, 42, 63, 55, 78, 67, 90, 74, 100, 82, 94].map(
                  (height, index) => (
                    <span key={index} style={{ height: `${height}%` }} />
                  ),
                )}
              </div>
              <span className="how-illustrative-note">
                Illustrative dashboard data
              </span>
            </div>

            <div className="how-note-card">
              <div className="how-note-icon">
                <MessageCircle size={19} />
              </div>
              <div>
                <strong>Keep conversations connected</strong>
                <span>Make the next step clear to everyone.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section how-faq-section">
        <div className="how-faq-intro">
          <div className="eyebrow">GOOD TO KNOW</div>
          <h2>
            Questions?
            <br />
            <span className="gradient-text">We&apos;ve got answers.</span>
          </h2>
          <p>
            Still figuring out whether INFLORO fits your workflow? Start here.
          </p>
          <Link href="/book-a-demo" className="how-text-link">
            Talk to our team <ArrowRight size={16} />
          </Link>
        </div>

        <div className="how-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div className={`how-faq-item ${isOpen ? "open" : ""}`} key={faq.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={19} />
                </button>
                {isOpen && <p>{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="bottom-cta how-final-cta">
          <div className="how-cta-decoration" />
          <div className="eyebrow">
            <Sparkles size={14} /> YOUR NEXT COLLABORATION STARTS HERE
          </div>
          <h2>
            Make room for
            <br />
            <span className="gradient-text">better partnerships.</span>
          </h2>
          <p>
            Bring discovery, collaboration, and campaign management into a
            workflow that works for you.
          </p>
          <div className="how-hero-actions">
            <Link href="/get-started" className="button button-primary">
              Get started <ArrowRight size={17} />
            </Link>
            <Link href="/book-a-demo" className="button button-quiet">
              Book a demo <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}