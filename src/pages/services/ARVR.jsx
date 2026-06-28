import React from "react";
import ServiceLayout from "./components/ServiceLayout";

const capabilities = [
  { title: "Cross-platform VR", desc: "Oculus, Vive & WebXR — one build, every headset." },
  { title: "AR Mobile Apps", desc: "iOS, Android and WebAR filters that wow." },
  { title: "Virtual Showrooms", desc: "Interactive 3D product visualization." },
  { title: "Training Simulations", desc: "Gamified, interactive & educational." },
];

const highlights = [
  {
    title: "VR Museum Walkthrough",
    desc: "Immersive app with object highlights & voiceovers.",
    img: "https://images.unsplash.com/photo-1639174326326-6e2ef8d8ae39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "AR Learning App for Kids",
    desc: "Gamified AR modules for early education.",
    img: "https://dyebikr0297u5.cloudfront.net/augmented_reality_in_education_93f921b120.png",
  },
  {
    title: "Industrial AR Maintenance",
    desc: "Real-time overlay for machine diagnostics.",
    img: "https://informationage-production.s3.amazonaws.com/uploads/2022/10/augmented-reality-business-tool-industry-4-0.jpeg",
  },
];

const ARVR = () => (
  <ServiceLayout
    docTitle="Golden Arc Labs | AR & VR Development"
    badge="Reality Realm"
    title="BRIDGING REALITIES WITH AR & VR"
    subtitle="We merge the virtual and physical into unforgettable experiences — from education and healthcare to gaming and real estate."
    video="/videos/ar.mp4"
    capabilities={capabilities}
    highlights={highlights}
    cta={{
      title: "LET'S BUILD THE FUTURE TOGETHER",
      text: "Reach out to start your AR/VR journey with Golden Arc Labs.",
      label: "Make It Real",
    }}
  />
);

export default ARVR;
