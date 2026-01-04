import heroImg from "../images/VRImage.png";
import vrImg from "../images/vr.svg";
import webDev from "../images/web-dev.svg";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  const slides = [
    {
      title1: "AR & VR ",
      title2: "DEVELOPMENT",
      image: vrImg,
    },
    {
      title1: "Internet of Things ",
      title2: "(IoT)",
      image:
        "https://plus.unsplash.com/premium_photo-1687205902327-b43a44b75192?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title1: "METAVERSE",
      title2: "SOLUTIONS",
      image: heroImg,
    },
    {
      title1: "SEO & DIGITAL MARKETING",
      title2: "SERVICES",
      image: heroImg,
    },
    {
      title1: "WEB & SaaS",
      title2: "DEVELOPMENT",
      image: webDev,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let timer;
    const interval = setInterval(() => {
      setFade(false); // trigger fade out
      timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true); // trigger fade in
      }, 1000); // short delay to allow fade-out before changing slide
    }, 4000);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const { title1, title2, image } = slides[currentSlide];
  return (
    <>
      <div className="hero" id="hero">
        <div
          className="m-auto overflow-hidden mx-4  p-2 md:p-12 h-5/6"
          data-aos="zoom-in"
        >
          <div
            id="hero"
            className="flex flex-col lg:flex-row py-4 justify-between text-center lg:text-left gap-6"
          >
            <div
              className="flex flex-col justify-center items-start text-center w-full "
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              {/* Large Centered Text */}
              {/* <div className=" basis-2/3 w-full flex justify-center lg:justify-start items-end pb-8">
                <h1 className="text-7xl lg:text-9xl font-extrabold font-[Poppins,sans-serif]">
                  <span className="text-white">VIRTUAL</span> <br />
                  <span className="text-violet-400">REALITY</span>
                </h1>
              </div> */}
              <div
                className={` basis-2/4 w-full flex justify-center lg:justify-start items-end pb-8 transition-all duration-1000 ease-in-out transform ${
                  fade
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                } }
key={text-${currentSlide}`}
              >
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold font-[Poppins,sans-serif] text-center lg:text-left">
                  <span className="text-white">{title1}</span> <br />
                  <span className="text-violet-400">{title2}</span>
                </h1>
              </div>

              {/* Search Bar */}
              <div className="basis-1/3 w-full flex justify-center lg:justify-start items-center">
                <div className="bg-white rounded-full px-10 py-3 flex lflex-row items-center">
                  {/* Fixed-width container for animated text */}
                  <div className="overflow-hidden whitespace-nowrap">
                    <span className="text-black text-lg lg:text-2xl font-mono animate-typing inline-block">
                      www.goldenarclabs.com
                    </span>
                  </div>

                  {/* Search icon in a separate fixed-width div */}
                  <div className="flex justify-center items-center ml-4 ">
                    <FaSearch className="text-blue-500  text-xl lg:text-2xl" />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`flex justify-center w-full lg:w-1/2 transition-all duration-1000 ease-in-out transform 
                           ${
                             fade
                               ? "opacity-100 translate-x-0"
                               : "opacity-0 translate-x-40"
                           }
                         `}
              key={`image-${currentSlide}`}
            >
              <img
                alt="hero"
                className={`rounded-${
                  currentSlide === 1 ? "full" : "xl"
                } duration-1000 w-auto h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-xl`}
                src={image}
                width={currentSlide === 4 ? "200%" : "100%"}
                height={currentSlide === 4 ? "200%" : "100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
