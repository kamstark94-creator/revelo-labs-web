import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand text-bg hover:bg-brand-dim",
  secondary: "border border-hairline text-ink hover:border-ink",
  ghost: "text-ink underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[12px]",
  md: "px-5 py-3 text-[13px]",
  lg: "px-7 py-4 text-[13px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { children, className, variant = "primary", size = "md", type = "button", ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm font-mono uppercase tracking-[0.05em] transition-colors duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
