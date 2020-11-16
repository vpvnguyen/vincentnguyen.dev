import React from "react";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import ProjectTheme from "../../ui/ProjectTheme";

const style = {
  buttonContainer: ProjectTheme.buttonContainer(),
  sectionLeft: ProjectTheme.sectionLeft(),
  sectionRight: ProjectTheme.sectionRight(),
  description: ProjectTheme.description(),
  date: ProjectTheme.date(),
  title: ProjectTheme.title(),
};

export const ProjectButton = ({ children, href }) => (
  <Button
    style={style.buttonContainer}
    href={href}
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </Button>
);

export const ProjectButtonLeft = ({ children }) => (
  <div style={style.sectionLeft}>{children}</div>
);

export const ProjectButtonRight = ({ children }) => (
  <div style={style.sectionRight}>{children}</div>
);

export const ProjectTitle = ({ projectName, projectHomepage }) => (
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

export const ProjectDescription = ({ children }) => (
  <p style={style.description}>{children}</p>
);

export const ProjectDate = ({ children }) => (
  <p style={style.date}>{children}</p>
);

export const ProjectLanguage = ({ style, name }) => (
  <span style={style}>{name}</span>
);
