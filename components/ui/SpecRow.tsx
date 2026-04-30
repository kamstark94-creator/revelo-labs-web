type SpecRowProps = {
  label: string;
  value: string;
};

export function SpecRow({ label, value }: SpecRowProps) {
  return (
    <div className="border-hairline/70 flex min-h-10 items-center gap-3 border-b py-2 font-mono text-[12px] leading-[1.4] last:border-b-0 md:text-[13px]">
      <span className="shrink-0 uppercase tracking-[0.05em] text-muted">
        {label}
      </span>
      <span className="border-hairline/80 mb-1 h-px flex-1 border-b border-dotted" />
      <span
        className={`shrink-0 uppercase tracking-[0.05em] ${value === "[PENDING]" ? "italic text-muted" : "text-ink"}`}
      >
        {value}
      </span>
    </div>
  );
}
