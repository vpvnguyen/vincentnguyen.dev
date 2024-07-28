import React from "react";
import LayoutGlobal from "../ui/layout/Layout.global";
import Landing from "../components/landing/Landing";
import ProfessionalProjects from "../components/body/ProfessionalProjects";
import GithubProjects from "../components/body/GithubProjects";
import Experience from "../components/body/Experience";
import EmbedTwitterTimeline from "../components/body/EmbedTwitterTimeline";
import Background from "../components/landing/Background";

const style: any = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  sectionContent: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1280px",
    textAlign: "center"
  },
  sectionContentLeft: {
    flex: 2
  },
  sectionContentRight: {
    flex: 1
  }
};

const IndexPage = () => (
  <LayoutGlobal>
    <div style={style.pageContainer}>
      <Background>
        <Landing />
      </Background>

      <div style={style.sectionContent}>
        <div style={style.sectionContentLeft}>
          <ProfessionalProjects />
          <GithubProjects />
        </div>

        <div style={style.sectionContentRight}>
          <Experience />
          <EmbedTwitterTimeline />
        </div>
      </div>
    </div>
  </LayoutGlobal>
);

export default IndexPage;
