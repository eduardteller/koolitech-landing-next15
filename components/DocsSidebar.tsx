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
        <p className="mb-4 pl-4 text-xs font-semibold uppercase tracking-widest text-kicker">
          Dokumentatsioon
        </p>
        <nav>
          <ul className="border-l border-line">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm transition ${
                    activeId === s.id
                      ? "border-primary font-semibold text-ink"
                      : "border-transparent text-muted hover:border-primary-line hover:text-ink"
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
          className="flex w-full items-center justify-between rounded-lg border border-line bg-surface px-4 py-3 text-sm font-semibold text-ink"
        >
          <span>Sisukord</span>
          <span
            className={`text-accent transition-transform ${mobileOpen ? "rotate-180" : ""}`}
            aria-hidden
          >
            ▾
          </span>
        </button>
        {mobileOpen && (
          <ul className="mt-2 overflow-hidden rounded-lg border border-line bg-surface">
            {sections.map((s) => (
              <li key={s.id} className="border-b border-line last:border-b-0">
                <a
                  href={`#${s.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 text-sm transition ${
                    activeId === s.id
                      ? "font-semibold text-accent"
                      : "text-muted hover:text-ink"
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
