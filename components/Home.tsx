import { DownloadCloud, KeyRound, RefreshCw, WifiOff } from "lucide-react";
import Image from "next/image";
import Accordion from "./Accordion";
import Footer from "./Footer";
import HeaderPrimary from "./HeaderPrimary";
import MediaShowcase from "./MediaShowcase";
import PlatformCompare from "./PlatformCompare";
import PointsComponent from "./PointsComponent";
import PointsList from "./PointsList";
import ScrollButton from "./ScrollButton";
import TimeRail from "./TimeRail";

const reliability = [
  {
    Icon: RefreshCw,
    title: "Pilvesünkroonimine",
    text: "Ajakavad ja seaded sünkroonitakse automaatselt taustal.",
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
  {
    Icon: KeyRound,
    title: "Litsentsihaldus",
    text: "Näe litsentsi kehtivust ja pikenda see õigel ajal.",
  },
];

const App = () => {
  return (
    <>
      <HeaderPrimary />
      <div className="relative overflow-x-hidden">
        <main className="z-50">
          {/* ---------- Hero ---------- */}
          <section className="relative overflow-hidden bg-chalk">
            {/* faint ruled-paper texture — the schedule grid */}
            <div
              className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] [background-size:100%_2.5rem]"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-screen-xl px-6 pb-24 pt-12 sm:px-8 md:pt-20">
              <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-ink/65">
                    E-Kell · koolikellade süsteem
                  </p>
                  <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                    Kõikvõimas
                    <br />
                    <span className="text-brass">koolikell</span>
                  </h1>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
                    Muuda koolipäevad lihtsaks ja turvaliseks. Halda kellasid,
                    tunniplaane ja häireid — ühest kohast, igast seadmest.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <ScrollButton />
                    <a
                      href="https://dashboard.koolitech.ee"
                      className="font-mono text-sm font-medium text-ink/70 underline-offset-4 hover:text-ink hover:underline"
                    >
                      E-Kell Web →
                    </a>
                    <a
                      href="/ekell/docs"
                      className="font-mono text-sm font-medium text-ink/70 underline-offset-4 hover:text-ink hover:underline"
                    >
                      Dokumentatsioon →
                    </a>
                  </div>
                  <div className="mt-14">
                    <TimeRail />
                  </div>
                </div>

                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-25px_rgba(15,23,42,0.35)] ring-1 ring-ink/10">
                    <Image
                      width={1920}
                      height={1030}
                      alt="E-Kell töölauarakenduse peavaade"
                      className="h-auto w-full object-cover"
                      src="/assets/desktop/toolaud.png"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-3 flex items-center gap-2 rounded-full bg-ink px-4 py-2 shadow-lg">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-brass" />
                    <span className="font-mono text-xs text-chalk">
                      kell heliseb 09:50
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Intro band ---------- */}
          <div className="bg-white px-6 py-24 sm:px-8">
            <div
              className="container mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-6 text-center"
              data-aos="fade-up"
              data-aos-offset="200"
            >
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
                Tarkvara koolidele
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink md:w-3/4 md:text-4xl">
                E-Kell, teie nutikas koolikellade ja häiresüsteemide lahendus
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
                Automatiseeri koolikellad ja tunniplaanid, halda häireid ning
                juhi kõike kaugelt — üks süsteem kogu koolipäeva jaoks.
              </p>
            </div>
          </div>

          {/* ---------- Ajakavad & tunniplaanid ---------- */}
          <div id="scroll-to-div" className="bg-chalk px-6 py-24 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="md:flex md:basis-1/2 md:items-center md:justify-center"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_50px_-30px_rgba(15,23,42,0.45)] ring-1 ring-ink/10">
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
                <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
                  Tunniplaanid
                </p>
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink md:text-3xl">
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
          <div className="bg-ink px-6 py-24 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="order-2 flex flex-col md:order-1 md:mt-0 md:basis-1/2 md:px-16"
              >
                <p className="mb-5 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-signal" />
                  Häiresüsteem
                </p>
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-chalk md:text-3xl">
                  Reageeri sekunditega
                </h3>

                <PointsList
                  tone="dark"
                  text={[
                    "Häire presetid: Loo eraldi häired tulekahju, evakuatsiooni ja muude olukordade jaoks.",
                    "Täielikult kohandatav: Vali igale presetile ikoon, heli, korduste arv ja viivitus.",
                    "Kaugkäivitus: Käivita häire otse tarkvarast või kaugelt veebiliidesest.",
                    "Eraldi tulekahjuhäire: Kiire nupp kõige kriitilisemaks olukorraks.",
                  ]}
                />
              </div>

              <div
                data-aos="fade-left"
                data-aos-offset="200"
                className="order-1 md:order-2 md:flex md:basis-1/2 md:items-center md:justify-center"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_-25px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
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
          <div className="bg-white px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-7xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
                  Heli & meedia
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink md:w-3/4 md:text-4xl">
                  Terve kooli helisüsteem tarkvaras
                </h2>
              </div>
              <MediaShowcase />
            </div>
          </div>

          {/* ---------- Veebiliides ---------- */}
          <div className="bg-chalk px-6 py-24 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="order-2 flex flex-col md:order-1 md:mt-0 md:basis-1/2 md:px-16"
              >
                <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
                  Veebiliides
                </p>
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink md:text-3xl">
                  Halda koolikellasid igal ajal ja igalt poolt
                </h3>

                <PointsList
                  text={[
                    "Kaugjuhtimine: Muuda ajakavasid, käivita häireid ja juhi raadiot mis tahes brauserist.",
                    "Reaalajas sünkroonimine: Sinu muudatused jõuavad töölauarakendusse kohe.",
                    "Mitme kasutaja tugi: Koolitöötajad logivad sisse ja haldavad süsteemi koos.",
                    "Admin ja litsentsid: Halda kasutajakontosid ja litsentse ühest kohast.",
                  ]}
                />
              </div>

              <div
                data-aos="fade-left"
                data-aos-offset="200"
                className="order-1 md:order-2 md:flex md:basis-1/2 md:items-center md:justify-center"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_50px_-30px_rgba(15,23,42,0.45)] ring-1 ring-ink/10">
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

          {/* ---------- Pilvesünk & töökindlus ---------- */}
          <div className="bg-white px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-screen-xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
                  Töökindlus
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink md:w-3/4 md:text-4xl">
                  Loodud igapäevaseks tööks
                </h2>
              </div>
              <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-4">
                {reliability.map(({ Icon, title, text }, i) => (
                  <div
                    key={title}
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay={150 + i * 100}
                    className="flex flex-col items-center gap-4 text-center"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-chalk ring-1 ring-ink/10">
                      <Icon
                        size={28}
                        strokeWidth={1.75}
                        className="text-brass"
                      />
                    </span>
                    <h4 className="font-display text-lg font-semibold leading-snug text-ink">
                      {title}
                    </h4>
                    <p className="max-w-xs leading-relaxed text-ink/65">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---------- Desktop vs Veeb ---------- */}
          <div className="bg-ink px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-4xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
                  Töölaud ja veeb
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-chalk md:text-4xl">
                  Kaks tööriista, üks litsents
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-chalk/70">
                  Töölauarakendus mängib kellad kohapeal, veebiliides juhib kõike
                  kaugelt.
                </p>
              </div>
              <PlatformCompare />
            </div>
          </div>

          {/* ---------- Feature grid ---------- */}
          <div className="bg-white px-6 py-24 sm:px-8">
            <div className="container mx-auto flex max-w-6xl flex-col items-center justify-center gap-5">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
                Võimalused
              </p>
              <h3 className="text-center font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                E-Kell tarkvara sisaldab
              </h3>
              <div className="mt-8 w-full">
                <PointsComponent />
              </div>
            </div>
          </div>

          {/* ---------- KKK ---------- */}
          <div className="bg-chalk px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 text-center font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
                KKK
              </p>
              <h2 className="mb-16 text-center font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
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
                      "Mille poolest erinevad töölauarakendus ja veebiliides?",
                    secondText:
                      "Töölauarakendus töötab kooli arvutis, mängib kellad ja hoiab andmeid; veebiliides on kaugjuht, mis avaneb igas brauseris — arvutis, tahvlis või telefonis.",
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
                    firstText: "Kuidas litsents toimib ja kas saan enne proovida?",
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
          <div className="bg-ink px-6 py-28 text-center sm:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
                Alusta täna
              </p>
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-chalk md:text-5xl">
                Kõikvõimas koolikell
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-chalk/70">
                Muuda koolipäevad lihtsaks ja turvaliseks.
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
      <Footer></Footer>
    </>
  );
};

export default App;
