import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";

export default function BackToTop() {
  const visible = useScrolled(700);
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          title="Kembali ke atas"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          <ArrowUp size={18} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
