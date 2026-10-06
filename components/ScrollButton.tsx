"use client";

const ScrollButton = () => {
  return (
    <button
      id="scroll-btn"
      onClick={() => {
        const target = document.getElementById(
          "scroll-to-div",
        ) as HTMLDivElement | null;
        target?.scrollIntoView({ behavior: "smooth" });
      }}
      className="rounded-lg bg-primary px-6 py-3 font-semibold text-on-primary transition duration-150 hover:bg-primary-hover active:bg-primary-active"
    >
      Uuri lähemalt
    </button>
  );
};

export default ScrollButton;
