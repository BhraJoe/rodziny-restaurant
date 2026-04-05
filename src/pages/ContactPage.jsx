import { motion } from 'framer-motion';
import ContactSection from '../sections/ContactSection';
import { translations } from '../translations';

export default function ContactPage({ language }) {
  return (
    <div className="contact-page fade-in" style={{ paddingTop: '80px' }}>
      <ContactSection language={language} />

      {/* Location Section */}
      <section className="section location-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <h2>{translations[language].findUs}</h2>
             <p>{translations[language].visitRestaurant}</p>
          </motion.div>

          <div className="location-content">
            <motion.div
              className="location-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <h3>{translations[language].addressLabel}</h3>
               <p dangerouslySetInnerHTML={{ __html: translations[language].restaurantAddress.replace('\n', '<br />') }} />
               <h3>{translations[language].hoursLabel}</h3>
               <p dangerouslySetInnerHTML={{ __html: translations[language].hoursSecondary.replace('\n', '<br />') }} />
            </motion.div>

            <motion.div
              className="location-map"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.017!2d-58.381592!3d-34.603722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjQiUyA1OMKwMjInNTMuNyJX!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Restaurant Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}