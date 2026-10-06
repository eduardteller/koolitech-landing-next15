import {
  BellRing,
  Cloud,
  Laptop,
  Smartphone,
  Tablet,
  Volume2,
} from "lucide-react";
import Image from "next/image";

// Where the bell is heard. Three columns, so their centres sit at 1/6,
// 1/2 and 5/6 of the width, which is where the fan-out wires drop.
const zones = ["Klassid", "Koridorid", "Aula"];
const drops = ["16.667%", "50%", "83.333%"];

/** A wire: a pale track with a lit fill that grows along it on load. */
const Wire = ({
  className,
  axis,
  delay,
}: {
  className: string;
  axis: "x" | "y";
  delay: string;
}) => (
  <span className={`bg-primary-line absolute ${className}`}>
    <span
      className={`scheme-flow scheme-flow-${axis}`}
      style={{ animationDelay: delay }}
    />
  </span>
);

const Stem = ({ delay }: { delay: string }) => (
  <div className="relative h-12">
    <Wire
      axis="y"
      delay={delay}
      className="inset-y-0 left-1/2 w-0.5 -translate-x-1/2"
    />
  </div>
);

// How E-Kell is wired, top to bottom: the web interface on any device,
// the server that syncs it, the school computer that plays the bells,
// and the speakers around the building. On load the signal runs down
// the wires and the speakers ring (see .scheme-* in globals.css).
const HeroScheme = () => {
  return (
    <figure
      role="img"
      aria-label="Skeem: veebiliides telefonis, tahvlis või arvutis sünkroonib E-Kell serveri kaudu kooli arvutiga, mis mängib kella klasside, koridoride ja aula kõlaritesse."
      className="mx-auto w-full max-w-lg"
    >
      {/* Web interface */}
      <div className="border-line bg-surface mx-auto flex w-fit items-center gap-4 rounded-xl border px-5 py-3 shadow-sm">
        <span className="text-accent flex items-center gap-1.5">
          <Smartphone size={20} strokeWidth={1.75} />
          <Tablet size={20} strokeWidth={1.75} />
          <Laptop size={22} strokeWidth={1.75} />
        </span>
        <span className="flex flex-col">
          <span className="text-ink font-semibold">Veebiliides</span>
          <span className="text-muted text-xs">Igas brauseris</span>
        </span>
      </div>

      <Stem delay="0.25s" />

      {/* Server */}
      <div className="border-line bg-surface mx-auto flex w-fit items-center gap-2.5 rounded-full border px-4 py-2 shadow-sm">
        <Cloud size={18} strokeWidth={1.75} className="text-accent" />
        <span className="text-ink text-sm font-semibold">E-Kell server</span>
        <span className="text-muted text-xs">sünkroonib</span>
      </div>

      <Stem delay="0.6s" />

      {/* School computer */}
      <div className="border-primary-line bg-surface mx-auto w-full max-w-md rounded-xl border p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <Image
            width={512}
            height={512}
            src="/assets/ekell-logo.png"
            alt=""
            className="h-11 w-11"
          />
          <span className="flex flex-col">
            <span className="text-ink font-semibold">Kooli arvuti</span>
            <span className="text-muted text-xs">E-Kell töölauarakendus</span>
          </span>
        </div>
        <div className="bg-primary-tint mt-3 flex items-center gap-2 rounded-lg px-3 py-2 text-sm">
          <BellRing size={16} strokeWidth={2} className="text-accent" />
          <span className="text-accent font-semibold tabular-nums">09:50</span>
          <span className="text-ink">Tunnikell</span>
          <span className="bg-primary text-on-primary ml-auto rounded-md px-2 py-0.5 text-xs font-semibold">
            nüüd
          </span>
        </div>
        <div className="text-muted flex items-center gap-2 px-3 pt-2 text-sm">
          {/* icon-wide gap, so the times line up */}
          <span className="w-4 shrink-0" />
          <span className="tabular-nums">10:45</span>
          <span>Söögivahetund</span>
        </div>
      </div>

      {/* Fan-out to the speakers */}
      <div className="relative h-14">
        <Wire
          axis="y"
          delay="1s"
          className="top-0 left-1/2 h-1/2 w-0.5 -translate-x-1/2"
        />
        <Wire
          axis="x"
          delay="1.3s"
          className="top-1/2 right-[16.667%] left-[16.667%] h-0.5 -translate-y-1/2"
        />
        {drops.map((left) => (
          <span
            key={left}
            className="absolute top-1/2 bottom-0 w-0.5 -translate-x-1/2"
            style={{ left }}
          >
            <Wire axis="y" delay="1.55s" className="inset-0" />
          </span>
        ))}
      </div>

      {/* Speakers */}
      <ul className="grid grid-cols-3">
        {zones.map((zone) => (
          <li key={zone} className="flex flex-col items-center gap-2.5">
            <span className="scheme-speaker bg-primary text-on-primary flex h-14 w-14 items-center justify-center rounded-full">
              <Volume2 size={24} strokeWidth={2} />
            </span>
            <span className="text-ink text-sm font-semibold">{zone}</span>
          </li>
        ))}
      </ul>
    </figure>
  );
};

export default HeroScheme;
