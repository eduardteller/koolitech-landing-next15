import Koolidele from "@/components/Koolidele";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koolidele — tarkvara, tehnika ja paigaldus",
  description:
    "KooliTech kaardistab kooli vajadused, pakub sobiva lahenduse, paigaldab ja koolitab ning jääb toeks: E-Kell koolikellad, ekraanid, helitehnika ja võrguseadmed.",
};

export default function KoolidelePage() {
  return <Koolidele />;
}
