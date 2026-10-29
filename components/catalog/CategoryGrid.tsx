import { categories, type CategorySlug } from "@/content/categories";
import { getProducts } from "@/lib/catalog";
import Link from "next/link";

interface Props {
  /** Subset to show, in this order; all categories by default. */
  slugs?: CategorySlug[];
  /** Grid columns; the catalog column is narrower than a full page. */
  className?: string;
}

const CategoryGrid = ({
  slugs,
  className = "sm:grid-cols-2 lg:grid-cols-3",
}: Props) => {
  const shown = slugs
    ? slugs.map((slug) => categories.find((c) => c.slug === slug)!)
    : categories;

  return (
    <ul className={`grid grid-cols-1 gap-6 ${className}`}>
      {shown.map(({ slug, title, description, Icon }, i) => {
        const count = getProducts(slug).length;
        return (
          <li
            key={slug}
            data-aos="fade-up"
            data-aos-offset="120"
            data-aos-delay={100 + (i % 3) * 75}
          >
            <Link
              href={`/tooted/${slug}`}
              className="group border-line bg-ground hover:border-primary-line flex h-full items-start gap-4 rounded-xl border p-6 transition"
            >
              <span className="bg-primary-tint flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                <Icon
                  size={24}
                  strokeWidth={1.75}
                  className="text-accent"
                  aria-hidden="true"
                />
              </span>
              <div className="flex h-full flex-col">
                <h3 className="text-ink text-lg leading-snug font-semibold">
                  {title}
                </h3>
                <p className="text-muted mt-1 leading-relaxed">
                  {description}
                </p>
                <span className="text-muted group-hover:text-ink mt-auto pt-3 text-sm font-semibold transition">
                  {count > 0
                    ? `${count} ${count === 1 ? "toode" : "toodet"} →`
                    : "Vaata lähemalt →"}
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryGrid;
