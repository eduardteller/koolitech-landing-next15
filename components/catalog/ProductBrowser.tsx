"use client";

import type { Product } from "@/lib/catalog";
import { Search } from "lucide-react";
import { useState } from "react";
import ProductCard from "./ProductCard";

const normalize = (text: string) => text.toLocaleLowerCase("et");

/* Product grid with search and series chips, filtered client-side.
   No AOS here: AOS only scans on load, and filtering re-renders the cards. */
const ProductBrowser = ({ products }: { products: Product[] }) => {
  const [query, setQuery] = useState("");
  const [series, setSeries] = useState<string | null>(null);

  const seriesList = [
    ...new Set(products.flatMap((p) => (p.series ? [p.series] : []))),
  ];
  const q = normalize(query.trim());
  const shown = products.filter(
    (p) =>
      (!series || p.series === series) &&
      (!q ||
        [p.name, p.sku, p.series, p.size, p.tagline].some(
          (field) => field && normalize(field).includes(q),
        )),
  );

  const chip = (active: boolean) =>
    `rounded-full border px-3.5 py-1 text-sm font-semibold transition ${
      active
        ? "border-primary-line bg-primary-tint text-accent"
        : "border-line bg-ground text-muted hover:text-ink"
    }`;

  return (
    <div>
      <div className="relative">
        <Search
          size={18}
          strokeWidth={2}
          className="text-muted pointer-events-none absolute top-1/2 left-4 -translate-y-1/2"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Otsi tooteid"
          placeholder="Otsi nime, tootekoodi või seeria järgi…"
          className="border-line bg-surface text-ink placeholder:text-muted focus:border-primary focus:ring-primary-line w-full rounded-lg border py-3 pr-4 pl-11 outline-none transition focus:ring-2"
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {seriesList.length > 1 && (
          <div role="group" aria-label="Seeria" className="flex flex-wrap gap-2">
            <button
              type="button"
              aria-pressed={series === null}
              onClick={() => setSeries(null)}
              className={chip(series === null)}
            >
              Kõik
            </button>
            {seriesList.map((name) => (
              <button
                key={name}
                type="button"
                aria-pressed={series === name}
                onClick={() => setSeries(name)}
                className={chip(series === name)}
              >
                {name}
              </button>
            ))}
          </div>
        )}
        <p className="text-muted ml-auto text-sm tabular-nums" aria-live="polite">
          {shown.length} {shown.length === 1 ? "toode" : "toodet"}
        </p>
      </div>

      {shown.length > 0 ? (
        <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {shown.map((product) => (
            <li key={`${product.category}/${product.slug}`}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="border-line text-muted mt-6 rounded-xl border border-dashed p-10 text-center">
          Otsingule vastavaid tooteid ei leitud.
        </p>
      )}
    </div>
  );
};

export default ProductBrowser;
