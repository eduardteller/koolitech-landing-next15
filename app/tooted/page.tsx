import CatalogShell from "@/components/catalog/CatalogShell";
import ProductBrowser from "@/components/catalog/ProductBrowser";
import { getProducts } from "@/lib/catalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tootevalik | KooliTech",
  description:
    "Interaktiivsed ekraanid, helitehnika, võrguseadmed, interkomid ja muu koolitehnika koos paigalduse ja toega.",
};

export default function ProductsPage() {
  const products = getProducts();

  return (
    <CatalogShell
      title="Koolitehnika klassist koolihoovini"
      lead="Valime koolile sobivad seadmed, paneme komplekti kokku ning paigaldame ja seadistame selle kohapeal."
    >
      <h2 className="sr-only">Kõik tooted</h2>
      <ProductBrowser products={products} />
    </CatalogShell>
  );
}
