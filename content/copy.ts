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
    privacy: "NO SPAM. NO SALE ALERTS. LAB UPDATES ONLY.",
    success: "ON THE LIST. EXPERIMENT_002 INCOMING.",
  },
  about: {
    headline: "BUILT LIKE A FIELD NOTE. WORN LIKE A SIGNAL.",
    paragraphs: [
      "Revelo Labs exists for the space between performance gear and public documentation. Every release starts as a question: what should a garment prove before it deserves to exist?",
      "Experiment 001 is our first answer. It is not a seasonal drop or a logo exercise. It is a record of material choices, prototype failures, construction logic, and motion tests made visible in the finished piece.",
      "We build athletic apparel with an editorial spine: fewer products, clearer reasons, sharper details. If a panel does not improve movement, it goes. If a color does not explain construction, it waits. The lab is the method and the method is the brand.",
    ],
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
        heading: "SUPPORT",
        links: [
          { label: "Sizing", href: "#" },
          { label: "Returns", href: "#" },
          { label: "Contact", href: "#" },
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
