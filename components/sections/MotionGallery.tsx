import { MotionReveal, MotionRevealItem } from "@/components/ui/MotionReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";

const fieldTests = [
  {
    label: "FIELD TEST 01",
    title: "Testing environments",
    body: "Gym light, concrete edges, and repeated direction changes.",
    metric: "7 PANEL MAP",
  },
  {
    label: "FIELD TEST 02",
    title: "Street transition",
    body: "Matte nylon under daylight with the angled thigh pocket in motion.",
    metric: "48 HR WEAR",
  },
  {
    label: "FIELD TEST 03",
    title: "Studio control",
    body: "Clean silhouettes, taped marks, and isolated seam behavior.",
    metric: "320G SAMPLE",
  },
  {
    label: "FIELD TEST 04",
    title: "Cut + recovery",
    body: "Elastic cuffs and piping tracked through fast stance changes.",
    metric: "REV-001",
  },
] as const;

export function MotionGallery() {
  return (
    <section className="py-[44px] md:py-[72px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        <SectionDivider label="BUILT IN MOTION" />
        <div className="mt-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <p className="font-mono text-[12px] uppercase tracking-[0.05em] text-brand md:text-[13px]">
            FIELD TESTED / 001
          </p>
          <p className="max-w-[420px] text-[15px] leading-[1.6] text-body">
            Four controlled contexts for the same garment: movement, visibility,
            pocket access, and construction memory.
          </p>
        </div>
        <MotionReveal
          mode="view"
          once
          viewportMargin="-100px"
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
        >
          {fieldTests.map((test, index) => (
            <MotionRevealItem key={test.label}>
              <article className="group relative aspect-[4/5] overflow-hidden rounded-[8px] border border-hairline bg-surface shadow-[inset_0_1px_0_rgba(244,242,238,0.04)]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,242,238,0.045)_1px,transparent_1px)] bg-[length:100%_10px]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(57,255,20,0.12),transparent_28%),linear-gradient(160deg,rgba(111,123,104,0.2),transparent_46%),linear-gradient(180deg,transparent,rgba(0,0,0,0.78))]" />
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.05em] text-muted">
                  <span>{test.label}</span>
                  <span className={index === 2 ? "text-blush" : "text-brand"}>
                    {test.metric}
                  </span>
                </div>
                <div className="absolute inset-x-5 top-1/2 h-px bg-hairline" />
                <div className="bg-brand/50 absolute left-5 top-1/2 h-16 w-px -translate-y-1/2" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display text-[28px] uppercase leading-none tracking-[0.02em] text-ink md:text-[38px]">
                    {test.title}
                  </h3>
                  <p className="mt-4 max-w-[360px] text-[15px] leading-[1.6] text-body">
                    {test.body}
                  </p>
                </div>
              </article>
            </MotionRevealItem>
          ))}
        </MotionReveal>
      </div>
    </section>
  );
}
