import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";

import "../shared-componentsCSS/header.css";

export default function Header() {
  return (
    <div className="header">
      <Container maxWidth="xl">
        <div className="headerBody">
          <div className="logo">
            <img className="logoPic" src="/mission-x-images/shared-images/logoWorks.png" alt="level up logo"/>
          </div>
          <div className="middleButtons">
            <p>HOME</p>
            <p>FEATURES</p>
            <p>TEACHERS</p>
          </div>
          <div className="rightEdgeStuff">
            <div className="flags">
              <div className="lang">LANG</div>
              <img src="/mission-x-images/shared-images/NZFlag.png" alt="nz flag" />
              <img src="/mission-x-images/shared-images/MaoriFlag.png"alt="maori flag" />
            </div>
            <div className="loginContainer">
              <div className="avatar">
                <Avatar>
                  {/* <img src={loginUser.profile_pic} alt="lilAvatar" /> */}
                </Avatar>
              </div>
              <div className="loginButtons">
                <p>
                  {/* {loginUser.first_name} {loginUser.last_name} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
