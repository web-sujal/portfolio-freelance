"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { heroStagger, transition } from "@/lib/motion";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
};

export function StaggerChildren({
  children,
  className,
  stagger = heroStagger.staggerChildren,
  delayChildren = heroStagger.delayChildren,
}: StaggerChildrenProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="initial"
      animate="animate"
      variants={{
        initial: {},
        animate: {
          transition: reduceMotion
            ? { delayChildren: 0, staggerChildren: 0 }
            : { delayChildren, staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Use on motion.div children — fade-in-up, respects parent stagger */
export const staggerItemVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: transition.smooth,
  },
};
