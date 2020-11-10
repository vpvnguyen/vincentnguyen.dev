import React from "react";
import ProjectTheme from "../../ui/ProjectTheme";

const style = {
  description: ProjectTheme.description(),
};

const ProjectDescription = ({ children }) => (
  <p style={style.description}>{children}</p>
);

export default ProjectDescription;
