import React, { FunctionComponent } from "react";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import ProjectTheme from "../../ui/ProjectTheme";
import {
  ProjectButtonProps,
  ProjectTitleProps,
  ProjectLanguageProps,
} from "../../types/component.types/ProjectProps";

const style: any = {
  buttonContainer: ProjectTheme.buttonContainer(),
  sectionLeft: ProjectTheme.sectionLeft(),
  sectionRight: ProjectTheme.sectionRight(),
  title: ProjectTheme.title(),
  description: ProjectTheme.description(),
  date: ProjectTheme.date(),
};

export const ProjectButton: FunctionComponent<ProjectButtonProps> = ({
  children,
  href,
}) => (
  <Button
    style={style.buttonContainer}
    href={href}
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </Button>
);

export const ProjectButtonLeft: FunctionComponent = ({ children }: any) => (
  <div style={style.sectionLeft}>{children}</div>
);

export const ProjectButtonRight: FunctionComponent = ({ children }: any) => (
  <div style={style.sectionRight}>{children}</div>
);

export const ProjectTitle: FunctionComponent<ProjectTitleProps> = ({
  projectName,
  projectHomepage,
}) => (
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

export const ProjectDescription: FunctionComponent = ({ children }: any) => (
  <p style={style.description}>{children}</p>
);

export const ProjectDate: FunctionComponent = ({ children }: any) => (
  <p style={style.date}>{children}</p>
);

export const ProjectLanguage: FunctionComponent<ProjectLanguageProps> = ({
  languageStyle,
  languageName,
}) => <span style={languageStyle}>{languageName}</span>;
