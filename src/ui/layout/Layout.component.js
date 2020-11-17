import React from "react";
import PropTypes from "prop-types";

const style = {
  layoutComponentContainer: {
    margin: "auto",
    padding: "1em",
  },
};

const LayoutComponent = ({ children }) => (
  <section style={style.layoutComponentContainer}>{children}</section>
);

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;
