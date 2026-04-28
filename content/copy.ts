export const copy = {
  nav: {
    links: [
      { label: "EXPERIMENTS", href: "/experiments/001" },
      { label: "LAB NOTES", href: "/lab-notes" },
      { label: "ABOUT", href: "/about" },
    ],
    cartLabel: "LAB",
  },
  hero: {
    kicker: "EXPERIMENT 001 / LAUNCHED 04.2026 / 4 COLORWAYS",
    headline: "ENGINEERED TO STAND OUT.",
    sub: "We don't release products. We release experiments. Experiment 001 is the first garment out of the lab — documented, iterated, and worn.",
    ctaPrimary: { label: "ENTER THE LAB", href: "/experiments/001" },
    ctaSecondary: { label: "READ THE SPEC SHEET", href: "#spec" },
    marquee:
      "EXPERIMENT 001 // PROTOTYPE 014 // 100% NYLON // MADE IN MOTION // LAB-GREEN PIPING // 7 PANELS //",
  },
  method: {
    sectionLabel: "THE METHOD",
    blocks: [
      {
        kicker: "01 / METHOD",
        headline: "THE PROCESS\nIS THE PRODUCT",
        body: "Concept. Prototype. Test. Refine. Release. Improve. Every garment is documented. Every iteration is public.",
      },
      {
        kicker: "02 / MATERIAL",
        headline: "NOTHING ADDED\nWITHOUT FUNCTION",
        body: "100% nylon shell. Bonded panels. Engineered for movement, not static photography.",
      },
      {
        kicker: "03 / MOTION",
        headline: "COLOR FOLLOWS\nCONSTRUCTION",
        body: "Panels follow the body. Color follows the panels. Nothing is decorative.",
      },
    ],
  },
  product: {
    sectionLabel: "THE PRODUCT",
    colorwaysHeading: "ALL COLORWAYS",
    specHeading: "SPEC SHEET / EXP-001",
    specEndLine: "···· END OF SPECIFICATION ····",
    addToLabLabel: "ADD TO LAB",
  },
  labNotes: {
    sectionLabel: "LAB NOTES / 001",
  },
  waitlist: {
    kicker: "EXPERIMENT 002 / IN DEVELOPMENT",
    headline: "THE NEXT EXPERIMENT\nDROPS IN MOTION.",
    placeholder: "your@email.com",
    cta: "GET LAB ACCESS",
    valueProps: "EARLY ACCESS / PROTOTYPE NOTES / LIMITED RELEASE WINDOWS",
    privacy: "NO SPAM. NO SALE ALERTS. LAB UPDATES ONLY.",
    success: "ON THE LIST. EXPERIMENT 002 INCOMING.",
  },
  about: {
    headline: "BUILT LIKE A FIELD NOTE. WORN LIKE A SIGNAL.",
    intro: [
      "Revelo Labs exists for the space between performance gear and public documentation. Every release starts as a question: what should a garment prove before it deserves to exist?",
      "Experiment 001 is our first answer. It is not a seasonal drop or a logo exercise. It is a record of material choices, prototype failures, construction logic, and motion tests made visible in the finished piece.",
    ],
    sections: [
      {
        label: "THE METHOD",
        body: "Concept. Prototype. Test. Refine. Release. Improve. Experiment 001 went through fourteen prototypes before release. Each iteration is logged. Each rejected version is documented. The process is the product.",
      },
      {
        label: "WHAT WE ARE NOT",
        body: "We are not a uniform. We are not a sale rack. We are not a logo exercise. We do not chase volume. We do not run discount cycles. We do not staff a roster of athletes paid to wear our clothes. The lab does not need ambassadors. The clothes speak when they move.",
      },
      {
        label: "WHO IT'S FOR",
        body: "For the ones who refuse to blend in. Confident, expressive, intentional — in motion.",
      },
    ],
    closing: "BUILT IN THE LAB. ENGINEERED TO STAND OUT.",
    cta: { label: "READ EXPERIMENT 001", href: "/experiments/001" },
  },
  notFound: {
    headline: "404 / NOT IN THE LAB",
    caption: "This experiment doesn't exist yet.",
    cta: "BACK TO HOME",
  },
  footer: {
    tagline: "Engineered to stand out.",
    columns: [
      {
        heading: "LAB",
        links: [
          { label: "Experiments", href: "/experiments/001" },
          { label: "Lab Notes", href: "/lab-notes" },
          { label: "About", href: "/about" },
        ],
      },
      {
        heading: "SHOP",
        links: [
          { label: "Sizing", href: "/support/sizing" },
          { label: "Shipping", href: "/support/shipping" },
          { label: "Returns", href: "/support/returns" },
          { label: "Contact", href: "/support/contact" },
        ],
      },
      {
        heading: "LEGAL",
        links: [
          { label: "Privacy", href: "/legal/privacy" },
          { label: "Terms", href: "/legal/terms" },
        ],
      },
      {
        heading: "FOLLOW",
        links: [
          { label: "Instagram", href: "https://instagram.com" },
          { label: "TikTok", href: "https://tiktok.com" },
        ],
      },
    ],
    copyright: "© 2026 REVELO LABS / ENGINEERED TO STAND OUT",
  },
} as const;
