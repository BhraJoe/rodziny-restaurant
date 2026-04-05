import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { translations } from "../translations";

export default function Footer({ language }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">Rodziny.</div>
        <p className="footer-text">
          {translations[language].footerText || "100% Gluten-Free Restaurant — Safe, creative, and delicious."}
        </p>
        <div className="footer-links">
          <a
            href="https://www.instagram.com/rodziny.singluten/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div className="footer-divider" />
        <p className="footer-copy">
          {translations[language].allRightsReserved.replace('2024', new Date().getFullYear().toString())}
        </p>
      </div>
    </footer>
  );
}
