import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import { translations } from "../translations";

export default function Navbar({ darkMode, toggleDarkMode, language, toggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className={`navbar premium-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-inner glass-panel">
          <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
            Rodziny
          </Link>

          <div className="nav-center-links">
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={handleLinkClick}
            >
              {translations[language].home}
            </Link>
            <Link
              to="/menu"
              className={location.pathname === "/menu" ? "active" : ""}
              onClick={handleLinkClick}
            >
              {translations[language].menu}
            </Link>
            <Link
              to="/store"
              className={location.pathname === "/store" ? "active" : ""}
              onClick={handleLinkClick}
            >
              {translations[language].store}
            </Link>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={handleLinkClick}
            >
              {translations[language].contact}
            </Link>
          </div>

          <div className="navbar-actions">
            <button
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
            <button
              className="language-toggle"
              onClick={toggleLanguage}
              aria-label="Toggle language"
            >
              {language === "es" ? "ES" : "EN"}
            </button>
            <button
              className="hamburger"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-overlay ${isOpen ? "open" : ""}`}
        onClick={handleLinkClick}
      ></div>
      <div className={`mobile-menu glass-panel ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <span className="navbar-logo">Rodziny</span>
          <button className="hamburger" onClick={() => setIsOpen(false)}>
            <FiX />
          </button>
        </div>
        <div className="mobile-links">
           <Link
             to="/"
             className={location.pathname === "/" ? "active" : ""}
             onClick={handleLinkClick}
           >
             {translations[language].home}
           </Link>
           <Link
             to="/menu"
             className={location.pathname === "/menu" ? "active" : ""}
             onClick={handleLinkClick}
           >
             {translations[language].menu}
           </Link>
           <Link
             to="/store"
             className={location.pathname === "/store" ? "active" : ""}
             onClick={handleLinkClick}
           >
             {translations[language].store}
           </Link>
           <Link
             to="/contact"
             className={location.pathname === "/contact" ? "active" : ""}
             onClick={handleLinkClick}
           >
             {translations[language].contact}
           </Link>
        </div>
        <div className="mobile-footer">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? (
              <FiSun className="icon" />
            ) : (
              <FiMoon className="icon" />
            )}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
