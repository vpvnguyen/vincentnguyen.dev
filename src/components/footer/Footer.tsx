import React from "react";
import Social from "../common/Social";
import Theme from "../../ui/Theme";
import useStaticAuthorQuery from "../../utils/hooks/useStaticAuthorQuery";

const style: any = {
  root: {
    backgroundColor: Theme.color().dark,
    color: Theme.color().accent,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%"
  },
  footerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: ".3rem"
  },
  footerContent: {
    margin: ".25em"
  }
};

const Footer = () => {
  const data: any = useStaticAuthorQuery();
  const author: string = data.site.siteMetadata.author;

  return (
    <footer style={style.root}>
      <div style={style.footerContainer}>
        <div style={style.footerContent}>
          © {new Date().getFullYear()} {author}
        </div>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
