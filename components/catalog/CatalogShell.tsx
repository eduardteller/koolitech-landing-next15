import type { CategorySlug } from "@/content/categories";
import type { ReactNode } from "react";
import CtaBand from "../CtaBand";
import Footer from "../Footer";
import HeaderPrimary from "../HeaderPrimary";
import CategoryNav from "./CategoryNav";

interface Props {
  title: string;
  lead: string;
  /** Highlights this category in the sidebar. */
  active?: CategorySlug;
  children: ReactNode;
}

/* Page frame for /tooted and /tooted/[kategooria]: hero, category
   sidebar + content column, closing CTA. */
const CatalogShell = ({ title, lead, active, children }: Props) => {
  return (
    <>
      <HeaderPrimary />
      <div className="relative overflow-x-hidden">
        <main>
          <section className="ruled-paper bg-ground relative">
            <div className="relative mx-auto max-w-screen-xl px-6 pt-12 pb-14 sm:px-8 md:pt-16">
              <p className="text-kicker mb-5 text-xs font-semibold tracking-widest uppercase">
                Tootevalik
              </p>
              <h1 className="text-ink max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="text-muted mt-5 max-w-2xl text-lg leading-relaxed">
                {lead}
              </p>
            </div>
          </section>

          <div className="bg-ground px-6 pb-24 sm:px-8">
            {/* grid-cols-1 is minmax(0, 1fr): without it the mobile pill
                row's min-content width would stretch the column. */}
            <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
              <CategoryNav active={active} />
              <div className="min-w-0">{children}</div>
            </div>
          </div>

          <CtaBand
            kicker="Aitame valida"
            title="Ei leidnud sobivat?"
            text="Kirjuta meile ja paneme koolile kokku sobiva komplekti. Konsultatsioon on tasuta."
            href="/contact"
            label="Küsi pakkumist"
          />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CatalogShell;
