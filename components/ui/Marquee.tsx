"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type MarqueeProps = {
  text: string;
  speed?: number;
};

export function Marquee({ text, speed = 30 }: MarqueeProps) {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const items = [text, text, text];
  const motionEnabled = mounted && !reduceMotion;

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = items.map((item, index) => (
    <span key={item + index} className="pr-8">
      {item}
    </span>
  ));

  return (
    <div className="w-screen overflow-hidden border-t border-hairline py-4 font-mono text-[13px] uppercase leading-[1.4] tracking-[0.05em] text-brand">
      {motionEnabled ? (
        <motion.div
          className="flex w-max whitespace-nowrap"
          animate={{ x: "-33.33%" }}
          transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        >
          {content}
        </motion.div>
      ) : (
        <div className="flex w-max whitespace-nowrap">{content}</div>
      )}
    </div>
  );
}
