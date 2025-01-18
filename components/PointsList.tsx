import { Check } from "lucide-react";

interface Props {
  text: string[];
}

const PointsList = ({ text }: Props) => {
  return (
    <ul className="mt-8 flex w-2/3 flex-col gap-4 md:self-center">
      {text.map((point, i) => (
        <li
          key={i + point.slice(0, 2)}
          className="prose prose-base flex items-start gap-2"
        >
          <Check size={24} className="mt-1 shrink-0 text-emerald-400" />
          <span className="text-slate-800/80">
            <span className="font-medium">{point.split(":")[0]}</span>:{" "}
            {point.split(":").slice(1).join(" ")}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PointsList;
