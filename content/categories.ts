import {
  BatteryCharging,
  Camera,
  Network,
  Package,
  PhoneCall,
  Presentation,
  Projector,
  Speaker,
  Usb,
  Video,
  type LucideIcon,
} from "lucide-react";

export type Category = {
  slug: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  /** Switched off for now: no nav entry, no page, its products left out. */
  hidden?: boolean;
};

// Catalog categories, in sidebar order. The slug is the URL segment
// (/tooted/<slug>) and the key products point at, so keep it stable.
export const categories = [
  {
    slug: "interaktiivsed-ekraanid",
    title: "Interaktiivsed ekraanid",
    description:
      "Puutetundlikud ekraanid ja nutitahvlid kaasaegseks ja kaasavaks õppetööks.",
    Icon: Presentation,
  },
  {
    slug: "lisad",
    hidden: true,
    title: "Lisad",
    description:
      "Kinnitused, ratastel alused, OPS-arvutid, pliiatsid, puldid ja muu ekraani juurde.",
    Icon: Package,
  },
  {
    slug: "dokid",
    hidden: true,
    title: "Dokid ja jaoturid",
    description:
      "Üks kaabel õpetaja sülearvutist ekraanini: pilt, laadimine ja võrk korraga.",
    Icon: Usb,
  },
  {
    slug: "dokumendikaamerad",
    hidden: true,
    title: "Dokumendikaamerad",
    description:
      "Raamat, tööleht või katse suurele ekraanile, et kogu klass näeks.",
    Icon: Camera,
  },
  {
    slug: "audiolahendused",
    title: "Audiolahendused",
    description:
      "Sise- ja välikõlarid, võimendid ja mikrofonid klassi, aulasse ja koolihoovi.",
    Icon: Speaker,
  },
  {
    slug: "videokonverentsiseadmed",
    hidden: true,
    title: "Videokonverentsiseadmed",
    description:
      "Kaamerad ja kõneribad hübriidtundide ning kaugkoosolekute jaoks.",
    Icon: Video,
  },
  {
    slug: "laadimiskarud",
    hidden: true,
    title: "Laadimiskärud",
    description:
      "Kärud ja kapid, mis hoiavad ja laadivad terve klassi sülearvuteid ja tahvleid.",
    Icon: BatteryCharging,
  },
  {
    slug: "vorguseadmed",
    title: "Võrguseadmed",
    description:
      "IP-võrgulülitid ja võrgutarvikud, mis ühendavad kooli seadmed töökindlaks tervikuks.",
    Icon: Network,
  },
  {
    slug: "interkomid",
    title: "Interkomid",
    description: "Kiire side klasside, õpetajate toa ja valvelaua vahel.",
    Icon: PhoneCall,
  },
  {
    slug: "projektorid",
    title: "Projektorid",
    description:
      "Projektorid ja ekraanid klassiruumidesse, aulasse ja saalidesse.",
    Icon: Projector,
  },
] as const satisfies readonly Category[];

export type CategorySlug = (typeof categories)[number]["slug"];
