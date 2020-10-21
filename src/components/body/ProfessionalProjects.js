import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import LayoutComponent from "../../ui/layout/Layout.component";
import theme from "../../ui/theme";
import MotionStyle from "../../ui/motion";
import LanguageMapper from "../../utils/helpers/LanguageMapper";
import useStaticProProjectsQuery from "../../utils/hooks/useStaticProProjectsQuery";

const style = {
  proProjectContainer: {
    display: "flex",
    flexDirection: "column",
  },
  proProjectHeader: theme.h1,
  proProjectName: theme.h3,
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
    fontFamily: theme.font.fontFamily,
  },
  motionProProjectHeader: MotionStyle.fadeInHeadersLeft(),
  motionProProject: MotionStyle.animateProject(),
};

const MotionProProjectHeader = ({ children }) => (
  <motion.h1
    style={style.proProjectHeader}
    variants={style.motionProProjectHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.h1>
);

const MotionProProject = ({ children }) => (
  <motion.div
    variants={style.motionProProject}
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
    const languageColorKeys = LanguageMapper.getLanguageColorKeys(theme);
    const languages = LanguageMapper.mapLanguagesToThemeStyle(
      projectLanguages,
      languageColorKeys
    );
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
        <MotionProProjectHeader>Professional Projects</MotionProProjectHeader>
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
