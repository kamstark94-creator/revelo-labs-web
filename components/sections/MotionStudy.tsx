import { Play } from "lucide-react";
import { MotionReveal, MotionRevealItem } from "@/components/ui/MotionReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function MotionStudy() {
  return (
    <section className="py-[56px] md:py-[80px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        <SectionDivider label="MOTION STUDY / 001" />
        {/* TODO: Replace with /public/videos/motion-study-001.mp4
            Required: 1920×1080px (16:9), MP4 h.264, ≤2MB, ≤15s loop, no audio
            Behavior: autoplay muted loop on desktop, static poster on mobile
            Description: Cinematic motion study of the joggers — could be
            a hero shot of someone walking/running, fabric details, or
            slow rotation of the garment */}
        <MotionReveal mode="view" once viewportMargin="-100px" className="mt-12">
          <MotionRevealItem>
            <div className="relative aspect-video w-full overflow-hidden border border-hairline bg-surface">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,242,238,0.04)_1px,transparent_1px)] bg-[length:100%_8px]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center">
                <Play
                  aria-hidden="true"
                  className="h-12 w-12 text-brand md:h-16 md:w-16"
                  strokeWidth={1.5}
                />
                <p className="px-6 font-mono text-[12px] uppercase tracking-[0.05em] text-brand md:text-[13px]">
                  MOTION STUDY / 001 — VIDEO PENDING
                </p>
              </div>
            </div>
          </MotionRevealItem>
        </MotionReveal>
      </div>
    </section>
  );
}
