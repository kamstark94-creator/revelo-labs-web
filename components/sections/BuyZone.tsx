"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductIllustration } from "@/components/brand/ProductIllustration";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { SpecRow } from "@/components/ui/SpecRow";
import { copy } from "@/content/copy";
import { experiments } from "@/content/experiments";
import { cn } from "@/lib/cn";
import { useCartStore } from "@/lib/store";

const pipingLabel = (hex: string): string => {
  const labels: Record<string, string> = {
    "#39FF14": "LAB-GREEN",
    "#F4F2EE": "WHITE",
  };

  return labels[hex] ?? hex.toUpperCase();
};

export function BuyZone() {
  const experiment = experiments[0];
  const [activeSku, setActiveSku] = useState(experiment.colorways[0].sku);
  const [specOpen, setSpecOpen] = useState(false);
  const addToLab = useCartStore((state) => state.addToLab);

  const activeColorway = useMemo(
    () =>
      experiment.colorways.find((colorway) => colorway.sku === activeSku) ??
      experiment.colorways[0],
    [activeSku, experiment.colorways],
  );

  const priceDisplay = "$" + experiment.price;
  const specRows = [
    ["PROTOCOL", experiment.specs.protocol],
    ["FABRIC", experiment.specs.fabric],
    ["FIT", experiment.specs.fit],
    ["PANELS", String(experiment.specs.panels)],
    ["PIPING", pipingLabel(activeColorway.pipingHex)],
    ["WEIGHT", experiment.specs.weight],
    ["CARE", experiment.specs.care],
    ["ORIGIN", experiment.specs.origin],
    ["PRICE", priceDisplay],
  ] as const;

  function handleAddToLab() {
    addToLab();
    console.log("ADD_TO_LAB", {
      sku: activeColorway.sku,
      experiment: experiment.id,
    });
  }

  const colorwaySelector = (
    <div>
      <div
        className="relative z-20 flex items-start gap-3"
        aria-label="Select colorway"
      >
        {experiment.colorways.map((colorway) => {
          const active = colorway.sku === activeSku;
          const isBone = colorway.hex.toUpperCase() === "#E8E2D5";

          return (
            <button
              key={colorway.sku}
              type="button"
              aria-label={"Select " + colorway.name}
              aria-pressed={active}
              className="group flex min-w-11 shrink-0 cursor-pointer flex-col items-center text-center focus-visible:outline-none active:scale-[0.98]"
              onClick={() => setActiveSku(colorway.sku)}
            >
              <span className="relative flex h-[52px] w-[52px] items-center justify-center md:h-14 md:w-14">
                <span
                  className={cn(
                    "absolute -inset-[6px] rounded-full border-2 transition-colors duration-200",
                    active
                      ? "border-brand"
                      : "group-focus-visible:border-brand/60 border-transparent",
                  )}
                />
                <span
                  className={cn(
                    "relative h-10 w-10 overflow-hidden rounded-full border [--swatch-scan-distance:40px] md:h-11 md:w-11 md:[--swatch-scan-distance:44px]",
                    active
                      ? "border-transparent"
                      : "border-brand/40 group-hover:border-brand/70 transition-colors duration-200",
                  )}
                  style={{ backgroundColor: colorway.hex }}
                >
                  {isBone ? (
                    <span className="border-bg/30 absolute inset-[3px] rounded-full border" />
                  ) : null}
                  {active ? (
                    <span className="absolute inset-x-0 top-0 h-px animate-[swatch-scan-line_3s_linear_infinite] bg-brand" />
                  ) : null}
                </span>
              </span>
              <span
                className={cn(
                  "mt-2 font-mono text-[10px] uppercase leading-none tracking-[0.05em] transition-colors duration-200",
                  active ? "text-brand" : "text-brand/60",
                )}
              >
                {colorway.code}
              </span>
              <span className="mt-1 h-[9px] font-mono text-[9px] uppercase leading-none tracking-[0.05em] text-brand">
                {active ? "ACTIVE" : ""}
              </span>
            </button>
          );
        })}
      </div>
      <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.05em] text-brand md:hidden">
        TAP TO SELECT
      </p>
    </div>
  );

  const activePhoto = (
    <div>
      <div className="relative z-0 mt-6 flex max-h-[60vh] w-full items-center justify-center md:mt-8 md:max-h-[600px]">
        <ProductIllustration
          colorway={activeColorway}
          size="hero"
          imageSrc={experiment.images.hero}
          alt={experiment.name}
        />
      </div>
      <div className="mt-4 text-center">
        <p className="font-display text-[20px] uppercase leading-none tracking-[0.02em] text-ink">
          {activeColorway.name}
        </p>
        <p className="mt-2 font-mono text-[13px] uppercase tracking-[0.05em] text-brand">
          {activeColorway.sku}
        </p>
      </div>
    </div>
  );

  const actionZone = (
    <div className="mt-8 flex flex-col items-stretch gap-4">
      <div>
        <p className="font-mono text-[28px] uppercase leading-none text-ink">
          {priceDisplay}
        </p>
        <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.05em] text-muted">
          {experiment.currency}
        </p>
      </div>
      <Button
        className="min-h-14 w-full"
        variant="primary"
        size="lg"
        onClick={handleAddToLab}
      >
        {copy.product.addToLabLabel}
      </Button>
      <p className="text-center font-mono text-[12px] uppercase tracking-[0.05em] text-muted">
        SHIPS WITHIN 48 HOURS
      </p>
    </div>
  );

  const specRowsContent = (
    <>
      <div className="mt-6">
        {specRows.map(([label, value]) => (
          <SpecRow key={label} label={label} value={value} />
        ))}
      </div>
      <p className="mt-6 text-center font-mono text-[13px] uppercase tracking-[0.05em] text-muted">
        {copy.product.specEndLine}
      </p>
    </>
  );

  const specSheet = (
    <div id="spec" className="mt-8 border-t border-hairline pt-6">
      <button
        type="button"
        className="flex min-h-12 w-full items-center justify-between gap-4 font-mono text-[13px] uppercase tracking-[0.05em] text-brand md:hidden"
        onClick={() => setSpecOpen((open) => !open)}
        aria-expanded={specOpen}
      >
        <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-left">
          <span>{copy.product.specHeading}</span>
          <span aria-hidden="true">{" — "}</span>
          <span>9 SPECS</span>
        </span>
        {specOpen ? (
          <ChevronUp
            aria-hidden="true"
            className="h-4 w-4 animate-[spec-chevron-pulse_1.6s_ease-in-out_infinite]"
          />
        ) : (
          <ChevronDown
            aria-hidden="true"
            className="h-4 w-4 animate-[spec-chevron-pulse_1.6s_ease-in-out_infinite]"
          />
        )}
      </button>
      <div className="hidden md:block">
        <MonoLabel>{copy.product.specHeading}</MonoLabel>
        {specRowsContent}
      </div>
      <AnimatePresence initial={false}>
        {specOpen ? (
          <motion.div
            className="overflow-hidden md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {specRowsContent}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );

  return (
    <section id="hero" className="py-[32px] md:py-[80px]">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:grid-cols-[1fr_1fr] md:gap-12 md:px-12 lg:px-16">
        <div>
          <MonoLabel accent>{copy.hero.kicker}</MonoLabel>
          <div className="mt-6">{colorwaySelector}</div>
          {activePhoto}
        </div>

        <div className="md:pt-8">
          <h1 className="font-display text-[44px] uppercase leading-[0.92] tracking-[0.02em] text-ink md:text-[80px] lg:text-[96px]">
            {copy.hero.headline}
          </h1>
          <p className="mt-6 max-w-[520px] text-[17px] leading-[1.6] text-body md:text-[18px]">
            {copy.hero.sub}
          </p>
          {actionZone}
          {specSheet}
        </div>
      </div>
    </section>
  );
}
