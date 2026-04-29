import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BuyZone } from "@/components/sections/BuyZone";
import { Footer } from "@/components/sections/Footer";
import { LabNoteCard } from "@/components/sections/LabNotes";
import { MotionStudy } from "@/components/sections/MotionStudy";
import { Nav } from "@/components/sections/Nav";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { MotionReveal, MotionRevealItem } from "@/components/ui/MotionReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { labNotes } from "@/content/lab-notes";

export const metadata: Metadata = {
  title: "Revelo Labs",
  openGraph: {
    title: "Experiment 001 / The Jogger — Revelo Labs",
    description: "We don't release products. We release experiments.",
    url: "https://revelo-labs-web.vercel.app/experiments/001",
    siteName: "Revelo Labs",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Revelo Labs — Engineered to stand out.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiment 001 / The Jogger — Revelo Labs",
    description: "We don't release products. We release experiments.",
    images: ["/images/og-image.png"],
  },
};

export function generateStaticParams() {
  return [{ id: "001" }];
}

type ExperimentPageProps = {
  params: { id: string };
};

export default function ExperimentPage({ params }: ExperimentPageProps) {
  if (params.id !== "001") {
    notFound();
  }

  const firstLabNote = labNotes[0];

  return (
    <>
      <Nav />
      <main id="main">
        <BuyZone />

        <section className="pb-[64px] md:pb-[120px]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
            <SectionDivider label="CONSTRUCTION DETAILS / EXP-001" />
            <MotionReveal
              mode="view"
              once
              viewportMargin="-100px"
              className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
            >
              {/* TODO: Replace with /public/images/detail-01.jpg
                  Required: 1200×1200px (1:1 square), JPG/PNG
                  Description: Macro shot of bonded seam where two
                  panels join — fabric texture, hard side lighting,
                  no thread visible (bonded edge) */}
              <MotionRevealItem>
                <div className="relative aspect-square overflow-hidden border border-hairline bg-surface">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,242,238,0.04)_1px,transparent_1px)] bg-[length:100%_8px]" />
                  <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-[13px] uppercase tracking-[0.05em] text-brand">
                    DETAIL_01 / BONDED SEAM
                  </div>
                </div>
              </MotionRevealItem>

              {/* TODO: Replace with /public/images/detail-02.jpg
                  Required: 1200×1200px (1:1 square), JPG/PNG
                  Description: Inner thigh motion gusset — angular
                  shot showing panel shape and integration with
                  surrounding fabric */}
              <MotionRevealItem>
                <div className="relative aspect-square overflow-hidden border border-hairline bg-surface">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,242,238,0.04)_1px,transparent_1px)] bg-[length:100%_8px]" />
                  <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-[13px] uppercase tracking-[0.05em] text-brand">
                    DETAIL_02 / MOTION GUSSET
                  </div>
                </div>
              </MotionRevealItem>

              {/* TODO: Replace with /public/images/detail-03.jpg
                  Required: 1200×1200px (1:1 square), JPG/PNG
                  Description: Bottom cuff close-up — elastic ribbing,
                  piping line (white on Lab Violet, lab-green on
                  others), visible fabric weave */}
              <MotionRevealItem>
                <div className="relative aspect-square overflow-hidden border border-hairline bg-surface">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,242,238,0.04)_1px,transparent_1px)] bg-[length:100%_8px]" />
                  <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-[13px] uppercase tracking-[0.05em] text-brand">
                    DETAIL_03 / CUFF + PIPING
                  </div>
                </div>
              </MotionRevealItem>

              {/* TODO: Replace with /public/images/detail-04.jpg
                  Required: 1200×1200px (1:1 square), JPG/PNG
                  Description: Macro of zipper pocket — zipper pull
                  sharp, hardware visible, surrounding fabric slightly
                  soft */}
              <MotionRevealItem>
                <div className="relative aspect-square overflow-hidden border border-hairline bg-surface">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,242,238,0.04)_1px,transparent_1px)] bg-[length:100%_8px]" />
                  <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-[13px] uppercase tracking-[0.05em] text-brand">
                    DETAIL_04 / ZIPPER POCKET
                  </div>
                </div>
              </MotionRevealItem>
            </MotionReveal>
          </div>
        </section>

        <MotionStudy />

        <section className="pb-[96px] md:pb-[120px]">
          <MotionReveal
            mode="view"
            once
            viewportMargin="-100px"
            className="mx-auto grid max-w-[1280px] gap-6 px-6 md:px-12 lg:grid-cols-2 lg:px-16"
          >
            <MotionRevealItem>
              <div>
                <SectionDivider label="FROM THE LAB NOTES" />
                <div className="mt-8">
                  <LabNoteCard note={firstLabNote} />
                </div>
              </div>
            </MotionRevealItem>
            <MotionRevealItem>
              <div>
                <SectionDivider label="EXPERIMENT 002" />
                <div className="mt-8 flex min-h-[320px] flex-col rounded-sm border border-hairline bg-surface p-6 md:p-8">
                  <MonoLabel accent>IN DEVELOPMENT</MonoLabel>
                  <h2 className="mt-6 font-display text-[28px] uppercase leading-[1.05] tracking-[0.02em] text-ink">
                    THE NEXT EXPERIMENT DROPS IN MOTION.
                  </h2>
                  <p className="mt-5 text-[15px] leading-[1.6] text-body">
                    Wear-testing now. Development sample 003. Get on the list
                    for early access.
                  </p>
                  <Link href="/#waitlist" className="mt-auto flex pt-8">
                    <Button className="w-full" variant="primary" size="lg">
                      GET LAB ACCESS
                    </Button>
                  </Link>
                </div>
              </div>
            </MotionRevealItem>
          </MotionReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
