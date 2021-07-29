import React from "react";
import "../tpbCSS/LearObjeTpb.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';

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
  const [users, setUsers] = useState([])
  
  
  useEffect(() => {
 axios.get("http:/localhost:4000/users")
 .then(response => {
   setUsers(response.data)
  })
}, [users])


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>

        
     
      </Paper>
    </div>
  );
}
