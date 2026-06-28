import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { HashLink } from "react-router-hash-link";
import Sidebar from "./Sidebar";

const logoImage = `${process.env.PUBLIC_URL}/Golden_Arc_Lab_logo.svg`;

const NavBar = () => {
  const [top, setTop] = useState(!window.scrollY);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav
      className={`sticky top-0 z-30 w-full transition-all duration-300 ease-in-out ${
        !top
          ? "border-b border-violet-500/20 bg-ink-900/80 shadow-neon-violet backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-2 px-4 md:px-8">
        {/* Logo */}
        <HashLink smooth to="/#hero" className="min-w-0 shrink">
          <div className="group flex min-w-0 flex-row items-center gap-x-2 py-2 sm:gap-x-3">
            <img
              alt="Golden Arc Labs logo"
              className="h-10 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-14"
              src={logoImage}
            />
            <div className="flex min-w-0 flex-col leading-none">
              <span className="gaming-title truncate text-base text-white sm:text-xl md:text-2xl">
                Golden Arc
              </span>
              <span className="truncate font-display text-[10px] font-bold uppercase tracking-[0.3em] text-fuchsia-400 sm:text-xs sm:tracking-[0.4em]">
                Labs
              </span>
            </div>
          </div>
        </HashLink>

        {/* Desktop links */}
        <div className="hidden lg:inline-block">
          <NavLinks />
        </div>

        {/* Mobile burger */}
        <button
          className="shrink-0 rounded-lg border border-violet-500/30 p-2 text-violet-200 transition-colors hover:border-fuchsia-500/60 hover:text-white lg:hidden"
          onClick={handleClick}
          aria-label="Open menu"
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>

        <Sidebar
          side="right"
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        >
          <NavLinks
            styles={"flex flex-col mt-10 gap-2"}
            onNavigate={() => setIsMenuOpen(false)}
          />
        </Sidebar>
      </div>
    </nav>
  );
};

export default NavBar;
