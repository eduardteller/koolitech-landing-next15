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
              className={`text-right text-xs tabular-nums ${
                p.now ? "font-semibold text-primary" : "text-muted"
              }`}
            >
              {p.time}
            </span>
            <span className="flex justify-center">
              <span className="rail-dot" />
            </span>
            <span
              className={`text-sm ${
                p.now ? "font-semibold text-ink" : "text-muted"
              }`}
            >
              {p.label}
              {p.now && (
                <span className="ml-2 rounded-md bg-accent px-2 py-0.5 align-middle text-sm font-semibold text-on-accent">
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
