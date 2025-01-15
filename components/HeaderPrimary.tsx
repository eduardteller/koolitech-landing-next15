"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderPrimary = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY));

    return () => {
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
    };
  });
  return (
    <header
      className={`sticky top-0 z-[50] transition duration-200 ${scroll > 0 ? "border-b bg-white" : "bg-none"}`}
    >
      <div className="mx-auto flex max-w-screen-xl flex-row items-center justify-between px-6 py-4 sm:px-8">
        <div className="flex flex-row items-center justify-start">
          <Link
            href="/"
            className={`text-xl font-black uppercase ${scroll > 0 ? "text-slate-900" : "text-white"}`}
          >
            kooli
            <span
              className={`duration-200 ${scroll > 0 ? "text-slate-800/80 hover:text-slate-800" : "text-white/80 hover:text-white"}`}
            >
              tech
            </span>
          </Link>
        </div>

        <div className="flex flex-row items-center justify-start">
          <a
            href="/contact"
            className={`mr-8 hidden font-semibold transition duration-100 hover:text-opacity-50 md:block ${scroll > 0 ? "text-slate-800" : "text-white"}`}
          >
            Kontakt
          </a>

          <a
            href="https://dashboard.koolitech.ee"
            className={`rounded-lg px-4 py-2 text-base font-semibold transition duration-100 hover:bg-opacity-50 ${scroll > 0 ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
          >
            E-Kell Web
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderPrimary;
