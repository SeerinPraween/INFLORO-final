
"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Download,
  Eye,
  MousePointerClick,
  ShoppingBag,
  Users,
} from "lucide-react";

type Period = "7d" | "30d" | "90d";

const periods: Record<Period, { label: string; multiplier: number }> = {
  "7d": { label: "Last 7 days", multiplier: 0.28 },
  "30d": { label: "Last 30 days", multiplier: 1 },
  "90d": { label: "Last 90 days", multiplier: 2.7 },
};

const performance = [
  { day: "Mon", reach: 38, engagement: 24 },
  { day: "Tue", reach: 55, engagement: 32 },
  { day: "Wed", reach: 46, engagement: 29 },
  { day: "Thu", reach: 72, engagement: 42 },
  { day: "Fri", reach: 63, engagement: 36 },
  { day: "Sat", reach: 88, engagement: 55 },
  { day: "Sun", reach: 78, engagement: 47 },
];

const campaigns = [
  {
    name: "Summer Glow Launch",
    category: "Beauty",
    creators: 18,
    reach: 245000,
    engagement: 8.4,
    conversions: 1240,
    color: "#9575f5",
  },
  {
    name: "Everyday Essentials",
    category: "Lifestyle",
    creators: 12,
    reach: 186000,
    engagement: 6.9,
    conversions: 890,
    color: "#53b7a3",
  },
  {
    name: "Move With Purpose",
    category: "Fitness",
    creators: 9,
    reach: 142000,
    engagement: 7.6,
    conversions: 670,
    color: "#f0ad65",
  },
];

const creators = [
  { name: "Aarav Mehta", handle: "@aaravcreates", niche: "Lifestyle", reach: 82400, engagement: 9.2, conversions: 214 },
  { name: "Mira Sharma", handle: "@mirastudio", niche: "Beauty", reach: 76800, engagement: 8.7, conversions: 192 },
  { name: "Riya Kapoor", handle: "@riyafitlife", niche: "Fitness", reach: 62400, engagement: 7.9, conversions: 168 },
  { name: "Kabir Verma", handle: "@kabirvisuals", niche: "Lifestyle", reach: 51800, engagement: 7.4, conversions: 126 },
];

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-IN").format(Math.round(value));
}

function downloadCSV() {
  const rows = [
    ["Campaign", "Category", "Creators", "Reach", "Engagement Rate", "Conversions"],
    ...campaigns.map((campaign) => [
      campaign.name,
      campaign.category,
      campaign.creators,
      campaign.reach,
      `${campaign.engagement}%`,
      campaign.conversions,
    ]),
  ];

  const csv = rows
    .map((row) =>
      row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",")
    )
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "infloro-campaign-analytics.csv";
  link.click();
  URL.revokeObjectURL(url);
}

export default function AnalyticsPage() {
  const [period, setPeriod] = useState<Period>("30d");
  const [campaignFilter, setCampaignFilter] = useState("All campaigns");
  const [creatorSearch, setCreatorSearch] = useState("");

  const multiplier = periods[period].multiplier;

  const filteredCreators = useMemo(
    () =>
      creators.filter((creator) =>
        `${creator.name} ${creator.handle} ${creator.niche}`
          .toLowerCase()
          .includes(creatorSearch.toLowerCase())
      ),
    [creatorSearch]
  );

  const visibleCampaigns =
    campaignFilter === "All campaigns"
      ? campaigns
      : campaigns.filter((campaign) => campaign.name === campaignFilter);

  const metrics = [
    {
      label: "Total reach",
      value: `${(12.8 * multiplier).toFixed(1)}M`,
      change: "+18.6%",
      icon: Eye,
      description: "Across all campaigns",
    },
    {
      label: "Engagement rate",
      value: `${(7.8 + (period === "7d" ? 0.3 : 0)).toFixed(1)}%`,
      change: "+2.4%",
      icon: MousePointerClick,
      description: "Average engagement",
    },
    {
      label: "Active creators",
      value: formatNumber(84 * (period === "90d" ? 1.4 : period === "7d" ? 0.7 : 1)),
      change: "+12.8%",
      icon: Users,
      description: "Across your campaigns",
    },
    {
      label: "Conversions",
      value: formatNumber(3260 * multiplier),
      change: "+24.3%",
      icon: ShoppingBag,
      description: "Tracked campaign actions",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="analytics-page">
        <section className="analytics-shell">
          <div className="analytics-heading">
            <div>
              <div className="eyebrow">
                <BarChart3 size={15} /> PERFORMANCE INTELLIGENCE
              </div>
              <h1>
                Your data.
                <br />
                <span className="gradient-text">Your next big move.</span>
              </h1>
              <p>
                Turn creator campaign performance into clearer decisions,
                stronger partnerships, and measurable growth.
              </p>
            </div>

            <div className="analytics-actions">
              <label className="analytics-select-wrap">
                <CalendarDays size={16} />
                <select
                  aria-label="Date range"
                  value={period}
                  onChange={(event) => setPeriod(event.target.value as Period)}
                >
                  {Object.entries(periods).map(([value, option]) => (
                    <option key={value} value={value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <button className="button button-primary" onClick={downloadCSV}>
                <Download size={16} /> Export report
              </button>
            </div>
          </div>

          <div className="analytics-demo-note">
            <span className="analytics-live-dot" />
            Sample analytics dashboard
            <span>Illustrative data · Not connected to a live account</span>
          </div>

          <div className="analytics-metrics">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <article className="analytics-metric" key={metric.label}>
                  <div className="analytics-metric-top">
                    <span>{metric.label}</span>
                    <span className="analytics-icon">
                      <Icon size={18} />
                    </span>
                  </div>

                  <div className="analytics-metric-value">{metric.value}</div>

                  <div className="analytics-metric-bottom">
                    <span className="analytics-positive">
                      <ArrowUpRight size={14} />
                      {metric.change}
                    </span>
                    <span>{metric.description}</span>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="analytics-main-grid">
            <section className="analytics-panel analytics-chart-panel">
              <div className="analytics-panel-heading">
                <div>
                  <h2>Campaign performance</h2>
                  <p>Reach and engagement across the week</p>
                </div>
                <span className="analytics-chart-legend">
                  <span><i className="legend-purple" /> Reach</span>
                  <span><i className="legend-green" /> Engagement</span>
                </span>
              </div>

              <div className="analytics-chart">
                <div className="analytics-y-labels">
                  <span>100</span>
                  <span>75</span>
                  <span>50</span>
                  <span>25</span>
                  <span>0</span>
                </div>

                <div className="analytics-chart-content">
                  <div className="analytics-grid-lines">
                    {[0, 1, 2, 3, 4].map((line) => (
                      <span key={line} />
                    ))}
                  </div>

                  <div className="analytics-bars">
                    {performance.map((item) => (
                      <div className="analytics-bar-group" key={item.day}>
                        <div className="analytics-bar-pair">
                          <div
                            className="analytics-bar analytics-bar-reach"
                            style={{
                              height: `${item.reach}%`,
                              animationDelay: `${performance.indexOf(item) * 60}ms`,
                            }}
                            title={`Reach index: ${item.reach}`}
                          />
                          <div
                            className="analytics-bar analytics-bar-engagement"
                            style={{
                              height: `${item.engagement}%`,
                              animationDelay: `${performance.indexOf(item) * 60}ms`,
                            }}
                            title={`Engagement index: ${item.engagement}`}
                          />
                        </div>
                        <span className="analytics-day">{item.day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="analytics-chart-footnote">
                <span><ArrowUpRight size={15} /> Performance is trending upward</span>
                <span>Normalized index</span>
              </div>
            </section>

            <section className="analytics-panel analytics-breakdown-panel">
              <div className="analytics-panel-heading">
                <div>
                  <h2>Audience breakdown</h2>
                  <p>Who your campaigns are reaching</p>
                </div>
              </div>

              <div className="analytics-donut-wrap">
                <div className="analytics-donut">
                  <div>
                    <strong>68%</strong>
                    <span>Target audience</span>
                  </div>
                </div>
              </div>

              <div className="analytics-audience-list">
                <div>
                  <span><i className="audience-dot audience-purple" /> Target audience</span>
                  <strong>68%</strong>
                </div>
                <div>
                  <span><i className="audience-dot audience-green" /> Adjacent audience</span>
                  <strong>22%</strong>
                </div>
                <div>
                  <span><i className="audience-dot audience-orange" /> Other audiences</span>
                  <strong>10%</strong>
                </div>
              </div>
            </section>
          </div>

          <section className="analytics-panel analytics-campaign-panel">
            <div className="analytics-panel-heading analytics-table-heading">
              <div>
                <h2>Campaign breakdown</h2>
                <p>Compare reach, engagement, and conversions</p>
              </div>

              <select
                className="analytics-filter"
                aria-label="Filter campaigns"
                value={campaignFilter}
                onChange={(event) => setCampaignFilter(event.target.value)}
              >
                <option>All campaigns</option>
                {campaigns.map((campaign) => (
                  <option key={campaign.name}>{campaign.name}</option>
                ))}
              </select>
            </div>

            <div className="analytics-table-scroll">
              <table className="analytics-table">
                <thead>
                  <tr>
                    <th>Campaign</th>
                    <th>Creators</th>
                    <th>Reach</th>
                    <th>Engagement</th>
                    <th>Conversions</th>
                    <th>Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleCampaigns.map((campaign) => (
                    <tr key={campaign.name}>
                      <td>
                        <div className="analytics-campaign-name">
                          <span style={{ background: campaign.color }} />
                          <div>
                            <strong>{campaign.name}</strong>
                            <small>{campaign.category}</small>
                          </div>
                        </div>
                      </td>
                      <td>{campaign.creators}</td>
                      <td>{formatNumber(campaign.reach * multiplier)}</td>
                      <td>{campaign.engagement}%</td>
                      <td>{formatNumber(campaign.conversions * multiplier)}</td>
                      <td>
                        <div className="analytics-mini-progress">
                          <span
                            style={{
                              width: `${Math.min(campaign.engagement * 10, 100)}%`,
                              background: campaign.color,
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {visibleCampaigns.length === 0 && (
                <p className="analytics-empty">No campaigns match this filter.</p>
              )}
            </div>
          </section>

          <section className="analytics-panel analytics-creators-panel">
            <div className="analytics-panel-heading analytics-table-heading">
              <div>
                <h2>Top creator performance</h2>
                <p>Identify creators delivering meaningful results</p>
              </div>

              <input
                className="analytics-search"
                placeholder="Search creators..."
                aria-label="Search creators"
                value={creatorSearch}
                onChange={(event) => setCreatorSearch(event.target.value)}
              />
            </div>

            <div className="analytics-creator-list">
              {filteredCreators.map((creator, index) => (
                <div className="analytics-creator-row" key={creator.handle}>
                  <div className="analytics-creator-identity">
                    <div className={`analytics-avatar analytics-avatar-${index % 4}`}>
                      {creator.name.split(" ").map((part) => part[0]).join("")}
                    </div>
                    <div>
                      <strong>{creator.name}</strong>
                      <span>{creator.handle} · {creator.niche}</span>
                    </div>
                  </div>

                  <div className="analytics-creator-stat">
                    <span>Reach</span>
                    <strong>{formatNumber(creator.reach * multiplier)}</strong>
                  </div>

                  <div className="analytics-creator-stat">
                    <span>Engagement</span>
                    <strong>{creator.engagement}%</strong>
                  </div>

                  <div className="analytics-creator-stat">
                    <span>Conversions</span>
                    <strong>{formatNumber(creator.conversions * multiplier)}</strong>
                  </div>

                  <div className="analytics-creator-trend">
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              ))}

              {filteredCreators.length === 0 && (
                <p className="analytics-empty">No creators found. Try another search.</p>
              )}
            </div>
          </section>

          <section className="analytics-report-cta">
            <div className="analytics-report-icon">
              <BarChart3 size={25} />
            </div>
            <div>
              <h2>Make your next campaign your best one.</h2>
              <p>Export the sample campaign report to explore the reporting format.</p>
            </div>
            <button className="button button-primary" onClick={downloadCSV}>
              <Download size={16} /> Download CSV
            </button>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}
