"use client";

const ScrollButton = () => {
  return (
    <button
      id="scroll-btn"
      onClick={() => {
        const nick = document.getElementById("scroll-to-div") as HTMLDivElement;
        nick.scrollIntoView({ behavior: "smooth" });
      }}
      className="rounded-xl bg-emerald-400 px-8 py-3 font-semibold text-white transition duration-100 hover:bg-opacity-50 md:max-w-md"
    >
      Uuri lähemalt
    </button>
  );
};

export default ScrollButton;
