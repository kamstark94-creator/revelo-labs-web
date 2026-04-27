# Revelo Labs — Placeholder Tracker

Every value in this list is a placeholder in the v1 build. Replace each
one with finalized data before public launch.

## Brand assets
- [ ] Logo — official version replaces inline SVG in
      `components/brand/Logo.tsx`
- [ ] Favicon — replace `/public/favicon.ico` with brand mark
- [ ] OG share image — add `/public/og-image.png` (1200x630)
      and reference in `app/layout.tsx` metadata

## Product (Experiment 001)
- [ ] Hero photography — replaces `ProductIllustration` in hero
- [ ] 4 detail shots for product detail page
- [ ] Final price (currently $148 — placeholder)
- [ ] Final weight (currently 320G — placeholder)
- [ ] Country of origin (currently TBD)
- [ ] Care instructions (currently "COLD WASH / HANG DRY" — confirm)

## Lab Notes
- [ ] Full body content for each entry (currently preview-only)
- [ ] Lab Notes detail route `/lab-notes/[slug]` (deferred to v2)

## Integrations (all stubbed in v1)
- [ ] Email capture — wire `handleWaitlist()` in `Waitlist.tsx`
      to ConvertKit / Resend / Beehiiv
- [ ] Cart / checkout — wire `handleAddToLab()` in `Product.tsx`
      to Stripe Payment Links / Lemon Squeezy / Shopify Buy SDK
- [ ] Analytics — install Vercel Analytics or Plausible
- [ ] Instagram and TikTok URLs — currently point to root domains,
      update in `content/copy.ts` footer columns

## Page content
- [ ] About page long-form copy (verify it landed correctly)
- [ ] Support pages — Sizing, Returns, Contact (currently stub links)
