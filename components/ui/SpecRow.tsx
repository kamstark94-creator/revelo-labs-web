type SpecRowProps = {
  label: string;
  value: string;
};

export function SpecRow({ label, value }: SpecRowProps) {
  return (
    <div>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
