import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const servicesLinks = [
  { label: "WEB & SaaS Development", path: "/services/webdev" },
  { label: "SEO & Digital Marketing", path: "/services/seo" },
  { label: "Internet of Things (IoT)", path: "/services/iot" },
  { label: "AR & VR Development", path: "/services/arvr" },
  { label: "Metaverse", path: "/services/metaverse" },
];

const linkClass =
  "relative px-4 py-2 font-display text-sm font-semibold uppercase tracking-widest text-violet-200/80 " +
  "transition-all duration-300 hover:text-white hover:[text-shadow:0_0_12px_rgba(217,70,239,0.8)]";

const NavLinks = ({ styles, onNavigate }) => {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(false);
    onNavigate && onNavigate();
  };

  return (
    <div className={`${styles || "flex items-center gap-1"} relative`}>
      <HashLink className={linkClass} smooth to="/#hero" onClick={handleNav}>
        Home
      </HashLink>

      <HashLink className={linkClass} smooth to="/#about" onClick={handleNav}>
        About
      </HashLink>

      {/* Services dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className={`${linkClass} flex items-center gap-1`}
          onClick={() => setOpen((o) => !o)}
        >
          Services
          <span className="text-fuchsia-400">▾</span>
        </button>

        {open && (
          <div className="absolute left-0 top-full z-40 mt-1 w-64 overflow-hidden rounded-lg border border-violet-500/30 bg-ink-800/95 shadow-neon-violet backdrop-blur-md">
            <ul className="py-2">
              {servicesLinks.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    onClick={handleNav}
                    className="block border-l-2 border-transparent px-4 py-2 font-display text-sm font-semibold uppercase tracking-wider text-violet-200/80 transition-all duration-200 hover:border-fuchsia-500 hover:bg-violet-500/10 hover:pl-5 hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <HashLink
        className={linkClass}
        smooth
        to="/careers/#careersMain"
        onClick={handleNav}
      >
        Careers
      </HashLink>

      <Link
        to="/contact"
        onClick={handleNav}
        className="btn-neon ml-2 !px-5 !py-2 !text-xs"
      >
        Contact
      </Link>
    </div>
  );
};

export default NavLinks;
