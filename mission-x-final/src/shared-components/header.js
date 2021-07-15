import React from 'react'

import logoWorks from '../headerIMGS/.png';
import NZFlag from '../headerIMGS/';
import MaoriFlag from '..';

import  Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container'


import "../componentsCSS/header.css"

export default function Header({selectedUser}) {
    return (

        <div className="header">
            <Container maxWidth="xl">
                <div className="headerBody">
                    <div className="logo">
                    <img className="logoPic" src='Mission-X-Images/sharedImages/headerIMGS/logoWorks.png' alt="level up logo"/>
                    </div>
                    <div className="middleButtons">
                        <p>HOME</p>
                        <p>FEATURES</p>
                        <p>TEACHERS</p>
                    </div>
                    <div className="rightEdgeStuff">
                        <div className="flags">
                            <div className="lang">LANG</div>
                            <img src='Mission-X-Images/sharedImages/headerIMGS/NZFlag.png' alt="nz flag" />
                            <img src='Mission-X-Images/sharedImages/headerIMGS/MaoriFlag.png' alt="maori flag" />
                        </div>
                        <div className="loginContainer">
                            <div className="avatar">
                                <Avatar>
                                <img src={selectedUser.imgURL} alt="lilAvatar"/>
                                </Avatar>
                            </div>
                            <div className="loginButtons">
                                <p>{selectedUser.first_name} {selectedUser.last_name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )   
}