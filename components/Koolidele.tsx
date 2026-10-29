import { ClipboardList, FileCheck, LifeBuoy, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CategoryGrid from "./catalog/CategoryGrid";
import CtaBand from "./CtaBand";
import Footer from "./Footer";
import HeaderPrimary from "./HeaderPrimary";
import PointsList from "./PointsList";

const steps = [
  {
    Icon: ClipboardList,
    title: "Kaardistame vajadused",
    text: "Käime koolis kohal, vaatame üle ruumid ja olemasoleva tehnika ning kuulame, mida juhtkond vajab.",
  },
  {
    Icon: FileCheck,
    title: "Pakume lahenduse",
    text: "Paneme kokku sobiva komplekti ja saadame hinnapakkumise, kus on kirjeldatud sobivad seadmed ja töö.",
  },
  {
    Icon: Wrench,
    title: "Paigaldame ja koolitame",
    text: "Paigaldame ja seadistame tehnika kohapeal ning näitame kooliperele, kuidas neid kasutada.",
  },
  {
    Icon: LifeBuoy,
    title: "Jääme toeks",
    text: "Pärast paigaldust aitame hoolduse ja tehnilise toega, kui midagi vajab tähelepanu.",
  },
];

const Koolidele = () => {
  return (
    <>
      <HeaderPrimary />
      <div className="relative overflow-x-hidden">
        <main>
          {/* ---------- Hero ---------- */}
          <section className="ruled-paper bg-ground relative overflow-hidden">
            <div className="relative mx-auto max-w-screen-xl px-6 pt-12 pb-24 sm:px-8 md:pt-20">
              <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="text-kicker mb-6 text-xs font-semibold tracking-widest uppercase">
                    Koolidele
                  </p>
                  <h1 className="text-ink text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                    Tarkvara ja tehnika
                    <br />
                    <span className="text-accent">ühest kohast</span>
                  </h1>
                  <p className="text-muted mt-6 max-w-md text-lg leading-relaxed">
                    Koolikelladest klassiruumi ekraanideni: kaardistame kooli
                    vajadused, pakume sobiva lahenduse, paigaldame selle ja
                    jääme toeks ka pärast.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <Link
                      href="/contact"
                      className="bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active rounded-lg px-6 py-3 font-semibold transition duration-150"
                    >
                      Küsi koolile pakkumist
                    </Link>
                    <Link
                      href="/tooted"
                      className="text-muted hover:text-ink text-sm font-semibold underline-offset-4 hover:underline"
                    >
                      Vaata tootevalikut →
                    </Link>
                  </div>
                </div>

                <div className="border-line bg-surface rounded-xl border p-6 shadow-sm sm:p-8">
                  <p className="text-muted text-xs font-semibold tracking-widest uppercase">
                    Mida koolid meilt saavad
                  </p>
                  <PointsList
                    text={[
                      "Tarkvara: E-Kell juhib koolikellasid, tunniplaane ja häireid.",
                      "Tehnika: ekraanid, helitehnika, võrguseadmed ja muu koolimajja.",
                      "Paigaldus ja tugi: seadistame kõik kohapeal ja aitame ka hiljem.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Process ---------- */}
          <section
            aria-labelledby="process-title"
            className="bg-surface px-6 py-24 sm:px-8"
          >
            <div className="mx-auto max-w-screen-xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="text-kicker text-xs font-semibold tracking-widest uppercase">
                  Kuidas see käib
                </p>
                <h2
                  id="process-title"
                  className="text-ink text-3xl leading-tight font-semibold tracking-tight md:w-3/4 md:text-4xl"
                >
                  Neli sammu ideest töötava lahenduseni
                </h2>
              </div>
              <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map(({ Icon, title, text }, i) => (
                  <li
                    key={title}
                    data-aos="fade-up"
                    data-aos-offset="120"
                    data-aos-delay={100 + i * 75}
                    className="border-line bg-ground flex flex-col gap-4 rounded-xl border p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="bg-primary-tint flex h-12 w-12 items-center justify-center rounded-xl">
                        <Icon
                          size={24}
                          strokeWidth={1.75}
                          className="text-accent"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-muted text-sm font-semibold tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-ink text-lg leading-snug font-semibold">
                      {title}
                    </h3>
                    <p className="text-muted leading-relaxed">{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ---------- Software: E-Kell ---------- */}
          <div className="band px-6 py-24 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="md:flex md:basis-1/2 md:items-center md:justify-center"
              >
                <div className="border-line bg-surface overflow-hidden rounded-xl border shadow-sm">
                  <Image
                    width={2560}
                    height={1600}
                    className="h-auto w-full object-contain"
                    src="/assets/desktop/toolaud.webp"
                    alt="E-Kell koolikellade süsteem"
                  />
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                className="flex flex-col md:mt-0 md:basis-1/2 md:px-16"
              >
                <p className="text-kicker mb-5 text-xs font-semibold tracking-widest uppercase">
                  Tarkvara
                </p>
                <h2 className="text-ink text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
                  E-Kell: koolikellad, tunniplaanid ja häired
                </h2>
                <p className="text-muted mt-5 max-w-md text-lg leading-relaxed">
                  Kellad helisevad õigel ajal ning kellasid ja häireid saab
                  juhtida ka eemalt.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <Link
                    href="/ekell"
                    className="bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active rounded-lg px-6 py-3 font-semibold transition duration-150"
                  >
                    Tutvu E-Kellaga
                  </Link>
                  <Link
                    href="/ekell/docs"
                    className="text-muted hover:text-ink text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    Dokumentatsioon →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Hardware ---------- */}
          <section
            aria-labelledby="hardware-title"
            className="bg-ground px-6 py-24 sm:px-8"
          >
            <div className="mx-auto max-w-screen-xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="text-kicker text-xs font-semibold tracking-widest uppercase">
                  Tehnika
                </p>
                <h2
                  id="hardware-title"
                  className="text-ink text-3xl leading-tight font-semibold tracking-tight md:w-3/4 md:text-4xl"
                >
                  Koolitehnika klassist koolihoovini
                </h2>
                <p className="text-muted max-w-xl text-lg leading-relaxed">
                  Aitame valida, tarnime ja paigaldame. Kogu valik on
                  tootekataloogis.
                </p>
              </div>
              <div className="mt-14">
                <CategoryGrid
                  slugs={[
                    "interaktiivsed-ekraanid",
                    "audiolahendused",
                    "vorguseadmed",
                    "interkomid",
                    "projektorid",
                    "laadimiskarud",
                  ]}
                />
              </div>
              <div className="mt-10 text-center">
                <Link
                  href="/tooted"
                  className="text-muted hover:text-ink text-sm font-semibold underline-offset-4 hover:underline"
                >
                  Vaata kogu tootevalikut →
                </Link>
              </div>
            </div>
          </section>

          <CtaBand
            kicker="Alusta täna"
            title="Räägime teie koolist"
            text="Kirjuta meile ja tuleme kohale. Konsultatsioon on tasuta."
            href="/contact"
            label="Küsi koolile pakkumist"
          />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Koolidele;
