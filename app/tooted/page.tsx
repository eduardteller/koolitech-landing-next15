import CatalogShell from "@/components/catalog/CatalogShell";
import CategoryGrid from "@/components/catalog/CategoryGrid";
import ProductBrowser from "@/components/catalog/ProductBrowser";
import { getProducts } from "@/lib/catalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tootevalik — KooliTech",
  description:
    "Interaktiivsed ekraanid, helitehnika, võrguseadmed, laadimiskärud ja muu koolitehnika koos paigalduse ja toega.",
};

export default function ProductsPage() {
  const products = getProducts();

  return (
    <CatalogShell
      title="Koolitehnika klassist koolihoovini"
      lead="Valime koolile sobivad seadmed, paneme komplekti kokku ning paigaldame ja seadistame selle kohapeal."
    >
      <h2 className="sr-only">Kategooriad</h2>
      <CategoryGrid className="sm:grid-cols-2 xl:grid-cols-3" />

      {products.length > 0 && (
        <section aria-labelledby="all-products-title" className="mt-20">
          <h2
            id="all-products-title"
            className="text-ink mb-8 text-3xl leading-tight font-semibold tracking-tight"
          >
            Kõik tooted
          </h2>
          <ProductBrowser products={products} />
        </section>
      )}
    </CatalogShell>
  );
}
