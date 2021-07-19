import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  cardLayout: {
    display: "flex",
    justifyContent: "center",
  },
  backgroundImg: {
    height: "230px",
  },
  overlay: {
    marginLeft: "-175px",
    marginTop: "10px",
    height: "120px",
  },
  subtitle: {
    color: "white",
    textAlign: "center",
    marginLeft: "-230px",
    fontSize: "22px",
    fontWeight: "700",
  },
});

export default function WeOfferCard(props) {
  const styles = useStyles();

  return (
    <div className={styles.cardLayout}>
      <img
        className={styles.backgroundImg}
        src={props.backgroundImage}
        alt=""
      />
      <div>
        <img className={styles.overlay} src={props.overlayImage} alt="" />
        <p className={styles.subtitle}>{props.title}</p>
      </div>
    </div>
  );
}
