import React from 'react'
import { Avatar } from '@material-ui/core';

import "../shared-componentsCSS/header.css"

export default function Header() {
    return (

        <div className="header">

            <div className="logo">
            <img className="logoPic" src="projectsPageImages/logoWorks.png" alt="level up logo"/>
            </div>

            <div className="middleButtons">
                <a href="#">
                    HOME
                </a>
                <a href="#">
                    FEATURES
                </a>
                <a href="#">
                    TEACHERS
                </a>
            </div>

            <div className="flags">
                <div className="lang">
                    LANG
                </div>
                <img src="projectsPageImages/NZFlag.png" alt="nz flag" 
                />
                <img src="projectsPageImages/MaoriFlag.png" alt="maori flag" 
                />
            </div>

            <div className="avatar">
                    <Avatar
                        style=
                        {{
                            height: "20px",
                            width: "20px",
                        }}>
                    </Avatar>
                </div>
            <div className="loginButtons">
                <a className="register" href="#">
                    GORETTI ALANI
                </a>
            </div>
        </div>
    )   
}