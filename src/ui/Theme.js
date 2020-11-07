class Theme {
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
    textDecoration: `underline ${this.color().accent}`,
  });

  static h3 = () => ({
    fontSize: "1.3em",
  });

  static projectBoxShadow = () => `0px 1px 10px #CCC`;

  static getDefaultLanguageStyle = () => ({
    fontSize: ".75em",
    marginLeft: "3px",
    padding: "5px",
    borderRadius: "20px",
    background: "white",
    color: "black",
  });

  static languages = () => ({
    default: {
      border: "#60656C",
      background: "#EEEEEE",
    },
    html: {
      border: "#FFF4E6",
      background: "#FFF0DD",
    },
    css: { border: "#E7F5FF", background: "#E7F5FF" },
    javascript: {
      border: "#FFF3BF",
      background: "#FFF3BF",
    },
    typescript: {
      border: "#00273F",
      background: "#D5E2EC",
    },
    php: { border: "#F3F0FF", background: "#F3F0FF" },
    ruby: {
      border: "#CC342D",
      background: "#FFD6D6",
    },
    python: {
      border: "#3776AB",
      background: "#D5E2EC",
    },
    java: {
      border: "#940000",
      background: "#EBDDDD",
    },
    swift: {
      border: "#EB7731",
      background: "#FFDBC5",
    },
    go: { border: "#00ACD7", background: "#D2F3FC" },
    r: { border: "#2266B8", background: "#C2DEFF" },
    dart: {
      border: "#2AB1EE",
      background: "#DDF4FF",
    },
    kotlin: {
      border: "#C85AA5",
      background: "#FFDAF3",
    },
    c: { border: "#5967BA", background: "#DBE0FF" },
    "c#": {
      border: "#A47CDE",
      background: "#EEE2FF",
    },
    "c++": {
      border: "#CBE2FA",
      background: "#649AD2",
    },
    "objective-c": {
      border: "#323F50",
      background: "#EEEEEE",
    },
    sql: { border: "#FFD43B", background: "#FFEBCA" },
    mysql: {
      border: "#FFD43B",
      background: "#FFEBCA",
    },
    tsql: {
      border: "#00273F",
      background: "#EEEEEE",
    },
    shell: {
      border: "#D3D3D3",
      background: "#E0E0E0",
    },
    laravel: {
      border: "#F3F0FF",
      background: "#E7E0FF",
    },
    drupal: {
      border: "#F3F0FF",
      background: "#DDF2FF",
    },
  });
}

export default Theme;
