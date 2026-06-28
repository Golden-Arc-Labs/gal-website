import React from "react";
import ServiceLayout from "./components/ServiceLayout";

const capabilities = [
  { title: "On & Off-page SEO", desc: "Site optimization, metadata & backlink strategy." },
  { title: "Technical SEO & Audits", desc: "Speed, indexing, crawlability & benchmarking." },
  { title: "Local SEO", desc: "Map listings, citations & geo-targeted results." },
  { title: "Content & Link Building", desc: "Keyword-rich content, blogs & outreach." },
];

const highlights = [
  {
    title: "E-commerce SEO Campaign",
    desc: "120% traffic growth in 6 months and 85% more organic sales.",
    img: "https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-SEO.jpg",
  },
  {
    title: "Local SEO for Healthcare",
    desc: "Ranked top 3 in Google local results in under 3 months.",
    img: "https://www.webindiamaster.com/public/uploads/choose-seo.jpg",
  },
  {
    title: "B2B Tech Blog Strategy",
    desc: "Generated 10,000+ monthly visits via optimized content.",
    img: "https://firstpagesage.com/wp-content/uploads/2022/01/B2B-SaaS-Graphic-with-logo.jpg",
  },
];

const Seo = () => (
  <ServiceLayout
    docTitle="Golden Arc Labs | SEO & Digital Marketing"
    badge="Growth Realm"
    title="SEO & DIGITAL MARKETING"
    subtitle="We help businesses climb the rankings leaderboard, drive traffic and convert leads into loyal customers."
    video="/videos/seo.mp4"
    capabilities={capabilities}
    highlights={highlights}
    cta={{
      title: "LET'S DRIVE YOUR GROWTH",
      text: "Partner with Golden Arc Labs to boost rankings, capture leads and grow revenue organically.",
      label: "Get A Free Audit",
    }}
  />
);

export default Seo;
