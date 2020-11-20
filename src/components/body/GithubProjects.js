import React, { useState, useEffect } from "react";
import { LinearProgress } from "@material-ui/core";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import LayoutComponent from "../../ui/layout/Layout.component";
import {
  ProjectButton,
  ProjectTitle,
  ProjectDescription,
  ProjectDate,
} from "../common/Project";
import GithubLanguages from "./GithubLanguages";
import ProjectTheme from "../../ui/ProjectTheme";
import Animate from "../../ui/Animate";
import GithubAPI from "../../utils/api/github.api";
import useStaticGithubApiQuery from "../../utils/hooks/useStaticGithubApiQuery";

const style = {
  container: ProjectTheme.container(),
  buttonContainer: ProjectTheme.buttonContainer(),
  sectionLeft: ProjectTheme.sectionLeft(),
  sectionRight: ProjectTheme.sectionRight(),
  header: ProjectTheme.header(),
};

const motionVariants = {
  motionProjectHeader: Animate.fadeInHeadersLeft(),
  motionProject: Animate.animateProject(),
};

const MotionProjectHeader = ({ children }) => (
  <motion.div
    variants={motionVariants.motionProjectHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const MotionProject = ({ children }) => (
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
  const [githubProjects, setGithubProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  const data = useStaticGithubApiQuery();
  const githubUrl = data.site.siteMetadata.api.github.url;
  const githubUser = data.site.siteMetadata.api.github.user;
  const pageAmount = data.site.siteMetadata.api.github.pageAmount;

  useEffect(() => {
    const getGithubProjects = async (githubUrl, githubUser, pageAmount) => {
      try {
        const githubProjects = await GithubAPI.fetchGithubProjects(
          githubUrl,
          githubUser,
          pageAmount
        );
        await setGithubProjects(githubProjects);
        setLoading(false);
      } catch (error) {
        await setGithubProjects(null);
      }
    };

    getGithubProjects(githubUrl, githubUser, pageAmount);
  }, [githubUrl, githubUser, pageAmount]);

  return (
    <LayoutComponent>
      <MotionProjectHeader>
        <h1 style={style.header}>
          {loading ? "Loading Personal Projects..." : "Personal Projects"}
        </h1>
      </MotionProjectHeader>
      <div style={style.container}>
        {loading ? (
          <LinearProgress />
        ) : (
          githubProjects.map(project => (
            <MotionProject key={project.name}>
              <ProjectButton
                key={project.name}
                href={project.homepage || project.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <div style={style.sectionLeft}>
                  <ProjectTitle
                    projectName={project.name}
                    projectHomepage={project.homepage}
                  />
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectDate>
                    {dayjs(project.pushed_at).format("MMM-YYYY")}
                  </ProjectDate>
                </div>

                <div style={style.sectionRight}>
                  <GithubLanguages
                    githubUrl={githubUrl}
                    githubUser={githubUser}
                    projectName={project.name}
                  />
                </div>
              </ProjectButton>
            </MotionProject>
          ))
        )}
      </div>
    </LayoutComponent>
  );
};

export default GithubProjects;
