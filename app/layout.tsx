import { AOSInit } from "@/components/AOSInit";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  variable: "--font-inter",
});

// Wordmark only (components/Logo.tsx).
const logo = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: "800",
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "KooliTech",
  description:
    "KooliTech on Eesti IT-ettevõte, mis pakub tarkvara tooteid koolidele.",
  keywords: [
    "KooliTech",
    "Eesti IT-ettevõte",
    "koolitarkvara",
    "tarkvaralahendused koolidele",
    "haridustehnoloogia",
    "õppetarkvara",
    "IT-lahendused koolidele",
    "e-õppe platvormid",
    "digitaalne haridus",
    "koolijuhtimise tarkvara",
  ],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et" className={`${inter.variable} ${logo.variable}`}>
      <AOSInit />
      <body className="bg-surface font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
