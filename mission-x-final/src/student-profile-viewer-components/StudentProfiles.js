import React, {useState, useEffect,} from 'react';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

import { Link } from 'react-router-dom';
// import axios from 'axios';

const useStyles = makeStyles(
    {
    background: {
        marginTop: '8%',
        paddingTop: '2%',
        width:"80%",
        backgroundColor:"#b2e4fa",
        height:"700px",
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        background: '#D8F1FC',
        height:"600px",
        width:"80%",
    }
    }
);


export default function StudentProfiles({setSelectedUser}) {

    const styles = useStyles();

    const [studentUsers, setStudentUsers] = useState([]);

    useEffect( () => {
        axios.post('http://localhost:4000/', )
        .then((response) => {
            setStudentUsers(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    
    const handleSubmit = (e) => {
        console.log(e.currentTarget.value)
        setSelectedUser(studentUsers[e.currentTarget.value])
    } 
    
    return(
        <Container classes={{root: styles.background}} maxWidth="xl">
            <Container className={styles.box} maxWidth="lg">
                {studentUsers.map((studentUser, index) => (
                    <Link to="/profile-view">
                        <Button 
                            value={index} 
                            className={styles.profileImg} 
                            size="large" 
                            onClick={handleSubmit}>
                                <img src={studentUser.imgURL} alt ="avatar"/>
                        </Button>
                    </Link>
                )
                )
                }
            </Container>
        </Container>
    )
}