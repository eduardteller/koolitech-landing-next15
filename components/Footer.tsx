const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-start justify-between border-t px-8 pb-8 pt-24 text-slate-800">
      <div className="container mx-auto flex max-w-screen-xl flex-row items-start justify-start pb-32">
        <div className="w-1/2">
          <h3 className="mb-4 font-medium">Klienditugi</h3>
          <ul className="text-sm text-slate-800/80">
            <li className="duration-100 hover:text-slate-800">
              <a id="btn-contact-2" href="/contact">
                Kontakt
              </a>
            </li>
            <li className="duration-100 hover:text-slate-800">
              <a id="cookies-btn" href="/cookies">
                Küpsiste kasutamine
              </a>
            </li>
            <li className="duration-100 hover:text-slate-800">
              <a id="cookies-btn" href="/terms">
                Müügi- ja kasutustingimused
              </a>
            </li>
            <li className="duration-100 hover:text-slate-800">
              <a id="cookies-btn" href="/privacy">
                Privaatsustingimused
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <h3 className="mb-4 font-medium">KooliTech</h3>
          <p className="prose prose-sm text-slate-800/80">
            KooliTech OÜ on spetsialiseerunud koolidele suunatud tarkvara
            lahenduste pakkumisele. Meie teenuste hulka kuuluvad tarkvara
            lahendused, tehnika müük ja rent ning tehnika paigaldusteenused
          </p>
        </div>
      </div>
      <div className="container mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4">
        <p className="text-sm text-slate-800/80">
          Copyright © 2025 KooliTech OÜ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
