"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  once?: boolean;
  viewportMargin?: string;
  mode?: "mount" | "view";
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function useMotionEnabled() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && !reduceMotion;
}

export function MotionReveal({
  children,
  className,
  once = true,
  viewportMargin = "-100px",
  mode = "mount",
}: MotionRevealProps) {
  const motionEnabled = useMotionEnabled();

  if (!motionEnabled) {
    return <div className={className}>{children}</div>;
  }

  if (mode === "view") {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: viewportMargin }}
        variants={container}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div className={className} initial="hidden" animate="visible" variants={container}>
      {children}
    </motion.div>
  );
}

export function MotionRevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const motionEnabled = useMotionEnabled();

  if (!motionEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={cn(className)} variants={item}>
      {children}
    </motion.div>
  );
}
