import React from "react";
import { motion } from "framer-motion";
import LayoutComponent from "../../ui/layout/Layout.component";
import Theme from "../../utils/helpers/Theme";
import Animate from "../../ui/Animate";
import useStaticTwitterQuery from "../../utils/hooks/useStaticTwitterQuery";
import useScript from "../../utils/hooks/useScript";

const style = {
  twitterHeader: Theme.h1(),
};

const motionVariants = {
  motionTwitterHeader: Animate.fadeInHeadersLeft(),
  motionTwitterTimeline: Animate.fadeInTwitterTimelineRight(),
};

const MotionTwitterHeader = ({ children }) => (
  <motion.div
    variants={motionVariants.motionTwitterHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const MotionTwitterTimeline = ({ children }) => (
  <motion.div
    variants={motionVariants.motionTwitterTimeline}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const EmbedTwitterTimeline = () => {
  const data = useStaticTwitterQuery();
  const twitterUrl = data.site.siteMetadata.social.twitter.url;
  const embedTwitterWidget = data.site.siteMetadata.social.twitter.embedWidget;
  useScript(embedTwitterWidget);

  return (
    <LayoutComponent>
      <MotionTwitterHeader>
        <h1 style={style.twitterHeader}>Tweets</h1>
      </MotionTwitterHeader>
      <MotionTwitterTimeline>
        <a
          aria-label="Twitter Feed"
          aria-hidden="true"
          className="twitter-timeline"
          href={twitterUrl}
        >
          {" "}
        </a>
      </MotionTwitterTimeline>
    </LayoutComponent>
  );
};

export default EmbedTwitterTimeline;
