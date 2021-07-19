import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  cardLayout: {
    display: "flex",
    justifyContent: "space-between",
  },
  backgroundImg: {
    height: "300px",
  },
  overlayImage: {
    marginLeft: "-305px",
    marginTop: "10px",
    height: "120px",
  },
  overlay: {
    marginLeft: "-305px",
    marginTop: "10px",
    height: "120px",
  },
  subtitle1: {
    fontSize: "30px",
    color: "white",
    textAlign: "center",
    fontFamily: "Nunito",
    fontWeight: "800",
  },
  subtitle2: {
    fontSize: "30px",
    color: "white",
    textAlign: "center",
    fontFamily: "Nunito",
    fontWeight: "800",
  },
});

export default function DigitalSkillsCard(props) {
  const styles = useStyles();

  return (
    <div className={styles.cardLayout}>
      <img
        className={styles.backgroundImg}
        src={props.backgroundImage}
        alt=""
      />
      <div className={styles.overlay}>
        <img className={styles.overlayImage} src={props.overlayImage} alt="" />
        <p className={styles.subtitle1}>{props.subtitle1}</p>
        <p className={styles.subtitle2}>{props.subtitle2}</p>
      </div>
    </div>
  );
}
