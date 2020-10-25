import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { motion } from "framer-motion";
import Social from "../Social";
import theme from "../../ui/theme";
import ElevationScroll from "./ElevationScroll";
import useStaticResumeQuery from "../../utils/hooks/useStaticResumeQuery";
import MotionStyle from "../../ui/motion";

const style = {
  navRoot: {
    backgroundColor: theme.color.dark,
    height: "70px",
  },
  navContainer: {
    alignItems: "center",
    backgroundColor: theme.color.dark,
    color: theme.color.accent,
  },
  author: {
    fontFamily: theme.font.fontFamily,
    flexGrow: 1,
    color: theme.color.accent,
    "&:hover": {
      backgroundColor: "transparent",
    },
    textDecoration: "none",
  },
  resume: {
    fontFamily: theme.font.fontFamily,
    color: theme.color.accent,
    textDecoration: "none",
  },
};

const motionVariants = {
  motionButtonText: MotionStyle.scaleUpMenuItem(),
  motionToolbar: MotionStyle.springDownToolBar(),
  motionAuthor: () => MotionStyle.scrollToTop(),
};

const Author = ({ author }) => (
  <Button
    style={style.author}
    onClick={motionVariants.motionAuthor}
    title="Take me to the top!"
  >
    {author}
  </Button>
);

const Resume = () => {
  const data = useStaticResumeQuery();
  const resume = data.site.siteMetadata.resume;

  return (
    <Button>
      <a
        style={style.resume}
        href={resume}
        target="_blank"
        rel="noreferrer"
        download
        title="Go to resume"
      >
        Resume
      </a>
    </Button>
  );
};

const MotionToolbar = ({ children }) => (
  <motion.nav
    variants={motionVariants.motionToolbar}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.nav>
);

const MotionButtonText = ({ children }) => (
  <motion.div
    variants={motionVariants.motionButtonText}
    initial={"initial"}
    whileHover={"whileHover"}
    whileTap={"whileTap"}
  >
    {children}
  </motion.div>
);

const Navbar = ({ author }) => {
  return (
    <div style={style.navRoot}>
      <ElevationScroll>
        <AppBar position="fixed" style={style.navContainer}>
          <MotionToolbar>
            <Toolbar>
              <MotionButtonText>
                <Author author={author} />
              </MotionButtonText>

              <Social />

              <MotionButtonText>
                <Resume />
              </MotionButtonText>
            </Toolbar>
          </MotionToolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default Navbar;
