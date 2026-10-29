import Link from "next/link";

interface Props {
  kicker: string;
  title: string;
  text: string;
  href: string;
  label: string;
}

/* Closing call to action on a dark band (same layout as the E-Kell page CTA). */
const CtaBand = ({ kicker, title, text, href, label }: Props) => {
  return (
    <div className="band px-6 py-28 text-center sm:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6">
        <p className="text-kicker text-xs font-semibold tracking-widest uppercase">
          {kicker}
        </p>
        <h2 className="text-ink text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
          {title}
        </h2>
        <p className="text-muted max-w-md text-lg leading-relaxed">{text}</p>
        <Link
          href={href}
          className="bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active mt-2 rounded-lg px-8 py-3.5 font-semibold transition duration-150"
        >
          {label}
        </Link>
      </div>
    </div>
  );
};

export default CtaBand;
