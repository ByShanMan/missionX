import React, {useState} from 'react';

import '../login-register-componentsCSS/topLoginSignUp.css';


export default function TopLoginSignUp({ activeButton, setActiveButton }) {    

        return (
            <div className="loginLinks">

                <a className={activeButton === "b1" ? "loginLink3 loginActive" : "loginLink3"} 
                    value="b1" 
                    href='#'
                    onClick={() => setActiveButton('b1')}>
                    LOG IN</a>
        
                <a className={activeButton === "b2" ? "signupLink3 signupActive" : "signupLink3"}
                  value="b2" 
                  href='#'
                  onClick={() => setActiveButton('b2')}>
                    SIGN UP</a>
                
            </div>
        )
    }
