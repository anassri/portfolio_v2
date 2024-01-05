import { FunctionComponent } from "react";
import { SocialMedia } from "../social-media/social-media.component";

export const Footer: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center mx-2 lg:mx-0 lg:block">
      <SocialMedia />
      <p className="text-gray text-xs">
        Designed in <b>Figma</b>. Built with <b>React</b> and{" "}
        <b>Tailwind CSS</b>, deployed with <b>Vercel</b>. <br /> <br /> © Ammar
        Nassri 2024
      </p>
    </div>
  );
};
