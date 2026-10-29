import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 px-6 pb-16 pt-20 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            KooliTech OÜ pakub koolidele tarkvara ja tehnikat. Arendame
            koolikellade süsteemi E-Kell ning müüme, paigaldame ja hooldame
            koolitehnikat.
          </p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">
            E-Kell
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <Link href="/ekell" className="transition hover:text-ink">
                E-Kell
              </Link>
            </li>
            <li>
              <Link
                href="/ekell/laadi-alla"
                className="transition hover:text-ink"
              >
                Laadi alla
              </Link>
            </li>
            <li>
              <Link href="/ekell/docs" className="transition hover:text-ink">
                Dokumentatsioon
              </Link>
            </li>
            <li>
              <a
                href="https://dashboard.koolitech.ee"
                className="transition hover:text-ink"
              >
                E-Kell Web
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">
            Tooted
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <Link href="/tooted" className="transition hover:text-ink">
                Tootevalik
              </Link>
            </li>
            <li>
              <Link
                href="/tooted/interaktiivsed-ekraanid"
                className="transition hover:text-ink"
              >
                Interaktiivsed ekraanid
              </Link>
            </li>
            <li>
              <Link
                href="/tooted/audiolahendused"
                className="transition hover:text-ink"
              >
                Audiolahendused
              </Link>
            </li>
            <li>
              <Link
                href="/tooted/vorguseadmed"
                className="transition hover:text-ink"
              >
                Võrguseadmed
              </Link>
            </li>
            <li>
              <Link href="/koolidele" className="transition hover:text-ink">
                Koolidele
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">
            Klienditugi
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <Link
                id="btn-contact-2"
                href="/contact"
                className="transition hover:text-ink"
              >
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="transition hover:text-ink">
                Küpsiste kasutamine
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-ink">
                Kasutustingimused
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="transition hover:text-ink">
                Privaatsuspoliitika
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">
            Ettevõte
          </h3>
          <dl className="mt-4 space-y-2.5 text-sm text-muted">
            <div>
              <dt className="sr-only">Ärinimi</dt>
              <dd className="text-ink">KooliTech OÜ</dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt>Registrikood</dt>
              <dd className="text-ink tabular-nums">17111270</dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt>KMKR number</dt>
              <dd className="text-ink tabular-nums">EE103009649</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-screen-xl px-6 py-6 sm:px-8">
          <p className="text-xs text-muted">
            Copyright © {new Date().getFullYear()} KooliTech OÜ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
