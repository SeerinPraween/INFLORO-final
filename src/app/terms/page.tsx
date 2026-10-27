
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  UserRound,
  Handshake,
  CreditCard,
  Copyright,
  ShieldCheck,
  Scale,
  AlertTriangle,
  Mail,
} from "lucide-react";

const termsSections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    icon: FileText,
    paragraphs: [
      "These Terms of Service describe the proposed rules for accessing and using the Infloro platform and related services.",
      "By accessing or using the service, you agree to the applicable terms. If you do not agree, you should not use the service. The final terms should identify the legal entity operating Infloro and the effective date.",
    ],
  },
  {
    id: "eligibility",
    number: "02",
    title: "Eligibility and Accounts",
    icon: UserRound,
    paragraphs: [
      "You must be legally permitted to enter into a binding agreement and satisfy any applicable minimum-age requirements to use the platform.",
      "You are responsible for providing accurate account information, protecting your login credentials, and notifying the platform operator of suspected unauthorized access.",
      "Do not impersonate another person or create an account using information you are not authorized to use.",
    ],
  },
  {
    id: "platform",
    number: "03",
    title: "How the Platform Works",
    icon: Handshake,
    paragraphs: [
      "Infloro is intended to help brands, agencies, and creators discover one another and manage creator marketing activities, campaigns, content, and collaboration workflows.",
      "Unless expressly agreed otherwise, using the platform does not guarantee campaign acceptance, creator availability, audience engagement, sales, reach, or any particular business outcome.",
      "The final terms must clearly state whether Infloro acts only as a technology provider or also facilitates agreements, payments, or other transactions between users.",
    ],
  },
  {
    id: "campaigns",
    number: "04",
    title: "Campaigns and Collaborations",
    icon: Handshake,
    paragraphs: [
      "Brands and agencies should provide accurate campaign briefs, deliverables, timelines, compensation details, and disclosure requirements.",
      "Creators should review campaign requirements before accepting an opportunity and make reasonable efforts to meet the deliverables they agree to.",
      "Users are responsible for documenting their agreements and communicating changes to deadlines, scope, approvals, or compensation.",
      "Campaign-specific agreements may contain additional terms. If terms conflict, the applicable agreement and these platform terms should specify which provisions control.",
    ],
  },
  {
    id: "payments",
    number: "05",
    title: "Fees, Payments, and Refunds",
    icon: CreditCard,
    paragraphs: [
      "Any platform subscription, service fee, commission, or other charge should be disclosed before the user commits to a paid service.",
      "The final terms should explain payment methods, billing cycles, taxes, cancellations, refunds, chargebacks, and any payment-provider conditions that apply.",
      "Do not assume that Infloro processes, holds, guarantees, or releases collaboration payments unless those capabilities and responsibilities are expressly provided.",
    ],
  },
  {
    id: "ip",
    number: "06",
    title: "Intellectual Property and Content",
    icon: Copyright,
    paragraphs: [
      "The platform's software, branding, design, and other protected materials belong to their respective owners or licensors. These terms do not transfer ownership to users.",
      "Users retain rights they already own in their submitted content, subject to the permissions and agreements they separately grant.",
      "By submitting content, you should grant only the limited permissions necessary for the platform to host, display, process, and provide the services you request. The final terms should define the scope and duration of any such licence.",
      "Usage rights for campaign content, including paid advertising, editing, exclusivity, attribution, and usage duration, should be agreed separately between the relevant parties.",
    ],
  },
  {
    id: "conduct",
    number: "07",
    title: "Acceptable Use",
    icon: ShieldCheck,
    paragraphs: [
      "You must not use the platform for unlawful activities, fraud, harassment, impersonation, or misleading commercial practices.",
      "You must not attempt to gain unauthorized access to accounts or systems, interfere with service availability, distribute malicious code, or misuse another user's information.",
      "You must respect applicable intellectual property, privacy, advertising, consumer-protection, and social media platform rules.",
    ],
  },
  {
    id: "third-party",
    number: "08",
    title: "Third-Party Platforms and Services",
    icon: Scale,
    paragraphs: [
      "Infloro may link to or integrate with external services. Those services may have their own terms, privacy policies, availability limits, and access requirements.",
      "Infloro cannot guarantee that an external platform will remain available or that its APIs, permissions, pricing, or policies will remain unchanged.",
      "The final terms should describe any third-party services that materially affect how the platform operates.",
    ],
  },
  {
    id: "availability",
    number: "09",
    title: "Availability and Disclaimers",
    icon: AlertTriangle,
    paragraphs: [
      "The service may be updated, changed, interrupted, or temporarily unavailable for maintenance or other reasons.",
      "To the extent permitted by applicable law, the platform should describe the limits of any warranties and clarify that marketing performance, audience behaviour, and third-party services cannot be guaranteed.",
      "Nothing in these terms is intended to exclude a right or remedy that cannot legally be excluded under applicable law.",
    ],
  },
  {
    id: "liability",
    number: "10",
    title: "Limitation of Liability",
    icon: Scale,
    paragraphs: [
      "The final terms should clearly explain which types of loss, if any, the platform operator is legally permitted to limit or exclude, and any applicable financial limits.",
      "Any limitation must be reviewed for enforceability under the laws that apply to the operating business. Nothing here should be treated as a final or enforceable limitation without that review.",
    ],
  },
  {
    id: "termination",
    number: "11",
    title: "Suspension and Termination",
    icon: ShieldCheck,
    paragraphs: [
      "The platform operator may need to restrict or suspend access in cases of suspected abuse, security risks, legal requirements, or material breaches of the terms.",
      "The final terms should describe how users may close their accounts, what happens to active campaigns and outstanding payments, and which obligations survive account closure.",
    ],
  },
  {
    id: "law",
    number: "12",
    title: "Governing Law and Disputes",
    icon: Scale,
    paragraphs: [
      "The final terms should identify the governing law and an appropriate process for handling disputes, based on the operating entity, applicable regulations, and users' legal rights.",
      "Do not publish a jurisdiction, court location, arbitration clause, or dispute-resolution procedure until it has been selected and reviewed for the business.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="terms-page">
      <section className="terms-hero">
        <div className="terms-hero-orb terms-hero-orb-one" />
        <div className="terms-hero-orb terms-hero-orb-two" />

        <div className="terms-hero-inner">
          <Link href="/" className="terms-back-link">
            <ArrowLeft size={15} /> Back to home
          </Link>

          <div className="terms-hero-icon">
            <FileText size={30} />
          </div>

          <span className="eyebrow">TERMS & CONDITIONS</span>

          <h1>
            Clear terms.
            <br />
            <span className="gradient-text">Better partnerships.</span>
          </h1>

          <p>
            The rules and responsibilities that help brands, agencies, and
            creators work together through Infloro.
          </p>

          <div className="terms-meta">
            <span>Terms of Service</span>
            <span className="terms-meta-dot" />
            <span>Draft for review</span>
          </div>
        </div>
      </section>

      <section className="terms-layout section">
        <aside className="terms-sidebar">
          <div className="terms-sidebar-inner">
            <span className="terms-sidebar-label">QUICK NAVIGATION</span>

            <nav aria-label="Terms sections">
              {termsSections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  <span>{section.number}</span>
                  {section.title}
                </a>
              ))}
              <a href="#terms-contact">
                <span>13</span>
                Contact
              </a>
            </nav>

            <div className="terms-sidebar-note">
              <ShieldCheck size={18} />
              <p>
                Read the terms that apply to your use of the platform.
              </p>
            </div>
          </div>
        </aside>

        <div className="terms-content">
          <div className="terms-intro-card">
            <div className="terms-intro-icon">
              <Scale size={23} />
            </div>
            <div>
              <h2>Fair expectations start here</h2>
              <p>
                These draft terms outline a framework for platform use,
                collaboration, and account responsibilities. They must be
                adapted to Infloro&apos;s actual business model and reviewed
                before being treated as a binding legal agreement.
              </p>
            </div>
          </div>

          {termsSections.map((section) => {
            const Icon = section.icon;

            return (
              <section
                className="terms-section"
                id={section.id}
                key={section.id}
              >
                <div className="terms-section-heading">
                  <div className="terms-section-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className="terms-section-number">
                      SECTION {section.number}
                    </span>
                    <h2>{section.title}</h2>
                  </div>
                </div>

                <div className="terms-section-body">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            );
          })}

          <section
            className="terms-section terms-contact-section"
            id="terms-contact"
          >
            <div className="terms-section-heading">
              <div className="terms-section-icon">
                <Mail size={20} />
              </div>
              <div>
                <span className="terms-section-number">SECTION 13</span>
                <h2>Questions about these terms?</h2>
              </div>
            </div>

            <p>
              If you have questions about using Infloro or these draft terms,
              visit our contact page. Add the verified operating entity and
              legal contact details before publishing this page.
            </p>

            <Link href="/contact" className="button button-primary">
              Contact Infloro <ArrowRight size={16} />
            </Link>
          </section>

          <div className="terms-disclaimer">
            <div className="terms-disclaimer-heading">
              <AlertTriangle size={18} />
              <strong>Important: review before publishing</strong>
            </div>
            <p>
              This is a general website template, not legal advice. It does
              not establish the actual contractual terms of Infloro. Have a
              qualified legal professional review it for the relevant
              jurisdiction, including applicable Indian laws, consumer
              protections, payment rules, privacy obligations, and
              enforceability. Confirm the legal entity, effective date,
              dispute process, fees, refunds, and liability provisions before
              making it public.
            </p>
          </div>
        </div>
      </section>

      <section className="terms-bottom">
        <div className="terms-bottom-icon">
          <Handshake size={24} />
        </div>
        <h2>Better collaborations begin with clarity.</h2>
        <p>Need help understanding how Infloro works?</p>
        <div className="terms-bottom-actions">
          <Link href="/contact" className="button button-primary">
            Contact us <ArrowRight size={16} />
          </Link>
          <Link href="/privacy-policy" className="button button-quiet">
            Privacy policy
          </Link>
        </div>
      </section>
    </main>
  );
}
