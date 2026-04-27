import { cn } from "@/lib/cn";

type SectionDividerProps = {
  label: string;
  className?: string;
};

export function SectionDivider({ label, className }: SectionDividerProps) {
  return (
    <div className={cn("mx-auto flex w-full items-center gap-4", className)}>
      <div className="h-px flex-1 bg-brand/50" />
      <span className="font-mono text-[13px] uppercase leading-[1.4] tracking-[0.05em] text-ink">
        {label}
      </span>
      <div className="h-px flex-1 bg-brand/50" />
    </div>
  );
}
