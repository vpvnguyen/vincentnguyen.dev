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
  page: {
    overflow: "hidden",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1280px",
  },
  landing: {
    flex: "1 100%",
    textAlign: "center",
  },
  leftColumn: {
    flex: 2,
    padding: "1rem 2rem 1rem 2rem",
  },
  rightColumn: {
    flex: 1,
    padding: "1rem 2rem 1rem 2rem",
  },
};

const IndexPage = () => (
  <LayoutGlobal>
    <div style={style.page}>
      <div style={style.container}>
        <div style={style.landing}>
          <Background>
            <Landing />
          </Background>
        </div>

        <div style={style.content}>
          <div style={style.leftColumn}>
            <ProfessionalProjects />
            <GithubProjects />
          </div>
          <div style={style.rightColumn}>
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
