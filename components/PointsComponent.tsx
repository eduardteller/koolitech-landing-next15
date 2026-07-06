import {
  BellRing,
  Earth,
  FileMusic,
  Laptop,
  Mic,
  Music,
  Radio,
  RefreshCw,
  Siren,
} from "lucide-react";

const features = [
  {
    Icon: Laptop,
    title: "Kasutajasõbralik liides",
    text: "Intuitiivne ja hõlpsasti kasutatav.",
    delay: 150,
  },
  {
    Icon: BellRing,
    title: "Paindlik tunniplaan ja kellad",
    text: "Loo ja vaheta kergesti erinevaid ajakavasid (nt tavaline nädal, pühadenädal).",
    delay: 250,
  },
  {
    Icon: Earth,
    title: "Veebiklient – juhtimine igalt poolt",
    text: "Halda koolikelli ja ajakavasid mis tahes seadmest, kõik sünkroonitakse automaatselt.",
    delay: 350,
  },
  {
    Icon: Siren,
    title: "Alarmsüsteem kriitilisteks olukordadeks",
    text: "Käivita kiiresti tulekahju-, evakuatsiooni- või muud häiresignaalid.",
    delay: 450,
    alarm: true,
  },
  {
    Icon: Mic,
    title: "Helisalvestus ja teadaannete esitamine",
    text: "Salvesta ja mängi tähtsaid kooliteateid, teadandeid ja erakorralisi sõnumeid.",
    delay: 550,
  },
  {
    Icon: Music,
    title: "Kohandatavad koolikella helid",
    text: "Kasuta enda muusikat, salvestisi või muid helisid koolikelladena.",
    delay: 650,
  },
  {
    Icon: Radio,
    title: "Raadio otse ja ajakavaga",
    text: "Mängi raadiojaamu käsitsi või ajasta need automaatselt käivituma.",
    delay: 750,
  },
  {
    Icon: FileMusic,
    title: "MP3-helifailide mängija",
    text: "Lae üles ja mängi oma MP3-faile otse tarkvarast.",
    delay: 850,
  },
  {
    Icon: RefreshCw,
    title: "Pilvesünkroonimine",
    text: "Ajakavad ja seaded sünkroonitakse automaatselt ja töötavad ka võrguühenduseta.",
    delay: 950,
  },
];

const PointsComponent = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
      {features.map(({ Icon, title, text, delay, alarm }) => (
        <div
          key={title}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay={delay}
          className="flex flex-col items-center gap-4 text-center"
        >
          <span
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ring-1 ${
              alarm ? "bg-signal/10 ring-signal/20" : "bg-chalk ring-ink/10"
            }`}
          >
            <Icon
              size={30}
              strokeWidth={1.75}
              className={alarm ? "text-signal" : "text-brass"}
            />
          </span>
          <h4 className="font-display text-lg font-semibold leading-snug text-ink">
            {title}
          </h4>
          <p className="max-w-xs leading-relaxed text-ink/65">{text}</p>
        </div>
      ))}
    </div>
  );
};

export default PointsComponent;
