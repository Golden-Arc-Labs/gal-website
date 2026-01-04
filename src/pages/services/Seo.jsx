import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Seo = () => {
  let capabilities = [
    {
      title: "On-page & Off-page SEO",
      desc: "Site optimization, metadata, and backlink strategies",
    },
    {
      title: "Technical SEO & Audits",
      desc: "Speed, indexing, crawlability, and competitor benchmarking",
    },
    {
      title: "Local SEO",
      desc: "Map listings, citations, and geo-targeted results for service areas",
    },
    {
      title: "Content Strategy & Link Building",
      desc: "Keyword-rich content, blogs, and outreach campaigns",
    },
  ];

  let highlights = [
    {
      title: "E-commerce SEO Campaign",
      desc: "120% traffic growth in 6 months and 85% increase in organic sales",
      img: "https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-SEO.jpg",
      // img: "/images/ecommerce-seo.jpg",
    },
    {
      title: "Local SEO for Healthcare Chain",
      desc: "Ranked in Google's top 3 local results in under 3 months",
      img: "https://www.webindiamaster.com/public/uploads/choose-seo.jpg",
      // img: "/images/local-seo.jpg",
    },
    {
      title: "B2B Tech Blog Strategy",
      desc: "Generated 10,000+ monthly visits via keyword-optimized content",
      img: "https://firstpagesage.com/wp-content/uploads/2022/01/B2B-SaaS-Graphic-with-logo.jpg",
      // img: "/images/b2b-blog.jpg",
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
          src="/videos/seo.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            📈 SEO & Digital Marketing Services
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            We help businesses grow online visibility, drive traffic, and
            convert leads into loyal customers with targeted SEO and digital
            strategies.
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
          Let's Drive Your Growth with SEO
        </h2>
        <p className="mb-8 text-xl md:text-2xl">
          Partner with GoldenArcLabs to boost rankings, capture leads, and grow
          revenue organically.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition text-2xl"
        >
          Get a Free SEO Audit NOW
        </Link>
      </section>
    </div>
  );
};

export default Seo;
