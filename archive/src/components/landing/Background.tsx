import React from "react";
import Theme from "../../ui/Theme";
import Images from "../../ui/Images";
import { BackgroundProps } from "../../types/component.types/BackgroundProps";

const style: any = {
  background: {
    backgroundImage: `
        linear-gradient(
        rgba(0, 0, 0, 0.7), 
        rgba(0, 0, 0, 0.8)
        ),
        url(${Images.getBackground()})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundColor: Theme.color().light,
    color: Theme.color().light,
    width: "100%",
    padding: "10rem 0rem 15rem 0rem",
    textAlign: "center"
  }
};

const Background = ({ children }: BackgroundProps) => (
  <div style={style.background}>{children}</div>
);

export default Background;
