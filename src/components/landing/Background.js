import React from "react";
import PropTypes from "prop-types";
import theme from "../../ui/theme";

const style = {
  backgroundImage: `
      linear-gradient(
      rgba(0, 0, 0, 0.7), 
      rgba(0, 0, 0, 0.8)
      ),
      url('https://s3.us-east-2.amazonaws.com/vincentnguyen.dev-images/hb.jpg')`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  backgroundColor: theme.color.light,
};

const Background = ({ children }) => <div style={style}>{children}</div>;

Background.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Background;
