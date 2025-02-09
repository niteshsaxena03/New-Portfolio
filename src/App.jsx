// App.jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProjectPage from "../pages/ProjectPage";
import DSAPage from "../pages/DSAPage";
import Footer from "../components/Footer";
import Header from "../components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/dsa" element={<DSAPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
