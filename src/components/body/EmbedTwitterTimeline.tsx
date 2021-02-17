import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import LayoutComponent from "../../ui/layout/Layout.component";
import Theme from "../../ui/Theme";
import Animate from "../../ui/Animate";
import useStaticTwitterQuery from "../../utils/hooks/useStaticTwitterQuery";
import useScript from "../../utils/hooks/useScript";

const style: any = {
  twitterHeader: Theme.h1(),
};

const motionVariants: any = {
  motionTwitterHeader: Animate.fadeInHeadersLeft(),
  motionTwitterTimeline: Animate.fadeInTwitterTimelineRight(),
};

const MotionTwitterHeader: FunctionComponent = ({ children }: any) => (
  <motion.div
    variants={motionVariants.motionTwitterHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const MotionTwitterTimeline: FunctionComponent = ({ children }: any) => (
  <motion.div
    variants={motionVariants.motionTwitterTimeline}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const EmbedTwitterTimeline: FunctionComponent = () => {
  const data: any = useStaticTwitterQuery();
  const twitterUrl: string = data.site.siteMetadata.social.twitter.url;
  const embedTwitterWidget: string =
    data.site.siteMetadata.social.twitter.embedWidget;
  useScript(embedTwitterWidget);

  return (
    <LayoutComponent>
      <MotionTwitterHeader>
        <h1 style={style.twitterHeader}>TWEETS</h1>
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
