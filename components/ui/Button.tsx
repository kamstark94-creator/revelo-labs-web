"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  forwardRef,
  useEffect,
  useState,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-brand bg-brand text-bg shadow-[inset_0_1px_0_rgba(244,242,238,0.35)] hover:bg-brand-dim hover:border-brand-dim",
  secondary:
    "border border-hairline bg-surface text-ink shadow-[inset_0_1px_0_rgba(244,242,238,0.04)] hover:border-sage hover:bg-surface-2",
  ghost: "text-ink underline-offset-4 hover:text-brand hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[12px]",
  md: "px-5 py-3 text-[13px]",
  lg: "px-7 py-4 text-[13px]",
};

const springTap = { type: "spring" as const, stiffness: 400, damping: 25 };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      className,
      variant = "primary",
      size = "md",
      type = "button",
      onClick,
      disabled,
    },
    ref,
  ) {
    const reduceMotion = useReducedMotion();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
    const motionEnabled = mounted && !reduceMotion;

    const classes = cn(
      "inline-flex min-h-11 min-w-11 items-center justify-center rounded-[6px] font-mono uppercase tracking-[0.05em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-50",
      !motionEnabled && "active:scale-[0.98]",
      variantClasses[variant],
      sizeClasses[size],
      className,
    );

    if (motionEnabled) {
      return (
        <motion.button
          ref={ref}
          type={type}
          className={classes}
          onClick={onClick}
          disabled={disabled}
          whileTap={{ scale: 0.97 }}
          transition={springTap}
        >
          {children}
        </motion.button>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  },
);
