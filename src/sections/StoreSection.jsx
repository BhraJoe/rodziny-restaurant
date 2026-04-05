import { useState } from "react";
import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";
import CategoryTabs from "../components/CategoryTabs";
import MenuCard from "../components/MenuCard";
import MenuItemModal from "../components/MenuItemModal";
import { storeItems, storeCategories } from "../data/menuData";
import { translations } from "../translations";

export default function StoreSection({ language }) {
  const [activeCategory, setActiveCategory] = useState(storeCategories[0]);
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered = storeItems.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <section className="section" id="store">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>{translations[language].storeTitle}</h2>
          <p>{translations[language].storeSubtitle}</p>
        </motion.div>

        <motion.div
          className="notice-banner"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <FiClock className="icon" />
          <span>
            {translations[language].storeNotice}
          </span>
        </motion.div>

        <CategoryTabs
          categories={storeCategories}
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
