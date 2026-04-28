import type { Metadata } from "next";
import { BuyZone } from "@/components/sections/BuyZone";
import { Footer } from "@/components/sections/Footer";
import { LabNotes } from "@/components/sections/LabNotes";
import { Method } from "@/components/sections/Method";
import { Nav } from "@/components/sections/Nav";
import { Waitlist } from "@/components/sections/Waitlist";
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
      <main className="flex flex-col">
        <BuyZone />
        <Marquee text={copy.hero.marquee} />
        <Method />
        <LabNotes />
        <div className="hidden border-y border-hairline md:block">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-2 px-6 py-6 text-center font-mono text-[13px] uppercase tracking-[0.05em] md:flex-row md:justify-between md:px-12 md:text-left lg:px-16">
            <span className="text-muted">CURRENTLY IN LAB →</span>
            <span className="text-brand">EXPERIMENT 002 / PROTOTYPE 003</span>
            <span className="text-muted">STATUS: WEAR TESTING</span>
          </div>
        </div>
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
