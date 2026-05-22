import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Premium architectural page components
import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";

export const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          {/* Fallback navigation routing */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
