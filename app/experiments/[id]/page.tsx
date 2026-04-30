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

const constructionDetails = [
  {
    label: "DETAIL_01",
    title: "Bonded seam",
    body: "Clean panel joins with hard side-lighting and no visible thread line.",
  },
  {
    label: "DETAIL_02",
    title: "Motion gusset",
    body: "Angular integration through the inner thigh for directional movement.",
  },
  {
    label: "DETAIL_03",
    title: "Cuff + piping",
    body: "Elastic recovery mapped against the contrast line at the lower leg.",
  },
  {
    label: "DETAIL_04",
    title: "Zipper pocket",
    body: "Concealed hardware, angled access, and controlled fabric tension.",
  },
] as const;

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
              {constructionDetails.map((detail) => (
                <MotionRevealItem key={detail.label}>
                  <article className="relative aspect-square overflow-hidden rounded-[8px] border border-hairline bg-surface shadow-[inset_0_1px_0_rgba(244,242,238,0.04)]">
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,242,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(244,242,238,0.035)_1px,transparent_1px)] bg-[length:100%_10px,52px_100%]" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(57,255,20,0.1),transparent_30%),linear-gradient(180deg,transparent,rgba(0,0,0,0.76))]" />
                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.05em] text-muted">
                      <span>{detail.label}</span>
                      <span className="text-brand">EXP-001</span>
                    </div>
                    <div className="bg-brand/60 absolute left-5 top-1/2 h-px w-24" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="font-display text-[30px] uppercase leading-none tracking-[0.02em] text-ink md:text-[44px]">
                        {detail.title}
                      </h3>
                      <p className="mt-4 max-w-[360px] text-[15px] leading-[1.6] text-body">
                        {detail.body}
                      </p>
                    </div>
                  </article>
                </MotionRevealItem>
              ))}
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
