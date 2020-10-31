import React from "react";
import { Helmet } from "react-helmet";
import { CssBaseline } from "@material-ui/core";
import Images from "../../ui/Images";

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
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  </>
);

export default Header;
