import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ProjectsContainer from "../../containers/projects/ProjectsContainer";
import ProjectsImg from "./ProjectsImg";
import { competitiveSites } from "../../portfolio";
import "./Projects.css";
import { Fade } from "react-reveal";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
        <div className="projects-main">
          <Header theme={this.props.theme} />
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="heading-div">
                <div className="heading-img-div">
                  {/* <img
  									src={require("../../assests/images/education.svg")}
  									alt=""
  								/> */}
                  <ProjectsImg theme={theme} />
                </div>
                <div className="heading-text-div">
                  <h1 className="heading-text" style={{ color: theme.text }}>
                    Projects
                  </h1>
                </div>
              </div>
            </Fade>
            <ProjectsContainer theme={this.props.theme} />
          </div>
          <Footer theme={this.props.theme} />
          <TopButton theme={this.props.theme} />
        </div>
/*
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                { <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> }
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/ashutosh1919"
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>*/
    );
  }
}

export default Projects;
