import Link from "next/link";
import { ArrowRight, ArrowUpRight, BarChart3, Check, HeartHandshake, Search, Sparkles, UsersRound, Workflow, Zap } from "lucide-react";

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
      <main>
        <section className="hero">
          <div>
            <div className="eyebrow reveal"><span className="eyebrow-dot" /> AI-POWERED CREATOR MARKETING & COMMERCE PLATFORM</div>
            <h1 className="reveal delay-1">From Finding Creators to Final Deliverables.<br /><span className="gradient-text">Manage It All</span> with Infloro.</h1>
            <p className="hero-copy reveal delay-2">
              Discover the right creators, manage outreach, close collaborations, launch brand campaigns, coordinate content deliverables, and track performance—all from one connected platform. Infloro brings creator discovery, creator relationship management, campaign execution, UGC workflows, and affiliate commerce together, with AI assistance designed to make your workflow smarter and more efficient.
            </p>
            <div className="hero-actions reveal delay-2">
              <Link href="/get-started" className="button button-primary">Get Started <ArrowRight size={15} /></Link>
              <Link href="/book-a-demo" className="button button-quiet">Book a Demo <ArrowUpRight size={15} /></Link>
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

        <section className="section" id="problem"><div className="section-inner"><div className="eyebrow">THE PROBLEM</div><h2>Creator Marketing Shouldn’t Be a Puzzle of Disconnected Tools.</h2><p className="section-intro">Finding creators in one place, reaching out through Instagram, following up on WhatsApp, negotiating over email, tracking campaigns in spreadsheets, and collecting content through separate links creates unnecessary work. Infloro brings your creator marketing workflow together.</p><div className="feature-grid">{["Too much time spent searching for the right creators.","Outreach and follow-ups scattered across conversations.","No clear view of interested, negotiating, or confirmed creators.","Campaign briefs and deliverables difficult to coordinate.","Content revisions and approvals lost in chat threads.","Affiliate performance and commissions difficult to reconcile."].map((item)=><article className="feature-card" key={item}><p>{item}</p></article>)}</div></div></section>
        <section className="section"><div className="section-inner"><div className="eyebrow">THE COMPLETE CREATOR MARKETING FUNNEL</div><h2>One Connected Journey. Every Stage of Creator Marketing.</h2><p className="section-intro">From your first creator search to the final campaign report, Infloro helps you organize the work that moves creator partnerships forward.</p><div className="feature-grid">{[{title:"01. Discover — Find the Right Creators",body:"Find and shortlist creators based on campaign requirements, niche, platform, audience, location, and available profile information."},{title:"02. Reach Out — Start the Conversation",body:"Manage creator outreach across supported WhatsApp, Instagram, and email workflows. Track communication, responses, and follow-ups."},{title:"03. Qualify & Close — Turn Interest Into Partnerships",body:"Track creator responses, evaluate suitability, discuss commercial terms, and manage collaborations through confirmation."},{title:"04. Launch — Create and Manage Brand Campaigns",body:"Create campaigns, define creator requirements, share briefs, select collaborators, and organize campaign timelines."},{title:"05. Deliver — Manage Content From Brief to Approval",body:"Coordinate submissions, feedback, revisions, approvals, deadlines, and content usage rights."},{title:"06. Promote — Activate Affiliate & Creator Commerce",body:"Organize product promotions, supported tracking links or codes, eligible sales attribution, and commission records."},{title:"07. Measure & Grow — Learn From Your Results",body:"Review available creator, campaign, content, and commerce performance information to inform future decisions."}].map((item)=><article className="feature-card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div></section>
        <section className="section"><div className="section-inner"><div className="eyebrow">AI POWERS THE WORKFLOW</div><h2>More Than Creator Management. A Smarter Way to Work With Creators.</h2><p className="section-intro">AI should help your team spend less time on repetitive work and more time building valuable creator partnerships. Capabilities depend on what is implemented and enabled.</p><div className="feature-grid">{["AI-Powered Creator Discovery","AI-Assisted Outreach","AI-Assisted Campaign Planning","AI-Assisted Creator Qualification","AI-Assisted Content Workflows","AI-Assisted Performance Insights"].map(item=><article className="feature-card" key={item}><h3>{item}</h3><p>AI assistance supports the creator marketing workflow where the capability is available.</p></article>)}</div></div></section>
        <section className="section"><div className="section-inner"><div className="eyebrow">THREE WAYS TO GROW WITH INFLORO</div><h2>One Platform. Three Connected Growth Channels.</h2><div className="feature-grid">{[{title:"Creator Marketing Management",body:"Build and manage your creator network, organize outreach, qualify prospects, track negotiations, launch campaigns, and maintain relationships."},{title:"UGC Content Marketplace",body:"Connect brands and creators for content collaborations. Organize briefs, deliverables, submissions, revisions, approvals, and agreed compensation."},{title:"Affiliate & Creator Commerce",body:"Organize product promotions, creator partnerships, supported tracking links or codes, eligible sales attribution, and commission records."}].map(item=><article className="feature-card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div></section>
        <section className="section"><div className="section-inner"><div className="eyebrow">BUILT FOR YOUR TEAM</div><h2>Your Brand. Your Campaigns. Your Creator Network.</h2><p className="section-intro">Use Infloro to organize your creator pipeline, coordinate outreach, create campaigns, share briefs, manage deliverables, and track available performance information.</p><div className="feature-grid">{[{title:"For Brands",href:"/solutions/brands",body:"Discover creators, manage communication, create campaigns, coordinate UGC, and review reports."},{title:"For Agencies & Freelancers",href:"/solutions/agencies",body:"Coordinate client workspaces, creator relationships, deliverables, deadlines, and reporting."},{title:"For Creators",href:"/solutions/creators",body:"Discover opportunities, understand collaboration requirements, and manage agreed deliverables."}].map(item=><article className="feature-card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p><Link href={item.href}>Explore solution <ArrowRight size={13}/></Link></article>)}</div></div></section>
        <section className="section"><div className="section-inner"><div className="eyebrow">CONNECTED WORKFLOWS</div><h2>Your Creator Relationships Deserve More Than Scattered Chats.</h2><p className="section-intro">Infloro is designed to connect creator management with supported communication workflows, campaign execution, analytics, and integrations.</p><div className="feature-grid">{[{title:"Creator Communication",href:"/features/creator-crm",body:"Organize supported WhatsApp, Instagram, and email outreach workflows."},{title:"Campaign Management",href:"/features/campaign-management",body:"Manage campaign objectives, briefs, creator assignments, deliverables, and deadlines."},{title:"Analytics & Reporting",href:"/features/analytics",body:"Review available creator, campaign, content, click, conversion, and commission data."},{title:"Integrations & Automation",href:"/features/integrations",body:"Connect supported tools. Only show integrations as available when they are verified."}].map(item=><article className="feature-card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p><Link href={item.href}>Explore feature <ArrowRight size={13}/></Link></article>)}</div></div></section>
        <section className="section"><div className="section-inner"><div className="eyebrow">HOW INFLORO WORKS</div><h2>One Clear Process From Discovery to Growth.</h2><p className="section-intro">Discover → Connect → Qualify → Launch → Deliver → Measure</p><div className="feature-grid">{[{title:"1. Discover",body:"Find creators who fit your campaign requirements."},{title:"2. Connect",body:"Manage outreach and communication through supported channels."},{title:"3. Qualify",body:"Evaluate potential partners and track collaboration discussions."},{title:"4. Launch",body:"Create campaigns, assign creators, and share requirements."},{title:"5. Deliver",body:"Manage content, revisions, approvals, and deadlines."},{title:"6. Measure",body:"Review available campaign results and inform future activity."}].map(item=><article className="feature-card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div></section>
        <section className="section"><div className="section-inner"><div className="eyebrow">TRUST & PRODUCT PROOF</div><h2>Built Around the Work Creator Marketing Teams Actually Do.</h2><p className="section-intro">Demonstrate the actual Infloro product through creator discovery screens, CRM and pipeline views, campaign management, UGC workflows, affiliate tracking, and analytics dashboards.</p></div></section>
        <section className="section"><div className="section-inner"><div className="eyebrow">FAQ</div><h2>Frequently Asked Questions</h2><div className="feature-grid">{[{title:"What is Infloro?",body:"An AI-powered creator marketing and commerce platform designed to help teams manage discovery, outreach, campaigns, UGC workflows, affiliate commerce, and insights."},{title:"Can brands create campaigns?",body:"The campaign workflow is designed to let brands create campaigns, define requirements, coordinate creators, and track deliverables."},{title:"Does Infloro support WhatsApp, Instagram, and email?",body:"Messaging and data access depend on enabled integrations and official platform permissions."},{title:"Does Infloro guarantee sales or ROI?",body:"No. Outcomes depend on audience fit, content quality, execution, offer, and market conditions."}].map(item=><article className="feature-card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div></section>
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
    </>
  );
}
