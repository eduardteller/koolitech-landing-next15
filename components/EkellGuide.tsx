import {
  checklist,
  desktopLegend,
  desktopMenu,
  features,
  installSteps,
  phoneShots,
  planSteps,
  webLegend,
  webMenu,
  webNotice,
  webSteps,
  type Feature,
} from "@/content/ekell-guide";
import type { DocSection } from "@/lib/docs-toc";
import { ArrowRight, BookOpen, Check, Download, Speaker } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "./CtaBand";
import DocsSidebar from "./DocsSidebar";
import Footer from "./Footer";
import MenuLegend from "./guide/MenuLegend";
import Rich from "./guide/Rich";
import Screenshot from "./guide/Screenshot";
import { SoundOutput } from "./guide/Sketches";
import Steps, { StepBody, StepMedia } from "./guide/Steps";
import HeaderPrimary from "./HeaderPrimary";

// Sidebar entries; each id is on its section's heading.
const sections: DocSection[] = [
  { id: "riistvara", title: "Arvuti ja heli" },
  { id: "paigaldus", title: "Paigaldus" },
  { id: "toolaud", title: "Töölauarakendus" },
  { id: "esimene-plaan", title: "Esimene plaan" },
  { id: "veeb", title: "E-Kell Web" },
  { id: "funktsioonid", title: "Funktsioonid lühidalt" },
];

// Docs sections the guide skips; ids are rehype-slug's for their headings.
const docsLinks = [
  { id: "tõrkeotsing", label: "Tõrkeotsing" },
  { id: "mp3-helifailid", label: "MP3-helifailid" },
  { id: "kontakt", label: "Sõnum KooliTechile rakendusest" },
  { id: "e-kell-web", label: "E-Kell Web ja haldus" },
];

const heroWindow = {
  src: "/assets/guide/desktop/toolaud.webp",
  width: 2560,
  height: 1600,
  alt: "E-Kella töölaud: tänane ajakava, aktiivne plaan ja plaanide ülevaade",
  frame: "window" as const,
};

const SectionHead = ({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) => (
  <>
    <p className="text-kicker mb-4 text-xs font-semibold tracking-widest uppercase">
      {kicker}
    </p>
    <h2
      id={id}
      className="text-ink scroll-mt-28 text-3xl leading-tight font-semibold tracking-tight md:text-4xl"
    >
      {title}
    </h2>
    {children && (
      <div className="text-muted mt-5 max-w-2xl text-lg leading-relaxed">
        {children}
      </div>
    )}
  </>
);

const SubHead = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-ink mt-16 text-xl leading-snug font-semibold tracking-tight">
    {children}
  </h3>
);

const FeatureCard = ({ feature }: { feature: Feature }) => (
  <article className="border-line bg-surface flex flex-col overflow-hidden rounded-xl border shadow-sm">
    <div className="border-line bg-ground aspect-[16/10] overflow-hidden border-b">
      <Image
        src={feature.shot.src}
        width={feature.shot.width}
        height={feature.shot.height}
        alt={feature.shot.alt}
        sizes="(min-width: 640px) 384px, 100vw"
        className="h-full w-full object-cover object-top-left"
      />
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-ink text-lg leading-snug font-semibold">
        {feature.title}
      </h3>
      <p className="text-muted mt-2 leading-relaxed">{feature.text}</p>
      <ul className="mt-4 flex flex-col gap-2 text-sm">
        {feature.how.map((line) => (
          <li key={line} className="flex items-start gap-2.5">
            <Check
              size={16}
              strokeWidth={2.5}
              aria-hidden="true"
              className="text-accent mt-0.5 shrink-0"
            />
            <span className="text-muted leading-relaxed">
              <Rich text={line} />
            </span>
          </li>
        ))}
      </ul>
      <Link
        href={`/ekell/docs#${feature.docs}`}
        className="text-accent mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold underline-offset-4 hover:underline"
      >
        Loe lähemalt
        <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
      </Link>
    </div>
  </article>
);

const EkellGuide = () => {
  return (
    <>
      <HeaderPrimary />
      {/* clip, not hidden: hidden would make this the scroll container
          and stop the sidebar from sticking */}
      <div className="relative overflow-x-clip">
        <main>
          {/* ---------- Hero ---------- */}
          <section className="ruled-paper bg-ground">
            <div className="mx-auto grid max-w-screen-xl items-center gap-14 px-6 pt-12 pb-20 sm:px-8 md:pt-20 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-muted mb-6 text-xs font-semibold tracking-widest uppercase">
                  E-Kell · kiirjuhend
                </p>
                <h1 className="text-ink text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
                  Kuidas <span className="text-accent">E-Kella</span>{" "}
                  kasutada
                </h1>
                <p className="text-muted mt-6 max-w-lg text-lg leading-relaxed">
                  Paigalda E-Kell kooli arvutisse, ühenda see helisüsteemiga ja
                  halda kellasid ka veebist. Selleks kulub umbes kümme minutit.
                </p>

                <div className="border-line bg-surface mt-8 max-w-lg rounded-xl border p-5 shadow-sm">
                  <p className="text-ink text-sm font-semibold">
                    Enne alustamist on vaja
                  </p>
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {checklist.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          size={18}
                          strokeWidth={2.5}
                          aria-hidden="true"
                          className="text-accent mt-0.5 shrink-0"
                        />
                        <span className="text-muted text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/ekell/laadi-alla"
                    className="bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active inline-flex items-center gap-2.5 rounded-lg px-6 py-3 font-semibold transition duration-150"
                  >
                    <Download size={18} strokeWidth={2} aria-hidden="true" />
                    Laadi alla
                  </Link>
                  <a
                    href="https://dashboard.koolitech.ee"
                    className="border-ink text-ink hover:bg-primary-tint rounded-lg border px-6 py-3 font-semibold transition"
                  >
                    Ava E-Kell Web
                  </a>
                </div>
              </div>

              {/* The desktop app with the web on a phone in front of it:
                  the two halves this guide sets up. */}
              <div className="relative pr-10 pb-12 sm:pr-16">
                <Screenshot
                  shot={heroWindow}
                  priority
                  sizes="(min-width: 1024px) 640px, 100vw"
                />
                <div className="absolute right-0 bottom-0 w-[26%] max-w-40 min-w-24">
                  <Screenshot shot={phoneShots[0]} sizes="160px" />
                </div>
              </div>
            </div>
          </section>

          <div className="mx-auto flex max-w-screen-xl flex-col px-6 pt-16 pb-24 sm:px-8 lg:flex-row lg:gap-12">
            <DocsSidebar sections={sections} title="Kiirjuhend" />

            <div className="max-w-3xl min-w-0 flex-1">
              {/* ---------- Arvuti ja heli ---------- */}
              <section>
                <SectionHead
                  id="riistvara"
                  kicker="Riistvara"
                  title="Arvuti ja kooli helisüsteem"
                >
                  <p>
                    E-Kell mängib kellad, häired ja teated selle arvuti kaudu,
                    kuhu töölauarakendus on paigaldatud. Seepärast peab see
                    arvuti olema ühendatud kooli helisüsteemiga.
                  </p>
                </SectionHead>

                <div className="border-primary-line bg-primary-tint mt-10 grid gap-8 rounded-xl border p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_17rem] md:items-center">
                  <div>
                    <p className="text-ink flex items-start gap-2.5 text-lg leading-snug font-semibold">
                      <Speaker
                        size={22}
                        strokeWidth={2}
                        aria-hidden="true"
                        className="text-accent mt-0.5 shrink-0"
                      />
                      Helisüsteem peab olema Windowsis heliväljund
                    </p>
                    <p className="text-muted mt-3 leading-relaxed">
                      E-Kell mängib heli sama seadme kaudu, mida Windows
                      kasutab. Ava Windowsis{" "}
                      <Rich text="**Sätted → Süsteem → Heli**" /> ja vaata
                      väljundite loendit.
                    </p>
                    <p className="text-muted mt-3 leading-relaxed">
                      Kui kooli helisüsteem on loendis ja Windows mängib heli
                      selle kaudu, saab seda kasutada ka E-Kell.
                    </p>
                  </div>
                  <SoundOutput />
                </div>
              </section>

              {/* ---------- Paigaldus ---------- */}
              <section className="border-line mt-24 border-t pt-20">
                <SectionHead
                  id="paigaldus"
                  kicker="Paigaldus"
                  title="Paigalda E-Kell arvutisse"
                >
                  <p>
                    Need sammud tee kooli arvutis, mis on helisüsteemiga
                    ühendatud. Paigaldus on vaja teha ainult üks kord, edasi
                    uueneb E-Kell ise.
                  </p>
                </SectionHead>
                <Steps steps={installSteps} />
              </section>

              {/* ---------- Töölauarakendus ---------- */}
              <section className="border-line mt-24 border-t pt-20">
                <SectionHead
                  id="toolaud"
                  kicker="Töölauarakendus"
                  title="Tutvu töölauarakendusega"
                >
                  <p>
                    Kõik E-Kella osad on vasakus menüüs. Ülal on igapäevased
                    vaated, all häire, kontakt ja seaded.
                  </p>
                </SectionHead>
                <MenuLegend shot={desktopMenu} items={desktopLegend} />
              </section>

              {/* ---------- Esimene plaan ---------- */}
              <section className="border-line mt-24 border-t pt-20">
                <SectionHead
                  id="esimene-plaan"
                  kicker="Koolikell"
                  title="Loo esimene plaan"
                >
                  <p>
                    Plaan ütleb, millal kell heliseb. Tavaliselt on koolil
                    tavanädala plaan ja lisaks näiteks lühendatud päeva plaan.
                  </p>
                </SectionHead>
                <Steps steps={planSteps} />
              </section>

              {/* ---------- E-Kell Web ---------- */}
              <section className="border-line mt-24 border-t pt-20">
                <SectionHead
                  id="veeb"
                  kicker="E-Kell Web"
                  title="Halda kellasid veebis"
                >
                  <p>
                    E-Kell Web töötab igas brauseris, ka telefonis. Sealt saab
                    muuta plaane, käivitada häireid ja juhtida raadiot ilma
                    kooli arvuti juurde minemata.
                  </p>
                </SectionHead>
                <Steps steps={webSteps} />

                <SubHead>Veebi menüü</SubHead>
                <MenuLegend shot={webMenu} items={webLegend} />

                <div className="border-line bg-surface mt-16 rounded-xl border p-6 sm:p-8">
                  <h3 className="text-ink text-xl leading-snug font-semibold tracking-tight">
                    {webNotice.title}
                  </h3>
                  <StepBody step={webNotice} />
                  <StepMedia step={webNotice} />
                </div>

                <SubHead>Ka telefonis</SubHead>
                <p className="text-muted mt-3 leading-relaxed">
                  Telefonis avaneb menüü vasakul üleval oleva nupuga. Kõik
                  vaated on samad mis arvutis.
                </p>
                <div className="mt-8 flex justify-center gap-6 sm:justify-start sm:gap-10">
                  {phoneShots.map((shot) => (
                    <Screenshot
                      key={shot.src}
                      shot={shot}
                      sizes="208px"
                      className="max-w-[13rem]"
                    />
                  ))}
                </div>
              </section>

              {/* ---------- Funktsioonid ---------- */}
              <section className="border-line mt-24 border-t pt-20">
                <SectionHead
                  id="funktsioonid"
                  kicker="Ülevaade"
                  title="Funktsioonid lühidalt"
                >
                  <p>
                    Lühike ülevaade sellest, mida E-Kell veel teeb. Täpsemad
                    juhised leiad dokumentatsioonist.
                  </p>
                </SectionHead>
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {features.map((feature) => (
                    <FeatureCard key={feature.title} feature={feature} />
                  ))}
                  <article className="border-primary-line bg-primary-tint flex flex-col rounded-xl border p-6">
                    <BookOpen
                      size={28}
                      strokeWidth={1.75}
                      aria-hidden="true"
                      className="text-accent"
                    />
                    <h3 className="text-ink mt-4 text-lg leading-snug font-semibold">
                      Täielik dokumentatsioon
                    </h3>
                    <p className="text-muted mt-2 leading-relaxed">
                      Iga vaate kõik nupud ja valikud, samuti tõrkeotsing, kui
                      midagi ei tööta.
                    </p>
                    <ul className="mt-5 flex flex-col gap-2.5 text-sm">
                      {docsLinks.map(({ id, label }) => (
                        <li key={id}>
                          <Link
                            href={`/ekell/docs#${id}`}
                            className="text-ink font-semibold underline-offset-4 hover:underline"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <Link
                        href="/ekell/docs"
                        className="bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-150"
                      >
                        Ava dokumentatsioon
                        <ArrowRight
                          size={16}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </article>
                </div>
              </section>
            </div>
          </div>

          <CtaBand
            kicker="Klienditugi"
            title="Jäid kuskil hätta?"
            text="Kirjuta või helista meile ja aitame E-Kella tööle saada."
            href="/contact"
            label="Võta ühendust"
          />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default EkellGuide;
