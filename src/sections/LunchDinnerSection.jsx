import { useState } from "react";
import { motion } from "framer-motion";
import CategoryTabs from "../components/CategoryTabs";
import MenuCard from "../components/MenuCard";
import MenuItemModal from "../components/MenuItemModal";
import { lunchItems, lunchCategories, sauces } from "../data/menuData";
import { translations } from "../translations";

export default function LunchDinnerSection({ language }) {
  const [activeCategory, setActiveCategory] = useState(lunchCategories[0]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSauce, setSelectedSauce] = useState(null);

  const filtered = lunchItems.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <section className="section" id="lunch">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>{translations[language].lunchDinnerTitle}</h2>
          <p>{translations[language].lunchDinnerDescFull}</p>
        </motion.div>

        <CategoryTabs
          categories={lunchCategories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        {/* Sauce Selector */}
        <motion.div
          className="sauce-selector"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>{translations[language].chooseSauce}</h3>
          <p>{translations[language].sauceDescription}</p>
          <div className="sauce-grid">
            {sauces.map((sauce) => (
              <button
                key={sauce.name}
                className={`sauce-chip${selectedSauce === sauce.name ? " selected" : ""}`}
                onClick={() =>
                  setSelectedSauce(
                    selectedSauce === sauce.name ? null : sauce.name,
                  )
                }
              >
                {sauce.emoji} {sauce.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="menu-grid">
          {filtered.map((item, i) => (
            <MenuCard
              key={item.id}
              item={item}
              index={i}
              onClick={setSelectedItem}
            />
          ))}
        </div>

        {selectedItem && (
          <MenuItemModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </section>
  );
}
