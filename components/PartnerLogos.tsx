"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Shown under the landing hero and at the bottom of the E-Kell page.
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

// How long each logo stays up before the next one fades in.
const SHOW_MS = 3000;

const PartnerLogos = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (partners.length < 2) return;
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % partners.length),
      SHOW_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-ground px-6 pb-20 sm:px-8">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted">
        Meie lahendusi kasutavad
      </p>
      {/* Every logo sits in the same grid cell and only the current one is
          opaque, so they cross-fade in place. All schools stay in the
          accessibility tree; only what is visible changes. */}
      <ul className="logo-strip mx-auto mt-8 grid max-w-screen-xl place-items-center border-y border-line py-8">
        {partners.map((logo, i) => (
          <li
            key={logo.name}
            className={`col-start-1 row-start-1 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={logo.name}
              className="h-16 w-auto opacity-80 grayscale dark:invert sm:h-20"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PartnerLogos;
