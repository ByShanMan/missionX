import React, { useState, useEffect } from 'react';
import '../tpbCSS/InstTpb.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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


export default function Instructions() {
  const classes = useStyles();

  const [instructions, setInstructions] = useState([])
  useEffect(() => {
    axios.get("http://localhost:4000/instructions")
    .then(response => {
      setInstructions(response.data)
     })
   }, [instructions])
   


  return (
    <div className={classes.root}>
      <Paper elevation={0}>
           
        
        {instructions.map(instructions => ( 
              <div className="instruction">
              <h1>{instructions.learning_objective}</h1>
               <p>{instructions.instructions}</p>
               <img src={instructions.project_pic}/>



              </div>
        ))}
      </Paper>

    </div>
  );
}



