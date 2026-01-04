import React from "react";
import img from "../images/ram4.png";
import introImg from "../images/IntroImage.png";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      {/* Parent div */}
      <div
        className="about flex items-center min-h-screen   bg-white"
        id="about"
      >
        {/* Child div */}
        <div
          className="flex flex-col-reverse lg:flex-row  justify-between lg:text-left"
          data-aos="fade-up"
        >
          {/* Left div */}
          <div className="w-2/3 lg:w-1/3 mx-auto lg:mx-4 ">
            <img
              alt="card img"
              className="rounded-t float-right"
              src={introImg}
            />
          </div>
          {/* Right div */}
          <div
            className="max-w-[80vw] lg:w-2/3 flex flex-col lg:mx-4 justify-center p-4 m-auto"
            // className="flex-col my-4 lg:my-0 lg:justify-end w-full lg:w-2/3 lg:pl-24 pr-24"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h1 className=" text-6xl lg:text-9xl font-extrabold font-[Poppins,sans-serif] text-center md:text-left">
              <span className="text-white">ABOUT</span>
              <span className="text-violet-400"> US</span>
            </h1>
            <div>
              <p
                className="my-3 text-xl font-semibold tracking-tight mb-5 
                bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 
                bg-clip-text text-transparent text-center md:text-left"
              >
                Founded on the belief that VR has the power to revolutionize how
                individuals and businesses interact with digital content, Studio
                Shodwe brings together a diverse team of creative minds and
                technical experts. Our mission is to redefine storytelling and
                user engagement in the metaverse era by delivering unparalleled
                virtual experiences tailored to meet the evolving needs of our
                clients across various industries.
              </p>
            </div>

            <div>
              <p
                className="my-3 text-xl font-semibold tracking-tight mb-5 
                bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 
                bg-clip-text text-transparent text-center md:text-left"
              >
                We take responsibility for building custom software solutions
                that caters for automation of your business processes and
                improve efficiency.
              </p>
            </div>
            <Link
              to="/contact"
              className="relative text-gray-500 font-mono bg-white inline-flex items-center justify-center min-w-[250px] m-auto px-6 py-2 my-4 text-lg 
                shadow-xl rounded-2xl sm:w-auto sm:mb-0 group border border-violet-500
                transition-all duration-300 ease-in-out 
                hover:bg-gradient-to-r hover:from-violet-500 hover:via-white hover:to-violet-700
                bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-violet-500/50"
            >
              Contact us
              <svg
                className="w-4 h-4 ml-1 transition-transform duration-300 transform group-hover:translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
