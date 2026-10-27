import Link from "next/link";
import { ArrowRight, ArrowUpRight, BarChart3, Check, HeartHandshake, Search, Sparkles, UsersRound, Workflow, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Search,
    title: "AI-powered creator discovery",
    description: "Shortlist creators by audience fit, niche, platform, and campaign goals—not just follower count.",
    href: "/features/creator-discovery",
    label: "Find your fit",
  },
  {
    icon: HeartHandshake,
    title: "Outreach & creator CRM",
    description: "Keep creator profiles, outreach, follow-ups, and relationship history organized in one workspace.",
    href: "/features/creator-crm",
    label: "Build relationships",
  },
  {
    icon: Workflow,
    title: "Qualification & deal management",
    description: "Track every collaboration from first reply to negotiation, confirmation, and campaign handoff.",
    href: "/features/deal-management",
    label: "Move deals forward",
  },
];

function CreatorDashboard() {
  return (
    <div className="visual-stage" aria-label="Illustration of the Infloro creator marketing dashboard">
      <div className="orbit" />
      <div className="glow" />
      <div className="float-card float-card-top">
        <b><span className="float-icon"><Sparkles size={13} /></span>AI match found</b>
        <span>92% audience fit</span>
      </div>
      <div className="dashboard">
        <div className="dash-top">
          <div className="dash-brand"><span className="dash-mark">i.</span> Creator workspace</div>
          <span className="live-pill">● LIVE OVERVIEW</span>
        </div>
        <h2 className="dash-heading">Campaign overview</h2>
        <div className="dash-sub">Your creator pipeline at a glance</div>
        <div className="dash-stats">
          <div className="stat"><label>Creators found</label><strong>248</strong><small>↗ 18.4%</small></div>
          <div className="stat"><label>In discussion</label><strong>36</strong><small>↗ 12.8%</small></div>
          <div className="stat"><label>Match rate</label><strong>92%</strong><small>↗ 8.2%</small></div>
        </div>
        <div className="creator-list">
          <div className="creator-row">
            <div className="creator-face">AM</div>
            <div className="creator-meta"><strong>Alex Morgan</strong><span>Lifestyle · 84K followers</span></div>
            <span className="match">96% fit</span>
          </div>
          <div className="creator-row">
            <div className="creator-face" style={{ background: "linear-gradient(135deg,#d4f0df,#b5c6ff)" }}>SJ</div>
            <div className="creator-meta"><strong>Sam Jordan</strong><span>Beauty · 112K followers</span></div>
            <span className="match">93% fit</span>
          </div>
          <div className="creator-row">
            <div className="creator-face" style={{ background: "linear-gradient(135deg,#ffe0bc,#f3b7d9)" }}>RK</div>
            <div className="creator-meta"><strong>Riley Kim</strong><span>Wellness · 62K followers</span></div>
            <span className="match">91% fit</span>
          </div>
        </div>
      </div>
      <div className="float-card float-card-bottom">
        <b><span className="float-icon"><Check size={13} /></span>Follow-up scheduled</b>
        <span>Creator relationship · Just now</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div>
            <div className="eyebrow reveal"><span className="eyebrow-dot" /> One workspace. Better partnerships.</div>
            <h1 className="reveal delay-1">Creator marketing,<br />without the <span className="gradient-text">chaos.</span></h1>
            <p className="hero-copy reveal delay-2">
              Discover the right creators, build genuine relationships, and move every collaboration forward—all from one beautifully connected workspace.
            </p>
            <div className="hero-actions reveal delay-2">
              <Link href="/get-started" className="button button-primary">Get started for free <ArrowRight size={15} /></Link>
              <Link href="/book-a-demo" className="button button-quiet">Book a demo <ArrowUpRight size={15} /></Link>
            </div>
            <div className="trust-row reveal delay-2">
              <div className="avatar-stack" aria-hidden="true">
                <span className="avatar">MK</span><span className="avatar">AJ</span><span className="avatar">SR</span><span className="avatar">+ </span>
              </div>
              <span><strong>Built for better collaboration</strong><br />From first discovery to lasting partnerships</span>
            </div>
          </div>
          <CreatorDashboard />
        </section>

        <section className="section center" id="platform">
          <div className="section-inner">
            <div className="eyebrow"><span className="eyebrow-dot" /> Your creator workflow, connected</div>
            <h2>Less spreadsheet juggling.<br /><span className="gradient-text">More meaningful growth.</span></h2>
            <p className="section-intro">Infloro brings discovery, communication, and deal tracking together, so your team can focus on the partnerships that move your brand forward.</p>
            <div className="feature-grid">
              {features.map(({ icon: Icon, title, description, href, label }) => (
                <article className="feature-card" key={title}>
                  <div className="feature-icon"><Icon size={20} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Link href={href}>{label} <ArrowRight size={13} /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner bottom-cta">
            <div>
              <div className="eyebrow"><Zap size={13} /> Make every creator connection count</div>
              <h2>Ready to work smarter with creators?</h2>
              <p>Bring your creator pipeline into focus and give your next campaign a stronger start.</p>
            </div>
            <Link href="/book-a-demo" className="button button-primary">Let’s talk <ArrowUpRight size={15} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
