import React from "react";
import LayoutComponent from "../../ui/layout/Layout.component";
import Welcome from "./Welcome";
import Theme from "../../ui/Theme";

const style = {
  landingContainer: {
    color: Theme.color().light,
    padding: "10rem 0rem 15rem 0rem",
  },
  landingMessage: {
    padding: "5rem",
  },
};

const Landing = () => (
  <LayoutComponent>
    <div style={style.landingContainer}>
      <div style={style.landingMessage}>
        <Welcome />
      </div>
    </div>
  </LayoutComponent>
);

export default Landing;
