import React from 'react';
// import '.../Styles/Instructions.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import Button from '@material-ui/core/Button'

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

export default function Instructions() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} >
          
        <div className="instructions">
        
            <button className="arrowLeftButt">L</button>
        
          

        <div className="middleInfo">
        <h1>1. JOIN SCRATCH</h1>
         <p>If you haven't used Scratch before, you weill need to join Scratch first.</p><br/>
         <p>Go to https://scratch.mit.edu. Click on <a href={"https://scratch.mit.edu/join"}>Join Scratch.</a> </p>
         <img className="pic" src="Mission X Images/Project Builder/Screen Shot 2020-04-25 at 9.10.36 PM.png" alt="screenshot"/>
         <p>Follow the instructions to join. You will need a username and a password that you will remember.  If possible, you
           should also verify your email address so that you can Share projects later. Ask you teacher to help with this step if
           you don't have an email address, or if you are not sure what to do.</p></div>

  
          <button className="arrowRightButt">R</button>
        
 
          </div>
      
            
      </Paper>





    </div>
  );
}


// import React from 'react';
// const Instructions = () => {
// return( 
//     <div className="joinScratch">
//         <h1>1. JOIN SCRATCH</h1>
//         <p>If you haven't used Scratch before, you weill need to join Scratch first.</p><br/>
//         <p>Go to https://scratch.mit.edu. Click on <a href={"https://scratch.mit.edu/join"}>Join Scratch.</a> </p>
//         <img className="pic" src="Mission X Images/Project Builder/Screen Shot 2020-04-25 at 9.10.36 PM.png" alt="screenshot"/>
//         <p>Follow the instructions to join. You will need a username and a password that you will remember.  If possible, you
//             should also verify your email address so that you can Share projects later. Ask you teacher to help with this step if
//             you don't have an email address, or if you are not sure what to do.</p>
//     </div>
  

// );
// }

// export default Instructions;
