import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ARVR = () => {
  let capabilities = [
    { title: "Cross-platform VR", desc: "Oculus, Vive, WebXR" },
    { title: "AR Mobile Apps", desc: "iOS, Android, WebAR filters" },
    { title: "Virtual Showrooms", desc: "3D product visualization" },
    {
      title: "Training Simulations",
      desc: "Interactive & educational",
    },
  ];

  let highlights = [
    {
      title: "VR Museum Walkthrough",
      desc: "Immersive app with object highlights & voiceovers",
      img: "https://images.unsplash.com/photo-1639174326326-6e2ef8d8ae39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "AR Learning App for Kids",
      desc: "Gamified AR modules for early education",
      img: "https://dyebikr0297u5.cloudfront.net/augmented_reality_in_education_93f921b120.png",
    },
    {
      title: "Industrial AR Maintenance Tool",
      desc: "Real-time overlay for machine diagnostics",
      img: "https://informationage-production.s3.amazonaws.com/uploads/2022/10/augmented-reality-business-tool-industry-4-0.jpeg",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen max-w-[100vw]  m-auto">
      {/* <Card/> */}
      <section className="relative h-screen w-full overflow-hidden rounded-t">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/ar.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🔮 Bridging Realities with AR & VR
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            At GoldenArcLabs, we bring the virtual and physical worlds together
            to create unforgettable user experiences. Our AR (Augmented Reality)
            and VR (Virtual Reality) solutions are designed for a wide range of
            industries—from education and healthcare to gaming and real estate.
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
          Let's Build the Future Together
        </h2>
        <p className="mb-8 text-xl md:text-2xl">
          Reach out to start your AR/VR journey with GoldenArcLabs
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition text-2xl"
        >
          Let's make the Idea Real NOW.
        </Link>
      </section>
    </div>
  );
};

export default ARVR;
