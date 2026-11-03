/* Copy and screenshots for /ekell/kuidas-kasutada, the quick start guide.
   Layout lives in components/EkellGuide.tsx; this file is the words.

   In any text, **Seaded** renders bold: use it for what people see on
   screen (menu items, buttons, fields), so they can match it.

   Screenshots are in public/assets/guide/, taken at 2x from the real
   app on a demo school ("naidiskool") with a light theme. width and
   height are the file's pixels. Marker x/y are percentages of the
   image; x: 100 puts the badge on the right edge. */

export type Marker = { n: number; x: number; y: number };

export type Shot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** window: desktop app, browser: E-Kell Web, dialog: a cut-out modal,
      phone: a phone screen, plain: a small crop with a border. */
  frame: "window" | "browser" | "dialog" | "phone" | "plain";
  /** Caps the rendered width, for tall or small crops. */
  maxWidth?: string;
  markers?: Marker[];
  /** Shown under the image when shots sit side by side. */
  caption?: string;
};

/** Drawn illustrations for what a dev build cannot screenshot. */
export type Sketch = "smartscreen" | "tray" | "sound-output";

export type Step = {
  title: string;
  text: string[];
  /** A note under the text, e.g. what to do when it goes wrong. */
  note?: string;
  shots?: Shot[];
  sketch?: Sketch;
  action?: { href: string; label: string };
};

export type LegendItem = { n: number; title: string; text: string };

export type Feature = {
  title: string;
  text: string;
  how: string[];
  shot: Shot;
  /** Section of /ekell/docs with the full instructions. */
  docs: string;
};

const desktop = (
  name: string,
  alt: string,
  extra: Partial<Shot> = {},
): Shot => ({
  src: `/assets/guide/desktop/${name}.webp`,
  width: 2560,
  height: 1600,
  alt,
  frame: "window",
  ...extra,
});

const web = (name: string, alt: string, extra: Partial<Shot> = {}): Shot => ({
  src: `/assets/guide/web/${name}.webp`,
  width: 2880,
  height: 1800,
  alt,
  frame: "browser",
  ...extra,
});

/* ---------- Enne alustamist ---------- */

export const checklist = [
  "Windowsi arvuti, mis on ühendatud kooli helisüsteemiga",
  "Internetiühendus",
  "Litsentsivõti ning E-Kell Webi kasutajanimi ja salasõna. Need saad KooliTechilt.",
];

/* ---------- Paigaldus ---------- */

export const installSteps: Step[] = [
  {
    title: "Laadi alla paigaldusfail",
    text: [
      "Laadi E-Kella Windowsi paigaldusfail alla sellesse arvutisse, mis on ühendatud kooli helisüsteemiga.",
    ],
    action: { href: "/ekell/laadi-alla", label: "Ava allalaadimise leht" },
  },
  {
    title: "Käivita paigaldusfail",
    text: [
      "Tee allalaaditud failil topeltklõps. Paigaldus käib iseenesest ja E-Kell avaneb.",
      "Kui Windows näitab teadet „Windows kaitses teie arvutit“, vali **Lisateave** ja siis **Käivita siiski**.",
    ],
    sketch: "smartscreen",
  },
  {
    title: "Sisesta litsentsivõti",
    text: [
      // Non-breaking hyphens keep the key format on one line.
      "Esimesel käivitusel küsib E-Kell litsentsivõtit. Sisesta see kujul XXXXX‑XXXXX‑XXXXX‑XXXXX ja vajuta **Jätka**.",
    ],
    note: "Kui võti ei sobi, ütleb E-Kell põhjuse: võti on vale, litsents on aegunud või serveriga pole ühendust.",
    shots: [
      {
        src: "/assets/guide/desktop/litsents.webp",
        width: 1000,
        height: 720,
        alt: "E-Kella litsentsivõtme aken, väljale on sisestatud litsentsivõti",
        frame: "window",
        maxWidth: "28rem",
      },
    ],
  },
  {
    title: "Kontrolli serveriühendust",
    text: [
      "Pärast võtme kinnitamist avaneb **Töölaud**. Vasakul üleval olev kast näitab, kas rakendus on serveriga ühendatud.",
    ],
    shots: [
      {
        src: "/assets/guide/desktop/uhendus-ok.webp",
        width: 452,
        height: 160,
        alt: "Roheline kast: Serveri ühendus. Andmed on sünkroniseeritud.",
        frame: "plain",
        caption: "**Roheline:** kõik on korras, muudatused jõuavad veebi.",
      },
      {
        src: "/assets/guide/desktop/uhendus-viga.webp",
        width: 452,
        height: 160,
        alt: "Kollane kast: Serveri ühendus. Andmed ei salvestu pilve.",
        frame: "plain",
        caption:
          "**Kollane:** ühendus puudub. Kellad mängivad edasi, aga muudatused ei jõua veebi. Kontrolli internetiühendust.",
      },
    ],
  },
  {
    title: "Vali heliväljund",
    text: [
      "Ava menüüst **Seaded**. Vali **Vaikimisi heliväljund** alt kooli helisüsteem.",
      "Kui helisüsteem on Windowsis juba vaikimisi väljund, võid jätta valikuks **Vaikimisi**.",
    ],
    shots: [
      {
        src: "/assets/guide/desktop/seaded.webp",
        width: 1536,
        height: 1500,
        alt: "E-Kella seaded, vaikimisi heliväljundiks on valitud Koolikõlarid",
        frame: "dialog",
        maxWidth: "34rem",
        markers: [{ n: 1, x: 76, y: 24.1 }],
      },
    ],
  },
  {
    title: "Testi heli",
    text: [
      "Ava **MP3-helifailid**, vajuta **Lae üles** ja vali arvutist mõni MP3-fail. Klõpsa failil ja see hakkab mängima.",
      "Kui heli kostab koolikõlaritest, on ühendus korras.",
    ],
    shots: [
      desktop(
        "mp3-failid",
        "E-Kella MP3-helifailide vaade kolme üleslaaditud failiga ja helimängijaga",
      ),
    ],
  },
  {
    title: "Jäta E-Kell tööle",
    text: [
      "Kellad helisevad ainult siis, kui E-Kell töötab. Akna sulgemine peidab rakenduse teavitusalale kella kõrvale ja kellad mängivad edasi.",
      "E-Kell käivitub ka koos Windowsiga ise. Kui valid teavitusala menüüst **Välju**, ei helise kellad enne, kui rakendus jälle avatakse.",
    ],
    sketch: "tray",
  },
];

/* ---------- Töölauarakendus ---------- */

export const desktopMenu: Shot = {
  src: "/assets/guide/desktop/menuu.webp",
  width: 482,
  height: 1600,
  alt: "E-Kella töölauarakenduse vasak menüü",
  frame: "plain",
  markers: [
    { n: 1, x: 100, y: 13.1 },
    { n: 2, x: 100, y: 25 },
    { n: 3, x: 100, y: 29.5 },
    { n: 4, x: 100, y: 34 },
    { n: 5, x: 100, y: 38.5 },
    { n: 6, x: 100, y: 43 },
    { n: 7, x: 100, y: 86.5 },
    { n: 8, x: 100, y: 92.1 },
    { n: 9, x: 100, y: 96.6 },
  ],
};

export const desktopLegend: LegendItem[] = [
  { n: 1, title: "Serveri ühendus", text: "Roheline tähendab, et andmed jõuavad veebi." },
  { n: 2, title: "Töölaud", text: "Tänane ajakava, aktiivne plaan ja kiired toimingud." },
  { n: 3, title: "Loo / muuda plaane", text: "Kellaajad ja helid nädalapäevade kaupa." },
  { n: 4, title: "Häälesalvestus", text: "Salvesta teade või räägi otse kõlaritesse." },
  { n: 5, title: "Raadio", text: "Raadiojaam kohe või ajakava järgi." },
  { n: 6, title: "MP3-helifailid", text: "Laadi üles ja mängi oma muusikat." },
  { n: 7, title: "Häire", text: "Valmis häired, mis käivituvad paari klikiga." },
  { n: 8, title: "Kontakt", text: "Saada KooliTechile sõnum otse rakendusest." },
  { n: 9, title: "Seaded", text: "Heliväljund, vaikimisi helid, teema ja litsents." },
];

export const planSteps: Step[] = [
  {
    title: "Loo plaan",
    text: [
      "Ava **Loo / muuda plaane** ja vajuta paremal **Uus**. Anna plaanile nimi ja vajuta **OK**.",
    ],
    note: "Nimes kasuta tühiku asemel alakriipsu, näiteks Tavaline_nädal.",
    shots: [
      {
        src: "/assets/guide/desktop/plaan-uus.webp",
        width: 1024,
        height: 522,
        alt: "Aken Loo uus plaan, plaani nimeks on kirjutatud Tavaplaan",
        frame: "dialog",
        maxWidth: "30rem",
      },
    ],
  },
  {
    title: "Lisa kellaajad",
    text: [
      "Vali plaan ja nädalapäev ning vajuta **Lisa uus**. Anna kirjele nimi, määra kellaaeg ja vali heli.",
      "Soovi korral lisa **Eelkell** enne ja **Järelkell** pärast põhikella. Heli kõrval oleva noolenupuga saad seda eelnevalt kuulata.",
    ],
    shots: [
      {
        src: "/assets/guide/desktop/plaan-element.webp",
        width: 1024,
        height: 1682,
        alt: "Aken Lisa uus element: nimi 8. tund, eelkell 14:55, põhikell 15:00 ja järelkell 15:45 koos helidega",
        frame: "dialog",
        maxWidth: "24rem",
      },
    ],
  },
  {
    title: "Kopeeri teistele päevadele",
    text: [
      "Kui mitmel päeval on samad ajad, ava sihtpäev ja vajuta **Kopeeri päev**. Vali, millise plaani ja päeva ajad kopeerida.",
    ],
    shots: [
      {
        src: "/assets/guide/desktop/plaan-kopeeri.webp",
        width: 896,
        height: 896,
        alt: "Aken Kopeeri ajad: lähteplaan Tavaplaan, lähtepäev esmaspäev, sihtkoht Tavaplaan teisipäev",
        frame: "dialog",
        maxWidth: "26rem",
      },
    ],
  },
  {
    title: "Kontrolli nädalat",
    text: [
      "Vali päevad ükshaaval ja vaata, et kõik ajad on paigas. Pliiatsiga saad kirjet muuta, prügikastiga kustutada.",
    ],
    shots: [
      desktop(
        "plaanid",
        "Plaanide vaade: Tavaplaani esmaspäeva tunnid koos eelkella ja järelkellaga",
      ),
    ],
  },
  {
    title: "Tee plaan aktiivseks",
    text: [
      "Ava **Töölaud** ja vali **Aktiivne plaan** alt oma plaan. Kell hakkab helisema selle plaani järgi.",
    ],
    note: "Valik „Kellad väljas“ vaigistab kellad näiteks aktuse ajaks. Plaanid jäävad alles.",
    shots: [
      {
        src: "/assets/guide/desktop/aktiivne-plaan.webp",
        width: 976,
        height: 634,
        alt: "Kiired toimingud: aktiivseks plaaniks on valitud Tavaplaan",
        frame: "plain",
        maxWidth: "28rem",
      },
    ],
  },
];

/* ---------- E-Kell Web ---------- */

export const webSteps: Step[] = [
  {
    title: "Logi sisse",
    text: [
      "Ava brauseris **dashboard.koolitech.ee**. Sisesta kooli kasutajanimi ja salasõna ning vajuta **Logi sisse**.",
    ],
    action: { href: "https://dashboard.koolitech.ee", label: "Ava E-Kell Web" },
    shots: [
      {
        src: "/assets/guide/web/login.webp",
        width: 628,
        height: 728,
        alt: "E-Kell Webi sisselogimise kaart kasutajanime ja salasõnaga",
        frame: "dialog",
        maxWidth: "18rem",
      },
    ],
  },
  {
    title: "Peavaade",
    text: [
      "Veebis näed samu plaane ja sama aktiivset plaani nagu kooli arvutis. Muudatus ühes kohas jõuab kohe teise.",
    ],
    shots: [
      web(
        "peavaade",
        "E-Kell Webi peavaade: tänane ajakava, aktiivne plaan ja plaanide ülevaade",
      ),
    ],
  },
];

export const webMenu: Shot = {
  src: "/assets/guide/web/menuu.webp",
  width: 480,
  height: 1800,
  alt: "E-Kell Webi vasak menüü",
  frame: "plain",
  markers: [
    { n: 1, x: 100, y: 7 },
    { n: 2, x: 100, y: 11.6 },
    { n: 3, x: 100, y: 16 },
    { n: 4, x: 100, y: 20.4 },
    { n: 5, x: 100, y: 87 },
    { n: 6, x: 100, y: 92.5 },
    { n: 7, x: 100, y: 96.9 },
  ],
};

export const webLegend: LegendItem[] = [
  { n: 1, title: "Peavaade", text: "Sama ülevaade nagu töölaual." },
  { n: 2, title: "Loo / muuda plaane", text: "Muuda kellaaegu kodust või telefonist." },
  { n: 3, title: "Salvestused", text: "Mängi kooli arvutisse salvestatud teateid." },
  { n: 4, title: "Raadio", text: "Juhi raadiot ja selle ajakava." },
  { n: 5, title: "Häire", text: "Käivita häire kust tahes." },
  { n: 6, title: "Seaded", text: "Heliväljund ja vaikimisi helid." },
  { n: 7, title: "Logi välja", text: "Lõpeta töö jagatud arvutis." },
];

export const webNotice: Step = {
  title: "Töölauarakendus peab töötama",
  text: [
    "Kellad, raadio, häired ja teated mängivad kooli arvutis. Veeb ainult juhib neid.",
    "Kui kooli arvuti on välja lülitatud või ilma internetita, näitab veeb hoiatust. Kellad mängivad siiski edasi, kui arvuti on sees.",
  ],
  shots: [
    web(
      "raadio-offline",
      "Hoiatus E-Kell Webis: Töölauarakendus pole ühendatud",
      { width: 1340, height: 312, frame: "plain" },
    ),
  ],
};

export const phoneShots: Shot[] = [
  web("mobiil", "E-Kell Webi peavaade telefonis", {
    width: 780,
    height: 1688,
    frame: "phone",
  }),
  web("mobiil-menuu", "E-Kell Webi avatud menüü telefonis", {
    width: 780,
    height: 1688,
    frame: "phone",
  }),
];

/* ---------- Funktsioonid lühidalt ---------- */

export const features: Feature[] = [
  {
    title: "Koolikell",
    text: "Kell heliseb aktiivse plaani järgi. Igal kirjel on põhikell ning soovi korral eelkell ja järelkell.",
    how: [
      "Vaheta aktiivset plaani töölaualt või veebist.",
      "„Kellad väljas“ vaigistab kellad, plaane muutmata.",
      "Plaane saab muuta ka veebis.",
    ],
    shot: web(
      "plaanid",
      "Plaanide muutmine E-Kell Webis: Tavaplaani esmaspäev",
    ),
    docs: "plaanide-loomine-ja-muutmine",
  },
  {
    title: "Häire",
    text: "Häired on enne valmis seadistatud: nimi, ikoon, heli, korduste arv ja viivitus. Hädaolukorras jääb üle ainult käivitada.",
    how: [
      "Loo häire: **Häire** → **Uus preset**.",
      "Käivita: **Käivita** → **Käivita häire**.",
      "Veebis saab häire käivitada ka eemalt.",
    ],
    shot: desktop(
      "haire-kaivita",
      "Häire käivitamise kinnitus: Tulekahju, fire_alarm.mp3, 3 kordust",
    ),
    docs: "häired",
  },
  {
    title: "Raadio",
    text: "Mängi raadiojaama kohe või lase sel mängida vahetundides ajakava järgi.",
    how: [
      "Otse: vajuta jaama kõrval noolenuppu.",
      "Ajakava: lisa algus- ja lõpuaeg ning lülita ajakava sisse.",
      "Raadio koolikõlaritest on avalik esitus. Loe rakenduses autoriõiguse teadet.",
    ],
    shot: desktop(
      "raadio-ajakava",
      "Raadio ajakava: RETRO FM kell 10.50, peatus 11.15, SKY PLUS kell 12.05",
    ),
    docs: "raadio",
  },
  {
    title: "Häälesalvestus ja otseedastus",
    text: "Salvesta teade hilisemaks või räägi mikrofoni kaudu otse koolikõlaritesse.",
    how: [
      "Otse: **Hääleedastamine otse kõlarisse** → vali mikrofon → alusta.",
      "Salvesta: **Salvesta helifailina** → anna nimi → salvesta.",
      "Salvestusi saab mängida ka veebist.",
    ],
    shot: desktop(
      "haalesalvestus",
      "Häälesalvestuse vaade kolme salvestatud teatega",
    ),
    docs: "häälesalvestus",
  },
  {
    title: "Seaded",
    text: "Seadetes on heliväljund, vaikimisi helid, teema, versioon ja litsentsi kehtivus.",
    how: [
      "**Korduste arv** määrab, mitu korda kell mängib.",
      "Vaikimisi helid pakutakse uutele kirjetele ette.",
      "**Lähtesta** kustutab kohalikud andmed ja küsib uut võtit.",
    ],
    shot: {
      src: "/assets/guide/desktop/seaded.webp",
      width: 1536,
      height: 1500,
      alt: "E-Kella seadete aken",
      frame: "dialog",
    },
    docs: "seaded",
  },
];
