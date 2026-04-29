import type { Metadata } from "next";
import { body, display, mono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://revelo-labs-web.vercel.app"),
  title: "Revelo Labs",
  description: "Experiment-led athletic apparel from Revelo Labs.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Revelo Labs — Experiment 001",
    description: "We don't release products. We release experiments.",
    url: "https://revelo-labs-web.vercel.app",
    siteName: "Revelo Labs",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Revelo Labs — Engineered to stand out.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revelo Labs — Experiment 001",
    description: "We don't release products. We release experiments.",
    images: ["/images/og-image.png"],
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
