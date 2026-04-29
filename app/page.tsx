import type { Metadata } from "next";
import { BuyZone } from "@/components/sections/BuyZone";
import { Footer } from "@/components/sections/Footer";
import { LabNotes } from "@/components/sections/LabNotes";
import { Method } from "@/components/sections/Method";
import { MotionGallery } from "@/components/sections/MotionGallery";
import { Nav } from "@/components/sections/Nav";
import { Waitlist } from "@/components/sections/Waitlist";
import { BrandTransition } from "@/components/ui/BrandTransition";
import { Marquee } from "@/components/ui/Marquee";
import { copy } from "@/content/copy";

export const metadata: Metadata = {
  title: "Revelo Labs — Experiment 001",
  description: copy.hero.sub,
};

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex flex-col">
        <BuyZone />
        <Marquee text={copy.hero.marquee} />
        <Method />
        {/* TODO: Replace placeholder with /public/videos/brand-transition-01.mp4
            Required: 1920×1080px (16:9), MP4 h.264, ≤2MB, 4-6s loop
            Description: Animated test tube logo — icon filling with lab-green
            liquid, pulsing, or rotating. Subtle motion, seamless loop */}
        <BrandTransition label="TEST TUBE TRANSITION / 001" aspect="wide" />
        <MotionGallery />
        <LabNotes />
        {/* TODO: Replace placeholder with /public/videos/brand-motto.mp4
            Required: 2560×1080px (21:9 cinematic), MP4 h.264, ≤2MB
            Description: Wide cinematic block with the brand motto in
            massive type, subtle particle motion or scan-line effect */}
        <BrandTransition
          label="LAB MOTTO / ENGINEERED TO STAND OUT"
          aspect="cinematic"
        />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
