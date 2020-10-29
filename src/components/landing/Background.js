import React from "react";
import PropTypes from "prop-types";
import theme from "../../ui/theme";
import Images from "../../utils/helpers/Images";

const style = {
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
    backgroundColor: theme.color.light,
  },
};

const Background = ({ children }) => (
  <div style={style.background}>{children}</div>
);

Background.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Background;
