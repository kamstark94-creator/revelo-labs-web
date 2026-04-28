import Link from "next/link";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { copy } from "@/content/copy";
import { labNotes, type LabNote } from "@/content/lab-notes";

export function LabNoteCard({ note }: { note: LabNote }) {
  return (
    <article className="group flex min-h-[320px] flex-col rounded-sm border border-hairline bg-surface p-6 transition-colors md:p-8 duration-200 hover:bg-surface-2">
      <div className="flex items-center justify-between gap-4">
        <MonoLabel>{note.date}</MonoLabel>
        <MonoLabel accent>{note.category}</MonoLabel>
      </div>
      <h3 className="mt-6 font-display text-[22px] uppercase leading-[1.1] tracking-[0.02em] text-ink">
        {note.headline}
      </h3>
      <p className="mt-4 line-clamp-3 text-[15px] leading-[1.6] text-body">{note.preview}</p>
      {/* TODO: Route this card to /lab-notes/[slug] in v2. */}
      <Link
        href="/lab-notes"
        className="mt-auto inline-flex pt-8 font-mono text-[13px] uppercase tracking-[0.05em] text-ink"
      >
        <span className="transition-transform duration-200 group-hover:translate-x-1">READ ENTRY →</span>
      </Link>
    </article>
  );
}

export function LabNotes() {
  return (
    <section id="lab-notes" className="py-[64px] md:py-[96px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        <SectionDivider label={copy.labNotes.sectionLabel} />
        <div className="-mx-6 mt-16 flex snap-x gap-4 overflow-x-auto px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {labNotes.map((note) => (
            <div key={note.slug} className="w-[80vw] shrink-0 snap-start md:w-auto">
              <LabNoteCard note={note} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
