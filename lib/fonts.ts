import { Anton, Inter, JetBrains_Mono } from "next/font/google";

export const display = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

export const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});
