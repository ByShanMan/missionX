import React from 'react'
import logoWorks from '../homepageIMG/headerIMGS/logoWorks.png';
import NZFlag from '../homepageIMG/headerIMGS/NZFlag.png';
import MaoriFlag from '../homepageIMG/headerIMGS/MaoriFlag.png';
import  Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container'

import "../componentsCSS/header.css"

export default function Header() {
    return (

        <div className="header">
            <Container maxWidth="xl">
                <div className="headerBody">
                    <div className="logo">
                    <img className="logoPic" src={logoWorks} alt="level up logo"/>
                    </div>
                    <div className="middleButtons">
                        <p>HOME</p>
                        <p>FEATURES</p>
                        <p>TEACHERS</p>
                    </div>
                    <div className="rightEdgeStuff">
                        <div className="flags">
                            <div className="lang">LANG</div>
                            <img src={NZFlag} alt="nz flag" />
                            <img src={MaoriFlag} alt="maori flag" />
                        </div>
                        <div className="loginContainer">
                            <div className="avatar">
                                <img className="profileIcon" src="homepageIMG/headerIMGS/profileIcon.png" />
                            </div>
                            <div className="loginButtons">
                                <p className="register" href="#">
                                    REGISTER</p>
                                <p>|</p>
                                <p className="login" href="#">
                                    LOGIN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )   
}