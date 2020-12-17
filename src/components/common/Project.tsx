import React from "react";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import ProjectTheme from "../../ui/ProjectTheme";

interface ProjectButtonProps {
    children: any
    href: string
}

interface ProjectTitleProps {
    projectName: string
    projectHomepage: string
}

interface ProjectLanguageProps {
    languageStyle: any
    languageName: string
}

const style: any = {
  buttonContainer: ProjectTheme.buttonContainer(),
  sectionLeft: ProjectTheme.sectionLeft(),
  sectionRight: ProjectTheme.sectionRight(),
  title: ProjectTheme.title(),
  description: ProjectTheme.description(),
  date: ProjectTheme.date(),
};

export const ProjectButton = ({ children, href }: ProjectButtonProps) => (
  <Button
    style={style.buttonContainer}
    href={href}
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </Button>
);

export const ProjectButtonLeft = ({ children }: any) => (
  <div style={style.sectionLeft}>{children}</div>
);

export const ProjectButtonRight = ({ children }: any) => (
  <div style={style.sectionRight}>{children}</div>
);

export const ProjectTitle = ({ projectName, projectHomepage }: ProjectTitleProps) => (
  <h3 style={style.title}>
    {projectName}{" "}
    <span>
      {projectHomepage ? (
        <FontAwesomeIcon icon={faGlobe} title="Live Demo" />
      ) : (
        <FontAwesomeIcon icon={faCode} title="Repository" />
      )}
    </span>
  </h3>
);

export const ProjectDescription = ({ children }: any) => (
  <p style={style.description}>{children}</p>
);

export const ProjectDate = ({ children }: any) => (
  <p style={style.date}>{children}</p>
);

export const ProjectLanguage = ({ languageStyle, languageName }: ProjectLanguageProps) => (
  <span style={languageStyle}>{languageName}</span>
);
