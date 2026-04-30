import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/sections/Nav";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { copy } from "@/content/copy";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main" className="px-3 py-[48px] md:px-6 md:py-[96px]">
        <article className="bg-surface/55 mx-auto max-w-[760px] rounded-[8px] border border-hairline px-5 py-8 shadow-[inset_0_1px_0_rgba(244,242,238,0.04)] md:px-10 md:py-12">
          <MonoLabel accent>ABOUT / REVELO LABS</MonoLabel>
          <h1 className="mt-8 font-display text-[36px] uppercase leading-[0.95] tracking-[0.02em] text-ink md:text-[80px]">
            {copy.about.headline}
          </h1>
          <div className="mt-10 space-y-7 text-[18px] leading-[1.7] text-body">
            {copy.about.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {copy.about.sections.map((section) => (
            <section key={section.label} className="pt-16 md:pt-20">
              <SectionDivider label={section.label} />
              <p className="mt-8 text-[18px] leading-[1.7] text-body">
                {section.body}
              </p>
            </section>
          ))}

          <div className="py-12 text-center">
            <div className="h-px w-full bg-hairline" />
            <p className="py-8 font-display text-[32px] uppercase leading-[1.05] tracking-[0.02em] text-ink md:text-[40px]">
              {copy.about.closing}
            </p>
            <div className="h-px w-full bg-hairline" />
            <Link
              href={copy.about.cta.href}
              className="mt-10 flex md:inline-flex"
            >
              <Button className="w-full md:w-auto" variant="primary" size="lg">
                {copy.about.cta.label}
              </Button>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
