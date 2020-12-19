import React, { FunctionComponent, useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { ProjectLanguage } from "../common/Project";
import LanguageTheme from "../../ui/LanguageTheme";
import GithubAPI from "../../utils/api/github.api";

interface GithubLanguagesProps {
  githubUrl: string;
  githubUser: string;
  projectName: string;
}

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
      {languages ? (
        <div>
          {languages.map((language: any, index: number) => (
            <ProjectLanguage
              key={`${projectName}-${index}`}
              languageStyle={language.style}
              languageName={language.name}
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
