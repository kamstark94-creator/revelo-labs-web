// TODO: This is a placeholder editorial illustration. Will be replaced
// with real product photography. Swap path:
//   1. Add hero shot to /public/images/exp-001-hero.jpg
//   2. Add 4 detail shots to /public/images/exp-001-detail-{1..4}.jpg
//   3. Update images.hero and images.details[] in
//      content/experiments.ts with the file paths
//   4. This component checks colorway.image first and falls back to
//      the SVG if no image is provided.
//
// The SVG below stays as fallback so the site never has broken images.

import Image from "next/image";
import type { Colorway } from "@/content/experiments";
import { cn } from "@/lib/cn";

type ProductIllustrationProps = {
  colorway: Colorway;
  size?: "hero" | "product";
  imageSrc?: string | null;
  alt?: string;
};

type PhotoCallout = {
  label: string;
  className: string;
  line: { x1: number; y1: number; x2: number; y2: number };
};

const photoCallouts: PhotoCallout[] = [
  {
    label: "BONDED SEAM",
    className: "left-0 top-[7%]",
    line: { x1: 17, y1: 8, x2: 47, y2: 13 },
  },
  {
    label: "PANEL CONSTRUCTION",
    className: "left-0 top-[43%] max-w-[130px]",
    line: { x1: 24, y1: 46, x2: 48, y2: 52 },
  },
  {
    label: "ZIPPER POCKET",
    className: "right-0 top-[29%] text-right",
    line: { x1: 76, y1: 32, x2: 64, y2: 26 },
  },
  {
    label: "100% NYLON",
    className: "bottom-[7%] left-1/2 -translate-x-1/2",
    line: { x1: 51, y1: 86, x2: 51, y2: 94 },
  },
];

export function ProductIllustration({
  colorway,
  size = "product",
  imageSrc = null,
  alt = colorway.name,
}: ProductIllustrationProps) {
  const wrapperClass = cn(
    "relative mx-auto flex aspect-[2/3] w-full items-center justify-center",
    size === "hero" ? "max-w-[500px]" : "max-w-[420px]",
  );
  const resolvedImage = colorway.image ?? imageSrc;
  const imageClass = cn(
    "h-auto w-auto max-w-full object-contain md:w-full",
    size === "product"
      ? "max-h-[280px] md:max-h-none"
      : "max-h-[60vh] md:max-h-[600px]",
  );

  if (resolvedImage) {
    return (
      <div className={wrapperClass}>
        <Image
          src={resolvedImage}
          alt={
            colorway.image
              ? "Revelo Labs " + colorway.name + " — Experiment 001"
              : alt
          }
          width={400}
          height={600}
          className={imageClass}
          style={{ width: "auto", height: "auto" }}
          priority={size === "hero"}
        />
        <div className="border-brand/40 absolute right-4 top-4 border px-2 py-1 font-mono text-[11px] uppercase tracking-[0.05em] text-brand">
          LAB SAMPLE / 001
        </div>
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {photoCallouts.map((callout) => (
              <line
                key={callout.label}
                x1={callout.line.x1}
                y1={callout.line.y1}
                x2={callout.line.x2}
                y2={callout.line.y2}
                stroke="var(--brand)"
                strokeOpacity="0.5"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>
          {photoCallouts.map((callout) => (
            <span
              key={callout.label}
              className={cn(
                "absolute font-mono text-[11px] uppercase leading-[1.3] tracking-[0.05em] text-body",
                callout.className,
              )}
            >
              {callout.label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      {/* TODO: Replace with Experiment 001 hero photography */}
      <svg
        role="img"
        aria-label={alt}
        viewBox="0 0 400 600"
        className="h-auto w-full overflow-visible"
      >
        <defs>
          <filter
            id="piping-motion-blur"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="1" />
          </filter>
        </defs>
        <rect x="74" y="34" width="252" height="520" rx="4" fill="#141416" />
        <rect
          x="96"
          y="62"
          width="208"
          height="456"
          rx="4"
          fill={colorway.hex}
          stroke="#2A2A2E"
        />
        <rect x="244" y="98" width="2" height="348" fill={colorway.pipingHex} />
        <rect
          x="244"
          y="62"
          width="2"
          height="36"
          fill={colorway.pipingHex}
          filter="url(#piping-motion-blur)"
        />
        <rect
          x="244"
          y="446"
          width="2"
          height="72"
          fill={colorway.pipingHex}
          filter="url(#piping-motion-blur)"
        />
        <path d="M96 118H304" stroke="#F4F2EE" strokeOpacity="0.12" />
        <path d="M144 62v456" stroke="#F4F2EE" strokeOpacity="0.1" />
        <path d="M206 62v456" stroke="#F4F2EE" strokeOpacity="0.08" />
        <path
          d="M304 236c-34 8-52 28-58 62"
          stroke="#F4F2EE"
          strokeOpacity="0.16"
          fill="none"
        />
        <text
          x="270"
          y="496"
          fill="#F4F2EE"
          fontFamily="var(--font-mono), monospace"
          fontSize="13"
          letterSpacing="1"
        >
          /01
        </text>

        <g
          fontFamily="var(--font-mono), monospace"
          fontSize="11"
          letterSpacing="1.2"
          fill="#A8A8AC"
        >
          <text x="16" y="56">
            BONDED SEAM
          </text>
          <line
            x1="112"
            y1="52"
            x2="172"
            y2="66"
            stroke="#39FF14"
            strokeOpacity="0.5"
          />

          <text x="292" y="254">
            MOTION
          </text>
          <text x="292" y="270">
            GUSSET
          </text>
          <line
            x1="286"
            y1="258"
            x2="304"
            y2="258"
            stroke="#39FF14"
            strokeOpacity="0.5"
          />

          <text x="8" y="322">
            LAB-GREEN
          </text>
          <text x="8" y="338">
            PIPING
          </text>
          <line
            x1="92"
            y1="324"
            x2="244"
            y2="300"
            stroke="#39FF14"
            strokeOpacity="0.5"
          />

          <text x="166" y="580">
            100% NYLON
          </text>
          <line
            x1="204"
            y1="558"
            x2="204"
            y2="518"
            stroke="#39FF14"
            strokeOpacity="0.5"
          />
        </g>
      </svg>
    </div>
  );
}
