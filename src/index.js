import React from "react";
import ReactDOM from "react-dom/client";

import "./css/Footer.css";
import "./css/index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer, Home, Portfolio, Contact } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);
