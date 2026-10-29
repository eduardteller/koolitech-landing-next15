import EkellDownload from "@/components/EkellDownload";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laadi alla E-Kell | KooliTech",
  description:
    "Laadi alla E-Kella töölauarakendus Windowsile ja paigalda see kooli arvutisse paari minutiga.",
};

// Re-render every ten minutes, so a new release shows up on its own.
export const revalidate = 600;

export default function EkellDownloadPage() {
  return <EkellDownload />;
}
