import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import theme from "../../ui/theme";
import GithubAPI from "../../utils/api/github.api";

const Languages = ({ url, user, projectName }) => {
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    const defaultLanguageStyle = () => ({
      fontSize: ".75em",
      marginLeft: "3px",
      padding: "5px",
      borderRadius: "20px",
      background: "white",
      color: "black",
    });

    const lowerCaseLanguageNames = githubLanguages =>
      Object.keys(githubLanguages).map(languageName =>
        languageName.toLowerCase()
      );

    const getLanguageColorKeys = theme => Object.keys(theme.languages);

    const mapLanguagesToThemeStyle = (languageArray, languageColorKey) =>
      languageArray.map((key, index) => {
        let style = defaultLanguageStyle();

        if (languageColorKey.includes(key)) {
          style.background = theme.languages[key].background;
          style.color = theme.languages[key].color;
          return { name: languageArray[index], style };
        } else {
          style.background = theme.languages.default.background;
          style.color = theme.languages.default.color;
          return { name: languageArray[index], style };
        }
      });

    const getGithubProjectLanguages = async (url, user, projectName) => {
      try {
        const githubLanguages = await GithubAPI.fetchProjectLanguages(
          url,
          user,
          projectName
        );
        const languageColorKeys = getLanguageColorKeys(theme);
        let languages = lowerCaseLanguageNames(githubLanguages);
        languages = mapLanguagesToThemeStyle(languages, languageColorKeys);
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

export default Languages;
