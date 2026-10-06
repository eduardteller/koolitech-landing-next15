import { DownloadCloud, RefreshCw, WifiOff } from "lucide-react";
import Image from "next/image";
import Accordion from "./Accordion";
import Footer from "./Footer";
import HeaderPrimary from "./HeaderPrimary";
import HeroScheme from "./HeroScheme";
import LegacyCompare from "./LegacyCompare";
import MediaShowcase from "./MediaShowcase";
import PointsComponent from "./PointsComponent";
import PointsList from "./PointsList";
import ScrollButton from "./ScrollButton";
import SystemBridge from "./SystemBridge";
import SystemRequirements from "./SystemRequirements";

const reliability = [
  {
    Icon: RefreshCw,
    title: "Pilvesünkroonimine",
    text: "Ajakavad ja seaded sünkroonitakse automaatselt.",
  },
  {
    Icon: WifiOff,
    title: "Offline varuvõimalus",
    text: "Kellad mängivad ka ilma internetiühenduseta.",
  },
  {
    Icon: DownloadCloud,
    title: "Automaatsed uuendused",
    text: "Uusimad funktsioonid ja turvaparandused paigalduvad ise.",
  },
];

const App = () => {
  return (
    <>
      <HeaderPrimary />
      <div className="relative overflow-x-hidden">
        <main className="z-50">
          {/* ---------- Hero ---------- */}
          <section className="ruled-paper bg-ground relative overflow-hidden">
            <div className="relative mx-auto max-w-screen-xl px-6 pt-12 pb-24 sm:px-8 md:pt-20">
              <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="text-muted mb-6 text-xs font-semibold tracking-widest uppercase">
                    E-Kell · koolikellade süsteem
                  </p>
                  <h1 className="text-ink text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                    Kõikvõimas
                    <br />
                    {/* nowrap keeps the logo on the word's line on phones */}
                    <span className="whitespace-nowrap">
                      <span className="text-accent">koolikell</span>
                      <Image
                        width={512}
                        height={512}
                        src="/assets/ekell-logo.png"
                        alt="E-Kell"
                        priority
                        className="ml-[0.2em] inline-block h-[0.78em] w-auto align-baseline"
                      />
                    </span>
                  </h1>
                  <p className="text-muted mt-6 max-w-md text-lg leading-relaxed">
                    Muuda koolipäevad lihtsaks ja turvaliseks. Halda kellasid,
                    tunniplaane ja häireid — ühest kohast, igast seadmest.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <ScrollButton />
                    <a
                      href="https://dashboard.koolitech.ee"
                      className="text-muted hover:text-ink text-sm font-semibold underline-offset-4 hover:underline"
                    >
                      E-Kell Web →
                    </a>
                    <a
                      href="/ekell/docs"
                      className="text-muted hover:text-ink text-sm font-semibold underline-offset-4 hover:underline"
                    >
                      Dokumentatsioon →
                    </a>
                  </div>
                </div>

                <HeroScheme />
              </div>
            </div>
          </section>

          {/* ---------- Intro band ---------- */}
          <div className="bg-surface px-6 py-24 sm:px-8">
            <div
              className="container mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-6 text-center"
              data-aos="fade-up"
              data-aos-offset="200"
            >
              <p className="text-kicker text-xs font-semibold tracking-widest uppercase">
                Tarkvara koolidele
              </p>
              <h2 className="text-ink text-3xl leading-tight font-semibold tracking-tight md:w-3/4 md:text-4xl">
                E-Kell, teie nutikas koolikellade ja häiresüsteemide lahendus
              </h2>
              <p className="text-muted max-w-2xl text-lg leading-relaxed">
                Automatiseeri koolikellad ja tunniplaanid, halda häireid ning
                juhi kõike kaugelt — üks süsteem kogu koolipäeva jaoks.
              </p>
            </div>
          </div>

          {/* ---------- Ajakavad & tunniplaanid ---------- */}
          <div id="scroll-to-div" className="bg-ground px-6 py-24 sm:px-8">
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
                    src="/assets/desktop/loomuuda.png"
                    alt="E-Kell tunniplaani redaktor päevade ja plaanidega"
                  />
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                className="flex flex-col md:mt-0 md:basis-1/2 md:px-16"
              >
                <p className="text-kicker mb-5 text-xs font-semibold tracking-widest uppercase">
                  Tunniplaanid
                </p>
                <h3 className="text-ink text-2xl leading-tight font-semibold tracking-tight md:text-3xl">
                  Terve kooliaasta ajakavad ühes kohas
                </h3>

                <PointsList
                  text={[
                    "Mitu plaani: Loo tavaline nädal, lühendatud päev, pühad või aktus ja vaheta neid ühe klikiga.",
                    "Eelkell, peakell ja järelkell: Määra igale tunnile eraldi ajad ja helid.",
                    "Kopeeri päev: Kanna ühe päeva ajad teistele üle, ilma uuesti sisestamata.",
                    "Aktiivne plaan: Vaheta kehtiv ajakava kohe töölaualt või veebist.",
                  ]}
                />
              </div>
            </div>
          </div>

          {/* ---------- Häiresüsteem ---------- */}
          <div className="band px-6 py-24 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="order-2 flex flex-col md:order-1 md:mt-0 md:basis-1/2 md:px-16"
              >
                <p className="text-kicker mb-5 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase">
                  <span className="bg-kicker inline-block h-2 w-2 animate-pulse rounded-full" />
                  Häiresüsteem
                </p>
                <h3 className="text-ink text-2xl leading-tight font-semibold tracking-tight md:text-3xl">
                  Reageeri sekunditega
                </h3>

                <PointsList
                  text={[
                    "Häire presetid: Loo eraldi häired tulekahju, evakuatsiooni ja muude olukordade jaoks.",
                    "Täielikult kohandatav: Vali igale presetile ikoon, heli, korduste arv ja viivitus.",
                    "Kaugkäivitus: Käivita häire otse tarkvarast või veebiliidesest.",
                  ]}
                />
              </div>

              <div
                data-aos="fade-left"
                data-aos-offset="200"
                className="order-1 md:order-2 md:flex md:basis-1/2 md:items-center md:justify-center"
              >
                <div className="border-line bg-surface overflow-hidden rounded-xl border shadow-sm">
                  <Image
                    width={1920}
                    height={1030}
                    className="h-auto w-full object-contain"
                    src="/assets/desktop/haire2.png"
                    alt="E-Kell häire preseti loomine tulekahjuhäirega"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Heli & meedia ---------- */}
          <div className="bg-surface px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-7xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="text-kicker text-xs font-semibold tracking-widest uppercase">
                  Heli & meedia
                </p>
                <h2 className="text-ink text-3xl leading-tight font-semibold tracking-tight md:w-3/4 md:text-4xl">
                  Terve kooli helisüsteem tarkvaras
                </h2>
              </div>
              <MediaShowcase />
            </div>
          </div>

          {/* ---------- Veebiliides ---------- */}
          <div className="bg-ground px-6 py-24 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="order-2 flex flex-col md:order-1 md:mt-0 md:basis-1/2 md:px-16"
              >
                <p className="text-kicker mb-5 text-xs font-semibold tracking-widest uppercase">
                  Veebiliides
                </p>
                <h3 className="text-ink text-2xl leading-tight font-semibold tracking-tight md:text-3xl">
                  Halda koolikellasid igal ajal ja igal pool
                </h3>

                <PointsList
                  text={[
                    "Kaugjuhtimine: Muuda ajakavasid, käivita häireid ja juhi raadiot mis tahes brauserist.",
                    "Reaalajas sünkroonimine: Sinu muudatused jõuavad töölauarakendusse kohe.",
                  ]}
                />
              </div>

              <div
                data-aos="fade-left"
                data-aos-offset="200"
                className="order-1 md:order-2 md:flex md:basis-1/2 md:items-center md:justify-center"
              >
                <div className="border-line bg-surface overflow-hidden rounded-xl border shadow-sm">
                  <Image
                    width={2560}
                    height={1600}
                    className="h-auto w-full object-contain"
                    src="/assets/web/web.png"
                    alt="E-Kell veebiliides brauseris"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Pilvesünk & töökindlus ----------
          <div className="bg-surface px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-screen-xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="text-kicker text-xs font-semibold tracking-widest uppercase">
                  Töökindlus
                </p>
                <h2 className="text-ink text-3xl leading-tight font-semibold tracking-tight md:w-3/4 md:text-4xl">
                  Loodud igapäevaseks tööks
                </h2>
              </div>
              <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
                {reliability.map(({ Icon, title, text }, i) => (
                  <div
                    key={title}
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay={150 + i * 100}
                    className="flex flex-col items-center gap-4 text-center"
                  >
                    <span className="bg-primary-tint flex h-16 w-16 items-center justify-center rounded-xl">
                      <Icon
                        size={28}
                        strokeWidth={1.75}
                        className="text-accent"
                      />
                    </span>
                    <h4 className="text-ink text-lg leading-snug font-semibold">
                      {title}
                    </h4>
                    <p className="text-muted max-w-xs leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* ---------- Töölaud + veeb: üks süsteem ---------- */}
          <div className="bg-ground px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-6xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="text-kicker text-xs font-semibold tracking-widest uppercase">
                  Töölaud ja veeb
                </p>
                <h2 className="text-ink text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
                  Üks süsteem kahes kohas
                </h2>
              </div>
              <SystemBridge />
            </div>
          </div>

          {/* ---------- E-Kell vs vana süsteem ---------- */}
          <div className="band px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-4xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="text-kicker text-xs font-semibold tracking-widest uppercase">
                  Võrdlus
                </p>
                <h2 className="text-ink text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
                  Miks E-Kell?
                </h2>
              </div>
              <LegacyCompare />
            </div>
          </div>

          {/* ---------- Süsteeminõuded ---------- */}
          <div className="bg-ground px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-3xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="text-kicker text-xs font-semibold tracking-widest uppercase">
                  Süsteeminõuded
                </p>
                <h2 className="text-ink text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
                  Kas kooli arvuti sobib?
                </h2>
              </div>
              <div className="mt-14">
                <SystemRequirements />
              </div>
            </div>
          </div>

          {/* ---------- Feature grid ---------- */}
          <div className="bg-surface px-6 py-24 sm:px-8">
            <div className="container mx-auto flex max-w-6xl flex-col items-center justify-center gap-5">
              <p className="text-kicker text-xs font-semibold tracking-widest uppercase">
                Võimalused
              </p>
              <h3 className="text-ink text-center text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
                E-Kell tarkvara sisaldab
              </h3>
              <div className="mt-8 w-full">
                <PointsComponent />
              </div>
            </div>
          </div>

          {/* ---------- KKK ---------- */}
          <div className="bg-ground px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-kicker mb-4 text-center text-xs font-semibold tracking-widest uppercase">
                KKK
              </p>
              <h2 className="text-ink mb-16 text-center text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
                Korduma kippuvad küsimused
              </h2>
              <Accordion
                items={[
                  {
                    firstText: "Kuidas E-Kell paigaldada?",
                    secondText:
                      "Laadi töölauarakendus kooli arvutisse ja sisesta litsentsivõti — paari klikiga on süsteem töövalmis.",
                  },
                  {
                    firstText:
                      "Kuidas töölauarakendus ja veebiliides koos töötavad?",
                    secondText:
                      "Töölauarakendus töötab kooli arvutis, mängib kellad ja hoiab andmeid; veebiliides on kaugjuht, mis avaneb igas brauseris — arvutis, tahvlis või telefonis. Muudatus ühes jõuab kohe ka teise.",
                  },
                  {
                    firstText: "Kas E-Kell töötab ka ilma internetita?",
                    secondText:
                      "Jah — töölauarakendus mängib kellad ka võrguühenduseta ning sünkroonib muudatused, kui ühendus taastub.",
                  },
                  {
                    firstText: "Kuidas käib pilvesünkroonimine?",
                    secondText:
                      "Ajakavad ja seaded sünkroonitakse automaatselt töölauarakenduse ja serveri vahel, nii et kõik seadmed näevad sama infot.",
                  },
                  {
                    firstText:
                      "Kas mitu kasutajat saavad ajakavasid korraga hallata?",
                    secondText:
                      "Jah, koolitöötajad saavad ajakavasid hallata veebiliidese kaudu ja muudatused jõuavad reaalajas kõikjale.",
                  },
                  {
                    firstText:
                      "Kas saan kasutada oma muusikat või helifaile kellahelina?",
                    secondText:
                      "Jah — lae üles MP3-failid või salvestused ja määra need koolikella helideks.",
                  },
                  {
                    firstText:
                      "Kas on võimalik seadistada erinevaid häireliike?",
                    secondText:
                      "Jah, saad luua eraldi presetid tulekahju-, evakuatsiooni- ja muudeks olukordadeks ning käivitada need ühe vajutusega.",
                  },
                  {
                    firstText: "Kuidas muuta kellaaegu ja helisid?",
                    secondText:
                      "Iga tunni eelkella, peakella ja järelkella aja ning heli saad määrata plaani redaktoris kooli vajaduste järgi.",
                  },
                  {
                    firstText:
                      "Kuidas litsents toimib ja kas saan enne proovida?",
                    secondText:
                      "E-Kell töötab litsentsivõtmega, mille kehtivust näed rakenduses ja saad pikendada; enne ostu saab tutvuda tasuta prooviperioodiga.",
                  },
                  {
                    firstText: "Kas klienditugi on saadaval?",
                    secondText:
                      "Meie tugitiim aitab e-posti või telefoni teel kõik küsimused kiiresti ja tõhusalt lahendada.",
                  },
                ]}
              ></Accordion>
            </div>
          </div>

          {/* ---------- CTA ---------- */}
          <div className="band px-6 py-28 text-center sm:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6">
              <p className="text-kicker text-xs font-semibold tracking-widest uppercase">
                Alusta täna
              </p>
              <h2 className="text-ink text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
                Kõikvõimas koolikell
              </h2>
              <p className="text-muted max-w-md text-lg leading-relaxed">
                Muuda koolipäevad lihtsaks ja turvaliseks.
              </p>
              <a
                href="/contact"
                className="bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active mt-2 rounded-lg px-8 py-3.5 font-semibold transition duration-150"
              >
                Küsi hinnapakkumist
              </a>
            </div>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
