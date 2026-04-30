import { cn } from "@/lib/cn";

type SectionDividerProps = {
  label: string;
  className?: string;
};

export function SectionDivider({ label, className }: SectionDividerProps) {
  return (
    <div className={cn("mx-auto flex w-full items-center gap-4", className)}>
      <div className="h-px flex-1 bg-hairline" />
      <h2 className="rounded-[6px] border border-hairline bg-surface px-3 py-1.5 font-mono text-[12px] font-normal uppercase leading-[1.4] tracking-[0.05em] text-ink shadow-[inset_0_1px_0_rgba(244,242,238,0.04)] md:text-[13px]">
        {label}
      </h2>
      <div className="h-px flex-1 bg-hairline" />
    </div>
  );
}
