import React from 'react';

import Header from './header';
import AvatarCard from './avatarCard';
import InfoCard from './infoCard';
import Footer from '../shared-components/footer';

import '../componentsCSS/projectViewer.css';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        height:'1050px',
    },
    mainGrid: {
        paddingTop: '7%',
    },
    navButtons: {
        marginLeft: "60%",
        height: '50px',
    },
    projectButton: {
        minWidth: '200px',
        marginRight: '3em',
        borderRadius: "10px",

        fontSize: '16px',
        fontWeight: '700',
        color: 'white',
        background: 'rgb(229,171,44)'
    },
    dashButton: {
        minWidth: '200px',
        borderRadius: '10px',
        
        fontSize: '16px',
        fontWeight: '700',
        color: 'white',
        background: 'rgb(249,28,133)'
    }
});

export default function ProfileViewer({selectedUser}) {

    const styles = useStyles();

    return (
        <div className='projectView'>
            <Header selectedUser={selectedUser}/>
                <Container 
                maxWidth='xl' 
                className={styles.root}>
                    <Grid 
                    container spacing={12} 
                    className={styles.mainGrid}>
                        <Grid item xs={4}> 
                            <AvatarCard selectedUser={selectedUser}/>
                        </Grid>
                        <Grid item sm={8}>
                            <InfoCard selectedUser={selectedUser}/>
                        </Grid>
                    </Grid>
                    <div 
                    className={styles.navButtons}>
                        <Link to="./student-profile">
                            <Button
                            variant='contained'
                            className={styles.projectButton}>
                            back to profiles
                            </Button>
                        </Link>    
                            <Button
                            variant='contained'
                            className={styles.dashButton}>
                            back to dashboard 
                            </Button>
                    </div>
                </Container>
            <Footer />
        </div>
        )
}
