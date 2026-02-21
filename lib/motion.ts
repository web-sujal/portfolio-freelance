/**
 * Shared motion config — professional, subtle, no cringe.
 * Respects prefers-reduced-motion.
 */

export const transition = {
  smooth: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const },
  quick: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const },
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const },
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
} as const;

/** Stagger delays for hero — fast, not flashy */
export const heroStagger = { delayChildren: 0.08, staggerChildren: 0.07 } as const;

/** Smooth spring for footer / pop-up — longer, smooth (not bouncy) */
export const springSmooth = {
  type: "spring" as const,
  stiffness: 55,
  damping: 22,
};
