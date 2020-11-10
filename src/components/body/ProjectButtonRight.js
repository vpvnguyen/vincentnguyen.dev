import React from "react";
import ProjectTheme from "../../ui/ProjectTheme";

const style = {
  sectionRight: ProjectTheme.sectionRight(),
};

const ProjectButtonRight = ({ children }) => (
  <div style={style.sectionRight}>{children}</div>
);

export default ProjectButtonRight;
