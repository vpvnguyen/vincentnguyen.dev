import theme from "../../ui/theme";

class LanguageMapper {
  static defaultLanguageStyle = () => ({
    fontSize: ".75em",
    marginLeft: "3px",
    padding: "5px",
    borderRadius: "20px",
    background: "white",
    color: "black",
  });

  static lowerCaseLanguageNames = languages =>
    Object.keys(languages).map(languageName => languageName.toLowerCase());

  static getLanguageColorKeys = theme => Object.keys(theme.languages);

  static mapLanguagesToThemeStyle = (languageArray, languageColorKey) =>
    languageArray.map((key, index) => {
      let style = this.defaultLanguageStyle();

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
