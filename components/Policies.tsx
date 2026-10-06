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
      <main className="bg-surface">
        <div className="mx-auto max-w-3xl px-6 pb-24 pt-12 sm:px-8 md:pt-16">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
          <article
            className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h1:mb-8 prose-h1:text-4xl prose-h1:font-semibold prose-h1:leading-[1.05] md:prose-h1:text-5xl prose-h2:mt-12 prose-h2:text-2xl prose-h2:font-semibold prose-h3:mt-8 prose-h3:text-lg prose-h3:font-semibold prose-p:leading-relaxed prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold"
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
