import Link from "next/link";
import { notFound } from "next/navigation";
import { BuyZone } from "@/components/sections/BuyZone";
import { Footer } from "@/components/sections/Footer";
import { LabNoteCard } from "@/components/sections/LabNotes";
import { MotionStudy } from "@/components/sections/MotionStudy";
import { Nav } from "@/components/sections/Nav";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { experiments } from "@/content/experiments";
import { labNotes } from "@/content/lab-notes";

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

  const experiment = experiments[0];
  const firstLabNote = labNotes[0];

  return (
    <>
      <Nav />
      <main>
        <BuyZone />

        <section className="pb-[64px] md:pb-[120px]">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-6 md:grid-cols-2 md:px-12 lg:grid-cols-4 lg:px-16">
            {experiment.images.details.map((image, index) => (
              <div
                key={index}
                className="aspect-square border border-hairline bg-surface"
              >
                {/* TODO: Replace placeholder with Experiment 001 detail photography. */}
                {image ? null : (
                  <div className="flex h-full items-center justify-center font-mono text-[12px] uppercase tracking-[0.05em] text-muted">
                    DETAIL_{String(index + 1).padStart(2, "0")}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <MotionStudy />

        <section className="pb-[96px] md:pb-[120px]">
          <div className="mx-auto grid max-w-[1280px] gap-6 px-6 md:px-12 lg:grid-cols-2 lg:px-16">
            <div>
              <SectionDivider label="FROM THE LAB NOTES" />
              <div className="mt-8">
                <LabNoteCard note={firstLabNote} />
              </div>
            </div>
            <div>
              <SectionDivider label="EXPERIMENT 002" />
              <div className="mt-8 flex min-h-[320px] flex-col rounded-sm border border-hairline bg-surface p-6 md:p-8">
                <MonoLabel accent>IN DEVELOPMENT</MonoLabel>
                <h2 className="mt-6 font-display text-[28px] uppercase leading-[1.05] tracking-[0.02em] text-ink">
                  THE NEXT EXPERIMENT DROPS IN MOTION.
                </h2>
                <p className="mt-5 text-[15px] leading-[1.6] text-body">
                  Wear-testing now. Prototype 003. Get on the list for early
                  access.
                </p>
                <Link href="/#waitlist" className="mt-auto flex pt-8">
                  <Button className="w-full" variant="primary" size="lg">
                    GET LAB ACCESS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
