import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Item {
  firstText: string;
  secondText: string;
}

interface Props {
  items: Item[];
}

const Accordion = ({ items }: Props) => {
  const [activeIndex, setActiveIndex] = useState<boolean[]>(
    new Array(items.length).fill(false),
  );

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, items.length);
  }, [items.length]);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) =>
      prev.map((item, i) => (i === index ? !item : false)),
    );
  };

  return (
    <>
      {items.map((item, index) => (
        <div
          key={index + item.firstText.length + item.secondText.length}
          className={`w-full ${activeIndex[index] ? "text-slate-900" : "text-slate-900/80"} `}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="flex w-full items-center justify-between border-t p-4 text-left"
          >
            <span>{item.firstText}</span>
            <span className="transition-transform duration-300">
              {activeIndex[index] ? (
                <ChevronUp strokeWidth={2.5} />
              ) : (
                <ChevronDown strokeWidth={2.5} />
              )}
            </span>
          </button>
          <div
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
            style={{
              maxHeight: activeIndex[index]
                ? contentRefs.current[index]?.scrollHeight
                : 0,
            }}
            className="transition-max-height prose prose-sm max-w-none overflow-hidden leading-loose duration-300 ease-in-out"
          >
            <div className="bg-slate-200/50 px-8 py-4">{item.secondText}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
