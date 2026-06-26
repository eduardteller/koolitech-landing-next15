"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderPrimary = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "border-b border-ink/10 bg-chalk/85 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl font-black uppercase tracking-tight text-ink"
        >
          kooli<span className="text-brass">tech</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/ekell"
            className="hidden font-medium text-ink/70 transition hover:text-ink md:block"
          >
            E-Kell
          </Link>
          <a
            href="/contact"
            className="hidden font-medium text-ink/70 transition hover:text-ink md:block"
          >
            Kontakt
          </a>
          <a
            href="https://dashboard.koolitech.ee"
            className="rounded-lg bg-brass px-4 py-2 text-sm font-semibold text-ink transition hover:bg-brass/85"
          >
            E-Kell Web
          </a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderPrimary;
