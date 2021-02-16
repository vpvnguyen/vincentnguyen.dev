import React, { FunctionComponent, useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { ProjectLanguage } from "../common/Project";
import LanguageTheme from "../../ui/LanguageTheme";
import GithubAPI from "../../utils/api/github.api";
import { GithubLanguagesProps } from "../../types/component.types/GithubLanguagesProps";

const GithubLanguages: FunctionComponent<GithubLanguagesProps> = ({
  githubUrl,
  githubUser,
  projectName,
}) => {
  const [languages, setLanguages] = useState<Array<any>>(null);

  useEffect((): void => {
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
      {languages &&
        languages.map((language: any, index: number) => (
          <ProjectLanguage
            key={`${projectName}-${index}`}
            languageStyle={language.style}
            languageName={language.name}
          />
        ))}

      {/* <CircularProgress /> */}
    </>
  );
};

export default GithubLanguages;
