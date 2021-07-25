import React from 'react';
import '../spbCSS/SubPro.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

//// // this shits got a photo, text, divider and 2 buttons

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

export default function SubmitProject() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} >
        <div className="subPro">
      <Grid container spacing={4}>
          
          <Grid item xs={12} sm={5}>
            <div className="sendPhoto">
              <img id="scratch1" src="Mission X Images/Project Builder/Screen Shot 2020-04-25 at 9.05.35 PM@2x.png" alt="videoss"/>
           <h1>Submit project photo</h1>
           <p>After completing your project, take a screenshot of your project and upload it here.</p>
           <button className="sendPic" img src="./Mission X Images/Project Builder/Icon material-photo@2x.png" alt="upload">Send Photo</button>
            </div>
          </Grid>

          <Grid item xs={12} sm={2}>
            <div className="dividerLine">
            <img id="linedivider" src="Mission X Images/Project Builder/Line 6.png" alt="line"/>
          

            </div>
          </Grid>

          <Grid item xs={12} sm={5}>
            <div className="callTeacher">
            <img id="teacher1" src="Mission X Images/Project Builder/annie-spratt-VFupoYdEYNs-unsplash.png" alt="teacherhelp"/>
            <h1>Show your teacher</h1>
            <p>If your teacher is in the same room as you, click the button below to let them know you are done.</p>
            <button className="callTeach" img src="./Mission X Images/Project Builder/Icon material-photo@2x.png" alt="upload">Call Teacher</button>
            
            </div>
          </Grid>
        </Grid>
        </div>
      </Paper>


    </div>
  );
}






