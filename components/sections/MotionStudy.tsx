import { Play } from "lucide-react";
import { MotionReveal, MotionRevealItem } from "@/components/ui/MotionReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function MotionStudy() {
  return (
    <section className="py-[44px] md:py-[72px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        <SectionDivider label="MOTION STUDY / 001" />
        <MotionReveal
          mode="view"
          once
          viewportMargin="-100px"
          className="mt-12"
        >
          <MotionRevealItem>
            <div className="relative aspect-video w-full overflow-hidden rounded-[8px] border border-hairline bg-[linear-gradient(135deg,rgba(21,27,21,0.96),rgba(7,8,7,0.98))] shadow-[inset_0_1px_0_rgba(244,242,238,0.04)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,242,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(244,242,238,0.03)_1px,transparent_1px)] bg-[length:100%_10px,64px_100%]" />
              <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.05em] text-muted md:left-7 md:right-7 md:top-7 md:text-[11px]">
                <span>Motion capture placeholder</span>
                <span className="text-brand">No audio / loop ready</span>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center">
                <span className="border-brand/50 bg-bg/55 inline-flex h-16 w-16 items-center justify-center rounded-full border text-brand shadow-[inset_0_1px_0_rgba(244,242,238,0.08)] md:h-20 md:w-20">
                  <Play
                    aria-hidden="true"
                    className="h-7 w-7 md:h-9 md:w-9"
                    strokeWidth={1.5}
                  />
                </span>
                <div>
                  <p className="px-6 font-mono text-[12px] uppercase tracking-[0.05em] text-brand md:text-[13px]">
                    MOTION STUDY / 001
                  </p>
                  <p className="mx-auto mt-3 max-w-[420px] px-6 text-[15px] leading-[1.6] text-body">
                    A controlled video bay for stride, pocket access, and fabric
                    recovery once final footage is loaded.
                  </p>
                </div>
              </div>
            </div>
          </MotionRevealItem>
        </MotionReveal>
      </div>
    </section>
  );
}
