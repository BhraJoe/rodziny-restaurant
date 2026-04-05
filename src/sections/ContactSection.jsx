import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { translations } from "../translations";

export default function ContactSection({ language }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>{translations[language].contactUs}</h2>
          <p>{translations[language].orderReserve}</p>
        </motion.div>

        <div className="contact-grid">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <div className="form-group">
               <label htmlFor="name">{translations[language].nameLabel}</label>
               <input
                 type="text"
                 id="name"
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 placeholder={translations[language].namePlaceholder}
                 required
               />
             </div>
             <div className="form-group">
               <label htmlFor="email">{translations[language].emailLabel}</label>
               <input
                 type="email"
                 id="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 placeholder={translations[language].emailPlaceholder}
                 required
               />
             </div>
             <div className="form-group">
               <label htmlFor="message">{translations[language].messageLabel}</label>
               <textarea
                 id="message"
                 name="message"
                 value={formData.message}
                 onChange={handleChange}
                 placeholder={translations[language].messagePlaceholder}
                 required
               />
             </div>
             <button type="submit" className="btn-submit">
               {submitted ? (
                 translations[language].messageSent
               ) : (
                 <>
                   <FiSend style={{ marginRight: 8 }} /> {translations[language].sendMessage}
                 </>
               )}
             </button>
          </motion.form>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
             <h3>{translations[language].getInTouch}</h3>

             <div className="contact-info-item">
               <div className="contact-info-icon">
                 <FiPhone />
               </div>
               <div className="contact-info-text">
                 <h4>{translations[language].phone}</h4>
                 <p>+54 9 11 0000-0000</p>
               </div>
             </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FiMapPin />
              </div>
              <div className="contact-info-text">
                <h4>{translations[language].location || "Location"}</h4>
                <p>{translations[language].address || "Av. del Libertador 1234, Buenos Aires"}</p>
              </div>
            </div>

             <div className="contact-info-item">
               <div className="contact-info-icon">
                 <FiClock />
               </div>
               <div className="contact-info-text">
                 <h4>{translations[language].hours}</h4>
                 <p>{translations[language].hoursMain}</p>
                 <p>{translations[language].hoursSun}</p>
               </div>
             </div>

             <a
               href="https://wa.me/5491100000000?text=Hola!%20Quiero%20hacer%20una%20reserva"
               className="btn-whatsapp"
               target="_blank"
               rel="noopener noreferrer"
               style={{ marginTop: 8, justifyContent: "center" }}
             >
               <FaWhatsapp /> {translations[language].chatOnWhatsApp}
             </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
