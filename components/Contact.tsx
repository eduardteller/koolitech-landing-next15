/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Footer from "./Footer";
import HeaderPrimary from "./HeaderPrimary";
import Loader from "./Loader";

import { sendContact } from "@/actions/action";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Palun sisestage oma nimi"),
  school: z.string().min(1, "Kooli nimi on kohustuslik"),
  email: z.email("Vale emaili aadressi formaat"),
  phone: z.string().optional(),
  text: z.string().min(1, "Palun sisestage sõnum"),
});

const Contact = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState({
    name: false,
    school: false,
    email: false,
    text: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    email: "",
    phone: "",
    text: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendToEmail = async () => {
    try {
      contactSchema.parse(formData);
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.issues.forEach((error) => {
          switch (error.path[0]) {
            case "name":
              setError((prevError) => ({ ...prevError, name: true }));
              break;
            case "school":
              setError((prevError) => ({ ...prevError, school: true }));
              break;
            case "email":
              setError((prevError) => ({ ...prevError, email: true }));
              break;
            case "text":
              setError((prevError) => ({ ...prevError, text: true }));
              break;
            default:
              break;
          }
          toast.error(error.message, {
            position: "bottom-center",
          });
        });
        return;
      }
    }
    setLoader(true);

    const resp = await sendContact(formData);
    if (resp.status) {
      toast.success("Teie sõnum on saadetud! Aitäh! 🚀", {
        position: "top-center",
      });
    } else {
      toast.error("Vabandame, midagi läks valesti! 😔", {
        position: "top-center",
      });
    }
    setError({
      name: false,
      school: false,
      email: false,
      text: false,
    });
    setFormData({
      name: "",
      school: "",
      email: "",
      phone: "",
      text: "",
    });
    setLoader(false);
  };

  const fieldBase =
    "w-full rounded-xl border bg-white px-4 py-3.5 text-ink outline-none transition placeholder:text-ink/40 focus:border-brass focus:ring-2 focus:ring-brass/25 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <>
      <Toaster />
      <HeaderPrimary />
      <main className="bg-chalk">
        <div className="mx-auto max-w-3xl px-6 pb-24 pt-12 sm:px-8 md:pt-16">
          <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brass">
            Kontakt
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
            Võta meiega ühendust
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
            Kirjuta meile aadressile{" "}
            <a
              className="font-medium text-brass underline-offset-4 hover:underline"
              href="mailto:info@koolitech.ee"
            >
              info@koolitech.ee
            </a>{" "}
            või täida allolev vorm — vastame esimesel võimalusel.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendToEmail();
            }}
            className="mt-10 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_24px_50px_-30px_rgba(15,23,42,0.45)] ring-1 ring-ink/10 sm:p-8"
          >
            <input
              className={`${fieldBase} ${error.name ? "border-signal" : "border-ink/15"}`}
              type="text"
              name="name"
              aria-label="Teie nimi"
              placeholder="Teie nimi"
              value={formData.name}
              onChange={handleChange}
              disabled={loader}
            />

            <input
              className={`${fieldBase} ${error.school ? "border-signal" : "border-ink/15"}`}
              type="text"
              name="school"
              aria-label="Kool"
              placeholder="Kool"
              value={formData.school}
              onChange={handleChange}
              disabled={loader}
            />

            <div className="flex w-full flex-col gap-4 md:flex-row">
              <input
                name="email"
                className={`${fieldBase} ${error.email ? "border-signal" : "border-ink/15"}`}
                type="text"
                aria-label="Emaili aadress"
                placeholder="Emaili aadress"
                value={formData.email}
                onChange={handleChange}
                disabled={loader}
              />
              <input
                name="phone"
                className={`${fieldBase} border-ink/15`}
                type="text"
                aria-label="Telefoni number (valikuline)"
                placeholder="(Valikuline) Telefoni number"
                value={formData.phone}
                onChange={handleChange}
                disabled={loader}
              />
            </div>

            <textarea
              name="text"
              className={`${fieldBase} max-h-96 min-h-48 md:max-h-60 md:min-h-32 ${error.text ? "border-signal" : "border-ink/15"}`}
              aria-label="Sõnum"
              placeholder="Sõnum"
              value={formData.text}
              onChange={handleChange}
              disabled={loader}
            />

            <button
              type="submit"
              disabled={loader}
              className="mt-2 inline-flex min-w-48 items-center justify-center self-start rounded-xl bg-brass px-7 py-3.5 font-semibold text-ink transition duration-150 hover:bg-brass/85 disabled:opacity-70"
            >
              {loader ? <Loader /> : "Saada"}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
