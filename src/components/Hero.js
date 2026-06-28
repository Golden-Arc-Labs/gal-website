import heroImg from "../images/VRImage.png";
import vrImg from "../images/vr.svg";
import webDev from "../images/web-dev.svg";
import { useEffect, useState } from "react";
import NeonButton from "./ui/NeonButton";

const Hero = () => {
  const slides = [
    { word: "REALITY", tag: "AR / VR Worlds", image: vrImg, round: false },
    {
      word: "CONNECTION",
      tag: "Internet of Things",
      image:
        "https://plus.unsplash.com/premium_photo-1687205902327-b43a44b75192?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0",
      round: true,
    },
    { word: "THE METAVERSE", tag: "Virtual Worlds", image: heroImg, round: false },
    { word: "YOUR REACH", tag: "SEO & Growth", image: heroImg, round: false },
    { word: "THE WEB", tag: "Web & SaaS", image: webDev, round: false },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let timer;
    const interval = setInterval(() => {
      setFade(false);
      timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 600);
    }, 4000);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stats = [
    { value: "50+", label: "Quests Cleared" },
    { value: "10+", label: "Years XP" },
    { value: "5", label: "Tech Realms" },
    { value: "24/7", label: "Co-op Support" },
  ];

  const { word, tag, image, round } = slides[currentSlide];

  return (
    <div className="hero relative overflow-hidden" id="hero">
      {/* ambient glow blobs */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-8 md:pt-16">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          {/* Left */}
          <div
            className="flex w-full flex-col items-center text-center lg:items-start lg:text-left"
            data-aos="fade-right"
          >
            <span className="chip mb-6">
              <span className="h-2 w-2 animate-glow-pulse rounded-full bg-fuchsia-500" />
              Player 1 — Golden Arc Labs
            </span>

            <h1 className="gaming-title break-words text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              LEVEL UP
              <br />
              <span className="text-2xl font-semibold tracking-widest text-violet-200/80 sm:text-4xl">
                {"// "}we engineer
              </span>
              <br />
              <span
                className={`neon-grad text-glow inline-block break-words transition-all duration-500 ${
                  fade ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
                }`}
              >
                {word}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg font-medium text-violet-200/70">
              Golden Arc Labs is your co-op partner for AR/VR, the metaverse,
              IoT, SEO and full-stack web &amp; SaaS. We turn ambitious ideas
              into high-score-worthy digital products.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <NeonButton to="/contact">Press Start</NeonButton>
              <NeonButton to="/#services" variant="ghost" withArrow={false}>
                Explore Arsenal
              </NeonButton>
            </div>

            {/* Stats bar */}
            <div className="mt-12 grid w-full max-w-xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-violet-500/20 bg-violet-500/5 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-ink-900/40 px-4 py-4 text-center"
                >
                  <div className="gaming-title text-2xl text-fuchsia-400">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-violet-200/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — HUD framed visual */}
          <div
            className="flex w-full justify-center lg:w-1/2"
            data-aos="fade-left"
          >
            <div className="hud-card animate-float w-full max-w-md p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-display text-xs uppercase tracking-widest text-violet-300/70">
                  {tag}
                </span>
                <span className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-500" />
                  <span className="h-2 w-2 rounded-full bg-violet-500" />
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                </span>
              </div>
              <div className="relative overflow-hidden rounded-lg grid-panel">
                <img
                  alt="hero"
                  className={`mx-auto h-auto w-full max-w-sm object-contain transition-all duration-700 ${
                    round ? "rounded-full" : "rounded-lg"
                  } ${fade ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
                  src={image}
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan bg-gradient-to-b from-fuchsia-400/20 to-transparent" />
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-md border border-violet-500/20 bg-ink-900/60 px-3 py-2">
                <span className="h-2 w-2 animate-glow-pulse rounded-full bg-cyan-400" />
                <span className="font-mono text-sm text-violet-200/80">
                  www.goldenarclabs.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
