import React from "react";
import { motion } from "framer-motion";
import LayoutComponent from "../../ui/layout/Layout.component";
import theme from "../../ui/theme";
import useStaticExperienceQuery from "../../utils/hooks/useStaticExperienceQuery";
import MotionStyle from "../../ui/motion";

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

  motionExperienceHeader: MotionStyle.fadeInHeadersLeft(),
  motionExperience: MotionStyle.fadeInExperienceRight(),
};

const MotionExperienceHeader = ({ children }) => (
  <motion.div
    variants={style.motionExperienceHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const MotionExperience = ({ children }) => (
  <motion.div
    variants={style.motionExperience}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const Experience = () => {
  const data = useStaticExperienceQuery();

  return (
    <LayoutComponent>
      <MotionExperienceHeader>
        <h1 style={style.experienceHeader}>Experience</h1>
      </MotionExperienceHeader>
      <div style={style.experienceCotainer}>
        <MotionExperience>
          {data.site.siteMetadata.experience.map(experience => (
            <div key={experience} style={style.experienceList}>
              {experience.toUpperCase()}
            </div>
          ))}
        </MotionExperience>
      </div>
    </LayoutComponent>
  );
};

export default Experience;
