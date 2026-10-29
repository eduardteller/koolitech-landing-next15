import ProductDetail from "@/components/catalog/ProductDetail";
import { getCategory, getProduct, getProducts } from "@/lib/catalog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ kategooria: string; toode: string }>;
}

// No `dynamicParams = false` here: the catalog may be empty, and an
// unknown product is a 404 either way.
export const generateStaticParams = () =>
  getProducts().map(({ category, slug }) => ({
    kategooria: category,
    toode: slug,
  }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategooria, toode } = await params;
  const product = getProduct(kategooria, toode);
  if (!product) return {};
  return { title: `${product.name} | KooliTech`, description: product.tagline };
}

export default async function ProductPage({ params }: Props) {
  const { kategooria, toode } = await params;
  const category = getCategory(kategooria);
  const product = getProduct(kategooria, toode);
  if (!category || !product) notFound();

  return <ProductDetail product={product} category={category} />;
}
