import React from "react";
import { motion } from "framer-motion";
import theme from "../../ui/theme";
import MotionStyle from "../../ui/motion";
import useStaticAuthorQuery from "../../utils/hooks/useStaticAuthorQuery";

const style = {
  welcomeHeader: theme.h1,
  welcomeHeaderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
  },
  welcomeTextTitle: theme.h1,
  motionWelcomeHeader: MotionStyle.springUpWelcomeHeader(),
  motionWelcomeText: MotionStyle.springUpWelcomeText(),
};

const MotionWelcomeHeader = ({ children }) => (
  <motion.span
    variants={style.motionWelcomeHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.span>
);

const MotionWelcomeText = ({ children }) => (
  <motion.h2
    variants={style.motionWelcomeText}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.h2>
);

const Welcome = () => {
  const data = useStaticAuthorQuery();

  return (
    <>
      <div style={style.welcomeHeaderContainer}>
        <MotionWelcomeHeader>
          <h1 style={style.welcomeHeader}>{data.site.siteMetadata.author}</h1>
        </MotionWelcomeHeader>
        <MotionWelcomeText>
          I enjoy breaking and building things
        </MotionWelcomeText>
      </div>
    </>
  );
};

export default Welcome;
