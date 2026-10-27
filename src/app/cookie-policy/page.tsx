
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Cookie,
  ShieldCheck,
  SlidersHorizontal,
  Settings2,
  LockKeyhole,
  BarChart3,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

const cookieCategories = [
  {
    id: "essential",
    title: "Essential technologies",
    description:
      "Support core functionality such as security, navigation, session handling, and remembering necessary preferences.",
    required: true,
    icon: LockKeyhole,
  },
  {
    id: "preferences",
    title: "Preference storage",
    description:
      "Remember choices such as your theme preference and other interface settings to make future visits more convenient.",
    required: false,
    icon: Settings2,
  },
  {
    id: "analytics",
    title: "Analytics",
    description:
      "If enabled, help us understand aggregate usage patterns, identify issues, and improve platform performance.",
    required: false,
    icon: BarChart3,
  },
];

export default function CookiePolicyPage() {
  const [preferences, setPreferences] = useState({
    essential: true,
    preferences: false,
    analytics: false,
  });

  const [saved, setSaved] = useState(false);

  function togglePreference(id: "preferences" | "analytics") {
    setPreferences((current) => ({
      ...current,
      [id]: !current[id],
    }));
    setSaved(false);
  }

  function acceptOptional() {
    setPreferences({
      essential: true,
      preferences: true,
      analytics: true,
    });
    setSaved(false);
  }

  function rejectOptional() {
    setPreferences({
      essential: true,
      preferences: false,
      analytics: false,
    });
    setSaved(false);
  }

  function savePreferences() {
    // Demonstration only: this does not persist consent or configure cookies.
    setSaved(true);
  }

  return (
    <main className="cookie-page">
      <section className="cookie-hero">
        <div className="cookie-hero-orb cookie-hero-orb-one" />
        <div className="cookie-hero-orb cookie-hero-orb-two" />

        <div className="cookie-hero-inner">
          <Link href="/" className="cookie-back-link">
            <ArrowLeft size={15} /> Back to home
          </Link>

          <div className="cookie-hero-icon">
            <Cookie size={30} />
          </div>

          <span className="eyebrow">PRIVACY PREFERENCES</span>

          <h1>
            Cookies, made
            <br />
            <span className="gradient-text">clear and simple.</span>
          </h1>

          <p>
            Learn how cookies and similar technologies can support your
            experience on Infloro and explore the choices available to you.
          </p>

          <div className="cookie-hero-tags">
            <span>
              <ShieldCheck size={14} /> Transparency first
            </span>
            <span>
              <SlidersHorizontal size={14} /> Your choices matter
            </span>
          </div>
        </div>
      </section>

      <section className="cookie-main section">
        <div className="cookie-overview">
          <div className="cookie-overview-icon">
            <Cookie size={23} />
          </div>
          <div>
            <h2>What are cookies?</h2>
            <p>
              Cookies are small pieces of data stored by your browser.
              Similar technologies, including local storage, can remember
              information on your device. They may help a website maintain
              sessions, remember settings, measure performance, or support
              other features.
            </p>
          </div>
        </div>

        <div className="cookie-content-grid">
          <div className="cookie-explanation">
            <span className="eyebrow">THE BASICS</span>
            <h2>Understand what&apos;s happening behind the scenes.</h2>
            <p>
              The technologies used depend on the features enabled on the
              live platform. This page describes common categories and should
              be updated to reflect Infloro&apos;s actual implementation.
            </p>

            <div className="cookie-explanation-item">
              <span className="cookie-explanation-number">01</span>
              <div>
                <h3>First-party cookies</h3>
                <p>
                  Set by the website you are visiting to support its own
                  functionality and preferences.
                </p>
              </div>
            </div>

            <div className="cookie-explanation-item">
              <span className="cookie-explanation-number">02</span>
              <div>
                <h3>Third-party cookies</h3>
                <p>
                  May be set by an external service embedded in a website,
                  such as an analytics or support provider, if one is used.
                </p>
              </div>
            </div>

            <div className="cookie-explanation-item">
              <span className="cookie-explanation-number">03</span>
              <div>
                <h3>Local storage</h3>
                <p>
                  Allows a website to save certain settings in your browser.
                  For example, Infloro&apos;s current theme switcher may use
                  local storage to remember the selected theme.
                </p>
              </div>
            </div>
          </div>

          <aside className="cookie-preferences-card">
            <div className="cookie-preferences-heading">
              <div className="cookie-preferences-heading-icon">
                <SlidersHorizontal size={21} />
              </div>
              <div>
                <span className="cookie-preferences-label">
                  INTERACTIVE DEMO
                </span>
                <h2>Cookie preferences</h2>
              </div>
            </div>

            <p className="cookie-preferences-description">
              Explore example preference controls. Your selections on this
              page are not stored or applied to actual cookies.
            </p>

            <div className="cookie-preference-list">
              {cookieCategories.map((category) => {
                const Icon = category.icon;
                const enabled =
                  preferences[
                    category.id as keyof typeof preferences
                  ];

                return (
                  <div className="cookie-preference-row" key={category.id}>
                    <div className="cookie-preference-top">
                      <div className="cookie-preference-icon">
                        <Icon size={18} />
                      </div>

                      <div className="cookie-preference-title">
                        <h3>{category.title}</h3>
                        {category.required ? (
                          <span className="cookie-required">
                            Always active
                          </span>
                        ) : null}
                      </div>

                      <button
                        type="button"
                        className={`cookie-switch ${
                          enabled ? "is-on" : ""
                        }`}
                        role="switch"
                        aria-checked={enabled}
                        aria-label={`Toggle ${category.title}`}
                        disabled={category.required}
                        onClick={() => {
                          if (
                            category.id === "preferences" ||
                            category.id === "analytics"
                          ) {
                            togglePreference(category.id);
                          }
                        }}
                      >
                        <span />
                      </button>
                    </div>

                    <p>{category.description}</p>
                  </div>
                );
              })}
            </div>

            {saved && (
              <div className="cookie-demo-confirmation" role="status">
                <CheckCircle2 size={17} />
                Demo selection confirmed. No consent has been stored.
              </div>
            )}

            <div className="cookie-preference-actions">
              <button
                type="button"
                className="button button-primary"
                onClick={savePreferences}
              >
                Save preferences
              </button>

              <button
                type="button"
                className="cookie-text-button"
                onClick={acceptOptional}
              >
                Accept optional
              </button>

              <button
                type="button"
                className="cookie-text-button"
                onClick={rejectOptional}
              >
                Reject optional
              </button>
            </div>

            <p className="cookie-preference-footnote">
              These controls are a UI demonstration, not a functioning
              consent-management system.
            </p>
          </aside>
        </div>

        <div className="cookie-details">
          <section className="cookie-detail-section" id="use">
            <span className="cookie-detail-number">01</span>
            <div>
              <h2>How we may use these technologies</h2>
              <p>
                Depending on the deployed features, cookies or similar
                technologies may be used to maintain secure sessions,
                remember interface preferences, troubleshoot errors, and
                understand overall website usage.
              </p>
              <p>
                Optional analytics or marketing technologies should only be
                enabled in accordance with applicable law and the consent
                choices required for your region.
              </p>
            </div>
          </section>

          <section className="cookie-detail-section" id="duration">
            <span className="cookie-detail-number">02</span>
            <div>
              <h2>How long do they last?</h2>
              <p>
                Session cookies generally expire when a browsing session
                ends. Persistent cookies and locally stored settings may
                remain until their expiry or until you delete them. Actual
                durations depend on the technology and configuration used.
              </p>
            </div>
          </section>

          <section className="cookie-detail-section" id="control">
            <span className="cookie-detail-number">03</span>
            <div>
              <h2>Managing your choices</h2>
              <p>
                You can usually control or remove cookies through your
                browser settings. Browser controls may not remove every type
                of locally stored information, and clearing site data may
                reset preferences or sign you out.
              </p>
              <p>
                If Infloro introduces optional tracking, a production consent
                interface should explain the available choices and provide a
                way to change them later.
              </p>
            </div>
          </section>

          <section className="cookie-detail-section" id="updates">
            <span className="cookie-detail-number">04</span>
            <div>
              <h2>Changes to this policy</h2>
              <p>
                This policy may need to change when the platform introduces
                new features, providers, or technologies. The published
                version should reflect the actual services in use and display
                the applicable effective date.
              </p>
            </div>
          </section>
        </div>

        <div className="cookie-contact-card">
          <div className="cookie-contact-icon">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h2>Have a question about your privacy?</h2>
            <p>
              Visit our privacy policy or contact us with questions about
              information handling and preferences.
            </p>
          </div>
          <div className="cookie-contact-actions">
            <Link href="/privacy-policy" className="button button-quiet">
              Privacy policy <ExternalLink size={15} />
            </Link>
            <Link href="/contact" className="button button-primary">
              Contact us <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <p className="cookie-legal-note">
          <strong>Before publishing:</strong> This is a starter policy, not
          legal advice or a statement of verified production behaviour.
          Audit the cookies, local storage, analytics, embedded services, and
          other tracking technologies actually used by the site. Confirm
          applicable consent and disclosure requirements with qualified
          counsel.
        </p>
      </section>
    </main>
  );
}
