import { getLatestRelease, RELEASES_PAGE } from "@/lib/ekell-release";
import { NextResponse } from "next/server";

// koolitech.ee/ekell/laadi-alla/windows: the address we put in emails.
// It always points at the newest installer, so emails never go stale.
export async function GET() {
  const release = await getLatestRelease();

  // Temporary redirect: the target changes with every release, so
  // browsers and CDNs must not remember it.
  const res = NextResponse.redirect(release?.url ?? RELEASES_PAGE, 302);
  res.headers.set("Cache-Control", "no-store");
  return res;
}
