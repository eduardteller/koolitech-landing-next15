import GithubSlugger from "github-slugger";

export interface DocSection {
  id: string;
  title: string;
}

/** Top-level sections we never want in the sidebar (internal / page title). */
const EXCLUDED_TITLES = new Set(["Soovitatud järgmised lehed"]);

/**
 * Extract the section (`##`) headings from a markdown string and turn them
 * into sidebar sections. The `#` heading is the page title and stays out.
 *
 * Every heading (any level) is fed through a single {@link GithubSlugger} in
 * document order — the exact same thing `rehype-slug` does when it assigns
 * `id`s to the rendered headings — so the ids generated here are guaranteed to
 * match the anchors in the rendered page (including duplicate numbering).
 *
 * Any title listed in {@link EXCLUDED_TITLES} is skipped.
 */
export function extractSections(markdown: string): DocSection[] {
  const slugger = new GithubSlugger();
  const sections: DocSection[] = [];
  let inFence = false;

  for (const rawLine of markdown.split("\n")) {
    // Toggle fenced code blocks (``` or ~~~) so `#` lines inside code are ignored.
    if (/^\s*(```|~~~)/.test(rawLine)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(rawLine);
    if (!match) continue;

    const level = match[1].length;
    const title = match[2].trim();
    // Slug every heading to keep the slugger's duplicate counter in sync with
    // rehype-slug, even for headings we don't surface in the nav.
    const id = slugger.slug(title);

    if (level !== 2) continue;
    if (EXCLUDED_TITLES.has(title)) continue;

    sections.push({ id, title });
  }

  return sections;
}
