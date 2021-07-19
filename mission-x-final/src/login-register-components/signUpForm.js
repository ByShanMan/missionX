import React, {useState} from 'react'
import axios from "axios";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import "../login-register-componentsCSS/signUpForm.css";

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

export default function SignUpForm() {

    const classes = useStyles()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignUp = () => {
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

        <div className="signUpInput">
            <input className="fullName" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Full Name"></input>
            <br>
            </br>
            <br>
            </br>
            <input className="emailAddress" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Address"></input>
            <br>
            </br>
            <br>
            </br>
            <input className="newPassword" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"></input>
            <br>
            </br>
            <br>
            </br>
            <input className="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password"></input>
            <br>
            </br>
            <br>
            </br>
            <Button onClick={handleSignUp} className={classes.root} variant="contained">Sign Up</Button>             

        </div>
    )
}
