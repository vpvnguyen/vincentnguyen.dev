import React from "react";
import Social from "../Social";
import theme from "../../ui/theme";
import useStaticAuthorQuery from "../../utils/hooks/useStaticAuthorQuery";

const style = {
  footerContainer: {
    backgroundColor: theme.color.dark,
    color: theme.color.accent,
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
