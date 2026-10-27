
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Your details are valid. Connect the authentication API to sign in to your account."
    );
  }

  return (
    <>
      <Navbar />

      <main className="auth-page">
        <section className="auth-layout">
          <div className="auth-intro">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              WELCOME BACK
            </div>

            <h1>
              Great partnerships
              <br />
              start <span className="gradient-text">here.</span>
            </h1>

            <p>
              Sign in to your Infloro workspace and get back to discovering
              creators, managing relationships, and growing your campaigns.
            </p>

            <div className="auth-visual">
              <div className="auth-orbit" />
              <div className="auth-glow" />

              <div className="auth-mini-card auth-mini-one">
                <span className="auth-mini-icon">
                  <Sparkles size={16} />
                </span>
                <div>
                  <strong>Your next great match</strong>
                  <span>Creator discovery</span>
                </div>
              </div>

              <div className="auth-center-mark">i.</div>

              <div className="auth-mini-card auth-mini-two">
                <span className="auth-mini-check">✓</span>
                <div>
                  <strong>Workflow in focus</strong>
                  <span>One connected workspace</span>
                </div>
              </div>
            </div>

            <div className="auth-back">
              <Link href="/">
                <ArrowLeft size={15} />
                Back to homepage
              </Link>
            </div>
          </div>

          <div className="auth-card">
            <div className="auth-card-heading">
              <span className="auth-lock">
                <LockKeyhole size={20} />
              </span>
              <h2>Welcome back</h2>
              <p>Enter your details to access your workspace.</p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              <label className="auth-field">
                <span>Email address</span>
                <div className="auth-input-wrap">
                  <Mail size={17} />
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setMessage("");
                    }}
                    required
                  />
                </div>
              </label>

              <label className="auth-field">
                <span>Password</span>
                <div className="auth-input-wrap">
                  <LockKeyhole size={17} />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    minLength={8}
                    required
                  />
                  <button
                    className="auth-eye"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
              </label>

              <div className="auth-options">
                <label className="auth-remember">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                  />
                  <span>Remember me</span>
                </label>

                <Link href="/forgot-password" className="auth-forgot">
                  Forgot password?
                </Link>
              </div>

              {message && (
                <div className="auth-message" role="status" aria-live="polite">
                  {message}
                </div>
              )}

              <button className="button button-primary auth-submit" type="submit">
                Sign in <ArrowRight size={16} />
              </button>
            </form>

            <div className="auth-divider">
              <span>NEW TO INFLORO?</span>
            </div>

            <p className="auth-signup">
              Don't have an account?{" "}
              <Link href="/get-started">Create an account</Link>
            </p>

            <p className="auth-terms">
              By continuing, you agree to our{" "}
              <Link href="/terms">Terms & Conditions</Link> and{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
