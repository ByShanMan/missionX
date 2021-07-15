import React from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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

export default function InfoCard({selectedUser}) {
    const styles = useStyles();

    return (
        <Card
        className={styles.root}>
            <CardContent  
            className={styles.infoCard}>
                <Typography 
                variant='h2'
                align='center' 
                className={styles.iCardFullName}>
                    {selectedUser.first_name} {selectedUser.last_name}
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
                            <p>{selectedUser.school}</p>
                            <p>{selectedUser.teacher}</p>
                            <p>{selectedUser.date_of_birth}</p>
                            <p>{selectedUser.contact_number}</p>
                            <p>{selectedUser.email}</p>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
