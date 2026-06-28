import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const logoImage = `${process.env.PUBLIC_URL}/Golden_Arc_Lab_logo.svg`;

const servicesLinks = [
  { label: "WEB & SaaS Development", path: "/services/webdev" },
  { label: "AR & VR Development", path: "/services/arvr" },
  { label: "Metaverse", path: "/services/metaverse" },
  { label: "Internet of Things (IoT)", path: "/services/iot" },
  { label: "SEO & Digital Marketing", path: "/services/seo" },
];

const quickLinks = [
  { label: "About", to: "/#about", hash: true },
  { label: "Services", to: "/#services", hash: true },
  { label: "Contact", to: "/contact/#contact", hash: true },
  { label: "Careers", to: "/careers/#careersMain", hash: true },
];

const socials = [
  {
    label: "Twitter",
    href: "https://x.com/",
    path: "M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/home.php",
    path: "M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    path: "M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z",
  },
];

const Footer = () => {
  return (
    <footer className="footer relative border-t border-violet-500/20">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-4">
            <div className="mb-4 flex items-center gap-3">
              <img
                src={logoImage}
                alt="Golden Arc Labs logo"
                className="h-12 w-auto"
              />
              <div className="flex flex-col leading-none">
                <span className="gaming-title text-lg text-white">Golden Arc</span>
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-fuchsia-400">
                  Labs
                </span>
              </div>
            </div>
            <p className="max-w-xs text-sm text-violet-200/65">
              Your co-op partner for immersive tech, connected devices and
              scalable software. Let's build something legendary.
            </p>
            <div className="mt-5 text-sm text-violet-200/70">
              <p>G-32, Sector 63</p>
              <p>Noida, Uttar Pradesh</p>
              <p>India</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h6 className="kicker mb-4">Quick Links</h6>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <HashLink
                    to={l.to}
                    className="text-violet-200/80 transition-all duration-200 hover:pl-1 hover:text-fuchsia-400"
                  >
                    {l.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h6 className="kicker mb-4">Our Arsenal</h6>
            <ul className="space-y-3 text-sm">
              {servicesLinks.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-violet-200/80 transition-all duration-200 hover:pl-1 hover:text-fuchsia-400"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-2">
            <h6 className="kicker mb-4">Join Us</h6>
            <p className="mb-4 text-sm text-violet-200/65">
              Follow the squad on social.
            </p>
            <ul className="flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-violet-500/30 text-violet-200 transition-all duration-200 hover:border-fuchsia-500/70 hover:text-white hover:shadow-neon-fuchsia"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-violet-500/15 pt-6 text-center sm:flex-row">
          <p className="font-display text-xs uppercase tracking-widest text-violet-200/50">
            &copy; {new Date().getFullYear()} Golden Arc Labs. All rights reserved.
          </p>
          <p className="font-mono text-xs text-violet-200/40">
            Crafted with <span className="text-fuchsia-400">♥</span> &amp; caffeine
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
