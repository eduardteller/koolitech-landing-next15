import { Check } from "lucide-react";

interface Props {
  text: string[];
}

const PointsList = ({ text }: Props) => {
  return (
    <ul className="mt-8 flex w-full flex-col gap-4 md:self-center">
      {text.map((point, i) => (
        <li key={i + point.slice(0, 2)} className="flex items-start gap-3">
          <Check
            size={20}
            strokeWidth={2.5}
            className="mt-1 shrink-0 text-accent"
          />
          <span className="leading-relaxed text-muted">
            <span className="font-semibold text-ink">
              {point.split(":")[0]}
            </span>
            : {point.split(":").slice(1).join(" ")}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PointsList;
