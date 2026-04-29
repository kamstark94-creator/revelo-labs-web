import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { copy } from "@/content/copy";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <h1 className="font-display text-[56px] uppercase leading-[0.95] tracking-[0.02em] text-ink md:text-[96px]">
          {copy.notFound.headline}
        </h1>
        <p className="mt-6 font-mono text-[13px] uppercase tracking-[0.05em] text-muted">
          {copy.notFound.caption}
        </p>
        <Link href="/" className="mt-10 inline-flex">
          <Button variant="primary" size="lg">{copy.notFound.cta}</Button>
        </Link>
      </div>
    </main>
  );
}
