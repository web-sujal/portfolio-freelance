"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { fadeInUp, transition } from "@/lib/motion";

type FadeInViewProps = {
  children: ReactNode;
  className?: string;
  /** Smaller Y offset (default 14) */
  y?: number;
  /** Once = animate only when first in view */
  once?: boolean;
  /** Optional delay in seconds */
  delay?: number;
};

export function FadeInView({
  children,
  className,
  y = 14,
  once = true,
  delay = 0,
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: 0.15 });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: reduceMotion ? 1 : 0,
        y: reduceMotion ? 0 : y,
      }}
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : reduceMotion
            ? { opacity: 1, y: 0 }
            : undefined
      }
      transition={{
        ...transition.smooth,
        delay: reduceMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
