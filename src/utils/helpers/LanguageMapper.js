class LanguageMapper {
  static defaultLanguageStyle = () => ({
    fontSize: ".75em",
    marginLeft: "3px",
    padding: "5px",
    borderRadius: "20px",
    background: "white",
    color: "black",
  });

  static setLanguageNamesToLowerCase = githubLanguages =>
    Object.keys(githubLanguages).map(languageName =>
      languageName.toLowerCase()
    );

  static mapLanguageStyle = languageArray => {
    const languageColorKey = Object.keys(theme.languages);
    return mapLanguageColor(languageArray, languageColorKey);
  };

  static mapLanguageColor = (languageArray, languageColorKey) =>
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
}

export default LanguageMapper;
