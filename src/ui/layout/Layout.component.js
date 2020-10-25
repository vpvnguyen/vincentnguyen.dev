import React from "react";
import PropTypes from "prop-types";

const style = {
  layoutComponentContainer: {
    margin: "auto",
    padding: "1em",
  },
};

const LayoutComponent = ({ children }) => (
  <main style={style.layoutComponentContainer}>{children}</main>
);

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;
