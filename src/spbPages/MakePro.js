import React from 'react';
import '../spbCSS/MakePro.css';
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

export default function MakeProject() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} >
        <div className="makeScratch">
        <img src="./Mission X Images/Project Builder/Screen Shot 2020-04-25 at 9.05.35 PM@2x.png" />
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