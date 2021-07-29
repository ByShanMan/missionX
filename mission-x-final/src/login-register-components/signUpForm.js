import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Snackbar from "@material-ui/core/Snackbar";
import {useHistory} from 'react-router-dom'

import "../login-register-componentsCSS/signUpForm.css";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "900",
    paddingLeft: "55px",
    paddingRight: "55px",
    paddingTop: "4px",
    paddingBottom: "4px",
    borderRadius: "8px",
    backgroundColor: "#F4499B",
    color: "whitesmoke",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
}));

export default function SignUpForm() {
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    axios
      .post("http://localhost:4000/signup", {
        firstName: first_name,
        lastName: last_name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((response) => {
        setMessage("Sign Up Successful!");
        setOpen(true);
        console.log(response.status);
        console.log("Sign Up Successful!");
      })
      .catch((err) => {
        setMessage("Login Unsuccessful");
        setOpen(true);
        console.log("Sign Up Unsuccessful");
        console.log(err);
      });
  };

  const first_name = fullName.split(" ").slice(0, -1).join(" ");
  console.log(first_name);
  const last_name = fullName.split(" ").slice(1).join(" ");
  console.log(last_name);

  return (
    <div className="signUpInput">
      <input
        className="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        type="text"
        placeholder="Full Name"
      ></input>
      <br></br>
      <br></br>
      <input
        className="emailAddress"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email Address"
      ></input>
      <br></br>
      <br></br>
      <input
        className="newPassword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      ></input>
      <br></br>
      <br></br>
      <input
        className="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        placeholder="Confirm Password"
      ></input>
      <br></br>
      <br></br>
      <Button
        onClick={handleSignUp}
        className={classes.root}
        variant="contained"
      >
        Sign Up
      </Button>
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={3000}
          open={open}
          onClose={() => setOpen(false)}
          message={message}
        />
      </div>
    </div>
  );
}
