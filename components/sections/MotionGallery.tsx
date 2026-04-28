import { SectionDivider } from "@/components/ui/SectionDivider";

export function MotionGallery() {
  return (
    <section className="py-[56px] md:py-[72px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        <SectionDivider label="BUILT IN MOTION" />
        <p className="mt-6 font-mono text-[13px] uppercase tracking-[0.05em] text-brand">
          FIELD TESTED / 001
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {/* TODO: Replace with /public/images/motion-01.jpg
              Required: 1200×1500px (4:5 portrait), JPG/PNG
              Description: Subject mid-movement in gym setting,
              joggers visible, dramatic gym lighting, dark or
              neutral environment */}
          <div className="relative aspect-[4/5] overflow-hidden border border-hairline bg-surface">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,242,238,0.04)_1px,transparent_1px)] bg-[length:100%_8px]" />
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-[13px] uppercase tracking-[0.05em] text-brand">
              MOTION_01 / THE GYM
            </div>
          </div>

          {/* TODO: Replace with /public/images/motion-02.jpg
              Required: 1200×1500px (4:5 portrait), JPG/PNG
              Description: Subject walking in urban environment,
              sidewalk/concrete/architectural lines, daylight or
              golden hour, editorial street photography feel */}
          <div className="relative aspect-[4/5] overflow-hidden border border-hairline bg-surface">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,242,238,0.04)_1px,transparent_1px)] bg-[length:100%_8px]" />
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-[13px] uppercase tracking-[0.05em] text-brand">
              MOTION_02 / THE STREET
            </div>
          </div>

          {/* TODO: Replace with /public/images/motion-03.jpg
              Required: 1200×1500px (4:5 portrait), JPG/PNG
              Description: Subject in clean studio environment,
              neutral backdrop, controlled lighting, fashion
              editorial feel, joggers as visual focus */}
          <div className="relative aspect-[4/5] overflow-hidden border border-hairline bg-surface">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,242,238,0.04)_1px,transparent_1px)] bg-[length:100%_8px]" />
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-[13px] uppercase tracking-[0.05em] text-brand">
              MOTION_03 / THE STUDIO
            </div>
          </div>

          {/* TODO: Replace with /public/images/motion-04.jpg
              Required: 1200×1500px (4:5 portrait), JPG/PNG
              Description: Subject in athletic transition (jumping,
              changing direction), motion blur on body acceptable,
              joggers stay sharp, captures movement claim */}
          <div className="relative aspect-[4/5] overflow-hidden border border-hairline bg-surface">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,242,238,0.04)_1px,transparent_1px)] bg-[length:100%_8px]" />
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-[13px] uppercase tracking-[0.05em] text-brand">
              MOTION_04 / THE TRANSITION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
