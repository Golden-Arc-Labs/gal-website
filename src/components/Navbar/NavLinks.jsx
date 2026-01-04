import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const servicesLinks = [
  { label: "WEB & SaaS Development", path: "/services/webdev" },
  { label: "SEO & Digital Marketting", path: "/services/seo" },
  { label: "Internet of Things(IOT)", path: "/services/iot" },
  { label: "AR & VR Development", path: "/services/arvr" },
  { label: "Metaverse", path: "/services/metaverse" },
];

const NavLinks = ({ styles }) => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles} relative`}>
      <HashLink
        className={`px-4 font-extrabold text-gray-500 font-mono border 
          transition-all duration-300 ease-in-out rounded-2xl py-2
          hover:bg-gradient-to-r hover:from-purple-700 hover:via-white hover:to-violet-800 
          bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-purple-500/50
          ${activeLink === "/#" ? "border-gray-800" : "border-transparent"}`}
        smooth
        to="/#"
        onClick={() => setActiveLink("/#")}
      >
        Home
      </HashLink>

      {/* About */}
      <HashLink
        className={`px-4 font-extrabold text-gray-500 font-mono border 
          transition-all duration-300 ease-in-out rounded-2xl py-2
          hover:bg-gradient-to-r hover:from-purple-700 hover:via-white hover:to-violet-800 
          bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-purple-500/50
          ${
            activeLink === "/#about" ? "border-gray-800" : "border-transparent"
          }`}
        smooth
        to="/#about"
        onClick={() => setActiveLink("/#about")}
      >
        About
      </HashLink>

      {/* Services Dropdown */}
      {/* <div className="relative group inline ">
        <button
          className={`px-4 w-full lg:w-fit text-left group font-extrabold  text-gray-500 font-mono border transition-all duration-300 ease-in-out rounded-2xl py-2 hover:bg-gradient-to-r hover:from-purple-700 hover:via-white hover:to-violet-800 bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-purple-500/50
            ${
              activeLink.startsWith("/services")
                ? "border-gray-800"
                : "border-transparent"
            }`}
        >
          Services
        </button>

        <div className=" relative lg:absolute hidden group-hover:block mt-5 top-full left-0 mt-2 w-60 bg-black text-left shadow-lg rounded border-gray-300 z-50">
          {servicesLinks.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              onClick={() => setActiveLink(service.path)}
              className="block px-4 text-white hover:bg-violet-800 hover:rounded hover:font-bold  hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {service.label}
            </Link>
          ))}
        </div>
      </div> */}
      {/* <div className="relative inline-block text-left group">
        <button className="text-white font-semibold hover:underline">
          Services ▾
        </button>

        <div className="absolute left-0 mt-2 w-64 rounded-md border border-white/30 bg-black/70 backdrop-blur-md shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ul className="py-2 text-white font-bold space-y-1 px-4">
            <li className="hover:text-blue-400 cursor-pointer">E-Learning</li>
            <li className="hover:text-blue-400 cursor-pointer">
              Product Demonstration
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 cursor-pointer">
              Virtual Showroom
            </li>
            <li className="hover:text-blue-400 cursor-pointer">Industry 4.0</li>
            <li className="hover:text-blue-400 cursor-pointer">Training</li>
            <li className="hover:text-blue-400 cursor-pointer">Metaverse</li>
          </ul>
        </div>
      </div> */}

      <div className="relative group inline-block">
        <button
          className={`px-4 w-full lg:w-fit text-left group font-extrabold  text-gray-500 font-mono border transition-all duration-300 ease-in-out rounded-2xl py-2 hover:bg-gradient-to-r hover:from-purple-700 hover:via-white hover:to-violet-800 bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-purple-500/50
            ${
              activeLink.startsWith("/services")
                ? "border-gray-800"
                : "border-transparent"
            }`}
          onMouseEnter={() => setOpen(true)}
        >
          Services ▾
        </button>

        {/* Dropdown */}
        {open && (
          <div
            className="absolute left-0 mt-2 lg:mt-0 top-0 lg:top-[3.8rem] w-64 rounded-md border border-white/30 bg-black/10 backdrop-blur-md shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 "
            onMouseLeave={() => setOpen(false)}
          >
            <ul className="py-2 text-white font-bold space-y-4 px-4">
              {/* <li className="text-white hover:text-transparent  bg-clip-text bg-gradient-to-r from-violet-300 via-violet-500 to-violet-700 cursor-pointer hover:font-bold  hover:scale-105 transition-all duration-300 ease-in-out">
              Virtual Showroom
            </li> */}
              {servicesLinks.map((service) => (
                <li
                  className="text-white hover:text-transparent  bg-clip-text bg-gradient-to-r from-violet-300 via-violet-500 to-violet-700 cursor-pointer hover:font-bold  hover:scale-105 transition-all duration-300 ease-in-out"
                  key={service.path}
                >
                  <Link
                    to={service.path}
                    onClick={() => setActiveLink(service.path)}
                    // className="block px-4 text-white hover:bg-violet-800 hover:rounded hover:font-bold  hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Contact */}
      <HashLink
        className={`px-4 font-extrabold text-gray-500 font-mono border 
          transition-all duration-300 ease-in-out rounded-2xl py-2
          hover:bg-gradient-to-r hover:from-purple-700 hover:via-white hover:to-violet-800 
          bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-purple-500/50
          ${
            activeLink === "/contact#contact"
              ? "border-gray-800"
              : "border-transparent"
          }`}
        smooth
        to="/contact#contact"
        onClick={() => setActiveLink("/contact#contact")}
      >
        Contact Us
      </HashLink>
    </div>
  );
};

export default NavLinks;
