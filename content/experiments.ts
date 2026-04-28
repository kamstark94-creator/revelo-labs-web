export type Colorway = {
  sku: string;
  code: string;
  name: string;
  hex: string;
  pipingHex: string;
  description: string;
  image?: string;
};

export type Experiment = {
  id: string;
  number: string;
  slug: string;
  name: string;
  fullLabel: string;
  status: "available" | "in-development" | "sold-out";
  releasedAt: string;
  price: number;
  currency: "USD";
  description: string;
  colorways: Colorway[];
  specs: {
    protocol: string;
    fabric: string;
    fit: string;
    panels: number;
    piping: string;
    care: string;
    origin: string;
    weight: string;
  };
  fit: {
    rise: string;
    inseam: string;
    stretch: string;
    modelHeight: string;
    modelWears: string;
    sizeGuide: string;
  };
  images: { hero: string | null; details: (string | null)[] };
};

export const experiments: Experiment[] = [
  {
    id: "001",
    number: "001",
    slug: "experiment-001",
    name: "CATALYST",
    fullLabel: "EXPERIMENT 001 — CATALYST",
    status: "available",
    releasedAt: "2026-04-01",
    price: 148, // PLACEHOLDER — final pricing pending
    currency: "USD",
    description:
      "The first garment out of the lab. Seven engineered panels, lab-green piping, 100% nylon.",
    colorways: [
      {
        sku: "REV-001-LVT",
        code: "LVT",
        name: "Lab Violet",
        hex: "#5B2C7A",
        pipingHex: "#F4F2EE",
        description: "WHITE PANEL COLORWAY",
        image: "/images/lab-violet.png",
      },
      {
        sku: "REV-001-LBK",
        code: "BLK",
        name: "Lab Black",
        hex: "#0A0A0B",
        pipingHex: "#39FF14",
        description: "THE FOUNDATION COLORWAY",
      },
      {
        sku: "REV-001-SBL",
        code: "BLU",
        name: "Signal Blue",
        hex: "#1E5BFF",
        pipingHex: "#39FF14",
        description: "HIGH-CONTRAST PIPING STUDY",
      },
      {
        sku: "REV-001-BNE",
        code: "BNE",
        name: "Bone",
        hex: "#E8E2D5",
        pipingHex: "#39FF14",
        description: "INVERTED LAB PALETTE",
      },
      {
        sku: "REV-001-EMB",
        code: "RED",
        name: "Ember Red",
        hex: "#C9342A",
        pipingHex: "#39FF14",
        description: "WARM-LIGHT MATERIAL TEST",
      },
    ],
    specs: {
      protocol: "REV-001",
      fabric: "100% NYLON",
      fit: "TAPERED",
      panels: 7,
      piping: "LAB-GREEN",
      care: "COLD WASH / HANG DRY", // PLACEHOLDER — confirm with manufacturer
      origin: "[PENDING]", // PLACEHOLDER — confirm at production
      weight: "320G", // PLACEHOLDER — measure final sample
    },
    fit: {
      rise: "[PENDING]",
      inseam: "[PENDING]",
      stretch: "NONE",
      modelHeight: "[PENDING]",
      modelWears: "[PENDING]",
      sizeGuide: "XS / S / M / L / XL",
    },
    images: { hero: null, details: [null, null, null, null] },
  },
];
