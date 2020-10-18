import React, { useState, useEffect } from "react";
import { Button, LinearProgress } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import LayoutComponent from "../../ui/layout/Layout.component";
import Languages from "./Languages";
import theme from "../../ui/theme";
import MotionStyle from "../../ui/motion";
import GithubAPI from "../../utils/api/github.api";
import useStaticGithubApiQuery from "../../utils/hooks/useStaticGithubApiQuery";

const style = {
  projectContainer: {
    display: "flex",
    flexDirection: "column",
  },
  projectButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: theme.font.fontFamily,
  },
  projectInfo: {
    display: "flex",
    flexDirection: "column",
  },
  projectHeader: theme.h1,
  projectName: theme.h3,
  projectDescription: {
    fontSize: ".7rem",
  },
  projectDate: {
    fontSize: ".6rem",
    paddingTop: "1rem",
    fontStyle: "oblique",
  },
  motionProjectHeader: MotionStyle.fadeInHeadersLeft(),
  motionProject: MotionStyle.animateProject(),
};

const MotionProjectHeader = ({ children }) => (
  <motion.h1
    style={style.projectHeader}
    variants={style.motionProjectHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.h1>
);

const MotionProject = ({ children }) => (
  <motion.div
    variants={style.motionProject}
    initial={"initial"}
    animate={"animate"}
    whileHover={"whileHover"}
  >
    {children}
  </motion.div>
);

const ProjectTitle = ({ projectName, projectHomepage }) => (
  <h3 style={style.projectName}>
    {projectName}{" "}
    <span>
      {projectHomepage ? (
        <FontAwesomeIcon icon={faGlobe} title="Click me for live demo!" />
      ) : (
        <FontAwesomeIcon
          icon={faCode}
          title="Click me to go to the repository!"
        />
      )}
    </span>
  </h3>
);

const ProjectDescription = ({ projectDescription }) => (
  <p style={style.projectDescription}>{projectDescription}</p>
);

const ProjectDate = ({ projectDate }) => (
  <p style={style.projectDate}>{dayjs(projectDate).format("MMM-YYYY")}</p>
);

const GithubProjects = () => {
  const [githubProjects, setGithubProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const data = useStaticGithubApiQuery();

  useEffect(() => {
    const getGithubProjects = async (url, user, pageAmount) => {
      try {
        const githubProjectsResponse = await GithubAPI.fetchGithubProjects(
          url,
          user,
          pageAmount
        );
        await setGithubProjects(githubProjectsResponse);
        setLoading(false);
      } catch (error) {
        await setGithubProjects(null);
      }
    };

    getGithubProjects(
      data.site.siteMetadata.api.github.url,
      data.site.siteMetadata.api.github.user,
      data.site.siteMetadata.api.github.pageAmount
    );
  }, [data]);

  return (
    <LayoutComponent>
      <MotionProjectHeader>
        {loading ? "Loading Personal Projects..." : "Personal Projects"}
      </MotionProjectHeader>
      <div style={style.projectContainer}>
        {loading ? (
          <LinearProgress />
        ) : (
          githubProjects.map(project => (
            <MotionProject key={project.name}>
              <Button
                key={project.name}
                style={style.projectButton}
                href={project.homepage || project.html_url}
                target="_blank"
                rel="noreferrer"
                fullWidth
              >
                <div style={style.projectInfo}>
                  <ProjectTitle
                    projectName={project.name}
                    projectHomepage={project.homepage}
                  />

                  <ProjectDescription
                    projectDescription={project.description}
                  />

                  <ProjectDate projectDate={project.pushed_at} />
                </div>

                <Languages
                  url={data.site.siteMetadata.api.github.url}
                  user={data.site.siteMetadata.api.github.user}
                  projectName={project.name}
                />
              </Button>
            </MotionProject>
          ))
        )}
      </div>
    </LayoutComponent>
  );
};

export default GithubProjects;
