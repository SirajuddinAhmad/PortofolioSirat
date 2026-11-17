import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) return null;

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
