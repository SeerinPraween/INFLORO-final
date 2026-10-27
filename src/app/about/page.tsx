

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Heart,
  Lightbulb,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Users,
    number: "01",
    title: "People before processes",
    description:
      "Creator marketing is built on relationships. We believe technology should help people collaborate, communicate, and create together.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Clarity creates momentum",
    description:
      "Clear briefs, visible progress, and organized workflows help teams spend less time managing confusion and more time moving forward.",
  },
  {
    icon: Heart,
    number: "03",
    title: "Creativity deserves space",
    description:
      "Better operations give creators and marketing teams more room to focus on the ideas, stories, and experiences that matter.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Trust through transparency",
    description:
      "We value clear expectations, thoughtful collaboration, and honest communication throughout every partnership.",
  },
];

const principles = [
  {
    icon: Compass,
    title: "Start with the real problem",
    description:
      "Build around the needs of brands, agencies, and creators rather than adding complexity for its own sake.",
  },
  {
    icon: Network,
    title: "Connect the entire journey",
    description:
      "Treat discovery, relationships, campaign execution, and measurement as connected parts of one experience.",
  },
  {
    icon: Zap,
    title: "Make progress practical",
    description:
      "Focus on useful workflows that help teams understand what needs attention and what happens next.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-orbit about-orbit-one" />
        <div className="about-hero-orbit about-orbit-two" />

        <div className="section about-hero-grid">
          <div className="about-hero-copy">
            <div className="eyebrow">
              <Sparkles size={15} />
              THE STORY BEHIND INFLORO
            </div>

            <h1>
              Better connections.
              <br />
              <span className="gradient-text">Bigger possibilities.</span>
            </h1>

            <p>
              Creator marketing brings brands and creators together. INFLORO
              is being built to make those connections easier to discover,
              manage, and grow through more connected workflows.
            </p>

            <div className="about-hero-actions">
              <Link href="/creator-marketplace" className="button button-primary">
                Explore the platform <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="button button-quiet">
                Get in touch <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="about-hero-art">
            <div className="about-art-ring about-art-ring-one" />
            <div className="about-art-ring about-art-ring-two" />
            <div className="about-art-ring about-art-ring-three" />

            <div className="about-art-center">
              <span className="about-art-logo">I</span>
              <strong>INFLORO</strong>
              <small>Where connections grow</small>
            </div>

            <div className="about-art-node about-node-brand">
              <span><Target size={20} /></span>
              <div>
                <strong>Brands</strong>
                <small>Ideas & goals</small>
              </div>
            </div>

            <div className="about-art-node about-node-creator">
              <span><Users size={20} /></span>
              <div>
                <strong>Creators</strong>
                <small>Talent & stories</small>
              </div>
            </div>

            <div className="about-art-node about-node-campaign">
              <span><Workflow size={20} /></span>
              <div>
                <strong>Campaigns</strong>
                <small>Ideas in action</small>
              </div>
            </div>

            <div className="about-art-spark spark-one"><Sparkles size={18} /></div>
            <div className="about-art-spark spark-two"><Heart size={17} /></div>
          </div>
        </div>

        <div className="section about-hero-caption">
          <span>DISCOVERY</span>
          <span className="about-caption-line" />
          <span>COLLABORATION</span>
          <span className="about-caption-line" />
          <span>GROWTH</span>
        </div>
      </section>

      <section className="section about-mission-section">
        <div className="about-mission-label">
          <span className="about-mission-symbol"><Target size={23} /></span>
          <span className="eyebrow">OUR MISSION</span>
        </div>

        <div className="about-mission-content">
          <h2>
            Make creator marketing
            <br />
            <span className="gradient-text">feel more connected.</span>
          </h2>
          <p>
            Our mission is to help brands, agencies, and creators work together
            with greater clarity. By bringing important parts of creator
            marketing into a connected experience, INFLORO aims to make
            collaboration more organized and easier to navigate.
          </p>
          <p>
            The goal is not to replace the human side of partnerships. It is to
            give those relationships a better foundation to grow.
          </p>
        </div>
      </section>

      <section className="about-values-section">
        <div className="section">
          <div className="about-section-heading">
            <div className="eyebrow">WHAT GUIDES US</div>
            <h2>
              Built around what
              <br />
              <span className="gradient-text">actually matters.</span>
            </h2>
            <p>
              Our principles shape the experience we want to create for every
              person using INFLORO.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.number}>
                  <div className="about-value-top">
                    <span className="about-value-icon">
                      <Icon size={22} />
                    </span>
                    <span className="about-value-number">{value.number}</span>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                  <div className="about-value-bottom">
                    <span />
                    <span />
                    <span />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section about-vision-section">
        <div className="about-vision-visual">
          <div className="about-vision-glow" />
          <div className="about-vision-card">
            <div className="about-vision-card-top">
              <span className="about-vision-card-icon">
                <Network size={21} />
              </span>
              <span className="about-vision-label">THE BIGGER PICTURE</span>
            </div>

            <div className="about-vision-map">
              <div className="about-map-line map-line-one" />
              <div className="about-map-line map-line-two" />
              <div className="about-map-line map-line-three" />
              <div className="about-map-line map-line-four" />

              <div className="about-map-node map-node-one">
                <Users size={19} />
              </div>
              <div className="about-map-node map-node-two">
                <Target size={19} />
              </div>
              <div className="about-map-node map-node-three">
                <Heart size={19} />
              </div>
              <div className="about-map-node map-node-four">
                <Workflow size={19} />
              </div>

              <div className="about-map-center">
                <span><Sparkles size={22} /></span>
                <strong>Connected</strong>
                <strong>collaboration</strong>
              </div>
            </div>

            <div className="about-vision-card-bottom">
              <span>People</span>
              <span>Ideas</span>
              <span>Possibilities</span>
            </div>
          </div>
        </div>

        <div className="about-vision-copy">
          <div className="eyebrow">
            <Compass size={14} /> OUR VISION
          </div>
          <h2>
            A more connected
            <br />
            <span className="gradient-text">creator economy.</span>
          </h2>
          <p>
            We envision a creator marketing ecosystem where good ideas can find
            the right people, partnerships have clearer expectations, and teams
            can manage their work without losing sight of the creative purpose.
          </p>
          <p>
            INFLORO is working toward an experience that connects people,
            processes, and performance as creator marketing continues to evolve.
          </p>

          <Link href="/features/creator-discovery" className="about-inline-link">
            Explore creator discovery <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="about-principles-section">
        <div className="section">
          <div className="about-section-heading">
            <div className="eyebrow">HOW WE THINK</div>
            <h2>
              Principles that
              <br />
              <span className="gradient-text">shape the product.</span>
            </h2>
          </div>

          <div className="about-principles-grid">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <article className="about-principle-card" key={principle.title}>
                  <span className="about-principle-number">0{index + 1}</span>
                  <span className="about-principle-icon">
                    <Icon size={22} />
                  </span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="bottom-cta about-final-cta">
          <div className="eyebrow">
            <Sparkles size={14} /> LET'S BUILD BETTER CONNECTIONS
          </div>
          <h2>
            The next great
            <br />
            <span className="gradient-text">collaboration starts here.</span>
          </h2>
          <p>
            Whether you represent a brand, manage campaigns, or create content,
            discover how INFLORO can fit into your workflow.
          </p>
          <div className="about-hero-actions">
            <Link href="/get-started" className="button button-primary">
              Get started <ArrowRight size={17} />
            </Link>
            <Link href="/book-a-demo" className="button button-quiet">
              Book a demo <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
