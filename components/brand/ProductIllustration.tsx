import Image from "next/image";
import type { Colorway } from "@/content/experiments";
import { cn } from "@/lib/cn";

type ProductIllustrationProps = {
  colorway: Colorway;
  size?: "hero" | "product";
  imageSrc?: string | null;
  alt?: string;
};

export function ProductIllustration({
  colorway,
  size = "product",
  imageSrc = null,
  alt = colorway.name,
}: ProductIllustrationProps) {
  const wrapperClass = cn(
    "relative mx-auto w-full",
    size === "hero" ? "max-w-[500px]" : "max-w-[420px]",
  );

  if (imageSrc) {
    return (
      <div className={wrapperClass}>
        <Image
          src={imageSrc}
          alt={alt}
          width={800}
          height={1200}
          className="h-auto w-full rounded-sm object-cover"
          priority={size === "hero"}
        />
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
        className={cn(
          "h-auto w-full overflow-visible",
          size === "hero" ? "min-h-[520px]" : "min-h-[460px]",
        )}
      >
        <defs>
          <filter id="piping-motion-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" />
          </filter>
        </defs>
        <rect x="74" y="34" width="252" height="520" rx="4" fill="#141416" />
        <rect x="96" y="62" width="208" height="456" rx="4" fill={colorway.hex} stroke="#2A2A2E" />
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
        <path d="M304 236c-34 8-52 28-58 62" stroke="#F4F2EE" strokeOpacity="0.16" fill="none" />
        <text x="270" y="496" fill="#F4F2EE" fontFamily="var(--font-mono), monospace" fontSize="13" letterSpacing="1">
          /01
        </text>

        <g fontFamily="var(--font-mono), monospace" fontSize="11" letterSpacing="1.2" fill="#A8A8AC">
          <text x="16" y="56">BONDED SEAM</text>
          <line x1="112" y1="52" x2="172" y2="66" stroke="#39FF14" strokeOpacity="0.5" />

          <text x="292" y="254">MOTION</text>
          <text x="292" y="270">GUSSET</text>
          <line x1="286" y1="258" x2="304" y2="258" stroke="#39FF14" strokeOpacity="0.5" />

          <text x="8" y="322">LAB-GREEN</text>
          <text x="8" y="338">PIPING</text>
          <line x1="92" y1="324" x2="244" y2="300" stroke="#39FF14" strokeOpacity="0.5" />

          <text x="166" y="580">100% NYLON</text>
          <line x1="204" y1="558" x2="204" y2="518" stroke="#39FF14" strokeOpacity="0.5" />
        </g>
      </svg>
    </div>
  );
}
