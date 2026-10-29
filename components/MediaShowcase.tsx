import Image from "next/image";

const media = [
  {
    src: "/assets/desktop/haalesalvestus.webp",
    alt: "E-Kell häälsalvestuse vaade salvestatud teadetega",
    title: "Häälsalvestus ja otseedastus",
    text: "Salvesta teated või räägi otse kõlaritesse.",
  },
  {
    src: "/assets/desktop/raadio.webp",
    alt: "E-Kell raadiovaade jaamade nimekirjaga",
    title: "Raadio",
    text: "Mängi raadiojaamu kohe või ajakava järgi.",
  },
  {
    src: "/assets/desktop/mp3.webp",
    alt: "E-Kell MP3-mängija esitusvaade",
    title: "MP3-mängija",
    text: "Laadi üles ja mängi oma helifaile.",
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
          className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-sm"
        >
          <div className="aspect-[16/10] overflow-hidden border-b border-line bg-ground">
            <Image
              width={2560}
              height={1600}
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
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
