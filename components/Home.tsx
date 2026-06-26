import Image from "next/image";
import Accordion from "./Accordion";
import Footer from "./Footer";
import HeaderPrimary from "./HeaderPrimary";
import PointsComponent from "./PointsComponent";
import PointsList from "./PointsList";
import ScrollButton from "./ScrollButton";
import TimeRail from "./TimeRail";

const App = () => {
  return (
    <>
      <HeaderPrimary />
      <div className="relative overflow-x-hidden">
        <main className="z-50">
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
                    <div className="flex items-center gap-1.5 border-b border-ink/5 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-brass/60" />
                      <span className="ml-3 font-mono text-[11px] text-ink/40">
                        e-kell · töölaud
                      </span>
                    </div>
                    <Image
                      width={1000}
                      height={800}
                      alt="E-Kell töölauarakendus"
                      className="h-auto w-full object-cover"
                      src="/heading2.png"
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
                KooliTech E-Kell tarkvara automatiseerib ajamahukad ülesanded,
                pakkudes tõhusa lahenduse tunniplaanide ja koolikellade
                juhtimiseks. See kaugjuhitav ja paindlik süsteem lihtsustab
                koolikorraldust, muutes õpetajate töö stressivabaks ja
                efektiivseks.
              </p>
            </div>
          </div>

          <div id="scroll-to-div" className="bg-chalk px-6 py-24 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="md:flex md:basis-1/2 md:items-center md:justify-center"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_50px_-30px_rgba(15,23,42,0.45)] ring-1 ring-ink/10">
                  <Image
                    width={1280}
                    height={800}
                    className="h-auto w-full object-contain"
                    src="/desktop.png"
                    alt="E-Kell töölauarakenduse tunniplaani vaade"
                  />
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                className="flex flex-col md:mt-0 md:basis-1/2 md:px-16"
              >
                <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
                  Lihtne, nutikas ja võimas
                </p>
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink md:text-3xl">
                  Uus tase koolikellade haldamises
                </h3>

                <PointsList
                  text={[
                    "Mugav ajastamine: Loo erinevaid ajakavasid (tavaline nädal, pühadenädal, eriüritused) ja lülita neid kiiresti.",
                    "Lihtne ja arusaadav: Moodsalt kujundatud kasutajaliides, mida saab kasutada igaüks, ilma tehniliste teadmisteta.",
                    "Tark automatiseerimine: Süsteem haldab koolikelli iseseisvalt, et saaksid keskenduda olulisemale.",
                    "Ühendatud ja paindlik: Veebiklient võimaldab ajakavasid hallata kaugelt ja igast seadmest.",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="bg-white px-6 py-24 sm:px-8">
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
                    "Täielik kontroll kõikjal: Kohanda kavasid, seadista alarme ja juhi ajakavasid mis tahes veebibrauserist, arvutist või nutitelefonist.",
                    "Reaalajas sünkroonimine: Sinu tehtud muudatused saadetakse koheselt töölauarakendusse ja rakenduvad hetkega.",
                    "Mitme kasutaja tugi: Koolitöötajad saavad ajakavasid mugavalt koos hallata.",
                    "Turvaline ja kaitstud: Krüpteeritud andmeedastus hoiab sinu ajakavad kindlalt kaitstud.",
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
                    width={1280}
                    height={800}
                    className="h-auto w-full object-contain"
                    src="/web.png"
                    alt="E-Kell veebiliides brauseris"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-ink px-6 py-24 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="md:flex md:basis-1/2 md:items-center md:justify-center"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_-25px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
                  <Image
                    width={1280}
                    height={800}
                    className="h-auto w-full object-contain"
                    src="/alarm.png"
                    alt="E-Kell häiresüsteemi juhtpaneel"
                  />
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                className="flex flex-col md:mt-0 md:basis-1/2 md:px-16"
              >
                <p className="mb-5 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-signal" />
                  Häiresüsteem
                </p>
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-chalk md:text-3xl">
                  Rohkem kui lihtsalt koolikellade planeerija
                </h3>

                <PointsList
                  tone="dark"
                  text={[
                    "Häiresüsteem: Võimaldab operatiivselt aktiveerida tulekahju-, evakuatsiooni- või muid häiresignaale otse tarkvarast, tagades kiire reageerimise eriolukordades.",
                    "Häälsalvestus ja taasesitus: Salvesta olulised teadaanded otse tarkvaras ning esita need automaatselt või käsitsi.",
                    "Automaatne uuendamine: Tarkvara püsib alati ajakohane – saad alati uusimad funktsioonid ja parimad turvauuendused.",
                    "Kohandatavad koolikella helid: Kasuta enda helifaile koolikelladena! Vali muusikapalad või muud helid, et muuta koolikella süsteem ainulaadseks ja õpilastele meeldivamaks.",
                  ]}
                />
              </div>
            </div>
          </div>

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
                    firstText: "Kuidas paigaldada E-Kella tarkvara?",
                    secondText:
                      "Paigaldusprotsess on lihtne ja nõuab vaid mõne nupu vajutamist. Järgige paigaldusjuhiseid meie veebisaidil.",
                  },
                  {
                    firstText: "Kas E-Kell töötab kõikides seadmetes?",
                    secondText:
                      "Jah, meie tarkvara on ühilduv arvutite, tahvelarvutite ja nutitelefonidega.",
                  },
                  {
                    firstText: "Kuidas saab tarkvara kaugelt juhtida?",
                    secondText:
                      "Kaugjuhtimine on võimalik veebiliidese kaudu, mis tagab ligipääsu kõikjal, kus on internetiühendus.",
                  },
                  {
                    firstText:
                      "Kas on võimalik seadistada erinevaid häireliike?",
                    secondText:
                      "Jah, tarkvaras on mitu nuppu erinevate ohuliikide häirete käivitamiseks.",
                  },
                  {
                    firstText: "Kuidas kohandada heliaegu ja kestusi?",
                    secondText:
                      "Heliaegu ja kestusi saab kohandada tarkvara seadete menüüs vastavalt kooli vajadustele.",
                  },
                  {
                    firstText: "Kas tarkvara uuendused on automaatsed?",
                    secondText:
                      "Jah, kõik uuendused toimuvad automaatselt ja kasutajad saavad alati kõige värskema versiooni.",
                  },
                  {
                    firstText:
                      "Kas on võimalik proovida tarkvara enne ostmist?",
                    secondText:
                      "Jah, pakume tasuta prooviperioodi, et saaksite tutvuda tarkvara funktsioonidega.",
                  },
                  {
                    firstText: "Kas klienditugi on saadaval?",
                    secondText:
                      "Meie pühendunud tugitiim on alati valmis abistama ja lahendama kõiki küsimusi kiiresti ja tõhusalt. Võtke meiega ühendust e-posti või telefoni teel.",
                  },
                ]}
              ></Accordion>
            </div>
          </div>
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
