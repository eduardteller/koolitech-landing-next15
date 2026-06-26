import Company from "@/components/Company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KooliTech — Tarkvara ja tehnika koolidele",
  description:
    "KooliTech on Eesti IT-ettevõte, mis varustab koole tarkvara, tehnika ja paigaldusteenustega. Meie lipulaev on koolikellade süsteem E-Kell.",
};

export default function Landing() {
  return <Company />;
}
