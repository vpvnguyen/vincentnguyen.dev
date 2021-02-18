import React, { FunctionComponent } from "react";
import "reset-css";
import Header from "../../components/header/Header";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import Theme from "../Theme";
import useStaticAuthorQuery from "../../utils/hooks/useStaticAuthorQuery";

const style: any = {
  root: {
    display: "flex",
    flexDirection: "column",
    fontFamily: Theme.font().fontFamily,
    fontSize: Theme.font().fontSize,
    minHeight: "100vh",
    position: "relative",
    margin: 0,
    padding: 0,
    backgroundColor: "#FFFFFF",
  },
};

const LayoutGlobal: FunctionComponent = ({ children }: any) => {
  const data: any = useStaticAuthorQuery();
  const author: string = data.site.siteMetadata.author;

  return (
    <div style={style.root}>
      <Header />
      <Navbar author={author} />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutGlobal;
