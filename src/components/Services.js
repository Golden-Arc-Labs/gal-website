import { Link } from "react-router-dom";
import SectionHeading from "./ui/SectionHeading";

const services = [
  {
    title: "AR & VR Development",
    desc: "Immersive storytelling, training sims and interactive worlds across Oculus, Vive & WebXR.",
    video: "/videos/ar.mp4",
    path: "/services/arvr",
    tag: "Reality",
  },
  {
    title: "Metaverse Solutions",
    desc: "Avatars, 3D worlds, NFTs and virtual hubs — full persistent online realms.",
    video: "/videos/vr.mp4",
    path: "/services/metaverse",
    tag: "Worlds",
  },
  {
    title: "Internet of Things",
    desc: "Connected devices, real-time dashboards and smart automation that just works.",
    video: "/videos/iot.mp4",
    path: "/services/iot",
    tag: "Connect",
  },
  {
    title: "SEO & Digital Marketing",
    desc: "Climb the rankings leaderboard with technical SEO, content and growth campaigns.",
    video: "/videos/seo.mp4",
    path: "/services/seo",
    tag: "Growth",
  },
  {
    title: "Web & SaaS Development",
    desc: "Scalable APIs, dashboards and production-ready SaaS built full-stack.",
    video: "/videos/development.mp4",
    path: "/services/webdev",
    tag: "Build",
  },
];

const ServiceCard = ({ service, index }) => (
  <Link
    to={service.path}
    className="hud-card hud-card-hover group block overflow-hidden"
    data-aos="fade-up"
    data-aos-delay={index * 80}
  >
    <div className="relative h-44 overflow-hidden rounded-t-lg">
      <video
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={service.video}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
      <span className="chip absolute left-3 top-3 bg-ink-900/80 !py-0.5 !text-[10px]">
        {service.tag}
      </span>
    </div>
    <div className="p-6">
      <div className="mb-3 flex items-center gap-3">
        <span className="font-display text-sm font-bold text-fuchsia-400">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 bg-violet-500/30" />
      </div>
      <h3 className="gaming-title text-lg text-white transition-colors group-hover:text-fuchsia-300">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-violet-200/70">{service.desc}</p>
      <span className="mt-4 inline-flex items-center gap-1 font-display text-xs font-bold uppercase tracking-widest text-violet-300/80 transition-all group-hover:gap-2 group-hover:text-fuchsia-400">
        Enter
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  </Link>
);

const pillars = [
  {
    title: "We Build",
    body: "With 10+ years of XP in software analysis and design, we craft tailored strategies that improve operations, reduce costs and increase efficiency.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z" />
      </svg>
    ),
  },
  {
    title: "We Collaborate",
    body: "We co-op with your existing tech team to scale applications or design custom software that simplifies your everyday processes.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <div id="services" className="services py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          kicker="Arsenal"
          title={
            <>
              CHOOSE YOUR <span className="neon-grad">LOADOUT</span>
            </>
          }
          subtitle="Five specialized skill trees. Pick one — or run the full stack. We're committed to the growth and success of every client."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.path} service={service} index={index} />
          ))}
        </div>

        {/* Pillars */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="hud-card hud-card-hover p-8"
              data-aos="zoom-in"
            >
              <div className="mb-4 inline-flex rounded-lg border border-fuchsia-500/40 bg-fuchsia-500/10 p-3 text-fuchsia-300 shadow-neon-fuchsia">
                {p.icon}
              </div>
              <h3 className="gaming-title text-2xl text-white">
                {p.title.split(" ")[0]}{" "}
                <span className="neon-grad">{p.title.split(" ")[1]}</span>
              </h3>
              <p className="mt-3 text-lg text-violet-200/75">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
