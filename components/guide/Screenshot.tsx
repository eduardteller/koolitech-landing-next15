import type { Marker, Shot } from "@/content/ekell-guide";
import { Minus, Square, X } from "lucide-react";
import Image from "next/image";
import Rich from "./Rich";

interface Props {
  shot: Shot;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/** Numbered badge over the image; the legend next to it explains it. */
export const MarkerBadge = ({ n }: { n: number }) => (
  <span className="bg-primary text-on-primary ring-ground flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold tabular-nums shadow-sm ring-2">
    {n}
  </span>
);

const Markers = ({ markers }: { markers: Marker[] }) => (
  <>
    {markers.map(({ n, x, y }) => (
      <span
        key={n}
        aria-hidden="true"
        style={{ left: `${x}%`, top: `${y}%` }}
        className="absolute -translate-x-1/2 -translate-y-1/2"
      >
        <MarkerBadge n={n} />
      </span>
    ))}
  </>
);

/* A screenshot in a frame that says where it was taken: the desktop
   app's window, the browser for E-Kell Web, a phone, or none for a
   cut-out dialog. Frames are not clipped, so markers on the image edge
   stay whole; the image rounds its own corners instead. */
const Screenshot = ({
  shot,
  sizes = "(min-width: 1024px) 768px, 100vw",
  priority,
  className = "",
}: Props) => {
  const { src, width, height, alt, frame, maxWidth, markers, caption } = shot;

  const image = (rounded: string) => (
    <div className="relative">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        sizes={sizes}
        priority={priority}
        className={`block h-auto w-full ${rounded}`}
      />
      {markers && <Markers markers={markers} />}
    </div>
  );

  let framed: React.ReactNode;
  switch (frame) {
    case "window":
      framed = (
        <div className="border-line bg-surface rounded-xl border shadow-sm">
          <div
            aria-hidden="true"
            className="border-line text-muted flex h-7 items-center justify-between border-b px-3"
          >
            <span className="text-[11px] font-semibold">E-Kell</span>
            <span className="flex items-center gap-3">
              <Minus size={12} strokeWidth={2} />
              <Square size={10} strokeWidth={2} />
              <X size={12} strokeWidth={2} />
            </span>
          </div>
          {image("rounded-b-[11px]")}
        </div>
      );
      break;
    case "browser":
      framed = (
        <div className="border-line bg-surface rounded-xl border shadow-sm">
          <div
            aria-hidden="true"
            className="border-line flex h-8 items-center gap-3 border-b px-3"
          >
            <span className="flex gap-1.5">
              <span className="bg-line h-2.5 w-2.5 rounded-full" />
              <span className="bg-line h-2.5 w-2.5 rounded-full" />
              <span className="bg-line h-2.5 w-2.5 rounded-full" />
            </span>
            <span className="bg-ground text-muted mx-auto truncate rounded-md px-3 py-0.5 text-[11px]">
              dashboard.koolitech.ee
            </span>
            {/* balances the dots, so the address sits centred */}
            <span className="w-[2.625rem]" />
          </div>
          {image("rounded-b-[11px]")}
        </div>
      );
      break;
    case "phone":
      framed = (
        <div className="border-ink bg-ink rounded-[2.25rem] border-[6px] shadow-lg">
          {image("rounded-[1.875rem]")}
        </div>
      );
      break;
    case "dialog":
      // The image carries its own rounded, transparent corners.
      framed = (
        <div className="drop-shadow-[0_10px_24px_rgb(0_0_0/0.14)]">
          {image("")}
        </div>
      );
      break;
    default:
      framed = (
        <div className="border-line rounded-xl border shadow-sm">
          {image("rounded-[11px]")}
        </div>
      );
  }

  return (
    <figure className={`w-full ${className}`} style={{ maxWidth }}>
      {framed}
      {caption && (
        <figcaption className="text-muted mt-3 text-sm leading-relaxed">
          <Rich text={caption} />
        </figcaption>
      )}
    </figure>
  );
};

export default Screenshot;
