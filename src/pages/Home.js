import React from "react";
import Clients from "../components/Clients";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import TechIntegration from "../components/TechIntegration";
import ImpactVR from "../components/ImpactVR";
import FutureOutLook from "../components/FutureOutLook";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <TechIntegration />
      <ImpactVR />
      <FutureOutLook />
      {/* <Portfolio /> */}
      {/* <Clients /> */}
      <Cta />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
