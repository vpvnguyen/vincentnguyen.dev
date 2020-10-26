import React from "react";
import { motion } from "framer-motion";
import LayoutComponent from "../../ui/layout/Layout.component";
import theme from "../../ui/theme";
import useStaticExperienceQuery from "../../utils/hooks/useStaticExperienceQuery";
import Animate from "../../ui/Animate";

const style = {
  experienceContainer: {
    display: "flex",
    alignItems: "center",
  },
  experienceList: {
    fontSize: ".8rem",
    paddingLeft: ".5rem",
    paddingBottom: ".5rem",
  },
  experienceHeader: theme.h1,
};

const motionVariants = {
  motionExperienceHeader: Animate.fadeInHeadersLeft(),
  motionExperience: Animate.fadeInExperienceRight(),
};

const MotionExperienceHeader = ({ children }) => (
  <motion.div
    variants={motionVariants.motionExperienceHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const MotionExperience = ({ children }) => (
  <motion.div
    variants={motionVariants.motionExperience}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const Experience = () => {
  const data = useStaticExperienceQuery();
  const experiences = data.site.siteMetadata.experience;

  return (
    <LayoutComponent>
      <MotionExperienceHeader>
        <h1 style={style.experienceHeader}>Experience</h1>
      </MotionExperienceHeader>
      <div style={style.experienceCotainer}>
        <MotionExperience>
          {experiences.map(experience => (
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
