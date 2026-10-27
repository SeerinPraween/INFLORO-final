
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookADemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    // Frontend demonstration only. Connect an API to save real submissions.
    setError("");
    setSubmitted(true);
    form.reset();
  }

  return (
    <>
      <Navbar />

      <main className="demo-page">
        <section className="demo-layout">
          <div className="demo-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              YOUR NEXT CHAPTER STARTS HERE
            </div>

            <h1>
              Let’s make creator marketing
              <span className="gradient-text"> work better.</span>
            </h1>

            <p className="demo-intro">
              See how Infloro can help your team discover the right creators,
              manage relationships, and bring every collaboration into focus.
            </p>

            <div className="demo-benefits">
              <div className="demo-benefit">
                <span className="demo-benefit-icon">
                  <Sparkles size={19} />
                </span>
                <div>
                  <strong>Discover your possibilities</strong>
                  <p>Explore creator discovery and smarter shortlisting.</p>
                </div>
              </div>

              <div className="demo-benefit">
                <span className="demo-benefit-icon">
                  <CalendarDays size={19} />
                </span>
                <div>
                  <strong>See your workflow in action</strong>
                  <p>Understand how outreach and deal tracking fit together.</p>
                </div>
              </div>

              <div className="demo-benefit">
                <span className="demo-benefit-icon">
                  <ShieldCheck size={19} />
                </span>
                <div>
                  <strong>Get a relevant walkthrough</strong>
                  <p>Tell us about your team and the challenges you want to solve.</p>
                </div>
              </div>
            </div>

            <div className="demo-time">
              <Clock3 size={16} />
              <span>A focused walkthrough tailored to your goals</span>
            </div>
          </div>

          <div className="demo-form-card">
            {!submitted ? (
              <>
                <div className="demo-form-heading">
                  <span className="demo-form-kicker">LET’S CONNECT</span>
                  <h2>Book your personal demo</h2>
                  <p>Share a few details so we can understand your needs.</p>
                </div>

                <form className="demo-form" onSubmit={handleSubmit}>
                  <div className="demo-fields">
                    <label className="demo-field">
                      <span>Full name *</span>
                      <input
                        name="fullName"
                        type="text"
                        placeholder="Your full name"
                        autoComplete="name"
                        required
                        minLength={2}
                      />
                    </label>

                    <label className="demo-field">
                      <span>Work email *</span>
                      <input
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        autoComplete="email"
                        required
                      />
                    </label>

                    <label className="demo-field">
                      <span>Company name *</span>
                      <input
                        name="company"
                        type="text"
                        placeholder="Your company"
                        autoComplete="organization"
                        required
                      />
                    </label>

                    <label className="demo-field">
                      <span>Your role *</span>
                      <select name="role" defaultValue="" required>
                        <option value="" disabled>
                          Select your role
                        </option>
                        <option value="brand">Brand / Marketing team</option>
                        <option value="agency">Agency</option>
                        <option value="creator">Creator</option>
                        <option value="freelancer">Freelancer / Consultant</option>
                        <option value="enterprise">Enterprise team</option>
                        <option value="other">Other</option>
                      </select>
                    </label>

                    <label className="demo-field">
                      <span>Team size</span>
                      <select name="teamSize" defaultValue="">
                        <option value="">Select team size</option>
                        <option value="1">Just me</option>
                        <option value="2-10">2–10 people</option>
                        <option value="11-50">11–50 people</option>
                        <option value="51-200">51–200 people</option>
                        <option value="200+">200+ people</option>
                      </select>
                    </label>

                    <label className="demo-field">
                      <span>What would you like to improve?</span>
                      <select name="goal" defaultValue="">
                        <option value="">Choose your main goal</option>
                        <option value="discovery">Creator discovery</option>
                        <option value="outreach">Creator outreach and CRM</option>
                        <option value="deals">Deal and partnership management</option>
                        <option value="campaigns">Campaign management</option>
                        <option value="analytics">Analytics and reporting</option>
                        <option value="all">End-to-end creator marketing</option>
                      </select>
                    </label>
                  </div>

                  {error && <p className="demo-error">{error}</p>}

                  <button className="button button-primary demo-submit" type="submit">
                    Request a demo <ArrowRight size={16} />
                  </button>

                  <p className="demo-privacy">
                    By submitting, you agree to be contacted about your demo
                    request. See our{" "}
                    <Link href="/privacy-policy">Privacy Policy</Link>.
                  </p>
                </form>
              </>
            ) : (
              <div className="demo-success" role="status" aria-live="polite">
                <span className="demo-success-icon">
                  <CheckCircle2 size={32} />
                </span>
                <h2>Your request is ready!</h2>
                <p>
                  The form passed validation. To actually submit your request
                  to the Infloro team, connect this form to a backend API or
                  form service.
                </p>
                <button
                  className="button button-primary"
                  onClick={() => setSubmitted(false)}
                  type="button"
                >
                  Submit another request
                </button>
                <Link className="demo-back-link" href="/">
                  Back to homepage
                </Link>
              </div>
            )}
          </div>
        </section>

        <section className="demo-bottom">
          <p>
            Not ready for a demo yet? Explore the platform and discover what
            Infloro can do for your team.
          </p>
          <Link href="/pricing">
            Explore pricing <ArrowRight size={14} />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
