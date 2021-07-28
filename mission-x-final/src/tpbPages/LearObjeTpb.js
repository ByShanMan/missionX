import React from "react";
import "../tpbCSS/LearObjeTpb.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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

export default function LearningObjectives() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div className="LOHead">
              <h1>Explore Scratch Blocks</h1>
              <p>Learn the basic function of some basic scratch blocks such as"say", "wait", "go to" and "hide".
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <div className="LookBlocks">
              <h2>Look Blocks</h2>
              <img id="lookblocklong"
                src="Mission X Images/Project Builder/Screen Shot 2020-04-29 at 9.09.52 PM.png"
                alt="lookblocks"/>
              <img id="lookblockshort"
                src="Mission X Images/Project Builder/Screen Shot 2020-04-25 at 11.30.04 PM.png"
                alt="lookblockthingy" />
              <img id="lookblockshortest"
                src="Mission X Images/Project Builder/Screen Shot 2020-04-25 at 11.32.03 PM.png"
                alt="lookblockthingest"/>
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <div className="ControlBlocks">
              <h2>Control Blocks</h2>
              <img id="controlblocklong"
                src="Mission X Images/Project Builder/Screen Shot 2020-04-29 at 9.10.19 PM.png"
                alt="controlblocks"/>
              <img id="controlblockshort"
                src="Mission X Images/Project Builder/Screen Shot 2020-04-25 at 11.30.43 PM.png"
                alt="controlblocksthingy" />
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <div className="MotionBlocks">
              <h2>Motion Blocks</h2>
              <img id="motionblocklong"
                src="Mission X Images/Project Builder/Screen Shot 2020-04-29 at 9.10.04 PM.png"
                alt="motionblocks"/>
              <img id="controlblockshort"
                src="Mission X Images/Project Builder/Screen Shot 2020-04-25 at 11.30.57 PM.png"
                alt="motionblocksthingy"/>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
