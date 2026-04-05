import { useState } from "react";
import { motion } from "framer-motion";
import CategoryTabs from "../components/CategoryTabs";
import MenuCard from "../components/MenuCard";
import MenuItemModal from "../components/MenuItemModal";
import { breakfastItems, breakfastCategories } from "../data/menuData";
import { translations } from "../translations";

export default function BreakfastSection({ language }) {
  const [activeCategory, setActiveCategory] = useState(breakfastCategories[0]);
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered = breakfastItems.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <section className="section" id="breakfast">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>{translations[language].breakfastTitle}</h2>
          <p>
            {translations[language].breakfastDesc}
          </p>
        </motion.div>

        <CategoryTabs
          categories={breakfastCategories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

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
