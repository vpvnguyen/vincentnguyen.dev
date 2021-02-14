import React, { FunctionComponent, useState, useEffect } from "react";
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

const style: any = {
  // container: ProjectTheme.container(),
  container: {
    display: "flex",
    flexDirection: "column",
  },
  // buttonContainer: ProjectTheme.buttonContainer(),
  buttonContainer: {
    display: "flex",
  },
  sectionLeft: ProjectTheme.sectionLeft(),
  sectionRight: ProjectTheme.sectionRight(),
  header: ProjectTheme.header(),
};

const motionVariants: any = {
  motionProjectHeader: Animate.fadeInHeadersLeft(),
  motionProject: Animate.animateProject(),
};

const MotionProjectHeader: FunctionComponent = ({ children }: any) => (
  <motion.div
    variants={motionVariants.motionProjectHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const MotionProject: FunctionComponent = ({ children }: any) => (
  <motion.div
    variants={motionVariants.motionProject}
    initial={"initial"}
    animate={"animate"}
    whileHover={"whileHover"}
  >
    {children}
  </motion.div>
);

const GithubProjects: FunctionComponent = () => {
  const [githubProjects, setGithubProjects] = useState<Array<any>>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const data: any = useStaticGithubApiQuery();
  const githubUrl: string = data.site.siteMetadata.api.github.url;
  const githubUser: string = data.site.siteMetadata.api.github.user;
  const pageAmount: string = data.site.siteMetadata.api.github.pageAmount;

  useEffect((): void => {
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
          githubProjects.map((project: any) => (
            <MotionProject key={project.name}>
              <ProjectButton
                key={project.name}
                href={project.homepage || project.html_url}
                // style={style.buttonContainer}
              >
                <div className={style.buttonContainer}>
                  {/* <div style={style.sectionLeft}> */}
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
                  {/* </div> */}

                  {/* <div style={style.sectionRight}> */}

                  {/* </div> */}
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
