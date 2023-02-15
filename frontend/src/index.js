import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Home from "./pages/Home/Home";
import Prices from "./pages/Pricing/Pricing.jsx";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scroll";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop>
        <div className="bg-dark-blue">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Prices" element={<Prices />} />
          </Routes>
          <Footer />
        </div>
      </ScrollToTop>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();