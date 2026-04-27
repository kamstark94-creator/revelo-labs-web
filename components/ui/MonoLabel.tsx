import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type MonoLabelProps = {
  children: ReactNode;
  accent?: boolean;
  className?: string;
};

export function MonoLabel({ children, accent = false, className }: MonoLabelProps) {
  return (
    <span
      className={cn(
        "font-mono text-[12px] uppercase leading-[1.4] tracking-[0.05em] md:text-[13px]",
        accent ? "text-brand" : "text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
