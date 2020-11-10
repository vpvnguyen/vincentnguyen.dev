import React from "react";
import ProjectTheme from "../../ui/ProjectTheme";

const style = {
  sectionLeft: ProjectTheme.sectionLeft(),
};

const ProjectButtonLeft = ({ children }) => (
  <div style={style.sectionLeft}>{children}</div>
);

export default ProjectButtonLeft;
