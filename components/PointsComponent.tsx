import { BellRing, Earth, Laptop, Mic, Music, Siren } from "lucide-react";

const PointsComponent = () => {
  const baseCss =
    "flex w-full basis-1/3 flex-col items-center gap-8 text-center";
  const logoCss = "text-slate-800";
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex w-full flex-col gap-8 max-md:px-8 md:flex-row">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="150"
          className={baseCss}
        >
          {/* <div className="text-7xl">🌍</div> */}
          <Laptop size={96} className={logoCss} />
          <h4 className="text-xl font-semibold">Kasutajasõbralik liides</h4>
          <p className="prose prose-base text-slate-800/80">
            Intuitiivne ja hõlpsasti kasutatav.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="250"
          className={baseCss}
        >
          <BellRing size={96} className={logoCss} />
          <h4 className="text-xl font-semibold">
            Paindlik tunniplaan ja kellad
          </h4>
          <p className="prose prose-base text-slate-800/80">
            Loo ja vaheta kergesti erinevaid ajakavasid (nt tavaline nädal,
            pühadenädal).
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="350"
          className={baseCss}
        >
          <Earth size={96} className={logoCss} />
          <h4 className="text-xl font-semibold">
            Veebiklient – juhtimine igalt poolt
          </h4>
          <p className="prose prose-base text-slate-800/80">
            Halda koolikelli ja ajakavasid mis tahes seadmest, kõik
            sünkroonitakse automaatselt.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-8 max-md:px-8 md:flex-row">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="450"
          className={baseCss}
        >
          <Siren size={96} className={logoCss} />
          <h4 className="text-xl font-semibold">
            Alarmsüsteem kriitilisteks olukordadeks
          </h4>
          <p className="prose prose-base text-slate-800/80">
            Käivita kiiresti tulekahju-, evakuatsiooni- või muud häiresignaalid.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="550"
          className={baseCss}
        >
          <Mic size={96} className={logoCss} />
          <h4 className="text-xl font-semibold">
            Helisalvestus ja teadaannete esitamine
          </h4>
          <p className="prose prose-base text-slate-800/80">
            Salvesta ja mängi tähtsaid kooliteateid, teadandeid ja erakorralisi
            sõnumeid.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="650"
          className={baseCss}
        >
          <Music size={96} className={logoCss} />
          <h4 className="text-xl font-semibold">
            Kohandatavad koolikella helid
          </h4>
          <p className="prose prose-base text-slate-800/80">
            Kasuta enda muusikat, salvestisi või muid helisid koolikelladena.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PointsComponent;
