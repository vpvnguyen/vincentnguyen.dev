import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import Navbar from "../../components/header/Navbar";
import Theme from "../Theme";
import useStaticAuthorQuery from "../../utils/hooks/useStaticAuthorQuery";

const style: any = {
  layoutGlobalContainer: {
    fontFamily: Theme.font().fontFamily,
    fontSize: Theme.font().fontSize,
  },
};

const LayoutGlobal: FunctionComponent = ({ children }: any) => {
  const data: any = useStaticAuthorQuery();
  const author: string = data.site.siteMetadata.author;

  return (
    <div style={style.layoutGlobalContainer}>
      <Header />
      <Navbar author={author} />
      <div>{children}</div>
    </div>
  );
};

export default LayoutGlobal;
