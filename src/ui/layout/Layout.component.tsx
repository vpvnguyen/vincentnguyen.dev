import React, { FunctionComponent } from "react";

const style: any = {
  layoutComponentContainer: {
    margin: "3rem",
  },
};

const LayoutComponent: FunctionComponent = ({ children }: any) => (
  <div style={style.layoutComponentContainer}>{children}</div>
);

export default LayoutComponent;
