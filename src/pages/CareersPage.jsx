import { useState } from "react";

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
  const categories = Object.keys(jobsData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800" id="careersMain">
      <section
        className="bg-gradient-to-r from-violet-300 via-violet-500 to-violet-700 text-white py-20 text-center "
        id="careersMain"
      >
        <h1 className="text-4xl md:text-6xl font-bold">Join GoldenArcLabs</h1>
        <p className="text-xl mt-4 ">
          We're building the future—come build it with us.
        </p>
      </section>

      {/* Category Tabs */}
      <div className="flex justify-center mt-10 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full font-medium ${
              activeCategory === category
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Job Listings */}
      <div className="max-w-4xl mx-auto px-4 py-12 grid gap-6">
        {jobsData[activeCategory].map((job, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg border border-gray-200"
          >
            <div className="flex justify-between items-start flex-col md:flex-row">
              <div>
                <h3 className="text-2xl font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-500">
                  {job.location} • {job.type}
                </p>
              </div>
              <a
                href={job.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                Apply
              </a>
            </div>
            <p className="mt-4 text-gray-700 whitespace-pre-line">
              {job.description.trim()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
