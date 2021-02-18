import React, { FunctionComponent, useState, useEffect } from "react";
import { LoaderThreeDots } from "../common/Loader";
import { ProjectLanguage } from "../common/Project";
import LanguageTheme from "../../ui/LanguageTheme";
import GithubAPI from "../../utils/api/github.api";
import { GithubLanguagesProps } from "../../types/component.types/GithubLanguagesProps";
import ProjectTheme from "../../ui/ProjectTheme";

const style: any = {
  languageContainer: ProjectTheme.languageContainer(),
};

const GithubLanguages: FunctionComponent<GithubLanguagesProps> = ({
  githubUrl,
  githubUser,
  projectName,
}) => {
  const [languages, setLanguages] = useState<Array<any>>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
      setLoading(false);
    };

    getGithubProjectLanguages(githubUrl, githubUser, projectName);
  }, [projectName, githubUrl, githubUser]);

  if (loading) return <LoaderThreeDots />;

  if (!languages || languages.length === 0) return null;

  return (
    <div style={style.languageContainer}>
      {languages &&
        languages.map((language: any, index: number) => (
          <ProjectLanguage
            key={`${projectName}-${index}`}
            languageStyle={language.style}
            languageName={language.name}
          />
        ))}
    </div>
  );
};

export default GithubLanguages;
