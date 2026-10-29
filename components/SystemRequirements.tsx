import SpecPlate, { type SpecRow } from "./SpecPlate";

const requirements: SpecRow[] = [
  { label: "Operatsioonisüsteem", value: "Windows 10 (64-bit)" },
  { label: "Protsessor", value: "Kahetuumaline x64" },
  { label: "Mälu (RAM)", value: "4 GB" },
  { label: "Vaba kettaruum", value: "1 GB" },
  { label: "Ekraan", value: "1024 × 768" },
  { label: "Heliväljund", value: "Helikaart või USB-helikaart" },
  { label: "Võrguühendus", value: "Vajalik" },
  {
    label: "Mikrofon",
    value: "Valikuline",
    note: "vajalik teadete salvestamiseks",
  },
];

const SystemRequirements = () => {
  return (
    <SpecPlate
      title="E-Kell töölauarakendus"
      tag="Miinimumnõuded"
      rows={requirements}
    />
  );
};

export default SystemRequirements;
