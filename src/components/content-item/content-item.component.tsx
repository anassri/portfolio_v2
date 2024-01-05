import { FunctionComponent, useState } from "react";
import { Experience, Project } from "../../data/data";
import { openInNewTab } from "../../utils/general.utils";
import { ExpandIcon, OpenLinkIcon } from "../icons/icons.component";
import {
  ClickableElement,
  MaybeClickable,
} from "../clickable-element/clickable-element.component";

import welcomeImg from "../../images/welcome.png";
import homeImg from "../../images/home.png";
import listImg from "../../images/list.png";
import listWithMessagingImg from "../../images/list-with-messaging.png";

const TechnologyPill: FunctionComponent<{ label: string }> = ({ label }) => {
  return (
    <div className="rounded-full bg-pill text-regal-green text-xs px-3 py-2">
      {label}
    </div>
  );
};

export const ExperienceContentItem: FunctionComponent<Experience> = ({
  title,
  subtitle,
  technologies,
  text,
  timeframe,
  link,
}) => {
  return (
    <MaybeClickable
      ariaLabel={`view build.com in a new tab`}
      className="flex text-dark-gray bg-light-gray opacity-100 lg:opacity-75 hover:opacity-100 p-4 rounded-lg relative transition duration-250 ease-in-out"
      link={link}
      onClick={() => openInNewTab(link || "")}
    >
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h2 className="font-medium">{title}</h2>
          <p className="text-sm opacity-50 mt-1">{timeframe}</p>
        </div>
        <h3 className="opacity-50 font-medium text-base">{subtitle}</h3>
        <p className="text-xs leading-5">{text}</p>
        <div className="flex flex-wrap gap-1 pt-2 pr-2 lg:pr-0">
          {technologies.map((label) => (
            <TechnologyPill label={label} key={label} />
          ))}
        </div>
        {link && (
          <div className="absolute bottom-4 right-4">
            <OpenLinkIcon />
          </div>
        )}
      </div>
    </MaybeClickable>
  );
};

export const ProjectContentItem: FunctionComponent<Project> = ({
  title,
  text,
  technologies,
  link,
  Logo,
}) => {
  const [shouldExpandCard, setShouldExpandCard] = useState<boolean>(false);

  const toggleCardExpansion = () => {
    setShouldExpandCard(!shouldExpandCard);
  };
  return (
    <ClickableElement
      ariaLabel="expand listimo card"
      className="flex flex-col items-center text-dark-gray bg-light-gray opacity-100 lg:opacity-75 hover:opacity-100 py-4 pr-4 rounded-lg relative transition duration-250 ease-in-out"
      onClick={
        title === "Listimo"
          ? toggleCardExpansion
          : () => openInNewTab(link || "")
      }
    >
      <>
        <div className="flex justify-between">
          <div className="w-2/6 lg:w-1/4 mt-1 flex justify-center">
            <Logo />
          </div>

          <div className="w-4/6 lg:w-3/4 flex flex-col -ml-4">
            <h2 className="text-base font-medium">{title}</h2>
            <p className="text-xs leading-5">{text}</p>
            <div className="flex flex-wrap gap-1 pt-2 pr-2 lg:pr-0">
              {technologies.map((label) => (
                <TechnologyPill label={label} key={label} />
              ))}
            </div>

            {link ? (
              <div className="absolute bottom-4 right-4">
                <OpenLinkIcon />
              </div>
            ) : (
              <div className="absolute bottom-4 right-4">
                <ExpandIcon />
              </div>
            )}
          </div>
        </div>
        {shouldExpandCard && <ListimoContent />}
      </>
    </ClickableElement>
  );
};

const ListimoContent: FunctionComponent = () => {
  return (
    <div className="flex flex-col mt-8">
      <p className="text-xs leading-5 mb-4 mx-4">
        Listimo is designed to facilitate communication for basic and simple
        tasks, whether you're using the app for a straightforward shopping list
        or a more complex project at work. Listimo makes it easy to quickly
        communicate about an item, seek clarity, and ask questions—all in one
        place. You won't have to jump between multiple apps to get the
        information you're looking for. The app is currently in development, and
        here are some screenshots from the original designs.
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <img src={welcomeImg} alt="welcome screen" style={{ maxWidth: 200 }} />
        <img src={homeImg} alt="home screen" style={{ maxWidth: 200 }} />
        <img src={listImg} alt="list screen" style={{ maxWidth: 200 }} />
        <img
          src={listWithMessagingImg}
          alt="list with messaging screen"
          style={{ maxWidth: 200 }}
        />
      </div>
    </div>
  );
};
