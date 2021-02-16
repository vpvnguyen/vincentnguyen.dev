import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import LayoutComponent from "../../ui/layout/Layout.component";
import Theme from "../../ui/Theme";
import Animate from "../../ui/Animate";
import useStaticExperienceQuery from "../../utils/hooks/useStaticExperienceQuery";

const style: any = {
  experienceContainer: {
    textAlign: "center",
  },
  experienceHeader: Theme.h1(),
};

const motionVariants: any = {
  motionExperienceHeader: Animate.fadeInHeadersLeft(),
  motionExperience: Animate.fadeInExperienceRight(),
};

const MotionExperienceHeader: FunctionComponent = ({ children }: any) => (
  <motion.div
    variants={motionVariants.motionExperienceHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const MotionExperience: FunctionComponent = ({ children }: any) => (
  <motion.div
    variants={motionVariants.motionExperience}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const Experience: FunctionComponent = () => {
  const data: any = useStaticExperienceQuery();
  const experiences: Array<string> = data.site.siteMetadata.experience;

  return (
    <LayoutComponent>
      <MotionExperienceHeader>
        <h1 style={style.experienceHeader}>Experience</h1>
      </MotionExperienceHeader>
      <MotionExperience>
        <div style={style.experienceContainer}>
          {experiences.map((experience: string) => (
            <p key={experience}>{experience}</p>
          ))}
        </div>
      </MotionExperience>
    </LayoutComponent>
  );
};

export default Experience;
