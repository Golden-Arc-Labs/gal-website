import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { HashLink } from "react-router-hash-link";
import logoImage from "../../images/logo.png";
import Sidebar from "./Sidebar";

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
      className={`sticky top-0 w-full z-30 transition duration-300 ease-in-out ${
        !top && "bg-black shadow-lg"
      }`}
    >
      <div className="flex flex-row justify-around md:justify-between items-center ">
        <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
          <HashLink smooth to="/#hero">
            <div className="flex flex-row justify-center items-center gap-x-5 py-2">
              <img
                alt="card img"
                className="rounded-t w-16 h-16"
                src={logoImage}
              />
              <h1 className={`font-extrabold text-4xl text-white `}>
                Golden Arc Labs
              </h1>
            </div>
          </HashLink>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <button
            className="p-2 rounded-lg lg:hidden text-white"
            onClick={handleClick}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* {isMenuOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )} */}
              {!isMenuOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
          <div className=" hidden space-x-6 lg:inline-block p-5">
            <NavLinks />
          </div>

          {/* <div
            className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-8 bg-black lg:hidden shadow-xl top-14 ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <div className="flex flex-col space-y-6">
              <NavLinks />
            </div>
          </div> */}

          <Sidebar
            side="right"
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          >
            <NavLinks styles={"flex flex-col mt-5"} />
          </Sidebar>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
