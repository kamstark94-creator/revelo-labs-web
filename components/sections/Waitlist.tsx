"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
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
    <section id="waitlist" className="py-[160px] md:py-[140px]">
      <div className="mx-auto max-w-[1280px] px-6 text-center md:px-12 lg:px-16">
        <div className="md:hidden">
          <MonoLabel accent>{copy.waitlist.kicker}</MonoLabel>
        </div>
        <h2 className="mx-auto mt-8 max-w-[300px] whitespace-pre-line md:max-w-[980px] font-display text-[44px] uppercase leading-[0.95] tracking-[0.02em] text-ink md:text-[64px] lg:text-[80px]">
          {copy.waitlist.headline}
        </h2>

        <p className="mx-auto mt-8 font-mono text-[13px] uppercase tracking-[0.05em] text-brand">
          {copy.waitlist.valueProps}
        </p>

        {submitted ? (
          <p className="mx-auto mt-10 max-w-[560px] border border-hairline bg-surface px-4 py-4 font-mono text-[13px] uppercase tracking-[0.05em] text-brand">
            {copy.waitlist.success}
          </p>
        ) : (
          <form onSubmit={handleWaitlist} className="mx-auto mt-8 flex max-w-[620px] flex-col justify-center gap-3 md:flex-row">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={copy.waitlist.placeholder}
              aria-label="Email address"
              className="min-h-12 flex-1 border border-hairline bg-surface px-4 py-3 font-mono text-[16px] text-ink md:text-[14px] outline-none transition-colors placeholder:text-muted focus:border-brand md:max-w-[400px]"
            />
            <Button type="submit" variant="primary" size="lg">
              {copy.waitlist.cta}
            </Button>
          </form>
        )}

        {error ? (
          <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.05em] text-brand">{error}</p>
        ) : null}
        <MonoLabel className="mt-4 block">{copy.waitlist.privacy}</MonoLabel>
      </div>
    </section>
  );
}
