import React from "react";

const style: any = {
  layoutComponentContainer: {
    margin: "3rem"
  }
};

const LayoutComponent = ({ children }: any) => (
  <div style={style.layoutComponentContainer}>{children}</div>
);

export default LayoutComponent;
