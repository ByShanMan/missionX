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

        //     setStudentUsers([
        //     { 
        //          id: 1,
        //          imgURL:'profile_pics/aiden.png',
        //          first_name:"Aie",
        //          teacher: "Jasmina Salvador", 
        //          last_name:"L'trelle", 
        //          school:"Homai",
        //          date_of_birth:"2007-04-26",
        //          contact_number: "0225324845",
        //          email:"big_trelle@homai.edu", 
        //     },
        //     { 
        //         id: 2,
        //         imgURL: 'profile_pics/lisa.png',
        //         first_name:"Lizzan",
        //         teacher: "Jasmina Salvador", 
        //         last_name:"D'man", 
        //         school:"Homai",
        //         date_of_birth:"2010-03-21",
        //         contact_number: "0229876545",
        //         email:"d_mansizzle@homai.edu", 
        //     },
        //     { 
        //         id: 3,
        //         imgURL: 'profile_pics/courtney.png',
        //         first_name:"Tinoh",
        //         teacher: "Jasmina Salvador", 
        //         last_name:"Crew", 
        //         school:"Homai",
        //         date_of_birth:"2007-05-11",
        //         contact_number: "0228573845",
        //         email:"thisyocrew@homai.edu", 
        //     }
        // ])
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