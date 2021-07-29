import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
  root: {
      display: "flex"
  },
  button: {
    backgroundColor: "orange",
    color: "white",

    paddingTop: "4px",
    paddingLeft: "30px",
    paddingRight: "30px",
    borderRadius: "7px",

    fontWeight: "bold",
    fontSize: "15px",

    minWidth: "130px",
    marginLeft: "1140px",
    marginTop: "50px",
    marginBottom: "100px"
  },
  buttonDash: {
    backgroundColor: "#F4499B",
    color: "white",

    paddingTop: "4px",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "7px",

    fontWeight: "bold",
    fontSize: "15px",

    minWidth: "130px",
    marginLeft: "125px",
    marginTop: "50px",
    marginBottom: "100px"
  },
});

function BackUp() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Button className={styles.button} size="small" variant="contained" href="projects">
        BACK TO TOP
      </Button>
      <div>
        <Button className={styles.buttonDash} size="small" variant="contained">
          BACK TO DASHBOARD
        </Button>
      </div>
    </div>
  );
}

export default BackUp;
