import React, { FunctionComponent, useState, useEffect } from "react";
import { motion } from "framer-motion";
import LayoutComponent from "../../ui/layout/Layout.component";
import {
  ProjectButton,
  ProjectTitle,
  ProjectDescription,
  ProjectDate,
  ProjectLanguage,
} from "../common/Project";
import ProjectTheme from "../../ui/ProjectTheme";
import Animate from "../../ui/Animate";
import LanguageTheme from "../../ui/LanguageTheme";
import useStaticProProjectsQuery from "../../utils/hooks/useStaticProProjectsQuery";
import { ProjectLanguagesProps } from "../../types/component.types/ProjectLanguagesProps";

const style: any = {
  container: ProjectTheme.container(),
  buttonContainer: ProjectTheme.buttonContainer(),
  sectionLeft: ProjectTheme.sectionLeft(),
  sectionRight: ProjectTheme.sectionRight(),
  header: ProjectTheme.header(),
};

const motionVariants: any = {
  motionProProjectHeader: Animate.fadeInHeadersLeft(),
  motionProProject: Animate.animateProject(),
};

const MotionProProjectHeader: FunctionComponent = ({ children }) => (
  <motion.div
    variants={motionVariants.motionProProjectHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const MotionProProject: FunctionComponent = ({ children }) => (
  <motion.div
    variants={motionVariants.motionProProject}
    initial={"initial"}
    animate={"animate"}
    whileHover={"whileHover"}
  >
    {children}
  </motion.div>
);

const ProjectLanguages: FunctionComponent<ProjectLanguagesProps> = ({
  projectLanguages,
}) => {
  const [languages, setLanguages] = useState<Array<any>>(null);

  useEffect((): void => {
    const languages = LanguageTheme.getLanguageStyle(projectLanguages);
    setLanguages(languages);
  }, [projectLanguages]);

  return (
    <>
      {languages &&
        languages.map((language, index) => (
          <ProjectLanguage
            key={`${language}-${index}`}
            languageStyle={language.style}
            languageName={language.name}
          />
        ))}
    </>
  );
};

const ProfessionalProjects: FunctionComponent = () => {
  const data: any = useStaticProProjectsQuery();
  const professionalProjects: Array<string> =
    data.site.siteMetadata.professionalProjects;

  return (
    <LayoutComponent>
      <MotionProProjectHeader>
        <h1 style={style.header}>Professional Projects</h1>
      </MotionProProjectHeader>
      <div style={style.container}>
        {professionalProjects &&
          professionalProjects.map((project: any) => (
            <MotionProProject key={project.name}>
              <ProjectButton key={project.name} href={project.url}>
                <div style={style.sectionLeft}>
                  <ProjectTitle
                    projectName={project.name}
                    projectHomepage={project.url}
                  />

                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectDate>{project.date}</ProjectDate>
                </div>

                <div style={style.sectionRight}>
                  <ProjectLanguages projectLanguages={project.languages} />
                </div>
              </ProjectButton>
            </MotionProProject>
          ))}
      </div>
    </LayoutComponent>
  );
};

export default ProfessionalProjects;
