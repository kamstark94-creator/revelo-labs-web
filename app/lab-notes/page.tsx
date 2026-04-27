import { Footer } from "@/components/sections/Footer";
import { LabNoteCard } from "@/components/sections/LabNotes";
import { Nav } from "@/components/sections/Nav";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { labNotes } from "@/content/lab-notes";

export default function LabNotesPage() {
  return (
    <>
      <Nav />
      <main className="py-[64px] md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
          <SectionDivider label="LAB NOTES" />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {labNotes.map((note) => (
              <LabNoteCard key={note.slug} note={note} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
