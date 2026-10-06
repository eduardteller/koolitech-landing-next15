import Image from "next/image";

const partners = [
  {
    name: "Kallavere Keskkool",
    src: "/assets/partners/kallavere.png",
    width: 383,
    height: 400,
  },
  {
    name: "Pirita Majandusgümnaasium",
    src: "/assets/partners/pmg.png",
    width: 447,
    height: 447,
  },
];

/* One pass of the track must be wider than the strip, or the loop shows a
   gap before it wraps. With only a few logos, repeat them until a pass has
   at least this many items (12 × ~130px clears the 1280px strip). */
const MIN_ITEMS_PER_PASS = 12;

const LogoMarquee = () => {
  const repeats = Math.ceil(MIN_ITEMS_PER_PASS / partners.length);
  const pass = Array.from({ length: repeats }, () => partners).flat();

  return (
    <section className="bg-ground px-6 pb-20 sm:px-8">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted">
        Meid usaldavad koolid
      </p>
      <div className="logo-marquee mx-auto mt-8 max-w-screen-xl border-y border-line py-8">
        {/* Two identical passes; the track slides right by exactly one. */}
        <div
          className="logo-marquee-track"
          style={{ animationDuration: `${pass.length * 3}s` }}
        >
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex shrink-0 items-center"
              aria-hidden={copy === 1 || undefined}
            >
              {pass.map((logo, i) => (
                <li key={i} className="shrink-0 px-8 sm:px-12">
                  <Image
                    src={logo.src}
                    width={logo.width}
                    height={logo.height}
                    // Name each school once; the repeats are decorative.
                    alt={copy === 0 && i < partners.length ? logo.name : ""}
                    className="h-16 w-auto opacity-80 grayscale dark:invert sm:h-20"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
