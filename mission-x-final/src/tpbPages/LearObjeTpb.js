import React from "react";
import "../tpbCSS/LearObjeTpb.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import  { useState, useEffect } from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "1571px",
      height: "850px",

      marginLeft: "30px",
      marginRight: "83px",
      marginTop: "70px",
      marginBottom: "50px",
      
      borderRadius: "30px",
      backgroundColor: "#DAF2FE",
    },
  },
}));

export default function LearningObjectives() {
  const [learno, setLearno] = useState([])
  
  
  useEffect(() => {
 axios.get("http://localhost:4000/learningobj")
 .then(response => {
   setLearno(response.data)
  })
}, [learno])


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
      
      {learno.map(learn => ( 
              <div className="learningObjContent">
              <h1>{learn.learning_objective}</h1>
               <p>{learn.instructions}</p>
               <img src={learn.project_image}/>



              </div>
              
          ))}
        
     
      </Paper>
    </div>
  );
}
