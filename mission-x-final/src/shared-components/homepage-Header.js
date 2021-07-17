import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";

import "../shared-componentsCSS/homepage-header.css";

export default function Header() {
  return (
    <div className="header">
      <Container maxWidth="xl">
        <div className="headerBody">
          <div className="logo">
            <img
              className="logoPic"
              src="/Mission-X-Images/homepageImages/logoWorks.png"
              alt="level up logo"
            />
          </div>
          <div className="middleButtons">
            <p>HOME</p>
            <p>FEATURES</p>
            <p>TEACHERS</p>
          </div>
          <div className="rightEdgeStuff">
            <div className="flags">
              <div className="lang">LANG</div>
              <img
                src="/Mission-X-Images/homepageImages/NZFlag.png"
                alt="nz flag"
              />
              <img
                src="/Mission-X-Images/homepageImages/MaoriFlag.png"
                alt="maori flag"
              />
            </div>
            <div className="loginContainer">
              <div className="avatar">
                <img
                  className="profileIcon"
                  src="homepageIMG/headerIMGS/profileIcon.png"
                />
              </div>
              <div className="loginButtons">
                <p className="register" href="#">
                  REGISTER
                </p>
                <p>|</p>
                <p className="login" href="#">
                  LOGIN
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
