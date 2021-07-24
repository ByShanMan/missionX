import React, { useState, useEffect } from 'react';

import Header from '../shared-components/header';
import AvatarCard from './avatarCard';
import InfoCard from './infoCard';
import Footer from '../shared-components/footer';

import '../student-profile-viewer-componentsCSS/projectViewer.css';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

import { Link } from 'react-router-dom';
import axios from 'axios';

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

export default function ProfileViewer({match}) {

    const styles = useStyles();
    const [selectedStudent, setSelectedStudent] = useState([])

    useEffect( () => {
        axios.post('http://localhost:5000/profile-viewer', {
            user_id: match.params.user_id
        })
        .then((response) => {
            console.log(response.data)
            setSelectedStudent(response.data)
        })
        .catch(err => 
            console.log(err))
    }, [])

    return (
        <div className='projectView'>
            <Header/>
                <Container 
                maxWidth='xl' 
                className={styles.root}>
                    <Grid 
                    container spacing={12} 
                    className={styles.mainGrid}>
                        <Grid item xs={4}> 
                            <AvatarCard selectedStudent={selectedStudent}/>
                        </Grid>
                        <Grid item sm={8}>
                            <InfoCard selectedStudent={selectedStudent}/>
                        </Grid>
                    </Grid>
                    <div 
                    className={styles.navButtons}>
                        <Link to="./student-profiles">
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
