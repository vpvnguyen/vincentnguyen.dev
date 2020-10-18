import React from "react";
import { Helmet } from "react-helmet";
import { CssBaseline } from "@material-ui/core";

const Header = ({ author }) => (
  <>
    <CssBaseline />
    <Helmet author={author}>
      <link
        rel="icon"
        type="image/png"
        href="https://s3.us-east-2.amazonaws.com/vincentnguyen.dev-images/dev-icon.png"
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
