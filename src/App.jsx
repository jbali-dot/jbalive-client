import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Features from "./pages/Features.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
// If you have a Dashboard page already:
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  return (
    <Routes>
      {/* Public marketing pages */}
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Existing dashboard route (if present) */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

