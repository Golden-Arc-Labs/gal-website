import React from "react";
import img from "../images/ram4.png";
import introImg from "../images/IntroImage.png";
import techIntImg from "../images/TechIntegration.png";
import { Link } from "react-router-dom";

const TechIntegration = () => {
  return (
    <>
      {/* Parent div */}
      <div
        id="techIntegration"
        className="about flex items-center min-h-screen   bg-white"
      >
        {/* child div */}
        <div
          className=" flex flex-col-reverse lg:flex-row  justify-between lg:text-left"
          data-aos="fade-up"
        >
          {/* Left div */}
          <div
            className="flex-col w-[90vw] lg:w-2/3 m-auto lg:ml-14"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="  bg-gradient-to-r from-indigo-600 via-violet-900 to-fuchsia-900 pl-16 -ml-16">
              <h1 className="text-5xl lg:text-9xl text-center lg:text-left font-extrabold font-[Poppins,sans-serif] pr-8 ">
                <span className="text-white">TECHNOLOGY</span>
                <br />
                <span className="text-violet-400">INTEGRATION</span>
              </h1>
            </div>
            <div>
              <p
                className="my-3 text-xl font-semibold tracking-tight mb-5 
                bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 
                bg-clip-text text-transparent text-center lg:text-left"
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
                bg-clip-text text-transparent text-center lg:text-left "
              >
                We take responsibility for building custom software solutions
                that caters for automation of your business processes and
                improve efficiency.
              </p>
            </div>
          </div>
          {/* Right div */}
          <div
            className={`max-w-[80vw] lg:w-1/3 flex flex-col lg:mx-4 justify-center p-4 m-auto`}
          >
            <img
              alt="card img"
              className="rounded-t float-right"
              src={techIntImg}
              // width={"60%"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechIntegration;
