import { AOSInit } from "@/components/AOSInit";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const body = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
});

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
    <html lang="ee">
      <AOSInit />
      <body
        className={`${body.variable} ${display.variable} ${mono.variable} bg-chalk font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
