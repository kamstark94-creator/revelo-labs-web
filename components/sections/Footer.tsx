import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { copy } from "@/content/copy";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="full" />
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
                    <Link href={link.href} className="text-ink transition-colors hover:text-brand">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-hairline pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.05em] text-muted">
            {copy.footer.copyright}
          </p>
          <p className="font-mono text-[12px] uppercase tracking-[0.05em] text-brand">
            EXPERIMENT_001
          </p>
        </div>
      </div>
    </footer>
  );
}
