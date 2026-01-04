import React from "react";
import img from "../images/ram4.png";
import introImg from "../images/IntroImage.png";
import techIntImg from "../images/TechIntegration.png";
import img1 from "../images/impact1.png";
import img2 from "../images/impact2.png";
import img3 from "../images/impact3.png";
import { Link } from "react-router-dom";

const ImpactVR = () => {
  return (
    <>
      {/* Parent div */}
      <div
        id="impactVR"
        className="impactVR flex items-center min-h-screen   bg-white"
      >
        {/* nest Parent div */}
        <div
          className=" flex flex-col gap-4 justify-center items-center"
          data-aos="fade-up"
        >
          {/* Top div */}
          <div
            className=" w-5/6 flex-col justify-center items-center text-center mt-10 lg:my-10 lg:justify-end p-2 md:p-10 text-center lg:text-left"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h1 className="text-6xl lg:text-9xl text-center lg:text-left font-extrabold font-[Poppins,sans-serif]">
              <span className="text-white">IMPACT OF</span>
              <span className="text-violet-400"> VR</span>
            </h1>
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
                bg-clip-text text-transparent text-center lg:text-left"
              >
                We take responsibility for building custom software solutions
                that caters for automation of your business processes and
                improve efficiency.
              </p>
            </div>
          </div>
          {/* Bottom div */}
          <div className=" flex flex-col lg:flex-row gap-4 lg:mx-4 justify-center p-4 mb-16">
            <img alt="card img" className="rounded-t float-right" src={img1} />
            <img alt="card img" className="rounded-t float-right" src={img2} />
            <img alt="card img" className="rounded-t float-right" src={img3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImpactVR;
