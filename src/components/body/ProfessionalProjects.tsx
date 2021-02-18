import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LayoutComponent from "../../ui/layout/Layout.component";
import LayoutProject from "../../ui/layout/Layout.project";
import {
  ProjectButton,
  ProjectTitle,
  ProjectDescription,
  ProjectDate,
  ProjectLanguage
} from "../common/Project";
import ProjectTheme from "../../ui/ProjectTheme";
import Animate from "../../ui/Animate";
import LanguageTheme from "../../ui/LanguageTheme";
import useStaticProProjectsQuery from "../../utils/hooks/useStaticProProjectsQuery";
import { ProjectLanguagesProps } from "../../types/component.types/ProjectLanguagesProps";
import { MotionComponentProps } from "../../types/component.types/MotionProps";

const style: any = {
  header: ProjectTheme.header(),
  languageContainer: ProjectTheme.languageContainer()
};

const motionVariants: any = {
  motionProProjectHeader: Animate.fadeInHeadersLeft(),
  motionProProject: Animate.animateProject()
};

const MotionProProjectHeader = ({ children }: MotionComponentProps) => (
  <motion.div
    variants={motionVariants.motionProProjectHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const MotionProProject = ({ children }: MotionComponentProps) => (
  <motion.div
    variants={motionVariants.motionProProject}
    initial={"initial"}
    animate={"animate"}
    whileHover={"whileHover"}
  >
    {children}
  </motion.div>
);

const ProjectLanguages = ({ projectLanguages }: ProjectLanguagesProps) => {
  const [languages, setLanguages] = useState<any[]>(null);

  useEffect(() => {
    const languages = LanguageTheme.getLanguageStyle(projectLanguages);
    setLanguages(languages);
  }, [projectLanguages]);

  if (!languages || languages.length === 0) return null;

  return (
    <div style={style.languageContainer}>
      {languages &&
        languages.map((language: any, index: number) => (
          <ProjectLanguage
            key={`${language}-${index}`}
            languageStyle={language.style}
            languageName={language.name}
          />
        ))}
    </div>
  );
};

const ProfessionalProjects = () => {
  const data: any = useStaticProProjectsQuery();
  const professionalProjects: string[] =
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
