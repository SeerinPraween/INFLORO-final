
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Heart,
  Instagram,
  Search,
  SlidersHorizontal,
  Sparkles,
  Users,
  Youtube,
  Video,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Creator = {
  id: number;
  name: string;
  handle: string;
  niche: string;
  platform: string;
  followers: number;
  engagement: number;
  match: number;
  location: string;
  initials: string;
  avatar: string;
  tags: string[];
};

const creators: Creator[] = [
  {
    id: 1,
    name: "Ava Mitchell",
    handle: "@avamitchell",
    niche: "Lifestyle",
    platform: "Instagram",
    followers: 84500,
    engagement: 5.8,
    match: 96,
    location: "New York, USA",
    initials: "AM",
    avatar: "avatar-lilac",
    tags: ["Lifestyle", "Fashion", "Daily life"],
  },
  {
    id: 2,
    name: "Sophia James",
    handle: "@sophiajames",
    niche: "Beauty",
    platform: "YouTube",
    followers: 126000,
    engagement: 6.4,
    match: 93,
    location: "London, UK",
    initials: "SJ",
    avatar: "avatar-peach",
    tags: ["Skincare", "Beauty", "Reviews"],
  },
  {
    id: 3,
    name: "Riley Kim",
    handle: "@rileykim",
    niche: "Wellness",
    platform: "Instagram",
    followers: 62800,
    engagement: 7.2,
    match: 91,
    location: "Toronto, Canada",
    initials: "RK",
    avatar: "avatar-mint",
    tags: ["Wellness", "Fitness", "Mindful living"],
  },
  {
    id: 4,
    name: "Noah Williams",
    handle: "@noahcreates",
    niche: "Technology",
    platform: "TikTok",
    followers: 214000,
    engagement: 5.1,
    match: 89,
    location: "Austin, USA",
    initials: "NW",
    avatar: "avatar-blue",
    tags: ["Tech", "Gadgets", "Innovation"],
  },
  {
    id: 5,
    name: "Mia Laurent",
    handle: "@mialaurent",
    niche: "Fashion",
    platform: "Instagram",
    followers: 97300,
    engagement: 6.9,
    match: 88,
    location: "Paris, France",
    initials: "ML",
    avatar: "avatar-rose",
    tags: ["Fashion", "Style", "Outfits"],
  },
  {
    id: 6,
    name: "Ethan Brooks",
    handle: "@ethanbrooks",
    niche: "Travel",
    platform: "YouTube",
    followers: 182000,
    engagement: 4.9,
    match: 86,
    location: "Sydney, Australia",
    initials: "EB",
    avatar: "avatar-sand",
    tags: ["Travel", "Adventure", "Culture"],
  },
];

const niches = [
  "All niches",
  "Lifestyle",
  "Beauty",
  "Wellness",
  "Technology",
  "Fashion",
  "Travel",
];

const platforms = ["All platforms", "Instagram", "TikTok", "YouTube"];

function formatFollowers(count: number) {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(count >= 100000 ? 0 : 1)}K`;
  return String(count);
}

function PlatformIcon({ platform }: { platform: string }) {
  if (platform === "YouTube") return <Youtube size={14} />;
  if (platform === "TikTok") return <Video size={14} />;
  return <Instagram size={14} />;
}

export default function CreatorDiscoveryPage() {
  const [search, setSearch] = useState("");
  const [niche, setNiche] = useState("All niches");
  const [platform, setPlatform] = useState("All platforms");
  const [minimumFollowers, setMinimumFollowers] = useState("0");
  const [sortBy, setSortBy] = useState("match");
  const [savedCreators, setSavedCreators] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCreators = useMemo(() => {
    const query = search.trim().toLowerCase();

    return creators
      .filter((creator) => {
        const matchesSearch =
          !query ||
          [creator.name, creator.handle, creator.niche, ...creator.tags]
            .some((value) => value.toLowerCase().includes(query));

        const matchesNiche =
          niche === "All niches" || creator.niche === niche;

        const matchesPlatform =
          platform === "All platforms" || creator.platform === platform;

        const matchesFollowers =
          creator.followers >= Number(minimumFollowers);

        return (
          matchesSearch &&
          matchesNiche &&
          matchesPlatform &&
          matchesFollowers
        );
      })
      .sort((a, b) =>
        sortBy === "followers"
          ? b.followers - a.followers
          : sortBy === "engagement"
            ? b.engagement - a.engagement
            : b.match - a.match
      );
  }, [search, niche, platform, minimumFollowers, sortBy]);

  function toggleSaved(id: number) {
    setSavedCreators((current) =>
      current.includes(id)
        ? current.filter((creatorId) => creatorId !== id)
        : [...current, id]
    );
  }

  function resetFilters() {
    setSearch("");
    setNiche("All niches");
    setPlatform("All platforms");
    setMinimumFollowers("0");
    setSortBy("match");
  }

  return (
    <>
      <Navbar />

      <main className="discovery-page">
        <section className="discovery-hero">
          <div className="discovery-hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              AI-POWERED CREATOR DISCOVERY
            </div>

            <h1>
              Find your people.
              <br />
              <span className="gradient-text">Build your influence.</span>
            </h1>

            <p>
              Discover creators who align with your brand, connect with the
              right audiences, and turn better matches into meaningful
              partnerships.
            </p>

            <a href="#creator-explorer" className="button button-primary">
              Explore creators <ArrowRight size={15} />
            </a>

            <div className="discovery-proof">
              <span><Check size={13} /> Audience-first discovery</span>
              <span><Check size={13} /> Smarter shortlisting</span>
            </div>
          </div>

          <div className="discovery-hero-visual" aria-label="Illustration of AI matching creators to a brand">
            <div className="discovery-visual-orbit" />
            <div className="discovery-visual-glow" />

            <div className="discovery-ai-card">
              <div className="discovery-ai-heading">
                <span className="discovery-ai-icon">
                  <Sparkles size={17} />
                </span>
                <div>
                  <strong>AI match insights</strong>
                  <span>Campaign: Everyday essentials</span>
                </div>
                <span className="discovery-live">ACTIVE</span>
              </div>

              <div className="discovery-match-line">
                <span>Audience relevance</span>
                <strong>96%</strong>
              </div>
              <div className="discovery-progress">
                <span style={{ width: "96%" }} />
              </div>

              <div className="discovery-match-line">
                <span>Content alignment</span>
                <strong>91%</strong>
              </div>
              <div className="discovery-progress">
                <span style={{ width: "91%" }} />
              </div>

              <div className="discovery-match-line">
                <span>Engagement quality</span>
                <strong>88%</strong>
              </div>
              <div className="discovery-progress">
                <span style={{ width: "88%" }} />
              </div>

              <div className="discovery-ai-foot">
                <Check size={14} />
                Your shortlist is taking shape
              </div>
            </div>

            <div className="discovery-float discovery-float-top">
              <Sparkles size={15} />
              <div><strong>Better-fit creators</strong><span>Based on your campaign</span></div>
            </div>

            <div className="discovery-float discovery-float-bottom">
              <Users size={16} />
              <div><strong>Audience aligned</strong><span>Quality over quantity</span></div>
            </div>
          </div>
        </section>

        <section className="discovery-explorer" id="creator-explorer">
          <div className="discovery-section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                YOUR NEXT COLLABORATION
              </div>
              <h2>Meet your potential <span className="gradient-text">matches.</span></h2>
              <p>Explore sample creator profiles and try the filters to find a better fit.</p>
            </div>

            <div className="discovery-result-count">
              <Users size={16} />
              <span><strong>{filteredCreators.length}</strong> profiles shown</span>
            </div>
          </div>

          <div className="creator-toolbar">
            <label className="creator-search">
              <Search size={17} />
              <input
                type="search"
                placeholder="Search names, niches, or interests..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search creators"
              />
            </label>

            <button
              className={`button button-quiet creator-filter-toggle${showFilters ? " filter-active" : ""}`}
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              aria-expanded={showFilters}
            >
              <SlidersHorizontal size={15} />
              Filters
              <ChevronDown size={14} />
            </button>

            <label className="creator-sort">
              <span>Sort by</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                aria-label="Sort creators"
              >
                <option value="match">Best match</option>
                <option value="engagement">Engagement</option>
                <option value="followers">Followers</option>
              </select>
            </label>
          </div>

          {showFilters && (
            <div className="creator-filter-panel">
              <label>
                <span>Creator niche</span>
                <select value={niche} onChange={(event) => setNiche(event.target.value)}>
                  {niches.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>

              <label>
                <span>Platform</span>
                <select value={platform} onChange={(event) => setPlatform(event.target.value)}>
                  {platforms.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>

              <label>
                <span>Minimum followers</span>
                <select
                  value={minimumFollowers}
                  onChange={(event) => setMinimumFollowers(event.target.value)}
                >
                  <option value="0">Any audience size</option>
                  <option value="50000">50K+</option>
                  <option value="100000">100K+</option>
                  <option value="200000">200K+</option>
                </select>
              </label>

              <button type="button" className="discovery-reset" onClick={resetFilters}>
                Reset filters
              </button>
            </div>
          )}

          <div className="creator-grid">
            {filteredCreators.map((creator) => (
              <article className="creator-card" key={creator.id}>
                <div className="creator-card-cover">
                  <span className="creator-category">{creator.niche}</span>
                  <button
                    className={`creator-save${savedCreators.includes(creator.id) ? " is-saved" : ""}`}
                    type="button"
                    aria-label={
                      savedCreators.includes(creator.id)
                        ? `Remove ${creator.name} from shortlist`
                        : `Save ${creator.name} to shortlist`
                    }
                    aria-pressed={savedCreators.includes(creator.id)}
                    onClick={() => toggleSaved(creator.id)}
                  >
                    <Heart size={17} fill={savedCreators.includes(creator.id) ? "currentColor" : "none"} />
                  </button>
                  <div className={`creator-avatar ${creator.avatar}`}>
                    {creator.initials}
                  </div>
                  <span className="creator-match-badge">
                    <Sparkles size={11} /> {creator.match}% match
                  </span>
                </div>

                <div className="creator-card-body">
                  <div className="creator-name-row">
                    <div>
                      <h3>{creator.name}</h3>
                      <span className="creator-handle">{creator.handle}</span>
                    </div>
                    <span className="creator-platform" title={creator.platform}>
                      <PlatformIcon platform={creator.platform} />
                    </span>
                  </div>

                  <p className="creator-location">{creator.location}</p>

                  <div className="creator-metrics">
                    <div><strong>{formatFollowers(creator.followers)}</strong><span>Followers</span></div>
                    <div><strong>{creator.engagement}%</strong><span>Engagement</span></div>
                  </div>

                  <div className="creator-tags">
                    {creator.tags.slice(0, 2).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className={`creator-shortlist${savedCreators.includes(creator.id) ? " shortlisted" : ""}`}
                    onClick={() => toggleSaved(creator.id)}
                  >
                    {savedCreators.includes(creator.id) ? (
                      <><Check size={14} /> Added to shortlist</>
                    ) : (
                      <>Add to shortlist <ArrowUpRight size={14} /></>
                    )}
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredCreators.length === 0 && (
            <div className="creator-empty">
              <Search size={25} />
              <h3>No creators found</h3>
              <p>Try another search term or adjust your filters.</p>
              <button type="button" className="button button-primary" onClick={resetFilters}>
                Clear filters
              </button>
            </div>
          )}

          <p className="creator-demo-note">
            These are illustrative sample profiles for UI demonstration, not verified real creators.
          </p>
        </section>

        <section className="section">
          <div className="section-inner bottom-cta">
            <div>
              <div className="eyebrow"><Sparkles size={13} /> YOUR NEXT GREAT MATCH</div>
              <h2>Make every creator search count.</h2>
              <p>See how Infloro can support your creator discovery workflow.</p>
            </div>
            <Link href="/book-a-demo" className="button button-primary">
              Book a demo <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
