
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  ShieldCheck,
  CheckCircle2,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // UI demonstration only: no email is sent.
    setSubmitted(true);
  }

  return (
    <main className="forgot-page">
      <div className="forgot-background-orb forgot-background-orb-one" />
      <div className="forgot-background-orb forgot-background-orb-two" />

      <div className="forgot-layout">
        <section className="forgot-brand-panel">
          <Link href="/" className="forgot-brand">
            <span className="forgot-brand-mark">
              <Sparkles size={22} />
            </span>
            <span>infloro</span>
          </Link>

          <div className="forgot-brand-copy">
            <span className="eyebrow">ACCOUNT RECOVERY</span>
            <h1>
              A fresh start
              <br />
              is just a step
              <br />
              <span className="gradient-text">away.</span>
            </h1>
            <p>
              Getting back into your account should be simple. Start by
              entering the email address associated with your account.
            </p>
          </div>

          <div className="forgot-trust-card">
            <div className="forgot-trust-icon">
              <ShieldCheck size={21} />
            </div>
            <div>
              <strong>Your account, your control.</strong>
              <p>
                Password recovery should be secure and straightforward.
              </p>
            </div>
          </div>

          <div className="forgot-brand-decoration">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="forgot-form-panel">
          <Link href="/login" className="forgot-back-link">
            <ArrowLeft size={16} />
            Back to login
          </Link>

          <div className="forgot-form-content">
            <div className="forgot-main-icon">
              {submitted ? (
                <CheckCircle2 size={29} />
              ) : (
                <LockKeyhole size={29} />
              )}
            </div>

            {submitted ? (
              <div className="forgot-result" role="status">
                <span className="eyebrow">REQUEST PREPARED</span>
                <h2>
                  Check your
                  <br />
                  <span className="gradient-text">next steps.</span>
                </h2>
                <p>
                  Your form was submitted in this demo for{" "}
                  <strong>{email}</strong>. No recovery email has been sent.
                  Connect a backend email service to complete the real
                  password-reset process.
                </p>

                <button
                  type="button"
                  className="button button-primary forgot-submit"
                  onClick={() => {
                    setSubmitted(false);
                    setEmail("");
                  }}
                >
                  Try another email <ArrowRight size={17} />
                </button>

                <Link href="/login" className="forgot-secondary-link">
                  Return to login
                </Link>
              </div>
            ) : (
              <>
                <span className="eyebrow">FORGOT YOUR PASSWORD?</span>
                <h2>
                  Let&apos;s get you
                  <br />
                  <span className="gradient-text">back in.</span>
                </h2>

                <p className="forgot-description">
                  Enter your registered email address. In a live
                  implementation, you&apos;ll receive instructions to reset
                  your password.
                </p>

                <form
                  className="forgot-form"
                  onSubmit={handleSubmit}
                >
                  <label htmlFor="recovery-email">
                    Email address
                  </label>

                  <div className="forgot-input-wrap">
                    <Mail size={18} />
                    <input
                      id="recovery-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="button button-primary forgot-submit"
                  >
                    Continue <ArrowRight size={17} />
                  </button>
                </form>

                <div className="forgot-security-note">
                  <ShieldCheck size={16} />
                  <span>
                    Never share your password or verification code with
                    anyone.
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="forgot-form-footer">
            <span>New to Infloro?</span>{" "}
            <Link href="/get-started">Create an account</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
