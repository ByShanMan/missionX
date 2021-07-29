import React, { useState } from "react";

import LoginForm from "../login-register-components/loginForm";

import { Container } from "@material-ui/core/";
import { Dialog } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core";

import "../shared-componentsCSS/HomepageHeader.css";

const useStyles = makeStyles({
  paper: {
    flexDirection: "row",
    maxWidth: "800px",
  },
});

//set uo dialog
function PopUpLogin(props) {
  const styles = useStyles();

  return (
    <Dialog
      open={props.openDialog}
      onClose={props.closeDialog}
      classes={{ paper: styles.paper }}
    >
      <LoginForm handleDialogClose = {props.closeDialog} />
    </Dialog>
  );
}

export default function HomepageHeader() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div className="MainHeaderColour">
      <Container maxWidth="xl">
        <div className="headerBody">
          <div className="logo">
            <img
              className="logoPic"
              src="mission-x-images/shared-images/logoWorks.png"
              alt=""
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
                src="mission-x-images/shared-images/NZFlag.png"
                alt=""
              />
              <img
                src="mission-x-images/shared-images/MaoriFlag.png"
                alt=""
              />
            </div>
            <div className="loginContainer">
              <div className="avatar">
                <img
                  className="profileIcon"
                  src="mission-x-images/shared-images/profileIcon.png"
                  alt=""
                />
              </div>
              <div className="loginButtons">
                <p className="register" href="#">
                  REGISTER
                </p>
                <p>|</p>
                <p className="login" onClick={() => setDialogOpen(true)}>
                  LOGIN
                </p>
              </div>
              <PopUpLogin
                openDialog={dialogOpen}
                closeDialog={handleDialogClose}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
