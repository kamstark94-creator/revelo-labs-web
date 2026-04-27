import type { ReactNode } from "react";

type MonoLabelProps = {
  children: ReactNode;
  accent?: boolean;
  className?: string;
};

export function MonoLabel({ children }: MonoLabelProps) {
  return <span>{children}</span>;
}
