import type { Metadata } from "next";
import { body, display, mono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revelo Labs",
  description: "Experiment-led athletic apparel from Revelo Labs.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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
      <body className="font-body">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-full rounded-sm bg-brand px-4 py-2 font-mono text-[13px] uppercase tracking-[0.05em] text-bg transition-transform focus:translate-y-0"
        >
          SKIP TO CONTENT
        </a>
        {children}
      </body>
    </html>
  );
}
