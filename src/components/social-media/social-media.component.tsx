import { FunctionComponent } from "react";
import { ClickableElement } from "../clickable-element/clickable-element.component";
import { GithubIcon, LinkedInIcon, XIcon } from "../icons/icons.component";
import { openInNewTab } from "../../utils/general.utils";

export const SocialMedia: FunctionComponent = () => {
  return (
    <div className="flex gap-x-4 mb-8">
      <ClickableElement
        className="opacity-75 hover:opacity-100 transition duration-250 ease-in-out"
        onClick={() => openInNewTab("https://github.com/anassri")}
      >
        <GithubIcon />
      </ClickableElement>
      <ClickableElement
        className="opacity-75 hover:opacity-100 transition duration-250 ease-in-out"
        onClick={() => openInNewTab("https://www.linkedin.com/in/anassri/")}
      >
        <LinkedInIcon />
      </ClickableElement>
      <ClickableElement
        className="opacity-75 hover:opacity-100 transition duration-250 ease-in-out"
        onClick={() => openInNewTab("https://twitter.com/ammar_nassri")}
      >
        <XIcon />
      </ClickableElement>
    </div>
  );
};
