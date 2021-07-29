import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  cardLayout: {
    display: "flex",
    width: "470px",
  },
  backgroundImg: {
    height: "310px",
  },
  overlay: {
    textAlign: "center",
    marginLeft: "-340px",
    marginTop: "10px",
  },
  overlayImage: {
    marginTop: "3px",
    height: "150px",
  },
  overlayTitle1: {
    fontSize: "30px",
    color: "white",
    fontWeight: "700",
  },
  overLayTitle2: {
    fontSize: "30px",
    color: "white",
    fontWeight: "700",
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
        <div>
          <img
            className={styles.overlayImage}
            src={props.overlayImage}
            alt=""
          />
          <p className={styles.overlayTitle1}>{props.overlayTitle1}</p>
          <p className={styles.overLayTitle2}>{props.overlayTitle2}</p>
        </div>
      </div>
    </div>
  );
}
