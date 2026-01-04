import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Iot = () => {
  let capabilities = [
    {
      title: "Sensor Integration",
      desc: "Real-time data collection from smart sensors",
    },
    {
      title: "Cloud & Analytics",
      desc: "Custom dashboards with visual data insights",
    },
    {
      title: "Mobile/Web Interfaces",
      desc: "Custom UI/UX for managing devices remotely",
    },
    {
      title: "Smart Solutions",
      desc: "Home automation, smart farming & industrial IoT",
    },
  ];

  let highlights = [
    {
      title: "Smart Home Controller App",
      desc: "Unified dashboard for lights, locks, HVAC (MQTT + Cloud APIs)",
      img: "https://groomedyard.com/wp-content/uploads/2023/01/Gira-Smart-Home.jpg",
      // img: "/images/smart-home.jpg",
    },
    {
      title: "IoT Agriculture Monitoring",
      desc: "Tracks soil moisture, temperature, weather with alerts",
      // img: "/images/smart-agriculture.jpg",
      img: "https://cdsentec.com/wp-content/uploads/2022/08/How-IoT-and-Smart-Agriculture-Sensors-are-Reshaping-Farming.png",
    },
    {
      title: "Wearable Health Tracker",
      desc: "Real-time health insights for wearable fitness devices",
      // img: "/images/health-tracker.jpg",
      img: "https://cdn.mos.cms.futurecdn.net/ebHpwrXkTtQzLZLAadTEhe-1024-80.jpg",
    },
  ];
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen max-w-[100vw]  m-auto">
      {/* <Card/> */}
      <section className="relative h-screen w-full overflow-hidden rounded-t">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/iot.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🌐 Powering the Future with IoT
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            GoldenArcLabs helps businesses harness the power of connected
            devices to enable smart, data-driven environments.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-6 md:px-20 ">
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
          Let's Build a Smarter World
        </h2>
        <p className="mb-8 text-xl md:text-2xl">
          Partner with GoldenArcLabs to launch your connected device ecosystem.
        </p>
        <Link
          to="/contact"
         className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition text-2xl"
        >
          Start Your IoT Project NOW
        </Link>
      </section>
    </div>
  );
};

export default Iot;
