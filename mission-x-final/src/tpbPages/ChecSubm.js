import React from 'react';
import '../tpbCSS/ChecSubm.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
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

export default function CheckSubmissions() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
 axios.get("http://localhost:4000/check-submissions")
 .then(response => {
   setUsers(response.data)
  })
}, [users])

const classes = useStyles();




  return (
    <div className={classes.root}>
      <Paper elevation={0} >
        <div className="checkSubm">
          
          <div className="checkSubmTitle">
          <h1>PROJECT SUBMISSIONS</h1>
          <button><img src="./mission-x-images/project-builder/Icon material-file-download@2x.png" alt="download"/>DOWNLOAD FILES</button>
          <button><img src="./mission-x-images/project-builder/Icon material-done@2x.png" alt="mark"/>MARK AS COMPLETE PROJECT</button>
          </div>
          
          <div className="checkSubmCards">
            {users.map(user => ( 
              <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
             <Card>
               <img src={user.profile_pic} id="profile" alt="profile"/>
              <p>{user.first_name} submitted their project</p>
                <img id="submission" src={user.submission} alt="submissions"/>
               <p2>{user.date_submitted}</p2>
              </Card>
             
              </label>
            ))}

           </div>
         
      
      </div>
      </Paper>

    </div>
  );
}
