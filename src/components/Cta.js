import React from "react";
import NeonButton from "./ui/NeonButton";

const Cta = () => {
  return (
    <div className="cta relative w-full overflow-hidden py-24 text-white">
      <div className="pointer-events-none absolute inset-0 grid-panel opacity-20" />
      <div
        className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center lg:flex-row lg:justify-between lg:text-left"
        data-aos="zoom-in"
      >
        <div>
          <span className="kicker">Ready Player You</span>
          <h2 className="gaming-title mt-3 text-3xl text-white md:text-5xl">
            READY TO <span className="neon-grad text-glow">SCALE UP?</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-violet-200/80">
            Get in touch and let's build something legendary{" "}
            <span className="font-bold text-fuchsia-300">together.</span>
          </p>
        </div>

        <div className="shrink-0">
          <NeonButton to="/contact">Send A Message</NeonButton>
        </div>
      </div>
    </div>
  );
};

export default Cta;
