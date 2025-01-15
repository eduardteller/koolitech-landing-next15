import React from "react";
import Footer from "./Footer";
import HeaderSecondary from "./HeaderSecondary";

interface Props {
  children: React.ReactNode;
}

const Policies = ({ children }: Props) => {
  return (
    <>
      <HeaderSecondary></HeaderSecondary>
      <main className="bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col px-8 md:px-16">
          <div className="prose prose-base">{children}</div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Policies;
