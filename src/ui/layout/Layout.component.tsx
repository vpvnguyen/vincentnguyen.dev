import React from "react";

const style = {
  layoutComponentContainer: {
    margin: "auto",
    padding: "1em",
  },
};

const LayoutComponent = ({ children }: any) => (
  <section style={style.layoutComponentContainer}>{children}</section>
);

export default LayoutComponent;
