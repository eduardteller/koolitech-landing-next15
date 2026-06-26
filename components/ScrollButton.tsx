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
      className="rounded-xl bg-ink px-7 py-3.5 font-medium text-chalk shadow-xs transition duration-150 hover:bg-ink/85"
    >
      Uuri lähemalt
    </button>
  );
};

export default ScrollButton;
