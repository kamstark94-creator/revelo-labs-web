"use client";

import { useMemo, useState } from "react";
import { ProductIllustration } from "@/components/brand/ProductIllustration";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SpecRow } from "@/components/ui/SpecRow";
import { copy } from "@/content/copy";
import { experiments } from "@/content/experiments";
import { cn } from "@/lib/cn";
import { useCartStore } from "@/lib/store";

export function Product() {
  const experiment = experiments[0];
  const [activeSku, setActiveSku] = useState("REV-001-LBK");
  const addToLab = useCartStore((state) => state.addToLab);

  const activeColorway = useMemo(
    () => experiment.colorways.find((colorway) => colorway.sku === activeSku) ?? experiment.colorways[0],
    [activeSku, experiment.colorways],
  );

  function handleAddToLab() {
    addToLab();
    console.log("ADD_TO_LAB", { sku: activeColorway.sku, experiment: experiment.id });
  }

  const priceDisplay = "$" + experiment.price;
  const specRows = [
    ["PROTOCOL", experiment.specs.protocol],
    ["FABRIC", experiment.specs.fabric],
    ["FIT", experiment.specs.fit],
    ["PANELS", String(experiment.specs.panels)],
    ["PIPING", experiment.specs.piping],
    ["WEIGHT", experiment.specs.weight],
    ["CARE", experiment.specs.care],
    ["ORIGIN", experiment.specs.origin],
    ["PRICE", priceDisplay],
  ] as const;

  return (
    <section id="spec" className="py-[64px] md:py-[112px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        <SectionDivider label={copy.product.sectionLabel} />
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-6">
            <MonoLabel>{copy.product.colorwaysHeading}</MonoLabel>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {experiment.colorways.map((colorway) => {
                const active = colorway.sku === activeSku;
                return (
                  <button
                    key={colorway.sku}
                    type="button"
                    className="group flex min-h-[220px] flex-col rounded-sm border border-hairline bg-surface p-6 text-left transition-colors duration-200 hover:bg-surface-2"
                    onClick={() => setActiveSku(colorway.sku)}
                  >
                    <span
                      className={cn(
                        "block h-20 w-20 rounded-full transition-all duration-200",
                        active ? "ring-2 ring-brand" : "ring-1 ring-hairline group-hover:ring-2 group-hover:ring-ink",
                      )}
                      style={{ backgroundColor: colorway.hex }}
                    />
                    <span className="mt-6 block font-display text-[20px] uppercase leading-none tracking-[0.02em] text-ink">
                      {colorway.name}
                    </span>
                    <span className="mt-2 block font-mono text-[13px] uppercase tracking-[0.05em] text-brand">
                      {colorway.sku}
                    </span>
                    <span className="mt-auto pt-6 font-mono text-[12px] uppercase tracking-[0.05em] text-muted">
                      {colorway.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mx-auto max-w-[320px]">
              <ProductIllustration size="product" colorway={activeColorway} imageSrc={experiment.images.hero} alt={experiment.name} />
            </div>
          </div>

          <div id="spec" className="lg:col-span-3">
            <MonoLabel>{copy.product.specHeading}</MonoLabel>
            <div className="mt-6">
              {specRows.map(([label, value]) => (
                <SpecRow key={label} label={label} value={value} />
              ))}
            </div>
            <p className="mt-6 text-center font-mono text-[13px] uppercase tracking-[0.05em] text-muted">
              {copy.product.specEndLine}
            </p>
            <Button className="mt-8 w-full" variant="primary" size="lg" onClick={handleAddToLab}>
              {copy.product.addToLabLabel}
            </Button>
          </div>        </div>
      </div>
    </section>
  );
}
