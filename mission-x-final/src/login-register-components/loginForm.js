import React from 'react';
import ExitButton from './exitButton';
import Avatar from './avatar';
import TeacherAvatar from './teacherAvatar';
import TopLoginSignUp from './topLoginSignUp';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

import '../login-register-componentsCSS/loginForm.css';
import Form1 from './form1';
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

export default function LoginForm({handleDialogClose}) {

    const classes = useStyles()

    const [activeButton, setActiveButton] = useState("b1");
    var changeForm = "";

        if(activeButton === "form1") {
            changeForm = <Form1 />
        } else {
            changeForm = <SignUpForm />
        }


        return (
            
            <div className="formContainer">
                <div className="modalContentL">
                    <div className="gridContainer"> 
                        <ExitButton handleDialogClose = {handleDialogClose} />
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
