const periods = [
  { time: "08:00", label: "Koolipäev algab" },
  { time: "08:55", label: "1. vahetund" },
  { time: "09:50", label: "Käib praegu", now: true },
  { time: "10:45", label: "Söögivahetund" },
  { time: "11:40", label: "Lõputund" },
];

const TimeRail = () => {
  return (
    <div className="rail relative hidden h-72 select-none md:block" aria-hidden="true">
      <span className="rail-track" />
      <span className="rail-fill" />
      <span className="rail-now" />
      <ul className="relative flex h-full flex-col justify-between">
        {periods.map((p) => (
          <li
            key={p.time}
            className="grid grid-cols-[3.5rem_1.5rem_1fr] items-center"
          >
            <span
              className={`text-right font-mono text-xs tracking-tight ${
                p.now ? "text-brass" : "text-ink/40"
              }`}
            >
              {p.time}
            </span>
            <span className="flex justify-center">
              <span className="rail-dot" />
            </span>
            <span
              className={`text-sm ${
                p.now ? "font-medium text-ink" : "text-ink/45"
              }`}
            >
              {p.label}
              {p.now && (
                <span className="ml-2 align-middle rounded-full bg-brass/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-brass">
                  nüüd
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeRail;
