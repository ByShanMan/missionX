import React from 'react';
import '../spbCSS/MakePro.css';
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

export default function MakeProject() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} >
        <div className="makeScratch">
        <h1>Make a Scratch Project!</h1>
        {/* <iframe src="https://scratch.mit.edu/projects/editor/?tutorial=getStarted"></iframe> */}
        <form action="https://scratch.mit.edu/projects/editor/?tutorial=getStarted" method="get" target="_blank">
          <button>
          <img src="/mission-x-images/project-builder/Screen Shot 2020-04-25 at 9.05.35 PM@2x.png"/> 
          </button>
        </form>
        <h2>!CLICK ME TO MAKE A SCRATCH PROJECT!</h2>
        </div>
      </Paper>





    </div>
  );
}
















// import React from 'react'

// const MakeProject = () => {
//     return (
//         <div className="makeProject">
//            <div>
           
//                 <img style={{width:"auto", height:"auto"}} src="Mission X Images/Project Builder/Screen Shot 2020-04-25 at 9.05.35 PM.png"  alt="Scratch"/>
//         </div>
//         </div>
//     )
// }

// export default MakeProject