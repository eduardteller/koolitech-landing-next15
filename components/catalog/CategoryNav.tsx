import type { CategorySlug } from "@/content/categories";
import { getCategories } from "@/lib/catalog";
import Link from "next/link";

interface Props {
  /** Current category; omitted on the catalog index ("Kõik tooted"). */
  active?: CategorySlug;
}

const items = [
  { href: "/tooted", title: "Kõik tooted", slug: undefined },
  ...getCategories().map(({ slug, title }) => ({
    href: `/tooted/${slug}`,
    title,
    slug,
  })),
];

/* Category switcher: a sticky sidebar card on desktop, a scrolling pill
   row on smaller screens. Every category is its own route. */
const CategoryNav = ({ active }: Props) => {
  return (
    <div className="min-w-0">
      <nav
        aria-label="Tootekategooriad"
        className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:hidden [&::-webkit-scrollbar]:hidden"
      >
        {items.map(({ href, title, slug }) => {
          const current = slug === active;
          return (
            <Link
              key={href}
              href={href}
              aria-current={current ? "page" : undefined}
              className={`shrink-0 rounded-full border px-3.5 py-1 text-sm font-semibold whitespace-nowrap transition ${
                current
                  ? "border-primary-line bg-primary-tint text-accent"
                  : "border-line bg-ground text-muted hover:text-ink"
              }`}
            >
              {title}
            </Link>
          );
        })}
      </nav>

      <nav
        aria-label="Tootekategooriad"
        className="border-line bg-surface sticky top-24 hidden rounded-xl border p-3 lg:block"
      >
        <p className="text-muted px-3 pt-1 pb-2 text-xs font-semibold tracking-widest uppercase">
          Kategooriad
        </p>
        <ul className="flex flex-col gap-0.5">
          {items.map(({ href, title, slug }) => {
            const current = slug === active;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={current ? "page" : undefined}
                  className={`block rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    current
                      ? "bg-primary-tint text-accent"
                      : "text-muted hover:bg-ground hover:text-ink"
                  }`}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default CategoryNav;
