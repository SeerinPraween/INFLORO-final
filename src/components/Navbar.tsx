 "use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const featureLinks = [
  { title: "AI-Powered Creator Discovery", description: "Find creators who fit your brand, audience, and campaign.", href: "/features/creator-discovery" },
  { title: "Outreach & Creator CRM", description: "Keep creator conversations and relationships organized.", href: "/features/creator-crm" },
  { title: "Creator Qualification & Deal Management", description: "Move promising partnerships from interest to agreement.", href: "/features/deal-management" },
  { title: "Campaign Management", description: "Plan campaigns, assign creators, and track deliverables.", href: "/features/campaign-management" },
  { title: "UGC Content & Marketplace", description: "Manage content submissions, revisions, and approvals.", href: "/features/ugc-content" },
  { title: "Affiliate Marketing & Creator Commerce", description: "Organize creator promotions and eligible sales.", href: "/features/creator-commerce" },
  { title: "AI-Powered Analytics & Reports", description: "Understand available campaign performance data.", href: "/features/analytics" },
  { title: "Integrations & Automation", description: "Connect supported tools and streamline workflows.", href: "/features/integrations" },
];

export default function Navbar() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="announcement">
        <span>The smarter way to manage creator marketing.</span>
        <a href="#platform">Explore Infloro <span aria-hidden="true">→</span></a>
      </div>
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <Link href="/" className="brand" aria-label="Infloro home">
            <Image src="/infloro-logo.jpg" alt="" width={32} height={42} priority />
            <span>infloro</span>
          </Link>

          <div className="nav-links">
            <div className="nav-feature">
              <button className="nav-feature-trigger" type="button" aria-expanded={featuresOpen} onClick={() => setFeaturesOpen(!featuresOpen)}>
                Features <ChevronDown size={14} />
              </button>
              {featuresOpen && (
                <div className="dropdown">
                  {featureLinks.map((item) => (
                    <Link href={item.href} key={item.title} onClick={() => setFeaturesOpen(false)}>
                      <strong>{item.title}</strong><span>{item.description}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="nav-feature nav-menu-group"><Link href="/solutions/brands">Solutions <ChevronDown size={14} /></Link><div className="dropdown nav-hover-dropdown">{[["For Brands","/solutions/brands"],["For Agencies","/solutions/agencies"],["For Freelancers","/solutions/freelancers"],["For Enterprise","/solutions/enterprise"],["For Creators","/solutions/creators"]].map(([title,href]) => <Link href={href} key={href}><strong>{title}</strong></Link>)}</div></div>
            <div className="nav-feature nav-menu-group"><Link href="/creator-marketplace">Creator Marketplace <ChevronDown size={14} /></Link><div className="dropdown nav-hover-dropdown">{[["Discover Creator Opportunities","/creator-marketplace"],["Brand Campaigns","/creator-marketplace/brand-campaigns"],["UGC Projects","/creator-marketplace/ugc-projects"],["Affiliate Opportunities","/creator-marketplace/affiliate-opportunities"],["How It Works","/creator-marketplace/how-it-works"]].map(([title,href]) => <Link href={href} key={href}><strong>{title}</strong></Link>)}</div></div>
            <Link href="/pricing">Pricing</Link>
            <div className="nav-feature nav-menu-group"><Link href="/resources">Resources <ChevronDown size={14} /></Link><div className="dropdown nav-hover-dropdown">{[["Blog","/resources/blog"],["Guides & Tutorials","/resources/guides"],["Templates","/resources/templates"],["Case Studies","/resources/case-studies"],["Help Center","/resources/help-center"]].map(([title,href]) => <Link href={href} key={href}><strong>{title}</strong></Link>)}</div></div>
          </div>

          <div className="nav-actions">
            <Link className="login-link" href="/login">Log In</Link>
            <Link className="button button-quiet" href="/book-a-demo">Book a Demo <ArrowUpRight size={14} /></Link>
            <Link className="button button-primary" href="/get-started">Get Started <ArrowUpRight size={14} /></Link>
            <ThemeToggle />
            <button className="menu-button" type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
        {mobileOpen && (
          <div className="mobile-panel">
            <Link href="/features/creator-discovery" onClick={() => setMobileOpen(false)}>Features</Link>
            <Link href="/solutions/brands" onClick={() => setMobileOpen(false)}>Solutions</Link>
            <Link href="/creator-marketplace" onClick={() => setMobileOpen(false)}>Creator Marketplace</Link>
            <Link href="/pricing" onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link href="/resources" onClick={() => setMobileOpen(false)}>Resources</Link>
            <Link href="/login" onClick={() => setMobileOpen(false)}>Log In</Link>
            <Link href="/book-a-demo" onClick={() => setMobileOpen(false)}>Book a Demo</Link>
            <Link href="/get-started" onClick={() => setMobileOpen(false)}>Get Started →</Link>
          </div>
        )}
      </header>
    </>
  );
}
