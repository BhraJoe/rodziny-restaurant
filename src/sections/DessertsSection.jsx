import { useState } from "react";
import { motion } from "framer-motion";
import MenuCard from "../components/MenuCard";
import MenuItemModal from "../components/MenuItemModal";
import { dessertItems } from "../data/menuData";
import { translations } from "../translations";

export default function DessertsSection({ language }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="section" id="desserts">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>{translations[language].dessertsTitle}</h2>
          <p>{translations[language].dessertsDescFull}</p>
        </motion.div>

        <div className="menu-grid">
          {dessertItems.map((item, i) => (
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
