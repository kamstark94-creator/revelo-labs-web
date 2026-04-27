"use client";

import { motion, useReducedMotion } from "framer-motion";

type MarqueeProps = {
  text: string;
  speed?: number;
};

export function Marquee({ text, speed = 30 }: MarqueeProps) {
  const reduceMotion = useReducedMotion();
  const items = [text, text, text];

  return (
    <div className="w-screen overflow-hidden border-t border-hairline py-4 font-mono text-[13px] uppercase leading-[1.4] tracking-[0.05em] text-brand">
      <motion.div
        className="flex w-max whitespace-nowrap"
        animate={reduceMotion ? { x: 0 } : { x: "-33.33%" }}
        transition={
          reduceMotion
            ? undefined
            : { duration: speed, ease: "linear", repeat: Infinity }
        }
      >
        {items.map((item, index) => (
          <span key={item + index} className="pr-8">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
