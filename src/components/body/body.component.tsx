import { FunctionComponent, useEffect } from "react";
import { About } from "../about/about.component";
import { experience, projects } from "../../data/data";
import {
  ExperienceContentItem,
  ProjectContentItem,
} from "../content-item/content-item.component";
import { ClickableElement } from "../clickable-element/clickable-element.component";
import { openInNewTab } from "../../utils/general.utils";
import resume from "../downloadable/Ammar_Nassri_Resume_2024.pdf";
import { useInView } from "react-intersection-observer";
import { Sticky } from "../sticky/sticky.component";

type BodyProps = {
  sectionInView: "ABOUT" | "EXPERIENCE" | "PROJECTS";
  setSectionInView: (section: "ABOUT" | "EXPERIENCE" | "PROJECTS") => void;
};

export const Body: FunctionComponent<BodyProps> = ({
  sectionInView,
  setSectionInView,
}) => {
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (aboutInView) {
      setSectionInView("ABOUT");
    } else if (experienceInView && sectionInView !== "EXPERIENCE") {
      setSectionInView("EXPERIENCE");
    } else if (projectsInView && sectionInView !== "PROJECTS") {
      setSectionInView("PROJECTS");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aboutInView, experienceInView, projectsInView]);

  return (
    <div className="flex flex-col gap-y-6 items-center lg:my-8">
      <div id="top" ref={aboutRef} />
      <About />
      <Sticky
        position="top"
        unstuckClasses="block lg:hidden text-gray py-4 z-10 w-full text-center sticky top-0"
        stuckClasses="block lg:hidden text-gray py-4 z-10 w-full text-center sticky top-0 bg-zinc-900"
      >
        EXPERIENCE
      </Sticky>
      <div
        className="max-w-[35rem] flex flex-col gap-y-4 mx-4 lg:mx-0"
        id="experience"
        ref={experienceRef}
      >
        {experience.map((entry) => (
          <ExperienceContentItem
            {...entry}
            key={entry.subtitle || entry.title}
          />
        ))}
      </div>
      <div className="hidden lg:block border-b border-light-gray w-[32rem] my-6" />
      <Sticky
        position="top"
        unstuckClasses="block lg:hidden text-gray py-4 z-10 w-full text-center sticky top-0"
        stuckClasses="block lg:hidden text-gray py-4 z-10 w-full text-center sticky top-0 bg-zinc-900"
      >
        PROJECTS
      </Sticky>
      <div
        className="max-w-[35rem] flex flex-col gap-y-4 mx-4 lg:mx-0"
        id="projects"
        ref={projectsRef}
      >
        {projects.map((entry) => (
          <ProjectContentItem {...entry} key={entry.title} />
        ))}
      </div>
      <ClickableElement
        ariaLabel="view full resume"
        onClick={() => openInNewTab(resume)}
        className="block lg:hidden text-gray py-4 hover:underline hover:text-regal-green transition duration-250 ease-in-out"
      >
        View Full Resume
      </ClickableElement>
    </div>
  );
};
