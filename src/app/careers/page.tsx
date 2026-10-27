
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  HeartHandshake,
  Megaphone,
  Palette,
  Users,
  CheckCircle2,
  Sparkles,
  Send,
} from "lucide-react";

const careerAreas = [
  {
    icon: Code2,
    title: "Engineering & Product",
    description:
      "Build thoughtful products, scalable systems, and AI-powered tools for creator marketing.",
    skills: ["Full-stack development", "AI & data", "Product engineering"],
  },
  {
    icon: Palette,
    title: "Design & Experience",
    description:
      "Create intuitive experiences that make creator discovery and collaboration feel effortless.",
    skills: ["UI/UX design", "Product design", "Brand systems"],
  },
  {
    icon: Megaphone,
    title: "Marketing & Growth",
    description:
      "Help brands and creators discover new possibilities through meaningful campaigns.",
    skills: ["Content strategy", "Growth marketing", "SEO"],
  },
  {
    icon: HeartHandshake,
    title: "Partnerships & Success",
    description:
      "Build lasting relationships with brands, agencies, and creators on our platform.",
    skills: ["Customer success", "Partnerships", "Community"],
  },
];

const values = [
  {
    number: "01",
    title: "Build with purpose",
    description:
      "Focus on solving real problems and creating meaningful value for the people who use our products.",
  },
  {
    number: "02",
    title: "Stay curious",
    description:
      "Keep learning, challenge assumptions, and explore better ways to work.",
  },
  {
    number: "03",
    title: "Own the outcome",
    description:
      "Take responsibility, communicate clearly, and follow through on commitments.",
  },
  {
    number: "04",
    title: "Grow together",
    description:
      "Share knowledge, respect different perspectives, and celebrate collective progress.",
  },
];

export default function CareersPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    area: "Engineering & Product",
    portfolio: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="careers-page">
      <section className="careers-hero">
        <div className="careers-orb careers-orb-one" />
        <div className="careers-orb careers-orb-two" />

        <div className="careers-hero-inner">
          <div className="careers-hero-copy">
            <span className="eyebrow">
              <Sparkles size={15} /> CAREERS AT INFLORO
            </span>

            <h1>
              Do meaningful work.
              <br />
              <span className="gradient-text">Shape what&apos;s next.</span>
            </h1>

            <p>
              We&apos;re building a better way for brands, agencies, and
              creators to work together. Bring your ideas, curiosity, and
              ambition to the journey.
            </p>

            <div className="careers-hero-actions">
              <a href="#career-areas" className="button button-primary">
                Explore career areas <ArrowRight size={17} />
              </a>
              <a href="#express-interest" className="button button-quiet">
                Introduce yourself
              </a>
            </div>

            <div className="careers-hero-note">
              <Users size={17} />
              <span>Different perspectives. One shared mission.</span>
            </div>
          </div>

          <div className="careers-visual">
            <div className="careers-visual-card">
              <div className="careers-visual-top">
                <div>
                  <span className="careers-mini-label">THE INFLORO MINDSET</span>
                  <h3>Good work starts with good people.</h3>
                </div>
                <div className="careers-sparkle">
                  <Sparkles size={24} />
                </div>
              </div>

              <div className="careers-principle">
                <span>01</span>
                <div>
                  <strong>Think boldly</strong>
                  <p>Question the usual. Explore the possible.</p>
                </div>
              </div>

              <div className="careers-principle">
                <span>02</span>
                <div>
                  <strong>Build thoughtfully</strong>
                  <p>Make every detail count.</p>
                </div>
              </div>

              <div className="careers-principle">
                <span>03</span>
                <div>
                  <strong>Grow together</strong>
                  <p>Make progress a team effort.</p>
                </div>
              </div>

              <div className="careers-visual-footer">
                <span className="careers-status-dot" />
                <span>Curiosity is always welcome</span>
              </div>
            </div>

            <div className="careers-floating-card">
              <Sparkles size={18} />
              <div>
                <strong>Your next chapter</strong>
                <span>Could start with a conversation.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="careers-section section" id="career-areas">
        <div className="careers-section-heading">
          <div>
            <span className="eyebrow">FIND YOUR SPACE</span>
            <h2>
              Where could you <span className="gradient-text">make a mark?</span>
            </h2>
          </div>
          <p>
            Explore the kinds of work that help bring the Infloro vision to
            life. These are areas of interest, not confirmed open vacancies.
          </p>
        </div>

        <div className="careers-area-grid">
          {careerAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article className="careers-area-card" key={area.title}>
                <div className="careers-area-icon">
                  <Icon size={23} />
                </div>

                <h3>{area.title}</h3>
                <p>{area.description}</p>

                <div className="careers-skill-list">
                  {area.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <button
                  type="button"
                  className="careers-area-link"
                  onClick={() => {
                    setForm((previous) => ({
                      ...previous,
                      area: area.title,
                    }));
                    document
                      .getElementById("express-interest")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Express interest <ArrowRight size={16} />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="careers-values-section">
        <div className="careers-values-inner">
          <div className="careers-values-intro">
            <span className="eyebrow">WHAT GUIDES US</span>
            <h2>
              The work matters.
              <br />
              <span className="gradient-text">How we work matters too.</span>
            </h2>
            <p>
              We believe great outcomes come from thoughtful decisions,
              shared ownership, and a willingness to keep improving.
            </p>
            <Link href="/about" className="button button-quiet">
              Get to know Infloro <ArrowRight size={17} />
            </Link>
          </div>

          <div className="careers-values-list">
            {values.map((value) => (
              <article className="careers-value-item" key={value.number}>
                <span className="careers-value-number">{value.number}</span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-interest-section section" id="express-interest">
        <div className="careers-interest-grid">
          <div className="careers-interest-copy">
            <span className="eyebrow">LET&apos;S CONNECT</span>
            <h2>
              Don&apos;t see the right role?
              <br />
              <span className="gradient-text">Start a conversation.</span>
            </h2>
            <p>
              Tell us a little about yourself, what you enjoy building, and
              where you think you could contribute. We can&apos;t promise an
              opening, but we welcome thoughtful introductions.
            </p>

            <div className="careers-interest-point">
              <CheckCircle2 size={19} />
              <span>Share your interests and strengths.</span>
            </div>
            <div className="careers-interest-point">
              <CheckCircle2 size={19} />
              <span>Include a portfolio or professional profile if available.</span>
            </div>
            <div className="careers-interest-point">
              <CheckCircle2 size={19} />
              <span>Help us understand the kind of work you want to do.</span>
            </div>
          </div>

          <div className="careers-form-card">
            {submitted ? (
              <div className="careers-success">
                <div className="careers-success-icon">
                  <CheckCircle2 size={31} />
                </div>
                <h3>Thanks for introducing yourself!</h3>
                <p>
                  Your form was validated in this demo. No information has
                  been sent or saved. Connect a backend or form service to
                  receive real applications.
                </p>
                <button
                  className="button button-primary"
                  onClick={() => setSubmitted(false)}
                  type="button"
                >
                  Back to form
                </button>
              </div>
            ) : (
              <>
                <div className="careers-form-heading">
                  <span className="careers-form-icon">
                    <BriefcaseBusiness size={21} />
                  </span>
                  <div>
                    <h3>Introduce yourself</h3>
                    <p>Tell us where you would like to contribute.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="careers-form">
                  <div className="careers-form-row">
                    <label>
                      Full name *
                      <input
                        required
                        value={form.name}
                        onChange={(event) =>
                          setForm({ ...form, name: event.target.value })
                        }
                        placeholder="Your name"
                      />
                    </label>

                    <label>
                      Email address *
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(event) =>
                          setForm({ ...form, email: event.target.value })
                        }
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>

                  <label>
                    Area of interest *
                    <select
                      required
                      value={form.area}
                      onChange={(event) =>
                        setForm({ ...form, area: event.target.value })
                      }
                    >
                      {careerAreas.map((area) => (
                        <option key={area.title} value={area.title}>
                          {area.title}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label>
                    Portfolio or LinkedIn URL
                    <input
                      type="url"
                      value={form.portfolio}
                      onChange={(event) =>
                        setForm({ ...form, portfolio: event.target.value })
                      }
                      placeholder="https://..."
                    />
                  </label>

                  <label>
                    Tell us about yourself *
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(event) =>
                        setForm({ ...form, message: event.target.value })
                      }
                      placeholder="What do you enjoy working on, and how could you contribute?"
                    />
                  </label>

                  <button
                    className="button button-primary careers-submit"
                    type="submit"
                  >
                    Submit interest <Send size={16} />
                  </button>

                  <p className="careers-form-disclaimer">
                    Demo form only. Submission does not send your information
                    to Infloro.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="careers-bottom">
        <div>
          <span className="eyebrow">BUILD WHAT&apos;S NEXT</span>
          <h2>Great ideas grow when people come together.</h2>
          <p>Explore what we&apos;re building and the people we serve.</p>
        </div>
        <Link href="/about" className="button button-primary">
          About Infloro <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}
