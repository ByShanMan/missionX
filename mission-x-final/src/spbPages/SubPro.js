import React from 'react';
import '../spbCSS/SubPro.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


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

export default function SubmitProject() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} >
        <div className="subPro">
      
            <div className="sendPhoto">
              <img id="scratch1" src="/mission-x-images/project-builder/Screen Shot 2020-04-25 at 9.05.35 PM@2x.png" alt="submit"/>
           <h1>Submit project photo</h1>
           <p>After completing your project, take a screenshot of your project and upload it here.</p>
           <br/>
           <br/>
           <button className="sendPic"> <img src="/mission-x-images/project-builder/Icon material-photo@2x.png" alt="upload" /></button>
           
           <br/>
           <p2>Submit</p2>
            </div>


            <div className="callTeacher">
            <img id="teacher1" src="/mission-x-images/project-builder/annie-spratt-VFupoYdEYNs-unsplash.png" alt="teacherhelp"/>
            <h1>Show your teacher</h1>
            <p>If your teacher is in the same room as you, click the button below to let them know you are done.</p>
            <br/>
            <br/>
            <button className="callTeach"> <img src="/mission-x-images/project-builder/Icon awesome-chalkboard-teacher@2x.png" alt="upload" /></button>
            <br/>
            <p2>Call Teacher</p2>
            </div>

        </div>
      </Paper>


    </div>
  );
}






