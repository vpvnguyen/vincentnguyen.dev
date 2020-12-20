import React, { FunctionComponent } from "react";
import ProjectTheme from "../ProjectTheme";

const style: any = {
  container: ProjectTheme.container(),
};

const LayoutProject: FunctionComponent = ({ children }: any) => (
  <div style={style.container}>{children}</div>
);

export default LayoutProject;
