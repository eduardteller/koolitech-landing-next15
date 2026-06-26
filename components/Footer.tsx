const Footer = () => {
  return (
    <footer className="bg-ink text-chalk">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 px-6 pb-16 pt-20 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="font-display text-xl font-black uppercase tracking-tight">
            kooli<span className="text-brass">tech</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-chalk/65">
            KooliTech OÜ on spetsialiseerunud koolidele suunatud tarkvara
            lahenduste pakkumisele. Meie teenuste hulka kuuluvad tarkvara
            lahendused, tehnika müük ja rent ning tehnika paigaldusteenused.
          </p>
        </div>
        <div>
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
            Toode
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-chalk/70">
            <li>
              <a href="/ekell" className="transition hover:text-chalk">
                E-Kell
              </a>
            </li>
            <li>
              <a href="/ekell/docs" className="transition hover:text-chalk">
                Dokumentatsioon
              </a>
            </li>
            <li>
              <a
                href="https://dashboard.koolitech.ee"
                className="transition hover:text-chalk"
              >
                E-Kell Web
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
            Klienditugi
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-chalk/70">
            <li>
              <a
                id="btn-contact-2"
                href="/contact"
                className="transition hover:text-chalk"
              >
                Kontakt
              </a>
            </li>
            <li>
              <a href="/cookies" className="transition hover:text-chalk">
                Küpsiste kasutamine
              </a>
            </li>
            <li>
              <a href="/terms" className="transition hover:text-chalk">
                Müügi- ja kasutustingimused
              </a>
            </li>
            <li>
              <a href="/privacy" className="transition hover:text-chalk">
                Privaatsustingimused
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-chalk/10">
        <div className="mx-auto max-w-screen-xl px-6 py-6 sm:px-8">
          <p className="text-xs text-chalk/50">
            Copyright © {new Date().getFullYear()} KooliTech OÜ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
