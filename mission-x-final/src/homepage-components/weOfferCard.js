import React from "react";

import { Container } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  cardLayout: {
    display: "flex",
  },
  backgroundImg: {
    height: "120",
    width: "120",
  },
  overlay: {
    height: "80",
    width: "80",
  },
  subtitle: {
    fontSize: "14px",
    fontWeight: "700",
  },
});

export default function WeOfferCard({ props }) {
  const styles = useStyles();

  return (
    <Container>
      <Card>
        <CardContent className={styles.cardLayout}>
          <img
            className={styles.backgroundImg}
            src={props.backgroundImg}
            alt="background image"
          />
          <img className={styles.overlay} src={props.overlay} alt="overlay" />
          <p className={styles.subtitle}>{props.title}</p>
        </CardContent>
      </Card>
    </Container>
  );
}