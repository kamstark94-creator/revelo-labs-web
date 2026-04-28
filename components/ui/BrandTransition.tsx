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
  return (
    <div className={cn("py-[40px] md:py-[56px]", className)}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        <div
          className={cn(
            "relative overflow-hidden border border-hairline bg-surface",
            aspect === "cinematic" ? "aspect-[21/9]" : "aspect-video",
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,242,238,0.04)_1px,transparent_1px)] bg-[length:100%_8px]" />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-[12px] uppercase tracking-[0.05em] text-brand md:text-[13px]">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}
