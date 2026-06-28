import React from "react";
import img1 from "../images/impact1.png";
import img2 from "../images/impact2.png";
import img3 from "../images/impact3.png";
import SectionHeading from "./ui/SectionHeading";

const achievements = [
  {
    img: img1,
    title: "Immersive Training",
    desc: "VR simulations that boost knowledge retention and cut real-world risk.",
  },
  {
    img: img2,
    title: "Virtual Commerce",
    desc: "3D storefronts and showrooms that turn browsers into buyers.",
  },
  {
    img: img3,
    title: "Next-Gen Engagement",
    desc: "Branded worlds that keep players — and customers — coming back.",
  },
];

const ImpactVR = () => {
  return (
    <div id="impactVR" className="impactVR relative flex min-h-screen items-center py-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <SectionHeading
          kicker="Achievements Unlocked"
          title={
            <>
              THE IMPACT OF <span className="neon-grad">VR</span>
            </>
          }
          subtitle="We believe immersive tech changes how people and businesses interact with digital content. Here's what that unlocks — measurable engagement, faster learning and unforgettable experiences across every industry."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className="hud-card hud-card-hover group overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
                <span className="chip absolute left-3 top-3 bg-ink-900/80 !py-0.5 !text-[10px]">
                  +{(i + 1) * 100} XP
                </span>
              </div>
              <div className="p-6">
                <h3 className="gaming-title text-lg text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-violet-200/70">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactVR;
