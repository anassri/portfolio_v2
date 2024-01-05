import { FunctionComponent } from "react";
import { LogoIcon } from "../icons/icons.component";
import { Navigation } from "../navigation/navigation.component";
import { Footer } from "../footer/footer.component";

type HeaderProps = {
  sectionInView: "ABOUT" | "EXPERIENCE" | "PROJECTS";
};

export const Header: FunctionComponent<HeaderProps> = ({ sectionInView }) => {
  return (
    <div className="p-12 flex lg:flex-col justify-center lg:justify-between lg:w-1/3">
      <div className="lg:sticky lg:top-12">
        <div className="lg:pb-20">
          <LogoIcon />
        </div>
        <div className="hidden lg:flex">
          <Navigation sectionInView={sectionInView} />
        </div>
      </div>
      <div className="hidden lg:block sticky bottom-12">
        <Footer />
      </div>
    </div>
  );
};
