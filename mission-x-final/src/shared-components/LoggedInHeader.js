import React, { useState, useEffect } from "react";

import { Avatar } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

import "../shared-componentsCSS/LoggedInHeader.css";
import axios from "axios";

export default function LoggedInHeader() {
  const [loggedInUsers, setLoggedInUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/profile/" + window.location.search)
      .then((response) => {
        console.log(response.data);
        setLoggedInUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mainHeaderColour">
      <Container maxWidth="xl">
        <div className="headerBody">
          <div className="logo">
            <img
              className="logoPic"
              src="/mission-x-images/shared-images/logoWorks.png"
              alt="level up logo"
            />
          </div>
          <div className="middleButtons">
            <Link to="/" style={{ textDecoration: "none" }}>
              <p>HOME</p>
            </Link>
            <p>FEATURES</p>
            <p>TEACHERS</p>
          </div>
          <div className="rightEdgeStuff">
            <div className="flags">
              <div className="lang">LANG</div>
              <img
                src="/mission-x-images/shared-images/NZFlag.png"
                alt="nz flag"
              />
              <img
                src="/mission-x-images/shared-images/MaoriFlag.png"
                alt="maori flag"
              />
            </div>
            <div className="loginContainer">
              <div className="avatar">
                {loggedInUsers.map(function (loggedInUser, index) {
                  return (
                    <div key={index}>
                      <img className="miniAvatar" src={loggedInUser.profile_pic} />
                    </div>
                  );
                })}
              </div>
              <div className="loginButtons">
                {loggedInUsers.map(function (loggedInUser, index) {
                  return (
                    <div key={index}>
                      <p>
                        {loggedInUser.first_name} {loggedInUser.last_name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
