import { FunctionComponent } from "react";
import { openInNewTab, scrollToElement } from "../../utils/general.utils";
import { ClickableElement } from "../clickable-element/clickable-element.component";
import resume from "../downloadable/ANassri_Resume_25.pdf";

type NavigationButtonProps = {
    text: string;
    onClick: () => void;
    isActive?: boolean;
};

const NavigationButton: FunctionComponent<NavigationButtonProps> = ({
    text,
    onClick,
    isActive = false,
}) => {
    return (
        <ClickableElement
            ariaLabel={text}
            onClick={onClick}
            className={`${
                isActive
                    ? "text-regal-green"
                    : "text-gray hover:text-regal-green transition duration-250 ease-in-out"
            }`}
        >
            {text}
        </ClickableElement>
    );
};

type NavigationProps = {
    sectionInView: "ABOUT" | "EXPERIENCE" | "PROJECTS";
};

export const Navigation: FunctionComponent<NavigationProps> = ({
    sectionInView,
}) => {
    return (
        <div className="flex flex-col gap-y-4">
            <NavigationButton
                text="ABOUT"
                onClick={() => scrollToElement("top")}
                isActive={sectionInView === "ABOUT" ? true : false}
            />
            <NavigationButton
                text="EXPERIENCE"
                onClick={() => scrollToElement("experience")}
                isActive={sectionInView === "EXPERIENCE" ? true : false}
            />
            <NavigationButton
                text="PROJECTS"
                onClick={() => scrollToElement("projects")}
                isActive={sectionInView === "PROJECTS" ? true : false}
            />
            <NavigationButton
                text="RESUME"
                onClick={() => openInNewTab(resume)}
            />
        </div>
    );
};
