import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import StorePage from "./pages/StorePage";
import ContactPage from "./pages/ContactPage";



export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("rodziny-dark") === "true";
    } catch {
      return false;
    }
  });

  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem("rodziny-lang");
      return (saved === "es" || saved === "en") ? saved : "es";
    } catch {
      return "es";
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("rodziny-dark", darkMode);
    } catch {}
  }, [darkMode]);

  useEffect(() => {
    try {
      localStorage.setItem("rodziny-lang", language);
    } catch {}
  }, [language]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleLanguage = () => setLanguage((prev) => prev === "es" ? "en" : "es");

  return (
    <Router>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} language={language} toggleLanguage={toggleLanguage} />
      <main>
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/menu" element={<Menu language={language} />} />
          <Route path="/store" element={<StorePage language={language} />} />
          <Route path="/contact" element={<ContactPage language={language} />} />
        </Routes>
      </main>
       <Footer language={language} />
      <WhatsAppButton />
    </Router>
  );
}
