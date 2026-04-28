export type Colorway = {
  sku: string;
  name: string;
  hex: string;
  pipingHex: string;
  description: string;
  image?: string;
};

export type Experiment = {
  id: string;
  slug: string;
  name: string;
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
  prototypeCount: number;
  images: { hero: string | null; details: (string | null)[] };
};

export const experiments: Experiment[] = [
  {
    id: "001",
    slug: "experiment-001",
    name: "Experiment 001 / The Jogger",
    status: "available",
    releasedAt: "2026-04-01",
    price: 148, // PLACEHOLDER — final pricing pending
    currency: "USD",
    description:
      "The first garment out of the lab. Seven engineered panels, lab-green piping, 100% nylon.",
    colorways: [
      {
        sku: "REV-001-LVT",
        name: "Lab Violet",
        hex: "#5B2C7A",
        pipingHex: "#F4F2EE",
        description: "PANEL CONSTRUCTION STUDY",
        image: "/images/prototype-011.png",
      },
      {
        sku: "REV-001-LBK",
        name: "Lab Black",
        hex: "#0A0A0B",
        pipingHex: "#39FF14",
        description: "THE FOUNDATION COLORWAY",
      },
      {
        sku: "REV-001-SBL",
        name: "Signal Blue",
        hex: "#1E5BFF",
        pipingHex: "#39FF14",
        description: "HIGH-CONTRAST PIPING STUDY",
      },
      {
        sku: "REV-001-BNE",
        name: "Bone",
        hex: "#E8E2D5",
        pipingHex: "#39FF14",
        description: "INVERTED LAB PALETTE",
      },
      {
        sku: "REV-001-EMB",
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
    prototypeCount: 14,
    images: { hero: null, details: [null, null, null, null] },
  },
];
