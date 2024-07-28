import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import ProjectTheme from "../../ui/ProjectTheme";
import {
  ProjectButtonProps,
  ProjectTitleProps,
  ProjectLanguageProps,
  ProjectDescriptionProps,
  ProjectDateProps
} from "../../types/component.types/ProjectProps";

const style: any = {
  title: ProjectTheme.title(),
  description: ProjectTheme.description(),
  date: ProjectTheme.date(),
  buttonLink: ProjectTheme.buttonLink()
};

export const ProjectButton = ({ children, href }: ProjectButtonProps) => (
  <a href={href} style={style.buttonLink} rel='noreferrer' target='_blank'>
    {children}
  </a>
);

export const ProjectTitle = ({
  projectName,
  projectHomepage
}: ProjectTitleProps) => (
  <h3 style={style.title}>
    {projectName.toUpperCase()}{" "}
    <span>
      {projectHomepage ? (
        <FontAwesomeIcon icon={faGlobe} title='Live Demo' />
      ) : (
        <FontAwesomeIcon icon={faCode} title='Repository' />
      )}
    </span>
  </h3>
);

export const ProjectDescription = ({ children }: ProjectDescriptionProps) => (
  <p style={style.description}>{children}</p>
);

export const ProjectDate = ({ children }: ProjectDateProps) => (
  <p style={style.date}>{children}</p>
);

export const ProjectLanguage = ({
  languageStyle,
  languageName
}: ProjectLanguageProps) => <span style={languageStyle}>{languageName}</span>;
