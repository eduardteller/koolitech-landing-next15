import Home from "@/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Kell — koolikellade süsteem",
  description:
    "E-Kell on KooliTechi nutikas koolikellade ja häiresüsteemide lahendus. Halda kellasid, tunniplaane ja häireid ühest kohast, igast seadmest.",
};

export default function EkellPage() {
  return <Home />;
}
