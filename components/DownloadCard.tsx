"use client";

import { DOWNLOAD_PATH } from "@/lib/ekell-release";
import { Download } from "lucide-react";
import { useState } from "react";
import SpecPlate, { type SpecRow } from "./SpecPlate";

interface Props {
  rows: SpecRow[];
  /** Installer file name, when GitHub could tell us. */
  fileName?: string;
}

/* The installer plate on the download page. The download is a plain
   link to the redirect route, so the page stays put while the browser
   saves the file; pressing it confirms the click worked. */
const DownloadCard = ({ rows, fileName }: Props) => {
  const [started, setStarted] = useState(false);

  return (
    <SpecPlate title="E-Kell töölauarakendus" rows={rows} reveal={false}>
      {/* Not next/link: the route answers with a redirect to the file,
          not a page to prefetch. */}
      <a
        href={DOWNLOAD_PATH}
        onClick={() => setStarted(true)}
        className="bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active flex w-full items-center justify-center gap-2.5 rounded-lg px-8 py-3.5 font-semibold transition duration-150"
      >
        <Download size={20} strokeWidth={2} aria-hidden="true" />
        Laadi alla
      </a>
      {fileName && (
        <p className="text-muted mt-3 text-center text-xs break-all">
          {fileName}
        </p>
      )}
      <p
        aria-live="polite"
        className="text-ink text-center text-sm text-balance empty:hidden [&:not(:empty)]:mt-3"
      >
        {started &&
          "Allalaadimine algas. Kui see ei alanud, vajuta nuppu uuesti."}
      </p>
    </SpecPlate>
  );
};

export default DownloadCard;
