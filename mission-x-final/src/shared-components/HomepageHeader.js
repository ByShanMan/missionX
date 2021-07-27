import React, { useState } from "react";

import LoginForm from "../login-register-components/loginForm";

import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core";

import "../shared-componentsCSS/homepage-header.css";

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

export default function Header() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div className="header">
      <Container maxWidth="xl">
        <div className="headerBody">
          <div className="logo">
            <img
              className="logoPic"
              src="Mission-X-Images/shared-images/logoWorks.png"
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
                src="Mission-X-Images/shared-images/NZFlag.png"
                alt="nz flag"
              />
              <img
                src="Mission-X-Images/shared-images/MaoriFlag.png"
                alt="maori flag"
              />
            </div>
            <div className="loginContainer">
              <div className="avatar">
                <img
                  className="profileIcon"
                  src="Mission-X-Images/shared-images/profileIcon.png"
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
