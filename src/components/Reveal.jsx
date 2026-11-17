import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  y = 24,
  amount = 0.2,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (shouldReduceMotion) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
      {...props}
    >
      {children}
    </Component>
  );
}
