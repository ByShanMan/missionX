import React, { useState, useEffect } from "react";
import '../tpbCSS/PrevProj.css';
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


export default function PreviewProject() {
  const classes = useStyles();
  
  const [preproj, setPreproj] = useState([])
  useEffect(() => {
 axios.get("http://localhost:4000/preproj")
 .then(response => {
   setPreproj(response.data)
  })
}, [preproj])

  return (
    <div className={classes.root}>
      <Paper elevation={0} >
        <div className="scratch">
        {preproj.map(preproj => (
               <img src={preproj.submission} alt=""/>
                ))}




      </div>
      </Paper>





    </div>
  );
}







        
   
