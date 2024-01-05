import React, { FunctionComponent, useState } from "react";
import { Header } from "../header/header.component";
import { Body } from "../body/body.component";
import { Footer } from "../footer/footer.component";

export const MainContainer: FunctionComponent = () => {
  const [sectionInView, setSectionInView] = useState<
    "ABOUT" | "EXPERIENCE" | "PROJECTS"
  >("ABOUT");

  return (
    <div className="w-full min-h-screen relative flex flex-col lg:justify-center lg:flex-row">
      <Header sectionInView={sectionInView} />
      <Body sectionInView={sectionInView} setSectionInView={setSectionInView} />
      <div className="hidden lg:block lg:w-1/3" />
      <div className="block text-center lg:max-w-60 lg:text-left lg:hidden my-12">
        <Footer />
      </div>

      <div
        className="fixed -z-10 opacity-35 h-screen w-screen"
        style={{
          backgroundImage: "radial-gradient(circle, #7ae7ad, #282828)",
        }}
      />
      <div className="fixed -z-20 bg-zinc-900 h-screen w-screen" />
    </div>
  );
};
