import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      aria-pressed={isDark}
      title={isDark ? "Mode terang" : "Mode gelap"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="theme-toggle__icon"
          initial={{ opacity: 0, rotate: -35, scale: 0.75 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 35, scale: 0.75 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
