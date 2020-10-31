import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import Navbar from "../../components/header/Navbar";
import Theme from "../../utils/helpers/Theme";
import useStaticAuthorQuery from "../../utils/hooks/useStaticAuthorQuery";

const style = {
  layoutGlobalContainer: {
    fontFamily: Theme.font().fontFamily,
    fontSize: Theme.font().fontSize,
  },
};

const LayoutGlobal = ({ children }) => {
  const data = useStaticAuthorQuery();
  const author = data.site.siteMetadata.author;

  return (
    <div style={style.layoutGlobalContainer}>
      <Header author={author} />
      <Navbar author={author} />
      <div>{children}</div>
    </div>
  );
};

LayoutGlobal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutGlobal;
