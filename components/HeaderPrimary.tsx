"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import AnnouncementBar, { ANNOUNCEMENT_BAR_HEIGHT } from "./AnnouncementBar";
import Logo from "./Logo";

const subscribe = (onChange: () => void) => {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
};

type NavLink = {
  href: string;
  label: string;
  /** Subpages shown in a popover on hover and indented in the mobile menu. */
  children?: { href: string; label: string }[];
};

const navLinks: NavLink[] = [
  {
    href: "/ekell",
    label: "E-Kell",
    children: [
      { href: "/ekell/docs", label: "Dokumentatsioon" },
      { href: "/ekell/laadi-alla", label: "Laadi alla" },
    ],
  },
  { href: "/tooted", label: "Tooted" },
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
            {navLinks.map(({ href, label, children }) => {
              const active = isActive(pathname, href);
              const linkClass = `text-sm font-semibold transition hover:text-ink ${
                active ? "text-ink" : "text-muted"
              }`;
              if (!children) {
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`hidden md:block ${linkClass}`}
                  >
                    {label}
                  </Link>
                );
              }
              // Opens on hover, and on focus for keyboard users. The top
              // padding bridges the gap, so the pointer can travel from
              // the link to the popover without it closing.
              return (
                <div key={href} className="group relative hidden md:block">
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-1 ${linkClass}`}
                  >
                    {label}
                    <ChevronDown
                      size={14}
                      strokeWidth={2.5}
                      aria-hidden="true"
                      className="transition-transform duration-150 group-focus-within:rotate-180 group-hover:rotate-180"
                    />
                  </Link>
                  <div className="invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="border-line bg-ground min-w-44 rounded-xl border p-1.5 shadow-lg">
                      {/* The section page leads the list. It is active only
                          on itself, not on its subpages. */}
                      {[{ href, label }, ...children].map((child) => {
                        const childActive =
                          child.href === href
                            ? pathname === href
                            : isActive(pathname, child.href);
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              aria-current={childActive ? "page" : undefined}
                              className={`hover:bg-primary-tint hover:text-ink block rounded-lg px-3 py-2 text-sm font-semibold whitespace-nowrap transition ${
                                childActive ? "text-ink" : "text-muted"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
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
            {navLinks.map(({ href, label, children }) => {
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
                  {children && (
                    <ul className="border-line mb-2 border-l pl-4">
                      {children.map((child) => {
                        const childActive = isActive(pathname, child.href);
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={closeMenu}
                              aria-current={childActive ? "page" : undefined}
                              className={`hover:text-ink block py-2 text-sm font-semibold transition ${
                                childActive ? "text-ink" : "text-muted"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
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
