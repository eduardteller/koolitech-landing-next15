import type { Sketch as SketchName } from "@/content/ekell-guide";
import {
  ArrowRight,
  Check,
  ChevronUp,
  Headphones,
  Monitor,
  Speaker,
  TriangleAlert,
  Volume2,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import Rich from "./Rich";
import { MarkerBadge } from "./Screenshot";

/* Drawn stand-ins for Windows screens a dev build cannot capture. They
   are schematic on purpose, in the site's own style: they show where to
   click, not what Windows looks like this year. */

const Caption = ({ children }: { children: React.ReactNode }) => (
  <figcaption className="text-muted mt-3 text-sm leading-relaxed">
    {children}
  </figcaption>
);

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div className="border-line bg-surface flex flex-1 flex-col rounded-xl border p-5 shadow-sm">
    {children}
  </div>
);

// Placeholder text lines.
const Lines = ({ widths }: { widths: string[] }) => (
  <span className="mt-3 flex flex-col gap-2">
    {widths.map((w, i) => (
      <span key={i} className="bg-line block h-2 rounded" style={{ width: w }} />
    ))}
  </span>
);

const SmartScreen = () => (
  <figure className="mt-6">
    <div
      aria-hidden="true"
      className="flex flex-col items-stretch gap-3 sm:flex-row"
    >
      <Panel>
        <span className="text-ink font-semibold">
          Windows kaitses teie arvutit
        </span>
        <Lines widths={["100%", "80%"]} />
        <span className="mt-4 mb-5 flex items-center gap-2">
          <span className="text-accent text-sm font-semibold underline underline-offset-4">
            Lisateave
          </span>
          <MarkerBadge n={1} />
        </span>
        <span className="border-line mt-auto flex justify-end border-t pt-4">
          <span className="border-line text-muted rounded-md border px-3 py-1.5 text-sm">
            Ära käivita
          </span>
        </span>
      </Panel>
      <ArrowRight
        size={20}
        strokeWidth={2}
        className="text-muted shrink-0 rotate-90 self-center sm:rotate-0"
      />
      <Panel>
        <span className="text-ink font-semibold">
          Windows kaitses teie arvutit
        </span>
        <span className="text-muted mt-3 text-xs">
          Rakendus: E-Kell-…Setup.exe
        </span>
        <Lines widths={["70%"]} />
        <span className="border-line mt-auto flex items-center justify-end gap-2 border-t pt-4 sm:mt-5">
          <MarkerBadge n={2} />
          <span className="bg-primary text-on-primary rounded-md px-3 py-1.5 text-sm font-semibold">
            Käivita siiski
          </span>
          <span className="border-line text-muted rounded-md border px-3 py-1.5 text-sm">
            Ära käivita
          </span>
        </span>
      </Panel>
    </div>
    <Caption>
      <Rich text="Skeem: Windowsi hoiatus. Vali enne **Lisateave**, siis ilmub nupp **Käivita siiski**." />
    </Caption>
  </figure>
);

const Tray = () => (
  <figure className="mt-6 max-w-md">
    <div aria-hidden="true" className="flex flex-col items-end">
      <div className="border-line bg-ground mr-16 w-44 rounded-lg border p-1 text-sm shadow-lg">
        <span className="bg-primary-tint text-ink block rounded-md px-3 py-1.5 font-semibold">
          Ava
        </span>
        <span className="bg-line mx-2 my-1 block h-px" />
        <span className="text-muted flex items-center justify-between px-3 py-1.5">
          Välju
          <TriangleAlert size={14} strokeWidth={2} />
        </span>
      </div>
      <div className="border-line bg-surface text-muted mt-2 flex w-full items-center justify-end gap-3 rounded-lg border px-3 py-2">
        <ChevronUp size={14} strokeWidth={2} />
        <span className="ring-primary bg-ground rounded-md p-1 ring-2">
          <Image
            src="/assets/ekell-logo.webp"
            width={512}
            height={512}
            sizes="20px"
            alt=""
            className="h-5 w-5"
          />
        </span>
        <Wifi size={14} strokeWidth={2} />
        <Volume2 size={14} strokeWidth={2} />
        <span className="text-ink text-xs tabular-nums">10:22</span>
      </div>
    </div>
    <Caption>
      Skeem: E-Kella ikoon on teavitusalal kella kõrval. Klõps avab akna,
      paremklõps näitab menüüd.
    </Caption>
  </figure>
);

const outputs = [
  { Icon: Monitor, name: "Monitor (HDMI)" },
  { Icon: Headphones, name: "Kõlarid (Realtek Audio)" },
];

export const SoundOutput = () => (
  <figure>
    <div
      aria-hidden="true"
      className="border-line bg-ground rounded-xl border p-4 shadow-sm"
    >
      <span className="text-muted block text-xs font-semibold tracking-widest uppercase">
        Windows · Heli
      </span>
      <span className="text-ink mt-1 block text-sm font-semibold">Väljund</span>
      <span className="mt-3 flex flex-col gap-1.5 text-sm">
        {outputs.map(({ Icon, name }) => (
          <span
            key={name}
            className="border-line text-muted flex items-center gap-2.5 rounded-lg border px-3 py-2"
          >
            <Icon size={16} strokeWidth={1.75} className="shrink-0" />
            {name}
          </span>
        ))}
        <span className="border-primary bg-primary-tint text-ink flex items-center gap-2.5 rounded-lg border px-3 py-2 font-semibold">
          <Speaker size={16} strokeWidth={1.75} className="text-accent shrink-0" />
          Koolikõlarid (USB Audio)
          <Check size={16} strokeWidth={2.5} className="text-accent ml-auto" />
        </span>
      </span>
    </div>
    <Caption>
      Skeem: kooli helisüsteem on Windowsi heliseadetes üks väljunditest.
    </Caption>
  </figure>
);

const sketches: Record<SketchName, () => React.ReactNode> = {
  smartscreen: SmartScreen,
  tray: Tray,
  "sound-output": SoundOutput,
};

const Sketch = ({ name }: { name: SketchName }) => {
  const Component = sketches[name];
  return <Component />;
};

export default Sketch;
