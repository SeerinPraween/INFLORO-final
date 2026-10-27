
"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowDownUp,
  ArrowRight,
  Bookmark,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  ExternalLink,
  Filter,
  Search,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Wallet,
  X,
} from "lucide-react";

type Opportunity = {
  id: number;
  brand: string;
  initials: string;
  title: string;
  description: string;
  category: string;
  commission: number;
  commissionType: string;
  cookie: string;
  averageOrder: number;
  earnings: string;
  platform: string[];
  payout: string;
  color: string;
  featured?: boolean;
  requirements: string[];
};

const opportunities: Opportunity[] = [
  {
    id: 1,
    brand: "Luma Beauty",
    initials: "LB",
    title: "Beauty & Skincare Affiliate Partner",
    description:
      "Introduce skincare essentials to an audience that loves thoughtful routines, product education, and honest recommendations.",
    category: "Beauty",
    commission: 18,
    commissionType: "per qualifying sale",
    cookie: "30-day attribution",
    averageOrder: 1800,
    earnings: "₹324",
    platform: ["Instagram", "YouTube", "Blog"],
    payout: "Monthly",
    color: "rose",
    featured: true,
    requirements: [
      "Create beauty, skincare, or lifestyle content.",
      "Provide authentic product recommendations.",
      "Use the assigned tracking link or code.",
      "Follow applicable advertising disclosure rules.",
    ],
  },
  {
    id: 2,
    brand: "Form & Flow",
    initials: "FF",
    title: "Fitness & Wellness Creator Program",
    description:
      "Partner around training essentials, wellness products, and practical routines for an active community.",
    category: "Fitness",
    commission: 15,
    commissionType: "per qualifying sale",
    cookie: "30-day attribution",
    averageOrder: 2400,
    earnings: "₹360",
    platform: ["Instagram", "YouTube"],
    payout: "Monthly",
    color: "mint",
    requirements: [
      "Publish fitness, wellness, or movement-related content.",
      "Share clear product information.",
      "Use approved tracking links.",
      "Avoid unsupported medical or health claims.",
    ],
  },
  {
    id: 3,
    brand: "PixelNest",
    initials: "PN",
    title: "Creator Tools & Digital Products",
    description:
      "Recommend useful digital tools, templates, and creative resources to your design and creator audience.",
    category: "Technology",
    commission: 25,
    commissionType: "per qualifying sale",
    cookie: "45-day attribution",
    averageOrder: 1200,
    earnings: "₹300",
    platform: ["YouTube", "Blog", "Instagram"],
    payout: "Monthly",
    color: "blue",
    featured: true,
    requirements: [
      "Create educational, design, or technology content.",
      "Demonstrate products accurately.",
      "Disclose affiliate relationships.",
      "Respect program promotional guidelines.",
    ],
  },
  {
    id: 4,
    brand: "Everyday Edit",
    initials: "EE",
    title: "Fashion & Everyday Style Partners",
    description:
      "Share wearable outfit ideas, seasonal edits, and practical styling inspiration with your community.",
    category: "Fashion",
    commission: 12,
    commissionType: "per qualifying sale",
    cookie: "14-day attribution",
    averageOrder: 3200,
    earnings: "₹384",
    platform: ["Instagram", "YouTube"],
    payout: "Monthly",
    color: "peach",
    requirements: [
      "Create fashion or lifestyle content.",
      "Present products accurately.",
      "Use unique affiliate tracking.",
      "Comply with campaign and disclosure guidelines.",
    ],
  },
  {
    id: 5,
    brand: "Trail & Tide",
    initials: "TT",
    title: "Travel Gear & Outdoor Essentials",
    description:
      "Help travelers discover functional gear through destination guides, packing lists, and outdoor content.",
    category: "Travel",
    commission: 10,
    commissionType: "per qualifying sale",
    cookie: "30-day attribution",
    averageOrder: 4500,
    earnings: "₹450",
    platform: ["YouTube", "Blog", "Instagram"],
    payout: "Monthly",
    color: "gold",
    requirements: [
      "Publish travel, adventure, or outdoor content.",
      "Provide genuine product context.",
      "Track conversions through program links.",
      "Respect brand and platform requirements.",
    ],
  },
  {
    id: 6,
    brand: "The Pantry Lab",
    initials: "PL",
    title: "Food, Kitchen & Home Creators",
    description:
      "Bring kitchen tools, home essentials, and everyday food inspiration to audiences looking for practical ideas.",
    category: "Food",
    commission: 14,
    commissionType: "per qualifying sale",
    cookie: "30-day attribution",
    averageOrder: 1600,
    earnings: "₹224",
    platform: ["Instagram", "YouTube", "Blog"],
    payout: "Monthly",
    color: "mint",
    requirements: [
      "Create food, cooking, or home content.",
      "Use products in a relevant context.",
      "Provide honest recommendations.",
      "Use the assigned tracking links.",
    ],
  },
  {
    id: 7,
    brand: "LearnSpring",
    initials: "LS",
    title: "Education & Learning Resources",
    description:
      "Share courses, study resources, and learning tools with students and lifelong learners.",
    category: "Education",
    commission: 20,
    commissionType: "per qualifying sale",
    cookie: "60-day attribution",
    averageOrder: 2500,
    earnings: "₹500",
    platform: ["YouTube", "Blog", "Instagram"],
    payout: "Monthly",
    color: "purple",
    featured: true,
    requirements: [
      "Create education, career, or learning content.",
      "Describe course features accurately.",
      "Disclose affiliate relationships.",
      "Follow the partner program's content rules.",
    ],
  },
  {
    id: 8,
    brand: "Paw & Poppy",
    initials: "PP",
    title: "Pet Care & Lifestyle Partners",
    description:
      "Discover pet essentials and share helpful product recommendations with pet-loving communities.",
    category: "Pets",
    commission: 16,
    commissionType: "per qualifying sale",
    cookie: "30-day attribution",
    averageOrder: 1400,
    earnings: "₹224",
    platform: ["Instagram", "YouTube"],
    payout: "Monthly",
    color: "pink",
    requirements: [
      "Create pet-related or animal lifestyle content.",
      "Show products in an appropriate context.",
      "Use tracked referral links.",
      "Avoid misleading product claims.",
    ],
  },
];

const categories = [
  "All categories",
  "Beauty",
  "Fashion",
  "Fitness",
  "Technology",
  "Travel",
  "Food",
  "Education",
  "Pets",
];

const platforms = ["All platforms", "Instagram", "YouTube", "Blog"];

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export default function AffiliateOpportunitiesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [platform, setPlatform] = useState("All platforms");
  const [minimumCommission, setMinimumCommission] = useState("0");
  const [sortBy, setSortBy] = useState("featured");
  const [saved, setSaved] = useState<number[]>([]);
  const [selected, setSelected] = useState<Opportunity | null>(null);
  const [applying, setApplying] = useState<Opportunity | null>(null);
  const [creatorName, setCreatorName] = useState("");
  const [creatorEmail, setCreatorEmail] = useState("");
  const [creatorHandle, setCreatorHandle] = useState("");
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applications, setApplications] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [savedOnly, setSavedOnly] = useState(false);

  const filteredOpportunities = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    const result = opportunities.filter((item) => {
      const matchesSearch =
        !normalized ||
        item.title.toLowerCase().includes(normalized) ||
        item.brand.toLowerCase().includes(normalized) ||
        item.description.toLowerCase().includes(normalized) ||
        item.category.toLowerCase().includes(normalized);

      return (
        matchesSearch &&
        (category === "All categories" || item.category === category) &&
        (platform === "All platforms" || item.platform.includes(platform)) &&
        item.commission >= Number(minimumCommission) &&
        (!savedOnly || saved.includes(item.id))
      );
    });

    return [...result].sort((a, b) => {
      if (sortBy === "commission-high") return b.commission - a.commission;
      if (sortBy === "commission-low") return a.commission - b.commission;
      if (sortBy === "order-value") return b.averageOrder - a.averageOrder;
      if (sortBy === "name") return a.brand.localeCompare(b.brand);
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });
  }, [
    query,
    category,
    platform,
    minimumCommission,
    sortBy,
    saved,
    savedOnly,
  ]);

  function toggleSaved(id: number) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function openApplication(opportunity: Opportunity) {
    setSelected(null);
    setApplying(opportunity);
    setCreatorName("");
    setCreatorEmail("");
    setCreatorHandle("");
    setApplicationSubmitted(false);
  }

  function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!applying) return;

    setApplications((current) =>
      current.includes(applying.id) ? current : [...current, applying.id]
    );
    setApplicationSubmitted(true);
  }

  function resetFilters() {
    setQuery("");
    setCategory("All categories");
    setPlatform("All platforms");
    setMinimumCommission("0");
    setSortBy("featured");
    setSavedOnly(false);
  }

  return (
    <main className="affiliate-page">
      <section className="affiliate-hero">
        <div className="affiliate-hero-orbit affiliate-orbit-a" />
        <div className="affiliate-hero-orbit affiliate-orbit-b" />

        <div className="affiliate-hero-inner">
          <span className="eyebrow">
            <Sparkles size={15} /> THE INFLORO CREATOR MARKETPLACE
          </span>

          <h1>
            Your content.
            <br />
            <span className="gradient-text">Your next opportunity.</span>
          </h1>

          <p>
            Discover affiliate partnerships that fit your niche, connect
            products with the right audience, and explore new ways to earn.
          </p>

          <div className="affiliate-hero-search">
            <Search size={20} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search brands, niches, and opportunities..."
              aria-label="Search affiliate opportunities"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")}>
                Clear
              </button>
            )}
          </div>

          <div className="affiliate-hero-stats">
            <div>
              <strong>{opportunities.length}</strong>
              <span>Sample opportunities</span>
            </div>
            <div>
              <strong>10–25%</strong>
              <span>Illustrative commission range</span>
            </div>
            <div>
              <strong>8 niches</strong>
              <span>Explore your category</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section affiliate-marketplace">
        <div className="affiliate-heading">
          <div>
            <span className="eyebrow">OPPORTUNITIES FOR CREATORS</span>
            <h2>Find your next brand partnership.</h2>
            <p>
              Compare sample offers, review program details, and shortlist
              opportunities that match your content.
            </p>
          </div>

          <button
            type="button"
            className={`affiliate-saved-toggle ${savedOnly ? "active" : ""}`}
            onClick={() => setSavedOnly((value) => !value)}
          >
            <Bookmark size={16} />
            Saved offers
            <span>{saved.length}</span>
          </button>
        </div>

        <div className="affiliate-toolbar">
          <div className="affiliate-search-small">
            <Search size={16} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search opportunities..."
              aria-label="Search offers"
            />
          </div>

          <button
            type="button"
            className={`affiliate-mobile-filter ${showFilters ? "active" : ""}`}
            onClick={() => setShowFilters((value) => !value)}
          >
            <Filter size={15} /> Filters <ChevronDown size={15} />
          </button>

          <label className="affiliate-sort">
            <ArrowDownUp size={15} />
            <span>Sort by</span>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="commission-high">Highest commission</option>
              <option value="commission-low">Lowest commission</option>
              <option value="order-value">Average order value</option>
              <option value="name">Brand name</option>
            </select>
          </label>
        </div>

        <div className="affiliate-layout">
          <aside
            className={`affiliate-sidebar ${showFilters ? "is-open" : ""}`}
          >
            <div className="affiliate-sidebar-heading">
              <h3>Refine opportunities</h3>
              <button type="button" onClick={resetFilters}>Reset</button>
            </div>

            <div className="affiliate-filter-group">
              <label htmlFor="affiliate-category">Category</label>
              <select
                id="affiliate-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="affiliate-filter-group">
              <label htmlFor="affiliate-platform">Creator platform</label>
              <select
                id="affiliate-platform"
                value={platform}
                onChange={(event) => setPlatform(event.target.value)}
              >
                {platforms.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="affiliate-filter-group">
              <label htmlFor="affiliate-commission">
                Minimum commission
              </label>
              <select
                id="affiliate-commission"
                value={minimumCommission}
                onChange={(event) => setMinimumCommission(event.target.value)}
              >
                <option value="0">Any commission</option>
                <option value="10">10% or more</option>
                <option value="15">15% or more</option>
                <option value="20">20% or more</option>
                <option value="25">25% or more</option>
              </select>
            </div>

            <div className="affiliate-sidebar-note">
              <Sparkles size={17} />
              <div>
                <strong>Creator tip</strong>
                <p>
                  Compare commission percentage with product price,
                  conversion potential, and audience fit.
                </p>
              </div>
            </div>
          </aside>

          <div className="affiliate-results">
            <div className="affiliate-results-heading">
              <div>
                <strong>{filteredOpportunities.length} opportunities</strong>
                <span> Sample listings for demonstration</span>
              </div>
              <span className="affiliate-results-label">
                <span /> Marketplace preview
              </span>
            </div>

            {filteredOpportunities.length ? (
              <div className="affiliate-offer-grid">
                {filteredOpportunities.map((item) => (
                  <article className="affiliate-offer-card" key={item.id}>
                    <div className={`affiliate-offer-art affiliate-art-${item.color}`}>
                      <div className="affiliate-art-ring" />
                      <div className="affiliate-brand-mark">{item.initials}</div>
                      {item.featured && (
                        <span className="affiliate-featured-tag">
                          <Sparkles size={11} /> FEATURED
                        </span>
                      )}
                      <button
                        type="button"
                        className={`affiliate-bookmark ${
                          saved.includes(item.id) ? "is-saved" : ""
                        }`}
                        onClick={() => toggleSaved(item.id)}
                        aria-label={
                          saved.includes(item.id)
                            ? "Remove from saved"
                            : "Save opportunity"
                        }
                      >
                        {saved.includes(item.id) ? (
                          <Check size={16} />
                        ) : (
                          <Bookmark size={16} />
                        )}
                      </button>
                    </div>

                    <div className="affiliate-offer-content">
                      <div className="affiliate-brand-line">
                        <span>{item.brand}</span>
                        <span className="affiliate-verified">
                          <CheckCircle2 size={13} /> Demo
                        </span>
                      </div>

                      <h3>{item.title}</h3>
                      <p className="affiliate-offer-description">
                        {item.description}
                      </p>

                      <div className="affiliate-platform-tags">
                        {item.platform.map((itemPlatform) => (
                          <span key={itemPlatform}>{itemPlatform}</span>
                        ))}
                      </div>

                      <div className="affiliate-commission-panel">
                        <div>
                          <span>COMMISSION</span>
                          <strong>{item.commission}%</strong>
                          <small>{item.commissionType}</small>
                        </div>
                        <div className="affiliate-commission-divider" />
                        <div>
                          <span>EST. PER ORDER</span>
                          <strong>{item.earnings}</strong>
                          <small>Illustrative estimate</small>
                        </div>
                      </div>

                      <div className="affiliate-offer-details">
                        <span><Clock3 size={13} /> {item.cookie}</span>
                        <span><Wallet size={13} /> {item.payout} payout</span>
                      </div>

                      <div className="affiliate-offer-actions">
                        <button
                          type="button"
                          className="affiliate-view-button"
                          onClick={() => setSelected(item)}
                        >
                          Details <ExternalLink size={14} />
                        </button>
                        <button
                          type="button"
                          className="button button-primary"
                          onClick={() => openApplication(item)}
                        >
                          {applications.includes(item.id)
                            ? "Applied"
                            : "Apply now"}
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="affiliate-empty">
                <ShoppingBag size={29} />
                <h3>No matching opportunities</h3>
                <p>
                  Try adjusting your category, platform, commission, or search
                  terms.
                </p>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={resetFilters}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section affiliate-how-section">
        <div className="affiliate-how-heading">
          <span className="eyebrow">HOW AFFILIATE PARTNERSHIPS WORK</span>
          <h2>From discovery to commission.</h2>
          <p>A simple framework for getting started with affiliate offers.</p>
        </div>

        <div className="affiliate-steps">
          <article>
            <span className="affiliate-step-number">01</span>
            <div className="affiliate-step-icon"><Search size={22} /></div>
            <h3>Find your fit</h3>
            <p>
              Choose offers relevant to your niche, content, and audience.
            </p>
          </article>
          <article>
            <span className="affiliate-step-number">02</span>
            <div className="affiliate-step-icon"><CheckCircle2 size={22} /></div>
            <h3>Apply to partner</h3>
            <p>
              Share your creator profile and review the program's terms.
            </p>
          </article>
          <article>
            <span className="affiliate-step-number">03</span>
            <div className="affiliate-step-icon"><TrendingUp size={22} /></div>
            <h3>Share and measure</h3>
            <p>
              Use tracking links, disclose affiliate relationships, and review
              results.
            </p>
          </article>
        </div>
      </section>

      <section className="section affiliate-bottom-section">
        <div className="affiliate-bottom-card">
          <div className="affiliate-bottom-icon"><Sparkles size={24} /></div>
          <div>
            <span className="eyebrow">YOUR NEXT COLLABORATION</span>
            <h2>Find brands that fit your creative voice.</h2>
            <p>
              Explore other creator opportunities and discover new ways to
              collaborate with brands.
            </p>
          </div>
          <a href="/creator-marketplace" className="button button-primary">
            Explore marketplace <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {selected && (
        <div
          className="affiliate-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <section
            className="affiliate-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="affiliate-detail-title"
          >
            <div className={`affiliate-modal-banner affiliate-art-${selected.color}`}>
              <button
                type="button"
                className="affiliate-modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close details"
              >
                <X size={19} />
              </button>
              <div className="affiliate-brand-mark">{selected.initials}</div>
              <div>
                <span className="eyebrow">AFFILIATE OPPORTUNITY</span>
                <h2>{selected.brand}</h2>
              </div>
            </div>

            <div className="affiliate-modal-content">
              <span className="affiliate-modal-category">{selected.category}</span>
              <h3 id="affiliate-detail-title">{selected.title}</h3>
              <p>{selected.description}</p>

              <div className="affiliate-modal-stats">
                <div>
                  <span>Commission</span>
                  <strong>{selected.commission}%</strong>
                </div>
                <div>
                  <span>Average order</span>
                  <strong>{formatCurrency(selected.averageOrder)}</strong>
                </div>
                <div>
                  <span>Est. commission</span>
                  <strong>{selected.earnings}</strong>
                </div>
              </div>

              <div className="affiliate-modal-info">
                <div>
                  <Clock3 size={16} />
                  <span>Attribution window</span>
                  <strong>{selected.cookie}</strong>
                </div>
                <div>
                  <Wallet size={16} />
                  <span>Payout frequency</span>
                  <strong>{selected.payout}</strong>
                </div>
              </div>

              <h4>Partner expectations</h4>
              <ul className="affiliate-requirements">
                {selected.requirements.map((requirement) => (
                  <li key={requirement}>
                    <CheckCircle2 size={16} /> {requirement}
                  </li>
                ))}
              </ul>

              <p className="affiliate-disclaimer">
                All brands, commission rates, attribution windows, and earnings
                in this page are illustrative demo data—not verified live offers.
                Actual program terms would need confirmation from each brand.
              </p>

              <div className="affiliate-modal-actions">
                <button
                  type="button"
                  className="button button-quiet"
                  onClick={() => toggleSaved(selected.id)}
                >
                  <Bookmark size={15} />
                  {saved.includes(selected.id) ? "Saved" : "Save offer"}
                </button>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => openApplication(selected)}
                >
                  {applications.includes(selected.id) ? "Apply again" : "Apply now"}
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {applying && (
        <div
          className="affiliate-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setApplying(null);
          }}
        >
          <section
            className="affiliate-application-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="affiliate-application-title"
          >
            <div className="affiliate-application-header">
              <div className="affiliate-application-icon">
                <ShoppingBag size={23} />
              </div>
              <button
                type="button"
                className="affiliate-modal-close"
                onClick={() => setApplying(null)}
                aria-label="Close application"
              >
                <X size={19} />
              </button>
              <span className="eyebrow">CREATOR APPLICATION</span>
              <h2 id="affiliate-application-title">Let's make it a match.</h2>
              <p>
                Apply to <strong>{applying.brand}</strong> — {applying.title}
              </p>
            </div>

            {applicationSubmitted ? (
              <div className="affiliate-application-success">
                <CheckCircle2 size={39} />
                <h3>Demo application submitted</h3>
                <p>
                  Your sample application for {applying.brand} is complete.
                  This demonstration does not send your details to a brand or
                  save them to a server.
                </p>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => setApplying(null)}
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                className="affiliate-application-form"
                onSubmit={submitApplication}
              >
                <label>
                  Creator name
                  <input
                    required
                    autoComplete="name"
                    value={creatorName}
                    onChange={(event) => setCreatorName(event.target.value)}
                    placeholder="Your full name"
                  />
                </label>
                <label>
                  Email address
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    value={creatorEmail}
                    onChange={(event) => setCreatorEmail(event.target.value)}
                    placeholder="you@example.com"
                  />
                </label>
                <label>
                  Primary creator handle or profile URL
                  <input
                    required
                    value={creatorHandle}
                    onChange={(event) => setCreatorHandle(event.target.value)}
                    placeholder="@yourhandle or profile URL"
                  />
                </label>

                <div className="affiliate-application-note">
                  <CheckCircle2 size={15} />
                  <span>
                    Review the program requirements before applying. Approval
                    and commission terms depend on the actual partner program.
                  </span>
                </div>

                <button
                  type="submit"
                  className="button button-primary affiliate-submit-button"
                >
                  Submit demo application <ArrowRight size={16} />
                </button>
                <p className="affiliate-form-disclaimer">
                  Frontend demonstration only. No email is sent and no personal
                  details are stored on a server.
                </p>
              </form>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
