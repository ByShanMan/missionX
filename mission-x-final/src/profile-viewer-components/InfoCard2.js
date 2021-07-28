import React from 'react'

import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        height: '750px',
        borderRadius: "27px",
        marginTop: 'em',
        marginRight: "20%",
        marginLeft: '12%',
        marginBottom:"4em"
    },
    infoCard: {
        padding: '1em',
    },
    iCardFullName: {
        color: 'rgb(112,112,112)',
        fontWeight: "bold",
        fontSize: "60px",
        marginLeft: 'auto',
        marginTop: "50px",
    },
    iCardGrid: {
        height: '100%',
        marginLeft:"2em",
        marginTop: '1.5em',
    },
    infoL:{
        color: 'rgb(165,165,165)',
        fontSize: "28px",
        fontWeight: "bold",
        paddingTop: "16px",
     },
    infoR:{
        color: 'rgb(112,112,112)',
        fontSize: "28px",
        paddingTop: "16px",
        marginLeft: '3em',
     }
}); 

export default function InfoCard(props) {
    const styles = useStyles();

    return (
        <Card
        className={styles.root}>
            <CardContent  
            className={styles.infoCard}>
                <Typography 
                align='center' 
                className={styles.iCardFullName}>
                    {props.fName} {props.lName}
                </Typography>
                <Grid 
                container spacing={6} 
                className={styles.iCardGrid}>
                    <Grid item sm={5}>
                        <Typography className={styles.infoL}>
                            <p>School</p>
                            <p>Teacher</p>
                            <p>Date of Birth</p>
                            <p>Contact No</p>
                            <p>Email Address</p>
                        </Typography>
                    </Grid>                         
                    <Grid item xs={7} >
                        <Typography className={styles.infoR}>
                            <p>{props.school}</p>
                            <p>{props.teacher}</p>
                            <p>{props.date}</p>
                            <p>{props.contact}</p>
                            <p>{props.email}</p>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
