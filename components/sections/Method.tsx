import { MonoLabel } from "@/components/ui/MonoLabel";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { MotionReveal, MotionRevealItem } from "@/components/ui/MotionReveal";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

export function Method() {
  return (
    <section id="method" className="py-[44px] md:py-[72px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        <SectionDivider label={copy.method.sectionLabel} />
        <MotionReveal
          mode="view"
          once
          viewportMargin="-100px"
          className="bg-surface/70 mt-8 grid grid-cols-1 gap-3 rounded-[8px] border border-hairline p-3 shadow-[inset_0_1px_0_rgba(244,242,238,0.04)] md:mt-12 md:grid-cols-[1.15fr_0.92fr_0.92fr] md:gap-3"
        >
          {copy.method.blocks.map((block, index) => (
            <MotionRevealItem
              key={block.kicker}
              className={cn(
                "bg-bg/35 rounded-[8px] border border-hairline p-5 shadow-[inset_0_1px_0_rgba(244,242,238,0.035)] transition-colors duration-200 hover:bg-surface md:p-6",
                index === 0 && "md:min-h-[360px]",
              )}
            >
              <MonoLabel accent>{block.kicker}</MonoLabel>
              <h3 className="mt-4 whitespace-pre-line font-display text-[22px] uppercase leading-[1.05] tracking-[0.02em] text-ink md:text-[36px]">
                {block.headline}
              </h3>
              <p className="mt-6 max-w-[320px] text-[15px] leading-[1.65] text-body md:text-[16px]">
                {block.body}
              </p>
            </MotionRevealItem>
          ))}
        </MotionReveal>
      </div>
    </section>
  );
}
