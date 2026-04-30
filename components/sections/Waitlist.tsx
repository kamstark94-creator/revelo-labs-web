"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { MotionReveal, MotionRevealItem } from "@/components/ui/MotionReveal";
import { copy } from "@/content/copy";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleWaitlist(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!emailPattern.test(email)) {
      setError("ENTER A VALID EMAIL.");
      return;
    }

    // TODO: POST email to ConvertKit / Resend / Beehiiv endpoint
    console.log("WAITLIST_SIGNUP", { email });
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="px-3 py-[56px] md:px-6 md:py-[88px]">
      <MotionReveal
        mode="view"
        once
        viewportMargin="-100px"
        className="mx-auto max-w-[1280px] rounded-[8px] border border-hairline bg-[linear-gradient(180deg,rgba(21,27,21,0.92),rgba(7,8,7,0.88))] px-5 py-10 text-center shadow-[inset_0_1px_0_rgba(244,242,238,0.04)] md:px-12 md:py-14 lg:px-16"
      >
        <MotionRevealItem>
          <div className="md:hidden">
            <MonoLabel accent>{copy.waitlist.kicker}</MonoLabel>
          </div>
          <h2 className="mx-auto mt-8 max-w-[300px] whitespace-pre-line font-display text-[44px] uppercase leading-[0.95] tracking-[0.02em] text-ink md:max-w-[980px] md:text-[64px] lg:text-[80px]">
            {copy.waitlist.headline}
          </h2>
        </MotionRevealItem>

        <MotionRevealItem>
          <p className="mx-auto mt-8 font-mono text-[13px] uppercase tracking-[0.05em] text-brand">
            {copy.waitlist.valueProps}
          </p>
        </MotionRevealItem>

        <MotionRevealItem>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.p
                key="success"
                className="mx-auto mt-10 max-w-[560px] rounded-[8px] border border-hairline bg-surface px-4 py-4 font-mono text-[13px] uppercase tracking-[0.05em] text-brand"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {copy.waitlist.success}
              </motion.p>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleWaitlist}
                className="mx-auto mt-8 flex max-w-[620px] flex-col justify-center gap-3 md:flex-row"
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={copy.waitlist.placeholder}
                  aria-label="Email address"
                  className="min-h-12 flex-1 rounded-[6px] border border-hairline bg-surface px-4 py-3 font-mono text-[16px] text-ink outline-none transition-colors placeholder:text-muted focus:border-brand md:max-w-[400px] md:text-[14px]"
                />
                <Button type="submit" variant="primary" size="lg">
                  {copy.waitlist.cta}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>

          {error ? (
            <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.05em] text-brand">
              {error}
            </p>
          ) : null}
          <MonoLabel className="mt-4 block">{copy.waitlist.privacy}</MonoLabel>
        </MotionRevealItem>
      </MotionReveal>
    </section>
  );
}
