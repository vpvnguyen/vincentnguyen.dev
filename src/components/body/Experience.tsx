import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import LayoutComponent from "../../ui/layout/Layout.component";
import Theme from "../../ui/Theme";
import Animate from "../../ui/Animate";
import useStaticExperienceQuery from "../../utils/hooks/useStaticExperienceQuery";

const style: any = {
  experienceContainer: {
    display: "flex",
    alignItems: "center",
  },
  experienceList: {
    paddingLeft: ".5rem",
    paddingBottom: ".5rem",
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
      <div style={style.experienceContainer}>
        <MotionExperience>
          {experiences.map((experience: string) => (
            <div key={experience} style={style.experienceList}>
              {experience}
            </div>
          ))}
        </MotionExperience>
      </div>
    </LayoutComponent>
  );
};

export default Experience;
