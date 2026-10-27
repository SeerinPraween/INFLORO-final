
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Eye,
  Filter,
  Heart,
  Image as ImageIcon,
  MessageSquare,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  Video,
  X,
} from "lucide-react";

type ContentStatus = "Needs Review" | "Approved" | "Changes Requested";

type ContentItem = {
  id: number;
  title: string;
  creator: string;
  handle: string;
  brand: string;
  campaign: string;
  type: "Video" | "Image" | "Story";
  status: ContentStatus;
  submitted: string;
  views: string;
  likes: string;
  color: string;
  initials: string;
};

const initialContent: ContentItem[] = [
  { id: 1, title: "A morning with Solara", creator: "Maya Kapoor", handle: "@mayastyle", brand: "Solara Studio", campaign: "Summer Essentials", type: "Video", status: "Needs Review", submitted: "Oct 25, 2026", views: "18.4K", likes: "2.1K", color: "ugc-lilac", initials: "MK" },
  { id: 2, title: "My everyday glow routine", creator: "Ananya Das", handle: "@ananyamakes", brand: "Bloom Beauty", campaign: "Glow Naturally", type: "Video", status: "Approved", submitted: "Oct 24, 2026", views: "32.8K", likes: "4.6K", color: "ugc-peach", initials: "AD" },
  { id: 3, title: "Style it three ways", creator: "Aarav Mehta", handle: "@aaravcreates", brand: "Solara Studio", campaign: "Summer Essentials", type: "Image", status: "Needs Review", submitted: "Oct 24, 2026", views: "12.6K", likes: "1.8K", color: "ugc-blue", initials: "AM" },
  { id: 4, title: "The travel essentials edit", creator: "Riya Sharma", handle: "@riyatravels", brand: "Wanderly", campaign: "Explore More", type: "Video", status: "Changes Requested", submitted: "Oct 23, 2026", views: "24.1K", likes: "3.2K", color: "ugc-green", initials: "RS" },
  { id: 5, title: "Desk setup refresh", creator: "Ishaan Roy", handle: "@ishaanreviews", brand: "Nexa Labs", campaign: "Tech That Fits", type: "Image", status: "Approved", submitted: "Oct 22, 2026", views: "15.2K", likes: "1.4K", color: "ugc-slate", initials: "IR" },
  { id: 6, title: "Five-minute reset", creator: "Meera Joshi", handle: "@meeramood", brand: "Kindred Living", campaign: "Everyday Rituals", type: "Story", status: "Needs Review", submitted: "Oct 21, 2026", views: "9.7K", likes: "980", color: "ugc-rose", initials: "MJ" },
  { id: 7, title: "Movement that feels good", creator: "Kabir Singh", handle: "@kabir.fit", brand: "Motion Athletics", campaign: "Move Freely", type: "Video", status: "Approved", submitted: "Oct 20, 2026", views: "41.5K", likes: "5.3K", color: "ugc-green", initials: "KS" },
  { id: 8, title: "A little everyday luxury", creator: "Sara Khan", handle: "@saraspaces", brand: "Kindred Living", campaign: "Everyday Rituals", type: "Image", status: "Changes Requested", submitted: "Oct 19, 2026", views: "8.2K", likes: "760", color: "ugc-peach", initials: "SK" },
];

const statusClass: Record<ContentStatus, string> = {
  "Needs Review": "ugc-status-review",
  Approved: "ugc-status-approved",
  "Changes Requested": "ugc-status-changes",
};

export default function UGCContentPage() {
  const [content, setContent] = useState(initialContent);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All content");
  const [statusFilter, setStatusFilter] = useState("All statuses");
  const [activeTab, setActiveTab] = useState("All content");
  const [selected, setSelected] = useState<ContentItem | null>(null);
  const [notice, setNotice] = useState("");
  const [showUpload, setShowUpload] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  const [newCreator, setNewCreator] = useState("");
  const [newHandle, setNewHandle] = useState("");
  const [newBrand, setNewBrand] = useState("");
  const [newCampaign, setNewCampaign] = useState("");
  const [newType, setNewType] = useState<"Video" | "Image" | "Story">("Video");

  const filteredContent = useMemo(() => {
    const query = search.toLowerCase().trim();

    return content.filter((item) => {
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.creator.toLowerCase().includes(query) ||
        item.brand.toLowerCase().includes(query) ||
        item.campaign.toLowerCase().includes(query);

      const matchesType =
        typeFilter === "All content" || item.type === typeFilter;

      const matchesStatus =
        statusFilter === "All statuses" || item.status === statusFilter;

      const matchesTab =
        activeTab === "All content" || item.status === activeTab;

      return matchesSearch && matchesType && matchesStatus && matchesTab;
    });
  }, [content, search, typeFilter, statusFilter, activeTab]);

  const reviewCount = content.filter((item) => item.status === "Needs Review").length;
  const approvedCount = content.filter((item) => item.status === "Approved").length;
  const changesCount = content.filter((item) => item.status === "Changes Requested").length;

  function notify(message: string) {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2500);
  }

  function updateStatus(id: number, status: ContentStatus) {
    setContent((current) =>
      current.map((item) => (item.id === id ? { ...item, status } : item)),
    );
    setSelected((current) =>
      current && current.id === id ? { ...current, status } : current,
    );
    notify(
      status === "Approved"
        ? "Content approved successfully."
        : status === "Changes Requested"
          ? "Revision request recorded."
          : "Content moved back to review.",
    );
  }

  function addContent(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const item: ContentItem = {
      id: Math.max(0, ...content.map((entry) => entry.id)) + 1,
      title: newTitle.trim(),
      creator: newCreator.trim(),
      handle: newHandle.trim().startsWith("@") ? newHandle.trim() : `@${newHandle.trim()}`,
      brand: newBrand.trim(),
      campaign: newCampaign.trim(),
      type: newType,
      status: "Needs Review",
      submitted: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      views: "—",
      likes: "—",
      color: "ugc-lilac",
      initials: newCreator.trim().split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase(),
    };

    setContent((current) => [item, ...current]);
    setShowUpload(false);
    setNewTitle("");
    setNewCreator("");
    setNewHandle("");
    setNewBrand("");
    setNewCampaign("");
    setNewType("Video");
    setActiveTab("All content");
    setTypeFilter("All content");
    setStatusFilter("All statuses");
    setSearch("");
    notify("Submission added to the review queue.");
  }

  return (
    <>
      <Navbar />

      <main className="ugc-page">
        <section className="ugc-hero">
          <div className="ugc-hero-inner">
            <div>
              <span className="eyebrow"><Sparkles size={14} /> UGC CONTENT & MARKETPLACE</span>
              <h1>
                Content that feels real.
                <br />
                <span className="gradient-text">Results that matter.</span>
              </h1>
              <p>
                Discover authentic creator content, manage submissions, and
                keep brand approvals moving without the back-and-forth.
              </p>
              <div className="ugc-hero-actions">
                <button className="button button-primary" onClick={() => setShowUpload(true)}>
                  <Plus size={17} /> Add submission
                </button>
                <a href="#ugc-library" className="button button-quiet">
                  Explore content <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="ugc-trust-row">
                <span><Check size={15} /> One review queue</span>
                <span><Check size={15} /> Clear feedback</span>
                <span><Check size={15} /> Creator-first workflow</span>
              </div>
            </div>

            <div className="ugc-hero-preview">
              <div className="ugc-preview-heading">
                <div><span className="ugc-preview-kicker">CONTENT WORKSPACE</span><h3>Review overview</h3></div>
                <span className="ugc-preview-icon"><Video size={19} /></span>
              </div>
              <div className="ugc-preview-number">{reviewCount.toString().padStart(2, "0")} <span>submissions to review</span></div>
              <div className="ugc-review-list">
                {content.filter((item) => item.status === "Needs Review").slice(0, 3).map((item) => (
                  <button key={item.id} className="ugc-review-row" onClick={() => setSelected(item)}>
                    <div className={`ugc-mini-art ${item.color}`}><span>{item.initials}</span><Video size={15} /></div>
                    <div><strong>{item.title}</strong><span>{item.creator} · {item.brand}</span></div>
                    <ChevronDown size={15} />
                  </button>
                ))}
                {reviewCount === 0 && <p className="ugc-no-reviews">Your review queue is clear.</p>}
              </div>
              <div className="ugc-preview-footer"><span><Check size={15} /> Approval workflow ready</span><span>Demo data</span></div>
            </div>
          </div>
          <div className="ugc-hero-glow" />
        </section>

        <section className="section ugc-workspace" id="ugc-library">
          <div className="ugc-section-heading">
            <div><span className="eyebrow">CONTENT LIBRARY</span><h2>Every asset. One place.</h2><p>Review creator submissions and track their approval status.</p></div>
            <button className="button button-primary" onClick={() => setShowUpload(true)}><Plus size={17} /> Add content</button>
          </div>

          <div className="ugc-stats">
            <button className={`ugc-stat ${activeTab === "All content" ? "ugc-stat-active" : ""}`} onClick={() => setActiveTab("All content")}>
              <span>Total submissions <ImageIcon size={18} /></span><strong>{content.length}</strong><small>Across all campaigns</small>
            </button>
            <button className={`ugc-stat ${activeTab === "Needs Review" ? "ugc-stat-active" : ""}`} onClick={() => setActiveTab("Needs Review")}>
              <span>Needs review <Clock3 size={18} /></span><strong>{reviewCount}</strong><small>Awaiting your decision</small>
            </button>
            <button className={`ugc-stat ${activeTab === "Approved" ? "ugc-stat-active" : ""}`} onClick={() => setActiveTab("Approved")}>
              <span>Approved <Check size={18} /></span><strong>{approvedCount}</strong><small>Ready for the next step</small>
            </button>
            <button className={`ugc-stat ${activeTab === "Changes Requested" ? "ugc-stat-active" : ""}`} onClick={() => setActiveTab("Changes Requested")}>
              <span>Changes requested <MessageSquare size={18} /></span><strong>{changesCount}</strong><small>Waiting on revisions</small>
            </button>
          </div>

          <div className="ugc-library-panel">
            <div className="ugc-toolbar">
              <div className="ugc-toolbar-title"><h3>Creator submissions</h3><span>{filteredContent.length} items</span></div>
              <div className="ugc-filters">
                <label className="ugc-search"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search content..." /></label>
                <label className="ugc-select"><Filter size={15} /><select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}><option>All content</option><option>Video</option><option>Image</option><option>Story</option></select></label>
                <label className="ugc-select"><select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}><option>All statuses</option><option>Needs Review</option><option>Approved</option><option>Changes Requested</option></select></label>
              </div>
            </div>

            <div className="ugc-content-grid">
              {filteredContent.map((item) => (
                <article className="ugc-content-card" key={item.id}>
                  <button className={`ugc-artwork ${item.color}`} onClick={() => setSelected(item)} aria-label={`Review ${item.title}`}>
                    <div className="ugc-art-shape ugc-art-shape-one" />
                    <div className="ugc-art-shape ugc-art-shape-two" />
                    <span className="ugc-art-monogram">{item.initials}</span>
                    <span className="ugc-art-type">{item.type === "Video" ? <Video size={13} /> : item.type === "Image" ? <ImageIcon size={13} /> : <Eye size={13} />}{item.type}</span>
                    {item.type === "Video" && <span className="ugc-play">▶</span>}
                    <span className="ugc-art-title">{item.title}</span>
                  </button>
                  <div className="ugc-card-body">
                    <div className="ugc-card-topline"><span className={`ugc-status ${statusClass[item.status]}`}><span />{item.status}</span><button className="ugc-card-open" onClick={() => setSelected(item)} aria-label="Open content details"><ArrowUpRight size={16} /></button></div>
                    <h3>{item.title}</h3>
                    <div className="ugc-creator-line"><span className="ugc-creator-initials">{item.initials}</span><div><strong>{item.creator}</strong><span>{item.handle}</span></div></div>
                    <div className="ugc-campaign-line"><ShoppingBag size={14} /><span>{item.brand}</span><span className="ugc-line-dot">·</span><span>{item.campaign}</span></div>
                    <div className="ugc-card-metrics"><span><Eye size={14} /> {item.views}</span><span><Heart size={14} /> {item.likes}</span><span>{item.submitted}</span></div>
                    <div className="ugc-card-actions">
                      {item.status === "Needs Review" ? (
                        <>
                          <button className="ugc-approve-btn" onClick={() => updateStatus(item.id, "Approved")}><Check size={14} /> Approve</button>
                          <button className="ugc-revise-btn" onClick={() => { setSelected(item); }}><MessageSquare size={14} /> Review</button>
                        </>
                      ) : (
                        <button className="ugc-review-btn" onClick={() => setSelected(item)}>View details <ArrowUpRight size={14} /></button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredContent.length === 0 && <div className="ugc-empty"><Search size={25} /><strong>No matching content</strong><p>Try another search term or change your filters.</p><button className="button button-quiet" onClick={() => { setSearch(""); setTypeFilter("All content"); setStatusFilter("All statuses"); setActiveTab("All content"); }}>Clear filters</button></div>}

            <div className="ugc-library-footer"><span>Showing {filteredContent.length} of {content.length} submissions</span><span><span className="ugc-live-dot" /> Sample content · Local prototype</span></div>
          </div>
        </section>

        <section className="section ugc-process-section">
          <div className="ugc-process-intro"><span className="eyebrow">A BETTER CONTENT WORKFLOW</span><h2>From first draft to <span className="gradient-text">final approval.</span></h2><p>Give creators and brand teams a clear process for delivering content that feels authentic and stays on brief.</p><Link href="/features/campaign-management" className="button button-primary">Explore campaign management <ArrowUpRight size={16} /></Link></div>
          <div className="ugc-steps">
            <div><span>01</span><div><h3>Collect submissions</h3><p>Keep content linked to its creator, brand, and campaign.</p></div><ImageIcon size={19} /></div>
            <div><span>02</span><div><h3>Review with confidence</h3><p>Approve content or flag items that need revisions.</p></div><Eye size={19} /></div>
            <div><span>03</span><div><h3>Move content forward</h3><p>Keep approved assets visible and ready for the next workflow.</p></div><Check size={19} /></div>
          </div>
        </section>

        <section className="section"><div className="bottom-cta"><span className="eyebrow">MAKE CREATOR CONTENT WORK HARDER</span><h2>Authentic content. Simplified collaboration.</h2><p>Bring creator submissions and campaign workflows together.</p><Link href="/book-a-demo" className="button button-primary">Book a demo <ArrowUpRight size={16} /></Link></div></section>
      </main>

      {notice && <div className="ugc-toast"><Check size={16} />{notice}</div>}

      {showUpload && (
        <div className="ugc-modal-backdrop" onClick={() => setShowUpload(false)}>
          <div className="ugc-modal" role="dialog" aria-modal="true" aria-labelledby="ugc-upload-title" onClick={(event) => event.stopPropagation()}>
            <div className="ugc-modal-heading"><div><span className="eyebrow">CONTENT WORKSPACE</span><h2 id="ugc-upload-title">Add a submission</h2><p>Add a content record to the review queue.</p></div><button className="ugc-close" onClick={() => setShowUpload(false)} aria-label="Close"><X size={20} /></button></div>
            <form className="ugc-form" onSubmit={addContent}>
              <label>Content title<input required value={newTitle} onChange={(event) => setNewTitle(event.target.value)} placeholder="e.g. My daily routine" /></label>
              <div className="ugc-form-row"><label>Creator name<input required value={newCreator} onChange={(event) => setNewCreator(event.target.value)} placeholder="Creator name" /></label><label>Creator handle<input required value={newHandle} onChange={(event) => setNewHandle(event.target.value.replace(/\s/g, ""))} placeholder="@handle" /></label></div>
              <div className="ugc-form-row"><label>Brand<input required value={newBrand} onChange={(event) => setNewBrand(event.target.value)} placeholder="Brand name" /></label><label>Campaign<input required value={newCampaign} onChange={(event) => setNewCampaign(event.target.value)} placeholder="Campaign name" /></label></div>
              <label>Content type<select value={newType} onChange={(event) => setNewType(event.target.value as "Video" | "Image" | "Story")}><option>Video</option><option>Image</option><option>Story</option></select></label>
              <div className="ugc-form-note">This demo adds a submission record only. Actual file uploads require storage and backend integration.</div>
              <button type="submit" className="button button-primary ugc-submit"><Plus size={16} /> Add to review queue</button>
            </form>
          </div>
        </div>
      )}

      {selected && (
        <div className="ugc-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="ugc-modal" role="dialog" aria-modal="true" aria-labelledby="ugc-detail-title" onClick={(event) => event.stopPropagation()}>
            <div className="ugc-modal-heading"><div><span className="eyebrow">SUBMISSION DETAILS</span><h2 id="ugc-detail-title">{selected.title}</h2><p>{selected.creator} · {selected.handle}</p></div><button className="ugc-close" onClick={() => setSelected(null)} aria-label="Close"><X size={20} /></button></div>
            <div className={`ugc-detail-art ${selected.color}`}><span>{selected.initials}</span><span>{selected.type} submission</span></div>
            <div className="ugc-detail-grid"><div><span>Brand</span><strong>{selected.brand}</strong></div><div><span>Campaign</span><strong>{selected.campaign}</strong></div><div><span>Content type</span><strong>{selected.type}</strong></div><div><span>Submitted</span><strong>{selected.submitted}</strong></div><div><span>Views</span><strong>{selected.views}</strong></div><div><span>Likes</span><strong>{selected.likes}</strong></div></div>
            <label className="ugc-status-field">Review decision<select value={selected.status} onChange={(event) => updateStatus(selected.id, event.target.value as ContentStatus)}><option>Needs Review</option><option>Approved</option><option>Changes Requested</option></select></label>
            <p className="ugc-modal-note">This prototype updates the review status locally. Comments, uploaded media, and creator notifications are not connected to a backend yet.</p>
            <button className="button button-primary ugc-submit" onClick={() => setSelected(null)}>Done <Check size={16} /></button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
