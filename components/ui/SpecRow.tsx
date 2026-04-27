type SpecRowProps = {
  label: string;
  value: string;
};

export function SpecRow({ label, value }: SpecRowProps) {
  return (
    <div className="flex min-h-9 items-center gap-3 py-2 font-mono text-[13px] leading-[1.4]">
      <span className="shrink-0 uppercase tracking-[0.05em] text-muted">{label}</span>
      <span className="mb-1 h-px flex-1 border-b border-dotted border-hairline" />
      <span className={`shrink-0 uppercase tracking-[0.05em] ${value === "[PENDING]" ? "text-muted italic" : "text-ink"}`}>{value}</span>
    </div>
  );
}
