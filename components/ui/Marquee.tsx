"use client";

type MarqueeProps = {
  text: string;
  speed?: number;
};

export function Marquee({ text }: MarqueeProps) {
  return <div>{text}</div>;
}
