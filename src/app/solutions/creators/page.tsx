
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clapperboard,
  Heart,
  Instagram,
  MessageCircle,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
  Youtube,
} from "lucide-react";

const opportunityTypes = [
  {
    number: "01",
    icon: BriefcaseBusiness,
    title: "Brand campaigns",
    description:
      "Partner with brands on sponsored campaigns that align with your audience, niche, and creative style.",
    detail: "Sponsored collaborations",
    href: "/creator-marketplace/brand-campaigns",
  },
  {
    number: "02",
    icon: Clapperboard,
    title: "UGC projects",
    description:
      "Create authentic product videos, photography, testimonials, and other content for brands.",
    detail: "Creative projects",
    href: "/creator-marketplace/ugc-projects",
  },
  {
    number: "03",
    icon: CircleDollarSign,
    title: "Affiliate opportunities",
    description:
      "Explore commission-based partnerships and discover ways to connect content with product recommendations.",
    detail: "Commission-based offers",
    href: "/creator-marketplace/affiliate-opportunities",
  },
];

const creatorSteps = [
  {
    number: "01",
    title: "Showcase your work",
    description:
      "Build a creator profile that highlights your niche, channels, portfolio, and creative strengths.",
  },
  {
    number: "02",
    title: "Discover opportunities",
    description:
      "Browse campaigns and projects to find partnerships that fit your interests and availability.",
  },
  {
    number: "03",
    title: "Collaborate with brands",
    description:
      "Review briefs, understand deliverables, and keep the important details organized.",
  },
  {
    number: "04",
    title: "Grow your experience",
    description:
      "Build your portfolio, strengthen brand relationships, and learn from every collaboration.",
  },
];

const faqs = [
  {
    question: "Do I need a large audience to find opportunities?",
    answer:
      "Not every collaboration depends on audience size alone. Brands may consider your niche, creative quality, audience relevance, platform, and the requirements of each opportunity.",
  },
  {
    question: "What types of creator opportunities can I explore?",
    answer:
      "The INFLORO marketplace includes brand campaigns, user-generated content (UGC) projects, and affiliate opportunities. Each listing may have its own eligibility criteria and deliverables.",
  },
  {
    question: "Can I apply to more than one campaign?",
    answer:
      "You can explore opportunities and review their individual requirements. Any application limits or eligibility rules depend on the marketplace's implemented functionality.",
  },
  {
    question: "How do I get paid for collaborations?",
    answer:
      "Compensation terms should be outlined in each opportunity's brief. Depending on the collaboration, compensation may be a fixed fee, product-based arrangement, or affiliate commission.",
  },
  {
    question: "Does INFLORO guarantee brand deals?",
    answer:
      "No. Discoverability and applications do not guarantee selection. Brands make their own decisions based on their campaign requirements and creator fit.",
  },
];

export default function CreatorSolutionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeType, setActiveType] = useState("all");

  return (
    <main className="creator-solutions-page">
      <section className="creator-solutions-hero">
        <div className="creator-solutions-orb orb-left" />
        <div className="creator-solutions-orb orb-right" />

        <div className="section creator-solutions-hero-grid">
          <div className="creator-solutions-copy">
            <div className="eyebrow">
              <Sparkles size={15} />
              MADE FOR CREATORS
            </div>

            <h1>
              Your creativity.
              <br />
              <span className="gradient-text">Your next opportunity.</span>
            </h1>

            <p>
              Find brand campaigns, explore UGC projects, and discover
              affiliate opportunities. Bring your creative work and partnership
              goals together in one place.
            </p>

            <div className="creator-solutions-actions">
              <Link href="/get-started" className="button button-primary">
                Get started <ArrowRight size={17} />
              </Link>
              <Link
                href="/creator-marketplace"
                className="button button-quiet"
              >
                Explore opportunities <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="creator-solutions-proof">
              <span className="creator-proof-icon">
                <Check size={15} />
              </span>
              <span>Discover. Create. Collaborate. Grow.</span>
            </div>
          </div>

          <div className="creator-solutions-visual">
            <div className="creator-profile-card">
              <div className="creator-profile-cover">
                <span className="creator-profile-spark">
                  <Sparkles size={18} />
                </span>
                <div className="creator-cover-orbit cover-orbit-one" />
                <div className="creator-cover-orbit cover-orbit-two" />
                <span className="creator-cover-letter">C</span>
              </div>

              <div className="creator-profile-body">
                <div className="creator-profile-avatar">
                  <Users size={25} />
                </div>
                <div className="creator-profile-name-row">
                  <div>
                    <h3>Your creator profile</h3>
                    <span>Build your creative identity</span>
                  </div>
                  <BadgeCheck size={20} className="creator-profile-badge" />
                </div>

                <div className="creator-profile-tags">
                  <span>Lifestyle</span>
                  <span>Beauty</span>
                  <span>UGC</span>
                </div>

                <div className="creator-profile-divider" />

                <div className="creator-profile-socials">
                  <div>
                    <Instagram size={17} />
                    <span>Instagram</span>
                  </div>
                  <div>
                    <Youtube size={17} />
                    <span>YouTube</span>
                  </div>
                  <div>
                    <Clapperboard size={17} />
                    <span>Video</span>
                  </div>
                </div>

                <div className="creator-profile-bottom">
                  <span className="creator-profile-status">
                    <span /> Ready to explore
                  </span>
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </div>

            <div className="creator-float-card creator-float-one">
              <span className="creator-float-icon purple">
                <Heart size={18} />
              </span>
              <div>
                <strong>Find your fit</strong>
                <span>Opportunities for your niche</span>
              </div>
            </div>

            <div className="creator-float-card creator-float-two">
              <span className="creator-float-icon green">
                <TrendingUp size={18} />
              </span>
              <div>
                <strong>Keep growing</strong>
                <span>Build your portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section creator-opportunities-section">
        <div className="creator-section-heading">
          <div className="eyebrow">MORE WAYS TO COLLABORATE</div>
          <h2>
            Find work that fits
            <br />
            <span className="gradient-text">your creative style.</span>
          </h2>
          <p>
            Explore different kinds of partnerships and choose the opportunities
            that work for your goals.
          </p>
        </div>

        <div className="creator-opportunity-filter">
          {[
            { value: "all", label: "All opportunities" },
            { value: "campaigns", label: "Brand campaigns" },
            { value: "ugc", label: "UGC projects" },
            { value: "affiliate", label: "Affiliate" },
          ].map((item) => (
            <button
              type="button"
              key={item.value}
              className={activeType === item.value ? "active" : ""}
              onClick={() => setActiveType(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="creator-opportunity-grid">
          {opportunityTypes
            .filter((item) => {
              if (activeType === "all") return true;
              if (activeType === "campaigns") return item.number === "01";
              if (activeType === "ugc") return item.number === "02";
              return item.number === "03";
            })
            .map((item) => {
              const Icon = item.icon;

              return (
                <article className="creator-opportunity-card" key={item.number}>
                  <div className="creator-opportunity-top">
                    <span className="creator-opportunity-icon">
                      <Icon size={23} />
                    </span>
                    <span className="creator-opportunity-number">
                      {item.number}
                    </span>
                  </div>
                  <span className="creator-opportunity-detail">
                    {item.detail}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href={item.href}>
                    Explore opportunities <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
        </div>
      </section>

      <section className="creator-steps-section">
        <div className="section creator-steps-grid">
          <div className="creator-steps-copy">
            <div className="eyebrow">
              <Sparkles size={14} /> YOUR JOURNEY
            </div>
            <h2>
              Make your next
              <br />
              <span className="gradient-text">move with confidence.</span>
            </h2>
            <p>
              A clear path from presenting your work to discovering and
              managing collaborations.
            </p>
            <Link href="/creator-marketplace/how-it-works" className="button button-primary">
              See how it works <ArrowRight size={16} />
            </Link>
          </div>

          <div className="creator-steps-list">
            {creatorSteps.map((step, index) => (
              <article className="creator-journey-step" key={step.number}>
                <div className="creator-journey-number">{step.number}</div>
                <div className="creator-journey-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < creatorSteps.length - 1 && (
                  <div className="creator-journey-line" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section creator-benefits-section">
        <div className="creator-section-heading">
          <div className="eyebrow">CREATOR-FIRST WORKFLOWS</div>
          <h2>
            More clarity.
            <br />
            <span className="gradient-text">More room to create.</span>
          </h2>
          <p>
            Spend less time juggling campaign details and more time doing the
            creative work you care about.
          </p>
        </div>

        <div className="creator-benefits-grid">
          <article className="creator-benefit-card">
            <span><Search size={21} /></span>
            <h3>Discover relevant work</h3>
            <p>
              Explore opportunities by category, platform, format, and other
              available listing details.
            </p>
          </article>
          <article className="creator-benefit-card">
            <span><MessageCircle size={21} /></span>
            <h3>Understand the brief</h3>
            <p>
              Review expectations, deliverables, and collaboration details
              before moving forward.
            </p>
          </article>
          <article className="creator-benefit-card">
            <span><Wallet size={21} /></span>
            <h3>Know the compensation</h3>
            <p>
              Compare stated fees, product arrangements, or commission terms
              when they are provided.
            </p>
          </article>
          <article className="creator-benefit-card">
            <span><TrendingUp size={21} /></span>
            <h3>Build your experience</h3>
            <p>
              Keep developing your portfolio and professional relationships
              through meaningful projects.
            </p>
          </article>
        </div>
      </section>

      <section className="section creator-faq-section">
        <div className="creator-faq-intro">
          <div className="eyebrow">CREATOR FAQ</div>
          <h2>
            A few things
            <br />
            <span className="gradient-text">you might be wondering.</span>
          </h2>
          <p>
            Understand the marketplace before choosing your next opportunity.
          </p>
          <Link href="/creator-marketplace" className="creator-text-link">
            Browse the marketplace <ArrowRight size={16} />
          </Link>
        </div>

        <div className="creator-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                className={`creator-faq-item ${isOpen ? "open" : ""}`}
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
        <div className="bottom-cta creator-final-cta">
          <div className="eyebrow">
            <Sparkles size={14} /> YOUR NEXT CHAPTER
          </div>
          <h2>
            Let your work
            <br />
            <span className="gradient-text">open new doors.</span>
          </h2>
          <p>
            Discover creator opportunities, showcase your strengths, and take
            the next step toward your next collaboration.
          </p>
          <div className="creator-solutions-actions">
            <Link href="/creator-marketplace" className="button button-primary">
              Explore marketplace <ArrowRight size={17} />
            </Link>
            <Link href="/get-started" className="button button-quiet">
              Get started <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
