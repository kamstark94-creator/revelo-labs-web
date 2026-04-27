"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { copy } from "@/content/copy";
import { useCartStore } from "@/lib/store";
import { cn } from "@/lib/cn";

const linkBase = "font-mono text-[13px] uppercase tracking-[0.05em] text-ink transition-colors hover:text-brand";

export function Nav() {
  const pathname = usePathname();
  const count = useCartStore((state) => state.count);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 32);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-200",
        scrolled ? "border-b border-hairline bg-bg/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        <Link href="/" aria-label="Revelo Labs home">
          <Logo variant="full" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {copy.nav.links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(linkBase, active && "text-brand underline underline-offset-4")}
              >
                {link.label}
              </Link>
            );
          })}
          <span className={linkBase}>[{copy.nav.cartLabel} / {count}]</span>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-brand md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 top-[80px] z-40 h-[calc(100vh-80px)] bg-bg px-6 py-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="flex flex-col gap-7"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {copy.nav.links.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "font-display text-[48px] uppercase leading-[0.95] tracking-[0.02em] text-ink",
                      pathname === link.href && "text-brand underline underline-offset-8",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.p
                className="mt-6 font-mono text-[13px] uppercase tracking-[0.05em] text-brand"
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              >
                [{copy.nav.cartLabel} / {count}]
              </motion.p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
