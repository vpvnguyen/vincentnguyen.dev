import theme from "../../ui/theme";

const getDefaultLanguageStyle = () => ({
  fontSize: ".75em",
  marginLeft: "3px",
  padding: "5px",
  borderRadius: "20px",
  background: "white",
  color: "black",
});

const setLanguageThemeStyle = (languageArray, key, index) => {
  let style = getDefaultLanguageStyle();
  style.background = theme.languages[key].background;
  style.color = theme.languages[key].color;
  return { name: languageArray[index], style };
};

const setLanguageDefaultStyle = (languageArray, index) => {
  let style = getDefaultLanguageStyle();
  style.background = theme.languages.default.background;
  style.color = theme.languages.default.color;
  return { name: languageArray[index], style };
};

const hasTheme = key => Object.keys(theme.languages).includes(key);

const setLangaugesToStyle = (languageArray, key, index) => {
  if (hasTheme(key)) {
    return setLanguageThemeStyle(languageArray, key, index);
  }
  return setLanguageDefaultStyle(languageArray, index);
};

class LanguageMapper {
  static getLanguageStyle = languageArray =>
    languageArray.map((key, index) =>
      setLangaugesToStyle(languageArray, key, index)
    );
}

export default LanguageMapper;
