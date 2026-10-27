
"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDollarSign,
  Copy,
  ExternalLink,
  MousePointerClick,
  Plus,
  Search,
  ShoppingBag,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

type OfferStatus = "Active" | "Scheduled" | "Paused";

type AffiliateOffer = {
  id: number;
  name: string;
  brand: string;
  category: string;
  code: string;
  commission: number;
  sales: number;
  clicks: number;
  revenue: number;
  creators: number;
  status: OfferStatus;
  expires: string;
};

const initialOffers: AffiliateOffer[] = [
  { id: 1, name: "Welcome to Solara", brand: "Solara Studio", category: "Fashion", code: "SOLARA15", commission: 15, sales: 184, clicks: 4260, revenue: 18400, creators: 18, status: "Active", expires: "2026-12-15" },
  { id: 2, name: "Glow & Save", brand: "Bloom Beauty", category: "Beauty", code: "GLOW20", commission: 12, sales: 263, clicks: 5810, revenue: 26300, creators: 24, status: "Active", expires: "2026-11-30" },
  { id: 3, name: "Explore More", brand: "Wanderly", category: "Travel", code: "WANDER10", commission: 10, sales: 96, clicks: 3190, revenue: 14200, creators: 12, status: "Active", expires: "2027-01-10" },
  { id: 4, name: "Tech Insider", brand: "Nexa Labs", category: "Technology", code: "NEXA12", commission: 8, sales: 142, clicks: 3900, revenue: 42600, creators: 16, status: "Scheduled", expires: "2026-12-01" },
  { id: 5, name: "Everyday Living", brand: "Kindred Living", category: "Lifestyle", code: "KINDRED15", commission: 15, sales: 78, clicks: 2100, revenue: 8900, creators: 9, status: "Paused", expires: "2026-11-20" },
  { id: 6, name: "Move More", brand: "Motion Athletics", category: "Fitness", code: "MOVE10", commission: 10, sales: 121, clicks: 2870, revenue: 16500, creators: 14, status: "Active", expires: "2026-12-28" },
];

const statusClass: Record<OfferStatus, string> = {
  Active: "cc-status-active",
  Scheduled: "cc-status-scheduled",
  Paused: "cc-status-paused",
};

const money = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const number = (value: number) =>
  new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value);

export default function CreatorCommercePage() {
  const [offers, setOffers] = useState(initialOffers);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All offers");
  const [categoryFilter, setCategoryFilter] = useState("All categories");
  const [selected, setSelected] = useState<AffiliateOffer | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [notice, setNotice] = useState("");

  const [offerName, setOfferName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("Fashion");
  const [code, setCode] = useState("");
  const [commission, setCommission] = useState("10");
  const [expires, setExpires] = useState("2026-12-31");
  const [creators, setCreators] = useState("5");

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return offers.filter((offer) => {
      const matchesSearch =
        !query ||
        offer.name.toLowerCase().includes(query) ||
        offer.brand.toLowerCase().includes(query) ||
        offer.code.toLowerCase().includes(query);
      return (
        matchesSearch &&
        (statusFilter === "All offers" || offer.status === statusFilter) &&
        (categoryFilter === "All categories" || offer.category === categoryFilter)
      );
    });
  }, [offers, search, statusFilter, categoryFilter]);

  const activeOffers = offers.filter((offer) => offer.status === "Active");
  const totalRevenue = activeOffers.reduce((sum, offer) => sum + offer.revenue, 0);
  const totalSales = activeOffers.reduce((sum, offer) => sum + offer.sales, 0);
  const totalClicks = activeOffers.reduce((sum, offer) => sum + offer.clicks, 0);
  const totalCreators = activeOffers.reduce((sum, offer) => sum + offer.creators, 0);
  const conversionRate = totalClicks ? (totalSales / totalClicks) * 100 : 0;
  const estimatedCommission = activeOffers.reduce(
    (sum, offer) => sum + offer.revenue * (offer.commission / 100),
    0,
  );

  function notify(message: string) {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2500);
  }

  function updateStatus(id: number, status: OfferStatus) {
    setOffers((current) =>
      current.map((offer) => (offer.id === id ? { ...offer, status } : offer)),
    );
    setSelected((current) => current && current.id === id ? { ...current, status } : current);
    notify(`Offer marked ${status.toLowerCase()}.`);
  }

  function createOffer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanCode = code.trim().toUpperCase().replace(/\s+/g, "");
    if (offers.some((offer) => offer.code.toUpperCase() === cleanCode)) {
      notify("That promo code already exists. Choose another.");
      return;
    }

    const offer: AffiliateOffer = {
      id: Math.max(0, ...offers.map((item) => item.id)) + 1,
      name: offerName.trim(),
      brand: brand.trim(),
      category,
      code: cleanCode,
      commission: Number(commission),
      sales: 0,
      clicks: 0,
      revenue: 0,
      creators: Number(creators),
      status: "Scheduled",
      expires,
    };

    setOffers((current) => [offer, ...current]);
    setShowForm(false);
    setOfferName("");
    setBrand("");
    setCode("");
    setCommission("10");
    setCreators("5");
    notify("Affiliate offer created.");
  }

  async function copyCode(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      notify(`Copied code: ${value}`);
    } catch {
      notify(`Promo code: ${value}`);
    }
  }

  return (
    <>
      <Navbar />

      <main className="cc-page">
        <section className="cc-hero">
          <div className="cc-hero-inner">
            <div>
              <span className="eyebrow"><TrendingUp size={14} /> AFFILIATE MARKETING & CREATOR COMMERCE</span>
              <h1>
                Turn creator influence
                <br />
                into <span className="gradient-text">measurable growth.</span>
              </h1>
              <p>
                Bring affiliate offers, creator promo codes, commissions, and
                sales performance together in one connected workspace.
              </p>
              <div className="cc-hero-actions">
                <button className="button button-primary" onClick={() => setShowForm(true)}>
                  <Plus size={17} /> Create an offer
                </button>
                <a href="#affiliate-workspace" className="button button-quiet">
                  Explore affiliate offers <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="cc-hero-proof">
                <span><Check size={15} /> Track conversions</span>
                <span><Check size={15} /> Manage commissions</span>
                <span><Check size={15} /> Compare performance</span>
              </div>
            </div>

            <div className="cc-hero-card">
              <div className="cc-hero-card-top">
                <div><span className="cc-kicker">AFFILIATE PERFORMANCE</span><h3>Revenue overview</h3></div>
                <span className="cc-hero-icon"><CircleDollarSign size={21} /></span>
              </div>
              <div className="cc-revenue-number">{money(totalRevenue)}</div>
              <div className="cc-revenue-caption">Revenue from active offers · Sample data</div>
              <div className="cc-chart">
                {[38, 52, 44, 68, 55, 78, 65, 87, 72, 96, 81, 100].map((height, index) => (
                  <div className="cc-chart-column" key={index}>
                    <span style={{ height: `${height}%`, animationDelay: `${index * 45}ms` }} />
                  </div>
                ))}
              </div>
              <div className="cc-chart-labels"><span>Earlier</span><span>Recent</span></div>
              <div className="cc-hero-card-footer">
                <div><span>Orders</span><strong>{number(totalSales)}</strong></div>
                <div><span>Conversion rate</span><strong>{conversionRate.toFixed(1)}%</strong></div>
                <div><span>Est. commission</span><strong>{money(estimatedCommission)}</strong></div>
              </div>
            </div>
          </div>
          <div className="cc-hero-glow" />
        </section>

        <section className="section cc-workspace" id="affiliate-workspace">
          <div className="cc-section-heading">
            <div><span className="eyebrow">COMMERCE DASHBOARD</span><h2>Performance you can act on.</h2><p>See what is selling, who is converting, and which offers need attention.</p></div>
            <button className="button button-primary" onClick={() => setShowForm(true)}><Plus size={17} /> New offer</button>
          </div>

          <div className="cc-stats">
            <div className="cc-stat"><div><span>Active revenue</span><CircleDollarSign size={18} /></div><strong>{money(totalRevenue)}</strong><small><ArrowUpRight size={13} /> Revenue across active offers</small></div>
            <div className="cc-stat"><div><span>Tracked orders</span><ShoppingBag size={18} /></div><strong>{number(totalSales)}</strong><small>Attributed sample conversions</small></div>
            <div className="cc-stat"><div><span>Link clicks</span><MousePointerClick size={18} /></div><strong>{number(totalClicks)}</strong><small>Clicks across active offers</small></div>
            <div className="cc-stat"><div><span>Conversion rate</span><Target size={18} /></div><strong>{conversionRate.toFixed(1)}%</strong><small>{number(totalCreators)} creator assignments across active offers</small></div>
          </div>

          <div className="cc-offer-panel">
            <div className="cc-toolbar">
              <div className="cc-toolbar-title"><h3>Affiliate offers</h3><span>{filtered.length} offers</span></div>
              <div className="cc-filters">
                <label className="cc-search"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search offers or brands..." /></label>
                <label className="cc-select"><select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} aria-label="Filter offer status"><option>All offers</option><option>Active</option><option>Scheduled</option><option>Paused</option></select><ChevronDown size={14} /></label>
                <label className="cc-select"><select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)} aria-label="Filter category"><option>All categories</option><option>Fashion</option><option>Beauty</option><option>Travel</option><option>Technology</option><option>Lifestyle</option><option>Fitness</option></select><ChevronDown size={14} /></label>
              </div>
            </div>

            <div className="cc-table-wrap">
              <table className="cc-table">
                <thead><tr><th>Offer</th><th>Promo code</th><th>Commission</th><th>Revenue</th><th>Orders</th><th>Creators</th><th>Status</th><th /></tr></thead>
                <tbody>
                  {filtered.map((offer) => (
                    <tr key={offer.id} onClick={() => setSelected(offer)} tabIndex={0} onKeyDown={(event) => { if (event.key === "Enter") setSelected(offer); }}>
                      <td><div className="cc-offer-identity"><span className={`cc-brand-avatar cc-brand-${offer.category.toLowerCase()}`}>{offer.brand.slice(0, 1)}</span><span><strong>{offer.name}</strong><small>{offer.brand} · {offer.category}</small></span></div></td>
                      <td><button className="cc-code" onClick={(event) => { event.stopPropagation(); void copyCode(offer.code); }}>{offer.code}<Copy size={12} /></button></td>
                      <td><strong>{offer.commission}%</strong></td>
                      <td><strong>{money(offer.revenue)}</strong></td>
                      <td>{offer.sales.toLocaleString("en-US")}</td>
                      <td>{offer.creators}</td>
                      <td><span className={`cc-status ${statusClass[offer.status]}`}><span />{offer.status}</span></td>
                      <td><button className="cc-open-button" onClick={(event) => { event.stopPropagation(); setSelected(offer); }} aria-label={`View ${offer.name}`}><ArrowUpRight size={16} /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filtered.length === 0 && <div className="cc-empty"><Search size={25} /><strong>No offers found</strong><p>Try changing your search or filters.</p><button className="button button-quiet" onClick={() => { setSearch(""); setStatusFilter("All offers"); setCategoryFilter("All categories"); }}>Clear filters</button></div>}
            </div>
            <div className="cc-table-footer"><span>Showing {filtered.length} of {offers.length} offers</span><span>Sample data · Updates instantly</span></div>
          </div>
        </section>

        <section className="section cc-leaderboard-section">
          <div className="cc-leaderboard-intro"><span className="eyebrow">CREATOR COMMERCE</span><h2>Make every recommendation count.</h2><p>Connect creator partnerships with measurable outcomes. Use performance insights to make your next collaboration smarter.</p><Link href="/features/analytics" className="button button-primary">Explore analytics <ArrowUpRight size={16} /></Link></div>
          <div className="cc-insight-card">
            <div className="cc-insight-header"><div><span className="cc-kicker">TOP OFFER BY REVENUE</span><h3>Your leading offer</h3></div><span className="cc-insight-icon"><TrendingUp size={19} /></span></div>
            {offers.filter((offer) => offer.status === "Active").sort((a, b) => b.revenue - a.revenue).slice(0, 3).map((offer, index) => (
              <div className="cc-leader-row" key={offer.id}>
                <span className="cc-rank">{String(index + 1).padStart(2, "0")}</span>
                <span className={`cc-brand-avatar cc-brand-${offer.category.toLowerCase()}`}>{offer.brand.slice(0, 1)}</span>
                <span className="cc-leader-info"><strong>{offer.brand}</strong><small>{offer.name} · {offer.sales} orders</small></span>
                <strong className="cc-leader-revenue">{money(offer.revenue)}</strong>
              </div>
            ))}
            <div className="cc-insight-footnote"><Target size={15} /> Rankings are calculated from the current sample data.</div>
          </div>
        </section>

        <section className="section"><div className="bottom-cta"><span className="eyebrow">CONNECT INFLUENCE WITH REVENUE</span><h2>Build a creator commerce engine.</h2><p>Discover creators, launch affiliate offers, and measure your partnerships.</p><Link href="/book-a-demo" className="button button-primary">Book a demo <ArrowUpRight size={16} /></Link></div></section>
      </main>

      {notice && <div className="cc-toast"><Check size={16} />{notice}</div>}

      {showForm && (
        <div className="cc-modal-backdrop" onClick={() => setShowForm(false)}>
          <div className="cc-modal" role="dialog" aria-modal="true" aria-labelledby="cc-create-title" onClick={(event) => event.stopPropagation()}>
            <div className="cc-modal-heading"><div><span className="eyebrow">AFFILIATE WORKSPACE</span><h2 id="cc-create-title">Create an offer</h2><p>Set up a promotion for your creator network.</p></div><button className="cc-close" onClick={() => setShowForm(false)} aria-label="Close"><X size={20} /></button></div>
            <form className="cc-form" onSubmit={createOffer}>
              <label>Offer name<input required value={offerName} onChange={(event) => setOfferName(event.target.value)} placeholder="e.g. Holiday essentials" /></label>
              <label>Brand or client<input required value={brand} onChange={(event) => setBrand(event.target.value)} placeholder="e.g. Your brand" /></label>
              <div className="cc-form-row"><label>Category<select value={category} onChange={(event) => setCategory(event.target.value)}><option>Fashion</option><option>Beauty</option><option>Travel</option><option>Technology</option><option>Lifestyle</option><option>Fitness</option></select></label><label>Commission (%)<input type="number" required min="0.1" max="100" step="0.1" value={commission} onChange={(event) => setCommission(event.target.value)} /></label></div>
              <label>Unique promo code<input required value={code} onChange={(event) => setCode(event.target.value.toUpperCase().replace(/\s/g, ""))} placeholder="e.g. BRAND15" /></label>
              <div className="cc-form-row"><label>Creator assignments<input type="number" required min="1" max="10000" value={creators} onChange={(event) => setCreators(event.target.value)} /></label><label>Offer expiry<input type="date" required value={expires} onChange={(event) => setExpires(event.target.value)} /></label></div>
              <div className="cc-form-note">New offers start as Scheduled. Sales, attribution, and commission payouts need a connected commerce backend.</div>
              <button type="submit" className="button button-primary cc-submit"><Plus size={16} /> Create offer</button>
            </form>
          </div>
        </div>
      )}

      {selected && (
        <div className="cc-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="cc-modal" role="dialog" aria-modal="true" aria-labelledby="cc-detail-title" onClick={(event) => event.stopPropagation()}>
            <div className="cc-modal-heading"><div><span className="eyebrow">OFFER DETAILS</span><h2 id="cc-detail-title">{selected.name}</h2><p>{selected.brand} · {selected.category}</p></div><button className="cc-close" onClick={() => setSelected(null)} aria-label="Close"><X size={20} /></button></div>
            <div className="cc-detail-code"><div><span>Creator promo code</span><strong>{selected.code}</strong></div><button className="button button-quiet" onClick={() => void copyCode(selected.code)}><Copy size={15} /> Copy code</button></div>
            <div className="cc-detail-grid"><div><span>Commission</span><strong>{selected.commission}%</strong></div><div><span>Revenue</span><strong>{money(selected.revenue)}</strong></div><div><span>Orders</span><strong>{selected.sales.toLocaleString("en-US")}</strong></div><div><span>Link clicks</span><strong>{selected.clicks.toLocaleString("en-US")}</strong></div><div><span>Creators assigned</span><strong>{selected.creators}</strong></div><div><span>Expires</span><strong>{new Date(`${selected.expires}T12:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</strong></div></div>
            <label className="cc-status-field">Offer status<select value={selected.status} onChange={(event) => updateStatus(selected.id, event.target.value as OfferStatus)}><option>Active</option><option>Scheduled</option><option>Paused</option></select></label>
            <div className="cc-detail-note"><CircleDollarSign size={17} /> Estimated commission on recorded revenue: {money(selected.revenue * selected.commission / 100)}. This is an illustrative estimate, not a payout calculation.</div>
            <button className="button button-primary cc-submit" onClick={() => setSelected(null)}>Done <Check size={16} /></button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
