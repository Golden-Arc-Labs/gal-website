import React from "react";
import introImg from "../images/IntroImage.png";
import SectionHeading from "./ui/SectionHeading";
import NeonButton from "./ui/NeonButton";

const perks = [
  { title: "Creative Squad", desc: "Designers, engineers & strategists in one party." },
  { title: "Future Tech", desc: "AR/VR, metaverse & IoT specialists." },
  { title: "Ship Fast", desc: "Agile sprints, real builds, real results." },
];

const Intro = () => {
  return (
    <div className="about relative flex min-h-screen items-center py-20" id="about">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 md:px-8 lg:flex-row">
        {/* Visual */}
        <div className="w-full lg:w-2/5" data-aos="fade-right">
          <div className="hud-card relative p-4">
            <img
              alt="About Golden Arc Labs"
              className="rounded-lg"
              src={introImg}
            />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
              <span className="chip whitespace-nowrap bg-ink-900/90">
                <span className="h-2 w-2 animate-glow-pulse rounded-full bg-fuchsia-500" />
                Origin Story
              </span>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="w-full lg:w-3/5" data-aos="fade-left">
          <SectionHeading
            align="left"
            kicker="About Us"
            title={
              <>
                THE <span className="neon-grad">GUILD</span> BEHIND THE BUILD
              </>
            }
          />
          <p className="mt-6 text-lg font-medium text-violet-200/75">
            Golden Arc Labs was founded on a simple belief: the line between the
            digital and the real is the next great playing field. We assembled a
            diverse party of creative minds and technical experts to design
            immersive experiences and dependable software that move businesses
            from <span className="text-fuchsia-300">tutorial mode</span> to{" "}
            <span className="text-fuchsia-300">endgame</span>.
          </p>
          <p className="mt-4 text-lg font-medium text-violet-200/75">
            From custom VR worlds to automation that streamlines your daily
            grind, we take ownership of every quest — building solutions that
            boost efficiency, cut costs and level up the way you work.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {perks.map((p) => (
              <div key={p.title} className="hud-card hud-card-hover p-4">
                <h3 className="gaming-title text-base text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-violet-200/65">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <NeonButton to="/contact">Join Our Party</NeonButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
