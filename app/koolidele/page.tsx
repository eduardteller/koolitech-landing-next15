import Koolidele from "@/components/Koolidele";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koolidele — tarkvara, tehnika ja paigaldus",
  description:
    "KooliTech kaardistab kooli vajadused, pakub sobiva lahenduse, paigaldab ja koolitab ning jääb toeks. Koolikellade süsteem E-Kell, ekraanid, helitehnika ja võrguseadmed ühest kohast.",
};

export default function KoolidelePage() {
  return <Koolidele />;
}
