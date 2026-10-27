 "use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, CircleHelp, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Starter",
    description: "For small teams getting started with creator marketing.",
    monthly: 0,
    yearly: 0,
    note: "Free forever",
    cta: "Get started free",
    featured: false,
    features: [
      "Build your creator shortlist",
      "Basic creator profiles",
      "1 active campaign",
      "Simple pipeline tracking",
      "Community support",
    ],
  },
  {
    name: "Growth",
    description: "For growing brands ready to build repeatable campaigns.",
    monthly: 49,
    yearly: 39,
    note: "per workspace / month",
    cta: "Start your free trial",
    featured: true,
    features: [
      "Everything in Starter",
      "AI-powered creator discovery",
      "Unlimited creator lists",
      "Creator CRM and follow-ups",
      "Campaign and deal pipelines",
      "Performance insights",
      "Priority email support",
    ],
  },
  {
    name: "Scale",
    description: "For agencies and teams managing creator programs at scale.",
    monthly: 149,
    yearly: 119,
    note: "per workspace / month",
    cta: "Talk to our team",
    featured: false,
    features: [
      "Everything in Growth",
      "Multiple brands and workspaces",
      "Advanced team workflows",
      "Custom reporting",
      "Collaboration permissions",
      "Dedicated onboarding",
      "Priority support",
    ],
  },
];

const faqs = [
  {
    q: "Can I start using Infloro for free?",
    a: "Yes. The Starter plan is designed to help you organize your first creator shortlist and campaign workflow without a subscription.",
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely. You can move to a different plan as your creator program grows. Choose the plan that fits your current workflow.",
  },
  {
    q: "What does yearly billing mean?",
    a: "Yearly billing shows a lower equivalent monthly price when you choose an annual subscription. The billing details should be confirmed before checkout.",
  },
  {
    q: "Do you offer plans for agencies and enterprise teams?",
    a: "The Scale plan is a starting point for agencies. For custom workflows, access controls, or larger programs, book a demo and we can discuss your requirements.",
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Navbar />
      <main className="pricing-page">
        <section className="pricing-hero">
          <div className="eyebrow"><span className="eyebrow-dot" /> Straightforward plans, room to grow</div>
          <h1>Creator partnerships<br />that <span className="gradient-text">scale with you.</span></h1>
          <p>Start simple, build your workflow, and choose the tools your team needs as your creator program grows.</p>
          <div className="billing-switch" role="group" aria-label="Billing frequency">
            <button type="button" className={!yearly ? "billing-option active" : "billing-option"} onClick={() => setYearly(false)}>Monthly</button>
            <button type="button" className={yearly ? "billing-option active" : "billing-option"} onClick={() => setYearly(true)}>
              Yearly <span className="save-pill">Save 20%</span>
            </button>
          </div>
          <span className="pricing-disclaimer">Illustrative starter pricing · Final plans can be adjusted to your business model</span>
        </section>

        <section className="pricing-cards" aria-label="Pricing plans">
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <article className={`plan-card${plan.featured ? " plan-featured" : ""}`} key={plan.name}>
                {plan.featured && <div className="popular-ribbon"><Sparkles size={13} /> MOST POPULAR</div>}
                <div className="plan-card-top">
                  <h2>{plan.name}</h2>
                  <p>{plan.description}</p>
                </div>
                <div className="plan-price">
                  {price === 0 ? (
                    <strong className="price-number">Free</strong>
                  ) : (
                    <>
                      <span className="currency">$</span><strong className="price-number">{price}</strong><span className="price-period">/mo</span>
                    </>
                  )}
                </div>
                <div className="plan-note">{price === 0 ? plan.note : `${plan.note}${yearly ? " · billed annually" : ""}`}</div>
                <Link href={plan.name === "Scale" ? "/book-a-demo" : "/get-started"} className={`button ${plan.featured ? "button-primary" : "button-quiet"} plan-cta`}>
                  {plan.cta} <ArrowUpRight size={15} />
                </Link>
                <div className="plan-divider" />
                <div className="plan-includes">What’s included</div>
                <ul className="plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature}><span className="check-circle"><Check size={12} /></span>{feature}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </section>

        <section className="pricing-note">
          <div className="pricing-note-icon"><CircleHelp size={20} /></div>
          <div>
            <strong>Need a plan for a larger creator program?</strong>
            <p>We can talk through team workflows, multiple brands, and custom reporting.</p>
          </div>
          <Link href="/book-a-demo">Talk to our team <ArrowRight size={14} /></Link>
        </section>

        <section className="pricing-faq section">
          <div className="section-inner">
            <div className="center">
              <div className="eyebrow"><span className="eyebrow-dot" /> A few helpful answers</div>
              <h2>Questions? <span className="gradient-text">We’ve got you.</span></h2>
              <p className="section-intro">The essentials to help you choose the right starting point.</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div className={`faq-item${openFaq === index ? " faq-open" : ""}`} key={faq.q}>
                  <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span>{faq.q}</span><span className="faq-plus">{openFaq === index ? "−" : "+"}</span>
                  </button>
                  {openFaq === index && <p>{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner bottom-cta">
            <div>
              <div className="eyebrow"><Sparkles size={13} /> Your next great partnership starts here</div>
              <h2>Make room for better creator work.</h2>
              <p>See how Infloro can bring your creator workflow together.</p>
            </div>
            <Link href="/book-a-demo" className="button button-primary">Book a demo <ArrowRight size={15} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
