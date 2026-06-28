import React from "react";
import ServiceLayout from "./components/ServiceLayout";

const capabilities = [
  { title: "Web & VR Platforms", desc: "Metaverse worlds accessible via browser or headset." },
  { title: "Avatars & 3D Worlds", desc: "Custom avatars, multiplayer & world-building." },
  { title: "NFT & Blockchain", desc: "Tokenized assets and smart-contract integration." },
  { title: "Virtual Events & Hubs", desc: "Education, collaboration & gamified spaces." },
];

const highlights = [
  {
    title: "MetaCity",
    desc: "A connected virtual city with modular real estate and NPC interaction.",
    img: "https://oulu.com/wp-content/uploads/2023/05/oia-metacity-1558x800.jpg",
  },
  {
    title: "Virtual Campus",
    desc: "A metaverse learning platform for remote education and collaboration.",
    img: "https://rextheme.com/wp-content/uploads/2022/09/Hotspot-Frontend.png",
  },
  {
    title: "Digital Art Gallery",
    desc: "NFT-enabled 3D gallery for showcasing and trading digital art.",
    img: "https://6amcity.brightspotcdn.com/dims4/default/10d0485/2147483647/strip/true/crop/1000x563+0+52/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk1-prod-sixam-city.s3.us-east-2.amazonaws.com%2Fbrightspot%2F7d%2Fa3%2F4f12fcdb48acae45e7c83167cddf%2F5708-party-006.jpg",
  },
];

const Metaverse = () => (
  <ServiceLayout
    docTitle="Golden Arc Labs | Metaverse Solutions"
    badge="Virtual Worlds"
    title="BUILDING REALITIES IN THE METAVERSE"
    subtitle="Step into the future with Golden Arc Labs. We design metaverse experiences that redefine how users interact, socialize and transact in virtual worlds."
    video="/videos/vr.mp4"
    capabilities={capabilities}
    highlights={highlights}
    cta={{
      title: "ENTER THE METAVERSE WITH US",
      text: "Partner with us to launch your virtual world, NFT project or gamified metaverse solution.",
      label: "Start Your World",
    }}
  />
);

export default Metaverse;
