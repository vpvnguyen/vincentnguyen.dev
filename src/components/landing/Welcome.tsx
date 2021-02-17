import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import Theme from "../../ui/Theme";
import Animate from "../../ui/Animate";
import useStaticAuthorQuery from "../../utils/hooks/useStaticAuthorQuery";

const style: any = {
  welcomeHeaderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
  },
  welcomeHeader: Theme.h1(),
};

const motionVariants: any = {
  motionWelcomeHeader: Animate.springUpWelcomeHeader(),
  motionWelcomeText: Animate.springUpWelcomeText(),
};

const MotionWelcomeHeader: FunctionComponent = ({ children }: any) => (
  <motion.div
    variants={motionVariants.motionWelcomeHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const MotionWelcomeText: FunctionComponent = ({ children }: any) => (
  <motion.h2
    variants={motionVariants.motionWelcomeText}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.h2>
);

const Welcome: FunctionComponent = () => {
  const data: any = useStaticAuthorQuery();
  const author: string = data.site.siteMetadata.author;

  return (
    <div style={style.welcomeHeaderContainer}>
      <MotionWelcomeHeader>
        <h1 style={style.welcomeHeader}>{author.toUpperCase()}</h1>
      </MotionWelcomeHeader>
      <MotionWelcomeText>
        I enjoy breaking and building things
      </MotionWelcomeText>
    </div>
  );
};

export default Welcome;
