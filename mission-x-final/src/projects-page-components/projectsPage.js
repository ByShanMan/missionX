import React from "react";
import LoggedInHeader from "../shared-components/LoggedInHeader";
import ProjectTitle from "./projectTitle";
import CardDifficulty from "./cardDifficulty";
import NumberOfCards from "./numberOfCards";
import ProjectCards from "./projectCards";
import SelectMenu from "./selectMenu";
import BackUp from "./backUp";
import MainFooter from "../shared-components/MainFooter";

import Grid from "@material-ui/core/Grid";

import studentProjects from "./studentProjectsArr";

import "../projects-page-componentsCSS/projectsPage.css";

function createProject(project) {
  return (
    <ProjectCards
      title={project.title}
      img={project.src}
      subscription={project.subscription}
      activityType={project.activityType}
      difficultyLevel={project.difficultyLevel}
      yearLevel={project.yearLevel}
      subjectMatter={project.subjectMatter}
    />
  );
}

export default function ProjectsPage() {
  return (
    <div className="mainContainer">
      <LoggedInHeader />
      <ProjectTitle />
      <CardDifficulty />
      <div className="main2">
        <SelectMenu />
        <div className="projectCardArea">
          <Grid container spacing={10}>
            {studentProjects.map((item, i) => (
              <Grid item xs={4}>
                {createProject(item)}
              </Grid>
            ))}
          </Grid>
        </div>

        <NumberOfCards />
      </div>

      <BackUp />
      <MainFooter />
    </div>
  );
}
