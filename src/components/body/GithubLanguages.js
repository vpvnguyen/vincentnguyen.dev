import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { ProjectLanguage } from "../common/Project";
import LanguageTheme from "../../ui/LanguageTheme";
import GithubAPI from "../../utils/api/github.api";

const GithubLanguages = ({ githubUrl, githubUser, projectName }) => {
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    const getGithubProjectLanguages = async (
      githubUrl,
      githubUser,
      projectName
    ) => {
      try {
        let languages = await GithubAPI.fetchProjectLanguages(
          githubUrl,
          githubUser,
          projectName
        );
        languages = LanguageTheme.getLanguageStyle(languages);
        setLanguages(languages);
      } catch (error) {
        setLanguages(null);
      }
    };

    getGithubProjectLanguages(githubUrl, githubUser, projectName);
  }, [projectName, githubUrl, githubUser]);

  return (
    <>
      {languages ? (
        <div>
          {languages.map((language, index) => (
            <ProjectLanguage
              key={`${projectName}-${index}`}
              style={language.style}
              name={language.name}
            />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default GithubLanguages;
