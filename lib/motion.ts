export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;
