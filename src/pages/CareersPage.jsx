import { useState } from "react";
import { useDocTitle } from "../components/CustomHook";

const jobsData = {
  Development: [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full Time",
      formUrl: "https://forms.gle/example1",
      description: `
        We are looking for a skilled Frontend Developer with strong knowledge of React.js, HTML/CSS, and UI/UX principles.
        Responsibilities include building responsive components, collaborating with designers, and optimizing performance.
        Experience with Tailwind CSS is a plus.
      `,
    },
    {
      title: "Backend Engineer",
      location: "Bangalore, India",
      type: "Full Time",
      formUrl: "https://forms.gle/example2",
      description: `
        As a Backend Engineer, you'll work with Node.js and databases (MongoDB, PostgreSQL) to build scalable APIs.
        Experience with REST, authentication, and real-time services (Socket.io) is preferred.
      `,
    },
  ],
  Design: [
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Contract",
      formUrl: "https://forms.gle/example3",
      description: `
        We're looking for a creative UI/UX Designer to design intuitive interfaces for our AR/VR products.
        Must be proficient in Figma or Adobe XD, and familiar with user testing and design systems.
      `,
    },
  ],
  Marketing: [
    {
      title: "Digital Marketing Specialist",
      location: "Remote",
      type: "Part Time",
      formUrl: "https://forms.gle/example4",
      description: `
        You will lead SEO, SEM, social media, and email campaigns to drive growth.
        Experience with Google Ads, analytics, and automation tools is required.
      `,
    },
  ],
};

export default function CareersPage() {
  useDocTitle("Golden Arc Labs | Careers");
  const categories = Object.keys(jobsData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="min-h-screen" id="careersMain">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 grid-panel opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="relative">
          <span className="chip mb-6">
            <span className="h-2 w-2 animate-glow-pulse rounded-full bg-fuchsia-500" />
            Now Recruiting
          </span>
          <h1 className="gaming-title text-glow text-4xl text-white md:text-6xl">
            JOIN THE <span className="neon-grad">GUILD</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-violet-200/75">
            We're building the future — grab your controller and build it with us.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-md px-5 py-2 font-display text-sm font-bold uppercase tracking-widest transition-all duration-200 ${
              activeCategory === category
                ? "btn-neon"
                : "border border-violet-500/30 text-violet-200/70 hover:border-fuchsia-500/60 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Job Listings */}
      <div className="mx-auto grid max-w-4xl gap-6 px-4 py-14">
        {jobsData[activeCategory].map((job, index) => (
          <div key={index} className="hud-card hud-card-hover p-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="gaming-title text-xl text-white">{job.title}</h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-violet-200/60">
                  <span className="chip !py-0.5 !text-[10px]">{job.location}</span>
                  <span className="chip !py-0.5 !text-[10px]">{job.type}</span>
                </p>
              </div>
              <a
                href={job.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon group shrink-0 !px-5 !py-2 !text-xs"
              >
                Apply Now
              </a>
            </div>
            <p className="mt-4 whitespace-pre-line text-violet-200/70">
              {job.description.trim()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
