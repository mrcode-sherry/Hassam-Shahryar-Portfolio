import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "+923002116854";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="relative"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Pulse background */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent/60"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity: 0.3 }}
        />

        {/* Main button */}
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-2xl shadow-accent/50 hover:shadow-accent/70 transition-all border border-accent/20">
          <MessageCircle className="w-7 h-7 text-accent-foreground" />
        </div>

        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full right-0 mb-3 px-4 py-2 rounded-lg glass border border-accent/20 text-sm font-semibold text-foreground whitespace-nowrap shadow-lg pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          Chat with us
        </motion.div>
      </motion.div>
    </motion.a>
  );
}
