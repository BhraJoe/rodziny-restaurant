import { motion } from 'framer-motion';
import StoreSection from '../sections/StoreSection';
import { translations } from '../translations';

export default function StorePage({ language }) {
  const deliveryOptions = [
    {
      icon: '🚚',
      title: translations[language].delivery,
      description: translations[language].deliveryDesc
    },
    {
      icon: '🏪',
      title: translations[language].pickup,
      description: translations[language].pickupDesc
    },
    {
      icon: '🛒',
      title: translations[language].frozenStorage,
      description: translations[language].frozenStorageDesc
    }
  ];
  return (
    <div className="store-page fade-in" style={{ paddingTop: '80px' }}>
      <div className="section-header">
        <h2>{translations.frozenStore}</h2>
        <p>{translations.takeHomeExperience}</p>
      </div>
      <StoreSection language={language} />

      {/* Delivery Options Section */}
      <section className="section delivery-options-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>{translations[language].howToGetOrder}</h2>
            <p>{translations[language].flexibleOptions}</p>
          </motion.div>

          <div className="delivery-grid">
            {deliveryOptions.map((option, index) => (
              <motion.div
                key={index}
                className="delivery-card glass-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="delivery-icon">{option.icon}</div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}