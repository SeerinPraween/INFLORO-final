
"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [attempted, setAttempted] = useState(false);

  const checks = useMemo(
    () => ({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    }),
    [password]
  );

  const strength = Object.values(checks).filter(Boolean).length;

  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);

    if (
      strength < 4 ||
      password !== confirmPassword ||
      password.length < 8
    ) {
      return;
    }

    // Demo only: no API request or password update occurs.
    setSubmitted(true);
  }

  return (
    <main className="reset-page">
      <div className="reset-orb reset-orb-one" />
      <div className="reset-orb reset-orb-two" />

      <div className="reset-shell">
        <header className="reset-header">
          <Link href="/" className="reset-brand">
            <span className="reset-brand-mark">
              <Sparkles size={21} />
            </span>
            <span>infloro</span>
          </Link>

          <Link href="/login" className="reset-header-link">
            Back to login <ArrowRight size={15} />
          </Link>
        </header>

        <section className="reset-card">
          {submitted ? (
            <div className="reset-success" role="status">
              <div className="reset-main-icon">
                <CheckCircle2 size={30} />
              </div>

              <span className="eyebrow">DEMO COMPLETE</span>

              <h1>
                You&apos;re ready
                <br />
                for a <span className="gradient-text">fresh start.</span>
              </h1>

              <p>
                Your password passed the frontend checks. No password was
                actually changed because this page is not connected to a
                reset-token API yet.
              </p>

              <Link
                href="/login"
                className="button button-primary reset-submit"
              >
                Return to login <ArrowRight size={17} />
              </Link>
            </div>
          ) : (
            <>
              <div className="reset-main-icon">
                <LockKeyhole size={29} />
              </div>

              <span className="eyebrow">SECURE YOUR ACCOUNT</span>

              <h1>
                Create a new
                <br />
                <span className="gradient-text">password.</span>
              </h1>

              <p className="reset-description">
                Choose a strong password you haven&apos;t used before.
                Make sure you can remember it.
              </p>

              <form className="reset-form" onSubmit={handleSubmit}>
                <label htmlFor="new-password">New password</label>

                <div
                  className={`reset-input-wrap ${
                    attempted && strength < 4 ? "has-error" : ""
                  }`}
                >
                  <LockKeyhole size={17} />
                  <input
                    id="new-password"
                    name="new-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Enter a new password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    className="reset-eye-button"
                    onClick={() => setShowPassword((value) => !value)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>

                <div
                  className="reset-strength"
                  aria-label={`Password strength: ${strength} of 5 checks passed`}
                >
                  {[1, 2, 3, 4, 5].map((level) => (
                    <span
                      key={level}
                      className={strength >= level ? "is-filled" : ""}
                    />
                  ))}
                </div>

                <div className="reset-strength-label">
                  <span>Password strength</span>
                  <strong>
                    {password.length === 0
                      ? "Not entered"
                      : strength <= 2
                        ? "Weak"
                        : strength <= 3
                          ? "Fair"
                          : strength === 4
                            ? "Good"
                            : "Strong"}
                  </strong>
                </div>

                <div className="reset-requirements">
                  <span className={checks.length ? "is-valid" : ""}>
                    <CheckCircle2 size={14} /> At least 8 characters
                  </span>
                  <span className={checks.uppercase ? "is-valid" : ""}>
                    <CheckCircle2 size={14} /> One uppercase letter
                  </span>
                  <span className={checks.lowercase ? "is-valid" : ""}>
                    <CheckCircle2 size={14} /> One lowercase letter
                  </span>
                  <span className={checks.number ? "is-valid" : ""}>
                    <CheckCircle2 size={14} /> One number
                  </span>
                  <span className={checks.special ? "is-valid" : ""}>
                    <CheckCircle2 size={14} /> One special character
                  </span>
                </div>

                <label htmlFor="confirm-password" className="reset-confirm-label">
                  Confirm new password
                </label>

                <div
                  className={`reset-input-wrap ${
                    attempted && !passwordsMatch ? "has-error" : ""
                  }`}
                >
                  <LockKeyhole size={17} />
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(event) =>
                      setConfirmPassword(event.target.value)
                    }
                    required
                    minLength={8}
                    aria-invalid={
                      attempted && !passwordsMatch ? true : undefined
                    }
                  />
                  <button
                    type="button"
                    className="reset-eye-button"
                    onClick={() =>
                      setShowConfirmPassword((value) => !value)
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirmation password"
                        : "Show confirmation password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>

                {confirmPassword.length > 0 && (
                  <p
                    className={`reset-match-message ${
                      passwordsMatch ? "is-valid" : "is-invalid"
                    }`}
                  >
                    {passwordsMatch
                      ? "Passwords match."
                      : "Passwords do not match yet."}
                  </p>
                )}

                {attempted && (strength < 4 || !passwordsMatch) && (
                  <p className="reset-error-message" role="alert">
                    Please meet at least four password checks and make sure
                    both passwords match.
                  </p>
                )}

                <button
                  type="submit"
                  className="button button-primary reset-submit"
                >
                  Reset password <ArrowRight size={17} />
                </button>
              </form>

              <div className="reset-security-note">
                <ShieldCheck size={17} />
                <span>
                  Never share your password with anyone. Infloro will never
                  ask you to reveal it.
                </span>
              </div>
            </>
          )}
        </section>

        <footer className="reset-footer">
          <span>Need help?</span>
          <Link href="/contact">Contact support</Link>
          <span className="reset-footer-dot">·</span>
          <Link href="/privacy-policy">Privacy</Link>
        </footer>
      </div>
    </main>
  );
}
