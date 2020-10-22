import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import LanguageMapper from "../../utils/helpers/LanguageMapper";
import GithubAPI from "../../utils/api/github.api";

const GithubLanguages = ({ url, user, projectName }) => {
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    const getGithubProjectLanguages = async (url, user, projectName) => {
      try {
        const githubLanguages = await GithubAPI.fetchProjectLanguages(
          url,
          user,
          projectName
        );
        let languages = LanguageMapper.setLanguageNamesToLowerCase(
          githubLanguages
        );
        languages = LanguageMapper.getLanguageStyle(languages);
        setLanguages(languages);
      } catch (error) {
        setLanguages(null);
      }
    };

    getGithubProjectLanguages(url, user, projectName);
  }, [projectName, url, user]);

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
