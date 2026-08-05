type Requirement = {
  label: string;
  minimum: string;
  recommended?: string;
  /** Replaces the "soovitatav" line where a second tier makes no sense. */
  note?: string;
};

const requirements: Requirement[] = [
  {
    label: "Operatsioonisüsteem",
    minimum: "Windows 10 (64-bit)",
    recommended: "Windows 11",
  },
  {
    label: "Protsessor",
    minimum: "Kahetuumaline x64",
    recommended: "Neljatuumaline",
  },
  { label: "Mälu (RAM)", minimum: "4 GB", recommended: "8 GB" },
  { label: "Vaba kettaruum", minimum: "1 GB", recommended: "2 GB" },
  {
    label: "Ekraan",
    minimum: "1024 × 768",
    recommended: "1280 × 800 või suurem",
  },
  {
    label: "Heliväljund",
    minimum: "Helikaart või USB-helikaart",
    recommended: "Eraldi väljund kooli valjuhääldisüsteemi",
  },
  {
    label: "Võrguühendus",
    minimum: "Vajalik",
    recommended: "Juhtmega püsiühendus",
  },
  {
    label: "Mikrofon",
    minimum: "Valikuline",
    note: "vajalik teadete salvestamiseks",
  },
];

const conditions = [
  {
    title: "Aktiveerimiseks on vaja internetti",
    text: "Esimesel käivitamisel kontrollitakse litsentsivõtit serverist. Pärast seda helisevad kellad ka võrguühenduseta.",
  },
  {
    title: "Administraatori õigusi pole vaja",
    text: "Rakendus paigaldub kasutaja kausta, seega saab selle paigaldada ka piiratud õigustega kontolt.",
  },
  {
    title: "Arvuti kellaaeg peab olema õige",
    text: "Kellad helisevad arvuti kellaaja järgi — kontrolli enne paigaldust kellaaega ja ajavööndit.",
  },
  {
    title: "Arvuti jääb sisse lülitatuks",
    text: "Kellad helisevad ainult töötavast rakendusest. Rakendus töötab taustal edasi ka siis, kui aken on suletud.",
  },
];

const SystemRequirements = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_50px_-30px_rgba(15,23,42,0.45)] ring-1 ring-ink/10"
    >
      {/* Plate header — names the equipment and the tier the values describe */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 bg-ink px-6 py-4 sm:px-8">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-chalk">
          E-Kell töölauarakendus
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass">
          Miinimumnõuded
        </span>
      </div>

      <dl className="divide-y divide-ink/[0.08] px-6 sm:px-8">
        {requirements.map(({ label, minimum, recommended, note }) => (
          <div
            key={label}
            className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4"
          >
            <dt className="font-display text-base font-semibold text-ink">
              {label}
            </dt>
            {/* Dotted leader — carries the eye across the row, datasheet-style */}
            <span
              aria-hidden="true"
              className="hidden min-w-8 flex-1 border-b border-dotted border-ink/25 sm:block"
            />
            <dd className="basis-full sm:basis-auto sm:text-right">
              <span className="font-mono text-sm text-ink">{minimum}</span>
              {(recommended || note) && (
                <span className="mt-0.5 block font-mono text-xs text-ink/60">
                  {recommended ? `soovitatav: ${recommended}` : note}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      {/* Site conditions — prerequisites rather than specs, so a plainer register */}
      <div className="border-t border-ink/[0.08] bg-chalk px-6 py-10 sm:px-8">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
          Enne paigaldust
        </p>
        <div className="mt-7 grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {conditions.map(({ title, text }) => (
            <div key={title}>
              <h4 className="font-display text-base font-semibold leading-snug text-ink">
                {title}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SystemRequirements;
