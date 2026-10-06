import { Check, Globe, Minus, Monitor } from "lucide-react";

type Availability = "yes" | "no";

const rows: { label: string; desktop: Availability; web: Availability }[] = [
  { label: "Ajakavad & tunniplaanid", desktop: "yes", web: "yes" },
  { label: "Häiresüsteem", desktop: "yes", web: "yes" },
  { label: "Raadio — otse ja ajakava", desktop: "yes", web: "yes" },
  { label: "Häälsalvestus & teated", desktop: "yes", web: "yes" },
  { label: "Koolikella heli taasesitus", desktop: "yes", web: "no" },
  { label: "MP3-helifailide mängija", desktop: "yes", web: "no" },
  { label: "Töö ilma internetita", desktop: "yes", web: "no" },
  { label: "Sisselogimine & kasutajad", desktop: "no", web: "yes" },
  { label: "Admin & litsentsihaldus", desktop: "no", web: "yes" },
  { label: "Kaugjuhtimine igast seadmest", desktop: "no", web: "yes" },
];

const Cell = ({ value }: { value: Availability }) =>
  value === "yes" ? (
    <Check
      size={18}
      strokeWidth={2.75}
      className="mx-auto text-success"
      aria-label="jah"
    />
  ) : (
    <Minus
      size={18}
      strokeWidth={2.5}
      className="mx-auto text-muted"
      aria-label="ei"
    />
  );

const PlatformCompare = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      className="mt-12 overflow-hidden rounded-xl border border-line bg-card shadow-sm"
    >
      {/* Column headers */}
      <div className="grid grid-cols-[1fr_4.5rem_4.5rem] items-end gap-2 border-b border-line px-5 py-4 sm:grid-cols-[1fr_7rem_7rem] sm:px-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted">
          Võimalus
        </span>
        <span className="flex flex-col items-center gap-1.5 text-ink">
          <Monitor size={20} strokeWidth={1.75} className="text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest">
            Töölaud
          </span>
        </span>
        <span className="flex flex-col items-center gap-1.5 text-ink">
          <Globe size={20} strokeWidth={1.75} className="text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest">
            Veeb
          </span>
        </span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-line">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[1fr_4.5rem_4.5rem] items-center gap-2 px-5 py-3.5 sm:grid-cols-[1fr_7rem_7rem] sm:px-8"
          >
            <span className="text-sm text-ink">{row.label}</span>
            <Cell value={row.desktop} />
            <Cell value={row.web} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformCompare;
