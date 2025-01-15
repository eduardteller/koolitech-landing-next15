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
    "KooliTech on Eesti IT-ettevõte, mis pakub veebiarendusteenuseid.",
  keywords: [
    "koolitech",
    "kool",
    "tech",
    "eesti it-ettevõte",
    "tarkvara",
    "arendus",
    "kell",
  ],
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
