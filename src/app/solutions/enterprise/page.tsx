
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  CircleCheck,
  Globe2,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    icon: Building2,
    title: "Multi-brand management",
    description:
      "Organize multiple brands, business units, and creator programs within a structured workspace.",
    tag: "ONE CONNECTED VIEW",
  },
  {
    icon: Users,
    title: "Team collaboration",
    description:
      "Keep campaign owners, reviewers, and collaborators aligned with clear responsibilities.",
    tag: "CLEAR OWNERSHIP",
  },
  {
    icon: ShieldCheck,
    title: "Governance & approvals",
    description:
      "Create more consistent workflows for reviewing campaign briefs, content, and deliverables.",
    tag: "CONTROLLED WORKFLOWS",
  },
  {
    icon: BarChart3,
    title: "Performance reporting",
    description:
      "Bring campaign activity and performance indicators together to support better decisions.",
    tag: "BETTER VISIBILITY",
  },
  {
    icon: Network,
    title: "Connected creator operations",
    description:
      "Manage discovery, relationships, campaign execution, and ongoing creator partnerships.",
    tag: "CONNECTED OPERATIONS",
  },
  {
    icon: LockKeyhole,
    title: "Structured access",
    description:
      "Design your team workflows around appropriate access, ownership, and review responsibilities.",
    tag: "ORGANIZED ACCESS",
  },
];

const faqs = [
  {
    question: "Who is INFLORO Enterprise designed for?",
    answer:
      "It is designed for larger brands, marketing departments, and agencies coordinating multiple teams, clients, or creator marketing programs.",
  },
  {
    question: "Can we organize multiple brands and campaigns?",
    answer:
      "The enterprise experience is designed around organizing work across multiple brands and campaigns. Exact workspace limits and configuration depend on the product plan.",
  },
  {
    question: "Can different team members have different responsibilities?",
    answer:
      "The workflow concept supports separating campaign ownership, collaboration, and review responsibilities. Specific role permissions should be confirmed against the implemented product configuration.",
  },
  {
    question: "Does INFLORO integrate with our existing tools?",
    answer:
      "INFLORO includes an integrations experience. Available connectors and supported synchronization depend on the integrations actually implemented and enabled in your workspace.",
  },
  {
    question: "How can our organization evaluate INFLORO?",
    answer:
      "Book a demo to discuss your team's workflow, number of brands, campaign requirements, reporting needs, and integration priorities.",
  },
];

export default function EnterprisePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="enterprise-page">
      <section className="enterprise-hero">
        <div className="enterprise-hero-glow" />
        <div className="section enterprise-hero-grid">
          <div className="enterprise-hero-copy">
            <div className="eyebrow">
              <Sparkles size={15} />
              INFLORO FOR ENTERPRISE
            </div>

            <h1>
              Creator marketing,
              <br />
              <span className="gradient-text">built to scale.</span>
            </h1>

            <p>
              Bring brands, teams, creator relationships, and campaign
              operations together in a more connected workspace. Built for
              organizations that need a clearer view of the whole picture.
            </p>

            <div className="enterprise-hero-actions">
              <Link href="/book-a-demo" className="button button-primary">
                Talk to our team <ArrowRight size={17} />
              </Link>
              <Link
                href="/features/analytics"
                className="button button-quiet"
              >
                Explore analytics <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="enterprise-trust-points">
              <span><Check size={14} /> Multi-brand workflows</span>
              <span><Check size={14} /> Team alignment</span>
              <span><Check size={14} /> Campaign visibility</span>
            </div>
          </div>

          <div className="enterprise-dashboard-wrap">
            <div className="enterprise-dashboard">
              <div className="enterprise-dashboard-head">
                <div>
                  <span className="enterprise-kicker">ORGANIZATION OVERVIEW</span>
                  <h3>Creator operations</h3>
                </div>
                <span className="enterprise-dashboard-badge">
                  <span /> Workspace
                </span>
              </div>

              <div className="enterprise-brand-grid">
                <div className="enterprise-brand-card">
                  <span className="enterprise-brand-symbol symbol-purple">A</span>
                  <div>
                    <strong>Brand Alpha</strong>
                    <span>Campaign operations</span>
                  </div>
                  <span className="enterprise-brand-status">Active</span>
                </div>
                <div className="enterprise-brand-card">
                  <span className="enterprise-brand-symbol symbol-blue">B</span>
                  <div>
                    <strong>Brand Beta</strong>
                    <span>Creator partnerships</span>
                  </div>
                  <span className="enterprise-brand-status">Active</span>
                </div>
                <div className="enterprise-brand-card">
                  <span className="enterprise-brand-symbol symbol-orange">C</span>
                  <div>
                    <strong>Brand Gamma</strong>
                    <span>Content production</span>
                  </div>
                  <span className="enterprise-brand-status">Review</span>
                </div>
              </div>

              <div className="enterprise-dashboard-divider" />

              <div className="enterprise-overview-label">
                <span>PROGRAM SNAPSHOT</span>
                <span>Illustrative data</span>
              </div>

              <div className="enterprise-kpis">
                <div>
                  <span>Campaigns</span>
                  <strong>24</strong>
                  <small>Across programs</small>
                </div>
                <div>
                  <span>Creators</span>
                  <strong>186</strong>
                  <small>In workspace</small>
                </div>
                <div>
                  <span>In review</span>
                  <strong>08</strong>
                  <small>Needs attention</small>
                </div>
              </div>

              <div className="enterprise-workflow">
                <div className="enterprise-workflow-icon">
                  <Workflow size={19} />
                </div>
                <div>
                  <strong>Campaign review workflow</strong>
                  <span>Brief → Review → Delivery</span>
                </div>
                <CircleCheck size={19} className="enterprise-workflow-check" />
              </div>
            </div>

            <div className="enterprise-floating enterprise-floating-top">
              <span className="enterprise-floating-icon">
                <Layers3 size={18} />
              </span>
              <div>
                <strong>Multiple brands</strong>
                <span>One organized workspace</span>
              </div>
            </div>

            <div className="enterprise-floating enterprise-floating-bottom">
              <span className="enterprise-floating-icon green">
                <ShieldCheck size={18} />
              </span>
              <div>
                <strong>Clear ownership</strong>
                <span>More structured workflows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section enterprise-capabilities">
        <div className="enterprise-section-heading">
          <div className="eyebrow">DESIGNED FOR COMPLEXITY</div>
          <h2>
            One platform for
            <br />
            <span className="gradient-text">the bigger picture.</span>
          </h2>
          <p>
            Connect the moving parts of creator marketing without losing sight
            of the people, processes, and performance behind every campaign.
          </p>
        </div>

        <div className="enterprise-capability-grid">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className="enterprise-capability-card"
                key={item.title}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="enterprise-capability-top">
                  <span className="enterprise-capability-icon">
                    <Icon size={22} />
                  </span>
                  <span className="enterprise-capability-number">
                    0{index + 1}
                  </span>
                </div>
                <span className="enterprise-capability-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link
                  href={
                    index === 3
                      ? "/features/analytics"
                      : index === 4
                        ? "/features/campaign-management"
                        : "/book-a-demo"
                  }
                  aria-label={`Learn more about ${item.title}`}
                >
                  Explore capability <ArrowRight size={15} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="enterprise-operating-section">
        <div className="section enterprise-operating-grid">
          <div className="enterprise-operating-copy">
            <div className="eyebrow">
              <Globe2 size={14} /> CONNECT YOUR OPERATING MODEL
            </div>
            <h2>
              From fragmented tasks
              <br />
              to <span className="gradient-text">connected work.</span>
            </h2>
            <p>
              Give your teams a common way to move creator programs forward,
              while keeping campaign-level work organized and easier to review.
            </p>

            <div className="enterprise-operating-list">
              {[
                ["01", "Plan", "Set up campaign goals, briefs, and ownership."],
                ["02", "Coordinate", "Align teams, creators, and deliverables."],
                ["03", "Review", "Track approvals and outstanding work."],
                ["04", "Learn", "Use campaign insights to inform next steps."],
              ].map(([number, title, description]) => (
                <div className="enterprise-operating-step" key={number}>
                  <span className="enterprise-operating-number">{number}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="enterprise-operating-visual">
            <div className="enterprise-visual-orbit orbit-one" />
            <div className="enterprise-visual-orbit orbit-two" />

            <div className="enterprise-visual-center">
              <span><Network size={29} /></span>
              <strong>Creator operations</strong>
              <small>One connected workflow</small>
            </div>

            <div className="enterprise-node node-one">
              <span><Building2 size={19} /></span>
              <strong>Brands</strong>
            </div>
            <div className="enterprise-node node-two">
              <span><Users size={19} /></span>
              <strong>Teams</strong>
            </div>
            <div className="enterprise-node node-three">
              <span><Workflow size={19} /></span>
              <strong>Campaigns</strong>
            </div>
            <div className="enterprise-node node-four">
              <span><BarChart3 size={19} /></span>
              <strong>Insights</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section enterprise-faq-section">
        <div className="enterprise-faq-intro">
          <div className="eyebrow">ENTERPRISE FAQ</div>
          <h2>
            The details
            <br />
            <span className="gradient-text">that matter.</span>
          </h2>
          <p>
            Have specific requirements? Let&apos;s talk about your operating
            model and what your team needs.
          </p>
          <Link href="/book-a-demo" className="button button-primary">
            Book an enterprise demo <ArrowRight size={16} />
          </Link>
        </div>

        <div className="enterprise-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                className={`enterprise-faq-item ${isOpen ? "open" : ""}`}
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
        <div className="bottom-cta enterprise-final-cta">
          <div className="eyebrow">
            <Sparkles size={14} /> BUILT FOR YOUR NEXT STAGE
          </div>
          <h2>
            Make creator marketing
            <br />
            <span className="gradient-text">work at your scale.</span>
          </h2>
          <p>
            Tell us about your brands, teams, and campaign operations. Let&apos;s
            explore a workflow that fits your organization.
          </p>
          <div className="enterprise-hero-actions">
            <Link href="/book-a-demo" className="button button-primary">
              Talk to our team <ArrowRight size={17} />
            </Link>
            <Link href="/solutions/brands" className="button button-quiet">
              Explore brand solutions <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
