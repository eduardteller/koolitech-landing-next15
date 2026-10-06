type Requirement = {
  label: string;
  minimum: string;
  /** Short qualifier shown under the value. */
  note?: string;
};

const requirements: Requirement[] = [
  { label: "Operatsioonisüsteem", minimum: "Windows 10 (64-bit)" },
  { label: "Protsessor", minimum: "Kahetuumaline x64" },
  { label: "Mälu (RAM)", minimum: "4 GB" },
  { label: "Vaba kettaruum", minimum: "1 GB" },
  { label: "Ekraan", minimum: "1024 × 768" },
  { label: "Heliväljund", minimum: "Helikaart või USB-helikaart" },
  { label: "Võrguühendus", minimum: "Vajalik" },
  {
    label: "Mikrofon",
    minimum: "Valikuline",
    note: "vajalik teadete salvestamiseks",
  },
];

const SystemRequirements = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      className="overflow-hidden rounded-xl border border-line bg-surface shadow-sm"
    >
      {/* Plate header — names the equipment and the tier the values describe */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line bg-primary-tint px-6 py-4 sm:px-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-ink">
          E-Kell töölauarakendus
        </span>
        <span className="text-xs font-semibold uppercase tracking-widest text-kicker">
          Miinimumnõuded
        </span>
      </div>

      <dl className="divide-y divide-line px-6 sm:px-8">
        {requirements.map(({ label, minimum, note }) => (
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
              {note && (
                <span className="mt-0.5 block text-xs text-muted">{note}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default SystemRequirements;
