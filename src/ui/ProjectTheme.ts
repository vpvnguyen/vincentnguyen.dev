import Theme from "./Theme";
import { StyleProps } from "./Theme";

class ProjectTheme extends Theme {
  public static container = (): StyleProps => ({
    display: "flex",
    flexDirection: "column",
  });

  public static buttonContainer = (): StyleProps => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: Theme.font().fontFamily,
  });

  public static sectionLeft = (): StyleProps => ({
    display: "flex",
    flexDirection: "column",
  });

  public static sectionRight = (): StyleProps => ({
    justifyContent: "flex-end",
  });

  public static header = (): StyleProps => Theme.h1();

  public static title = (): StyleProps => Theme.h3();

  public static description = (): StyleProps => ({
    fontSize: ".7rem",
  });

  public static date = (): StyleProps => ({
    fontSize: ".6rem",
    paddingTop: "1rem",
    fontStyle: "oblique",
  });
}

export default ProjectTheme;
