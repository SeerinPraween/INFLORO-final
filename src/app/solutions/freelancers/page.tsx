
"use client";

import { useMemo, useState, type FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CircleDollarSign,
  Clock3,
  Plus,
  Search,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

type ProjectStatus = "In progress" | "Planning" | "Completed";

type Project = {
  id: number;
  name: string;
  client: string;
  type: string;
  deadline: string;
  status: ProjectStatus;
  progress: number;
  budget: number;
  initials: string;
  tone: string;
};

const starterProjects: Project[] = [
  {
    id: 1,
    name: "Summer creator launch",
    client: "Luma Beauty",
    type: "Creator campaign",
    deadline: "2026-11-06",
    status: "In progress",
    progress: 72,
    budget: 45000,
    initials: "LB",
    tone: "lilac",
  },
  {
    id: 2,
    name: "UGC content sprint",
    client: "Sunday Studio",
    type: "UGC production",
    deadline: "2026-11-10",
    status: "In progress",
    progress: 48,
    budget: 28000,
    initials: "SS",
    tone: "peach",
  },
  {
    id: 3,
    name: "Creator shortlist",
    client: "Northstar Active",
    type: "Creator discovery",
    deadline: "2026-11-14",
    status: "Planning",
    progress: 20,
    budget: 18000,
    initials: "NA",
    tone: "mint",
  },
  {
    id: 4,
    name: "Autumn campaign recap",
    client: "Daily Ritual",
    type: "Reporting",
    deadline: "2026-10-20",
    status: "Completed",
    progress: 100,
    budget: 15000,
    initials: "DR",
    tone: "blue",
  },
];

const freelancerBenefits = [
  {
    icon: Users,
    title: "Keep client work organized",
    description:
      "Maintain a clear view of client relationships, campaign tasks, project status, and important follow-ups.",
  },
  {
    icon: CalendarDays,
    title: "Stay ahead of deadlines",
    description:
      "Track project milestones and deliverables so you can prioritize work before deadlines become urgent.",
  },
  {
    icon: CircleDollarSign,
    title: "Understand project value",
    description:
      "Keep illustrative project budgets alongside campaign progress to support planning and client conversations.",
  },
];

const fmtMoney = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function FreelancersSolutionPage() {
  const [projects, setProjects] = useState(starterProjects);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All projects");
  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [notice, setNotice] = useState("");

  const [projectName, setProjectName] = useState("");
  const [clientName, setClientName] = useState("");
  const [projectType, setProjectType] = useState("Creator campaign");
  const [deadline, setDeadline] = useState("2026-11-15");
  const [budget, setBudget] = useState("25000");

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesSearch =
          `${project.name} ${project.client} ${project.type}`
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesStatus =
          statusFilter === "All projects" || project.status === statusFilter;

        return matchesSearch && matchesStatus;
      }),
    [projects, search, statusFilter]
  );

  const activeProjects = projects.filter(
    (project) => project.status === "In progress"
  ).length;

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  const totalBudget = projects
    .filter((project) => project.status !== "Completed")
    .reduce((sum, project) => sum + project.budget, 0);

  function createProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!projectName.trim() || !clientName.trim()) return;

    const trimmedName = projectName.trim();
    const trimmedClient = clientName.trim();

    const newProject: Project = {
      id: Date.now(),
      name: trimmedName,
      client: trimmedClient,
      type: projectType,
      deadline,
      status: "Planning",
      progress: 0,
      budget: Math.max(0, Number(budget) || 0),
      initials: trimmedClient
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase(),
      tone: "lilac",
    };

    setProjects((current) => [newProject, ...current]);
    setProjectName("");
    setClientName("");
    setProjectType("Creator campaign");
    setBudget("25000");
    setShowForm(false);
    setNotice("Project created in this demo workspace.");
  }

  function updateProjectStatus(id: number, status: ProjectStatus) {
    setProjects((current) =>
      current.map((project) =>
        project.id === id
          ? {
              ...project,
              status,
              progress:
                status === "Completed"
                  ? 100
                  : status === "Planning"
                    ? Math.min(project.progress, 25)
                    : Math.max(project.progress, 30),
            }
          : project
      )
    );

    setSelectedProject((current) =>
      current?.id === id
        ? {
            ...current,
            status,
            progress:
              status === "Completed"
                ? 100
                : status === "Planning"
                  ? Math.min(current.progress, 25)
                  : Math.max(current.progress, 30),
          }
        : current
    );

    setNotice("Project status updated.");
  }

  return (
    <>
      <Navbar />

      <main className="freelancer-page">
        <section className="freelancer-hero">
          <div className="freelancer-hero-inner">
            <div className="freelancer-hero-copy">
              <div className="eyebrow">
                <Sparkles size={15} /> MADE FOR INDEPENDENT MARKETERS
              </div>

              <h1>
                Your freelance business.
                <br />
                <span className="gradient-text">Your way of working.</span>
              </h1>

              <p>
                Manage creator campaigns, stay on top of client commitments,
                and keep your projects organized from the first brief to the
                final report.
              </p>

              <div className="freelancer-hero-actions">
                <a className="button button-primary" href="/get-started">
                  Get started <ArrowRight size={16} />
                </a>
                <a className="button button-quiet" href="/book-a-demo">
                  Talk to our team
                </a>
              </div>

              <div className="freelancer-proof">
                <span><Check size={14} /> Organized client work</span>
                <span><Check size={14} /> Clear project priorities</span>
                <span><Check size={14} /> One working dashboard</span>
              </div>
            </div>

            <div className="freelancer-visual">
              <div className="freelancer-visual-glow" />

              <div className="freelancer-dashboard">
                <div className="freelancer-dashboard-heading">
                  <div>
                    <span className="freelancer-overline">YOUR WORKSPACE</span>
                    <h3>Project overview</h3>
                  </div>
                  <span className="freelancer-date">
                    <CalendarDays size={13} /> This month
                  </span>
                </div>

                <div className="freelancer-stats">
                  <div>
                    <span>Active projects</span>
                    <strong>{activeProjects.toString().padStart(2, "0")}</strong>
                    <small><ArrowUpRight size={12} /> Work in motion</small>
                  </div>
                  <div>
                    <span>Completed</span>
                    <strong>{completedProjects.toString().padStart(2, "0")}</strong>
                    <small>Delivered projects</small>
                  </div>
                </div>

                <div className="freelancer-preview-title">
                  <strong>Project progress</strong>
                  <span>Sample workspace</span>
                </div>

                <div className="freelancer-preview-list">
                  {projects.slice(0, 3).map((project) => (
                    <div className="freelancer-preview-project" key={project.id}>
                      <span className={`freelancer-client-avatar freelancer-tone-${project.tone}`}>
                        {project.initials}
                      </span>
                      <div className="freelancer-preview-info">
                        <strong>{project.name}</strong>
                        <div className="freelancer-progress-track">
                          <span style={{ width: `${project.progress}%` }} />
                        </div>
                      </div>
                      <small>{project.progress}%</small>
                    </div>
                  ))}
                </div>
              </div>

              <div className="freelancer-floating-note freelancer-note-top">
                <span className="freelancer-note-icon"><Target size={16} /></span>
                <span><strong>Stay on track</strong><small>Deadlines in one view</small></span>
              </div>

              <div className="freelancer-floating-note freelancer-note-bottom">
                <span className="freelancer-note-icon freelancer-note-green"><Check size={17} /></span>
                <span><strong>Work delivered</strong><small>Keep clients in the loop</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="freelancer-benefits section">
          <div className="freelancer-section-heading">
            <div className="eyebrow">LESS ADMIN. MORE MOMENTUM.</div>
            <h2>
              A calmer way to run
              <br />
              <span className="gradient-text">your client work.</span>
            </h2>
            <p>
              Bring your daily creator marketing operations into a workflow
              that's easier to understand and manage.
            </p>
          </div>

          <div className="freelancer-benefit-grid">
            {freelancerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article className="freelancer-benefit-card" key={benefit.title}>
                  <div className="freelancer-benefit-top">
                    <span><Icon size={22} /></span>
                    <small>0{index + 1}</small>
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="freelancer-project-section">
          <div className="freelancer-project-inner">
            <div className="freelancer-section-heading freelancer-project-heading">
              <div>
                <div className="eyebrow"><BriefcaseBusiness size={14} /> YOUR PROJECT DESK</div>
                <h2>
                  Every commitment.
                  <br />
                  <span className="gradient-text">Easy to keep in view.</span>
                </h2>
                <p>
                  Explore the sample project desk. Search projects, filter their
                  status, add new work, and update project progress.
                </p>
              </div>

              <button
                className="button button-primary"
                onClick={() => setShowForm((open) => !open)}
              >
                <Plus size={16} />
                {showForm ? "Close form" : "New project"}
              </button>
            </div>

            {notice && (
              <div className="freelancer-notice" role="status">
                <Check size={15} /> {notice}
                <button onClick={() => setNotice("")} aria-label="Dismiss notice">
                  <X size={15} />
                </button>
              </div>
            )}

            {showForm && (
              <form className="freelancer-project-form" onSubmit={createProject}>
                <h3>Create a project</h3>

                <div className="freelancer-form-grid">
                  <label>
                    Project name
                    <input
                      required
                      value={projectName}
                      onChange={(event) => setProjectName(event.target.value)}
                      placeholder="e.g. Holiday creator campaign"
                    />
                  </label>

                  <label>
                    Client name
                    <input
                      required
                      value={clientName}
                      onChange={(event) => setClientName(event.target.value)}
                      placeholder="e.g. Bloom & Co."
                    />
                  </label>

                  <label>
                    Project type
                    <select value={projectType} onChange={(event) => setProjectType(event.target.value)}>
                      <option>Creator campaign</option>
                      <option>Creator discovery</option>
                      <option>UGC production</option>
                      <option>Affiliate marketing</option>
                      <option>Reporting</option>
                    </select>
                  </label>

                  <label>
                    Deadline
                    <input
                      type="date"
                      required
                      value={deadline}
                      onChange={(event) => setDeadline(event.target.value)}
                    />
                  </label>

                  <label>
                    Estimated budget (INR)
                    <input
                      type="number"
                      min="0"
                      value={budget}
                      onChange={(event) => setBudget(event.target.value)}
                    />
                  </label>
                </div>

                <div className="freelancer-form-actions">
                  <button type="button" className="button button-quiet" onClick={() => setShowForm(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="button button-primary">
                    <Plus size={15} /> Create project
                  </button>
                </div>
              </form>
            )}

            <div className="freelancer-project-summary">
              <article>
                <span className="freelancer-summary-icon"><BriefcaseBusiness size={18} /></span>
                <div><small>Total projects</small><strong>{projects.length}</strong></div>
              </article>
              <article>
                <span className="freelancer-summary-icon"><Clock3 size={18} /></span>
                <div><small>In progress</small><strong>{activeProjects}</strong></div>
              </article>
              <article>
                <span className="freelancer-summary-icon"><Check size={18} /></span>
                <div><small>Completed</small><strong>{completedProjects}</strong></div>
              </article>
              <article>
                <span className="freelancer-summary-icon"><CircleDollarSign size={18} /></span>
                <div><small>Open project budget</small><strong>{fmtMoney(totalBudget)}</strong></div>
              </article>
            </div>

            <div className="freelancer-project-toolbar">
              <div className="freelancer-search">
                <Search size={16} />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search projects or clients..."
                  aria-label="Search projects"
                />
              </div>

              <select
                className="freelancer-status-filter"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                aria-label="Filter project status"
              >
                <option>All projects</option>
                <option>In progress</option>
                <option>Planning</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="freelancer-project-grid">
              {filteredProjects.map((project) => (
                <article className="freelancer-project-card" key={project.id}>
                  <div className="freelancer-project-card-top">
                    <span className={`freelancer-client-avatar freelancer-tone-${project.tone}`}>
                      {project.initials}
                    </span>
                    <span className={`freelancer-project-status freelancer-project-${project.status.toLowerCase().replace(" ", "-")}`}>
                      {project.status}
                    </span>
                  </div>

                  <span className="freelancer-project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p className="freelancer-project-client">{project.client}</p>

                  <div className="freelancer-project-progress-heading">
                    <span>Project progress</span>
                    <strong>{project.progress}%</strong>
                  </div>
                  <div className="freelancer-progress-track freelancer-project-progress">
                    <span style={{ width: `${project.progress}%` }} />
                  </div>

                  <div className="freelancer-project-meta">
                    <span><CalendarDays size={13} /> {project.deadline}</span>
                    <strong>{fmtMoney(project.budget)}</strong>
                  </div>

                  <button
                    className="freelancer-project-open"
                    onClick={() => setSelectedProject(project)}
                  >
                    Manage project <ArrowRight size={14} />
                  </button>
                </article>
              ))}

              {filteredProjects.length === 0 && (
                <div className="freelancer-empty">
                  No projects found. Try a different search or create a project.
                </div>
              )}
            </div>

            <p className="freelancer-sample-note">
              Sample project data. Changes stay in the current page session and are not saved to a database.
            </p>
          </div>
        </section>

        <section className="freelancer-final-cta">
          <div className="freelancer-cta-glow" />
          <div className="eyebrow"><Sparkles size={14} /> YOUR WORK, BETTER ORGANIZED</div>
          <h2>
            Spend less time
            <br />
            <span className="gradient-text">juggling the details.</span>
          </h2>
          <p>Build a more organized workflow for your clients, projects, and creator partnerships.</p>
          <div className="freelancer-hero-actions">
            <a className="button button-primary" href="/get-started">Get started <ArrowRight size={16} /></a>
            <a className="button button-quiet" href="/book-a-demo">Book a demo</a>
          </div>
        </section>

        {selectedProject && (
          <div
            className="freelancer-modal-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
            <section className="freelancer-modal" role="dialog" aria-modal="true" aria-labelledby="freelancer-modal-title">
              <div className="freelancer-modal-heading">
                <div>
                  <span className="eyebrow">PROJECT DETAILS</span>
                  <h2 id="freelancer-modal-title">{selectedProject.name}</h2>
                  <p>{selectedProject.client} · {selectedProject.type}</p>
                </div>
                <button onClick={() => setSelectedProject(null)} aria-label="Close project details">
                  <X size={19} />
                </button>
              </div>

              <div className="freelancer-modal-stats">
                <div><span>Budget</span><strong>{fmtMoney(selectedProject.budget)}</strong></div>
                <div><span>Deadline</span><strong>{selectedProject.deadline}</strong></div>
                <div><span>Progress</span><strong>{selectedProject.progress}%</strong></div>
              </div>

              <label className="freelancer-modal-status">
                Project status
                <select
                  value={selectedProject.status}
                  onChange={(event) => updateProjectStatus(selectedProject.id, event.target.value as ProjectStatus)}
                >
                  <option>Planning</option>
                  <option>In progress</option>
                  <option>Completed</option>
                </select>
              </label>

              <button className="button button-primary freelancer-modal-done" onClick={() => setSelectedProject(null)}>
                Done
              </button>
            </section>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
