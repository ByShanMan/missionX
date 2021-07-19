import React from 'react';
import ExitButton from './exitButton';
import Avatar from './avatar';
import TeacherAvatar from './teacherAvatar';
import TopLoginSignUp from './topLoginSignUp';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { useState } from 'react';

import '../login-register-componentsCSS/loginForm.css';
import LoginForm1 from './LoginForm1';
import SignUpForm from './signUpForm';

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
    const [activeButton, setActiveButton] = useState("b1");
    var changeForm = "";

    // const handleLogin = () => {
    //     axios.post('http://localhost:4000/login', {
    //         email: email,
    //         password: password,
    //     })
    //     .then(response => {
    //         console.log(response.status)
    //         console.log("Login Successful")
    //     })
    //     .catch(err => {
    //         console.log("Login Unsuccessful")`
    //         console.log(err)
    //     })
    //     }

        if(activeButton === "form1") {
            changeForm = <LoginForm1 />
        } else {
            changeForm = <SignUpForm />
        }


        return (
            
            <div className="formContainer">
                <div className="modalContentL">
                    <div className="gridContainer"> 
                        <ExitButton />
                        <Avatar />
                        <div className="signUp">
                            <TopLoginSignUp activeButton={activeButton} setActiveButton={setActiveButton}/>
                            {changeForm}
                        </div>
                     </div>   
                </div>

                <div className="modalContentR">
                    <div className="gridContainer">
                        <TeacherAvatar />
                        <div className="signUp">
                            <TopLoginSignUp activeButton={activeButton} setActiveButton={setActiveButton}/>
                            {changeForm}
                        </div>
                    </div>
                </div>
            </div>
        
        )
}  
