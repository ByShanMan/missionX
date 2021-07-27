import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/styles";

import "../login-register-componentsCSS/loginForm.css";

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

function Form1() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("http://localhost:4000/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        setMessage("Login Successful!");
        setOpen(true);
        console.log(response.status);
        console.log("Login Successful");
      })
      .catch((err) => {
        setMessage("Login Unsuccessful");
        setOpen(true);
        console.log("Login Unsuccessful");
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <input
          className="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email Address"
        ></input>
        <br />
        <input
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        ></input>
      </div>
      <div>
        <Button
          onClick={handleLogin}
          className={classes.root}
          variant="contained"
        >
          Log In
        </Button>
      </div>
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={3000}
          open={open}
          onClose={() => setOpen(false)}
          message={message}
        />
      </div>
    </>
  );
}

export default Form1;
