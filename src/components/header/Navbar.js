import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { motion } from "framer-motion";
import ElevationScroll from "./ElevationScroll";
import Social from "../Social";
import Theme from "../../ui/Theme";
import Animate from "../../ui/Animate";
import useStaticResumeQuery from "../../utils/hooks/useStaticResumeQuery";

const style = {
  navRoot: {
    backgroundColor: Theme.color().dark,
    height: "70px",
  },
  navContainer: {
    alignItems: "center",
    backgroundColor: Theme.color().dark,
    color: Theme.color().accent,
  },
  author: {
    fontFamily: Theme.font().fontFamily,
    flexGrow: 1,
    color: Theme.color().accent,
    "&:hover": {
      backgroundColor: "transparent",
    },
    textDecoration: "none",
  },
  resume: {
    fontFamily: Theme.font().fontFamily,
    color: Theme.color().accent,
    textDecoration: "none",
  },
};

const motionVariants = {
  motionButtonText: Animate.scaleUpMenuItem(),
  motionToolbar: Animate.springDownToolBar(),
  motionAuthor: () => Animate.scrollToTop(),
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

const Navbar = ({ author }) => (
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

export default Navbar;
