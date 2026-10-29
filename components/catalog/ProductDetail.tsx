import type { Category } from "@/content/categories";
import { getRelated, quoteHref, type Product } from "@/lib/catalog";
import { Check, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "../CtaBand";
import Footer from "../Footer";
import HeaderPrimary from "../HeaderPrimary";
import SpecPlate from "../SpecPlate";
import ProductCard from "./ProductCard";

interface Props {
  product: Product;
  category: Category;
}

const ProductDetail = ({ product, category }: Props) => {
  const { Icon } = category;
  const badge = [product.series, product.size].filter(Boolean).join(" · ");
  const related = getRelated(product);

  return (
    <>
      <HeaderPrimary />
      <div className="relative overflow-x-hidden">
        <main>
          <section className="ruled-paper bg-ground relative">
            <div className="relative mx-auto max-w-screen-xl px-6 pt-10 pb-24 sm:px-8">
              <nav aria-label="Leivapuru" className="text-muted text-sm">
                <ol className="flex flex-wrap items-center gap-1.5">
                  <li>
                    <Link href="/tooted" className="hover:text-ink transition">
                      Tooted
                    </Link>
                  </li>
                  <li aria-hidden="true">
                    <ChevronRight size={14} strokeWidth={2} />
                  </li>
                  <li>
                    <Link
                      href={`/tooted/${category.slug}`}
                      className="hover:text-ink transition"
                    >
                      {category.title}
                    </Link>
                  </li>
                  <li aria-hidden="true">
                    <ChevronRight size={14} strokeWidth={2} />
                  </li>
                  <li aria-current="page" className="text-ink">
                    {product.name}
                  </li>
                </ol>
              </nav>

              <div className="mt-10 grid items-start gap-12 md:grid-cols-2">
                <div className="border-line bg-surface relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border shadow-sm">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority
                      sizes="(min-width: 768px) 45vw, 90vw"
                      className="object-contain p-8"
                    />
                  ) : (
                    <span className="bg-primary-tint flex h-24 w-24 items-center justify-center rounded-xl">
                      <Icon
                        size={44}
                        strokeWidth={1.5}
                        className="text-accent"
                        aria-hidden="true"
                      />
                    </span>
                  )}
                </div>

                <div>
                  {badge && (
                    <span className="border-primary-line text-accent rounded-full border px-3 py-0.5 text-xs font-semibold">
                      {badge}
                    </span>
                  )}
                  <h1 className="text-ink mt-4 text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
                    {product.name}
                  </h1>
                  <p className="text-ink mt-5 text-lg leading-relaxed">
                    {product.tagline}
                  </p>
                  {product.description && (
                    <p className="text-muted mt-4 leading-relaxed">
                      {product.description}
                    </p>
                  )}

                  <ul className="mt-8 flex flex-col gap-3">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <Check
                          size={20}
                          strokeWidth={2.5}
                          className="text-accent mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-muted leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex flex-wrap items-center gap-5">
                    <Link
                      href={quoteHref(product.name)}
                      className="bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active rounded-lg px-6 py-3 font-semibold transition duration-150"
                    >
                      Küsi pakkumist
                    </Link>
                    <Link
                      href={`/tooted/${category.slug}`}
                      className="text-muted hover:text-ink text-sm font-semibold underline-offset-4 hover:underline"
                    >
                      Kõik: {category.title} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {product.specs && product.specs.length > 0 && (
            <section
              aria-labelledby="specs-title"
              className="bg-surface px-6 py-24 sm:px-8"
            >
              <div className="mx-auto max-w-4xl">
                <h2
                  id="specs-title"
                  className="text-ink mb-10 text-3xl leading-tight font-semibold tracking-tight md:text-4xl"
                >
                  Tehnilised andmed
                </h2>
                <SpecPlate
                  title={product.name}
                  tag={product.sku}
                  rows={product.specs}
                />
                <p className="text-muted mt-4 text-xs leading-relaxed">
                  Tootja võib spetsifikatsioone muuta. Täpne komplektsus
                  kinnitatakse pakkumises.
                </p>
              </div>
            </section>
          )}

          {related.length > 0 && (
            <section
              aria-labelledby="related-title"
              className="bg-ground px-6 py-24 sm:px-8"
            >
              <div className="mx-auto max-w-screen-xl">
                <h2
                  id="related-title"
                  className="text-ink text-3xl leading-tight font-semibold tracking-tight md:text-4xl"
                >
                  Sarnased tooted
                </h2>
                <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((other) => (
                    <li key={other.slug}>
                      <ProductCard product={other} />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <CtaBand
            kicker="Hinnapakkumine"
            title="Paneme komplekti kokku"
            text="Ekraan, kinnitus, kaablid ja paigaldus: saadame koolile ühe selge pakkumise."
            href={quoteHref(product.name)}
            label="Küsi pakkumist"
          />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
