import React from "react";
import { LayoutProps } from "../../types/ui.types/LayoutProps";
import ProjectTheme from "../ProjectTheme";

const style: any = {
  container: ProjectTheme.container()
};

const LayoutProject = ({ children }: LayoutProps) => (
  <div style={style.container}>{children}</div>
);

export default LayoutProject;
