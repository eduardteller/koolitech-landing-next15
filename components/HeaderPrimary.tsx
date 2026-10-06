"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import AnnouncementBar, { ANNOUNCEMENT_BAR_HEIGHT } from "./AnnouncementBar";
import Logo from "./Logo";

const subscribe = (onChange: () => void) => {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
};

interface Props {
  /** Show the announcement bar above the nav (landing page only). */
  announcement?: boolean;
}

const HeaderPrimary = ({ announcement = false }: Props) => {
  // Transparent over the top of the page; frosted once content scrolls
  // under it. With the announcement bar, that is once the bar has
  // scrolled away and the header is pinned.
  const threshold = announcement ? ANNOUNCEMENT_BAR_HEIGHT : 8;
  const scrolled = useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false,
  );

  return (
    <>
      {announcement && <AnnouncementBar />}
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
          scrolled
            ? "border-line bg-ground/85 backdrop-blur-sm"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 sm:px-8">
          <Link href="/" aria-label="KooliTech avaleht">
            <Logo />
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/ekell"
              className="hidden text-sm font-semibold text-muted transition hover:text-ink md:block"
            >
              E-Kell
            </Link>
            <a
              href="/contact"
              className="hidden text-sm font-semibold text-muted transition hover:text-ink md:block"
            >
              Kontakt
            </a>
            {/* Secondary style: the page's own CTA is the one filled button
                on screen, and this header is on every screen. */}
            <a
              href="https://dashboard.koolitech.ee"
              className="rounded-lg border border-ink px-4 py-2 text-sm font-semibold text-ink transition hover:bg-primary-tint"
            >
              E-Kell Web
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderPrimary;
