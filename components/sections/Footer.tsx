import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { MotionReveal, MotionRevealItem } from "@/components/ui/MotionReveal";
import { copy } from "@/content/copy";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <MotionReveal
        mode="view"
        once
        viewportMargin="-50px"
        className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 lg:px-16"
      >
        <MotionRevealItem>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
            <div className="md:col-span-2 lg:col-span-1">
              <Link
                href="/"
                aria-label="Revelo Labs home"
                className="inline-flex"
              >
                <Logo variant="full" />
              </Link>
              <p className="mt-6 font-mono text-[13px] uppercase tracking-[0.05em] text-muted">
                {copy.footer.tagline}
              </p>
            </div>

            {copy.footer.columns.map((column) => (
              <div key={column.heading}>
                <h3 className="font-mono text-[13px] uppercase tracking-[0.05em] text-muted">
                  {column.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-11 items-center text-ink transition-colors hover:text-brand active:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </MotionRevealItem>

        <MotionRevealItem>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 text-center md:flex-row md:items-center md:text-left">
            <p className="font-mono text-[12px] uppercase tracking-[0.05em] text-muted">
              {copy.footer.copyright}
            </p>
            <p className="font-mono text-[12px] uppercase tracking-[0.05em] text-brand">
              EXPERIMENT_001
            </p>
          </div>
        </MotionRevealItem>
      </MotionReveal>
    </footer>
  );
}
