import { MotionReveal, MotionRevealItem } from "@/components/ui/MotionReveal";
import { cn } from "@/lib/cn";

type BrandTransitionProps = {
  label: string;
  aspect?: "wide" | "cinematic";
  className?: string;
};

export function BrandTransition({
  label,
  aspect = "wide",
  className,
}: BrandTransitionProps) {
  const title =
    aspect === "cinematic" ? "ENGINEERED TO STAND OUT" : "BRAND SIGNAL TEST";

  return (
    <div className={cn("py-[32px] md:py-[52px]", className)}>
      <MotionReveal
        mode="view"
        once
        viewportMargin="-100px"
        className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16"
      >
        <MotionRevealItem>
          <div
            className={cn(
              "relative overflow-hidden rounded-[8px] border border-hairline bg-[linear-gradient(135deg,rgba(21,27,21,0.95),rgba(7,8,7,0.96))] shadow-[inset_0_1px_0_rgba(244,242,238,0.04)]",
              aspect === "cinematic" ? "aspect-[21/9]" : "aspect-video",
            )}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,242,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(244,242,238,0.035)_1px,transparent_1px)] bg-[length:100%_10px,56px_100%]" />
            <div className="bg-brand/70 pointer-events-none absolute inset-x-0 top-0 h-px" />
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.05em] text-muted md:left-6 md:right-6 md:top-6 md:text-[11px]">
              <span>{label}</span>
              <span className="text-brand">REV-001</span>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <p className="font-display text-[34px] uppercase leading-[0.95] tracking-[0.02em] text-ink md:text-[72px] lg:text-[92px]">
                {title}
              </p>
              <div className="bg-brand/70 mt-5 h-px w-32 md:w-48" />
              <p className="mt-4 max-w-[520px] font-mono text-[11px] uppercase leading-[1.5] tracking-[0.05em] text-muted md:text-[12px]">
                Prototype motion, material logic, and lab notation held in one
                controlled visual system.
              </p>
            </div>
          </div>
        </MotionRevealItem>
      </MotionReveal>
    </div>
  );
}
