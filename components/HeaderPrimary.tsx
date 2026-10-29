"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import AnnouncementBar, { ANNOUNCEMENT_BAR_HEIGHT } from "./AnnouncementBar";
import Logo from "./Logo";

const subscribe = (onChange: () => void) => {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
};

const navLinks = [
  { href: "/ekell", label: "E-Kell" },
  { href: "/tooted", label: "Tooted" },
  { href: "/koolidele", label: "Koolidele" },
  { href: "/contact", label: "Kontakt" },
];

// A section link stays active on its subpages (/ekell/docs, /tooted/lisad).
const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

interface Props {
  /** Show the announcement bar above the nav (landing page only). */
  announcement?: boolean;
}

const HeaderPrimary = ({ announcement = false }: Props) => {
  const pathname = usePathname();

  // Transparent over the top of the page; frosted once content scrolls
  // under it. With the announcement bar, that is once the bar has
  // scrolled away and the header is pinned.
  const threshold = announcement ? ANNOUNCEMENT_BAR_HEIGHT : 8;
  const scrolled = useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false,
  );

  // The mobile menu remembers the page it was opened on, so navigating
  // anywhere closes it without an effect.
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const menuOpen = openedAt === pathname;
  const closeMenu = () => setOpenedAt(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenedAt(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      {announcement && <AnnouncementBar />}
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
          menuOpen
            ? "border-line bg-ground"
            : scrolled
              ? "border-line bg-ground/85 backdrop-blur-sm"
              : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 sm:px-8">
          <Link href="/" aria-label="KooliTech avaleht">
            <Logo />
          </Link>

          <nav aria-label="Peamenüü" className="flex items-center gap-6">
            {navLinks.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`hidden text-sm font-semibold transition hover:text-ink md:block ${
                    active ? "text-ink" : "text-muted"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            {/* Secondary style: the page's own CTA is the one filled button
                on screen, and this header is on every screen. */}
            <a
              href="https://dashboard.koolitech.ee"
              className="rounded-lg border border-ink px-4 py-2 text-sm font-semibold text-ink transition hover:bg-primary-tint"
            >
              E-Kell Web
            </a>
            <button
              type="button"
              aria-label="Menüü"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setOpenedAt(menuOpen ? null : pathname)}
              className="-mr-2 -ml-2 flex h-10 w-10 items-center justify-center rounded-lg text-ink transition hover:bg-surface md:hidden"
            >
              {menuOpen ? (
                <X size={22} strokeWidth={2} aria-hidden="true" />
              ) : (
                <Menu size={22} strokeWidth={2} aria-hidden="true" />
              )}
            </button>
          </nav>
        </div>

        <nav
          id="mobile-menu"
          aria-label="Peamenüü"
          hidden={!menuOpen}
          className="border-t border-line md:hidden"
        >
          <ul className="mx-auto flex max-w-screen-xl flex-col px-6 py-3 sm:px-8">
            {navLinks.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3 text-base font-semibold transition hover:text-ink ${
                      active ? "text-ink" : "text-muted"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderPrimary;
