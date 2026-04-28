import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { LabNotes } from "@/components/sections/LabNotes";
import { Method } from "@/components/sections/Method";
import { Nav } from "@/components/sections/Nav";
import { Product } from "@/components/sections/Product";
import { Waitlist } from "@/components/sections/Waitlist";
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
        <div className="order-1">
          <Hero />
        </div>
        <div className="order-4 md:order-2">
          <Method />
        </div>
        <div className="order-2 md:order-3">
          <Product />
        </div>
        <div className="order-3 md:order-4">
          <LabNotes />
        </div>
        <div className="order-5 hidden border-y border-hairline md:block">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-2 px-6 py-6 text-center font-mono text-[13px] uppercase tracking-[0.05em] md:flex-row md:justify-between md:px-12 md:text-left lg:px-16">
            <span className="text-muted">CURRENTLY IN LAB →</span>
            <span className="text-brand">EXPERIMENT 002 / PROTOTYPE 003</span>
            <span className="text-muted">STATUS: WEAR TESTING</span>
          </div>
        </div>
        <div className="order-6">
          <Waitlist />
        </div>
      </main>
      <Footer />
    </>
  );
}
