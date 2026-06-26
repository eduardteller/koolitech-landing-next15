import React from "react";
import Footer from "./Footer";
import HeaderPrimary from "./HeaderPrimary";

interface Props {
  eyebrow: string;
  children: React.ReactNode;
}

const Policies = ({ eyebrow, children }: Props) => {
  return (
    <>
      <HeaderPrimary />
      <main className="bg-chalk">
        <div className="mx-auto max-w-3xl px-6 pb-24 pt-12 sm:px-8 md:pt-16">
          <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
            {eyebrow}
          </p>
          <article
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:tracking-tight prose-headings:text-ink prose-h1:mb-8 prose-h1:text-4xl prose-h1:font-bold prose-h1:leading-[1.05] md:prose-h1:text-5xl prose-h2:mt-12 prose-h2:text-2xl prose-h2:font-bold prose-h3:mt-8 prose-h3:text-lg prose-h3:font-semibold prose-p:leading-relaxed prose-p:text-ink/70 prose-a:font-medium prose-a:text-brass prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-strong:text-ink prose-li:text-ink/70 marker:text-brass"
          >
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Policies;
