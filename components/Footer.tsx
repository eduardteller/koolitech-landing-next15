import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 px-6 pb-16 pt-20 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            KooliTech OÜ on spetsialiseerunud koolidele suunatud tarkvara
            lahenduste pakkumisele. Meie teenuste hulka kuuluvad tarkvara
            lahendused, tehnika müük ning tehnika paigaldusteenused.
          </p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">
            Toode
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <a href="/ekell" className="transition hover:text-ink">
                E-Kell
              </a>
            </li>
            <li>
              <a href="/ekell/docs" className="transition hover:text-ink">
                Dokumentatsioon
              </a>
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
            Klienditugi
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <a
                id="btn-contact-2"
                href="/contact"
                className="transition hover:text-ink"
              >
                Kontakt
              </a>
            </li>
            <li>
              <a href="/cookies" className="transition hover:text-ink">
                Küpsiste kasutamine
              </a>
            </li>
            <li>
              <a href="/terms" className="transition hover:text-ink">
                Müügi- ja kasutustingimused
              </a>
            </li>
            <li>
              <a href="/privacy" className="transition hover:text-ink">
                Privaatsustingimused
              </a>
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
