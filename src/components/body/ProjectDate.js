import React from "react";
import ProjectTheme from "../../ui/ProjectTheme";

const style = {
  date: ProjectTheme.date(),
};

const ProjectDate = ({ children }) => <p style={style.date}>{children}</p>;

export default ProjectDate;
