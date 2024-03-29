import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Jump from "./components/Jump";
import Nav from "./components/Nav";
import ScrollToTop from "./components/Scroll";
import "./index.css";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import Prices from "./pages/Pricing/Pricing.jsx";
import Help from "./pages/Help/Help.jsx";
import About from "./pages/About/About.jsx";
import reportWebVitals from "./reportWebVitals";
import Tsa from "./pages/Tsa/Tsa";
import Training from "./pages/Training/Training";
import Registration from "./pages/Registration/Registration";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop>
        <div className="bg-dark-blue">
          <Nav />
          <Jump />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Prices" element={<Prices />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/About" element={<About />} />
            <Route path="/Tsa" element={<Tsa />} />
            <Route path="/Training" element={<Training />} />
            {/* <Route path="/Help" element={<Help />} /> */}
            <Route path="/Registration" element={<Registration />} />
          </Routes>
          <Footer />
        </div>
      </ScrollToTop>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
