import type { LegendItem, Shot } from "@/content/ekell-guide";
import Screenshot, { MarkerBadge } from "./Screenshot";

interface Props {
  shot: Shot;
  items: LegendItem[];
}

/* A menu screenshot with numbered badges on its edge, and what each
   number is beside it. The crop is narrow, so it stays readable at the
   same size on a phone. */
const MenuLegend = ({ shot, items }: Props) => {
  return (
    <div className="mt-10 grid items-start gap-8 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-12">
      {/* right padding keeps the half of each badge outside the image */}
      <div className="mx-auto w-full max-w-[13rem] pr-3 sm:mx-0">
        <Screenshot shot={shot} sizes="208px" />
      </div>
      <ol className="flex flex-col gap-4">
        {items.map(({ n, title, text }) => (
          <li key={n} className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0">
              <MarkerBadge n={n} />
            </span>
            <span className="leading-relaxed">
              <span className="text-ink font-semibold">{title}</span>
              <span className="text-muted block text-sm">{text}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MenuLegend;
