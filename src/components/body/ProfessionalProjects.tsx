import React, { FunctionComponent, useState, useEffect } from "react";
import { motion } from "framer-motion";
import LayoutComponent from "../../ui/layout/Layout.component";
import LayoutProject from "../../ui/layout/Layout.project";
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
  header: ProjectTheme.header(),
};

const motionVariants: any = {
  motionProProjectHeader: Animate.fadeInHeadersLeft(),
  motionProProject: Animate.animateProject(),
};

const MotionProProjectHeader: FunctionComponent = ({ children }: any) => (
  <motion.div
    variants={motionVariants.motionProProjectHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const MotionProProject: FunctionComponent = ({ children }: any) => (
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
        languages.map((language: any, index: number) => (
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
        <h1 style={style.header}>PROFESSIONAL PROJECTS</h1>
      </MotionProProjectHeader>

      <LayoutProject>
        {professionalProjects &&
          professionalProjects.map((project: any) => (
            <MotionProProject key={project.name}>
              <ProjectButton key={project.name} href={project.url}>
                <ProjectTitle
                  projectName={project.name}
                  projectHomepage={project.url}
                />

                <ProjectDescription>{project.description}</ProjectDescription>

                <ProjectLanguages projectLanguages={project.languages} />

                <ProjectDate>{project.date}</ProjectDate>
              </ProjectButton>
            </MotionProProject>
          ))}
      </LayoutProject>
    </LayoutComponent>
  );
};

export default ProfessionalProjects;
