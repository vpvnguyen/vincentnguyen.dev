import React from "react";
import Social from "../Social";
import theme from "../../ui/theme";
import useStaticAuthorQuery from "../../utils/hooks/useStaticAuthorQuery";

const style = {
  footer: {
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

  return (
    <footer style={style.footer}>
      <div style={style.footerContent}>
        © {new Date().getFullYear()} {data.site.siteMetadata.author}
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
