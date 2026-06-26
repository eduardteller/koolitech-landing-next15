"use client";

import { useEffect, useState } from "react";
import type { DocSection } from "@/lib/docs-toc";

interface Props {
  sections: DocSection[];
}

const DocsSidebar = ({ sections }: Props) => {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Highlight the section whose heading sits closest to the top of the
        // active band (just below the sticky header).
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
    );

    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sticky top-24 hidden max-h-[calc(100vh-7rem)] w-60 shrink-0 self-start overflow-y-auto lg:block">
        <p className="mb-4 pl-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
          Dokumentatsioon
        </p>
        <nav>
          <ul className="border-l border-ink/10">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm transition ${
                    activeId === s.id
                      ? "border-brass font-medium text-ink"
                      : "border-transparent text-ink/55 hover:border-ink/25 hover:text-ink"
                  }`}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile menu */}
      <div className="mb-8 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          className="flex w-full items-center justify-between rounded-xl border border-ink/10 bg-white px-4 py-3 font-mono text-sm font-medium text-ink"
        >
          <span>Sisukord</span>
          <span
            className={`text-brass transition-transform ${mobileOpen ? "rotate-180" : ""}`}
            aria-hidden
          >
            ▾
          </span>
        </button>
        {mobileOpen && (
          <ul className="mt-2 overflow-hidden rounded-xl border border-ink/10 bg-white">
            {sections.map((s) => (
              <li key={s.id} className="border-b border-ink/5 last:border-b-0">
                <a
                  href={`#${s.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 text-sm transition ${
                    activeId === s.id
                      ? "font-medium text-brass"
                      : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default DocsSidebar;
