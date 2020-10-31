import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import LayoutComponent from "../../ui/layout/Layout.component";
import Theme from "../../ui/Theme";
import Animate from "../../ui/Animate";
import LanguageTheme from "../../ui/LanguageTheme";
import useStaticProProjectsQuery from "../../utils/hooks/useStaticProProjectsQuery";

const style = {
  proProjectContainer: {
    display: "flex",
    flexDirection: "column",
  },
  proProjectHeader: Theme.h1(),
  proProjectName: Theme.h3(),
  proProjectDescription: {
    fontSize: ".7rem",
  },
  proProjectDate: {
    fontSize: ".6rem",
    paddingTop: "1rem",
    fontStyle: "oblique",
  },
  proProjectList: {
    display: "flex",
    flexDirection: "column",
  },
  proProjectButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: Theme.font().fontFamily,
  },
};

const motionVariants = {
  motionProProjectHeader: Animate.fadeInHeadersLeft(),
  motionProProject: Animate.animateProject(),
};

const MotionProProjectHeader = ({ children }) => (
  <motion.div
    variants={motionVariants.motionProProjectHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const MotionProProject = ({ children }) => (
  <motion.div
    variants={motionVariants.motionProProject}
    initial={"initial"}
    animate={"animate"}
    whileHover={"whileHover"}
  >
    {children}
  </motion.div>
);

const ProjectName = ({ children }) => (
  <h3 style={style.proProjectName}>
    {children}{" "}
    <span>
      <FontAwesomeIcon icon={faGlobe} title="Click me for live demo!" />
    </span>
  </h3>
);

const ProjectDescription = ({ children }) => (
  <p style={style.proProjectDescription}>{children}</p>
);

const ProjectDate = ({ children }) => (
  <p style={style.proProjectDate}>{children}</p>
);

const ProjectLanguages = ({ projectLanguages }) => {
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    const languages = LanguageTheme.getLanguageStyle(projectLanguages);
    setLanguages(languages);
  }, [projectLanguages]);

  return (
    <>
      {languages &&
        languages.map((language, index) => (
          <span key={`${language}-${index}`} style={language.style}>
            {language.name}
          </span>
        ))}
    </>
  );
};

const ProfessionalProjects = () => {
  const data = useStaticProProjectsQuery();
  const professionalProjects = data.site.siteMetadata.professionalProjects;

  return (
    <LayoutComponent>
      <div style={style.proProjectContainer}>
        <MotionProProjectHeader>
          <h1 style={style.proProjectHeader}>Professional Projects</h1>
        </MotionProProjectHeader>
        {professionalProjects &&
          professionalProjects.map(project => (
            <MotionProProject key={project.name}>
              <Button
                key={project.name}
                style={style.proProjectButton}
                href={project.url}
                rel="noreferrer"
                target="_blank"
              >
                <div style={style.proProjectList}>
                  <ProjectName>{project.name}</ProjectName>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectDate>{project.date}</ProjectDate>
                </div>

                <ProjectLanguages projectLanguages={project.languages} />
              </Button>
            </MotionProProject>
          ))}
      </div>
    </LayoutComponent>
  );
};

export default ProfessionalProjects;
