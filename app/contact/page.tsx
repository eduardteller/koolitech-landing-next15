import Contact from "@/components/Contact";

interface Props {
  // ?toode=<product name> from a product page, ?teema=<subject> from a
  // category page; either prefills the message.
  searchParams: Promise<{ toode?: string | string[]; teema?: string | string[] }>;
}

const first = (value?: string | string[]) =>
  (Array.isArray(value) ? value[0] : value)?.trim().slice(0, 120);

const page = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const toode = first(params.toode);
  const teema = first(params.teema);

  const initialText = toode
    ? `Soovin hinnapakkumist: ${toode}\n\n`
    : teema
      ? `Teema: ${teema}\n\n`
      : "";

  return <Contact initialText={initialText} />;
};

export default page;
