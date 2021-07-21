import React from 'react'
import Header from '../shared-components/header'
import ProjectTitle from './projectTitle'
import CardDifficulty from './cardDifficulty'
import NumberOfCards from './numberOfCards'
import ProjectCards from './projectCards'
import SelectMenu from './selectMenu'
import BackUp from './backUp'
import Grid from '@material-ui/core/Grid';
import Footer from '../shared-components/footer'

import studentProjects from './studentProjectsArr';

import '../student-projects-page-componentsCSS/projectsPage.css'

function createProject(project){
    return (
    <ProjectCards
      title = {project.title}
      img = {project.src}
      subscription = {project.subscription}
      activityType = {project.activityType}
      difficultyLevel = {project.difficultyLevel}
      yearLevel = {project.yearLevel}
      subjectMatter = {project.subjectMatter}
    />
    )
  }

export default function ProjectsPage() {
    return (
        <div className="mainContainer">
          <Header />
          <ProjectTitle />
          <CardDifficulty />
          <SelectMenu />
          <NumberOfCards />

          <div className="projectCardArea"> 

            <Grid container spacing={10}>

              {studentProjects.map((item, i) => 

                <Grid item xs={4}>

                  {createProject(item)}

                </Grid>
                
              )}
            </Grid>
          
          </div>

            <BackUp />
            <Footer />
            
        </div>
    )
}