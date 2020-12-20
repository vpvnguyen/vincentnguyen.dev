import Theme from "./Theme";
import { StyleProps, LanguageThemeProps } from "./Theme";
interface LanguageStyle {
  name: string;
  style: object;
}

class LanguageTheme extends Theme {
  private static setLanguageThemeStyle = (
    languageArray: Array<string>,
    key: string,
    index: number
  ): LanguageStyle => {
    const languages: LanguageThemeProps = Theme.languages();
    let style: StyleProps = Theme.getDefaultLanguageStyle();

    style.background = languages[key].background;
    style.color = languages[key].color;
    return { name: languageArray[index], style };
  };

  private static setLanguageDefaultStyle = (
    languageArray: Array<string>,
    index: number
  ): LanguageStyle => {
    const languages: LanguageThemeProps = Theme.languages();
    let style: StyleProps = Theme.getDefaultLanguageStyle();

    style.background = languages.default.background;
    return { name: languageArray[index], style };
  };

  private static hasTheme = (key: string): boolean =>
    Object.keys(Theme.languages()).includes(key);

  private static setLangaugesToStyle = (
    languageArray: Array<string>,
    key: string,
    index: number
  ): LanguageStyle => {
    if (LanguageTheme.hasTheme(key)) {
      return LanguageTheme.setLanguageThemeStyle(languageArray, key, index);
    }
    return LanguageTheme.setLanguageDefaultStyle(languageArray, index);
  };

  public static getLanguageStyle = (languageArray: Array<string>) =>
    languageArray.map((key, index) =>
      LanguageTheme.setLangaugesToStyle(languageArray, key, index)
    );
}

export default LanguageTheme;
