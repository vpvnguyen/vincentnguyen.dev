import React, { useState, useEffect } from "react";
import { LoaderThreeDots } from "../common/Loader";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import LayoutComponent from "../../ui/layout/Layout.component";
import LayoutProject from "../../ui/layout/Layout.project";
import {
  ProjectButton,
  ProjectTitle,
  ProjectDescription,
  ProjectDate
} from "../common/Project";
import GithubLanguages from "./GithubLanguages";
import ProjectTheme from "../../ui/ProjectTheme";
import Animate from "../../ui/Animate";
import GithubAPI from "../../utils/api/github.api";
import useStaticGithubApiQuery from "../../utils/hooks/useStaticGithubApiQuery";
import { MotionComponentProps } from "../../types/component.types/MotionProps";

const style: any = {
  header: ProjectTheme.header()
};

const motionVariants: any = {
  motionProjectHeader: Animate.fadeInHeadersLeft(),
  motionProject: Animate.animateProject()
};

const MotionProjectHeader = ({ children }: MotionComponentProps) => (
  <motion.div
    variants={motionVariants.motionProjectHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const MotionProject = ({ children }: MotionComponentProps) => (
  <motion.div
    variants={motionVariants.motionProject}
    initial={"initial"}
    animate={"animate"}
    whileHover={"whileHover"}
  >
    {children}
  </motion.div>
);

const GithubProjects = () => {
  const [githubProjects, setGithubProjects] = useState<any[]>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const data: any = useStaticGithubApiQuery();
  const githubUrl: string = data.site.siteMetadata.api.github.url;
  const githubUser: string = data.site.siteMetadata.api.github.user;
  const pageAmount: string = data.site.siteMetadata.api.github.pageAmount;

  useEffect(() => {
    const getGithubProjects = async (
      githubUrl: string,
      githubUser: string,
      pageAmount: string
    ) => {
      try {
        const githubProjects = await GithubAPI.fetchGithubProjects(
          githubUrl,
          githubUser,
          pageAmount
        );
        await setGithubProjects(githubProjects);
      } catch (error) {
        await setGithubProjects(null);
      }
      setLoading(false);
    };

    getGithubProjects(githubUrl, githubUser, pageAmount);
  }, [githubUrl, githubUser, pageAmount]);

  return (
    <LayoutComponent>
      <MotionProjectHeader>
        <h1 style={style.header}>
          {loading ? "Loading Personal Projects..." : "GITHUB PROJECTS"}
        </h1>
      </MotionProjectHeader>

      <LayoutProject>
        {loading ? (
          <LoaderThreeDots />
        ) : (
          githubProjects.map((project: any) => (
            <MotionProject key={project.name}>
              <ProjectButton
                key={project.name}
                href={project.homepage || project.html_url}
              >
                <ProjectTitle
                  projectName={project.name}
                  projectHomepage={project.homepage}
                />
                <ProjectDescription>{project.description}</ProjectDescription>

                <GithubLanguages
                  githubUrl={githubUrl}
                  githubUser={githubUser}
                  projectName={project.name}
                />

                <ProjectDate>
                  {dayjs(project.pushed_at).format("MMM-YYYY")}
                </ProjectDate>
              </ProjectButton>
            </MotionProject>
          ))
        )}
      </LayoutProject>
    </LayoutComponent>
  );
};

export default GithubProjects;
