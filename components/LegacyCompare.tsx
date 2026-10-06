import { Bell, BellRing, Check, Minus } from "lucide-react";

type Row = {
  label: string;
  /** One plain sentence on what the school gets from it. */
  detail: string;
  ekell: boolean;
  legacy: boolean;
};

// E-Kell against the bell systems schools are replacing. The last row is
// something both do, so the table shows what changes rather than claiming
// the old system did nothing.
const rows: Row[] = [
  {
    label: "Kaugjuhtimine",
    detail: "Muuda ajakava või käivita häire telefonist või tahvlist.",
    ekell: true,
    legacy: false,
  },
  {
    label: "Pilvesünkroonimine",
    detail: "Ajakavad ja seaded on tallel serveris, mitte ainult ühes arvutis.",
    ekell: true,
    legacy: false,
  },
  {
    label: "Automaatsed uuendused",
    detail: "Uued võimalused ja turvaparandused paigalduvad ise.",
    ekell: true,
    legacy: false,
  },
  {
    label: "Lihtne litsentsi pikendamine",
    detail: "Sama võti jääb kehtima ja pikendus jõuab rakendusse ise.",
    ekell: true,
    legacy: false,
  },
  {
    label: "Häiresüsteem",
    detail: "Tulekahju- ja evakuatsioonihäire samast rakendusest, ühe vajutusega.",
    ekell: true,
    legacy: false,
  },
  {
    label: "Raadio, MP3 ja häälteated",
    detail: "Muusika ja teated samade kõlarite kaudu.",
    ekell: true,
    legacy: false,
  },
  {
    label: "Töö ilma internetita",
    detail: "Kellad helisevad edasi ka võrguühenduseta.",
    ekell: true,
    legacy: true,
  },
];

const Mark = ({ on, ekell }: { on: boolean; ekell?: boolean }) =>
  on ? (
    <Check
      role="img"
      aria-label="jah"
      size={20}
      strokeWidth={2.75}
      className={ekell ? "text-accent" : "text-muted"}
    />
  ) : (
    <Minus
      role="img"
      aria-label="ei"
      size={18}
      strokeWidth={2.5}
      className="text-muted"
    />
  );

// The E-Kell column carries a tint from header to last row, so the eye
// reads it as one strip. Cells stretch to the row height to keep it
// unbroken, which is why the vertical padding lives on the label cell.
const cols = "grid grid-cols-[1fr_4.5rem_4.5rem] sm:grid-cols-[1fr_8rem_8rem]";

const LegacyCompare = () => {
  return (
    <div
      role="table"
      aria-label="E-Kell ja vana kellasüsteem"
      data-aos="fade-up"
      data-aos-offset="200"
      className="mt-12 overflow-hidden rounded-xl border border-line bg-surface shadow-sm"
    >
      <div role="row" className={`${cols} border-b border-line`}>
        <span
          role="columnheader"
          className="self-end px-5 py-4 text-xs font-semibold uppercase tracking-widest text-muted sm:px-8"
        >
          Võimalus
        </span>
        <span
          role="columnheader"
          className="flex flex-col items-center justify-end gap-1.5 bg-accent/10 px-1 py-4 text-center text-ink"
        >
          <BellRing size={20} strokeWidth={1.75} className="text-accent" />
          <span className="text-xs font-semibold uppercase tracking-widest">
            E-Kell
          </span>
        </span>
        <span
          role="columnheader"
          className="flex flex-col items-center justify-end gap-1.5 px-1 py-4 text-center text-muted"
        >
          <Bell size={20} strokeWidth={1.75} />
          <span className="text-xs font-semibold uppercase leading-tight tracking-widest">
            Vana süsteem
          </span>
        </span>
      </div>

      <div role="rowgroup" className="divide-y divide-line">
        {rows.map((row) => (
          <div role="row" key={row.label} className={cols}>
            <div role="rowheader" className="px-5 py-4 sm:px-8">
              <p className="font-semibold text-ink">{row.label}</p>
              <p className="mt-0.5 text-sm leading-snug text-muted">
                {row.detail}
              </p>
            </div>
            <span
              role="cell"
              className="flex items-center justify-center bg-accent/10"
            >
              <Mark on={row.ekell} ekell />
            </span>
            <span role="cell" className="flex items-center justify-center">
              <Mark on={row.legacy} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegacyCompare;
