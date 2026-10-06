import { Boxes, MonitorSmartphone, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import HeaderPrimary from "./HeaderPrimary";

const services = [
  {
    Icon: MonitorSmartphone,
    title: "Tarkvara",
    text: "E-Kell — lihtne ja mugav viis koolikellade ning häiresignaalide juhtimiseks.",
  },
  {
    Icon: Boxes,
    title: "Tehnika müük",
    text: "Helitehnika müük vastavalt koolimaja vajadustele.",
  },
  {
    Icon: Wrench,
    title: "Paigaldus ja hooldus",
    text: "Professionaalne paigaldus kohapeal ja järjepidev hooldus.",
  },
];

const Company = () => {
  return (
    <>
      <HeaderPrimary />
      <div className="relative overflow-x-hidden">
        <main>
          {/* ---------- Hero ---------- */}
          <section className="ruled-paper relative overflow-hidden bg-surface">
            <div className="relative mx-auto max-w-screen-xl px-6 pb-24 pt-12 sm:px-8 md:pt-20">
              <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted">
                    KooliTech · Tarkvara ja tehnika koolidele
                  </p>
                  <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                    Lihtsam koolipäev
                    <br />
                    <span className="text-primary">algab siit</span>
                  </h1>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                    KooliTech OÜ on Eesti IT-ettevõte, mis varustab koole
                    tarkvara ja tehnikaga — alates nutikatest koolikelladest
                    kuni terve maja helisüsteemini.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <Link
                      href="/ekell"
                      className="rounded-lg bg-primary px-6 py-3 font-semibold text-on-primary transition duration-150 hover:bg-primary-hover"
                    >
                      Tutvu E-Kellaga
                    </Link>
                    <a
                      href="/contact"
                      className="text-sm font-semibold text-primary underline-offset-4 hover:text-primary-hover hover:underline"
                    >
                      Võta ühendust →
                    </a>
                  </div>
                </div>

                {/* Signature: the capability stack — what KooliTech delivers */}
                <CapabilityStack />
              </div>
            </div>
          </section>

          {/* ---------- What we do ---------- */}
          <div className="bg-card px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-screen-xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink md:w-3/4 md:text-4xl">
                  Kolm viisi, kuidas koolipäeva sujuvamaks muuta
                </h2>
              </div>
              <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
                {services.map(({ Icon, title, text }, i) => (
                  <div
                    key={title}
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay={150 + i * 100}
                    className="flex flex-col items-center gap-4 text-center"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary-tint">
                      <Icon
                        size={30}
                        strokeWidth={1.75}
                        className="text-primary"
                      />
                    </span>
                    <h3 className="text-lg font-semibold leading-snug text-ink">
                      {title}
                    </h3>
                    <p className="max-w-xs leading-relaxed text-muted">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---------- E-Kell flagship spotlight ---------- */}
          <div className="bg-primary-tint px-6 py-24 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="md:flex md:basis-1/2 md:items-center md:justify-center"
              >
                <div className="overflow-hidden rounded-xl border border-line bg-card shadow-sm">
                  <Image
                    width={1920}
                    height={1030}
                    className="h-auto w-full object-contain"
                    src="/assets/desktop/toolaud.png"
                    alt="E-Kell koolikellade süsteem"
                  />
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                className="flex flex-col md:mt-0 md:basis-1/2 md:px-16"
              >
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                  E-Kell — kõikvõimas koolikell
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                  E-Kell paneb koolikellad õigel ajal helisema ning võimaldab
                  kelli ja häiresignaale juhtida ka eemalt.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  {/* Secondary: the hero and closing CTA own the filled buttons. */}
                  <Link
                    href="/ekell"
                    className="rounded-lg border border-primary-line bg-card px-6 py-3 font-semibold text-primary transition duration-150 hover:border-primary"
                  >
                    E-Kell tutvustus
                  </Link>
                  <a
                    href="https://dashboard.koolitech.ee"
                    className="text-sm font-semibold text-primary underline-offset-4 hover:text-primary-hover hover:underline"
                  >
                    E-Kell Web →
                  </a>
                  <Link
                    href="/ekell/docs"
                    className="text-sm font-semibold text-primary underline-offset-4 hover:text-primary-hover hover:underline"
                  >
                    Dokumentatsioon →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- CTA ---------- */}
          <div className="bg-surface px-6 py-28 text-center sm:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Alusta täna
              </p>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
                Räägime, kuidas saame aidata
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-muted">
                Tarkvara, tehnika või paigaldus — kirjuta meile ja leiame koolile
                sobiva lahenduse.
              </p>
              <a
                href="/contact"
                className="mt-2 rounded-lg bg-primary px-8 py-3.5 font-semibold text-on-primary transition duration-150 hover:bg-primary-hover"
              >
                Kirjuta meile
              </a>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

/* The page signature: KooliTech's offering as a stack of layers.
   Echoes the site's rail grammar (small caps labels, dots, a vertical
   thread) without reusing E-Kell's clock-like TimeRail. */
const layers = [
  {
    label: "Tarkvara",
    text: "Koolikellad, tunniplaanid ja häired",
    flagship: true,
  },
  { label: "Riistvara", text: "Helitehnika ja muu tehnika müük" },
  { label: "Paigaldus", text: "Seadistus ja hooldus kohapeal" },
];

const CapabilityStack = () => {
  return (
    <div className="relative">
      <div className="rounded-xl border border-line bg-card p-5 shadow-sm sm:p-6">
        <div className="mb-5 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="ml-3 text-xs text-muted">Koolitech · Võimalused</span>
        </div>

        <ul className="relative flex flex-col gap-3">
          {/* vertical thread tying the layers together */}
          <span
            className="pointer-events-none absolute bottom-6 left-[1.4rem] top-6 w-px bg-line"
            aria-hidden="true"
          />
          {layers.map((layer) => (
            <li
              key={layer.label}
              className={`relative flex items-center gap-4 rounded-xl border p-4 ${
                layer.flagship
                  ? "border-primary-line bg-primary-tint"
                  : "border-line bg-surface"
              }`}
            >
              <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-card">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    layer.flagship ? "bg-primary" : "bg-muted"
                  }`}
                />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                    {layer.label}
                  </span>
                  {layer.flagship && (
                    <span className="rounded-md bg-accent px-2 py-0.5 text-sm font-semibold text-on-accent">
                      E-Kell
                    </span>
                  )}
                </div>
                <p className="mt-0.5 truncate text-sm text-ink">{layer.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Company;
