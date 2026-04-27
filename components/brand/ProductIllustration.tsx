import type { Colorway } from "@/content/experiments";

type ProductIllustrationProps = {
  colorway: Colorway;
  size?: "hero" | "product";
};

export function ProductIllustration({
  colorway,
}: ProductIllustrationProps) {
  return (
    <>
      {/* TODO: Replace with Experiment 001 hero photography */}
      <div style={{ color: colorway.pipingHex }}>{colorway.name}</div>
    </>
  );
}
