
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  LockKeyhole,
  Database,
  UserRound,
  Cookie,
  Mail,
} from "lucide-react";

const sections = [
  {
    id: "information",
    number: "01",
    title: "Information We May Collect",
    icon: Database,
    content: [
      {
        heading: "Information you provide",
        text: "When you create an account, contact us, or express interest in our services, you may provide information such as your name, email address, organization, profile details, and messages.",
      },
      {
        heading: "Creator and campaign information",
        text: "Depending on the features you use, information may include creator profiles, social media handles, campaign briefs, collaboration details, performance metrics, and submitted content.",
      },
      {
        heading: "Technical information",
        text: "When the platform is operational, technical information such as browser type, device information, log data, and usage events may be collected to maintain security and improve functionality.",
      },
    ],
  },
  {
    id: "usage",
    number: "02",
    title: "How Information May Be Used",
    icon: UserRound,
    content: [
      {
        heading: "Provide platform services",
        text: "To support account management, creator discovery, campaign workflows, collaboration management, analytics, and other requested features.",
      },
      {
        heading: "Improve the experience",
        text: "To understand how features are used, troubleshoot problems, improve usability, and develop new capabilities.",
      },
      {
        heading: "Communicate with you",
        text: "To respond to enquiries, provide service-related updates, and send marketing communications where appropriate and permitted.",
      },
      {
        heading: "Protect the platform",
        text: "To detect suspicious activity, prevent misuse, enforce applicable terms, and maintain the security of accounts and services.",
      },
    ],
  },
  {
    id: "sharing",
    number: "03",
    title: "How Information May Be Shared",
    icon: ShieldCheck,
    content: [
      {
        heading: "With your direction",
        text: "Information may be shared with brands, agencies, creators, or other users when needed for a collaboration or feature you choose to use.",
      },
      {
        heading: "Service providers",
        text: "Information may be processed by trusted providers supporting hosting, analytics, communications, security, or other operational services, subject to appropriate safeguards.",
      },
      {
        heading: "Legal and safety requirements",
        text: "Information may be disclosed when required by law or when reasonably necessary to protect rights, safety, and platform integrity.",
      },
    ],
  },
  {
    id: "security",
    number: "04",
    title: "Data Security and Retention",
    icon: LockKeyhole,
    content: [
      {
        heading: "Security safeguards",
        text: "Appropriate technical and organizational measures should be used to protect personal information against unauthorized access, loss, misuse, or alteration.",
      },
      {
        heading: "Retention",
        text: "Information should be retained only for as long as reasonably necessary for the purposes described in this policy, legal obligations, dispute resolution, and legitimate operational needs.",
      },
      {
        heading: "Important limitation",
        text: "No online service or data transmission can be guaranteed to be completely secure. The safeguards used should reflect the actual platform architecture and operational practices.",
      },
    ],
  },
  {
    id: "rights",
    number: "05",
    title: "Your Choices and Rights",
    icon: UserRound,
    content: [
      {
        heading: "Access and correction",
        text: "Depending on applicable law, you may have rights to request access to personal information, correct inaccuracies, or obtain a copy of certain information.",
      },
      {
        heading: "Deletion and withdrawal",
        text: "You may be able to request deletion of information or withdraw consent where processing relies on consent, subject to legal and operational exceptions.",
      },
      {
        heading: "Marketing preferences",
        text: "You should be able to opt out of promotional emails using the unsubscribe mechanism provided, where applicable. Essential service communications may still be necessary.",
      },
    ],
  },
  {
    id: "cookies",
    number: "06",
    title: "Cookies and Similar Technologies",
    icon: Cookie,
    content: [
      {
        heading: "Essential technologies",
        text: "Cookies or local storage may be used to support features such as session management, preferences, and theme settings.",
      },
      {
        heading: "Analytics and preferences",
        text: "If analytics or optional tracking technologies are introduced, their purpose and applicable consent choices should be explained clearly.",
      },
      {
        heading: "Your controls",
        text: "You can manage cookies through your browser settings. Disabling certain technologies may affect some platform functionality.",
      },
    ],
  },
  {
    id: "third-parties",
    number: "07",
    title: "Third-Party Services",
    icon: Database,
    content: [
      {
        heading: "External platforms",
        text: "Infloro may link to or integrate with third-party platforms, including social networks and other marketing tools. Those services may process information under their own privacy policies.",
      },
      {
        heading: "Connected accounts",
        text: "If integrations become available, the information accessed and permissions requested should be disclosed before you connect an account.",
      },
    ],
  },
  {
    id: "children",
    number: "08",
    title: "Children's Privacy",
    icon: ShieldCheck,
    content: [
      {
        heading: "Age-appropriate access",
        text: "Infloro is intended for business and professional use, not for children who are not legally permitted to use the service. The final policy should specify applicable minimum-age requirements.",
      },
      {
        heading: "Concerns",
        text: "If you believe a child has provided personal information inappropriately, contact the platform so the matter can be reviewed.",
      },
    ],
  },
  {
    id: "changes",
    number: "09",
    title: "Changes to This Policy",
    icon: LockKeyhole,
    content: [
      {
        heading: "Policy updates",
        text: "This policy may be updated as the platform, its features, or legal requirements change. The latest version should display its effective date and be made available to users.",
      },
      {
        heading: "Material changes",
        text: "Where required, users should be notified of significant changes through an appropriate channel.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="privacy-hero-orb privacy-hero-orb-one" />
        <div className="privacy-hero-orb privacy-hero-orb-two" />

        <div className="privacy-hero-inner">
          <Link href="/" className="privacy-back-link">
            <ArrowLeft size={15} /> Back to home
          </Link>

          <div className="privacy-hero-icon">
            <ShieldCheck size={30} />
          </div>

          <span className="eyebrow">PRIVACY & TRUST</span>
          <h1>
            Your data.
            <br />
            <span className="gradient-text">Your trust.</span>
          </h1>

          <p>
            Transparency matters. Learn how personal information may be
            collected, used, and protected when interacting with Infloro.
          </p>

          <div className="privacy-meta">
            <span>Privacy policy</span>
            <span className="privacy-meta-dot" />
            <span>Draft for review</span>
          </div>
        </div>
      </section>

      <section className="privacy-layout section">
        <aside className="privacy-sidebar">
          <div className="privacy-sidebar-inner">
            <span className="privacy-sidebar-label">ON THIS PAGE</span>

            <nav aria-label="Privacy policy sections">
              {sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  <span>{section.number}</span>
                  {section.title}
                </a>
              ))}

              <a href="#contact-privacy">
                <span>10</span>
                Contact us
              </a>
            </nav>

            <div className="privacy-sidebar-note">
              <LockKeyhole size={18} />
              <p>
                Privacy should be built into the experience, not added as an
                afterthought.
              </p>
            </div>
          </div>
        </aside>

        <div className="privacy-content">
          <div className="privacy-intro-card">
            <div className="privacy-intro-icon">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h2>Our approach to privacy</h2>
              <p>
                Infloro is being designed to help brands, agencies, and
                creators collaborate. This draft outlines privacy principles
                for that experience. The final policy must reflect the actual
                services, data flows, vendors, and legal obligations of the
                operating business.
              </p>
            </div>
          </div>

          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <section
                className="privacy-policy-section"
                id={section.id}
                key={section.id}
              >
                <div className="privacy-section-heading">
                  <div className="privacy-section-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className="privacy-section-number">
                      SECTION {section.number}
                    </span>
                    <h2>{section.title}</h2>
                  </div>
                </div>

                <div className="privacy-section-body">
                  {section.content.map((item) => (
                    <article key={item.heading}>
                      <h3>{item.heading}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}

          <section
            className="privacy-policy-section privacy-contact-section"
            id="contact-privacy"
          >
            <div className="privacy-section-heading">
              <div className="privacy-section-icon">
                <Mail size={20} />
              </div>
              <div>
                <span className="privacy-section-number">SECTION 10</span>
                <h2>Contact us about privacy</h2>
              </div>
            </div>

            <p>
              Have a question about personal information or a privacy request?
              Use our contact page to get in touch. A verified privacy contact
              address and any applicable response timelines should be added
              before this policy is published.
            </p>

            <Link href="/contact" className="button button-primary">
              Visit contact page <ArrowLeft className="privacy-arrow-icon" size={16} />
            </Link>
          </section>

          <div className="privacy-disclaimer">
            <strong>Before publishing</strong>
            <p>
              This is a starter policy template, not legal advice or a
              representation of Infloro&apos;s actual data practices. Have it
              reviewed for your business and applicable laws, including
              relevant Indian data-protection requirements. Confirm the
              responsible legal entity, effective date, contact details,
              actual integrations, retention periods, and user-rights process
              before making it public.
            </p>
          </div>
        </div>
      </section>

      <section className="privacy-bottom">
        <div className="privacy-bottom-icon">
          <ShieldCheck size={24} />
        </div>
        <h2>Trust is built through transparency.</h2>
        <p>Questions about Infloro? We&apos;re here to help.</p>
        <Link href="/contact" className="button button-primary">
          Contact Infloro
        </Link>
      </section>
    </main>
  );
}
