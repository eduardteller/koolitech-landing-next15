import { categories } from "@/content/categories";
import type { Product } from "@/lib/catalog";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Rendered inside the client-side ProductBrowser, so it imports only the
// category list (for the fallback icon), never the product data.
const ProductCard = ({ product }: { product: Product }) => {
  const { Icon } = categories.find((c) => c.slug === product.category)!;
  const badge = [product.series, product.size].filter(Boolean).join(" · ");

  return (
    <Link
      href={`/tooted/${product.category}/${product.slug}`}
      className="group border-line bg-ground hover:border-primary-line flex h-full flex-col rounded-xl border p-5 shadow-sm transition"
    >
      {/* Manufacturer photos are shot on white, so their tile is white in
          both themes; the icon fallback keeps the surface colour. */}
      <div
        className={`${product.image ? "bg-white" : "bg-surface"} relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg`}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1280px) 20rem, (min-width: 640px) 45vw, 90vw"
            className="object-contain p-4"
          />
        ) : (
          <span className="bg-primary-tint flex h-16 w-16 items-center justify-center rounded-xl">
            <Icon
              size={30}
              strokeWidth={1.75}
              className="text-accent"
              aria-hidden="true"
            />
          </span>
        )}
      </div>

      {badge && (
        <span className="border-primary-line text-accent mt-5 self-start rounded-full border px-3 py-0.5 text-xs font-semibold">
          {badge}
        </span>
      )}
      <h3 className="text-ink mt-3 text-lg leading-snug font-semibold">
        {product.name}
      </h3>
      <p className="text-muted mt-1 text-sm leading-relaxed">
        {product.tagline}
      </p>

      <ul className="mt-4 mb-5 flex flex-col gap-2 text-sm">
        {product.highlights.slice(0, 3).map((highlight) => (
          <li key={highlight} className="flex items-start gap-2">
            <Check
              size={16}
              strokeWidth={2.5}
              className="text-accent mt-0.5 shrink-0"
              aria-hidden="true"
            />
            <span className="text-muted">{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="border-line mt-auto flex items-center justify-between border-t pt-4 text-sm font-semibold">
        <span className="text-accent">Küsi hinda</span>
        <span className="text-muted group-hover:text-ink transition">
          Vaata lähemalt →
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
