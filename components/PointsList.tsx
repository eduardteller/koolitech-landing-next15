import { Check } from "lucide-react";

interface Props {
  text: string[];
  tone?: "light" | "dark";
}

const PointsList = ({ text, tone = "light" }: Props) => {
  const dark = tone === "dark";
  return (
    <ul className="mt-8 flex w-full flex-col gap-4 md:self-center">
      {text.map((point, i) => (
        <li key={i + point.slice(0, 2)} className="flex items-start gap-3">
          <Check
            size={20}
            strokeWidth={2.5}
            className={`mt-1 shrink-0 ${dark ? "text-signal" : "text-brass"}`}
          />
          <span className={`leading-relaxed ${dark ? "text-chalk/75" : "text-ink/70"}`}>
            <span
              className={`font-semibold ${dark ? "text-chalk" : "text-ink"}`}
            >
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
