import EkellDocs from "@/components/EkellDocs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Kell dokumentatsioon",
  description:
    "E-Kella juhendid ja dokumentatsioon — paigaldus, veebiklient, häiresüsteem ja seadistamine.",
};

export default function EkellDocsPage() {
  return <EkellDocs />;
}
