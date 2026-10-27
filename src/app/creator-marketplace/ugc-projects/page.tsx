
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  ChevronDown,
  Clock3,
  FileVideo,
  Heart,
  MessageCircle,
  Package,
  Search,
  Sparkles,
  Video,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type UGCProject = {
  id: number;
  brand: string;
  title: string;
  category: string;
  format: string;
  budget: number;
  deadline: string;
  duration: string;
  initials: string;
  art: string;
  brief: string;
  deliverables: string[];
  tags: string[];
};

const projects: UGCProject[] = [
  {
    id: 1,
    brand: "Glow Theory",
    title: "Skincare routine video",
    category: "Beauty",
    format: "Video",
    budget: 12000,
    deadline: "Nov 18, 2026",
    duration: "15–30 seconds",
    initials: "GT",
    art: "ugc-art-rose",
    brief:
      "Create a natural skincare routine video that demonstrates product application, texture and the overall experience. The style should feel personal, clean and easy to follow.",
    deliverables: ["1 vertical video", "3 raw product shots", "One revision round"],
    tags: ["Skincare", "Voiceover", "Vertical video"],
  },
  {
    id: 2,
    brand: "Everyday Edit",
    title: "Style it your way",
    category: "Fashion",
    format: "Video",
    budget: 18000,
    deadline: "Nov 23, 2026",
    duration: "30–45 seconds",
    initials: "EE",
    art: "ugc-art-lilac",
    brief:
      "Show how a versatile fashion piece can work across different everyday looks. Focus on transitions, styling details and practical inspiration.",
    deliverables: ["2 vertical videos", "5 product photos", "Hook variations"],
    tags: ["Fashion", "Transitions", "Styling"],
  },
  {
    id: 3,
    brand: "TechNest",
    title: "A product demo that clicks",
    category: "Technology",
    format: "Product demo",
    budget: 22000,
    deadline: "Nov 28, 2026",
    duration: "45–60 seconds",
    initials: "TN",
    art: "ugc-art-blue",
    brief:
      "Make a clear product demonstration that highlights key features and shows how the product solves a practical everyday problem.",
    deliverables: ["1 demo video", "2 opening hooks", "Clean footage"],
    tags: ["Product demo", "Technology", "Tutorial"],
  },
  {
    id: 4,
    brand: "Kitchen Notes",
    title: "Easy recipe, satisfying story",
    category: "Food",
    format: "Video",
    budget: 9500,
    deadline: "Dec 03, 2026",
    duration: "20–40 seconds",
    initials: "KN",
    art: "ugc-art-peach",
    brief:
      "Film an appetizing recipe video with clear steps, close-up shots and a satisfying final reveal. Keep the process accessible to home cooks.",
    deliverables: ["1 recipe video", "5 still frames", "Ingredient list"],
    tags: ["Recipe", "Food", "Lifestyle"],
  },
  {
    id: 5,
    brand: "Move Daily",
    title: "Wellness essentials unboxing",
    category: "Fitness",
    format: "Unboxing",
    budget: 14000,
    deadline: "Dec 07, 2026",
    duration: "20–35 seconds",
    initials: "MD",
    art: "ugc-art-green",
    brief:
      "Create an engaging unboxing with first impressions, product details and a natural introduction to how the items fit your routine.",
    deliverables: ["1 unboxing video", "3 detail photos", "Voiceover version"],
    tags: ["Unboxing", "Wellness", "First impressions"],
  },
  {
    id: 6,
    brand: "Roam Local",
    title: "A destination in 30 seconds",
    category: "Travel",
    format: "Lifestyle",
    budget: 16000,
    deadline: "Dec 12, 2026",
    duration: "30 seconds",
    initials: "RL",
    art: "ugc-art-sunset",
    brief:
      "Tell a compact destination story with atmospheric footage, useful travel details and a strong visual beginning and ending.",
    deliverables: ["1 travel video", "6 B-roll clips", "3 cover options"],
    tags: ["Travel", "B-roll", "Storytelling"],
  },
];

const categories = ["All categories", "Beauty", "Fashion", "Technology", "Food", "Fitness", "Travel"];
const formats = ["All formats", "Video", "Product demo", "Unboxing", "Lifestyle"];

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function UGCProjectsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");
  const [format, setFormat] = useState("All formats");
  const [minimumBudget, setMinimumBudget] = useState("0");
  const [sort, setSort] = useState("recommended");
  const [saved, setSaved] = useState<number[]>([]);
  const [savedOnly, setSavedOnly] = useState(false);
  const [selected, setSelected] = useState<UGCProject | null>(null);
  const [applications, setApplications] = useState<number[]>([]);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = projects.filter((project) => {
      const searchable = [
        project.brand,
        project.title,
        project.category,
        project.format,
        project.brief,
        ...project.tags,
      ].join(" ").toLowerCase();

      return (
        (!query || searchable.includes(query)) &&
        (category === "All categories" || project.category === category) &&
        (format === "All formats" || project.format === format) &&
        project.budget >= Number(minimumBudget) &&
        (!savedOnly || saved.includes(project.id))
      );
    });

    if (sort === "budget-high") result.sort((a, b) => b.budget - a.budget);
    if (sort === "budget-low") result.sort((a, b) => a.budget - b.budget);
    if (sort === "brand") result.sort((a, b) => a.brand.localeCompare(b.brand));

    return result;
  }, [search, category, format, minimumBudget, sort, saved, savedOnly]);

  function resetFilters() {
    setSearch("");
    setCategory("All categories");
    setFormat("All formats");
    setMinimumBudget("0");
    setSort("recommended");
    setSavedOnly(false);
  }

  function toggleSaved(id: number) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  const faqs = [
    {
      question: "What is a UGC project?",
      answer:
        "A user-generated content project involves creating brand-focused content such as product demonstrations, testimonials, unboxings, photos or short videos. A creator may not need to publish the content on their own social account unless the agreement requires it.",
    },
    {
      question: "Do I need a large social media following?",
      answer:
        "UGC work often focuses on your content creation skills rather than audience size. Brands may evaluate your portfolio, presentation, production quality and fit for the brief.",
    },
    {
      question: "What should I confirm before accepting a project?",
      answer:
        "Confirm deliverables, revisions, deadlines, payment terms, content usage rights, paid advertising permissions and whether raw footage is required.",
    },
    {
      question: "Are these active client projects?",
      answer:
        "No. These are fictional example listings for the frontend demo. Live projects and applications require backend and marketplace integration.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="ugc-projects-page">
        <section className="ugc-projects-hero">
          <div className="ugc-hero-glow" />
          <div className="ugc-hero-inner">
            <div className="ugc-hero-copy">
              <span className="eyebrow"><Sparkles size={15} /> THE UGC CREATOR SPACE</span>
              <h1>
                Create content.
                <br />
                <span className="gradient-text">Get discovered.</span>
              </h1>
              <p>
                Find content briefs that match your style, turn creative ideas
                into project opportunities and build a portfolio around the
                work you love.
              </p>
              <div className="ugc-hero-actions">
                <a href="#ugc-project-list" className="button button-primary">
                  Explore UGC projects <ArrowRight size={17} />
                </a>
                <Link href="/solutions/creators" className="button button-quiet">
                  Creator resources
                </Link>
              </div>
              <div className="ugc-hero-points">
                <span><Check size={15} /> Video and photo briefs</span>
                <span><Check size={15} /> Clear deliverables</span>
                <span><Check size={15} /> Multiple niches</span>
              </div>
            </div>

            <div className="ugc-hero-visual">
              <div className="ugc-hero-ring ring-one" />
              <div className="ugc-hero-ring ring-two" />
              <div className="ugc-hero-board">
                <div className="ugc-board-header">
                  <div>
                    <span>CREATIVE PROJECT BOARD</span>
                    <h3>Make something memorable</h3>
                  </div>
                  <span className="ugc-board-icon"><Camera size={20} /></span>
                </div>
                <div className="ugc-board-art">
                  <div className="ugc-board-product"><Package size={36} /></div>
                  <span>YOUR NEXT CREATIVE BRIEF</span>
                </div>
                <div className="ugc-board-details">
                  <div className="ugc-brand-monogram">GT</div>
                  <div>
                    <strong>Skincare routine video</strong>
                    <span>Beauty · Vertical video</span>
                  </div>
                </div>
                <div className="ugc-board-footer">
                  <div><span>Deliverables</span><strong>1 video + 3 photos</strong></div>
                  <div><span>Sample budget</span><strong>₹12,000</strong></div>
                </div>
              </div>
              <div className="ugc-floating-note">
                <FileVideo size={20} />
                <div><strong>Creative freedom</strong><span>Make the brief your own</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="ugc-value-strip">
          <div><Video size={20} /><span><strong>Short-form video</strong><small>Reels, Shorts and more</small></span></div>
          <div><Camera size={20} /><span><strong>Product photography</strong><small>Visual stories for brands</small></span></div>
          <div><MessageCircle size={20} /><span><strong>Authentic storytelling</strong><small>Content with personality</small></span></div>
          <div><BriefcaseIcon /><span><strong>Project-based work</strong><small>Clear creative deliverables</small></span></div>
        </section>

        <section className="section ugc-project-list-section" id="ugc-project-list">
          <div className="ugc-list-heading">
            <div>
              <span className="eyebrow">FIND YOUR NEXT PROJECT</span>
              <h2>Briefs built for creators.</h2>
              <p>Search projects, compare sample budgets and save briefs for later.</p>
            </div>
            <button
              type="button"
              className={`ugc-saved-toggle ${savedOnly ? "active" : ""}`}
              onClick={() => setSavedOnly(!savedOnly)}
            >
              <Heart size={16} fill={savedOnly ? "currentColor" : "none"} />
              Saved ({saved.length})
            </button>
          </div>

          <div className="ugc-filter-panel">
            <label className="ugc-search-field">
              <Search size={17} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search project, brand or skill..."
                aria-label="Search UGC projects"
              />
              {search && <button type="button" aria-label="Clear search" onClick={() => setSearch("")}><X size={15} /></button>}
            </label>
            <label><span>Category</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label><span>Content format</span><select value={format} onChange={(event) => setFormat(event.target.value)}>{formats.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label><span>Minimum budget</span><select value={minimumBudget} onChange={(event) => setMinimumBudget(event.target.value)}><option value="0">Any budget</option><option value="10000">₹10,000+</option><option value="15000">₹15,000+</option><option value="20000">₹20,000+</option></select></label>
            <label><span>Sort by</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="recommended">Recommended</option><option value="budget-high">Highest budget</option><option value="budget-low">Lowest budget</option><option value="brand">Brand name</option></select></label>
          </div>

          <div className="ugc-results-line">
            <span>{filteredProjects.length} sample projects</span>
            <button type="button" onClick={resetFilters}>Reset filters</button>
          </div>

          <div className="ugc-project-grid">
            {filteredProjects.map((project) => (
              <article className="ugc-project-card" key={project.id}>
                <div className={`ugc-project-art ${project.art}`}>
                  <span className="ugc-category-pill">{project.category}</span>
                  <button type="button" aria-label={saved.includes(project.id) ? "Unsave project" : "Save project"} aria-pressed={saved.includes(project.id)} className={`ugc-save-button ${saved.includes(project.id) ? "saved" : ""}`} onClick={() => toggleSaved(project.id)}>
                    <Heart size={18} fill={saved.includes(project.id) ? "currentColor" : "none"} />
                  </button>
                  <div className="ugc-art-symbol">{project.format === "Product demo" ? <Package size={36} /> : project.format === "Unboxing" ? <Camera size={36} /> : <FileVideo size={36} />}</div>
                  <span className="ugc-brand-name-art">{project.brand}</span>
                </div>
                <div className="ugc-project-content">
                  <div className="ugc-project-brand"><span>{project.initials}</span><div><strong>{project.brand}</strong><small>Sample client brief</small></div><span className="ugc-format-pill">{project.format}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.brief}</p>
                  <div className="ugc-project-meta">
                    <span><Clock3 size={15} /> Due {project.deadline}</span>
                    <span><Video size={15} /> {project.duration}</span>
                  </div>
                  <div className="ugc-project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="ugc-project-card-footer">
                    <div><small>Sample project budget</small><strong>{formatCurrency(project.budget)}</strong></div>
                    <button type="button" onClick={() => setSelected(project)}>View brief <ArrowRight size={15} /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="ugc-empty-state">
              <Search size={28} />
              <h3>No projects found</h3>
              <p>Try another search term or adjust the filters.</p>
              <button type="button" className="button button-primary" onClick={resetFilters}>Reset filters</button>
            </div>
          )}

          <p className="ugc-disclaimer">All project listings, budgets, dates and client names are fictional demo data. No live applications are submitted.</p>
        </section>

        <section className="section ugc-workflow-section">
          <div className="ugc-workflow-heading">
            <span className="eyebrow">HOW UGC PROJECTS WORK</span>
            <h2>Make great content, step by step.</h2>
          </div>
          <div className="ugc-workflow-grid">
            <article><span>01</span><div><Search size={21} /></div><h3>Find your brief</h3><p>Explore projects that suit your niche, skills and preferred format.</p></article>
            <article><span>02</span><div><FileVideo size={21} /></div><h3>Understand the scope</h3><p>Review deliverables, timelines, revisions and usage requirements.</p></article>
            <article><span>03</span><div><Sparkles size={21} /></div><h3>Create with purpose</h3><p>Turn the brief into content that feels thoughtful, useful and authentic.</p></article>
          </div>
        </section>

        <section className="section ugc-final-section">
          <div className="ugc-final-card">
            <div className="ugc-final-icon"><Sparkles size={23} /></div>
            <span className="eyebrow">YOUR CREATIVE WORK DESERVES A STAGE</span>
            <h2>Find a brief. Bring your idea to life.</h2>
            <p>Join INFLORO and get ready to explore creator opportunities when the marketplace is connected.</p>
            <div className="ugc-final-actions">
              <Link href="/get-started" className="button button-primary">Create your account <ArrowRight size={17} /></Link>
              <Link href="/creator-marketplace/how-it-works" className="button button-quiet">How it works</Link>
            </div>
          </div>
        </section>
      </main>

      {selected && (
        <div className="ugc-modal-backdrop" onClick={() => setSelected(null)}>
          <section className="ugc-project-modal" role="dialog" aria-modal="true" aria-labelledby="ugc-modal-title" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="ugc-modal-close" aria-label="Close project brief" onClick={() => setSelected(null)}><X size={20} /></button>
            <div className={`ugc-modal-art ${selected.art}`}><span>{selected.category}</span><strong>{selected.initials}</strong></div>
            <span className="eyebrow">PROJECT BRIEF PREVIEW</span>
            <h2 id="ugc-modal-title">{selected.title}</h2>
            <p className="ugc-modal-brand">{selected.brand} · {selected.format}</p>
            <p>{selected.brief}</p>
            <div className="ugc-modal-details">
              <div><span>Sample budget</span><strong>{formatCurrency(selected.budget)}</strong></div>
              <div><span>Deadline</span><strong>{selected.deadline}</strong></div>
              <div><span>Content duration</span><strong>{selected.duration}</strong></div>
              <div><span>Format</span><strong>{selected.format}</strong></div>
            </div>
            <h3>Expected deliverables</h3>
            <ul className="ugc-deliverable-list">{selected.deliverables.map((item) => <li key={item}><Check size={16} /> {item}</li>)}</ul>
            <div className="ugc-project-tags">{selected.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            {applications.includes(selected.id) ? (
              <div className="ugc-application-note"><Check size={17} /> Demo application noted for this session.</div>
            ) : (
              <button type="button" className="button button-primary ugc-apply-button" onClick={() => setApplications((current) => [...current, selected.id])}>Preview application <ArrowRight size={16} /></button>
            )}
            <p className="ugc-modal-note">Frontend demonstration only. This does not submit an application to a real client.</p>
          </section>
        </div>
      )}

      <Footer />
    </>
  );
}

function BriefcaseIcon() {
  return <Package size={20} />;
}
