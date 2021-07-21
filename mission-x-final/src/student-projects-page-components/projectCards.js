import React from 'react'
import '../student-projects-page-componentsCSS/projectCards.css'


function ProjectCard(props) {
    return( 
        <div className="projectCard">

                <img className="imgCard" src={props.img} alt="Project"/>

                <h4>{props.title}</h4>

                <p className="cardDesc">{props.difficultyLevel} | {props.activityType}</p>

        </div>

)};

export default ProjectCard;
