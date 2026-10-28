import Link from "next/link";

const groups = [
  { title: "Features", links: [
    ["Creator Discovery", "/features/creator-discovery"], ["AI-Assisted Recommendations", "/features/creator-discovery"],
    ["Outreach & Creator CRM", "/features/creator-crm"], ["Creator Qualification & Deal Management", "/features/deal-management"],
    ["Campaign Management", "/features/campaign-management"], ["UGC Content & Marketplace", "/features/ugc-content"],
    ["Affiliate Marketing", "/features/creator-commerce"], ["Analytics & Reports", "/features/analytics"], ["Integrations", "/features/integrations"]
  ]},
  { title: "Solutions", links: [["For Brands", "/solutions/brands"], ["For Agencies", "/solutions/agencies"], ["For Freelancers", "/solutions/freelancers"], ["For Enterprise", "/solutions/enterprise"], ["For Creators", "/solutions/creators"]] },
  { title: "Creator Marketplace", links: [["Discover Opportunities", "/creator-marketplace"], ["Brand Campaigns", "/creator-marketplace/brand-campaigns"], ["UGC Projects", "/creator-marketplace/ugc-projects"], ["Affiliate Opportunities", "/creator-marketplace/affiliate-opportunities"], ["How It Works", "/creator-marketplace/how-it-works"]] },
  { title: "Resources", links: [["Blog", "/resources/blog"], ["Guides & Tutorials", "/resources/guides"], ["Templates", "/resources/templates"], ["Case Studies", "/resources/case-studies"], ["Reports", "/resources/reports"], ["Webinars", "/resources/webinars"], ["Glossary", "/resources/glossary"], ["Playbooks", "/resources/playbooks"], ["Help Center", "/resources/help-center"]] },
    {
    title: "Company",
    links: [
      ["About Infloro", "/about"],
      ["Contact Us", "/contact"],
      ["Book a Demo", "/book-a-demo"],
      ["Get Started", "/get-started"],
    ],
  },
] as const;

export default function Footer() {
  return <footer className="footer">
    <div className="footer-main">
      <div className="footer-brand"><Link href="/" className="footer-logo">infloro</Link><p>Infloro — AI-Powered Creator Marketing &amp; Commerce</p><p>Discover creators, manage relationships, launch brand campaigns, coordinate UGC projects, organize affiliate promotions, and understand campaign performance through one connected platform.</p><Link className="button button-primary footer-cta" href="/get-started">Ready to build better creator campaigns? Get started →</Link></div>
      {groups.map(group => <div className="footer-group" key={group.title}><h3>{group.title}</h3>{group.links.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}</div>)}
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Infloro. All rights reserved.</span><div className="footer-links"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link><Link href="/contact">Contact</Link></div></div>
  </footer>;
}
