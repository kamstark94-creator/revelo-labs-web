type SectionDividerProps = {
  label: string;
};

export function SectionDivider({ label }: SectionDividerProps) {
  return <div>{label}</div>;
}
