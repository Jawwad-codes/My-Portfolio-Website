/** @format */

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: EASE },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const cardHover = {
  whileHover: { scale: 1.05, y: -4, boxShadow: "0 8px 20px rgba(0,0,0,0.12)" },
  transition: { type: "spring", stiffness: 250, damping: 15 },
};

export const cardHoverSmall = {
  whileHover: { scale: 1.02, y: -2, boxShadow: "0 6px 15px rgba(0,0,0,0.1)" },
  transition: { type: "spring", stiffness: 250, damping: 18 },
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.6, ease: EASE },
};

export const slideInLeft = {
  initial: { x: -80, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease: EASE },
};

export const slideInRight = {
  initial: { x: 80, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease: EASE },
};

export const scaleIn = {
  initial: { scale: 0.85, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: EASE },
};
