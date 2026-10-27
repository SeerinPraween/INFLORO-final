
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GetStartedPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Your passwords do not match. Please try again.");
      return;
    }

    if (!acceptedTerms) {
      setError("Please accept the Terms & Conditions to continue.");
      return;
    }

    // Frontend only: connect an account-registration API to create an account.
    setSuccess(true);
  }

  return (
    <>
      <Navbar />

      <main className="auth-page">
        <section className="auth-layout signup-layout">
          <div className="auth-intro">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              YOUR CREATOR WORKFLOW STARTS HERE
            </div>

            <h1>
              Make space for
              <br />
              <span className="gradient-text">better partnerships.</span>
            </h1>

            <p>
              Create your Infloro account to discover creators, organize
              relationships, and bring your collaboration workflow together.
            </p>

            <div className="signup-points">
              <div>
                <span><CheckCircle2 size={17} /></span>
                Keep creator relationships organized
              </div>
              <div>
                <span><CheckCircle2 size={17} /></span>
                Track opportunities and collaborations
              </div>
              <div>
                <span><CheckCircle2 size={17} /></span>
                Build a clearer campaign workflow
              </div>
            </div>

            <div className="signup-promo">
              <div className="signup-promo-icon">
                <Sparkles size={20} />
              </div>
              <div>
                <strong>One workspace. More possibilities.</strong>
                <p>Your next great creator partnership starts with a first step.</p>
              </div>
            </div>
          </div>

          <div className="auth-card signup-card">
            {!success ? (
              <>
                <div className="auth-card-heading">
                  <span className="auth-lock">
                    <UserRound size={20} />
                  </span>
                  <h2>Create your account</h2>
                  <p>Start with your details below.</p>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                  <label className="auth-field">
                    <span>Full name</span>
                    <div className="auth-input-wrap">
                      <UserRound size={17} />
                      <input
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        autoComplete="name"
                        minLength={2}
                        required
                      />
                    </div>
                  </label>

                  <label className="auth-field">
                    <span>Email address</span>
                    <div className="auth-input-wrap">
                      <Mail size={17} />
                      <input
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        autoComplete="email"
                        required
                      />
                    </div>
                  </label>

                  <label className="auth-field">
                    <span>Password</span>
                    <div className="auth-input-wrap">
                      <LockKeyhole size={17} />
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="At least 8 characters"
                        autoComplete="new-password"
                        minLength={8}
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                          setError("");
                        }}
                        required
                      />
                      <button
                        type="button"
                        className="auth-eye"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                      </button>
                    </div>
                  </label>

                  <label className="auth-field">
                    <span>Confirm password</span>
                    <div className="auth-input-wrap">
                      <LockKeyhole size={17} />
                      <input
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter your password"
                        autoComplete="new-password"
                        value={confirmPassword}
                        onChange={(event) => {
                          setConfirmPassword(event.target.value);
                          setError("");
                        }}
                        required
                      />
                      <button
                        type="button"
                        className="auth-eye"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        aria-label={
                          showConfirmPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={17} />
                        ) : (
                          <Eye size={17} />
                        )}
                      </button>
                    </div>
                  </label>

                  {password.length > 0 && (
                    <div className="password-hint">
                      <span className={password.length >= 8 ? "hint-valid" : ""}>
                        <CheckCircle2 size={13} />
                        At least 8 characters
                      </span>
                      {confirmPassword.length > 0 && (
                        <span
                          className={
                            password === confirmPassword ? "hint-valid" : "hint-invalid"
                          }
                        >
                          <CheckCircle2 size={13} />
                          {password === confirmPassword
                            ? "Passwords match"
                            : "Passwords do not match"}
                        </span>
                      )}
                    </div>
                  )}

                  <label className="signup-terms-check">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(event) => {
                        setAcceptedTerms(event.target.checked);
                        setError("");
                      }}
                    />
                    <span>
                      I agree to the <Link href="/terms">Terms & Conditions</Link>{" "}
                      and <Link href="/privacy-policy">Privacy Policy</Link>.
                    </span>
                  </label>

                  {error && (
                    <p className="signup-error" role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    className="button button-primary auth-submit"
                    type="submit"
                  >
                    Create account <ArrowRight size={16} />
                  </button>

                  <p className="signup-security">
                    Your account will be created securely once authentication
                    is connected.
                  </p>
                </form>

                <div className="auth-divider">
                  <span>ALREADY HAVE AN ACCOUNT?</span>
                </div>

                <p className="auth-signup">
                  Welcome back? <Link href="/login">Sign in instead</Link>
                </p>
              </>
            ) : (
              <div className="signup-success" role="status" aria-live="polite">
                <span className="auth-lock">
                  <CheckCircle2 size={25} />
                </span>
                <h2>You're ready for the next step!</h2>
                <p>
                  Your form passed validation. Account creation is not active
                  yet because a registration API has not been connected.
                </p>
                <button
                  type="button"
                  className="button button-primary auth-submit"
                  onClick={() => setSuccess(false)}
                >
                  Back to registration
                </button>
                <Link href="/login" className="signup-login-link">
                  Already registered? Sign in
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
