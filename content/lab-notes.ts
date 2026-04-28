export type LabNote = {
  slug: string;
  date: string;
  category: "MATERIAL" | "PROCESS" | "DESIGN";
  headline: string;
  preview: string;
};

export const labNotes: LabNote[] = [
  {
    slug: "why-we-rejected-polyester",
    date: "03.14.2026",
    category: "MATERIAL",
    headline: "WHY WE REJECTED POLYESTER",
    preview:
      "Polyester moves with you. Nylon moves for you. We ran 11 material trials before the distinction became clear in wear data.",
  },
  {
    slug: "panel-that-didnt-work",
    date: "02.27.2026",
    category: "PROCESS",
    headline: "THE PANEL THAT DIDN'T WORK",
    preview:
      "An early panel layout added visual mass without adding function. We cut it. The silhouette improved immediately.",
  },
  {
    slug: "green-as-structural-element",
    date: "04.02.2026",
    category: "DESIGN",
    headline: "GREEN AS A STRUCTURAL ELEMENT",
    preview:
      "Lab green isn't a marketing choice. It follows the seam, traces the stress point, maps the construction architecture.",
  },
];
