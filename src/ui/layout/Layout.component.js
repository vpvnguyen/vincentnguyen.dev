import React from "react";
import PropTypes from "prop-types";

const style = {
  container: {
    margin: "auto",
    padding: "1em",
  },
};

const LayoutComponent = ({ children }) => (
  <main style={style.container}>{children}</main>
);

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;
