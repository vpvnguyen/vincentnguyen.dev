import Theme from "./Theme";

class ProjectTheme extends Theme {
  public static container = () => ({
    display: "flex",
    flexDirection: "column",
  });

  public static buttonContainer = () => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: Theme.font().fontFamily,
  });

  public static sectionLeft = () => ({
    display: "flex",
    flexDirection: "column",
  });

  public static sectionRight = () => ({
    justifyContent: "flex-end",
  });

  public static header = () => Theme.h1();

  public static title = () => Theme.h3();

  public static description = () => ({
    fontSize: ".7rem",
  });

  public static date = () => ({
    fontSize: ".6rem",
    paddingTop: "1rem",
    fontStyle: "oblique",
  });
}

export default ProjectTheme;
