import { Boxes, MonitorSmartphone, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import HeaderPrimary from "./HeaderPrimary";

const services = [
  {
    Icon: MonitorSmartphone,
    title: "Tarkvara",
    text: "Koolidele loodud tarkvaralahendused — meie lipulaev on koolikellade ja häiresüsteemide süsteem E-Kell.",
  },
  {
    Icon: Boxes,
    title: "Tehnika müük ja rent",
    text: "Koolikellade, kõlarite ja helitehnika müük ning rent vastavalt maja vajadustele.",
  },
  {
    Icon: Wrench,
    title: "Paigaldus ja hooldus",
    text: "Professionaalne paigaldus kohapeal ja järjepidev hooldus, et süsteem püsiks töökindel.",
  },
];

const values = [
  {
    title: "Lihtsus",
    text: "Tehnika peab kooli elu lihtsamaks tegema, mitte keerulisemaks.",
  },
  {
    title: "Töökindlus",
    text: "Süsteemid, millele saab iga koolipäev kindel olla.",
  },
  {
    title: "Kohalik tugi",
    text: "Eesti ettevõte, kelle poole saab alati pöörduda.",
  },
];

const Company = () => {
  return (
    <>
      <HeaderPrimary />
      <div className="relative overflow-x-hidden">
        <main>
          {/* ---------- Hero ---------- */}
          <section className="relative overflow-hidden bg-chalk">
            {/* faint ruled-paper texture — shared site motif */}
            <div
              className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] [background-size:100%_2.5rem]"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-screen-xl px-6 pb-24 pt-12 sm:px-8 md:pt-20">
              <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-ink/65">
                    KooliTech · Tarkvara ja tehnika koolidele
                  </p>
                  <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                    Tööriistad, mis
                    <br />
                    hoiavad <span className="text-brass">koolipäeva töös</span>
                  </h1>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
                    KooliTech on Eesti IT-ettevõte, mis varustab koole tarkvara,
                    tehnika ja paigaldusteenustega — alates nutikatest
                    koolikelladest kuni terve maja helisüsteemini.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <Link
                      href="/ekell"
                      className="rounded-xl bg-ink px-7 py-3.5 font-medium text-chalk shadow-xs transition duration-150 hover:bg-ink/85"
                    >
                      Tutvu E-Kellaga
                    </Link>
                    <a
                      href="/contact"
                      className="font-mono text-sm font-medium text-ink/70 underline-offset-4 hover:text-ink hover:underline"
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
          <div className="bg-white px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-screen-xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
                  Mida me teeme
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink md:w-3/4 md:text-4xl">
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
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-chalk ring-1 ring-ink/10">
                      <Icon
                        size={30}
                        strokeWidth={1.75}
                        className="text-brass"
                      />
                    </span>
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      {title}
                    </h3>
                    <p className="max-w-xs leading-relaxed text-ink/65">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---------- E-Kell flagship spotlight ---------- */}
          <div className="bg-ink px-6 py-24 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="md:flex md:basis-1/2 md:items-center md:justify-center"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_-25px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
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
                <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
                  Lipulaev
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-chalk md:text-4xl">
                  E-Kell — kõikvõimas koolikell
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-chalk/70">
                  Meie tuntuim toode automatiseerib koolikellad ja tunniplaanid,
                  haldab häiresüsteemi ning lubab kõike juhtida kaugelt, igast
                  seadmest.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <Link
                    href="/ekell"
                    className="rounded-xl bg-brass px-7 py-3.5 font-semibold text-ink transition duration-150 hover:bg-brass/85"
                  >
                    E-Kell tutvustus
                  </Link>
                  <a
                    href="https://dashboard.koolitech.ee"
                    className="font-mono text-sm font-medium text-chalk/70 underline-offset-4 hover:text-chalk hover:underline"
                  >
                    E-Kell Web →
                  </a>
                  <Link
                    href="/ekell/docs"
                    className="font-mono text-sm font-medium text-chalk/70 underline-offset-4 hover:text-chalk hover:underline"
                  >
                    Dokumentatsioon →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Mission / values ---------- */}
          <div className="bg-chalk px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-5xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
                  Meie eesmärk
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink md:w-3/4 md:text-4xl">
                  Et iga koolipäev algaks ja lõppeks õigel ajal
                </h2>
                <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
                  Usume, et hea tehnika jääb märkamatuks — see lihtsalt töötab.
                  Meie missioon on võtta koolidelt ära tehniline mure, et
                  õpetajad ja juhtkond saaksid keskenduda kõige olulisemale:
                  õpilastele.
                </p>
              </div>
              <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {values.map(({ title, text }) => (
                  <div
                    key={title}
                    data-aos="fade-up"
                    data-aos-offset="200"
                    className="border-t-2 border-brass/40 pt-5"
                  >
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      {title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink/65">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---------- CTA ---------- */}
          <div className="bg-ink px-6 py-28 text-center sm:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
                Alusta täna
              </p>
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-chalk md:text-5xl">
                Räägime, kuidas saame aidata
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-chalk/70">
                Tarkvara, tehnika või paigaldus — kirjuta meile ja leiame koolile
                sobiva lahenduse.
              </p>
              <a
                href="/contact"
                className="mt-2 rounded-xl bg-brass px-8 py-4 font-semibold text-ink transition duration-150 hover:bg-brass/85"
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
   Echoes the site's rail grammar (mono labels, brass dots, a vertical
   thread) without reusing E-Kell's clock-like TimeRail. */
const layers = [
  {
    label: "Tarkvara",
    text: "Koolikellad, tunniplaanid ja häired",
    flagship: true,
  },
  { label: "Riistvara", text: "Kellade ja helitehnika müük ning rent" },
  { label: "Paigaldus", text: "Seadistus ja hooldus kohapeal" },
];

const CapabilityStack = () => {
  return (
    <div className="relative">
      <div className="rounded-2xl bg-white p-5 shadow-[0_30px_60px_-25px_rgba(15,23,42,0.35)] ring-1 ring-ink/10 sm:p-6">
        <div className="mb-5 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-brass/60" />
          <span className="ml-3 font-mono text-[11px] text-ink/40">
            koolitech · pakett
          </span>
        </div>

        <ul className="relative flex flex-col gap-3">
          {/* vertical thread tying the layers together */}
          <span
            className="pointer-events-none absolute bottom-6 left-[1.4rem] top-6 w-px bg-ink/10"
            aria-hidden="true"
          />
          {layers.map((layer) => (
            <li
              key={layer.label}
              className={`relative flex items-center gap-4 rounded-xl border p-4 ${
                layer.flagship
                  ? "border-brass/40 bg-brass/[0.06]"
                  : "border-ink/10 bg-chalk/50"
              }`}
            >
              <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-ink/10">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    layer.flagship ? "bg-brass" : "bg-ink/25"
                  }`}
                />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55">
                    {layer.label}
                  </span>
                  {layer.flagship && (
                    <span className="rounded-full bg-brass px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide text-ink">
                      E-Kell
                    </span>
                  )}
                </div>
                <p className="mt-0.5 truncate text-sm text-ink/70">
                  {layer.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute -bottom-4 -right-3 flex items-center gap-2 rounded-full bg-ink px-4 py-2 shadow-lg">
        <span className="h-2 w-2 rounded-full bg-brass" />
        <span className="font-mono text-xs text-chalk">üks partner</span>
      </div>
    </div>
  );
};

export default Company;
