import Theme from "./Theme";
import { StyleProps } from "../types/ui.types/StyleProps";

class ProjectTheme extends Theme {
  public static container = (): StyleProps => ({
    display: "flex",
    flexDirection: "column",
  });

  public static buttonLink = (): StyleProps => ({
    padding: "1rem",
    textDecoration: "none",
    color: "#000",
  });

  public static header = (): StyleProps => Theme.h1();

  public static title = (): StyleProps => Theme.h3();

  public static description = (): StyleProps => ({
    fontSize: "1rem",
    padding: ".5rem",
  });

  public static languageContainer = (): StyleProps => ({
    padding: ".5rem",
  });

  public static date = (): StyleProps => ({
    fontSize: ".75rem",
    fontStyle: "oblique",
    padding: ".5rem",
  });
}

export default ProjectTheme;
