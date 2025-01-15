import Link from "next/link";

const HeaderSecondary = () => {
  return (
    <header
      className="top-0 z-50 border-b bg-white transition duration-100 md:sticky"
      id="header"
    >
      <div className="mx-auto flex max-w-screen-xl flex-row items-center justify-between px-6 py-4 sm:px-8">
        <div className="flex flex-row items-center justify-start">
          <Link
            href="/"
            id="header-lbl"
            className="text-xl font-black uppercase text-slate-900"
          >
            kooli
            <span className="text-slate-900/60 duration-200 hover:text-slate-900">
              tech
            </span>
          </Link>
        </div>

        <div className="flex flex-row items-center justify-start">
          <a
            href="/contact"
            id="btn-contact"
            className="mr-8 hidden font-semibold text-slate-900 transition duration-200 hover:text-opacity-50 md:block"
          >
            Kontakt
          </a>

          <Link
            href="https://dashboard.koolitech.ee"
            className="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition duration-200 hover:bg-opacity-50"
            id="header-btn"
          >
            E-Kell Web
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderSecondary;
