import Image from "next/image";
import Accordion from "./Accordion";
import Footer from "./Footer";
import HeaderPrimary from "./HeaderPrimary";
import PointsComponent from "./PointsComponent";
import PointsList from "./PointsList";
import ScrollButton from "./ScrollButton";

const App = () => {
  return (
    <>
      <div className="svg-bg absolute inset-0 left-0 top-0 z-[-1] h-screen w-full"></div>
      <HeaderPrimary />
      <div className="relative overflow-x-hidden">
        <main className="z-50">
          <div className="bg-transparent">
            <div className="container mx-auto flex max-w-screen-xl flex-col justify-center p-8 md:flex-row md:justify-start">
              <div
                className="flex flex-col gap-8 md:w-1/2"
                data-aos="fade-right"
              >
                <h1 className="items-center justify-center text-5xl font-bold leading-tight tracking-tight text-slate-100 md:w-1/2 lg:text-6xl">
                  Kõikvõimas koolikell
                </h1>
                <p className="text-xl text-slate-100">
                  Muuda koolipäevad lihtsaks ja turvaliseks!
                </p>
                <ScrollButton />
              </div>
              <div className="mt-12 w-full overflow-visible md:ml-4 md:mt-0">
                <Image
                  width={1000}
                  height={800}
                  alt="Koolikell"
                  data-aos="fade-left"
                  className="object-contain md:absolute md:h-[424px]"
                  src="/heading2.png"
                />
              </div>
            </div>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="z-50 -mt-20 md:pt-20"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                fill="#ffffff"
              ></path>
            </svg>
          </div>
          <div className="bg-white pb-32">
            <div
              className="container z-50 mx-auto -mt-1 flex max-w-screen-xl flex-col items-center justify-center space-y-8 px-4 pt-24 md:px-0 md:pt-0 lg:px-8"
              data-aos="fade-up"
              data-aos-offset="200"
            >
              <h1 className="text-center text-2xl font-bold text-slate-800 md:w-2/3 lg:whitespace-nowrap lg:text-3xl">
                E-Kell, teie nutikas koolikellade ja häiresüsteemide lahendus!
              </h1>
              <p className="prose prose-lg mx-auto max-w-none text-center text-slate-800/80 md:w-2/3">
                KooliTech E-Kell tarkvara automatiseerib ajamahukad ülesanded,
                pakkudes tõhusa lahenduse tunniplaanide ja koolikellade
                juhtimiseks. See kaugjuhitav ja paindlik süsteem lihtsustab
                koolikorraldust, muutes õpetajate töö stressivabaks ja
                efektiivseks.
              </p>
            </div>
          </div>

          <div id="scroll-to-div" className="bg-slate-100 px-8 py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="max-md:mb-8 md:flex md:basis-1/2 md:items-center"
              >
                <Image
                  width={1280}
                  height={800}
                  className="object-contain"
                  src="/desktop.png"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                className="flex flex-col text-slate-800 md:mt-0 md:basis-1/2 md:px-24"
              >
                <p className="mb-8 text-sm font-bold uppercase text-blue-500">
                  Lihtne, Nutikas ja Võimas
                </p>
                <h3 className="w-full text-2xl font-bold md:text-3xl">
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

          <div className="bg-white px-8 py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="order-2 flex flex-col text-slate-800 md:order-1 md:mt-0 md:basis-1/2 md:px-24"
              >
                <p className="mb-8 text-sm font-bold uppercase text-blue-500">
                  veebiliides
                </p>
                <h3 className="w-full text-2xl font-bold md:text-3xl">
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
                className="order-1 max-md:mb-8 md:order-2 md:flex md:basis-1/2 md:items-center"
              >
                <Image
                  width={1280}
                  height={800}
                  className="object-contain"
                  src="/web.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-100 px-8 py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="max-md:mb-8 md:flex md:basis-1/2 md:items-center"
              >
                <Image
                  width={1280}
                  height={800}
                  className="object-contain"
                  src="/alarm.png"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                className="flex flex-col text-slate-800 md:mt-0 md:basis-1/2 md:px-24"
              >
                <p className="mb-8 text-sm font-bold uppercase text-blue-500">
                  Nutikad funktsioonid koolidele
                </p>
                <h3 className="w-full text-2xl font-bold md:text-3xl">
                  Rohkem kui lihtsalt koolikellade planeerija
                </h3>

                <PointsList
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

          <div className="bg-white px-8 py-24">
            <div className="container mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 text-slate-800">
              <p className="text-sm font-bold uppercase text-blue-500 md:text-center">
                võimalused
              </p>
              <h3 className="text-center text-4xl font-bold tracking-tight">
                E-Kell tarkvara sisaldab
              </h3>
              <PointsComponent />
            </div>
          </div>

          <div className="bg-slate-100 px-8 py-24">
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-center font-semibold uppercase text-blue-500">
                FAQ
              </p>
              <h1 className="mb-24 text-center text-4xl font-bold text-slate-800">
                Korduma kippuvad küsimused
              </h1>
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
          <div className="bg-white px-8 py-32">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-10 text-center">
              <h2 className="text-5xl font-extrabold">Kõikvõimas koolikell</h2>
              <p className="prose prose-base">
                Muuda koolipäevad lihtsaks ja turvaliseks!
              </p>
              <a
                href="/contact"
                className="rounded-lg bg-blue-500 px-8 py-4 font-semibold text-slate-100 duration-200 hover:bg-blue-500/50"
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
