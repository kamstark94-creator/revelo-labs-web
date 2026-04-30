"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductIllustration } from "@/components/brand/ProductIllustration";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { MotionReveal, MotionRevealItem } from "@/components/ui/MotionReveal";
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
  const quickStats = [
    ["FABRIC", experiment.specs.fabric],
    ["PANELS", String(experiment.specs.panels) + " STRUCTURED"],
    ["FIT", experiment.specs.fit],
    ["POCKET", "ANGLED THIGH"],
  ] as const;
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
    <div className="rounded-[8px] border border-hairline bg-surface/85 p-3 shadow-[inset_0_1px_0_rgba(244,242,238,0.04)]">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">
          Colorway
        </span>
        <span className="truncate text-right font-mono text-[11px] uppercase tracking-[0.05em] text-ink">
          {activeColorway.name}
        </span>
      </div>
      <div
        className="relative z-20 mt-3 grid grid-cols-5 gap-2"
        role="radiogroup"
        aria-label="Select colorway"
      >
        {experiment.colorways.map((colorway) => {
          const active = colorway.sku === activeSku;
          const isBone = colorway.hex.toUpperCase() === "#E8E2D5";

          return (
            <button
              key={colorway.sku}
              type="button"
              role="radio"
              aria-label={colorway.name}
              aria-checked={active}
              className="group flex min-w-0 cursor-pointer flex-col items-center text-center focus-visible:outline-none active:scale-[0.98]"
              onClick={() => setActiveSku(colorway.sku)}
            >
              <span className="relative flex h-10 w-10 items-center justify-center md:h-11 md:w-11">
                <AnimatePresence>
                  {active ? (
                    <motion.span
                      key="ring"
                      className="absolute -inset-[4px] rounded-full border border-brand"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  ) : (
                    <span className="absolute -inset-[6px] rounded-full border-2 border-transparent group-focus-visible:border-brand/60" />
                  )}
                </AnimatePresence>
                <span
                  className={cn(
                    "relative h-8 w-8 overflow-hidden rounded-full border [--swatch-scan-distance:32px] md:h-9 md:w-9 md:[--swatch-scan-distance:36px]",
                    active
                      ? "border-transparent"
                      : "border-hairline transition-colors duration-200 group-hover:border-sage",
                  )}
                  style={{ backgroundColor: colorway.hex }}
                >
                  {isBone ? (
                    <span className="absolute inset-[3px] rounded-full border border-bg/30" />
                  ) : null}
                  {active ? (
                    <span className="absolute inset-x-0 top-0 h-px animate-[swatch-scan-line_3s_linear_infinite] bg-brand" />
                  ) : null}
                </span>
              </span>
              <span
                className={cn(
                  "mt-2 font-mono text-[10px] uppercase leading-none tracking-[0.05em] transition-colors duration-200",
                  active ? "text-brand" : "text-muted",
                )}
              >
                {colorway.code}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );

  const activePhoto = (
    <div className="rounded-[8px] border border-hairline bg-[linear-gradient(180deg,rgba(21,27,21,0.9),rgba(7,8,7,0.72))] p-3 shadow-[inset_0_1px_0_rgba(244,242,238,0.045)] md:p-5">
      <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.05em] text-muted md:text-[11px]">
        <span>Sample view</span>
        <span className="text-brand">{activeColorway.sku}</span>
      </div>
      <div className="relative z-0 mt-1 flex w-full items-start justify-center md:mt-3">
        <ProductIllustration
          colorway={activeColorway}
          size="hero"
          imageSrc={experiment.images.hero}
          alt={experiment.name}
        />
      </div>
      <div className="mt-2 flex items-end justify-between gap-4 border-t border-hairline pt-3">
        <p className="font-display text-[18px] uppercase leading-none tracking-[0.02em] text-ink md:text-[22px]">
          {activeColorway.name}
        </p>
        <p className="max-w-[160px] text-right font-mono text-[10px] uppercase leading-[1.35] tracking-[0.05em] text-muted md:text-[11px]">
          {activeColorway.description}
        </p>
      </div>
    </div>
  );

  const actionZone = (
    <div className="rounded-[8px] border border-hairline bg-surface p-4 shadow-[inset_0_1px_0_rgba(244,242,238,0.04)] md:p-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[28px] uppercase leading-none text-ink md:text-[32px]">
            {priceDisplay}
          </p>
          <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.05em] text-muted">
            {experiment.currency}
          </p>
        </div>
        <p className="pb-1 text-right font-mono text-[11px] uppercase leading-[1.4] tracking-[0.05em] text-muted">
          Ships within
          <br />
          48 hours
        </p>
      </div>
      <Button
        className="mt-4 min-h-14 w-full"
        variant="primary"
        size="lg"
        onClick={handleAddToLab}
      >
        {copy.product.addToLabLabel}
      </Button>
    </div>
  );

  const specRowsContent = (
    <>
      <div className="mt-4 rounded-[8px] border border-hairline bg-bg/35 px-4">
        {specRows.map(([label, value]) => (
          <SpecRow key={label} label={label} value={value} />
        ))}
      </div>
      <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.05em] text-muted md:text-[12px]">
        {copy.product.specEndLine}
      </p>
    </>
  );

  const specSheet = (
    <div
      id="spec"
      className="rounded-[8px] border border-hairline bg-surface/80 p-4 shadow-[inset_0_1px_0_rgba(244,242,238,0.04)] md:p-5"
    >
      <button
        type="button"
        className="flex min-h-11 w-full items-center justify-between gap-4 font-mono text-[12px] uppercase tracking-[0.05em] text-brand lg:hidden"
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
      <div className="hidden lg:block">
        <MonoLabel>{copy.product.specHeading}</MonoLabel>
        {specRowsContent}
      </div>
      <AnimatePresence initial={false}>
        {specOpen ? (
          <motion.div
            className="overflow-hidden lg:hidden"
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
    <section
      id="hero"
      className="px-3 pb-[40px] pt-3 md:px-6 md:pb-[72px] md:pt-6"
    >
      <MotionReveal className="mx-auto max-w-[1320px] rounded-[8px] border border-hairline bg-[linear-gradient(180deg,rgba(16,20,16,0.94),rgba(7,8,7,0.86))] p-3 shadow-[inset_0_1px_0_rgba(244,242,238,0.055)] md:p-5 lg:p-6">
        <MotionRevealItem>
          <div className="flex min-h-11 items-center justify-between gap-4 border-b border-hairline pb-3 font-mono text-[11px] uppercase tracking-[0.05em] text-muted md:text-[12px]">
            <span className="text-ink">Experiment 001</span>
            <span className="text-brand">Catalyst system</span>
          </div>
        </MotionRevealItem>

        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-5">
          <div className="grid content-start gap-3 md:gap-4">
            <MotionRevealItem>{colorwaySelector}</MotionRevealItem>
            <MotionRevealItem>{activePhoto}</MotionRevealItem>
          </div>

          <div className="grid content-start gap-4">
            <MotionRevealItem>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {quickStats.map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[8px] border border-hairline bg-surface/80 p-3 shadow-[inset_0_1px_0_rgba(244,242,238,0.04)]"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.05em] text-muted">
                      {label}
                    </p>
                    <p className="mt-2 font-mono text-[12px] uppercase leading-[1.35] tracking-[0.05em] text-ink">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </MotionRevealItem>
            <MotionRevealItem>
              <div className="rounded-[8px] border border-hairline bg-surface/80 p-4 shadow-[inset_0_1px_0_rgba(244,242,238,0.04)] md:p-6">
                <MonoLabel accent>{copy.hero.kicker}</MonoLabel>
                <h1 className="mt-4 font-display text-[38px] uppercase leading-[0.92] tracking-[0.02em] text-ink min-[390px]:text-[42px] lg:text-[76px] xl:text-[92px]">
                  <span className="lg:hidden">
                    ENGINEERED TO
                    <br />
                    STAND OUT.
                  </span>
                  <span className="hidden lg:inline">{copy.hero.headline}</span>
                </h1>
                <p className="mt-5 max-w-[560px] text-[16px] leading-[1.65] text-body md:text-[17px]">
                  {copy.hero.sub}
                </p>
              </div>
            </MotionRevealItem>
            <MotionRevealItem>{actionZone}</MotionRevealItem>
            <MotionRevealItem>{specSheet}</MotionRevealItem>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
