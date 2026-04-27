type LogoProps = {
  variant?: "full" | "icon-only";
  className?: string;
};

export function Logo({ variant = "full" }: LogoProps) {
  return <div>{variant === "full" ? "REVELO LABS" : "RL"}</div>;
}
