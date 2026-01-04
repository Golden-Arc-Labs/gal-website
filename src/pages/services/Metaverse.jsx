import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Metaverse = () => {
  let capabilities = [
    {
      title: "Web & VR Platforms",
      desc: "Metaverse platforms accessible via browser or VR headsets",
    },
    {
      title: "Avatars & 3D Worlds",
      desc: "Custom avatars, multiplayer features, and immersive world-building",
    },
    {
      title: "NFT & Blockchain",
      desc: "Asset ownership via NFTs, tokenized content, smart contract integration",
    },
    {
      title: "Virtual Events & Hubs",
      desc: "Education, collaboration, and gamification in virtual space",
    },
  ];

  let highlights = [
    {
      title: "MetaCity",
      desc: "A connected virtual city with modular real estate and NPC interaction",
      img: "https://oulu.com/wp-content/uploads/2023/05/oia-metacity-1558x800.jpg",
      // img: "/images/metacity.jpg",
    },
    {
      title: "Virtual Campus",
      desc: "A metaverse-based learning platform for remote education and collaboration",
      img: "https://rextheme.com/wp-content/uploads/2022/09/Hotspot-Frontend.png",
      // img: "/images/virtual-campus.jpg",
    },
    {
      title: "Digital Art Gallery",
      desc: "NFT-enabled 3D gallery for showcasing and trading digital art",
      img: "https://6amcity.brightspotcdn.com/dims4/default/10d0485/2147483647/strip/true/crop/1000x563+0+52/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk1-prod-sixam-city.s3.us-east-2.amazonaws.com%2Fbrightspot%2F7d%2Fa3%2F4f12fcdb48acae45e7c83167cddf%2F5708-party-006.jpg",
      // img: "/images/art-gallery.jpg",
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
          src="/videos/vr.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🌐 Building Realities in the Metaverse
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            Step into the future with GoldenArcLabs. We design and build
            metaverse experiences that redefine how users interact, socialize,
            and transact in virtual worlds.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          🚀 Our Metaverse Capabilities
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
          Enter the Metaverse with Us
        </h2>
        <p className="mb-8 text-xl md:text-2xl">
          Partner with GoldenArcLabs to launch your virtual world, NFT project,
          or gamified metaverse solution.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition text-2xl"
        >
          Start Your Metaverse Journey NOW
        </Link>
      </section>
    </div>
  );
};

export default Metaverse;
