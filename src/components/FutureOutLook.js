import React from "react";
import vrImg from "../images/VRBOX.png";
import SectionHeading from "./ui/SectionHeading";
import NeonButton from "./ui/NeonButton";

const roadmap = [
  { phase: "NOW", title: "Immersive Web", desc: "WebXR & 3D experiences in the browser." },
  { phase: "NEXT", title: "Spatial Computing", desc: "AR overlays for work and play." },
  { phase: "SOON", title: "Persistent Worlds", desc: "Always-on metaverse economies." },
];

const FutureOutLook = () => {
  return (
    <div id="futureOutLook" className="about relative flex min-h-screen items-center py-20">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 md:px-8 lg:flex-row">
        {/* Visual */}
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          <div className="hud-card animate-float p-4">
            <img alt="Future outlook" className="rounded-lg" src={vrImg} />
          </div>
        </div>

        {/* Copy + roadmap */}
        <div className="w-full lg:w-1/2" data-aos="fade-left">
          <SectionHeading
            align="left"
            kicker="New Game +"
            title={
              <>
                FUTURE <span className="neon-grad">OUTLOOK</span>
              </>
            }
          />
          <p className="mt-6 text-lg font-medium text-violet-200/75">
            The next levels of the internet are immersive, spatial and
            always-on. We're already building toward them — so when the meta
            shifts, you're not respawning at the start. You're ahead.
          </p>

          <div className="mt-8 space-y-4">
            {roadmap.map((r) => (
              <div
                key={r.phase}
                className="hud-card hud-card-hover flex items-center gap-4 p-4"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-fuchsia-500/40 bg-fuchsia-500/10 font-display text-xs font-bold text-fuchsia-300">
                  {r.phase}
                </span>
                <div>
                  <h3 className="gaming-title text-base text-white">{r.title}</h3>
                  <p className="text-sm text-violet-200/65">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <NeonButton to="/contact">Build The Future</NeonButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureOutLook;
