import React from "react";
import { Helmet } from "react-helmet";
import { CssBaseline } from "@material-ui/core";

const Header = ({ author }) => (
  <>
    <CssBaseline />
    <Helmet author={author}>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  </>
);

export default Header;
