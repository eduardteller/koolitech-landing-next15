// The E-Kell desktop installer lives in the GitHub releases of
// eduardteller/ekell-app. The site never links there directly: the
// download page and the link in our emails both go through
// /ekell/laadi-alla/windows, which redirects to the newest installer.

const REPO = "eduardteller/ekell-app";

/** Where /ekell/laadi-alla/windows sends people if GitHub's API is down. */
export const RELEASES_PAGE = `https://github.com/${REPO}/releases/latest`;

/** The koolitech.ee address of the installer. Use it in emails. */
export const DOWNLOAD_PATH = "/ekell/laadi-alla/windows";

export type EkellRelease = {
  /** "0.0.23" */
  version: string;
  /** "E-Kell-0.0.23.Setup.exe" */
  fileName: string;
  /** GitHub URL of the installer. */
  url: string;
  /** Bytes. */
  size: number;
  publishedAt: string;
};

type GitHubRelease = {
  tag_name: string;
  published_at: string;
  assets: { name: string; size: number; browser_download_url: string }[];
};

/**
 * The newest published release. Cached for ten minutes, so a new
 * release shows up on the site shortly after it is published, and the
 * unauthenticated GitHub API limit (60 requests an hour) is never hit.
 * Returns null when GitHub can't be reached or the release has no
 * installer.
 */
export async function getLatestRelease(): Promise<EkellRelease | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/releases/latest`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 600 },
      },
    );
    if (!res.ok) return null;

    const release: GitHubRelease = await res.json();
    // The release also carries the Squirrel update files (RELEASES,
    // *.nupkg); the installer is the Setup.exe.
    const installer = release.assets.find((a) => a.name.endsWith("Setup.exe"));
    if (!installer) return null;

    return {
      version: release.tag_name.replace(/^v/, ""),
      fileName: installer.name,
      url: installer.browser_download_url,
      size: installer.size,
      publishedAt: release.published_at,
    };
  } catch {
    return null;
  }
}
