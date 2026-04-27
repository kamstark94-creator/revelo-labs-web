import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/sections/Nav";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { copy } from "@/content/copy";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="py-[64px] md:py-[140px]">
        <article className="mx-auto max-w-[680px] px-6 md:px-0">
          <MonoLabel accent>ABOUT / REVELO LABS</MonoLabel>
          <h1 className="mt-8 font-display text-[56px] uppercase leading-[0.95] tracking-[0.02em] text-ink md:text-[80px]">
            {copy.about.headline}
          </h1>
          <div className="mt-10 space-y-7 text-[18px] leading-[1.7] text-body">
            {copy.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
