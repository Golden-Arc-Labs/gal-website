import React from "react";
import techIntImg from "../images/TechIntegration.png";
import SectionHeading from "./ui/SectionHeading";

const stack = [
  "React", "Node.js", "Unity", "WebXR", "Three.js",
  "AWS", "Python", "MQTT", "Solidity", "Docker",
];

const TechIntegration = () => {
  return (
    <div
      id="techIntegration"
      className="about relative flex min-h-screen items-center py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 md:px-8 lg:flex-row">
        {/* Copy */}
        <div className="w-full lg:w-3/5" data-aos="fade-right">
          <SectionHeading
            align="left"
            kicker="Power-Ups"
            title={
              <>
                TECHNOLOGY <span className="neon-grad">INTEGRATION</span>
              </>
            }
          />
          <p className="mt-6 text-lg font-medium text-violet-200/75">
            Great gameplay needs the right engine. We integrate cutting-edge
            tools across reality, cloud and connected devices — wiring them into
            a single, seamless system so your stack plays as one team.
          </p>
          <p className="mt-4 text-lg font-medium text-violet-200/75">
            From legacy systems to bleeding-edge frameworks, we handle the
            integration quests so your business runs faster, smarter and without
            the lag.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span key={tech} className="chip !lowercase">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="w-full lg:w-2/5" data-aos="fade-left">
          <div className="neon-frame p-3">
            <img alt="Technology integration" className="rounded-lg" src={techIntImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechIntegration;
