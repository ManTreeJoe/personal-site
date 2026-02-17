import type { Metadata } from "next";
import { playfair, inter, jetbrainsMono } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GrainOverlay from "@/components/layout/GrainOverlay";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nathan Bupte — Developer / Videographer / Photographer",
  description:
    "Portfolio of Nathan Bupte — full-stack developer, videographer, and photographer based in California.",
  keywords: [
    "Nathan Bupte",
    "developer",
    "videographer",
    "photographer",
    "portfolio",
    "full-stack",
    "Next.js",
  ],
  openGraph: {
    title: "Nathan Bupte — Developer / Videographer / Photographer",
    description:
      "Full-stack developer, videographer, and photographer based in California.",
    type: "website",
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
      className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg-primary text-text-primary font-[family-name:var(--font-inter)] antialiased">
        <GrainOverlay />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
