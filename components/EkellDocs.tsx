import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import Markdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { extractSections } from "@/lib/docs-toc";
import DocsSidebar from "./DocsSidebar";
import Footer from "./Footer";
import HeaderPrimary from "./HeaderPrimary";

const EkellDocs = () => {
  const content = fs.readFileSync(
    path.join(process.cwd(), "content", "ekell-docs.md"),
    "utf8",
  );
  const sections = extractSections(content);

  return (
    <>
      <HeaderPrimary />
      <main className="bg-surface">
        <div className="mx-auto flex max-w-screen-xl flex-col px-6 pb-24 pt-12 sm:px-8 md:pt-16 lg:flex-row lg:gap-12">
          <DocsSidebar sections={sections} />

          <div className="min-w-0 max-w-3xl flex-1">
            <div className="mb-10 flex flex-wrap items-center gap-5">
              <Link
                href="/ekell"
                className="text-sm font-semibold text-primary underline-offset-4 hover:text-primary-hover hover:underline"
              >
                ← Tagasi E-Kell lehele
              </Link>
              <a
                href="https://dashboard.koolitech.ee"
                className="text-sm font-semibold text-primary underline-offset-4 hover:text-primary-hover hover:underline"
              >
                E-Kell Web →
              </a>
            </div>

            <article className="prose prose-lg max-w-none prose-headings:scroll-mt-28 prose-headings:font-semibold prose-headings:tracking-tight prose-h1:mb-8 prose-h1:text-4xl prose-h1:font-semibold prose-h1:leading-[1.05] md:prose-h1:text-5xl prose-h2:mt-12 prose-h2:text-2xl prose-h2:font-semibold prose-h3:mt-8 prose-h3:text-lg prose-h3:font-semibold prose-p:leading-relaxed prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold">
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug]}
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
