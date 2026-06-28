import React from "react";
import ServiceLayout from "./components/ServiceLayout";

const capabilities = [
  { title: "API Development", desc: "REST & GraphQL APIs, integrations & auth systems." },
  { title: "SaaS Platforms", desc: "Roles, usage tracking, billing & dashboards." },
  { title: "Full-stack Engineering", desc: "React, Node.js, Django, Laravel & more." },
  { title: "Cloud & DevOps", desc: "AWS, GCP & Azure with CI/CD pipelines." },
];

const highlights = [
  {
    title: "E-Learning SaaS Platform",
    desc: "Courses, gamification, progress tracking & video hosting.",
    img: "https://flatlogic.com/blog/wp-content/uploads/2024/03/Screenshot-2024-02-29-at-15.22.25-1024x503.png",
  },
  {
    title: "Real-time Chat & Support",
    desc: "Live WebSocket chat engine with agent routing.",
    img: "https://www.liveagent.com/wp/urlslab-download/e6864b61a2589bb97296e4b50d226108/Mockup-Real-time-chat.png",
  },
  {
    title: "Custom CRM & Analytics",
    desc: "Logistics CRM with activity tracking & dashboards.",
    img: "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/50011530829/original/TQ73ndl5zvOkgISx_7fRhe_1NPWLXHKzng.png?1713075395",
  },
];

const WebDev = () => (
  <ServiceLayout
    docTitle="Golden Arc Labs | Web & SaaS Development"
    badge="Build Realm"
    title="SCALABLE WEB & SAAS SOLUTIONS"
    subtitle="We develop reliable, scalable and secure web services that power modern applications and digital businesses."
    video="/videos/development.mp4"
    capabilities={capabilities}
    highlights={highlights}
    cta={{
      title: "LAUNCH YOUR SAAS WITH US",
      text: "From APIs to production-ready platforms, Golden Arc Labs delivers complete SaaS engineering.",
      label: "Start Building",
    }}
  />
);

export default WebDev;
