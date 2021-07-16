import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { createStyles, Grid } from '@material-ui/core';


import '../componentsCSS/studentProfiles.css';


const useStyles = makeStyles({
    card: {
      minHeight: 90,
      padding: 10,
      paddingBottom: 5,
      borderRadius: 20,
      height: '162px',
      width: '175px',
    },

    media: {
      position: 'relative',
      paddingTop: '10px',
      margin: '4px auto 0',
      width: '175px',
      // height: 100,
    },

    image: {
     
    }


  });
  
  export default function StudentProfiles(props) {
    const classes = useStyles();
  
    return (
    <div className="mainCardArea">
      <Grid container spacing={12}>

        <Grid>
      
          <Card className={classes.card} elevation={10}>

            <CardMedia className={classes.media} image={props.img} style={{height: '100px', width: '110px'}}/>
      
              <CardContent>
              <p className="name1">{props.firstName} {props.lastName}</p> 
              <Typography gutterBottom variant="h5" component="h2"></Typography>
              </CardContent>
          
          </Card> 

        </Grid>

      </Grid>

    </div>
    )}
