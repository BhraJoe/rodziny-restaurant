import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5491100000000?text=Hola!%20Quiero%20hacer%20un%20pedido"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order via WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
    >
      <FaWhatsapp />
    </motion.a>
  );
}
