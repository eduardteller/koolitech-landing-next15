import {
  Globe,
  Monitor,
  Music,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Users,
  Volume2,
  WifiOff,
  type LucideIcon,
} from "lucide-react";

type Half = {
  Icon: LucideIcon;
  name: string;
  where: string;
  does: { Icon: LucideIcon; text: string }[];
};

// Each half lists only its own job. What both halves share is not listed
// twice: it runs between them as the wires in the middle.
const desktop: Half = {
  Icon: Monitor,
  name: "Töölauarakendus",
  where: "Kooli arvutis",
  does: [
    { Icon: Volume2, text: "Mängib kellad, häired ja teated kõlaritesse" },
    { Icon: Music, text: "Esitab MP3-faile ja raadiot" },
    { Icon: WifiOff, text: "Töötab edasi ka ilma internetita" },
  ],
};

const web: Half = {
  Icon: Globe,
  name: "Veebiliides",
  where: "Igas brauseris",
  does: [
    { Icon: Smartphone, text: "Juhib kellasid ja häireid kust tahes" },
    { Icon: Users, text: "Haldab kasutajaid ja sisselogimist" },
    { Icon: ShieldCheck, text: "Hoiab kooli seaded ja litsentsi ühes kohas" },
  ],
};

const shared = ["Ajakavad", "Häired", "Raadio", "Häälteated"];

const HalfCard = ({ half }: { half: Half }) => (
  <div className="border-line bg-surface flex flex-col rounded-xl border p-6 shadow-sm sm:p-8">
    <span className="bg-primary-tint flex h-12 w-12 items-center justify-center rounded-xl">
      <half.Icon size={24} strokeWidth={1.75} className="text-accent" />
    </span>
    <h3 className="text-ink mt-5 text-xl font-semibold tracking-tight">
      {half.name}
    </h3>
    <p className="text-muted mt-1 text-sm">{half.where}</p>
    <ul className="border-line mt-6 flex flex-col gap-3.5 border-t pt-6">
      {half.does.map(({ Icon, text }) => (
        <li key={text} className="flex items-start gap-3">
          <Icon
            size={18}
            strokeWidth={1.75}
            className="text-accent mt-0.5 shrink-0"
          />
          <span className="text-ink leading-snug">{text}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Wire end: a ringed dot sitting on the card border, so the wire reads
// as plugged in.
const plug =
  "absolute top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-primary bg-ground lg:block";

const SystemBridge = () => {
  return (
    <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_minmax(12rem,16rem)_1fr]">
      <HalfCard half={desktop} />

      {/* Shared data. Wide screens: one horizontal wire per feature,
          card to card. Narrow screens: the cards stack and a single
          vertical rail joins them through the same labels. */}
      <div
        data-aos="wire"
        data-aos-offset="200"
        className="relative z-10 flex flex-col items-center justify-center gap-5 py-8 lg:py-0"
      >
        <span
          aria-hidden="true"
          className="bg-primary-line absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 lg:hidden"
        />
        <ul
          aria-label="Ühised andmed"
          className="relative flex w-full flex-col items-center gap-3 lg:gap-4"
        >
          {shared.map((label, i) => (
            <li
              key={label}
              className="relative flex w-full justify-center lg:py-1"
            >
              <span
                aria-hidden="true"
                style={{ transitionDelay: `${i * 90}ms` }}
                className="wire bg-primary-line absolute top-1/2 right-1/2 left-0 hidden h-0.5 origin-right -translate-y-1/2 lg:block"
              />
              <span
                aria-hidden="true"
                style={{ transitionDelay: `${i * 90}ms` }}
                className="wire bg-primary-line absolute top-1/2 right-0 left-1/2 hidden h-0.5 origin-left -translate-y-1/2 lg:block"
              />
              <span
                aria-hidden="true"
                className={`${plug} left-0 -translate-x-1/2`}
              />
              <span
                aria-hidden="true"
                className={`${plug} right-0 translate-x-1/2`}
              />
              <span className="border-primary-line bg-ground text-ink relative rounded-full border px-3.5 py-1 text-sm font-semibold">
                {label}
              </span>
            </li>
          ))}
        </ul>
        <p className="bg-ground text-muted relative flex items-center gap-1.5 px-2 text-center text-xs">
          <RefreshCw
            size={13}
            strokeWidth={2}
            className="text-accent shrink-0"
          />
          Muudatus ühes on kohe ka teises
        </p>
      </div>

      <HalfCard half={web} />
    </div>
  );
};

export default SystemBridge;
