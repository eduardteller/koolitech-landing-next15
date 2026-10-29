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
    title: "Lihtne kasutada",
    text: "Selge liides, millega saab hakkama juba esimesel korral.",
    delay: 150,
  },
  {
    Icon: BellRing,
    title: "Paindlik tunniplaan ja kellad",
    text: "Loo eri ajakavad, näiteks tavalise nädala ja pühadenädala jaoks, ning vaheta neid kergesti.",
    delay: 250,
  },
  {
    Icon: Earth,
    title: "Veebiliides – juhi kõikjalt",
    text: "Halda koolikellasid ja ajakavasid mis tahes seadmest. Muudatused sünkroonitakse automaatselt.",
    delay: 350,
  },
  {
    Icon: Siren,
    title: "Häiresüsteem ohuolukordadeks",
    text: "Käivita kiiresti tulekahju-, evakuatsiooni- või muu häire.",
    delay: 450,
  },
  {
    Icon: Mic,
    title: "Teadaanded ja salvestused",
    text: "Salvesta ja esita kooliteateid ning erakorralisi sõnumeid.",
    delay: 550,
  },
  {
    Icon: Music,
    title: "Oma kellahelid",
    text: "Kasuta koolikellana oma muusikat, salvestust või muud heli.",
    delay: 650,
  },
  {
    Icon: Radio,
    title: "Raadio otse ja ajakavaga",
    text: "Mängi raadiot kohe või lase sel ajakava järgi ise käivituda.",
    delay: 750,
  },
  {
    Icon: FileMusic,
    title: "MP3-mängija",
    text: "Laadi üles ja mängi oma MP3-faile otse rakendusest.",
    delay: 850,
  },
  {
    Icon: RefreshCw,
    title: "Pilvesünkroonimine",
    text: "Ajakavad ja seaded sünkroonitakse automaatselt, kuid kellad töötavad ka ilma võrguta.",
    delay: 950,
  },
];

const PointsComponent = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
      {features.map(({ Icon, title, text, delay }) => (
        <div
          key={title}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay={delay}
          className="flex flex-col items-center gap-4 text-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary-tint">
            <Icon size={30} strokeWidth={1.75} className="text-accent" />
          </span>
          <h4 className="text-lg font-semibold leading-snug text-ink">
            {title}
          </h4>
          <p className="max-w-xs leading-relaxed text-muted">{text}</p>
        </div>
      ))}
    </div>
  );
};

export default PointsComponent;
