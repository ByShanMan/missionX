import React from 'react';
import '../tpbCSS/VideTuto.css';
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


export default function VideoTutorial() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} >
        <div className="videoContent">
      <img src="Mission X Images/Project Builder/Screen Shot 2020-04-25 at 11.16.17 PM.png" alt="video"/>
       {/* will actually need to link the video in here */}
      </div>
      </Paper>





    </div>
  );
}







        
   
