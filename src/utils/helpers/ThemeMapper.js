const languageFontColor = `black`;

class ThemeMapper {
  static font = () => ({
    fontFamily: "Source Code Pro, monospace",
    fontSize: "16px",
  });

  static color = () => ({
    light: "#FFFFFF",
    dark: "#282828",
    accent: "#03DAC5",
  });

  static h1 = () => ({
    textDecoration: `underline #03DAC5`,
  });

  static h3 = () => ({
    fontSize: "1.3em",
  });

  static languages = () => ({
    default: {
      color: languageFontColor,
      border: "#60656C",
      background: "#EEEEEE",
    },
    html: {
      color: languageFontColor,
      border: "#FFF4E6",
      background: "#fff0DD",
    },
    css: { color: languageFontColor, border: "#E7F5FF", background: "#E7F5FF" },
    javascript: {
      color: languageFontColor,
      border: "#FFF3BF",
      background: "#FFF3BF",
    },
    typescript: {
      color: languageFontColor,
      border: "#00273F",
      background: "#D5E2EC",
    },
    php: { color: languageFontColor, border: "#F3F0FF", background: "#F3F0FF" },
    ruby: {
      color: languageFontColor,
      border: "#CC342D",
      background: "#FFD6D6",
    },
    python: {
      color: languageFontColor,
      border: "#3776AB",
      background: "#D5E2EC",
    },
    java: {
      color: languageFontColor,
      border: "#940000",
      background: "#EBDDDD",
    },
    swift: {
      color: languageFontColor,
      border: "#EB7731",
      background: "#FFDBC5",
    },
    go: { color: languageFontColor, border: "#00ACD7", background: "#D2F3FC" },
    r: { color: languageFontColor, border: "#2266B8", background: "#C2DEFF" },
    dart: {
      color: languageFontColor,
      border: "#2AB1EE",
      background: "#DDF4FF",
    },
    kotlin: {
      color: languageFontColor,
      border: "#C85AA5",
      background: "#FFDAF3",
    },
    c: { color: languageFontColor, border: "#5967BA", background: "#DBE0FF" },
    "c#": {
      color: languageFontColor,
      border: "#A47CDE",
      background: "#EEE2FF",
    },
    "c++": {
      color: languageFontColor,
      border: "#CBE2FA",
      background: "#649AD2",
    },
    "objective-c": {
      color: languageFontColor,
      border: "#323F50",
      background: "#EEEEEE",
    },
    sql: { color: languageFontColor, border: "#FFD43B", background: "#FFEBCA" },
    mysql: {
      color: languageFontColor,
      border: "#FFD43B",
      background: "#FFEBCA",
    },
    tsql: {
      color: languageFontColor,
      border: "#00273F",
      background: "#EEEEEE",
    },
    shell: {
      color: languageFontColor,
      border: "#D3D3D3",
      background: "#E0E0E0",
    },
    laravel: {
      color: languageFontColor,
      border: "#F3F0FF",
      background: "#E7E0FF",
    },
    drupal: {
      color: languageFontColor,
      border: "#F3F0FF",
      background: "#DDF2FF",
    },
  });
}

export default ThemeMapper;
