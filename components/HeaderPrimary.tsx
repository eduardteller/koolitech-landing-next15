import Link from "next/link";
import Logo from "./Logo";

const HeaderPrimary = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-card">
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
            className="rounded-lg border border-primary-line px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary-tint"
          >
            E-Kell Web
          </a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderPrimary;
