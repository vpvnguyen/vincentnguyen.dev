import React from "react";
import ProjectTheme from "../../ui/ProjectTheme";

const style = {
  container: ProjectTheme.container(),
};

const LayoutProject = ({ children }) => (
  <div style={style.container}>{children}</div>
);

export default LayoutProject;
