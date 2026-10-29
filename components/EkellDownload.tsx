import { getLatestRelease } from "@/lib/ekell-release";
import Link from "next/link";
import CtaBand from "./CtaBand";
import DownloadCard from "./DownloadCard";
import Footer from "./Footer";
import HeaderPrimary from "./HeaderPrimary";
import type { SpecRow } from "./SpecPlate";
import SystemRequirements from "./SystemRequirements";

// Formatted here, not in the browser, so server and client agree and
// the date is the Estonian one whatever the server's time zone.
const releaseDate = new Intl.DateTimeFormat("et-EE", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Tallinn",
});

// Windows Explorer counts in MiB and calls it MB; match what people
// will see in their Downloads folder.
const fileSize = (bytes: number) => `${Math.round(bytes / 1024 / 1024)} MB`;

const EkellDownload = async () => {
  const release = await getLatestRelease();

  // Without GitHub the plate keeps the system row and the button still
  // works: the redirect route falls back to the releases page.
  const rows: SpecRow[] = [
    ...(release
      ? [
          { label: "Versioon", value: release.version },
          {
            label: "Avaldatud",
            value: releaseDate.format(new Date(release.publishedAt)),
          },
          { label: "Faili suurus", value: fileSize(release.size) },
        ]
      : []),
    { label: "Operatsioonisüsteem", value: "Windows 10 või uuem (64-bit)" },
  ];

  return (
    <>
      <HeaderPrimary />
      <div className="relative overflow-x-hidden">
        <main>
          <section className="bg-ground px-6 pt-12 pb-24 sm:px-8 md:pt-20">
            <div className="mx-auto max-w-xl">
              <h1 className="sr-only">Laadi alla E-Kell</h1>
              <DownloadCard rows={rows} fileName={release?.fileName} />
              <p className="text-muted mt-6 text-center text-sm leading-relaxed text-balance">
                Kui Windows näitab teadet „Windows kaitses teie arvutit“, vali
                Lisateave ja siis Käivita siiski. Täpsemad juhised leiad{" "}
                <Link
                  href="/ekell/docs"
                  className="text-ink font-semibold underline underline-offset-4"
                >
                  dokumentatsioonist
                </Link>
                .
              </p>
            </div>
          </section>

          <div className="bg-surface px-6 py-24 sm:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-ink text-center text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
                Kas kooli arvuti sobib?
              </h2>
              <div className="mt-14">
                <SystemRequirements />
              </div>
            </div>
          </div>

          <CtaBand
            kicker="Klienditugi"
            title="Vajad paigaldusel abi?"
            text="Kirjuta või helista meile ja aitame E-Kella tööle saada."
            href="/contact"
            label="Võta ühendust"
          />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default EkellDownload;
