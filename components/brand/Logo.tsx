import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "full" | "icon-only";
  className?: string;
};

function TestTubeIcon({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      role="img"
      aria-label="Revelo Labs"
      viewBox="0 0 64 64"
      className={cn(compact ? "h-9 w-9" : "h-10 w-10")}
    >
      <g transform="translate(32 32) rotate(12) translate(-32 -32)">
        <rect
          x="22"
          y="10"
          width="20"
          height="42"
          rx="4"
          fill="none"
          stroke="#F4F2EE"
          strokeWidth="3"
        />
        <path d="M25 32h14v16a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4V32Z" fill="#39FF14" />
        <circle cx="29" cy="21" r="2.4" fill="#39FF14" />
        <circle cx="36" cy="26" r="1.8" fill="#39FF14" />
        <line x1="20" y1="10" x2="44" y2="10" stroke="#F4F2EE" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function Logo({ variant = "full", className }: LogoProps) {
  if (variant === "icon-only") {
    return (
      <span className={cn("inline-flex", className)}>
        <TestTubeIcon compact />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-3 text-ink", className)}>
      <TestTubeIcon />
      <svg
        role="img"
        aria-label="Revelo Labs"
        viewBox="0 0 164 58"
        className="h-11 w-[124px] md:w-[140px]"
      >
        <text
          x="0"
          y="34"
          fill="#F4F2EE"
          fontFamily="var(--font-display), sans-serif"
          fontSize="36"
          letterSpacing="1.5"
        >
          REVELO
        </text>
        <line x1="0" y1="48" x2="52" y2="48" stroke="#39FF14" strokeOpacity="0.75" />
        <text
          x="62"
          y="52"
          fill="#F4F2EE"
          fontFamily="var(--font-mono), monospace"
          fontSize="11"
          letterSpacing="2"
        >
          LABS
        </text>
        <line x1="98" y1="48" x2="164" y2="48" stroke="#39FF14" strokeOpacity="0.75" />
      </svg>
    </span>
  );
}
