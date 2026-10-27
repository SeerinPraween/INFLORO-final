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
            <Link href="/solutions/brands">Solutions</Link>
            <Link href="/creator-marketplace">Creator Marketplace</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/resources">Resources</Link>
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
