import { DownloadCloud, RefreshCw, WifiOff } from "lucide-react";
import Image from "next/image";
import Accordion from "./Accordion";
import Footer from "./Footer";
import HeaderPrimary from "./HeaderPrimary";
import MediaShowcase from "./MediaShowcase";
import PlatformCompare from "./PlatformCompare";
import PointsComponent from "./PointsComponent";
import PointsList from "./PointsList";
import ScrollButton from "./ScrollButton";
import SystemRequirements from "./SystemRequirements";
import TimeRail from "./TimeRail";

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
          <section className="ruled-paper relative overflow-hidden bg-surface">
            <div className="relative mx-auto max-w-screen-xl px-6 pb-24 pt-12 sm:px-8 md:pt-20">
              <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted">
                    E-Kell · koolikellade süsteem
                  </p>
                  <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                    Kõikvõimas
                    <br />
                    <span className="text-primary">koolikell</span>
                  </h1>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                    Muuda koolipäevad lihtsaks ja turvaliseks. Halda kellasid,
                    tunniplaane ja häireid — ühest kohast, igast seadmest.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <ScrollButton />
                    <a
                      href="https://dashboard.koolitech.ee"
                      className="text-sm font-semibold text-primary underline-offset-4 hover:text-primary-hover hover:underline"
                    >
                      E-Kell Web →
                    </a>
                    <a
                      href="/ekell/docs"
                      className="text-sm font-semibold text-primary underline-offset-4 hover:text-primary-hover hover:underline"
                    >
                      Dokumentatsioon →
                    </a>
                  </div>
                  <div className="mt-14">
                    <TimeRail />
                  </div>
                </div>

                <div className="relative">
                  <div className="relative overflow-hidden rounded-xl border border-line bg-card shadow-sm">
                    <Image
                      width={1920}
                      height={1030}
                      alt="E-Kell töölauarakenduse peavaade"
                      className="h-auto w-full object-cover"
                      src="/assets/desktop/toolaud.png"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Intro band ---------- */}
          <div className="bg-card px-6 py-24 sm:px-8">
            <div
              className="container mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-6 text-center"
              data-aos="fade-up"
              data-aos-offset="200"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Tarkvara koolidele
              </p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink md:w-3/4 md:text-4xl">
                E-Kell, teie nutikas koolikellade ja häiresüsteemide lahendus
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-muted">
                Automatiseeri koolikellad ja tunniplaanid, halda häireid ning
                juhi kõike kaugelt — üks süsteem kogu koolipäeva jaoks.
              </p>
            </div>
          </div>

          {/* ---------- Ajakavad & tunniplaanid ---------- */}
          <div id="scroll-to-div" className="bg-surface px-6 py-24 sm:px-8">
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
                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
                  Tunniplaanid
                </p>
                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-ink md:text-3xl">
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
          <div className="bg-primary-tint px-6 py-24 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="order-2 flex flex-col md:order-1 md:mt-0 md:basis-1/2 md:px-16"
              >
                <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
                  Häiresüsteem
                </p>
                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-ink md:text-3xl">
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
                <div className="overflow-hidden rounded-xl border border-line bg-card shadow-sm">
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
          <div className="bg-card px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-7xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Heli & meedia
                </p>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink md:w-3/4 md:text-4xl">
                  Terve kooli helisüsteem tarkvaras
                </h2>
              </div>
              <MediaShowcase />
            </div>
          </div>

          {/* ---------- Veebiliides ---------- */}
          <div className="bg-surface px-6 py-24 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="order-2 flex flex-col md:order-1 md:mt-0 md:basis-1/2 md:px-16"
              >
                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
                  Veebiliides
                </p>
                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-ink md:text-3xl">
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
                <div className="overflow-hidden rounded-xl border border-line bg-card shadow-sm">
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
          <div className="bg-card px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-screen-xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Töökindlus
                </p>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink md:w-3/4 md:text-4xl">
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
                    <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary-tint">
                      <Icon
                        size={28}
                        strokeWidth={1.75}
                        className="text-primary"
                      />
                    </span>
                    <h4 className="text-lg font-semibold leading-snug text-ink">
                      {title}
                    </h4>
                    <p className="max-w-xs leading-relaxed text-muted">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---------- Desktop vs Veeb ---------- */}
          <div className="bg-primary-tint px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-4xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Töölaud ja veeb
                </p>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                  Kaks tööriista, üks litsents
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-muted">
                  Töölauarakendus mängib kellad kohapeal, veebiliides juhib kõike
                  kaugelt.
                </p>
              </div>
              <PlatformCompare />
            </div>
          </div>

          {/* ---------- Süsteeminõuded ---------- */}
          <div className="bg-surface px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-3xl">
              <div
                className="flex flex-col items-center gap-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Süsteeminõuded
                </p>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                  Kas kooli arvuti sobib?
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-muted">
                  Töölauarakendus töötab tavalises Windowsi arvutis, mis jääb
                  koolis sisse lülitatuks. Nõuded on väikesed — enamik
                  olemasolevaid arvuteid sobib.
                </p>
              </div>
              <div className="mt-14">
                <SystemRequirements />
              </div>
            </div>
          </div>

          {/* ---------- Feature grid ---------- */}
          <div className="bg-card px-6 py-24 sm:px-8">
            <div className="container mx-auto flex max-w-6xl flex-col items-center justify-center gap-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Võimalused
              </p>
              <h3 className="text-center text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                E-Kell tarkvara sisaldab
              </h3>
              <div className="mt-8 w-full">
                <PointsComponent />
              </div>
            </div>
          </div>

          {/* ---------- KKK ---------- */}
          <div className="bg-surface px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-primary">
                KKK
              </p>
              <h2 className="mb-16 text-center text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
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
          <div className="bg-primary-tint px-6 py-28 text-center sm:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Alusta täna
              </p>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
                Kõikvõimas koolikell
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-muted">
                Muuda koolipäevad lihtsaks ja turvaliseks.
              </p>
              <a
                href="/contact"
                className="mt-2 rounded-lg bg-primary px-8 py-3.5 font-semibold text-on-primary transition duration-150 hover:bg-primary-hover"
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
