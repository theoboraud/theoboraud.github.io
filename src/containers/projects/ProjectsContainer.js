import React, { Component } from "react";
import "./ProjectsContainer.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { projects } from "../../portfolio";
import { Fade } from "react-reveal";

class ProjectsContainer extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="projects">
        <div className="projects-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="projects-header" style={{ color: theme.text }}>
              My Projects
            </h1>
          </Fade>
        </div>
        <div className="projects-body-div">
          {projects.projects.map((projects) => {
            return <DegreeCard degree={projects} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default ProjectsContainer;
