import React, { useEffect } from "react";
import SectionHeading from "../../../components/ui/SectionHeading";
import NeonButton from "../../../components/ui/NeonButton";
import { useDocTitle } from "../../../components/CustomHook";

/**
 * Shared gaming-styled layout for every service page.
 *
 * props:
 *  - docTitle, badge, title, subtitle, video
 *  - capabilities: [{ title, desc }]
 *  - highlights:   [{ title, desc, img }]
 *  - cta: { title, text, label }
 */
const ServiceLayout = ({
  docTitle,
  badge,
  title,
  subtitle,
  video,
  capabilities = [],
  highlights = [],
  cta,
}) => {
  useDocTitle(docTitle || "Golden Arc Labs");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen w-full max-w-full overflow-hidden">
      {/* HERO */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-70"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink-900/80 via-ink-900/60 to-ink-900" />
        <div className="absolute inset-0 z-10 grid-panel opacity-30" />
        <div
          className="relative z-20 flex max-w-4xl flex-col items-center px-4 text-center"
          data-aos="zoom-in"
        >
          <span className="chip mb-6">{badge}</span>
          <h1 className="gaming-title text-glow text-4xl text-white md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium text-violet-100/80 md:text-xl">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <NeonButton to="/contact">Start a Quest</NeonButton>
            <NeonButton to="/#services" variant="ghost" withArrow={false}>
              View Arsenal
            </NeonButton>
          </div>
        </div>
        {/* scan line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 animate-scan bg-gradient-to-b from-fuchsia-500/15 to-transparent" />
      </section>

      {/* CAPABILITIES */}
      <section className="px-6 py-20 md:px-20">
        <SectionHeading
          kicker="Loadout"
          title={
            <>
              Our <span className="neon-grad">Capabilities</span>
            </>
          }
          subtitle="Battle-tested skills we bring to every mission."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="hud-card hud-card-hover p-6"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-fuchsia-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-violet-500/30" />
              </div>
              <h3 className="gaming-title text-xl text-white">{item.title}</h3>
              <p className="mt-2 text-violet-200/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-6 py-20 md:px-20">
        <SectionHeading
          kicker="Hall of Fame"
          title={
            <>
              Mission <span className="neon-grad">Highlights</span>
            </>
          }
          subtitle="High scores from the field."
        />
        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="hud-card hud-card-hover group overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="gaming-title text-lg text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-violet-200/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="neon-frame mx-auto max-w-4xl p-10 text-center md:p-16">
          <h2 className="gaming-title text-3xl text-white md:text-5xl">
            {cta?.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-violet-200/80">
            {cta?.text}
          </p>
          <div className="mt-8 flex justify-center">
            <NeonButton to="/contact">{cta?.label || "Press Start"}</NeonButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;
