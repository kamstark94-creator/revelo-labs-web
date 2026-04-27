import type { Metadata } from "next";
import { body, display, mono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revelo Labs",
  description: "Experiment-led athletic apparel from Revelo Labs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="font-body">{children}</body>
    </html>
  );
}
