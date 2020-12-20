export interface StyleProps {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  fontFamily?: string;
  fontSize?: string;
  fontStyle?: string;
  textDecoration?: string;
  scale?: number;
  marginLeft?: string;
  padding?: string;
  paddingTop?: string;
  borderRadius?: string;
  background?: string;
  color?: string;
  light?: string;
  dark?: string;
  accent?: string;
}

export interface LanguageThemeProps {
  default?: {
    border: string;
    background: string;
  };
  html?: {
    border: string;
    background: string;
  };
  css?: { border: string; background: string };
  javascript?: {
    border: string;
    background: string;
  };
  typescript?: {
    border: string;
    background: string;
  };
  php?: { border: string; background: string };
  ruby?: {
    border: string;
    background: string;
  };
  python?: {
    border: string;
    background: string;
  };
  java?: {
    border: string;
    background: string;
  };
  swift?: {
    border: string;
    background: string;
  };
  go?: { border: string; background: string };
  r?: { border: string; background: string };
  dart?: {
    border: string;
    background: string;
  };
  kotlin?: {
    border: string;
    background: string;
  };
  c?: { border: string; background: string };
  "c#"?: {
    border: string;
    background: string;
  };
  "c++"?: {
    border: string;
    background: string;
  };
  "objective-c"?: {
    border: string;
    background: string;
  };
  sql?: { border: string; background: string };
  mysql?: {
    border: string;
    background: string;
  };
  tsql?: {
    border: string;
    background: string;
  };
  shell?: {
    border: string;
    background: string;
  };
  laravel?: {
    border: string;
    background: string;
  };
  drupal?: {
    border: string;
    background: string;
  };
}

class Theme {
  public static fontUrl = (): string =>
    "https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap";

  public static font = (): StyleProps => ({
    fontFamily: "Source Code Pro, monospace",
    fontSize: "16px",
  });

  public static color = (): StyleProps => ({
    light: "#FFFFFF",
    dark: "#282828",
    accent: "#03DAC5",
  });

  public static h1 = (): StyleProps => ({
    textDecoration: `underline ${Theme.color().accent}`,
  });

  public static h3 = (): StyleProps => ({
    fontSize: "1.3em",
  });

  public static projectBoxShadow = (): string => `0px 1px 10px #CCC`;

  public static getDefaultLanguageStyle = (): StyleProps => ({
    fontSize: ".75em",
    marginLeft: "3px",
    padding: "5px",
    borderRadius: "20px",
    background: "white",
    color: "black",
  });

  public static languages = (): LanguageThemeProps => ({
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
