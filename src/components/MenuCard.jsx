import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";

export default function MenuCard({ item, onClick, index = 0 }) {
  return (
    <motion.div
      className="menu-card"
      onClick={() => onClick(item)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div className="menu-card-image">
        <img
          src={item.image}
          alt={item.name}
          className="menu-card-img"
          loading="lazy"
        />
        {item.tags && item.tags[0] && (
          <div className="menu-card-tag">{item.tags[0]}</div>
        )}
      </div>
      <div className="menu-card-body">
        <h3>{item.name}</h3>
        <p className="description">{item.description}</p>
        <div className="menu-card-footer">
          <span className="menu-card-price">{item.price}</span>
          <button className="menu-card-action" aria-label="View details">
            <FiPlus />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
