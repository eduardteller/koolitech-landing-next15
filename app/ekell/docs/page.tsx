import EkellDocs from "@/components/EkellDocs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Kell dokumentatsioon",
  description:
    "E-Kella juhendid paigalduse, veebiliidese, häiresüsteemi ja seadistamise kohta.",
};

export default function EkellDocsPage() {
  return <EkellDocs />;
}
