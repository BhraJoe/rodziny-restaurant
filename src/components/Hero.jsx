import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { translations } from "../translations";

export default function Hero({ language }) {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <section className="hero" id="hero">
      {/* Background layer with parallax */}
      <motion.div
        className="hero-bg"
        style={{
          y: yBg,
            backgroundImage:
              "linear-gradient(180deg, rgba(15, 10, 8, 0.4) 0%, rgba(15, 10, 8, 0.85) 100%), url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format,compress&fit=crop&q=60&fm=webp&w=1920)",
        }}
      />

      <div className="hero-content-wrapper">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="sparkle">✦</span> {translations[language].certifiedGlutenFree}
          </motion.div>

          <h1>
            {translations[language].heroTitle1} <em>{translations[language].heroTitle2}</em> <br />
            {translations[language].heroTitle3}
          </h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {translations[language].extraordinaryFood}
            <br />
            {translations[language].everyDish}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link to="/menu" className="btn btn-primary btn-glow">
              {translations[language].discoverMenu}
            </Link>
            <a
              href="https://wa.me/5491100000000?text=Hola!%20Quiero%20hacer%20un%20pedido"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> {translations[language].preOrder}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="scroll-indicator-dot" />
        </motion.div>
      </div>
    </section>
  );
}
