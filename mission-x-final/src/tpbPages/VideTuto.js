import React from 'react';
import '../tpbCSS/VideTuto.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

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
  const [ytvideo, setYtvideo] = useState([])
  
  
   useEffect(() => {
  axios.get("http://localhost:4000/video")
  .then(response => {
     setYtvideo(response.data)
  })
}, [ytvideo])

  return (
    <div className={classes.root}>
      <Paper elevation={0} >
        <div className="videoContent">
          
        {ytvideo.map(ytvideo => (
          <ReactPlayer
            url={ytvideo.video}/>
          
           ))} 
          


      </div>
      </Paper>





    </div>
  );
}







        
   
