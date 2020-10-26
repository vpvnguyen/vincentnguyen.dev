import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import LanguageMapper from "../../utils/helpers/LanguageMapper";
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
        languages = LanguageMapper.getLanguageStyle(languages);
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
            <span key={`${projectName}-${index}`} style={language.style}>
              {language.name}
            </span>
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default GithubLanguages;
