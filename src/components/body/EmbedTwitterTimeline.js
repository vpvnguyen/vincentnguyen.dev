import React from "react";
import { motion } from "framer-motion";
import LayoutComponent from "../../ui/layout/Layout.component";
import theme from "../../ui/theme";
import useStaticTwitterQuery from "../../utils/hooks/useStaticTwitterQuery";
import useScript from "../../utils/hooks/useScript";
import MotionStyle from "../../ui/motion";

const style = {
  twitterHeader: theme.h1,
  motionTwitterHeader: MotionStyle.fadeInHeadersLeft(),
  motionTwitterTimeline: MotionStyle.fadeInTwitterTimelineRight(),
};

const MotionTwitterHeader = ({ children }) => (
  <motion.h1
    style={style.twitterHeader}
    variants={style.motionTwitterHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.h1>
);

const MotionTwitterTimeline = ({ children }) => (
  <motion.div
    style={style.twitterHeader}
    variants={style.motionTwitterTimeline}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const EmbedTwitterTimeline = () => {
  const data = useStaticTwitterQuery();
  useScript("https://platform.twitter.com/widgets.js");

  return (
    <LayoutComponent>
      <MotionTwitterHeader>Tweets</MotionTwitterHeader>
      <MotionTwitterTimeline>
        <a
          aria-label="Twitter Feed"
          aria-hidden="true"
          className="twitter-timeline"
          href={data.site.siteMetadata.social.twitter.url}
        >
          {" "}
        </a>
      </MotionTwitterTimeline>
    </LayoutComponent>
  );
};

export default EmbedTwitterTimeline;
