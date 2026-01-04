import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// All pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DemoProduct from "./pages/DemoProduct";
import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";
import ARVR from "./pages/services/ARVR";
import Metaverse from "./pages/services/Metaverse";
import Iot from "./pages/services/Iot";
import Seo from "./pages/services/Seo";
import WebDev from "./pages/services/WebDev";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer";
import CareersPage from "./pages/CareersPage";

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("Golden Arc Labs");

  return (
    <>
      <Router>
        <NavBar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route path="/careers" element={<CareersPage />} />
            {/* services Routes */}
            <Route path="/services/">
              <Route path="arvr" element={<ARVR />} />
              <Route path="metaverse" element={<Metaverse />} />
              <Route path="iot" element={<Iot />} />
              <Route path="seo" element={<Seo />} />
              <Route path="webdev" element={<WebDev />} />
            </Route>
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
}

export default App;
