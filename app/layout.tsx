import { AOSInit } from "@/components/AOSInit";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
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
      <body className={`${inter.className} `}>{children}</body>
    </html>
  );
}
