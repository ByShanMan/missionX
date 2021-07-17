import React from 'react';
import ExitButton from './exitButton';
import Avatar from './avatar';
import TeacherAvatar from './teacherAvatar';
import TopLoginSignUp from './topLoginSignUp';
// import BottomLoginSignUp from './bottomLoginSignUp';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { useState } from 'react';

import '../componentsCSS/loginForm.css';

const useStyles = makeStyles (theme => ({
    root: { 
        fontWeight: '900',
        paddingLeft: '55px',
        paddingRight: '55px',
        paddingTop: '4px',
        paddingBottom: '4px',
        borderRadius: '8px',
        backgroundColor: '#F4499B',
        color: 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto'
    }
}));

export default function LoginForm() {

const classes = useStyles()

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleLogin = () => {
    axios.post('http://localhost:4000/login', {
        email: email,
        password: password,
    })
    .then(response => {
        console.log(response.status)
        console.log("Login Successful")
    })
    .catch(err => {
        console.log("Login Unsuccessful")
        console.log(err)
    })
}

    return (
        <div className="formContainer">
            <div className="modalContentL">
                    <div className="gridContainer"> 
                        <ExitButton />
                        <Avatar />
                        <div className="signUp">
                            <TopLoginSignUp />
                            <br />
                            <br />                 
                            <input className="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Address"></input>
                            <br />
                            <input className="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"></input>            
                        </div> 
                        <Button onClick={handleLogin} className={classes.root} variant="contained">Log In</Button>             
                        
                    </div>
                    
            </div>

            <div className="modalContentR">
                    <div className="gridContainer">
                        <TeacherAvatar />
                        <div className="signUp">
                            <TopLoginSignUp />
                            <br />
                            <br />
                            <input className="email" type="text" placeholder="Email Address"></input>
                            <br />
                            <input className="password" type="password" placeholder="Password"></input>
                        </div>
                        <Button onClick={handleLogin} className={classes.root} variant="contained">Log In</Button> 
                    </div>
                
            </div>
        </div>
        
    )
}
