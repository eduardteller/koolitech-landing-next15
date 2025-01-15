import { useState } from "react";
import Footer from "./Footer";
import HeaderSecondary from "./HeaderSecondary";
import Loader from "./Loader";

import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Palun sisestage oma nimi"),
  school: z.string().min(1, "Kooli nimi on kohustuslik"),
  email: z.string().email("Vale emaili aadressi formaat"),
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
        e.errors.forEach((error) => {
          console.log(error.path[0]);
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
    fetch("/api/email-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData }),
    })
      .then((response) => {
        if (!response.ok) {
          toast.error("Vabandame, midagi läks valesti! 😔");
        } else {
          toast.success("Teie sõnum on saadetud! Aitäh! 🚀");
        }
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
      })
      .finally(() => {
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
      });
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <HeaderSecondary></HeaderSecondary>
      <main className="py-10 text-slate-900">
        <div className="mx-auto flex max-w-3xl flex-col px-8 md:px-16">
          <h1 className="mb-8 text-4xl font-extrabold">Kontakt</h1>
          <p className="mb-4">
            Palun kirjutage meile meili aadressile:
            <a
              className="ml-2 hover:text-blue-500 hover:underline"
              href="mailto:info@koolitech.ee"
            >
              <strong>info@koolitech.ee</strong>
            </a>
          </p>
          <p className="mb-4 text-lg font-bold">
            <strong className="uppercase text-slate-900/60">Või</strong>
          </p>
          <p className="mb-4 text-xl font-bold">Täitke vormi:</p>
          <input
            className={`${error.name ? "border-red-500" : "border-slate-400"} mb-4 h-10 w-full rounded-lg border bg-slate-100 px-4 text-slate-900`}
            type="text"
            name="name"
            placeholder="Teie nimi"
            value={formData.name}
            onChange={handleChange}
            disabled={loader}
          />

          <input
            className={`${error.name ? "border-red-500" : "border-slate-400"} mb-4 h-10 w-full rounded-lg border bg-slate-100 px-4 text-slate-900`}
            type="text"
            name="school"
            placeholder="Kool"
            value={formData.school}
            onChange={handleChange}
            disabled={loader}
          />

          <div className="flex w-full flex-col md:flex-row">
            <input
              name="email"
              className={`${error.name ? "border-red-500" : "border-slate-400"} mb-4 mr-4 h-10 w-full rounded-lg border bg-slate-100 px-4 text-slate-900`}
              type="text"
              placeholder="Emaili aadress"
              value={formData.email}
              onChange={handleChange}
              disabled={loader}
            />
            <input
              name="phone"
              className="mb-4 h-10 w-full rounded-lg border border-slate-400 bg-slate-100 px-4 text-slate-900"
              type="text"
              placeholder="(Valikuline) Telefoni number"
              value={formData.phone}
              onChange={handleChange}
              disabled={loader}
            />
          </div>

          <textarea
            name="text"
            className={`${error.name ? "border-red-500" : "border-slate-400"} md:min-h-30 mb-4 max-h-96 min-h-48 w-full rounded-lg border bg-slate-100 p-4 text-slate-900 md:max-h-60`}
            placeholder="Sõnum"
            value={formData.text}
            onChange={handleChange}
            disabled={loader}
          ></textarea>
          <div className="flex flex-col items-start justify-start md:flex-row">
            <button
              disabled={loader}
              onClick={sendToEmail}
              className="mt-4 flex min-w-48 flex-row items-center justify-center rounded-lg bg-newblue px-6 py-3 font-semibold text-white transition duration-100 hover:bg-opacity-50"
            >
              {loader ? <Loader></Loader> : "Saada"}
              <span className="loading loading-spinner loading-xs ml-2 hidden"></span>
            </button>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Contact;
