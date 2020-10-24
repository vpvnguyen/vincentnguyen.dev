import theme from "../../ui/theme";

class LanguageMapper {
  static getDefaultLanguageStyle = () => ({
    fontSize: ".75em",
    marginLeft: "3px",
    padding: "5px",
    borderRadius: "20px",
    background: "white",
    color: "black",
  });

  static setLanguageThemeStyle = (languageArray, key, index) => {
    let style = this.getDefaultLanguageStyle();
    style.background = theme.languages[key].background;
    style.color = theme.languages[key].color;
    return { name: languageArray[index], style };
  };

  static setLanguageDefaultStyle = (languageArray, index) => {
    let style = this.getDefaultLanguageStyle();
    style.background = theme.languages.default.background;
    style.color = theme.languages.default.color;
    return { name: languageArray[index], style };
  };

  static hasTheme = key => Object.keys(theme.languages).includes(key);

  static setLangaugesToStyle = (languageArray, key, index) => {
    if (this.hasTheme(key)) {
      return this.setLanguageThemeStyle(languageArray, key, index);
    }
    return this.setLanguageDefaultStyle(languageArray, index);
  };

  static getLanguageStyle = languageArray =>
    languageArray.map((key, index) =>
      this.setLangaugesToStyle(languageArray, key, index)
    );
}

export default LanguageMapper;
