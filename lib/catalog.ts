import {
  categories,
  type Category,
  type CategorySlug,
} from "@/content/categories";
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

// Hidden categories are switched off everywhere: no nav entry or page,
// and their products are left out of every list.
const shownCategories = categories.filter(
  (category: Category) => !category.hidden,
);
const shownProducts = products.filter((product) =>
  shownCategories.some((category) => category.slug === product.category),
);

export const getCategory = (slug: string) =>
  shownCategories.find((category) => category.slug === slug);

const hasProducts = (slug: CategorySlug) =>
  shownProducts.some((product) => product.category === slug);

/** Categories with products first, then the empty ones; each group keeps
    the content/categories.ts order (sort is stable). */
export const getCategories = () =>
  [...shownCategories].sort(
    (a, b) => Number(hasProducts(b.slug)) - Number(hasProducts(a.slug)),
  );

// Explicit order first, then alphabetical. Unordered products sort last
// (Infinity - Infinity is NaN, which falls through to the name compare).
const byOrder = (a: Product, b: Product) =>
  (a.order ?? Infinity) - (b.order ?? Infinity) ||
  a.name.localeCompare(b.name, "et");

export const getProducts = (category?: CategorySlug) =>
  shownProducts
    .filter((product) => !category || product.category === category)
    .sort(byOrder);

export const getProduct = (category: string, slug: string) =>
  shownProducts.find(
    (product) => product.category === category && product.slug === slug,
  );

export const getRelated = (product: Product, count = 3) =>
  getProducts(product.category)
    .filter((other) => other.slug !== product.slug)
    .slice(0, count);

/** Contact form link that prefills the message (see app/contact/page.tsx). */
export const quoteHref = (subject: string, key: "toode" | "teema" = "toode") =>
  `/contact?${key}=${encodeURIComponent(subject)}`;
