import Theme from "./Theme";

class ProjectTheme extends Theme {
  static container = () => ({
    display: "flex",
    flexDirection: "column",
  });

  static buttonContainer = () => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: super.font().fontFamily,
  });

  static sectionLeft = () => ({
    display: "flex",
    flexDirection: "column",
  });

  static sectionRight = () => ({
    justifyContent: "flex-end",
  });

  static header = () => super.h1();

  static title = () => super.h3();

  static description = () => ({
    fontSize: ".7rem",
  });

  static date = () => ({
    fontSize: ".6rem",
    paddingTop: "1rem",
    fontStyle: "oblique",
  });
}

export default ProjectTheme;
