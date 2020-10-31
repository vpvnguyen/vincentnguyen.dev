import React from "react";
import Social from "../Social";
import Theme from "../../utils/helpers/Theme";
import useStaticAuthorQuery from "../../utils/hooks/useStaticAuthorQuery";

const style = {
  footerContainer: {
    backgroundColor: Theme.color().dark,
    color: Theme.color().accent,
  },
  footerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: ".3rem",
  },
};

const Footer = () => {
  const data = useStaticAuthorQuery();
  const author = data.site.siteMetadata.author;

  return (
    <footer style={style.footerContainer}>
      <div style={style.footerContent}>
        © {new Date().getFullYear()} {author}
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
