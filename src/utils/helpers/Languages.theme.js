import Theme from "./Theme";

class LanguageTheme extends Theme {
  static setLanguageThemeStyle = (languageArray, key, index) => {
    const languages = super.languages();
    let style = super.getDefaultLanguageStyle();

    style.background = languages[key].background;
    style.color = languages[key].color;
    return { name: languageArray[index], style };
  };

  static setLanguageDefaultStyle = (languageArray, index) => {
    const languages = super.languages();
    let style = super.getDefaultLanguageStyle();

    style.background = languages.default.background;
    style.color = languages.default.color;
    return { name: languageArray[index], style };
  };

  static hasTheme = key => Object.keys(super.languages()).includes(key);

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

export default LanguageTheme;
