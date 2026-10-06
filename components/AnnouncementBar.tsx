import Link from "next/link";

// Height of the bar in px (h-9). The sticky header uses it to tell when
// the bar has scrolled away and the header is pinned to the top.
export const ANNOUNCEMENT_BAR_HEIGHT = 36;

const AnnouncementBar = () => {
  return (
    <div className="band flex h-9 items-center justify-center gap-3 whitespace-nowrap px-6 text-xs font-semibold tracking-wide text-ink sm:text-sm">
      <span>E-Kell saadaval nüüd!</span>
      <Link
        href="/ekell"
        className="text-ink underline underline-offset-4 transition hover:text-muted"
      >
        Vaata, mida see oskab →
      </Link>
    </div>
  );
};

export default AnnouncementBar;
