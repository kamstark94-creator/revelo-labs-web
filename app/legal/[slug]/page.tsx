import { notFound } from "next/navigation";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/sections/Nav";

const legalPages = {
  privacy: "PRIVACY POLICY",
  terms: "TERMS POLICY",
} as const;

type LegalSlug = keyof typeof legalPages;

type LegalPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

function isLegalSlug(slug: string): slug is LegalSlug {
  return slug in legalPages;
}

export default function LegalPage({ params }: LegalPageProps) {
  if (!isLegalSlug(params.slug)) {
    notFound();
  }

  const topic = params.slug.replaceAll("-", " ");

  return (
    <>
      <Nav />
      <main className="py-[64px] md:py-[120px]">
        <div className="mx-auto max-w-[680px] px-6 md:px-0">
          <h1 className="font-display text-[56px] uppercase leading-[0.95] tracking-[0.02em] text-ink md:text-[80px]">
            {legalPages[params.slug]}
          </h1>
          <p className="mt-8 text-[18px] leading-[1.7] text-body">
            This policy is in development. Email hello@revelolabs.com for questions about {topic}.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
