import React from "react";
import { Button } from "@material-ui/core";
import ProjectTheme from "../../ui/ProjectTheme";

const style = {
  buttonContainer: ProjectTheme.buttonContainer(),
};

const ProjectButton = ({ children, href }) => (
  <Button
    style={style.buttonContainer}
    href={href}
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </Button>
);

export default ProjectButton;
