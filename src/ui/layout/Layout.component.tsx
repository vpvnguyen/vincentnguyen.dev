import React, { FunctionComponent } from "react";

const style: any = {
  layoutComponentContainer: {
    margin: "auto",
    padding: "1em",
  },
};

const LayoutComponent: FunctionComponent = ({ children }) => (
  <section style={style.layoutComponentContainer}>{children}</section>
);

export default LayoutComponent;
