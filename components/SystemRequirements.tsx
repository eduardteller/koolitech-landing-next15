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
      className="overflow-hidden rounded-xl border border-line bg-card shadow-sm"
    >
      {/* Plate header — names the equipment and the tier the values describe */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line bg-primary-tint px-6 py-4 sm:px-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-ink">
          E-Kell töölauarakendus
        </span>
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Miinimumnõuded
        </span>
      </div>

      <dl className="divide-y divide-line px-6 sm:px-8">
        {requirements.map(({ label, minimum, recommended, note }) => (
          <div
            key={label}
            className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4"
          >
            <dt className="text-base font-semibold text-ink">{label}</dt>
            {/* Dotted leader — carries the eye across the row, datasheet-style */}
            <span
              aria-hidden="true"
              className="hidden min-w-8 flex-1 border-b border-dotted border-line sm:block"
            />
            <dd className="basis-full sm:basis-auto sm:text-right">
              <span className="text-sm tabular-nums text-ink">{minimum}</span>
              {(recommended || note) && (
                <span className="mt-0.5 block text-xs text-muted">
                  {recommended ? `soovitatav: ${recommended}` : note}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      {/* Site conditions — prerequisites rather than specs, so a plainer register */}
      <div className="border-t border-line bg-surface px-6 py-10 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Enne paigaldust
        </p>
        <div className="mt-7 grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {conditions.map(({ title, text }) => (
            <div key={title}>
              <h4 className="text-base font-semibold leading-snug text-ink">
                {title}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
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
