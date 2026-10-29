"use client";

import { DOWNLOAD_PATH } from "@/lib/ekell-release";
import { Check, Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SpecPlate, { type SpecRow } from "./SpecPlate";

const steps = [
  {
    title: "Laadi fail alla",
    text: "Fail salvestub arvuti kausta Allalaadimised.",
  },
  {
    title: "Käivita paigaldus",
    text: "Tee failil topeltklõps. Paigaldus käib ise ja lõpus avaneb E-Kell.",
    note: "Kui Windows näitab teadet „Windows kaitses teie arvutit“, vali Lisateave ja siis Käivita siiski.",
  },
  {
    title: "Sisesta litsentsivõti",
    text: "Sisesta KooliTechilt saadud võti. Seejärel on E-Kell töövalmis ja uuendused tulevad edaspidi ise.",
  },
];

interface Props {
  rows: SpecRow[];
  /** Installer file name, when GitHub could tell us. */
  fileName?: string;
}

/* Download page hero: the installer plate and the install steps.
   The download is a plain link to the redirect route, so the page
   stays put while the browser saves the file. Pressing it checks off
   step 1 and draws the wire down to step 2: the click worked, here is
   what comes next. */
const DownloadHero = ({ rows, fileName }: Props) => {
  const [started, setStarted] = useState(false);
  const current = started ? 1 : 0;

  return (
    <section className="ruled-paper bg-ground relative overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-6 pt-12 pb-24 sm:px-8 md:pt-20">
        {/* Phones read intro, plate, steps. From md the plate takes the
            right column next to both. */}
        <div className="grid gap-12 md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-x-16">
          <div className="md:col-start-1 md:row-start-1">
            <h1 className="text-ink text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
              {/* nowrap: phones must not break the name at its hyphen */}
              Laadi alla <span className="whitespace-nowrap">E-Kell</span>
            </h1>
            <p className="text-muted mt-6 max-w-md text-lg leading-relaxed">
              Paigalda E-Kell sellesse kooli arvutisse, mis mängib kellasid ja
              häireid. See võtab paar minutit.
            </p>
          </div>

          <div className="md:col-start-2 md:row-span-2 md:row-start-1">
            <SpecPlate
              title="E-Kell töölauarakendus"
              tag="Windows"
              rows={rows}
              reveal={false}
            >
              {/* Not next/link: the route answers with a redirect to the
                  file, not a page to prefetch. */}
              <a
                href={DOWNLOAD_PATH}
                onClick={() => setStarted(true)}
                className="bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active flex w-full items-center justify-center gap-2.5 rounded-lg px-8 py-3.5 font-semibold transition duration-150"
              >
                <Download size={20} strokeWidth={2} aria-hidden="true" />
                Laadi alla
              </a>
              {fileName && (
                <p className="text-muted mt-3 text-center text-xs break-all">
                  {fileName}
                </p>
              )}
              <p
                aria-live="polite"
                className="text-ink text-center text-sm text-balance empty:hidden [&:not(:empty)]:mt-3"
              >
                {started &&
                  "Allalaadimine algas. Kui see ei alanud, vajuta nuppu uuesti."}
              </p>
            </SpecPlate>
          </div>

          <div className="md:col-start-1 md:row-start-2">
            <h2 className="sr-only">Paigaldus</h2>
            <ol>
              {steps.map(({ title, text, note }, i) => {
                const done = i < current;
                const last = i === steps.length - 1;
                return (
                  <li
                    key={title}
                    aria-current={i === current ? "step" : undefined}
                    className="relative flex gap-5 pb-10 last:pb-0"
                  >
                    {/* The wire to the next step. It lights up once the
                        step above it is done. */}
                    {!last && (
                      <span
                        aria-hidden="true"
                        className="bg-primary-line absolute top-10 bottom-0 left-5 w-0.5 -translate-x-1/2"
                      >
                        {done && <span className="scheme-flow scheme-flow-y" />}
                      </span>
                    )}
                    <span
                      aria-hidden="true"
                      className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold tabular-nums transition-colors duration-300 ${
                        done
                          ? "border-primary bg-primary text-on-primary"
                          : i === current
                            ? "border-primary bg-ground text-accent ring-primary-tint ring-4"
                            : "border-line bg-ground text-muted"
                      }`}
                    >
                      {done ? <Check size={18} strokeWidth={2.5} /> : i + 1}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="text-ink text-lg leading-snug font-semibold">
                        {title}
                        {done && <span className="sr-only"> (tehtud)</span>}
                      </h3>
                      <p className="text-muted mt-1 max-w-md leading-relaxed">
                        {text}
                      </p>
                      {note && (
                        <p className="text-muted mt-3 max-w-md text-sm leading-relaxed">
                          {note}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
            <p className="text-muted mt-10 text-sm">
              Täpsemad juhised leiad{" "}
              <Link
                href="/ekell/docs"
                className="text-ink font-semibold underline underline-offset-4"
              >
                dokumentatsioonist
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadHero;
