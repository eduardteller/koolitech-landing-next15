import { Check } from "lucide-react";

interface Props {
  text: string[];
}

const PointsList = ({ text }: Props) => {
  return (
    <ul className="mt-8 flex w-full flex-col gap-4 md:self-center">
      {text.map((point, i) => {
        // "Label: text" renders the label in bold; a point without a
        // colon is just the bold label.
        const [label, ...rest] = point.split(":");
        return (
          <li key={i + point.slice(0, 2)} className="flex items-start gap-3">
            <Check
              size={20}
              strokeWidth={2.5}
              className="mt-1 shrink-0 text-accent"
            />
            <span className="leading-relaxed text-muted">
              <span className="font-semibold text-ink">{label}</span>
              {rest.length > 0 && `: ${rest.join(" ")}`}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default PointsList;
