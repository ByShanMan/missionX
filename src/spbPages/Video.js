import React from 'react';
// import './Styles/Video.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "25px",
      width: "auto",
      height: "710px",
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







        
   
