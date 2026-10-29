import type { Category } from "@/content/categories";
import { quoteHref } from "@/lib/catalog";
import Link from "next/link";

/* A category with no products yet: sell the consultation instead. */
const EmptyCategory = ({ category }: { category: Category }) => {
  const { Icon } = category;
  return (
    <div className="border-line flex flex-col items-center gap-5 rounded-xl border border-dashed px-6 py-16 text-center">
      <span className="bg-primary-tint flex h-16 w-16 items-center justify-center rounded-xl">
        <Icon
          size={30}
          strokeWidth={1.75}
          className="text-accent"
          aria-hidden="true"
        />
      </span>
      <h2 className="text-ink text-2xl leading-tight font-semibold tracking-tight">
        Tooted lisanduvad peagi
      </h2>
      <p className="text-muted max-w-md leading-relaxed">
        Selle kategooria tooteid pole veel lehel. Seni kirjuta meile ja leiame
        koolile sobiva lahenduse.
      </p>
      <Link
        href={quoteHref(category.title, "teema")}
        className="bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active mt-1 rounded-lg px-6 py-3 font-semibold transition duration-150"
      >
        Küsi pakkumist
      </Link>
    </div>
  );
};

export default EmptyCategory;
