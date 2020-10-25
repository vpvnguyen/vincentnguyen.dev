import React from "react";
import LayoutGlobal from "../ui/layout/Layout.global";
import Landing from "../components/landing/Landing";
import ProfessionalProjects from "../components/body/ProfessionalProjects";
import GithubProjects from "../components/body/GithubProjects";
import Footer from "../components/footer/Footer";
import Experience from "../components/body/Experience";
import EmbedTwitterTimeline from "../components/body/EmbedTwitterTimeline";
import Background from "../components/landing/Background";

const style = {
  pageRoot: {
    overflow: "hidden",
  },
  pageContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  sectionLanding: {
    flex: "1 100%",
    textAlign: "center",
  },
  sectionContent: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1280px",
  },
  sectionContentLeft: {
    flex: 2,
    padding: "1rem 2rem 1rem 2rem",
  },
  sectionContentRight: {
    flex: 1,
    padding: "1rem 2rem 1rem 2rem",
  },
};

const IndexPage = () => (
  <LayoutGlobal>
    <div style={style.pageRoot}>
      <div style={style.pageContainer}>
        <div style={style.sectionLanding}>
          <Background>
            <Landing />
          </Background>
        </div>

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
      <Footer />
    </div>
  </LayoutGlobal>
);

export default IndexPage;
