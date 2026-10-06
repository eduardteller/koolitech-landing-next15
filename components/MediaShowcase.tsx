import Image from "next/image";

const media = [
  {
    src: "/assets/desktop/haalesalvestus.png",
    alt: "E-Kell häälsalvestuse vaade",
    title: "Häälsalvestus & otseedastus",
    text: "Salvesta teated või edasta hääl otse kõlaritesse.",
  },
  {
    src: "/assets/desktop/raadio.png",
    alt: "E-Kell raadiovaade jaamade nimekirjaga",
    title: "Raadio",
    text: "Mängi raadiojaamu otse või ajakava alusel.",
  },
  {
    src: "/assets/desktop/mp3.png",
    alt: "E-Kell MP3-mängija esitusvaade",
    title: "MP3-mängija",
    text: "Lae üles ja mängi oma helifaile.",
  },
];

const MediaShowcase = () => {
  return (
    <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
      {media.map(({ src, alt, title, text }, i) => (
        <figure
          key={title}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay={150 + i * 100}
          className="flex flex-col overflow-hidden rounded-xl border border-line bg-card shadow-sm"
        >
          <div className="aspect-[16/10] overflow-hidden border-b border-line bg-surface">
            <Image
              width={1920}
              height={1030}
              src={src}
              alt={alt}
              className="h-full w-full object-cover object-left"
            />
          </div>
          <figcaption className="flex flex-col gap-1.5 p-6">
            <h4 className="text-lg font-semibold leading-snug text-ink">
              {title}
            </h4>
            <p className="leading-relaxed text-muted">{text}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default MediaShowcase;
