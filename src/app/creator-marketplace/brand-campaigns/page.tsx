
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Heart,
  Search,
  Sparkles,
  Users,
  X,
  Instagram,
  Youtube,
  BriefcaseBusiness,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Campaign = {
  id: number;
  brand: string;
  title: string;
  category: string;
  platform: string;
  compensation: string;
  compensationType: "Paid" | "Product exchange" | "Commission";
  deadline: string;
  deliverables: string;
  description: string;
  initials: string;
  style: string;
  tags: string[];
};

const campaigns: Campaign[] = [
  {
    id: 1,
    brand: "Glow Theory",
    title: "Everyday skincare stories",
    category: "Beauty",
    platform: "Instagram",
    compensation: "₹12,000–₹25,000",
    compensationType: "Paid",
    deadline: "Nov 18, 2026",
    deliverables: "2 Reels + 3 Stories",
    description:
      "Create authentic short-form content showing how a skincare routine fits into everyday life. We value natural storytelling and clear product demonstrations.",
    initials: "GT",
    style: "campaign-rose",
    tags: ["Skincare", "Reels", "Lifestyle"],
  },
  {
    id: 2,
    brand: "Move Daily",
    title: "Make movement a habit",
    category: "Fitness",
    platform: "YouTube",
    compensation: "₹18,000–₹35,000",
    compensationType: "Paid",
    deadline: "Nov 22, 2026",
    deliverables: "1 Dedicated Video",
    description:
      "Partner on a fitness-focused campaign that makes movement feel achievable. Share your authentic training routine and practical advice.",
    initials: "MD",
    style: "campaign-green",
    tags: ["Wellness", "Fitness", "Video"],
  },
  {
    id: 3,
    brand: "Everyday Edit",
    title: "Your personal style guide",
    category: "Fashion",
    platform: "Instagram",
    compensation: "Product collaboration",
    compensationType: "Product exchange",
    deadline: "Nov 25, 2026",
    deliverables: "1 Reel + 2 Stories",
    description:
      "Create a styling story around versatile wardrobe essentials. Show your community how you make everyday pieces your own.",
    initials: "EE",
    style: "campaign-lilac",
    tags: ["Style", "Outfits", "Fashion"],
  },
  {
    id: 4,
    brand: "TechNest",
    title: "Technology that simplifies life",
    category: "Technology",
    platform: "YouTube",
    compensation: "₹20,000–₹45,000",
    compensationType: "Paid",
    deadline: "Dec 02, 2026",
    deliverables: "1 Review + 1 Short",
    description:
      "Produce a practical technology walkthrough highlighting useful features, real-world applications and your honest experience.",
    initials: "TN",
    style: "campaign-blue",
    tags: ["Gadgets", "Reviews", "Tech"],
  },
  {
    id: 5,
    brand: "Roam Local",
    title: "Discover somewhere new",
    category: "Travel",
    platform: "Instagram",
    compensation: "₹10,000–₹22,000",
    compensationType: "Paid",
    deadline: "Dec 06, 2026",
    deliverables: "1 Reel + 5 Photos",
    description:
      "Bring a destination to life with local discoveries, useful travel tips and engaging visual storytelling.",
    initials: "RL",
    style: "campaign-sunset",
    tags: ["Travel", "Destinations", "Reels"],
  },
  {
    id: 6,
    brand: "Kitchen Notes",
    title: "Simple recipes, real moments",
    category: "Food",
    platform: "Instagram",
    compensation: "Commission on sales",
    compensationType: "Commission",
    deadline: "Dec 10, 2026",
    deliverables: "2 Recipe Reels",
    description:
      "Create approachable recipe content featuring useful kitchen products and shareable ideas for home cooks.",
    initials: "KN",
    style: "campaign-peach",
    tags: ["Recipes", "Food", "Home"],
  },
];

const categories = [
  "All categories",
  "Beauty",
  "Fitness",
  "Fashion",
  "Technology",
  "Travel",
  "Food",
];

const faqs = [
  {
    question: "How do I apply to a campaign?",
    answer:
      "In a live marketplace, you would submit a creator profile and campaign application. This demo provides a frontend preview; applications are not sent to a brand yet.",
  },
  {
    question: "Are campaign payments guaranteed?",
    answer:
      "Compensation terms depend on each agreement. Always confirm deliverables, usage rights, timelines and payment conditions before accepting a partnership.",
  },
  {
    question: "Can smaller creators apply?",
    answer:
      "Campaign suitability can depend on niche, audience relevance, content quality and deliverables—not just follower count. Each brand sets its own criteria.",
  },
];

export default function BrandCampaignsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");
  const [platform, setPlatform] = useState("All platforms");
  const [compensationType, setCompensationType] = useState("All types");
  const [sort, setSort] = useState("deadline");
  const [saved, setSaved] = useState<number[]>([]);
  const [savedOnly, setSavedOnly] = useState(false);
  const [selected, setSelected] = useState<Campaign | null>(null);
  const [applied, setApplied] = useState<number[]>([]);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const filteredCampaigns = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = campaigns.filter((campaign) => {
      const matchesQuery =
        !query ||
        [
          campaign.brand,
          campaign.title,
          campaign.category,
          campaign.description,
          ...campaign.tags,
        ].some((value) => value.toLowerCase().includes(query));

      return (
        matchesQuery &&
        (category === "All categories" || campaign.category === category) &&
        (platform === "All platforms" || campaign.platform === platform) &&
        (compensationType === "All types" ||
          campaign.compensationType === compensationType) &&
        (!savedOnly || saved.includes(campaign.id))
      );
    });

    if (sort === "brand") result.sort((a, b) => a.brand.localeCompare(b.brand));
    if (sort === "compensation") {
      result.sort((a, b) =>
        a.compensationType.localeCompare(b.compensationType)
      );
    }

    return result;
  }, [search, category, platform, compensationType, sort, saved, savedOnly]);

  function clearFilters() {
    setSearch("");
    setCategory("All categories");
    setPlatform("All platforms");
    setCompensationType("All types");
    setSort("deadline");
    setSavedOnly(false);
  }

  function toggleSaved(id: number) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <>
      <Navbar />

      <main className="brand-campaigns-page">
        <section className="brand-campaigns-hero">
          <div className="brand-campaigns-hero-inner">
            <div>
              <span className="eyebrow">
                <Sparkles size={15} /> BRAND COLLABORATIONS
              </span>
              <h1>
                Your next brand
                <br />
                <span className="gradient-text">story starts here.</span>
              </h1>
              <p>
                Discover creative partnerships that fit your niche, content
                style and ambitions. Explore campaign briefs and find your next
                opportunity.
              </p>
              <div className="brand-campaigns-hero-actions">
                <a href="#campaign-list" className="button button-primary">
                  Explore campaigns <ArrowRight size={17} />
                </a>
                <Link href="/solutions/creators" className="button button-quiet">
                  Creator solutions
                </Link>
              </div>
              <div className="brand-campaigns-points">
                <span><Check size={15} /> Clear deliverables</span>
                <span><Check size={15} /> Different niches</span>
                <span><Check size={15} /> Multiple platforms</span>
              </div>
            </div>

            <div className="brand-campaigns-hero-art">
              <div className="brand-campaigns-art-orbit" />
              <div className="brand-campaigns-hero-card">
                <div className="brand-campaigns-card-heading">
                  <div>
                    <span>CAMPAIGN SPOTLIGHT</span>
                    <h3>Find your creative fit</h3>
                  </div>
                  <span className="brand-campaigns-sparkle"><Sparkles size={20} /></span>
                </div>
                <div className="brand-campaigns-spotlight-art">
                  <div className="brand-campaigns-spotlight-shape"><Heart size={37} /></div>
                  <span>CREATOR COLLABORATION</span>
                </div>
                <div className="brand-campaigns-spotlight-info">
                  <div className="brand-campaigns-brand-avatar">GT</div>
                  <div>
                    <strong>Glow Theory <BadgeCheck size={14} /></strong>
                    <span>Beauty · Instagram</span>
                  </div>
                  <span className="brand-campaigns-paid-pill">Paid</span>
                </div>
                <div className="brand-campaigns-spotlight-footer">
                  <div><span>Deliverables</span><strong>2 Reels + 3 Stories</strong></div>
                  <div><span>Campaign type</span><strong>Product storytelling</strong></div>
                </div>
              </div>
              <div className="brand-campaigns-floating">
                <BriefcaseBusiness size={19} />
                <div><strong>New possibilities</strong><span>Discover campaigns</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="brand-campaigns-stats">
          <div><strong>6</strong><span>Sample campaign briefs</span></div>
          <div><strong>6</strong><span>Creative categories</span></div>
          <div><strong>2</strong><span>Social platforms</span></div>
          <div><strong>3</strong><span>Compensation models</span></div>
        </section>

        <section className="section brand-campaigns-list-section" id="campaign-list">
          <div className="brand-campaigns-section-heading">
            <div>
              <span className="eyebrow">CAMPAIGNS TO EXPLORE</span>
              <h2>Find a brief that fits you.</h2>
              <p>Search the sample listings and narrow them down to your interests.</p>
            </div>
            <button
              type="button"
              className={`brand-campaigns-saved-toggle ${savedOnly ? "active" : ""}`}
              onClick={() => setSavedOnly(!savedOnly)}
            >
              <Heart size={16} fill={savedOnly ? "currentColor" : "none"} />
              Saved ({saved.length})
            </button>
          </div>

          <div className="brand-campaigns-filters">
            <label className="brand-campaigns-search">
              <Search size={17} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search campaigns, brands or tags..."
                aria-label="Search campaigns"
              />
              {search && (
                <button type="button" aria-label="Clear search" onClick={() => setSearch("")}>
                  <X size={15} />
                </button>
              )}
            </label>

            <label>
              <span>Category</span>
              <select value={category} onChange={(event) => setCategory(event.target.value)}>
                {categories.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>

            <label>
              <span>Platform</span>
              <select value={platform} onChange={(event) => setPlatform(event.target.value)}>
                <option>All platforms</option>
                <option>Instagram</option>
                <option>YouTube</option>
              </select>
            </label>

            <label>
              <span>Compensation</span>
              <select value={compensationType} onChange={(event) => setCompensationType(event.target.value)}>
                <option>All types</option>
                <option>Paid</option>
                <option>Product exchange</option>
                <option>Commission</option>
              </select>
            </label>

            <label>
              <span>Sort by</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="deadline">Upcoming deadlines</option>
                <option value="brand">Brand name</option>
                <option value="compensation">Compensation type</option>
              </select>
            </label>
          </div>

          <div className="brand-campaigns-results-row">
            <span>{filteredCampaigns.length} opportunities found</span>
            <button type="button" onClick={clearFilters}>Reset filters</button>
          </div>

          <div className="brand-campaigns-grid">
            {filteredCampaigns.map((campaign) => (
              <article className="brand-campaign-card" key={campaign.id}>
                <div className={`brand-campaign-art ${campaign.style}`}>
                  <span className="brand-campaign-category">{campaign.category}</span>
                  <button
                    type="button"
                    className={`brand-campaign-save ${saved.includes(campaign.id) ? "saved" : ""}`}
                    aria-label={saved.includes(campaign.id) ? "Remove saved campaign" : "Save campaign"}
                    aria-pressed={saved.includes(campaign.id)}
                    onClick={() => toggleSaved(campaign.id)}
                  >
                    <Heart size={18} fill={saved.includes(campaign.id) ? "currentColor" : "none"} />
                  </button>
                  <div className="brand-campaign-art-icon">
                    {campaign.platform === "Instagram" ? <Instagram size={35} /> : <Youtube size={35} />}
                  </div>
                  <span className="brand-campaign-art-label">{campaign.brand}</span>
                </div>

                <div className="brand-campaign-card-content">
                  <div className="brand-campaign-brand-row">
                    <div className="brand-campaign-brand-avatar">{campaign.initials}</div>
                    <div>
                      <strong>{campaign.brand} <BadgeCheck size={13} /></strong>
                      <span>{campaign.platform} campaign</span>
                    </div>
                    <span className={`brand-campaign-type ${campaign.compensationType.toLowerCase().replaceAll(" ", "-")}`}>
                      {campaign.compensationType}
                    </span>
                  </div>

                  <h3>{campaign.title}</h3>
                  <p>{campaign.description}</p>

                  <div className="brand-campaign-deliverables">
                    <span><FileVideo size={15} /> {campaign.deliverables}</span>
                    <span><CalendarDays size={15} /> Deadline: {campaign.deadline}</span>
                  </div>

                  <div className="brand-campaign-card-bottom">
                    <div>
                      <small>Compensation</small>
                      <strong>{campaign.compensation}</strong>
                    </div>
                    <button type="button" onClick={() => setSelected(campaign)}>
                      View brief <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredCampaigns.length === 0 && (
            <div className="brand-campaigns-empty">
              <Search size={27} />
              <h3>No matching campaigns</h3>
              <p>Try another keyword or reset your filters.</p>
              <button type="button" className="button button-primary" onClick={clearFilters}>Reset filters</button>
            </div>
          )}

          <p className="brand-campaigns-disclaimer">
            Demo only: all brand names, deadlines, briefs and compensation amounts are illustrative.
            No real campaign applications are submitted.
          </p>
        </section>

        <section className="section brand-campaigns-how">
          <div className="brand-campaigns-how-heading">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>From campaign brief to collaboration.</h2>
          </div>
          <div className="brand-campaigns-steps">
            <article><span>01</span><div><Search size={21} /></div><h3>Explore briefs</h3><p>Find campaigns that align with your niche and creative style.</p></article>
            <article><span>02</span><div><Users size={21} /></div><h3>Review the details</h3><p>Understand deliverables, timing, platform and compensation terms.</p></article>
            <article><span>03</span><div><HandshakeIcon /></div><h3>Connect with brands</h3><p>Apply through the live platform when campaign applications are enabled.</p></article>
          </div>
        </section>

        <section className="section brand-campaigns-faq-section">
          <div className="brand-campaigns-faq-layout">
            <div>
              <span className="eyebrow">GOOD TO KNOW</span>
              <h2>Before you apply.</h2>
              <p>Review the basics and make informed decisions about your partnerships.</p>
              <Link href="/creator-marketplace/how-it-works" className="button button-quiet">
                How the marketplace works <ArrowRight size={16} />
              </Link>
            </div>
            <div className="brand-campaigns-faq-list">
              {faqs.map((faq, index) => (
                <div className="brand-campaigns-faq-item" key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={faqOpen === index}
                    onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  >
                    {faq.question}
                    <ChevronDown size={18} className={faqOpen === index ? "rotated" : ""} />
                  </button>
                  {faqOpen === index && <p>{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section brand-campaigns-final">
          <div className="brand-campaigns-final-card">
            <div className="brand-campaigns-final-icon"><Sparkles size={23} /></div>
            <span className="eyebrow">YOUR NEXT COLLABORATION</span>
            <h2>Ready to find your next creative fit?</h2>
            <p>Join INFLORO and prepare to discover brand opportunities built around your strengths.</p>
            <Link href="/get-started" className="button button-primary">
              Create your account <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      {selected && (
        <div className="brand-campaign-modal-backdrop" onClick={() => setSelected(null)}>
          <section
            className="brand-campaign-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="brand-campaign-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="brand-campaign-modal-close" onClick={() => setSelected(null)} aria-label="Close campaign brief">
              <X size={20} />
            </button>
            <div className={`brand-campaign-modal-art ${selected.style}`}>
              <span>{selected.category}</span>
              <div>{selected.initials}</div>
            </div>
            <span className="eyebrow">CAMPAIGN BRIEF PREVIEW</span>
            <h2 id="brand-campaign-modal-title">{selected.title}</h2>
            <p className="brand-campaign-modal-brand">{selected.brand} · {selected.platform}</p>
            <p>{selected.description}</p>
            <div className="brand-campaign-modal-details">
              <div><span>Compensation</span><strong>{selected.compensation}</strong></div>
              <div><span>Deliverables</span><strong>{selected.deliverables}</strong></div>
              <div><span>Application deadline</span><strong>{selected.deadline}</strong></div>
              <div><span>Compensation model</span><strong>{selected.compensationType}</strong></div>
            </div>
            <div className="brand-campaign-tags">
              {selected.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            {applied.includes(selected.id) ? (
              <div className="brand-campaign-applied-note"><Check size={17} /> Demo application recorded in this page session.</div>
            ) : (
              <button
                type="button"
                className="button button-primary brand-campaign-apply"
                onClick={() => setApplied((current) => [...current, selected.id])}
              >
                Preview application <ArrowRight size={16} />
              </button>
            )}
            <p className="brand-campaign-modal-note">
              This is a frontend demo. This button does not send your information to a brand.
            </p>
          </section>
        </div>
      )}

      <Footer />
    </>
  );
}

function HandshakeIcon() {
  return <Users size={21} />;
}

function FileVideo() {
  return <BriefcaseBusiness size={15} />;
}
