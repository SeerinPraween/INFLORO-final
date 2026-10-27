
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Check,
  CircleDollarSign,
  Instagram,
  Search,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Search,
    title: "Find creators who fit your brand",
    description:
      "Discover creators by niche, audience, platform, engagement, and campaign goals. Build a shortlist around relevance, not just follower count.",
    tags: ["Audience fit", "Creator discovery", "Shortlists"],
  },
  {
    number: "02",
    icon: Workflow,
    title: "Run every collaboration in one place",
    description:
      "Keep outreach, creator conversations, deliverables, campaign milestones, and deal statuses organized in a shared workspace.",
    tags: ["Creator CRM", "Deal pipeline", "Campaign tracking"],
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Connect activity to outcomes",
    description:
      "Bring campaign reach, engagement, conversions, and creator performance into a clearer reporting workflow.",
    tags: ["Campaign analytics", "ROI tracking", "Reports"],
  },
];

const workflowSteps = [
  { number: "01", title: "Discover", detail: "Find creators aligned with your audience and objectives." },
  { number: "02", title: "Collaborate", detail: "Coordinate briefs, communication, and deliverables." },
  { number: "03", title: "Activate", detail: "Launch campaigns with clearer ownership and timelines." },
  { number: "04", title: "Optimize", detail: "Review performance and learn what to improve next." },
];

const faqs = [
  {
    question: "Is INFLORO suitable for small brands?",
    answer:
      "Yes. The workflow is designed to help teams of different sizes organize creator discovery, collaboration, and campaign reporting. The best plan depends on your team's requirements.",
  },
  {
    question: "Can we manage multiple campaigns?",
    answer:
      "The campaign workflow is designed around multiple campaigns, with separate campaign details, creator relationships, deliverables, and reporting views.",
  },
  {
    question: "Can we track creator performance?",
    answer:
      "The analytics experience includes example views for reach, engagement, conversions, and creator comparisons. Live metrics depend on available integrations and connected data sources.",
  },
  {
    question: "How do we get started?",
    answer:
      "You can explore the product, review the pricing page, or book a demo to discuss your creator marketing workflow and requirements.",
  },
];

export default function BrandsSolutionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Navbar />

      <main className="brands-solution-page">
        <section className="brands-hero">
          <div className="brands-hero-inner">
            <div className="brands-hero-copy">
              <div className="eyebrow">
                <Sparkles size={15} /> INFLUENCER MARKETING FOR BRANDS
              </div>

              <h1>
                Make every creator
                <br />
                collaboration <span className="gradient-text">count.</span>
              </h1>

              <p>
                Discover the right voices, build meaningful partnerships, and
                turn creator marketing into a more organized, measurable growth
                channel.
              </p>

              <div className="brands-hero-actions">
                <a className="button button-primary" href="/book-a-demo">
                  Book a demo <ArrowRight size={16} />
                </a>
                <a className="button button-quiet" href="/pricing">
                  Explore pricing <ArrowDownRight size={16} />
                </a>
              </div>

              <div className="brands-trust-row">
                <span><Check size={14} /> One connected workflow</span>
                <span><Check size={14} /> Creator-first collaboration</span>
                <span><Check size={14} /> Performance visibility</span>
              </div>
            </div>

            <div className="brands-hero-visual">
              <div className="brands-floating-label brands-label-top">
                <span className="brands-label-icon"><Target size={17} /></span>
                <span><strong>Audience match</strong><small>Find the right fit</small></span>
                <BadgeCheck size={18} className="brands-check" />
              </div>

              <div className="brands-dashboard">
                <div className="brands-dashboard-header">
                  <div>
                    <span className="brands-mini-eyebrow">CAMPAIGN OVERVIEW</span>
                    <h3>Summer collection</h3>
                  </div>
                  <span className="brands-status"><i /> Active</span>
                </div>

                <div className="brands-dashboard-metrics">
                  <div>
                    <span>Total reach</span>
                    <strong>824.6K</strong>
                    <small><ArrowUpRight size={13} /> 18.4%</small>
                  </div>
                  <div>
                    <span>Engagement</span>
                    <strong>7.8%</strong>
                    <small><ArrowUpRight size={13} /> 12.2%</small>
                  </div>
                </div>

                <div className="brands-chart-title">
                  <strong>Campaign momentum</strong>
                  <span>Sample data</span>
                </div>

                <div className="brands-mini-chart">
                  {[34, 47, 40, 62, 53, 78, 68, 91, 74, 100, 83, 94].map(
                    (height, index) => (
                      <span
                        key={index}
                        style={{
                          height: `${height}%`,
                          animationDelay: `${index * 45}ms`,
                        }}
                      />
                    )
                  )}
                </div>

                <div className="brands-dashboard-footer">
                  <div className="brands-avatar-stack">
                    <span>AM</span><span>RS</span><span>MK</span><span>+8</span>
                  </div>
                  <span>11 creators in this campaign</span>
                </div>
              </div>

              <div className="brands-floating-label brands-label-bottom">
                <span className="brands-label-icon brands-label-green">
                  <CircleDollarSign size={18} />
                </span>
                <span><strong>Track outcomes</strong><small>Measure campaign impact</small></span>
                <span className="brands-trend">↗</span>
              </div>

              <div className="brands-visual-spark brands-spark-a">✳</div>
              <div className="brands-visual-spark brands-spark-b">✦</div>
            </div>
          </div>
        </section>

        <section className="brands-proof-strip">
          <div><Users size={19} /><span>Creator relationships</span></div>
          <div><Workflow size={19} /><span>Connected campaign workflows</span></div>
          <div><BarChart3 size={19} /><span>Performance visibility</span></div>
          <div><Zap size={19} /><span>Smarter execution</span></div>
        </section>

        <section className="brands-benefits section">
          <div className="brands-section-heading">
            <div className="eyebrow">FROM PLANNING TO PERFORMANCE</div>
            <h2>
              Creator marketing,
              <br />
              <span className="gradient-text">without the scattered workflow.</span>
            </h2>
            <p>
              Replace disconnected spreadsheets and scattered conversations
              with a more structured way to manage creator partnerships.
            </p>
          </div>

          <div className="brands-benefit-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article className="brands-benefit-card" key={benefit.number}>
                  <div className="brands-benefit-top">
                    <span className="brands-benefit-icon"><Icon size={22} /></span>
                    <span className="brands-benefit-number">{benefit.number}</span>
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                  <div className="brands-benefit-tags">
                    {benefit.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="brands-workflow-section">
          <div className="brands-workflow-inner">
            <div className="brands-section-heading">
              <div className="eyebrow">A CLEARER WAY TO COLLABORATE</div>
              <h2>
                From first search
                <br />
                <span className="gradient-text">to measurable impact.</span>
              </h2>
              <p>
                Give your team a repeatable workflow for every creator campaign,
                from discovery through reporting.
              </p>
            </div>

            <div className="brands-workflow-grid">
              {workflowSteps.map((step, index) => (
                <article className="brands-workflow-step" key={step.number}>
                  <div className="brands-workflow-number">{step.number}</div>
                  {index < workflowSteps.length - 1 && (
                    <div className="brands-workflow-connector">
                      <ArrowRight size={17} />
                    </div>
                  )}
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="brands-faq-section section">
          <div className="brands-faq-layout">
            <div className="brands-section-heading">
              <div className="eyebrow">YOUR QUESTIONS, ANSWERED</div>
              <h2>
                Ready to make
                <br />
                <span className="gradient-text">creator marketing clearer?</span>
              </h2>
              <p>
                Learn how INFLORO can fit into your brand's creator marketing
                workflow.
              </p>
              <a className="button button-primary" href="/book-a-demo">
                Talk to our team <ArrowRight size={16} />
              </a>
            </div>

            <div className="brands-faq-list">
              {faqs.map((faq, index) => (
                <article className={`brands-faq-item ${openFaq === index ? "is-open" : ""}`} key={faq.question}>
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span>{faq.question}</span>
                    <span className="brands-faq-plus">{openFaq === index ? "−" : "+"}</span>
                  </button>
                  {openFaq === index && <p>{faq.answer}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="brands-final-cta">
          <div className="brands-final-cta-glow" />
          <div className="eyebrow">BUILD BETTER CREATOR PARTNERSHIPS</div>
          <h2>
            Your next great campaign
            <br />
            <span>starts with the right workflow.</span>
          </h2>
          <p>Bring discovery, collaboration, and performance into one place.</p>
          <div className="brands-hero-actions">
            <a className="button button-primary" href="/book-a-demo">
              Book a demo <ArrowRight size={16} />
            </a>
            <a className="button button-quiet" href="/get-started">
              Get started <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
