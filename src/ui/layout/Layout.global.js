import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import Navbar from "../../components/header/Navbar";
import useStaticAuthorQuery from "../../utils/hooks/useStaticAuthorQuery";
import theme from "../../ui/theme";

const style = {
  fontFamily: theme.font.fontFamily,
  fontSize: theme.font.fontSize,
};

const LayoutGlobal = ({ children }) => {
  const data = useStaticAuthorQuery();

  return (
    <div style={style}>
      <Header author={data.site.siteMetadata.author} />
      <Navbar author={data.site.siteMetadata.author} />
      <div>{children}</div>
    </div>
  );
};

LayoutGlobal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutGlobal;
