import Link from "next/link";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { MotionReveal, MotionRevealItem } from "@/components/ui/MotionReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { copy } from "@/content/copy";
import { labNotes, type LabNote } from "@/content/lab-notes";

export function LabNoteCard({ note }: { note: LabNote }) {
  return (
    <article className="group flex min-h-[320px] flex-col rounded-[8px] border border-hairline bg-surface p-6 shadow-[inset_0_1px_0_rgba(244,242,238,0.04)] transition-colors duration-200 hover:bg-surface-2 md:p-7">
      <div className="flex items-center justify-between gap-4">
        <MonoLabel>{note.date}</MonoLabel>
        <MonoLabel accent>{note.category}</MonoLabel>
      </div>
      <h3 className="mt-6 font-display text-[22px] uppercase leading-[1.1] tracking-[0.02em] text-ink">
        {note.headline}
      </h3>
      <p className="mt-4 line-clamp-3 text-[15px] leading-[1.6] text-body">
        {note.preview}
      </p>
      {/* TODO: Route this card to /lab-notes/[slug] in v2. */}
      <Link
        href="/lab-notes"
        className="mt-auto inline-flex min-h-11 items-center pt-8 font-mono text-[13px] uppercase tracking-[0.05em] text-ink transition-colors duration-200 hover:text-brand"
      >
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          READ ENTRY →
        </span>
      </Link>
    </article>
  );
}

export function LabNotes() {
  return (
    <section id="lab-notes" className="py-[44px] md:py-[72px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        <SectionDivider label={copy.labNotes.sectionLabel} />
        <MotionReveal
          mode="view"
          once
          viewportMargin="-100px"
          className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:gap-5"
        >
          {labNotes.map((note) => (
            <MotionRevealItem key={note.slug}>
              <LabNoteCard note={note} />
            </MotionRevealItem>
          ))}
        </MotionReveal>
        <Link
          href="/lab-notes"
          className="mt-8 inline-flex min-h-11 items-center font-mono text-[13px] uppercase tracking-[0.05em] text-brand md:hidden"
        >
          READ ALL LAB NOTES →
        </Link>
      </div>
    </section>
  );
}
