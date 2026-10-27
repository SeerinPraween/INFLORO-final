"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Compass,
  FileVideo,
  Heart,
  Search,
  SlidersHorizontal,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Opportunity = {
  id: number;
  brand: string;
  initials: string;
  title: string;
  category: string;
  type: "Brand Campaign" | "UGC Project" | "Affiliate";
  description: string;
  compensation: string;
  commission: number;
  platform: string;
  deadline: string;
  featured?: boolean;
  color: string;
  href: string;
};

const opportunities: Opportunity[] = [
  {
    id: 1,
    brand: "Luma Skin",
    initials: "LS",
    title: "Everyday skincare stories",
    category: "Beauty",
    type: "Brand Campaign",
    description:
      "Create relatable skincare content that highlights an everyday routine and authentic product experience.",
    compensation: "$450–$800",
    commission: 0,
    platform: "Instagram",
    deadline: "Sample brief",
    featured: true,
    color: "rose",
    href: "/creator-marketplace/brand-campaigns",
  },
  {
    id: 2,
    brand: "Forma Active",
    initials: "FA",
    title: "Move in your own way",
    category: "Fashion",
    type: "UGC Project",
    description:
      "Produce short-form lifestyle videos featuring versatile activewear in your own creative style.",
    compensation: "$300–$600",
    commission: 0,
    platform: "TikTok",
    deadline: "Sample brief",
    featured: true,
    color: "violet",
    href: "/creator-marketplace/ugc-projects",
  },
  {
    id: 3,
    brand: "Daily Ritual",
    initials: "DR",
    title: "Wellness routine partners",
    category: "Wellness",
    type: "Affiliate",
    description:
      "Share practical wellness recommendations with a community that values mindful daily habits.",
    compensation: "18% commission",
    commission: 18,
    platform: "Instagram",
    deadline: "Sample offer",
    featured: true,
    color: "green",
    href: "/creator-marketplace/affiliate-opportunities",
  },
  {
    id: 4,
    brand: "Pixel Pantry",
    initials: "PP",
    title: "Tools for your creative workflow",
    category: "Technology",
    type: "Brand Campaign",
    description:
      "Show how useful digital tools fit into a real creator workflow through a clear, engaging story.",
    compensation: "$700–$1,200",
    commission: 0,
    platform: "YouTube",
    deadline: "Sample brief",
    color: "blue",
    href: "/creator-marketplace/brand-campaigns",
  },
  {
    id: 5,
    brand: "Maison Earth",
    initials: "ME",
    title: "Small details, better living",
    category: "Lifestyle",
    type: "UGC Project",
    description:
      "Create product-focused videos that show thoughtful details, practical use, and everyday value.",
    compensation: "$250–$500",
    commission: 0,
    platform: "Instagram",
    deadline: "Sample brief",
    color: "amber",
    href: "/creator-marketplace/ugc-projects",
  },
  {
    id: 6,
    brand: "Glow Theory",
    initials: "GT",
    title: "Your glow, your routine",
    category: "Beauty",
    type: "Affiliate",
    description:
      "Recommend beauty essentials through content that feels natural to your audience and niche.",
    compensation: "22% commission",
    commission: 22,
    platform: "Instagram",
    deadline: "Sample offer",
    color: "pink",
    href: "/creator-marketplace/affiliate-opportunities",
  },
];

const categories = [
  "All categories",
  "Beauty",
  "Fashion",
  "Wellness",
  "Technology",
  "Lifestyle",
];

const opportunityTypes = [
  {
    icon: BriefcaseBusiness,
    title: "Brand campaigns",
    description:
      "Partner with brands on sponsored content, launches, and creative campaigns.",
    count: "Paid collaborations",
    href: "/creator-marketplace/brand-campaigns",
    color: "violet",
  },
  {
    icon: FileVideo,
    title: "UGC projects",
    description:
      "Create product videos, testimonials, demonstrations, and authentic content.",
    count: "Creative projects",
    href: "/creator-marketplace/ugc-projects",
    color: "pink",
  },
  {
    icon: CircleDollarSign,
    title: "Affiliate opportunities",
    description:
      "Explore commission-based offers and recommend products you believe in.",
    count: "Performance partnerships",
    href: "/creator-marketplace/affiliate-opportunities",
    color: "green",
  },
];

export default function CreatorMarketplacePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");
  const [type, setType] = useState("All opportunities");
  const [saved, setSaved] = useState<number[]>([]);
  const [savedOnly, setSavedOnly] = useState(false);
  const [sort, setSort] = useState("featured");

  const filteredOpportunities = useMemo(() => {
    const result = opportunities.filter((item) => {
      const query = search.toLowerCase().trim();
      const matchesSearch =
        !query ||
        `${item.brand} ${item.title} ${item.description} ${item.category} ${item.type}`
          .toLowerCase()
          .includes(query);

      return (
        matchesSearch &&
        (category === "All categories" || item.category === category) &&
        (type === "All opportunities" || item.type === type) &&
        (!savedOnly || saved.includes(item.id))
      );
    });

    if (sort === "brand") {
      result.sort((a, b) => a.brand.localeCompare(b.brand));
    } else if (sort === "commission") {
      result.sort((a, b) => b.commission - a.commission);
    } else {
      result.sort(
        (a, b) =>
          Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
      );
    }

    return result;
  }, [search, category, type, savedOnly, saved, sort]);

  function toggleSaved(id: number) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((value) => value !== id)
        : [...current, id],
    );
  }

  function resetFilters() {
    setSearch("");
    setCategory("All categories");
    setType("All opportunities");
    setSavedOnly(false);
    setSort("featured");
  }

  return (
    <>
      <Navbar />

      <main className="marketplace-home">
        <section className="marketplace-home-hero">
          <div className="marketplace-home-glow marketplace-home-glow-a" />
          <div className="marketplace-home-glow marketplace-home-glow-b" />

          <div className="marketplace-home-container marketplace-home-hero-grid">
            <div className="marketplace-home-copy">
              <div className="eyebrow marketplace-home-eyebrow">
                <Sparkles size={14} />
                THE INFLORO CREATOR MARKETPLACE
              </div>

              <h1>
                Create your next
                <br />
                <span className="gradient-text">great collaboration.</span>
              </h1>

              <p>
                Discover brand campaigns, UGC projects, and affiliate
                opportunities in one place. Find partnerships that fit
                your creativity, your niche, and your audience.
              </p>

              <div className="marketplace-home-actions">
                <a href="#marketplace-discover" className="button button-primary">
                  Discover opportunities <ArrowRight size={17} />
                </a>
                <a href="/creator-marketplace/how-it-works" className="button button-quiet">
                  How it works <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="marketplace-home-proof">
                <span><Check size={15} /> Explore different partnership types</span>
                <span><Check size={15} /> Find opportunities for your niche</span>
              </div>
            </div>

            <div className="marketplace-home-visual">
              <div className="marketplace-home-orbit marketplace-home-orbit-a" />
              <div className="marketplace-home-orbit marketplace-home-orbit-b" />

              <div className="marketplace-home-preview">
                <div className="marketplace-home-preview-top">
                  <div>
                    <span className="marketplace-home-overline">CREATOR WORKSPACE</span>
                    <h3>Your next opportunity</h3>
                  </div>
                  <span className="marketplace-home-preview-sparkle">
                    <Sparkles size={18} />
                  </span>
                </div>

                <div className="marketplace-home-preview-feature">
                  <div className="marketplace-home-preview-brand">
                    <span className="marketplace-home-brand-mark brand-rose">LS</span>
                    <div>
                      <strong>Luma Skin</strong>
                      <span>Beauty · Brand campaign</span>
                    </div>
                    <BadgeCheck size={17} />
                  </div>
                  <h4>Everyday skincare stories</h4>
                  <p>Authentic content. Creative freedom. A partnership built around your style.</p>
                  <div className="marketplace-home-preview-tags">
                    <span>Instagram</span>
                    <span>Short-form video</span>
                  </div>
                  <div className="marketplace-home-preview-bottom">
                    <div><span>Sample compensation</span><strong>$450–$800</strong></div>
                    <span className="marketplace-home-match"><Target size={13} /> Brand fit</span>
                  </div>
                </div>

                <div className="marketplace-home-preview-footer">
                  <div className="marketplace-home-mini-avatar">C</div>
                  <div>
                    <strong>Your creative journey</strong>
                    <span>Discover · Apply · Collaborate</span>
                  </div>
                  <ArrowUpRight size={17} />
                </div>
              </div>

              <div className="marketplace-home-float marketplace-home-float-top">
                <span className="marketplace-home-float-icon"><Compass size={18} /></span>
                <div><strong>Find your fit</strong><span>Explore your niche</span></div>
              </div>

              <div className="marketplace-home-float marketplace-home-float-bottom">
                <span className="marketplace-home-float-icon float-green"><TrendingUp size={18} /></span>
                <div><strong>Grow your network</strong><span>Build brand relationships</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="marketplace-home-type-section">
          <div className="marketplace-home-container">
            <div className="marketplace-home-section-heading">
              <div>
                <div className="eyebrow">WAYS TO COLLABORATE</div>
                <h2>
                  One marketplace. <span className="gradient-text">More possibilities.</span>
                </h2>
                <p>
                  Choose the partnership format that matches your creative
                  strengths and goals.
                </p>
              </div>
              <a href="/creator-marketplace/how-it-works" className="marketplace-home-text-link">
                See how it works <ArrowRight size={15} />
              </a>
            </div>

            <div className="marketplace-home-type-grid">
              {opportunityTypes.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    href={item.href}
                    className="marketplace-home-type-card"
                    key={item.title}
                  >
                    <div className="marketplace-home-type-top">
                      <span className={`marketplace-home-type-icon type-${item.color}`}>
                        <Icon size={23} />
                      </span>
                      <ArrowUpRight size={19} className="marketplace-home-type-arrow" />
                    </div>
                    <span className="marketplace-home-type-label">{item.count}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="marketplace-home-type-link">
                      Explore opportunities <ArrowRight size={15} />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section marketplace-home-discover" id="marketplace-discover">
          <div className="marketplace-home-container">
            <div className="marketplace-home-section-heading">
              <div>
                <div className="eyebrow">EXPLORE THE MARKETPLACE</div>
                <h2>
                  Opportunities worth <span className="gradient-text">a closer look.</span>
                </h2>
                <p>
                  Search sample opportunities and refine your results to
                  discover partnerships that interest you.
                </p>
              </div>
              <button
                type="button"
                className={`marketplace-home-saved-button ${savedOnly ? "is-active" : ""}`}
                onClick={() => setSavedOnly(!savedOnly)}
              >
                <Heart size={16} fill={savedOnly ? "currentColor" : "none"} />
                Saved ({saved.length})
              </button>
            </div>

            <div className="marketplace-home-filters">
              <label className="marketplace-home-search">
                <Search size={18} />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search brands, projects, or niches..."
                  aria-label="Search opportunities"
                />
                {search && (
                  <button type="button" onClick={() => setSearch("")} aria-label="Clear search">
                    <X size={15} />
                  </button>
                )}
              </label>

              <label className="marketplace-home-select">
                <SlidersHorizontal size={16} />
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  aria-label="Filter by category"
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
                <ChevronDown size={15} />
              </label>

              <label className="marketplace-home-select">
                <BriefcaseBusiness size={16} />
                <select
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                  aria-label="Filter by opportunity type"
                >
                  <option>All opportunities</option>
                  <option>Brand Campaign</option>
                  <option>UGC Project</option>
                  <option>Affiliate</option>
                </select>
                <ChevronDown size={15} />
              </label>

              <label className="marketplace-home-select marketplace-home-sort">
                <span className="marketplace-home-sort-label">Sort</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  aria-label="Sort opportunities"
                >
                  <option value="featured">Featured</option>
                  <option value="commission">Commission</option>
                  <option value="brand">Brand name</option>
                </select>
                <ChevronDown size={15} />
              </label>
            </div>

            <div className="marketplace-home-results-line">
              <span>{filteredOpportunities.length} sample opportunities</span>
              {(search || category !== "All categories" || type !== "All opportunities" || savedOnly) && (
                <button type="button" onClick={resetFilters}>Clear filters <X size={13} /></button>
              )}
            </div>

            {filteredOpportunities.length > 0 ? (
              <div className="marketplace-home-opportunity-grid">
                {filteredOpportunities.map((item) => (
                  <article className="marketplace-home-opportunity-card" key={item.id}>
                    <div className="marketplace-home-opportunity-top">
                      <span className={`marketplace-home-brand-mark brand-${item.color}`}>
                        {item.initials}
                      </span>
                      <button
                        type="button"
                        className={`marketplace-home-heart ${saved.includes(item.id) ? "is-saved" : ""}`}
                        onClick={() => toggleSaved(item.id)}
                        aria-label={saved.includes(item.id) ? `Unsave ${item.brand}` : `Save ${item.brand}`}
                      >
                        <Heart size={18} fill={saved.includes(item.id) ? "currentColor" : "none"} />
                      </button>
                    </div>

                    <div className="marketplace-home-brand-line">
                      <strong>{item.brand}</strong>
                      {item.featured && <span><Sparkles size={11} /> Featured</span>}
                    </div>

                    <div className="marketplace-home-opportunity-tags">
                      <span>{item.category}</span>
                      <span>{item.type}</span>
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <div className="marketplace-home-opportunity-info">
                      <div>
                        <span>{item.commission > 0 ? "Commission" : "Sample budget"}</span>
                        <strong>{item.compensation}</strong>
                      </div>
                      <div>
                        <span>Platform</span>
                        <strong>{item.platform}</strong>
                      </div>
                    </div>

                    <div className="marketplace-home-opportunity-footer">
                      <span><Clock3 size={14} /> {item.deadline}</span>
                      <a href={item.href}>View details <ArrowRight size={15} /></a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="marketplace-home-empty">
                <span><Search size={25} /></span>
                <h3>No opportunities found</h3>
                <p>Try another search or clear the filters to explore all sample opportunities.</p>
                <button type="button" className="button button-primary" onClick={resetFilters}>
                  Clear filters
                </button>
              </div>
            )}

            <p className="marketplace-home-disclaimer">
              These are illustrative sample listings. Brands, budgets, commissions,
              and campaign details are not live offers.
            </p>
          </div>
        </section>

        <section className="section marketplace-home-creator-section">
          <div className="marketplace-home-container marketplace-home-creator-grid">
            <div className="marketplace-home-creator-copy">
              <div className="eyebrow">BUILT AROUND YOUR CREATIVITY</div>
              <h2>
                Bring your ideas.
                <br />
                <span className="gradient-text">Find your people.</span>
              </h2>
              <p>
                Every creator has a different style and community. Start with
                opportunities that match your niche, then build relationships
                around creative work you are proud of.
              </p>
              <a href="/creator-marketplace/how-it-works" className="button button-primary">
                Learn how it works <ArrowRight size={16} />
              </a>
            </div>

            <div className="marketplace-home-benefits">
              <div className="marketplace-home-benefit">
                <span><Target size={20} /></span>
                <div><strong>Relevance first</strong><p>Explore opportunities that connect with your niche and content style.</p></div>
                <Check size={16} />
              </div>
              <div className="marketplace-home-benefit">
                <span><Users size={20} /></span>
                <div><strong>More ways to collaborate</strong><p>Browse campaigns, content projects, and affiliate partnerships.</p></div>
                <Check size={16} />
              </div>
              <div className="marketplace-home-benefit">
                <span><TrendingUp size={20} /></span>
                <div><strong>Room to grow</strong><p>Build your portfolio and strengthen your brand relationships over time.</p></div>
                <Check size={16} />
              </div>
            </div>
          </div>
        </section>

        <section className="marketplace-home-bottom-section">
          <div className="marketplace-home-container">
            <div className="marketplace-home-bottom-card">
              <div className="marketplace-home-bottom-glow" />
              <div className="marketplace-home-bottom-copy">
                <div className="eyebrow">YOUR NEXT COLLAB STARTS HERE</div>
                <h2>
                  Make room for your <span className="gradient-text">next big idea.</span>
                </h2>
                <p>
                  Explore opportunities, find a brand that fits, and take
                  your next step as a creator.
                </p>
                <a href="#marketplace-discover" className="button button-primary">
                  Explore opportunities <ArrowRight size={17} />
                </a>
              </div>
              <div className="marketplace-home-bottom-art">
                <div className="marketplace-home-bottom-circle"><Sparkles size={38} /></div>
                <span className="marketplace-home-bottom-bubble bubble-a"><Heart size={18} /></span>
                <span className="marketplace-home-bottom-bubble bubble-b"><BriefcaseBusiness size={18} /></span>
                <span className="marketplace-home-bottom-bubble bubble-c"><TrendingUp size={18} /></span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
