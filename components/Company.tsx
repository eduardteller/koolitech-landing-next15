import {
  Boxes,
  MonitorSmartphone,
  Network,
  PhoneCall,
  Presentation,
  Projector,
  Speaker,
  Volume2,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import HeaderPrimary from "./HeaderPrimary";
import LogoMarquee from "./LogoMarquee";
import PointsList from "./PointsList";

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

// Koolitehnika block — product names double as the search terms schools
// use (välikõlarid, nutitahvlid, projektorid …), so keep them plain.
const hardware = [
  {
    Icon: Speaker,
    title: "Välikõlarid",
    text: "Ilmastikukindlad kõlarid koolihoovi, spordiväljakule ja sissepääsude juurde.",
  },
  {
    Icon: Volume2,
    title: "Sisekõlarid",
    text: "Selge heli klassidesse, koridoridesse, aulasse ja võimlasse.",
  },
  {
    Icon: Network,
    title: "IP-võrgulülitid",
    text: "Töökindel võrk, mis ühendab kooli IP-seadmed üheks tervikuks.",
  },
  {
    Icon: PhoneCall,
    title: "Interkomid",
    text: "Kiire side klasside, õpetajate toa ja valvelaua vahel.",
  },
  {
    Icon: Presentation,
    title: "Nutitahvlid",
    text: "Interaktiivsed puutetahvlid kaasaegseks ja kaasavaks õppetööks.",
  },
  {
    Icon: Projector,
    title: "Projektorid",
    text: "Projektorid klassiruumidesse, aulasse ja saalidesse.",
  },
];

const Company = () => {
  return (
    <>
      <HeaderPrimary announcement />
      <div className="relative overflow-x-hidden">
        <main>
          {/* ---------- Hero ---------- */}
          <section className="ruled-paper bg-ground relative overflow-hidden">
            <div className="relative mx-auto max-w-screen-xl px-6 pt-12 pb-24 sm:px-8 md:pt-20">
              <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="text-muted mb-6 text-xs font-semibold tracking-widest uppercase">
                    KooliTech · Tarkvara ja tehnika koolidele
                  </p>
                  <h1 className="text-ink text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                    Lihtsam koolipäev
                    <br />
                    <span className="text-accent">algab siit</span>
                  </h1>
                  <p className="text-muted mt-6 max-w-md text-lg leading-relaxed">
                    KooliTech OÜ on Eesti IT-ettevõte, mis varustab koole
                    tarkvara ja tehnikaga — alates nutikatest koolikelladest
                    kuni terve maja helisüsteemini.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <Link
                      href="/ekell"
                      className="bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active rounded-lg px-6 py-3 font-semibold transition duration-150"
                    >
                      Tutvu E-Kellaga
                    </Link>
                    <a
                      href="/contact"
                      className="text-muted hover:text-ink text-sm font-semibold underline-offset-4 hover:underline"
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

          {/* ---------- Partner logos ---------- */}
          <LogoMarquee />

          {/* ---------- What we do ---------- */}
          <div className="bg-surface px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-screen-xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <h2 className="text-ink text-3xl leading-tight font-semibold tracking-tight md:w-3/4 md:text-4xl">
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
                    <span className="bg-primary-tint flex h-16 w-16 items-center justify-center rounded-xl">
                      <Icon
                        size={30}
                        strokeWidth={1.75}
                        className="text-accent"
                      />
                    </span>
                    <h3 className="text-ink text-lg leading-snug font-semibold">
                      {title}
                    </h3>
                    <p className="text-muted max-w-xs leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---------- E-Kell flagship spotlight ---------- */}
          <div className="band px-6 py-24 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="md:flex md:basis-1/2 md:items-center md:justify-center"
              >
                <div className="border-line bg-surface overflow-hidden rounded-xl border shadow-sm">
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
                <h2 className="text-ink text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
                  E-Kell — kõikvõimas koolikell
                </h2>
                <p className="text-muted mt-5 max-w-md text-lg leading-relaxed">
                  E-Kell paneb koolikellad õigel ajal helisema ning võimaldab
                  kelli ja häiresignaale juhtida ka eemalt.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <Link
                    href="/ekell"
                    className="bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active rounded-lg px-6 py-3 font-semibold transition duration-150"
                  >
                    E-Kell tutvustus
                  </Link>
                  <a
                    href="https://dashboard.koolitech.ee"
                    className="text-muted hover:text-ink text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    E-Kell Web →
                  </a>
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

          {/* ---------- Koolitehnika (hardware) ---------- */}
          <section
            id="koolitehnika"
            aria-labelledby="koolitehnika-title"
            className="bg-surface px-6 py-24 sm:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  className="order-2 flex flex-col md:order-1 md:basis-1/2 md:px-16"
                >
                  <p className="text-kicker mb-5 text-xs font-semibold tracking-widest uppercase">
                    Koolitehnika
                  </p>
                  <h2
                    id="koolitehnika-title"
                    className="text-ink text-3xl leading-tight font-semibold tracking-tight md:text-4xl"
                  >
                    Kaasaegne koolitehnika kõlaritest nutitahvliteni
                  </h2>
                  <p className="text-muted mt-5 max-w-md text-lg leading-relaxed">
                    Varustame koole nii kaasaegse IP-tehnika kui ka tavapäraste
                    lahendustega. Aitame valida kooli vajadustele sobiva
                    tehnika, tarnime selle ja paigaldame kohapeal.
                  </p>

                  <PointsList
                    text={[
                      "Tasuta konsultatsioon: Vaatame üle kooli olemasoleva tehnika ja toome välja, kus uuendus annab kõige rohkem kasu.",
                      "Paigaldus koolis: Planeerime seadmete paigutuse koolimajas ning paigaldame ja seadistame need kohapeal.",
                    ]}
                  />
                </div>

                <div
                  data-aos="fade-left"
                  data-aos-offset="200"
                  className="order-1 flex justify-center md:order-2 md:basis-1/2"
                >
                  <Image
                    width={2500}
                    height={2500}
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="h-auto w-full max-w-lg"
                    src="/assets/ip.png"
                    alt="Kooli IP-võrgu illustratsioon: võrguseadmed ja nendega ühendatud koolitehnika"
                  />
                </div>
              </div>

              <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {hardware.map(({ Icon, title, text }, i) => (
                  <li
                    key={title}
                    data-aos="fade-up"
                    data-aos-offset="120"
                    data-aos-delay={100 + i * 75}
                    className="border-line bg-ground flex items-start gap-4 rounded-xl border p-6"
                  >
                    <span className="bg-primary-tint flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                      <Icon
                        size={24}
                        strokeWidth={1.75}
                        className="text-accent"
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <h3 className="text-ink text-lg leading-snug font-semibold">
                        {title}
                      </h3>
                      <p className="text-muted mt-1 leading-relaxed">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ---------- CTA ---------- */}
          <div className="bg-ground px-6 py-28 text-center sm:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6">
              <p className="text-kicker text-xs font-semibold tracking-widest uppercase">
                Alusta täna
              </p>
              <h2 className="text-ink text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
                Räägime, kuidas saame aidata
              </h2>
              <p className="text-muted max-w-md text-lg leading-relaxed">
                Tarkvara, tehnika või paigaldus — kirjuta meile ja leiame
                koolile sobiva lahenduse.
              </p>
              <a
                href="/contact"
                className="bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active mt-2 rounded-lg px-8 py-3.5 font-semibold transition duration-150"
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
      <div className="border-line bg-surface rounded-xl border p-5 shadow-sm sm:p-6">
        <div className="mb-5 flex items-center gap-1.5">
          <span className="bg-line h-2.5 w-2.5 rounded-full" />
          <span className="bg-line h-2.5 w-2.5 rounded-full" />
          <span className="bg-primary h-2.5 w-2.5 rounded-full" />
          <span className="text-muted ml-3 text-xs">
            Koolitech · Võimalused
          </span>
        </div>

        <ul className="relative flex flex-col gap-3">
          {/* vertical thread tying the layers together */}
          <span
            className="bg-line pointer-events-none absolute top-6 bottom-6 left-[1.4rem] w-px"
            aria-hidden="true"
          />
          {layers.map((layer) => (
            <li
              key={layer.label}
              className={`relative flex items-center gap-4 rounded-xl border p-4 ${
                layer.flagship
                  ? "border-primary-line bg-primary-tint"
                  : "border-line bg-ground"
              }`}
            >
              <span className="border-line bg-surface relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    layer.flagship ? "bg-primary" : "bg-muted"
                  }`}
                />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-muted text-xs font-semibold tracking-widest uppercase">
                    {layer.label}
                  </span>
                  {layer.flagship && (
                    <span className="bg-primary text-on-primary rounded-md px-2 py-0.5 text-sm font-semibold">
                      E-Kell
                    </span>
                  )}
                </div>
                <p className="text-ink mt-0.5 truncate text-sm">{layer.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Company;
