import React, { FunctionComponent } from "react";
import Social from "../common/Social";
import Theme from "../../ui/Theme";
import useStaticAuthorQuery from "../../utils/hooks/useStaticAuthorQuery";

const style: any = {
  footerContainer: {
    backgroundColor: Theme.color().dark,
    color: Theme.color().accent,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    // textAlign: "center",
  },
  footerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: ".3rem",
  },
};

const Footer: FunctionComponent = () => {
  const data: any = useStaticAuthorQuery();
  const author: string = data.site.siteMetadata.author;

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
