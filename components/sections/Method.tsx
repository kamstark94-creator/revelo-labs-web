import { MonoLabel } from "@/components/ui/MonoLabel";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { MotionReveal, MotionRevealItem } from "@/components/ui/MotionReveal";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

export function Method() {
  return (
    <section className="py-[64px] md:py-[160px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        <SectionDivider label={copy.method.sectionLabel} />
        <MotionReveal
          mode="view"
          once
          viewportMargin="-100px"
          className="mt-16 grid grid-cols-1 md:grid-cols-3"
        >
          {copy.method.blocks.map((block, index) => (
            <MotionRevealItem
              key={block.kicker}
              className={cn(
                "border-t border-hairline py-10 md:border-t-0 md:py-0",
                index > 0 && "md:border-l md:border-hairline md:pl-8",
                index === 0 && "md:pr-8",
                index === 1 && "md:px-8",
              )}
            >
              <MonoLabel accent>{block.kicker}</MonoLabel>
              <h3 className="mt-4 whitespace-pre-line font-display text-[28px] uppercase leading-[1.05] tracking-[0.02em] text-ink md:text-[36px]">
                {block.headline}
              </h3>
              <p className="mt-6 max-w-[280px] text-body">{block.body}</p>
            </MotionRevealItem>
          ))}
        </MotionReveal>
      </div>
    </section>
  );
}
