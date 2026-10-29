import Home from "@/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Kell — koolikellade süsteem",
  description:
    "E-Kell on KooliTechi nutikas süsteem koolikellade ja häirete jaoks. Halda kellasid, tunniplaane ja häireid ühest kohast ja igast seadmest.",
};

export default function EkellPage() {
  return <Home />;
}
