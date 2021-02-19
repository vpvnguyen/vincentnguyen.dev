import React from "react";
import { motion } from "framer-motion";
import LayoutComponent from "../../ui/layout/Layout.component";
import Theme from "../../ui/Theme";
import Animate from "../../ui/Animate";
import useStaticExperienceQuery from "../../utils/hooks/useStaticExperienceQuery";
import { MotionComponentProps } from "../../types/component.types/MotionProps";

const style: any = {
  experienceContainer: {
    textAlign: "center"
  },
  experienceHeader: Theme.h1(),
  experience: {
    padding: ".5rem"
  }
};

const motionVariants: any = {
  motionExperienceHeader: Animate.fadeInHeadersLeft(),
  motionExperience: Animate.fadeInExperienceRight()
};

const MotionExperienceHeader = ({ children }: MotionComponentProps) => (
  <motion.div
    variants={motionVariants.motionExperienceHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const MotionExperience = ({ children }: MotionComponentProps) => (
  <motion.div
    variants={motionVariants.motionExperience}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const Experience = () => {
  const data: any = useStaticExperienceQuery();
  const experiences: string[] = data.site.siteMetadata.experience;

  return (
    <LayoutComponent>
      <MotionExperienceHeader>
        <h1 style={style.experienceHeader}>EXPERIENCE</h1>
      </MotionExperienceHeader>
      <MotionExperience>
        <div style={style.experienceContainer}>
          {experiences.map((experience: string) => (
            <p key={experience} style={style.experience}>
              {experience}
            </p>
          ))}
        </div>
      </MotionExperience>
    </LayoutComponent>
  );
};

export default Experience;
