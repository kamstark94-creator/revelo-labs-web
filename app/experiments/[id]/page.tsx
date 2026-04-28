import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/sections/Nav";
import { ProductIllustration } from "@/components/brand/ProductIllustration";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SpecRow } from "@/components/ui/SpecRow";
import { copy } from "@/content/copy";
import { experiments } from "@/content/experiments";
import { cn } from "@/lib/cn";

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
  const labBlack = experiment.colorways[0];
  const price = "$" + experiment.price;
  const specRows = [
    ["PROTOCOL", experiment.specs.protocol],
    ["FABRIC", experiment.specs.fabric],
    ["FIT", experiment.specs.fit],
    ["PANELS", String(experiment.specs.panels)],
    ["PIPING", experiment.specs.piping],
    ["WEIGHT", experiment.specs.weight],
    ["CARE", experiment.specs.care],
    ["ORIGIN", experiment.specs.origin],
    ["PRICE", price],
  ] as const;
  const fitRows = [
    ["RISE", experiment.fit.rise],
    ["INSEAM", experiment.fit.inseam],
    ["STRETCH", experiment.fit.stretch],
    ["MODEL HEIGHT", experiment.fit.modelHeight],
    ["MODEL WEARS", experiment.fit.modelWears],
    ["SIZE GUIDE", experiment.fit.sizeGuide],
  ] as const;

  return (
    <>
      <Nav />
      <div className="mx-auto max-w-[1280px] px-6 py-6 font-mono text-[13px] uppercase tracking-[0.05em] md:px-12 lg:px-16">
        <Link href="/experiments/001" className="text-muted transition-colors hover:text-brand">
          EXPERIMENTS
        </Link>
        <span className="text-muted"> / </span>
        <span className="text-ink">EXPERIMENT 001 / THE JOGGER</span>
      </div>
      <main>
        <section className="py-[64px] md:py-[120px]">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:px-12 lg:grid-cols-12 lg:px-16">
            <div className="lg:col-span-7">
              <MonoLabel accent>EXPERIMENT_{experiment.id}</MonoLabel>
              <h1 className="mt-6 font-display text-[56px] uppercase leading-[0.95] tracking-[0.02em] text-ink md:text-[80px]">
                {experiment.name}
              </h1>
              <p className="mt-6 max-w-[560px] text-[18px] leading-[1.6] text-body">
                {experiment.description}
              </p>
              <p className="mt-8 font-mono text-[13px] uppercase tracking-[0.05em] text-brand">
                {price} / {experiment.status.replace("-", " ")}
              </p>
              <div className="mt-10">
                <ProductIllustration colorway={labBlack} size="hero" imageSrc={experiment.images.hero} alt={experiment.name} />
              </div>
            </div>

            <aside className="hidden lg:sticky lg:top-28 lg:col-span-4 lg:col-start-9 lg:block lg:self-start">
              <div className="border border-hairline bg-surface p-8">
                <MonoLabel>{copy.product.specHeading}</MonoLabel>
                <div className="mt-6">
                  {specRows.map(([label, value]) => (
                    <SpecRow key={label} label={label} value={value} />
                  ))}
                </div>
                <div className="mt-6 border-t border-hairline pt-5">
                  <p className="font-mono text-[12px] uppercase tracking-[0.05em] text-brand">FIT & SIZING</p>
                  <div className="mt-3">
                    {fitRows.map(([label, value]) => (
                      <SpecRow key={label} label={label} value={value} />
                    ))}
                  </div>
                </div>
                <Button className="mt-8 w-full" variant="primary" size="lg">
                  {copy.product.addToLabLabel}
                </Button>
              </div>
            </aside>
          </div>
        </section>

        <section className="pb-[64px] md:pb-[120px]">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-4 px-6 md:px-12 lg:grid-cols-4 lg:px-16">
            {experiment.images.details.map((image, index) => (
              <div key={index} className="aspect-square border border-hairline bg-surface">
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

        <section className="pb-[120px] md:pb-[160px]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
            <SectionDivider label="PROTOTYPE LOG" />
            <div className="mt-12 overflow-x-auto">
              <div className="flex min-w-max gap-4">
                {Array.from({ length: experiment.prototypeCount }, (_, index) => {
                  const prototypeNumber = index + 1;
                  const active = prototypeNumber === experiment.prototypeCount;
                  return (
                    <div key={prototypeNumber} className="text-center">
                      <div
                        className={cn(
                          "h-8 w-8 border border-hairline",
                          active && "border-brand bg-brand",
                        )}
                      />
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.05em] text-muted">
                        P-{String(prototypeNumber).padStart(3, "0")}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="mt-8 font-mono text-[13px] uppercase tracking-[0.05em] text-muted">
              14 prototypes. 7 panels. 1 release.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
