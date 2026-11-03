import EkellGuide from "@/components/EkellGuide";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kuidas E-Kella kasutada | KooliTech",
  description:
    "Samm-sammult juhend: ühenda kooli arvuti helisüsteemiga, paigalda E-Kell, sisesta litsentsivõti ja halda kellasid E-Kell Webis.",
};

export default function EkellGuidePage() {
  return <EkellGuide />;
}
