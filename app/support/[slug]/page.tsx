import { notFound } from "next/navigation";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/sections/Nav";

const supportPages = {
  sizing: "SIZING",
  shipping: "SHIPPING POLICY",
  returns: "RETURNS POLICY",
  contact: "CONTACT",
} as const;

type SupportSlug = keyof typeof supportPages;

type SupportPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return Object.keys(supportPages).map((slug) => ({ slug }));
}

function isSupportSlug(slug: string): slug is SupportSlug {
  return slug in supportPages;
}

export default function SupportPage({ params }: SupportPageProps) {
  if (!isSupportSlug(params.slug)) {
    notFound();
  }

  const topic = params.slug.replaceAll("-", " ");

  return (
    <>
      <Nav />
      <main className="py-[64px] md:py-[120px]">
        <div className="mx-auto max-w-[680px] px-6 md:px-0">
          <h1 className="font-display text-[56px] uppercase leading-[0.95] tracking-[0.02em] text-ink md:text-[80px]">
            {supportPages[params.slug]}
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
