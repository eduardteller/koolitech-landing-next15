"use client";

import { ChevronDown } from "lucide-react";
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
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {/* Reading scrollHeight from the ref during render is safe here: the
          content is static, so the measured height is stable. */}
      {/* eslint-disable-next-line react-hooks/refs */}
      {items.map((item, index) => (
        <div key={`${index}-${item.firstText}`}>
          <button
            onClick={() => toggleAccordion(index)}
            className={`flex w-full items-center justify-between gap-4 py-5 text-left font-medium transition-colors ${
              activeIndex[index] ? "text-ink" : "text-ink/75 hover:text-ink"
            }`}
            aria-expanded={activeIndex[index]}
          >
            <span>{item.firstText}</span>
            <ChevronDown
              strokeWidth={2.5}
              className={`shrink-0 text-brass transition-transform duration-300 ${
                activeIndex[index] ? "rotate-180" : ""
              }`}
            />
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
            className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
          >
            <p className="pb-6 leading-relaxed text-ink/70">
              {item.secondText}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
