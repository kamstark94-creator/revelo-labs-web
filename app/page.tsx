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
      <main>
        <Hero />
        <Method />
        <Product />
        <LabNotes />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
