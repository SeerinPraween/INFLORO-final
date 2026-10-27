"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bookmark,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  FileText,
  GraduationCap,
  Headphones,
  Lightbulb,
  Newspaper,
  PlayCircle,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Resource = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  icon: typeof BookOpen;
  color: string;
  href: string;
  featured?: boolean;
};

const resources: Resource[] = [
  {
    title: "The creator marketing playbook",
    description:
      "A practical introduction to planning, launching, and improving creator campaigns.",
    category: "Playbooks",
    readTime: "12 min read",
    icon: BookOpen,
    color: "violet",
    href: "/resources/playbooks",
    featured: true,
  },
  {
    title: "How to build a creator brief",
    description:
      "Learn how to communicate campaign goals, deliverables, creative direction, and timelines.",
    category: "Guides",
    readTime: "8 min read",
    icon: GraduationCap,
    color: "blue",
    href: "/resources/guides",
    featured: true,
  },
  {
    title: "Creator campaign planning template",
    description:
      "Organize campaign objectives, creator selection, deliverables, budgets, and deadlines.",
    category: "Templates",
    readTime: "Ready to use",
    icon: FileText,
    color: "pink",
    href: "/resources/templates",
    featured: true,
  },
  {
    title: "Measuring creator campaign performance",
    description:
      "Understand the metrics that help you evaluate reach, engagement, conversions, and ROI.",
    category: "Reports",
    readTime: "10 min read",
    icon: TrendingUp,
    color: "green",
    href: "/resources/reports",
  },
  {
    title: "Inside a successful brand collaboration",
    description:
      "Explore an illustrative campaign breakdown, from the initial brief to final results.",
    category: "Case Studies",
    readTime: "6 min read",
    icon: BriefcaseBusiness,
    color: "amber",
    href: "/resources/case-studies",
  },
  {
    title: "The latest in creator marketing",
    description:
      "Explore ideas, practical advice, and perspectives on the changing creator economy.",
    category: "Blog",
    readTime: "5 min read",
    icon: Newspaper,
    color: "violet",
    href: "/resources/blog",
  },
];

const resourceCategories = [
  {
    title: "Blog",
    description: "Ideas, insights, and fresh perspectives on creator marketing.",
    icon: Newspaper,
    href: "/resources/blog",
    color: "violet",
  },
  {
    title: "Guides",
    description: "Step-by-step guidance for better campaigns and partnerships.",
    icon: GraduationCap,
    href: "/resources/guides",
    color: "blue",
  },
  {
    title: "Templates",
    description: "Practical frameworks to help you organize your work.",
    icon: FileText,
    href: "/resources/templates",
    color: "pink",
  },
  {
    title: "Case studies",
    description: "Explore campaign examples, approaches, and lessons learned.",
    icon: BriefcaseBusiness,
    href: "/resources/case-studies",
    color: "amber",
  },
  {
    title: "Reports",
    description: "Explore measurement frameworks and industry perspectives.",
    icon: TrendingUp,
    href: "/resources/reports",
    color: "green",
  },
  {
    title: "Webinars",
    description: "Learn through presentations, discussions, and workshops.",
    icon: PlayCircle,
    href: "/resources/webinars",
    color: "blue",
  },
  {
    title: "Playbooks",
    description: "Bring repeatable processes to your creator marketing work.",
    icon: BookOpen,
    href: "/resources/playbooks",
    color: "violet",
  },
  {
    title: "Help center",
    description: "Find answers to product questions and common workflows.",
    icon: Headphones,
    href: "/resources/help-center",
    color: "green",
  },
];

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All resources");
  const [saved, setSaved] = useState<string[]>([]);

  const filteredResources = useMemo(() => {
    const query = search.toLowerCase().trim();

    return resources.filter((resource) => {
      const matchesSearch =
        !query ||
        `${resource.title} ${resource.description} ${resource.category}`
          .toLowerCase()
          .includes(query);

      const matchesCategory =
        category === "All resources" || resource.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  function toggleSaved(title: string) {
    setSaved((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  }

  return (
    <>
      <Navbar />

      <main className="resources-home">
        <section className="resources-home-hero">
          <div className="resources-home-glow" />

          <div className="resources-home-container resources-home-hero-grid">
            <div className="resources-home-copy">
              <div className="eyebrow resources-home-eyebrow">
                <Sparkles size={14} />
                THE INFLORO RESOURCE CENTER
              </div>

              <h1>
                Better ideas.
                <br />
                <span className="gradient-text">Stronger collaborations.</span>
              </h1>

              <p>
                Explore practical guides, campaign resources, creative
                inspiration, and helpful frameworks for building better
                creator partnerships.
              </p>

              <div className="resources-home-actions">
                <a href="#resource-library" className="button button-primary">
                  Explore resources <ArrowRight size={17} />
                </a>
                <a href="/resources/guides" className="button button-quiet">
                  Browse guides <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="resources-home-trust">
                <span><Check size={15} /> Practical learning</span>
                <span><Check size={15} /> Organized resources</span>
                <span><Check size={15} /> Ideas you can apply</span>
              </div>
            </div>

            <div className="resources-home-visual">
              <div className="resources-home-orbit resources-orbit-a" />
              <div className="resources-home-orbit resources-orbit-b" />

              <div className="resources-home-featured-visual">
                <div className="resources-home-visual-header">
                  <span className="resources-home-visual-label">YOUR LEARNING SPACE</span>
                  <span className="resources-home-visual-sparkle">
                    <Lightbulb size={18} />
                  </span>
                </div>

                <h3>Ideas into action.</h3>
                <p>Explore a smarter way to plan creator collaborations.</p>

                <div className="resources-home-visual-items">
                  <div>
                    <span className="resources-visual-icon visual-violet"><BookOpen size={17} /></span>
                    <span><strong>Learn</strong><small>Explore new approaches</small></span>
                    <ArrowUpRight size={15} />
                  </div>
                  <div>
                    <span className="resources-visual-icon visual-pink"><FileText size={17} /></span>
                    <span><strong>Plan</strong><small>Use practical frameworks</small></span>
                    <ArrowUpRight size={15} />
                  </div>
                  <div>
                    <span className="resources-visual-icon visual-green"><TrendingUp size={17} /></span>
                    <span><strong>Improve</strong><small>Refine your workflow</small></span>
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                <div className="resources-home-visual-footer">
                  <span><Sparkles size={14} /> Ideas for every stage</span>
                  <span>INFLORO</span>
                </div>
              </div>

              <div className="resources-home-float resources-float-a">
                <span className="resources-float-icon"><GraduationCap size={18} /></span>
                <div><strong>Keep learning</strong><span>Build your expertise</span></div>
              </div>

              <div className="resources-home-float resources-float-b">
                <span className="resources-float-icon resources-float-green"><Bookmark size={18} /></span>
                <div><strong>Save useful ideas</strong><span>Return when you need them</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="resources-home-category-section">
          <div className="resources-home-container">
            <div className="resources-home-section-heading">
              <div>
                <div className="eyebrow">EXPLORE BY FORMAT</div>
                <h2>
                  Find the resource <span className="gradient-text">you need.</span>
                </h2>
                <p>
                  From quick reads to structured learning, choose a format
                  that fits the task in front of you.
                </p>
              </div>
            </div>

            <div className="resources-home-category-grid">
              {resourceCategories.map((item) => {
                const Icon = item.icon;
                return (
                  <a href={item.href} className="resources-home-category-card" key={item.title}>
                    <div className="resources-home-category-top">
                      <span className={`resources-home-category-icon category-${item.color}`}>
                        <Icon size={21} />
                      </span>
                      <ArrowUpRight size={17} className="resources-category-arrow" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="resources-home-category-link">
                      Explore {item.title.toLowerCase()} <ArrowRight size={14} />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section resources-home-library" id="resource-library">
          <div className="resources-home-container">
            <div className="resources-home-section-heading">
              <div>
                <div className="eyebrow">THE RESOURCE LIBRARY</div>
                <h2>
                  A starting point for <span className="gradient-text">your next idea.</span>
                </h2>
                <p>
                  Search sample resources or filter by format to find
                  something relevant to your work.
                </p>
              </div>
            </div>

            <div className="resources-home-filters">
              <label className="resources-home-search">
                <Search size={18} />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search guides, templates, campaigns..."
                  aria-label="Search resources"
                />
                {search && (
                  <button type="button" onClick={() => setSearch("")} aria-label="Clear search">
                    <X size={15} />
                  </button>
                )}
              </label>

              <label className="resources-home-select">
                <span>Format</span>
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  aria-label="Filter resources by format"
                >
                  <option>All resources</option>
                  <option>Blog</option>
                  <option>Guides</option>
                  <option>Templates</option>
                  <option>Case Studies</option>
                  <option>Reports</option>
                  <option>Playbooks</option>
                </select>
                <ChevronDown size={15} />
              </label>
            </div>

            <div className="resources-home-results">
              <span>{filteredResources.length} featured resources</span>
              {(search || category !== "All resources") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All resources");
                  }}
                >
                  Clear filters <X size={13} />
                </button>
              )}
            </div>

            {filteredResources.length > 0 ? (
              <div className="resources-home-resource-grid">
                {filteredResources.map((resource) => {
                  const Icon = resource.icon;
                  const isSaved = saved.includes(resource.title);

                  return (
                    <article className="resources-home-resource-card" key={resource.title}>
                      <div className={`resources-home-resource-art art-${resource.color}`}>
                        <span className="resources-home-resource-art-icon"><Icon size={29} /></span>
                        <span className="resources-home-art-caption">INFLORO / INSIGHTS</span>
                        <div className="resources-home-art-lines"><span /><span /><span /></div>
                        <span className="resources-home-art-orb" />
                      </div>

                      <div className="resources-home-resource-content">
                        <div className="resources-home-resource-meta">
                          <span>{resource.category}</span>
                          <span>{resource.readTime}</span>
                        </div>
                        <h3>{resource.title}</h3>
                        <p>{resource.description}</p>
                        <div className="resources-home-resource-footer">
                          <a href={resource.href}>Explore resource <ArrowRight size={15} /></a>
                          <button
                            type="button"
                            className={isSaved ? "is-saved" : ""}
                            onClick={() => toggleSaved(resource.title)}
                            aria-label={isSaved ? "Unsave resource" : "Save resource"}
                            title={isSaved ? "Saved" : "Save for later"}
                          >
                            {isSaved ? <Check size={16} /> : <Bookmark size={16} />}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="resources-home-empty">
                <span><Search size={25} /></span>
                <h3>No matching resources</h3>
                <p>Try another keyword or reset the selected format.</p>
                <button
                  className="button button-primary"
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All resources");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}

            <p className="resources-home-disclaimer">
              Resource cards are sample content for the website prototype.
              Some destinations may be built in later steps.
            </p>
          </div>
        </section>

        <section className="section resources-home-help-section">
          <div className="resources-home-container resources-home-help-grid">
            <div className="resources-home-help-copy">
              <div className="eyebrow">NEED A HAND?</div>
              <h2>
                Find answers. <span className="gradient-text">Keep moving.</span>
              </h2>
              <p>
                Looking for product guidance or a practical starting point?
                Visit the help center or explore our playbooks for more
                structured advice.
              </p>
              <div className="resources-home-help-actions">
                <a className="button button-primary" href="/resources/help-center">
                  Visit help center <ArrowRight size={16} />
                </a>
                <a className="resources-home-secondary-link" href="/resources/playbooks">
                  Browse playbooks <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            <div className="resources-home-help-panel">
              <div className="resources-home-help-panel-header">
                <span className="resources-home-help-panel-icon"><Headphones size={21} /></span>
                <div><span>INFLORO SUPPORT</span><h3>How can we help?</h3></div>
              </div>
              {[
                { icon: Users, title: "Creator partnerships", text: "Understand collaboration workflows." },
                { icon: BriefcaseBusiness, title: "Campaign planning", text: "Organize your next campaign." },
                { icon: Lightbulb, title: "Tips and best practices", text: "Explore practical recommendations." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div className="resources-home-help-row" key={item.title}>
                    <span><Icon size={17} /></span>
                    <div><strong>{item.title}</strong><small>{item.text}</small></div>
                    <ArrowRight size={15} />
                  </div>
                );
              })}
              <a className="resources-home-contact-link" href="/contact">
                Still have a question? Contact us <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        <section className="resources-home-bottom-section">
          <div className="resources-home-container">
            <div className="resources-home-bottom-card">
              <div className="resources-home-bottom-glow" />
              <div className="resources-home-bottom-copy">
                <div className="eyebrow">TURN INSIGHT INTO ACTION</div>
                <h2>
                  Your next great idea <span className="gradient-text">starts here.</span>
                </h2>
                <p>
                  Explore the tools and inspiration to make your next
                  creator marketing project more intentional.
                </p>
                <a href="/creator-marketplace" className="button button-primary">
                  Explore creator marketplace <ArrowRight size={17} />
                </a>
              </div>
              <div className="resources-home-bottom-art">
                <div className="resources-home-bottom-circle"><Sparkles size={37} /></div>
                <span className="resources-home-bottom-bubble bubble-a"><BookOpen size={18} /></span>
                <span className="resources-home-bottom-bubble bubble-b"><Lightbulb size={18} /></span>
                <span className="resources-home-bottom-bubble bubble-c"><TrendingUp size={18} /></span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
