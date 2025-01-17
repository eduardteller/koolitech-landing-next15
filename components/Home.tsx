import { Check } from "lucide-react";
import Image from "next/image";
import Accordion from "./Accordion";
import Footer from "./Footer";
import HeaderPrimary from "./HeaderPrimary";
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
                <h1 className="items-center justify-center text-6xl font-bold leading-tight tracking-tight text-slate-100 md:w-1/2">
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
              className="container z-50 mx-auto -mt-1 flex max-w-screen-xl flex-col items-center justify-center space-y-8 px-8 pt-24 md:px-0 md:pt-0"
              data-aos="fade-up"
            >
              <h1 className="whitespace-nowrap text-center text-3xl font-bold text-slate-800 md:w-2/3">
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

          <div className="bg-slate-100 px-8 py-24">
            <div
              className="mx-auto flex max-w-7xl flex-col items-center justify-center md:flex-row"
              id="scroll-to-div"
            >
              <div
                data-aos="fade-right"
                className="md:flex md:h-[560px] md:w-1/2 md:items-center md:justify-start"
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
                className="mt-16 flex flex-col text-slate-800 md:mt-0 md:w-1/2"
              >
                <h3 className="text-3xl font-bold md:w-2/3 md:self-center">
                  E-Kell tarkvara peamised võimalused:
                </h3>

                <ul className="prose prose-base mt-8 text-slate-800/80 md:w-2/3 md:self-center">
                  <li className="pl-0">
                    <Check className="inline text-green-500" /> Tunniplaanid:
                    Mugav ja kiire koolikellade haldamine, võimaldab täpselt
                    ajastada tunnialguseid ja -lõppe.
                  </li>
                  <li className="pl-0">
                    <Check className="inline text-green-500" /> Kaugelt
                    haldamine: Tarkvara saab hallata kõikjalt, näiteks
                    puhkuselt. Kaugjuhtimine hõlmab endas tunniplaanide muutmist
                    ja häire käivitamist
                  </li>
                  <li className="pl-0">
                    <Check className="inline text-green-500" /> Häiresüsteem:
                    Võimaldab koolis häireid ja hädaolukorra signaale kaugelt
                    juhtida.
                  </li>
                  <li className="pl-0">
                    <Check className="inline text-green-500" /> Kohandatud
                    helid: Võimalus lisada ja kasutada oma helifaile vastavalt
                    vajadusele.
                  </li>
                </ul>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="container mx-auto mt-16 flex items-center justify-center md:mt-0"
            >
              <a
                href="/contact"
                id="btn-buy-1"
                className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-slate-100 transition duration-100 hover:bg-opacity-50"
              >
                Telli nüüd
              </a>
            </div>
          </div>

          <div className="bg-white px-8 py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center md:flex-row">
              <div
                data-aos="fade-right"
                className="order-2 mt-16 flex flex-col text-slate-800 md:order-1 md:mt-0 md:w-1/2"
              >
                <h3 className="text-3xl font-bold md:w-2/3 md:self-center">
                  E-Kell veebiliides
                </h3>

                <ul className="prose prose-base mt-8 list-none text-slate-800/80 md:w-2/3 md:self-center">
                  <li className="pl-0">
                    <Check className="inline text-green-500" /> Lihtne
                    juurdepääs: Saate tarkvara juhtida kõikjalt, kus on
                    internetiühendus.
                  </li>
                  <li className="pl-0">
                    <Check className="inline text-green-500" /> Reaalajas
                    haldamine: Muudatused rakenduvad koheselt, tagades sujuva ja
                    kiire töökorralduse.
                  </li>
                  <li className="pl-0">
                    <Check className="inline text-green-500" /> Kasutajasõbralik
                    liides: Intuitiivne ja hõlpsasti kasutatav, sobib igas
                    vanuses kasutajatele.
                  </li>
                  <li className="pl-0">
                    <Check className="inline text-green-500" /> Mitme seadme
                    tugi: Töötab nii arvutis, tahvelarvutis kui ka
                    nutitelefonis, pakkudes maksimaalset paindlikkust.
                  </li>
                </ul>
              </div>
              <div
                data-aos="fade-left"
                className="order-1 md:order-2 md:flex md:h-[560px] md:w-1/2 md:items-center"
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
            <div
              data-aos-delay="100"
              data-aos="fade-up"
              className="container mx-auto mt-16 flex items-center justify-center md:mt-0"
            >
              <a
                href="/contact"
                id="btn-buy-2"
                className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-slate-100 transition duration-100 hover:bg-opacity-50"
              >
                Vajame seda
              </a>
            </div>
          </div>

          <div className="bg-slate-100 px-8 py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center md:flex-row">
              <div
                data-aos="fade-right"
                className="md:flex md:h-[560px] md:w-1/2 md:items-center"
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
                className="mt-16 flex flex-col text-slate-800 md:mt-0 md:w-1/2"
              >
                <h3 className="text-3xl font-bold md:w-2/3 md:self-center">
                  E-Kell häiresüsteem
                </h3>

                <ul className="prose prose-base mt-8 list-none text-slate-800/80 md:w-2/3 md:self-center">
                  <li className="pl-0">
                    <Check className="inline text-green-500" /> Erinevad
                    ohuliigid: Erinevate nuppude abil saab kiiresti edastada
                    täpse ohuteate.
                  </li>
                  <li className="pl-0">
                    <Check className="inline text-green-500" /> Lihtne
                    kasutamine: Nupu vajutamisega saab koheselt käivitada häire.
                  </li>
                  <li className="pl-0">
                    <Check className="inline text-green-500" /> Kaugjuhtimine:
                    Häiret saab käivitada veebiliidese kaudu, võimaldades kiiret
                    reageerimist ka eemalt.
                  </li>
                  <li className="pl-0">
                    <Check className="inline text-green-500" /> Kohandatavus:
                    Võimalus luua ja hallata eri tüüpi häireid vastavalt
                    vajadusele.
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="container mx-auto mt-16 flex items-center justify-center md:mt-0"
            >
              <a
                href="/contact"
                id="btn-buy-3"
                className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-slate-100 transition duration-100 hover:bg-opacity-50"
              >
                Kirjuta meile
              </a>
            </div>
          </div>

          <div className="bg-white px-8 py-24">
            <div className="container mx-auto flex max-w-6xl flex-col items-center justify-center text-slate-800">
              <h3 className="mb-8 text-center text-4xl font-bold tracking-tight">
                E-Kell tarkvara sisaldab
              </h3>
              <div className="flex w-full flex-wrap items-center justify-start">
                <div
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="mt-16 flex w-full flex-col items-center gap-4 px-16 text-center md:w-1/3"
                >
                  <div className="text-7xl">📅</div>
                  <h4 className="text-2xl font-bold">
                    Automaatne tunniplaanide haldus
                  </h4>
                  <p className="prose prose-base text-slate-800/80">
                    Lihtne ja kiire ajakava koostamine.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="250"
                  className="mt-16 flex w-full flex-col items-center gap-4 px-16 text-center md:w-1/3"
                >
                  <div className="text-7xl">🌍</div>
                  <h4 className="text-2xl font-bold">Kaugjuhtimine</h4>
                  <p className="prose prose-base text-slate-800/80">
                    Võimalus juhtida kõiki funktsioone veebiliidese kaudu.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="350"
                  className="mt-16 flex w-full flex-col items-center gap-4 px-16 text-center md:w-1/3"
                >
                  <div className="text-7xl">🚨</div>
                  <h4 className="text-2xl font-bold">Häiresüsteem</h4>
                  <p className="prose prose-base text-slate-800/80">
                    Erinevate ohuliikide häirete käivitamine.
                  </p>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="450"
                  className="mt-16 flex w-full flex-col items-center gap-4 px-16 text-center md:w-1/3"
                >
                  <div className="mb-4 text-7xl">⚙️</div>
                  <h4 className="text-2xl font-bold">
                    Paindlik kella seadistus
                  </h4>
                  <p className="prose prose-base text-slate-800/80">
                    Kohandatavad heliajad ja kestused.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="550"
                  className="mt-16 flex w-full flex-col items-center gap-4 px-16 text-center md:w-1/3"
                >
                  <div className="mb-4 text-7xl">👌</div>
                  <h4 className="text-2xl font-bold">
                    Kasutajasõbralik liides
                  </h4>
                  <p className="prose prose-base text-slate-800/80">
                    Intuitiivne ja hõlpsasti kasutatav.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="650"
                  className="mt-16 flex w-full flex-col items-center gap-4 px-16 text-center md:w-1/3"
                >
                  <div className="mb-4 text-7xl">📩</div>
                  <h4 className="text-2xl font-bold">Klienditugi</h4>
                  <p className="prose prose-base text-slate-800/80">
                    Meie tiim on alati valmis abistama ja lahendama kõiki Teie
                    küsimusi ning probleeme.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 px-8 py-24">
            <div className="mx-auto max-w-3xl">
              {/* <p className="mb-8 text-center font-medium text-green-500">FAQ</p> */}
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
