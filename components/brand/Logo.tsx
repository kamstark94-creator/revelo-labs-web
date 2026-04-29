import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "full" | "icon-only";
  className?: string;
};

export function Logo({ variant = "full", className }: LogoProps) {
  if (variant === "icon-only") {
    return (
      <Image
        src="/images/revelo-icon.png"
        alt="Revelo Labs"
        width={64}
        height={64}
        className={cn("h-6 w-auto md:h-8", className)}
      />
    );
  }

  return (
    <Image
      src="/images/revelo-logo1-full.png"
      alt="Revelo Labs"
      width={640}
      height={160}
      priority
      className={cn("h-10 w-auto", className)}
    />
  );
}
