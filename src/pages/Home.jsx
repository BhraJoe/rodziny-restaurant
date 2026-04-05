import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { translations } from "../translations";

export default function Home({ language }) {
  const testimonials = [
    {
      name: "Sarah M.",
      text: translations[language].testimonial1,
      rating: 5
    },
    {
      name: "John D.",
      text: translations[language].testimonial2,
      rating: 5
    },
    {
      name: "Maria L.",
      text: translations[language].testimonial3,
      rating: 5
    }
  ];
  return (
    <div className="home-page fade-in">
      <Hero language={language} />
      <section className="section welcome-section pt-0">
        <div className="container welcome-container">
          <motion.div
            className="welcome-card glass-panel"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="welcome-card-inner">
              <h2 className="welcome-title">
                {translations[language].welcomeTo}
                <br />
                <span>Rodziny</span>
              </h2>
              <p className="welcome-text">
                {translations[language].believeGlutenFree}
              </p>
               <div className="welcome-features">
                 <div className="feature-item">
                   <div className="feature-icon">🌾</div>
                   <span>{translations[language].celiacSafe}</span>
                 </div>
                 <div className="feature-item">
                   <div className="feature-icon">👩‍🍳</div>
                   <span>{translations[language].handcraftedDaily}</span>
                 </div>
                 <div className="feature-item">
                   <div className="feature-icon">⭐</div>
                   <span>{translations[language].premiumIngredients}</span>
                 </div>
               </div>
            </div>
            <div className="welcome-image">
               <img
                 src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format,compress&fit=crop&q=60&fm=webp&w=1024"
                 alt={translations[language].premiumDining}
                 loading="lazy"
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
           <motion.div
             className="section-header"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <h2>{translations[language].whatGuestsSay}</h2>
             <p>{translations[language].realExperiences}</p>
           </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card glass-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">- {testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <h2>{translations[language].ourStory}</h2>
               <p>
                 {translations[language].storyText1}
               </p>
               <p>
                 {translations[language].storyText2}
               </p>
               <div className="story-stats">
                 <div className="stat">
                   <div className="stat-number">{translations[language].statValue1}</div>
                   <div className="stat-label">{translations[language].yearsExcellence}</div>
                 </div>
                 <div className="stat">
                   <div className="stat-number">{translations[language].statValue2}</div>
                   <div className="stat-label">{translations[language].happyCustomers}</div>
                 </div>
                 <div className="stat">
                   <div className="stat-number">{translations[language].statValue3}</div>
                   <div className="stat-label">{translations[language].glutenFreeDishes}</div>
                 </div>
               </div>
            </motion.div>

            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
               <img
                 src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format,compress&fit=crop&q=60&fm=webp&w=800"
                 alt={translations[language].ourKitchen}
                 loading="lazy"
               />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
