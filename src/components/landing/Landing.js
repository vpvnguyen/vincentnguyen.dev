import React from "react";
import LayoutComponent from "../../ui/layout/Layout.component";
import Welcome from "./Welcome";

const style = {
  container: {
    color: "#ffffff",
    padding: "10rem 0rem 15rem 0rem",
  },
  landingMessage: {
    padding: "5rem",
  },
};

const Landing = () => (
  <LayoutComponent>
    <div style={style.container}>
      <div style={style.landingMessage}>
        <Welcome />
      </div>
    </div>
  </LayoutComponent>
);

export default Landing;
