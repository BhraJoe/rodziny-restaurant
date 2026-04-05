import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function MenuItemModal({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!item) return null;

  const whatsappMsg = encodeURIComponent(
    `Hola! Quiero pedir: ${item.name} (${item.price})`,
  );

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <FiX />
          </button>

          <div className="modal-image">
            <img
              src={item.image}
              alt={item.name}
              className="modal-content-img"
              loading="lazy"
            />
          </div>

          <div className="modal-body">
            <div className="category-label">{item.category}</div>
            <h2>{item.name}</h2>
            <p className="description">{item.description}</p>

            {item.tags && item.tags.length > 0 && (
              <div className="tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="modal-footer">
            <span className="modal-price">{item.price}</span>
            <a
              href={`https://wa.me/5491100000000?text=${whatsappMsg}`}
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Order
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
