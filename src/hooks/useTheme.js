import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;

  const fromDocument = document.documentElement.getAttribute("data-theme");
  if (fromDocument === "light" || fromDocument === "dark") return fromDocument;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);
  const transitionTimer = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute("content", theme === "dark" ? "#070b14" : "#f7f8fc");
    }
  }, [theme]);

  // Follow the operating system while the visitor has not made a choice yet.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      if (window.localStorage.getItem(STORAGE_KEY)) return;
      setTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    return () => window.clearTimeout(transitionTimer.current);
  }, []);

  const toggleTheme = useCallback(() => {
    document.documentElement.classList.add("theme-transition");

    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });

    window.clearTimeout(transitionTimer.current);
    transitionTimer.current = window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 450);
  }, []);

  return { theme, toggleTheme };
}
