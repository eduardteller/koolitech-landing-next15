import { categories, type CategorySlug } from "@/content/categories";
import { products } from "@/content/products";

export type Product = {
  slug: string;
  name: string;
  sku?: string;
  category: CategorySlug;
  /** Series or sub-type ("Value", "Kinnitused"): the card badge and filter chip. */
  series?: string;
  size?: string;
  /** One line on the card. */
  tagline: string;
  /** Paragraph on the product page. */
  description?: string;
  highlights: string[];
  specs?: { label: string; value: string; note?: string }[];
  /** Path under public/, e.g. /assets/products/x.png */
  image?: string;
  order?: number;
};

export const getCategory = (slug: string) =>
  categories.find((category) => category.slug === slug);

// Explicit order first, then alphabetical. Unordered products sort last
// (Infinity - Infinity is NaN, which falls through to the name compare).
const byOrder = (a: Product, b: Product) =>
  (a.order ?? Infinity) - (b.order ?? Infinity) ||
  a.name.localeCompare(b.name, "et");

export const getProducts = (category?: CategorySlug) =>
  products
    .filter((product) => !category || product.category === category)
    .sort(byOrder);

export const getProduct = (category: string, slug: string) =>
  products.find(
    (product) => product.category === category && product.slug === slug,
  );

export const getRelated = (product: Product, count = 3) =>
  getProducts(product.category)
    .filter((other) => other.slug !== product.slug)
    .slice(0, count);

/** Contact form link that prefills the message (see app/contact/page.tsx). */
export const quoteHref = (subject: string, key: "toode" | "teema" = "toode") =>
  `/contact?${key}=${encodeURIComponent(subject)}`;
