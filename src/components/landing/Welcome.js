import React from "react";
import { motion } from "framer-motion";
import theme from "../../ui/theme";
import Animate from "../../ui/Animate";
import useStaticAuthorQuery from "../../utils/hooks/useStaticAuthorQuery";

const style = {
  welcomeHeaderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
  },
  welcomeHeader: theme.h1,
};

const motionVariants = {
  motionWelcomeHeader: Animate.springUpWelcomeHeader(),
  motionWelcomeText: Animate.springUpWelcomeText(),
};

const MotionWelcomeHeader = ({ children }) => (
  <motion.span
    variants={motionVariants.motionWelcomeHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.span>
);

const MotionWelcomeText = ({ children }) => (
  <motion.h2
    variants={motionVariants.motionWelcomeText}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.h2>
);

const Welcome = () => {
  const data = useStaticAuthorQuery();
  const author = data.site.siteMetadata.author;

  return (
    <div style={style.welcomeHeaderContainer}>
      <MotionWelcomeHeader>
        <h1 style={style.welcomeHeader}>{author}</h1>
      </MotionWelcomeHeader>
      <MotionWelcomeText>
        I enjoy breaking and building things
      </MotionWelcomeText>
    </div>
  );
};

export default Welcome;
