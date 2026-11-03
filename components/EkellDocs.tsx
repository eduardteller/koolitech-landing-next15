import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import Markdown, { type Components } from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { Shot } from "@/content/ekell-guide";
import { extractSections } from "@/lib/docs-toc";
import { webpSize } from "@/lib/webp-size";
import DocsSidebar from "./DocsSidebar";
import Footer from "./Footer";
import Screenshot from "./guide/Screenshot";
import HeaderPrimary from "./HeaderPrimary";

const frames: Shot["frame"][] = ["window", "browser", "dialog", "phone", "plain"];

/* Markdown images render in the guide's screenshot frames. The title picks
   the frame and an optional max width:

     ![Sisselogimine](/assets/guide/web/login.webp "dialog 18rem")

   Without one, desktop screenshots get the app window and web ones the
   browser. Sizes come from the file, so images must be WebP in public/. */
const DocImage: Components["img"] = ({ src, alt = "", title }) => {
  if (typeof src !== "string") return null;
  const size = webpSize(src);
  if (!size) {
    throw new Error(`Docs image ${src} must be a WebP file in public/`);
  }
  const [first, maxWidth] = (title ?? "").split(" ");
  const frame = frames.find((f) => f === first) ?? (src.includes("/web/") ? "browser" : "window");
  return <Screenshot shot={{ src, alt, ...size, frame, maxWidth }} />;
};

/* A figure may not sit inside a <p>, so a paragraph of nothing but images
   becomes a block of its own. Two or more go side by side, each as wide
   as the max width in its title, so give those one ("phone 13rem"). */
const Paragraph: Components["p"] = ({ node, children }) => {
  const kids = node?.children ?? [];
  const images = kids.filter(
    (kid) => kid.type === "element" && kid.tagName === "img",
  );
  const onlyImages =
    images.length > 0 &&
    kids.every(
      (kid) =>
        (kid.type === "element" && kid.tagName === "img") ||
        (kid.type === "text" && !kid.value.trim()),
    );
  if (!onlyImages) return <p>{children}</p>;
  return (
    <div
      className={`not-prose my-8 ${
        images.length > 1
          ? "grid items-start gap-6 sm:auto-cols-max sm:grid-flow-col"
          : ""
      }`}
    >
      {children}
    </div>
  );
};

const EkellDocs = () => {
  const content = fs.readFileSync(
    path.join(process.cwd(), "content", "ekell-docs.md"),
    "utf8",
  );
  const sections = extractSections(content);

  return (
    <>
      <HeaderPrimary />
      <main className="bg-ground">
        <div className="mx-auto flex max-w-screen-xl flex-col px-6 pb-24 pt-12 sm:px-8 md:pt-16 lg:flex-row lg:gap-12">
          <DocsSidebar sections={sections} />

          <div className="min-w-0 max-w-3xl flex-1">
            <div className="mb-10 flex flex-wrap items-center gap-5">
              <Link
                href="/ekell"
                className="text-sm font-semibold text-muted underline-offset-4 hover:text-ink hover:underline"
              >
                ← Tagasi E-Kella lehele
              </Link>
              <a
                href="https://dashboard.koolitech.ee"
                className="text-sm font-semibold text-muted underline-offset-4 hover:text-ink hover:underline"
              >
                E-Kell Web →
              </a>
            </div>

            {/* One title, then sections (h2) split by a rule and their
                steps (h3); the scale stays close to the body text. */}
            <article className="prose max-w-none prose-headings:scroll-mt-28 prose-headings:font-semibold prose-headings:tracking-tight prose-h1:mb-6 prose-h1:text-3xl prose-h1:leading-tight md:prose-h1:text-4xl prose-h2:mb-4 prose-h2:mt-16 prose-h2:border-t prose-h2:border-line prose-h2:pt-12 prose-h2:text-2xl prose-h3:mb-2 prose-h3:mt-10 prose-h3:text-lg prose-p:leading-relaxed prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-li:my-1">
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug]}
                components={{ img: DocImage, p: Paragraph }}
              >
                {content}
              </Markdown>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EkellDocs;
