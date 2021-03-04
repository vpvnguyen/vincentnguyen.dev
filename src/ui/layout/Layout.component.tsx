import React from "react";
import { LayoutProps } from "../../types/ui.types/LayoutProps";

const style: any = {
  layoutComponentContainer: {
    margin: "3rem"
  }
};

const LayoutComponent = ({ children }: LayoutProps) => (
  <div style={style.layoutComponentContainer}>{children}</div>
);

export default LayoutComponent;
