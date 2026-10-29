import Link from "next/link";

// Height of the bar in px (h-9). The sticky header uses it to tell when
// the bar has scrolled away and the header is pinned to the top.
export const ANNOUNCEMENT_BAR_HEIGHT = 36;

const AnnouncementBar = () => {
  return (
    <div className="band text-ink flex h-9 items-center justify-center gap-3 px-6 text-xs font-semibold tracking-wide whitespace-nowrap sm:text-sm">
      <span>E-Kell on nüüd saadaval!</span>
      <Link
        href="/ekell"
        className="text-ink hover:text-muted underline underline-offset-4 transition"
      >
        Vaata, mida see oskab →
      </Link>
    </div>
  );
};

export default AnnouncementBar;
