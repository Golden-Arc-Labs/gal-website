import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const WebDev = () => {
  let capabilities = [
    {
      title: "API Development & Integration",
      desc: "RESTful, GraphQL APIs, 3rd-party system integration, and auth systems",
    },
    {
      title: "SaaS Platforms",
      desc: "Admin/user roles, usage tracking, billing workflows, and dashboards",
    },
    {
      title: "Full-stack Engineering",
      desc: "Frontend and backend using React, Node.js, Django, Laravel, etc.",
    },
    {
      title: "Cloud & DevOps",
      desc: "Deployment and scaling on AWS, GCP, Azure with CI/CD pipelines",
    },
  ];

  let highlights = [
    {
      title: "E-Learning SaaS Platform",
      desc: "Education portal with courses, gamification, progress tracking & video hosting",
      // img: "/images/elearning-saas.jpg"
      img: "https://flatlogic.com/blog/wp-content/uploads/2024/03/Screenshot-2024-02-29-at-15.22.25-1024x503.png",
    },
    {
      title: "Real-time Chat & Support System",
      desc: "Live WebSocket chat engine with agent routing for e-commerce support",
      // img: "/images/chat-support.jpg"
      img: "https://www.liveagent.com/wp/urlslab-download/e6864b61a2589bb97296e4b50d226108/Mockup-Real-time-chat.png",
    },
    {
      title: "Custom CRM & Analytics Suite",
      desc: "Logistics-focused CRM with team activity tracking and performance dashboards",
      // img: "/images/crm-suite.jpg"
      img: "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/50011530829/original/TQ73ndl5zvOkgISx_7fRhe_1NPWLXHKzng.png?1713075395",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-screen max-w-[100vw]  m-auto">
      <section className="relative h-screen w-full overflow-hidden rounded-t">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/development.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🧩 Scalable Web & SaaS Solutions
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            We develop reliable, scalable, and secure web services that power
            modern applications and digital businesses.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          🚀 Our Capabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8  max-w-[100vw] md:max-w-[90vw] lg:max-w-[60vw]  m-auto">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          🎯 Portfolio Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-violet-300 via-violet-500 to-violet-700 text-white text-center py-20">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Launch Your SaaS Product with Us
        </h2>
        <p className="mb-8 text-xl md:text-2xl">
          From APIs to production-ready platforms, GoldenArcLabs delivers
          complete SaaS engineering services.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition text-2xl"
        >
          Start Building Today
        </Link>
      </section>
    </div>
  );
};

export default WebDev;
