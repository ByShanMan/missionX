import React from 'react'
import StudentProfiles from './student-profiles-components';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


import './student-profiles-componentsCSS/studentCards.css';

import studentInfo from './studentInfoArr';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft:'50px',
        paddingRight: '20px',
        position: 'relative',
        marginLeft: '5vh',
        marginTop: '10vh',
    }
    
})


function createProfile (profile){
    return(
        <StudentProfiles
        id = {profile.id}
        img = {profile.src}
        firstName = {profile.firstName}
        lastName = {profile.lastName}
        />
    )
}

export default function StudentCards() {
    const classes = useStyles();
    return (
        <div className="cardSpace">

            <div className="profiles">

            <Grid container spacing={10} className={classes.gridContainer}>

                {studentInfo.map((item, i) =>     

            <Grid item lg={2} className={classes.photo}>

                {createProfile(item)}

            </Grid>
         )}
            
            </Grid>
    </div>
        </div>
    )
}
