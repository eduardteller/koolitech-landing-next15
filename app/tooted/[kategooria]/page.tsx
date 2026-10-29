import CatalogShell from "@/components/catalog/CatalogShell";
import EmptyCategory from "@/components/catalog/EmptyCategory";
import ProductBrowser from "@/components/catalog/ProductBrowser";
import { categories } from "@/content/categories";
import { getCategory, getProducts } from "@/lib/catalog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ kategooria: string }>;
}

// Only the known categories exist; anything else is a 404.
export const dynamicParams = false;

export const generateStaticParams = () =>
  categories.map(({ slug }) => ({ kategooria: slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).kategooria);
  if (!category) return {};
  return {
    title: `${category.title} — KooliTech tootevalik`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const category = getCategory((await params).kategooria);
  if (!category) notFound();

  const products = getProducts(category.slug);

  return (
    <CatalogShell
      title={category.title}
      lead={category.description}
      active={category.slug}
    >
      {products.length > 0 ? (
        <ProductBrowser products={products} />
      ) : (
        <EmptyCategory category={category} />
      )}
    </CatalogShell>
  );
}
