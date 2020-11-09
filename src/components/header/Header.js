import React from "react";
import { Helmet } from "react-helmet";
import { CssBaseline } from "@material-ui/core";
import Images from "../../ui/Images";
import Theme from "../../ui/Theme";

const Header = ({ author }) => (
  <>
    <CssBaseline />
    <Helmet author={author}>
      <link
        rel="icon"
        type="image/png"
        href={Images.getFavicon()}
        sizes="16x16"
      />
      <link href={Theme.fontUrl()} rel="stylesheet" />
    </Helmet>
  </>
);

export default Header;
