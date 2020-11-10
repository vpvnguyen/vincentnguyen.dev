import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import ProjectTheme from "../../ui/ProjectTheme";

const style = {
  title: ProjectTheme.title(),
};

const ProjectTitle = ({ projectName, projectHomepage }) => (
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

export default ProjectTitle;
