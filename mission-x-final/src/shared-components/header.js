import React from 'react'

import logoWorks from '../headerIMGS/logoWorks.png';
import NZFlag from '../headerIMGS//NZFlag.png';
import MaoriFlag from '../headerIMGS//MaoriFlag.png';

import  Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container'


import "../componentsCSS/header.css"

export default function Header({selectedTeacher}) {
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
                                <Avatar>
                                <img src={selectedTeacher.imgURL} alt="lilAvatar"/>
                                </Avatar>
                            </div>
                            <div className="loginButtons">
                                <p>{selectedTeacher.first_name} {selectedTeacher.last_name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )   
}