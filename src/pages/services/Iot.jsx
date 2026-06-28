import React from "react";
import ServiceLayout from "./components/ServiceLayout";

const capabilities = [
  { title: "Sensor Integration", desc: "Real-time data collection from smart sensors." },
  { title: "Cloud & Analytics", desc: "Custom dashboards with visual data insights." },
  { title: "Mobile/Web Interfaces", desc: "Manage devices remotely with clean UI/UX." },
  { title: "Smart Solutions", desc: "Home automation, smart farming & industrial IoT." },
];

const highlights = [
  {
    title: "Smart Home Controller",
    desc: "Unified dashboard for lights, locks & HVAC (MQTT + Cloud APIs).",
    img: "https://groomedyard.com/wp-content/uploads/2023/01/Gira-Smart-Home.jpg",
  },
  {
    title: "IoT Agriculture Monitoring",
    desc: "Tracks soil moisture, temperature & weather with alerts.",
    img: "https://cdsentec.com/wp-content/uploads/2022/08/How-IoT-and-Smart-Agriculture-Sensors-are-Reshaping-Farming.png",
  },
  {
    title: "Wearable Health Tracker",
    desc: "Real-time health insights for wearable fitness devices.",
    img: "https://cdn.mos.cms.futurecdn.net/ebHpwrXkTtQzLZLAadTEhe-1024-80.jpg",
  },
];

const Iot = () => (
  <ServiceLayout
    docTitle="Golden Arc Labs | Internet of Things"
    badge="Connected Realm"
    title="POWERING THE FUTURE WITH IOT"
    subtitle="We help businesses harness connected devices to build smart, data-driven environments that run themselves."
    video="/videos/iot.mp4"
    capabilities={capabilities}
    highlights={highlights}
    cta={{
      title: "LET'S BUILD A SMARTER WORLD",
      text: "Partner with Golden Arc Labs to launch your connected device ecosystem.",
      label: "Start Your IoT Build",
    }}
  />
);

export default Iot;
